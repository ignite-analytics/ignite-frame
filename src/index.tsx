import * as React from "react";

import { IFrameOptions } from "./interfaces";

interface Props {
    token: string;
    options: IFrameOptions;
}

interface State {
    tokenSet: boolean;
}

const defaultBaseUrl = "https://app.ignite.no";

/**
 *  IFrame wrapper for rendring Ignite Dashboards into an internal react application
 *
 *  @property {string}          token:          A valid JWT Token to authenticate against the Ignite Platform
 *  @property {IFrameOptions}   options:
 *
 */

class IgniteFrame extends React.Component<Props, State> {
    /**
     * Sends the token to the iFrame
     */
    handleLoad = (event: React.SyntheticEvent<HTMLIFrameElement>) => {
        const iFrameWindow = event.currentTarget.contentWindow;
        iFrameWindow &&
            iFrameWindow.postMessage(
                [
                    "setData",
                    {
                        token: this.props.token,
                        options: {
                            baseUrl: defaultBaseUrl,
                            ...this.props.options,
                        },
                    },
                ],
                "*"
            );
    };

    render() {
        const { options, token, ...rest } = this.props;
        return (
            <iframe
                src={`${options.baseUrl || defaultBaseUrl}/departments/${options.departmentId}/dashboards/${
                    options.dashboardId
                }/?embedded`}
                onLoad={this.handleLoad}
                height="700"
                title="Embedded Ignite Procurement dashboard"
                frameBorder={0}
                scrolling="yes"
                marginHeight={0}
                marginWidth={0}
                style={{
                    width: "1px",
                    height: "100%",
                    minWidth: "100%",
                }}
                {...rest}
            />
        );
    }
}

export default IgniteFrame;
