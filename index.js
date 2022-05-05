'use strict';

// MIT License
// 
// Copyright (c) 2022 Next.e.GO Mobile SE, Aachen, Germany (https://e-go-mobile.com/)
// 
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "unicorn",
        "eslint-plugin-import",
        "no-null",
        "eslint-plugin-jsdoc"
    ],
    "rules": {
        "require-await": ["error"],
        "quote-props": ["error", "always"],
        "comma-dangle": ["error", "never"],
        "camelcase": "off",
        "@typescript-eslint/array-type": "error",
        "@typescript-eslint/await-thenable": "error",
        "indent": "off",
        "@typescript-eslint/indent": ["error", 4],
        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                "multiline": {
                    "delimiter": "semi",
                    "requireLast": true
                },
                "singleline": {
                    "delimiter": "semi",
                    "requireLast": true
                }
            }
        ],
        "@typescript-eslint/naming-convention": [
            "error",
            {
                "selector": "typeLike",
                "format": ["PascalCase"]
            },
            {
                "selector": "function",
                "format": ["camelCase"]
            },
            {
                "selector": "method",
                "format": ["camelCase"]
            },
            {
                "selector": "memberLike",
                "modifiers": ["private", "protected"],
                "format": ["camelCase"],
                "leadingUnderscore": "require"
            },
            {
                "selector": "enumMember",
                "format": ["PascalCase"]
            },
            {
                "selector": "variable",
                "types": ["boolean"],
                "format": ["PascalCase"],
                "prefix": ["is", "should", "has", "can", "did", "will"]
            },
            {
                "selector": "variable",
                "format": ["camelCase", "UPPER_CASE"]
            },
            {
                "selector": "typeParameter",
                "format": ["PascalCase"],
                "prefix": ["T"]
            },
            {
                "selector": "parameter",
                "format": ["camelCase"]
            },
            {
                "selector": "interface",
                "format": ["PascalCase"],
                "custom": {
                    "regex": "^I[A-Z]",
                    "match": false
                }
            },
        ],
        "@typescript-eslint/quotes": [
            "error",
            "double"
        ],
        "@typescript-eslint/semi": [
            "error",
            "always"
        ],
        "arrow-body-style": ["error", "always"],
        "curly": "error",
        "eqeqeq": [
            "error",
            "always"
        ],
        "id-blacklist": [
            "error",
            "warn",
            "any",
            "number",
            "string",
            "boolean",
            "Undefined",
            "err",
            "e",
            "cb",
            "callback"
        ],
        "import/no-default-export": "off",
        "no-null/no-null": "off",
        "no-redeclare": "error",
        "no-throw-literal": "error",
        "no-trailing-spaces": "error",
        "no-underscore-dangle": "off",
        "no-unused-expressions": "error",
        "no-var": "error",
        "spaced-comment": [
            "error", "always",
            {
                "markers": ["/"]
            }
        ],
        "unicorn/filename-case": [
            "error",
            {
                "cases": {
                    "camelCase": true,
                    "pascalCase": true
                }
            }
        ],
        "no-irregular-whitespace": "error",
        "brace-style": ["error", "stroustrup"],
        "jsdoc/require-returns-type": "error",
        "jsdoc/require-returns-description": "error",
        "jsdoc/valid-types": "error",
        "jsdoc/check-syntax": "error",
        "jsdoc/require-returns": "error",
        "jsdoc/require-param": "error",
        "jsdoc/require-param-name": "error",
        "jsdoc/check-param-names": "error",
        "jsdoc/require-param-type": "error",
        "jsdoc/require-param-description": "error",
    }
};