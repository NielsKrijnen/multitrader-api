# Ninja RMM API

## Contents

- [Description](#description)
- [Usage](#usage)
  - [Documentation](#documentation)
- [Requirements](#requirements)
- [License](#license)

## Description

Simple JavaScript package for fetching data from the Multitrader API

## Usage

Install the **multitrader-api** pckage with [NPM](https://www.npmjs.org):

```sh
npm install multitrader-api
```

You can then use the API by importing the package, creating a client and calling a function:

```ts
import { MultitraderAPI } from "multitrader-api"

const api = new MultitraderAPI({
  subdomain: "your-subdomain"
})

api.workflow.listDefinitions().then(definitions => {
  console.log(definitions)
})
```

### Documentation

You can find further documentation about API routes on the official documentation, which you can find at https://subdomain.multitrader.com/rest/swagger-ui.html

## Requirements

This package has no requirements and can be run on any Node.js server or JavaScript client

## License

The multitrader-api script is released under the
[MIT License](https://opensource.org/licenses/MIT)