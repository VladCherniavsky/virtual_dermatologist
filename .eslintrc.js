module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react"
  ],
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
  },
  "parser": "babel-eslint",
  "env": {
    "es6": true,
    "browser": true,
    "jest": true,
  },
  "parserOptions": {
    "sourceType": "module",
    "allowImportExportEverywhere": true
  }

};
