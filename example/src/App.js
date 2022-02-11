import React, { Component } from "react";

import IgniteFrame from "ignite-frame";
import { AppContainer } from "./style";

export default class App extends Component {
    render() {
        return (
            <AppContainer>
                <IgniteFrame
                    token={process.env.REACT_APP_API_TOKEN}
                    options={{
                        departmentId: process.env.REACT_APP_DEPARTMENT_ID,
                        dashboardId: process.env.REACT_APP_DASHBOARD_ID,
                        background: "rgb(241, 241, 241)",
                        hideTitle: false,
                        tenant: "igniteprocurement",
                        baseUrl: "http://localhost:3000",
                    }}
                />
            </AppContainer>
        );
    }
}
