# step 1 install node and npm

```
sudo apt-get update
sudo apt-get upgrade
sudo apt install nodejs
sudo apt install npm
```

### step2 uninstall create-react-app and install yarn

```

npm i -g yarn
npm uninstall -g create-react-app
yarn global remove create-react-app
```

### Create React APP

```
npx create-react-app myreact
```
### Install eslint from extensions

### settings.json on .vscode folder

```
/*
 * Title: VS Code workspace settings
 * Description: Workspace settings shown in Learn with Sumit React Tutorial Series which assumes you have 1) VS Code Dracula Theme Installed, VS Code ESLint and Prettier Plugins installed and you follow all the steps mentioned in the 3rd Video of this playlist - https://www.youtube.com/playlist?list=PLHiZ4m8vCp9M6HVQv7a36cp8LKzyHIePr
 * Author: Sumit Saha ( Learn with Sumit )
 * Date: 02/15/2021
 *
 */

{


  // config related to code formatting
  "editor.fontSize": 22,
  // "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.formatOnSave": false,
    "editor.defaultFormatter": null
  },
  "[javascriptreact]": {
    "editor.formatOnSave": false,
    "editor.defaultFormatter": null
  },
  "javascript.validate.enable": false, //disable all built-in syntax checking
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.tslint": true,
    "source.organizeImports": true
  },
  "eslint.alwaysShowStatus": true,
  // emmet
  "emmet.triggerExpansionOnTab": true,
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  }
}

```

### .eslintrc 

```
{
  "extends": [
    "airbnb",
    "airbnb/hooks",
    "eslint:recommended",
    "prettier",
    "plugin:jsx-a11y/recommended"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 8
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "jest": true
  },
  "rules": {
    "react/react-in-jsx-scope": 0,
    "react-hooks/rules-of-hooks": "error",
    "no-console": 0,
    "react/state-in-constructor": 0,
    "indent": 0,
    "linebreak-style": 0,
    "react/prop-types": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".js", ".jsx"]
      }
    ],
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 100,
        "tabWidth": 4,
        "semi": true,
        "endOfLine": "auto"
      }
    ]
  },
  "plugins": ["prettier", "react", "react-hooks"]
}

```


