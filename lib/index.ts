
import * as cdk from '@aws-cdk/core';
import * as apigatewayv2 from '@aws-cdk/aws-apigatewayv2';
import * as lambda from '@aws-cdk/aws-lambda';

export interface ServerlessApiProps {
  readonly handler?: lambda.IFunction;
}

export class ServerlessApi extends cdk.Construct {
  readonly handler: lambda.IFunction

  constructor(scope: cdk.Construct, id: string, props?: ServerlessApiProps) {
    super(scope, id);
    this.handler = props?.handler ?? new lambda.Function(this, 'handler', {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'index.handler',
      code: new lambda.InlineCode('exports.handler = async function(event, context) { return { statusCode: 200, headers: { "content-type": "application/json"  }, body: JSON.stringify(event) }; };'),
    });

    const api = new apigatewayv2.HttpApi(this, 'API', {
      defaultIntegration: new apigatewayv2.LambdaProxyIntegration({ 
        handler: this.handler,
      }),
    })

    new cdk.CfnOutput(this, 'URL', { value: api.url! })

  }
}
