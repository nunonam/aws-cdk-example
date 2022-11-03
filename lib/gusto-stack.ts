import {
  Stack,
  StackProps,
  aws_s3 as s3,
  aws_dynamodb as dynamodb,
  aws_lambda as lambda,
  Duration
} from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Gusto } from './gusto';

export class GustoStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // we will add all the constructs here
    // replace bucket name with a unique name
    // const circleCiGwpBucket = new s3.Bucket(this, "CircleCIGwpAuthExampleBucket", {
    //   bucketName: "<YOUR_BUCKET_NAME>",
    // });

    // const circleCiGwpTable = new dynamodb.Table(this, "CircleCIGwpAuthExampleTable", {
    //   tableName: "CircleCIGwpAuthExampleTable",
    //   partitionKey: { name: "jobId", type: dynamodb.AttributeType.STRING },
    // });

    // const circleCiGwpLambda = new lambda.Function(
    //   this,
    //   "CircleCiGwpProcessJobLambda",
    //   {
    //     runtime: lambda.Runtime.NODEJS_14_X,
    //     handler: "index.handler",
    //     timeout: Duration.seconds(30),
    //     code: lambda.Code.fromAsset("lambda/processJob/"),
    //     environment: {
    //       TABLE_NAME: circleCiGwpTable.tableName,
    //       BUCKET_NAME: circleCiGwpBucket.bucketName
    //     },
    //   }
    // );


    new Gusto(this, 'gusto-world');
  }
}