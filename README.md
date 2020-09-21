[![awscdk-jsii-template](https://img.shields.io/badge/built%20with-awscdk--jsii--template-blue)](https://github.com/pahud/awscdk-jsii-template)


# Welcome to `awscdk-jsii-template`

This repository template helps you generate JSII construct library for AWS CDK and aims to simplify
the process to develop, build, test and eventually publish your AWS CDK construct lib to `npmjs` and `pipy`.


## Directories in this template

- **src** - all the typescript source code under this directory
- **test** - unit tests and integ tests
- **lib** - will be auto-generated from the `src` when you run `yarn build`


## Confiuguration

1. customize your `.projenrc.js`
1. run `npx projen` to project generate assets including the `LICENSE`, `version.json`, `package.json` and `.github/workflows` from `.projenrc.js`.
At this moment, your initial `version` should be `0.0.0`.
2. `yarn install` to install all required npm packages

You can run the commands above like this:
```sh
$ npx projen && yarn install
```

>From now on, we will refer to this command as pj. Every time you modify .projenrc.js, just run pj.

>Put this in your shell profile: alias pj='npx projen && yarn install'



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
$ git commit -am "chore(release): initial commit for the first release" 
```


## bump the version and push to your repository

To bump a specific release version number, i.e. `v0.1.0`
```sh
$ yarn bump --release-as v0.1.0
```
or simply bump the minor version from `version.json`, in which case the version will bump from `0.0.0` to `0.0.1`

```sh
$ yarn bump
```

and `git push` with the tags

```sh
$ git push --follow-tags origin master
```

Or just:

```sh
# this equals to `arn bump && git push --follow-tags origin master`, see package.json
$ yarn release
```

If you push successfully, go to your the `Actions` in your github repository, make sure the `build` and `release` workflows run successfully.


## Projen

This template leverages the [eladb/projen](https://github.com/eladb/projen) by [Elad Ben-Israel](https://github.com/eladb). Check it out for more detials and usages for the `projen` command.

## Projects using this Template
- [aws-fargate-fast-autoscaler](https://github.com/aws-samples/aws-fargate-fast-autoscaler)
- [cdk-eks-spotblocks](https://github.com/pahud/cdk-eks-spotblocks)
- [cdk-elasticsearch-monitor](https://github.com/jialechan/cdk-elasticache-monitor)
- [cdk-fargate-express](https://github.com/pahud/cdk-fargate-express)
- [cdk-gitlab-runner](https://github.com/guan840912/cdk-gitlab-runner)
- [cdk-serverless-lamp](https://github.com/aws-samples/cdk-serverless-lamp)
- [cdk-soca](https://github.com/pahud/cdk-soca)
- [cdk-spot-one](https://github.com/pahud/cdk-spot-one)






