# Welcome to `awscdk-jsii-template`

This repository template helps you generate JSII construct library for AWS CDK and aims to simplify
the process to develop, build, test and eventually publish your AWS CDK construct lib to `npmjs` and `pipy`.


## Directories in this template

- **src** - all the typescript source code under this directory
- **test** - unit tests and integ tests
- **lib** - will be auto-generated from the `src` when you run `yarn build`


## Confiuguration

1. customize your `.projenrc.js`
1. run `npx projen` to project generate assets including the `package.json` and `.github/workflows` from `.projenrc.js`
2. `yarn install` to install all required npm packages

```sh
$ npx projen && yarn install
```


## Integration tests

1. run `yarn watch` in a seperate terminal
2. edit `test/integ.api.ts`
3. Run `cdk diff` and `cdk deploy` to ensure it deploys with no error in your real aws environment.

```bash
cdk --app 'test/integ.api.js' diff
cdk --app 'test/integ.api.js' deploy
```

4. validate the stack

## Unit tests

1. edit `test/*.test.ts`
2. run `yarn test`


## run `yarn build` to generate the `lib` directory

If `yarn test` is doing great with no error. Run `yarn build` to generate the `lib` and other assets.

## commit your changes to local repository

```sh
$ git commit -am "commit message"
```


## bump the version and push to your repository

```sh
# bump the minor version in the version.json
$ yarn bump
or
$ yarn bump yarn bump --release-as YOUR_VERSION_STRING
```
and `git push` with the tags

```sh
$ git push --follow-tags origin master
```

If you push successfully, go to your the `Actions` in your github repository, make sure the `build` and `release` workflows run successfully.


## Projen

This template leverages the [eladb/projen](https://github.com/eladb/projen) by [Elad Ben-Israel](https://github.com/eladb). Check it out for more detials and usages for the `projen` command.


