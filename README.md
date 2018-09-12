# React Shop Project

This project use:
- React
- Router
- Mobx
- Material Ui
- Styled-component
- Prop-types
- Axios

Active decorators in React: 

1. Install:
- npm install --save mobx mobx-react react-app-rewire-mobx
- npm install react-app-rewired --save-dev

2. Create a `config-overrides.js` file in the root directory
+-- react-shop
|   +-- config-overrides.js
|   +-- node_modules
|   +-- package.json
|   +-- public
|   +-- README.md
|   +-- src

const rewireMobX = require('react-app-rewire-mobx');

/* config-overrides.js */
module.exports = function override(config, env) {
  config = rewireMobX(config, env);
  return config;
}

3. Change the existing calls to `react-scripts` in npm scripts
```diff
    /* package.json */

"scripts": {
-   "start": "react-scripts start",
+   "start": "react-app-rewired start",
-   "build": "react-scripts build",
+   "build": "react-app-rewired build",
-   "test": "react-scripts test --env=jsdom",
+   "test": "react-app-rewired test --env=jsdom"
}
```
## Run the project

```npm install```

```npm start```

Enjoy!