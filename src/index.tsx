import * as React from 'react'

import { IFrameOptions } from './interfaces'

interface Props {
  token: string;
  options: IFrameOptions;
}

interface State {
  tokenSet: boolean;
}

const defaultBaseUrl = 'https://app.ignite.no'

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
  handleLoad = event => {
    // @ts-ignore
    const iFrameWindow = event.currentTarget.contentWindow

    iFrameWindow.postMessage(
      JSON.stringify({
        token: this.props.token,
        options: {
          baseUrl: defaultBaseUrl,
          ...this.props.options,
        },
      }),
      '*',
    )
  }

  render() {
    return (
      <iframe
        src={`${this.props.options.baseUrl || defaultBaseUrl}/departments/${
          this.props.options.departmentId
        }/dashboards/${this.props.options.dashboardId}/?embedded`}
        onLoad={this.handleLoad}
        height="700"
        frameBorder={0}
        scrolling="yes"
        marginHeight={0}
        marginWidth={0}
        style={{
          width: '1px',
          height: '100%',
          'min-width': '100%',
          '*width': '100%',
        }}
      />
    )
  }
}

export default IgniteFrame
