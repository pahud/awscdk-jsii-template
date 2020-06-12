# AWS CodeArtifact Support

To release and publish npm to [AWS CodeArtifact](https://aws.amazon.com/codeartifact/), add the following statement
in `.projenrc.js` and configure `CODEARTIFACT_NPM_TOKEN` and `CODEARTIFACT_NPM_REGISTRY` in the Github secrets.

```ts
project.releaseWorkflow.addJobs({
  release_npm: {
    'name': 'Release to AWS CodeArtifact',
    'needs': project.releaseWorkflow.buildJobId,
    'runs-on': 'ubuntu-latest',
    'steps': [{
        'name': 'Download build artifacts',
        'uses': 'actions/download-artifact@v1',
        'with': {
          'name': 'dist',
        },
      },
      {
        'name': 'Release',
        'run': 'npx -p pahud-jsii-release jsii-release-npm',
        'env': {
          'NPM_TOKEN': '${{ secrets.CODEARTIFACT_NPM_TOKEN }}',
          'NPM_REGISTRY': '${{ secrets.CODEARTIFACT_NPM_REGISTRY }}',
        },
      },
    ],
  },
});
```

## CODEARTIFACT_NPM_TOKEN

Get the `CODEARTIFACT_NPM_TOKEN` by **aws codeartifact get-authorization-token**:
```bash
aws codeartifact get-authorization-token --domain {domain} --domain-owner 112233445566 --query authorizationToken --output text
```

## CODEARTIFACT_NPM_REGISTRY

Run **aws codeartifact get-repository-endpoint** to get the registry endpoint

```bash
aws codeartifact get-repository-endpoint --domain {domain} --repository {repo} --format npm --output text
https://pahud-112233445566.d.codeartifact.ap-northeast-1.amazonaws.com/npm/aws-repo/
```
And strip off the `https://` prefix e.g.

```
pahud-112233445566.d.codeartifact.ap-northeast-1.amazonaws.com/npm/aws-repo/
```

jsii-release at this moment is having an [issue](https://github.com/eladb/jsii-release/issues/3) with
AWS CodeArtifact support. Before getting it sorted, use [pahud-jsii-release](https://www.npmjs.com/package/pahud-jsii-release)
as a workaround.

