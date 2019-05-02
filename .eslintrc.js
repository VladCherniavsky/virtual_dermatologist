module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react",
    "import"
  ],
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "import/no-unresolved": "off"
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
  },
};
