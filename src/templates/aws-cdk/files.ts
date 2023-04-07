
export const getAwsCdkPackageJson = (projectName: string, version: string) => `{
    "name": "awp-${projectName}-v${version}",
    "version": "1.0.0",
    "description": "",
    "keywords": [],
    "homepage": "https://github.com/nsw-health-pathology/goldpath-aws-cdk-typescript#readme",
    "scripts": {
      "lint": "eslint -c .eslintrc.json",
      "build": "npm run tsc --",
      "test": "jest",
      "deploy": "cdk deploy",
      "diff": "cdk diff",
      "ci": "npm run lint && npm run test",
      "synth": "cdk synth",
      "license-check": "license-checker --summary --production --excludePrivatePackages --onlyAllow Apache-2.0;MIT;ISC;BSD;BSD-2-Clause;BSD-3-Clause;MIT*;CC0-1.0;CC-BY-3.0;CC-BY-4.0;BSD*;0BSD;Public Domain;AFLv2.1;"
    },
    "devDependencies": {
      "@types/jest": "^29.2.5",
      "@types/node": "18.11.18",
      "@typescript-eslint/eslint-plugin": "^5.57.1",
      "@typescript-eslint/parser": "^5.57.1",
      "aws-cdk": "^2.72.0",
      "eslint": "^8.37.0",
      "eslint-config-prettier": "^8.8.0",
      "eslint-plugin-prettier": "^4.2.0",
      "prettier": "^2.8.7",
      "jest": "^29.3.1",
      "license-checker": "^25.0.1",
      "ts-jest": "^29.0.3",
      "ts-node": "^10.0.0",
      "typescript": "^4.9.3"
    },
    "dependencies": {
      "aws-cdk-lib": "^2.72.0",
      "constructs": "^10.1.301"
    }
}`;

export const getAwsCdkTsconfig = () => `{
    "compilerOptions": {
        "alwaysStrict": true,
        "charset": "utf8",
        "declaration": true,
        "experimentalDecorators": true,
        "inlineSourceMap": true,
        "inlineSources": true,
        "lib": [
            "es2018"
        ],
        "module": "CommonJS",
        "noEmitOnError": true,
        "noFallthroughCasesInSwitch": true,
        "noImplicitAny": true,
        "noImplicitReturns": true,
        "noImplicitThis": true,
        "noUnusedLocals": true,
        "noUnusedParameters": true,
        "resolveJsonModule": true,
        "strict": true,
        "skipLibCheck": true,
        "strictNullChecks": true,
        "outDir": "./dist",
        "strictPropertyInitialization": true,
        "stripInternal": true,
        "target": "ES2018",
        "rootDir": ".",
        "typeRoots": [
            "./node_modules/@types"
        ]
    },
    "include": [
        "**/*.ts"
    ],
    "exclude": [
        "node_modules",
        "cdk.out"
    ]
}`;

export const getAwsCdkReadme = (projectName: string, version: string) => `# awp-${projectName}-v${version}
`;

export const getAwsCdkJestConfig = () => `module.exports = {
    roots: ['<rootDir>/test'],
    testMatch: ['**/*.test.ts'],
    transform: {
      '^.+\\.tsx?$': 'ts-jest'
    }
  };
`;

export const getAwsCdkConfig =  (projectName: string, version: string) => `{
    "app": "npx ts-node --prefer-ts-exts bin/awp-${projectName}-v${version}.ts"
}
`;

export const getAwsCdkPrettier = () => `{
    "semi": true,
    "singleQuote": true,
    "trailingComma": "all",
    "printWidth": 100,
    "bracketSpacing": true,
    "useTabs": false
  }
`;

export const getAwsCdkGitIgnore = () => `*.js
!jest.config.js
*.d.ts
node_modules

# CDK asset staging directory
.cdk.staging
cdk.out
`;

export const getAwsCdkEslintConfig = () => `{
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "@typescript-eslint",
        "prettier"
    ],
    "extends": [
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "ignorePatterns": ["**/*.d.ts", "**/*.js"],
    "rules": {
        "require-jsdoc": [
            "warn",
            {
                "require": {
                    "FunctionDeclaration": true,
                    "MethodDefinition": false,
                    "ClassDeclaration": false,
                    "ArrowFunctionExpression": false,
                    "FunctionExpression": false
                }
            }
        ],
        "object-shorthand": [
            "error",
            "never"
        ],
        "semi": [
            "error",
            "always"
        ],
        "quotes": [
            "error",
            "single",
            "avoid-escape"
        ],
        "comma-dangle": [
            "error",
            "always-multiline"
        ],
        "curly": [
            "error",
            "multi-line"
        ],
        "prefer-const": 1,
        "no-var": 1,
        "no-fallthrough": 1,
        "no-unused-vars": "off",
        "prettier/prettier": ["off", { "singleQuote": true }],
        "no-console": [
            "warn",
            {
                "allow": [
                    "info",
                    "debug",
                    "error"
                ]
            }
        ],
        "@typescript-eslint/no-unused-vars": [
            "warn",
            {
                "argsIgnorePattern": "^_"
            }
        ],
        "@typescript-eslint/camelcase": 0,
        "@typescript-eslint/no-use-before-define": 0,
        "@typescript-eslint/explicit-function-return-type": [
            "error",
            {
                "allowTypedFunctionExpressions": true
            }
        ],
        "sort-imports": [
            "error",
            {
                "ignoreCase": true,
                "ignoreDeclarationSort": false,
                "ignoreMemberSort": false,
                "memberSyntaxSortOrder": [
                    "none",
                    "all",
                    "multiple",
                    "single"
                ]
            }
        ]
    },
    "overrides": []
}
`;

export const getAwsCdkEslintIgnore = () => `# build artifacts
dist/*
coverage/*
# custom definition files
.cache
node_modules
**/*.d.ts
`;

export const getAwsCdkExampleTest = () => `test('Infrastructure Created', () => {
    console.info('Add Test Cases');
  });
`;

export const getAwsCdkTaggingTs = () => ``
