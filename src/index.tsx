import * as React from "react";

import { IFrameOptions } from "./interfaces";

interface Props {
    token: string;
    options: IFrameOptions;
}

const defaultBaseUrl = "https://app.igniteprocurement.com";

/**
 *  IFrame wrapper for rendring Ignite Dashboards into an internal react application
 *
 *  @property {string}          token:          A valid JWT Token to authenticate against the Ignite Platform
 *  @property {IFrameOptions}   options:
 *
 */

function IgniteFrame({ options, token }: Props) {
    const { departmentId, dashboardId, ...getParamOptions } = options;

    const getParams = {
        ...getParamOptions,
        token,
    };

    const getString = Object.keys(getParams).reduce((res: string, key: string) => {
        return res + `&${key}=${getParams[key]}`;
    }, "");

    const url = `${options.baseUrl || defaultBaseUrl}/departments/${options.departmentId}/dashboards/${
        options.dashboardId
    }/?embedded${getString}`;

    return (
        <iframe
            src={url}
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
        />
    );
}

export default IgniteFrame;
