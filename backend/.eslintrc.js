module.exports = {
    "extends": "google",
    "parserOptions": {
      "ecmaVersion":2017
    },
    "env": {

        "node": true
    },
    "rules": {

        "indent": ["error",4],
        "linebreak-style": ["off","unix"],
        "quotes": ["error","single"],
        "semi": ["error","always"],
        "strict": ["error","global"],
        "prefer-const": ["error", { "destructuring": "any" }],
        "padded-blocks": ["off"],
        "object-curly-spacing": ["error", "always"],
        "space-before-function-paren": ["error", "always"]
    }
};