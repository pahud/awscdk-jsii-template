# API Reference

**Classes**

Name|Description
----|-----------
[ServerlessApi](#cdk-serverless-api-serverlessapi)|*No description*


**Structs**

Name|Description
----|-----------
[ServerlessApiProps](#cdk-serverless-api-serverlessapiprops)|*No description*



## class ServerlessApi 🔹 <a id="cdk-serverless-api-serverlessapi"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable)
__Extends__: [Construct](#aws-cdk-core-construct)

### Initializer




```ts
new ServerlessApi(scope: Construct, id: string, props?: ServerlessApiProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[ServerlessApiProps](#cdk-serverless-api-serverlessapiprops)</code>)  *No description*
  * **handler** (<code>[IFunction](#aws-cdk-aws-lambda-ifunction)</code>)  *No description* __*Optional*__



### Properties


Name | Type | Description 
-----|------|-------------
**handler**🔹 | <code>[IFunction](#aws-cdk-aws-lambda-ifunction)</code> | <span></span>



## struct ServerlessApiProps 🔹 <a id="cdk-serverless-api-serverlessapiprops"></a>






Name | Type | Description 
-----|------|-------------
**handler**?🔹 | <code>[IFunction](#aws-cdk-aws-lambda-ifunction)</code> | __*Optional*__



