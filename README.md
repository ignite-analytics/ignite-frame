# Ignite Frame

> Iframe integration for displaying Ignite Dashboards on internal pages

[![NPM](https://img.shields.io/npm/v/ignite-frame.svg)](https://www.npmjs.com/package/ignite-frame) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save ignite-frame
```

or

```bash
yarn add ignite-frame
```

## Usage

```tsx
import * as React from "react";

import IgniteFrame from "ignite-frame";

class Example extends React.Component {
    render() {
        return <IgniteFrame />;
    }
}
```

## Properties

```tsx
/**
 *  IFrame wrapper for rendring Ignite Dashboards into an internal react application
 *
 *  @property {string}          token:      A valid JWT Token to authenticate against the Ignite Platform
 *  @property {IFrameOptions}   options:    A options object that contains the configuration for the iFrame
 *
 */
```

### IFrameOptions

```tsx
/**
 *  IFrame options interface
 *
 *  @property {number}  departmentId:   The department id that owns the dashboard
 *  @property {number}  dashboardId:    The id of the dashboard that should be displayed inside the iFrame
 *  @property {string}  background?:    A css compatible color string
 *  @property {string}  baseUrl?:       The baseUrl that should be used
 *
 */
```

## License

MIT © [Ignite Procurement](https://www.ignite.no)
