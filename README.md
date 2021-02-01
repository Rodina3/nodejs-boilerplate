# Node.js Boilerplate

A Node.js project based on [Nest](https://github.com/nestjs/nest) framework TypeScript starter.

## Installation

```bash
$ yarn
```

## Running the app

Environment configuration are maintained at `src/config` with [Nest Config Module](https://docs.nestjs.com/techniques/configuration). 

```bash
# local
$ yarn start

# dev
$ yarn start:dev

# prod 
$ yarn start:prod
```

## Test

[Jest](https://jestjs.io/) and [SuperTest](https://github.com/visionmedia/supertest) are used for unit tests and E2E tests correspondingly as Nest supported.

```bash
# unit tests & e2e tests
$ yarn test

# run test with coverage
$ yarn test:cov
```

## Code Style

The classic [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) combo is used as Nest originally recommended. The configuration could be found at `.eslintrc.js` for both ESLint and Prettier as single source of truth.

```bash
# manually lint the code base     
$ yarn lint

# while you can also do lint through IDE 
```

## Git Hooks

The classic [lint-staged](https://github.com/okonet/lint-staged) with [husky](https://github.com/typicode/husky) is used for Git Hooks. It is configured as:

- pre-commit: check typescript and lint all ts files
- pre-push: run testing

Detailed configuration can be found at `package.json`.
