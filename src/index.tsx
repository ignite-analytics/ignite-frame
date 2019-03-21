import * as React from "react";

import "./style.css";

type Props = {
    token: string;
    dashboardId: number;
    departmentId: number;
    background: string;
    hideTitle?: boolean;
    baseUrl?: string;
};

type State = {
    tokenSet: boolean;
};

/**
 *  IFrame wrapper for rendring Ignite Dashboards into an internal react application
 *
 *  @property {string}  token:          A valid JWT Token to authenticate against the Ignite Platform
 *  @property {number}  departmentId:   The department id that owns the dashboard
 *  @property {number}  dashboardId:    The id of the dashboard that should be displayed inside the iFrame
 *  @property {string}  background?:    A css compatible color string
 *  @property {boolean} hideTitle?:     A boolean indicator specifying if the title should be hidden or not (default: false)
 *  @property {string}  baseUrl?:       The baseUrl that should be used
 *
 */

class IgniteFrame extends React.Component<Props, State> {
    static defaultProps = {
        baseUrl: "https://app.ignite.no",
    };

    url: string = `${this.props.baseUrl}/departments/${this.props.departmentId}/dashboards/${
        this.props.dashboardId
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
                background: this.props.background,
                hideTitle: this.props.hideTitle,
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
