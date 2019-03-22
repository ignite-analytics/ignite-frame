import * as React from "react";

import "./style.css";
import { IFrameOptions } from "./interfaces";

interface Props {
    token: string;
    options: IFrameOptions;
}

interface State {
    tokenSet: boolean;
}

/**
 *  IFrame wrapper for rendring Ignite Dashboards into an internal react application
 *
 *  @property {string}          token:          A valid JWT Token to authenticate against the Ignite Platform
 *  @property {IFrameOptions}   options:
 *
 */

class IgniteFrame extends React.Component<Props, State> {
    static defaultProps = {
        options: {
            baseUrl: "https://app.ignite.no",
        },
    };

    url: string = `${this.props.options.baseUrl}/departments/${this.props.options.departmentId}/dashboards/${
        this.props.options.dashboardId
    }/?embedded`;

    state: State = { tokenSet: false };

    componentWillMount() {
        window.addEventListener("load", this.handleLoad);
    }

    /**
     * Updating component if the token is sent
     */
    shouldComponentUpdate(_nextProps: Props, nextState: State) {
        let shouldUpdate: boolean = this.state.tokenSet !== nextState.tokenSet;
        if (shouldUpdate) {
            // @ts-ignore
            document.getElementById("dashboardIFrame").src += "";
        }
        return shouldUpdate;
    }

    /**
     * Sends the token to the iFrame
     */
    handleLoad = () => {
        // @ts-ignore
        let iFrameWindow = document.getElementById("dashboardIFrame").contentWindow;

        iFrameWindow.postMessage(
            JSON.stringify({
                token: this.props.token,
                options: this.props.options,
            }),
            "*"
        );
        this.setState({ tokenSet: true });
    };

    render() {
        return (
            <iframe
                id="dashboardIFrame"
                src={this.url}
                height="700"
                frameBorder={0}
                scrolling="yes"
                marginHeight={0}
                marginWidth={0}
            />
        );
    }
}

export default IgniteFrame;
