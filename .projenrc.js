const {
  JsiiProject,
  Semver
} = require('projen');

const AWS_CDK_LATEST_RELEASE = '1.59.0';
const CONSTRUCTS_VERSION = '3.0.4';
const JSII_VERSION = '1.5.0';
const PROJECT_NAME = 'cdk-serverless-api';
const PROJECT_DESCRIPTION = 'A sample JSII construct lib for AWS CDK';

const project = new JsiiProject({
  name: PROJECT_NAME,
  jsiiVersion: Semver.caret(JSII_VERSION),
  description: PROJECT_DESCRIPTION,
  repository: 'https://github.com/pahud/awscdk-jsii-template.git',
  authorName: 'Pahud Hsieh',
  authorEmail: 'pahudnet@gmail.com',
  stability: 'experimental',
  autoReleaseSchedule: 'never',
  devDependencies: {
    constructs: Semver.caret(CONSTRUCTS_VERSION),
    '@aws-cdk/assert': Semver.pinned(AWS_CDK_LATEST_RELEASE),
    '@types/jest': Semver.caret('25.2.3'),
    '@types/node': Semver.caret('14.0.11'),
  },
  peerDependencies: {
    constructs: Semver.caret(CONSTRUCTS_VERSION),
    '@aws-cdk/core': Semver.pinned(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-apigatewayv2': Semver.pinned(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-lambda': Semver.pinned(AWS_CDK_LATEST_RELEASE),
  },
  dependencies: {
    constructs: Semver.caret(CONSTRUCTS_VERSION),
    '@aws-cdk/core': Semver.pinned(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-apigatewayv2': Semver.pinned(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-lambda': Semver.pinned(AWS_CDK_LATEST_RELEASE),
  },
  python: {
    distName: 'cdk-serverless-api',
    module: 'cdk_serverless_api'
  }
});

project.addFields({
  'keywords': [
    'cdk',
    'aws',
  ]
});

const common_exclude = ['cdk.out', 'cdk.context.json', 'docker-compose.yml', 'images', 'yarn-error.log']
project.npmignore.exclude(...common_exclude);
project.gitignore.exclude(...common_exclude);

project.synth();
