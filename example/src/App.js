import React, { Component } from "react";

import IgniteFrame from "ignite-frame";
import { AppContainer } from "./style";

export default class App extends Component {
    render() {
        return (
            <AppContainer>
                <IgniteFrame
                    token={
                        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6InZhbGRlbWFycm9sZnNlbiIsImV4cCI6MTU1MzE3Mzk3MiwiZW1haWwiOiJ2YWxkZW1hci5yb2xmc2VuQGlnbml0ZS5ubyIsIm9yaWdfaWF0IjoxNTUzMTY2NzcyLCJ0eXBlIjoibm9ybWFsIiwiZGVwYXJ0bWVudHMiOlszXSwiY2xpZW50IjoyfQ.MjD7GCbt9lfRVoECVCzL13s6SkftGKWUZkMnlepSoZs"
                    }
                    departmentId={3}
                    dashboardId={1000}
                    background={"rgb(241, 241, 241)"}
                    hideTitle={false}
                    baseUrl={"http://localhost:3000"}
                />
            </AppContainer>
        );
    }
}
