import * as React from 'react'

import './style.css'
import { IFrameOptions } from './interfaces'

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
  constructor() {
    super()

    this.iframe = React.createRef()
  }

  /**
   * Updating component if the token is sent
   */
  componentDidUpdate(prevProps: Props) {
    if (this.props.token !== prevProps.token) {
      this.iframe.src += ''
    }
  }

  /**
   * Sends the token to the iFrame
   */
  handleLoad = () => {
    // @ts-ignore
    let iFrameWindow = this.iframe.contentWindow

    iFrameWindow.postMessage(
      JSON.stringify({
        token: this.props.token,
        options: {
          baseUrl: 'https://app.ignite.no',
          ...this.props.options,
        },
      }),
      '*',
    )
  }

  render() {
    return (
      <iframe
        ref={this.iframe}
        src={`${this.props.options.baseUrl}/departments/${
          this.props.options.departmentId
        }/dashboards/${this.props.options.dashboardId}/?embedded`}
        onLoad={this.handleLoad}
        height="700"
        frameBorder={0}
        scrolling="yes"
        marginHeight={0}
        marginWidth={0}
      />
    )
  }
}

export default IgniteFrame
