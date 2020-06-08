const {
  JsiiProject,
  Semver
} = require('projen');

const AWS_CDK_LATEST_RELEASE = '1.44.0';

const project = new JsiiProject({
  name: 'eks-spot-blocks',
  jsiiVersion: Semver.caret('1.5.0'),
  description: 'eks spot blocks constructs for awscdk',
  repository: 'https://github.com/pahud/awscdk-jsii-repo-template.git',
  authorName: 'Pahud Hsieh',
  authorEmail: 'hunhsieh@amazon.com',
  stability: 'experimental',
  devDependencies: {
    '@aws-cdk/assert': Semver.caret(AWS_CDK_LATEST_RELEASE),
    'ts-jest': Semver.caret('25.3.1'),
    'jest': Semver.caret('25.5.0'),
  },
  peerDependencies: {
    constructs: Semver.caret('3.0.3'),
    '@aws-cdk/core': Semver.caret(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-ec2': Semver.caret(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-eks': Semver.caret(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-iam': Semver.caret(AWS_CDK_LATEST_RELEASE),
    '@aws-cdk/aws-ssm': Semver.caret(AWS_CDK_LATEST_RELEASE),
  },
  python: {
    distName: 'foo-bar',
    module: 'foo_bar'
  }
});

project.addFields({
  'keywords': [
    'cdk',
    'aws',
  ]
});

project.synth();
