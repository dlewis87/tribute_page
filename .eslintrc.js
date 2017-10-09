module.exports = {
    "extends": ["standard", "plugin:react/recommended"],
    "plugins": [
        "standard",
        "promise",
        "react"
    ],
    "env": {
        "browser": true,
        "node": true,
        "jest": true
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 5,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "experimentalObjectRestSpread": true
        }
    },
    "settings": {
        "react": {
            "pragma": "React",  // Pragma to use, default to "React"
            "version": "16.0" // React version, default to the latest React stable release
        }
    },
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "single"],
        "indent": ["error", 2],
        "react/jsx-uses-vars": "error",
        "eol-last": 0,
        "no-class-assign": 0,
        "react/prop-types": 0,
        "react/react-in-jsx-scope": 0,
        "react/no-danger": 0
    }
};