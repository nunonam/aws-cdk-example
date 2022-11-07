import {
  Stack,
  StackProps,
  aws_s3 as s3,
  aws_dynamodb as dynamodb,
  aws_lambda as lambda,
  Duration
} from 'aws-cdk-lib';
import { EndpointType, LambdaRestApi } from 'aws-cdk-lib/aws-apigateway';
import { Certificate } from '@aws-cdk/aws-certificatemanager'
import { Construct } from 'constructs';
import { Gusto } from './gusto';

export class GustoStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);


    // S3 bucket 생성
    // new s3.Bucket(this, 'aws-s3-sandbox-cdktemp-dev', {
    //   bucketName: "<YOUR_BUCKET_NAME>",
    //   versioned: true
    // })

    // const circleCiGwpTable = new dynamodb.Table(this, "CircleCIGwpAuthExampleTable", {
    //   tableName: "CircleCIGwpAuthExampleTable",
    //   partitionKey: { name: "jobId", type: dynamodb.AttributeType.STRING },
    // });

    const testfn = new lambda.Function(
      this,
      "gusto_prod_default",
      {
        runtime: lambda.Runtime.NODEJS_16_X,
        handler: "index.handler",
        timeout: Duration.seconds(30),
        code: lambda.Code.fromAsset("functions/test/"),
        // environment: {
        //   TABLE_NAME: '',
        //   BUCKET_NAME: ''
        // },
      }
    );


    const api = new LambdaRestApi(this, 'gustoapi.moimplugin.com', {
      handler: testfn,
      // deployOptions: { stageName: 'dev' },
      // domainName: {
      //   endpointType: EndpointType.EDGE,
      //   domainName: 'gustodev.moimplugin.com',
      //   certificate: Certificate.fromCertificateArn(this, 'Certificate', 'arn:aws:acm:us-east-1:xxxxxxxxxx:certificate/xxxxxxxxxxxxxx'),
      // },
    });

    // new Gusto(this, 'gusto-world');
  }
}