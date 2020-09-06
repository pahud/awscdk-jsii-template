const {
  ConstructLibraryAws,
} = require('projen');

const AWS_CDK_LATEST_RELEASE = '1.62.0';
const PROJECT_NAME = 'cdk-serverless-api';
const PROJECT_DESCRIPTION = 'A sample JSII construct lib for AWS CDK';

const project = new ConstructLibraryAws({
  name: PROJECT_NAME,
  description: PROJECT_DESCRIPTION,
  repository: 'https://github.com/pahud/awscdk-jsii-template.git',
  authorName: 'Pahud Hsieh',
  authorEmail: 'pahudnet@gmail.com',
  stability: 'experimental',
  autoReleaseSchedule: 'never',

  keywords: [
    'cdk',
    'aws',
  ],

  catalog: {
    twitter: 'pahudnet',
    announce: false,
  },

  // creates PRs for projen upgrades
  projenUpgradeSecret: 'PROJEN_GITHUB_TOKEN',

  cdkVersion: AWS_CDK_LATEST_RELEASE,
  cdkDependencies: [
    '@aws-cdk/core',
    '@aws-cdk/aws-apigatewayv2',
    '@aws-cdk/aws-lambda',
  ],

  python: {
    distName: 'cdk-serverless-api',
    module: 'cdk_serverless_api'
  }
});

const common_exclude = ['cdk.out', 'cdk.context.json', 'images', 'yarn-error.log'];
project.npmignore.exclude(...common_exclude);
project.gitignore.exclude(...common_exclude);

project.synth();
