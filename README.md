This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Elearn App

# Installation

To run this repo locally, run the development server:

```bash
gh repo clone Haidra888/elearn-next-demo
npm i
npm run dev
```

The above commands assume you have github cli, node and npm installed on your machine.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# File Structure

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

Default Next.js [API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`. The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

GraphQL API built to manage posts can found in the root directory grapghql folder

If you would like to style the site differently, edit styles/globals.css

If you would like to edit lambda functions for this site, either
1. Install Amplify CLI and configure it your aws profile
And make changes in Amplify and .serverless_nextjs folder at root directory, or
2. Edit functions from aws console, and pull changes made in cloud to repo

# Tech Stack

![image](https://d1.awsstatic.com/diagrams/Serverless_Architecture.5434f715486a0bdd5786cd1c084cd96efa82438f.png)

This site uses aws's serverless tools to reduce hosting cost

1. [AWS Amplify](https://aws.amazon.com/amplify/)
AWS Amplify is a set of tools and services that can be used together or on their own, to help front-end web and mobile developers build scalable full stack applications, powered by AWS. With Amplify, you can configure app backends and connect your app in minutes, deploy static web apps in a few clicks, and easily manage app content outside the AWS console.
2. [AWS Cognito](https://aws.amazon.com/cognito/)
Amazon Cognito lets you add user sign-up, sign-in, and access control to your web and mobile apps quickly and easily. Amazon Cognito scales to millions of users and supports sign-in with social identity providers, such as Apple, Facebook, Google, and Amazon, and enterprise identity providers via SAML 2.0 and OpenID Connect.  
3. [AWS API Gateway](https://aws.amazon.com/api-gateway/)
Amazon API Gateway is a fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure APIs at any scale. APIs act as the "front door" for applications to access data, business logic, or functionality from your backend services. Using API Gateway, you can create RESTful APIs and WebSocket APIs that enable real-time two-way communication applications. API Gateway supports containerized and serverless workloads, as well as web applications.
4. [AWS Lambda](https://aws.amazon.com/lambda/)
AWS Lambda is a serverless compute service that lets you run code without provisioning or managing servers, creating workload-aware cluster scaling logic, maintaining event integrations, or managing runtimes. With Lambda, you can run code for virtually any type of application or backend service - all with zero administration. Just upload your code as a ZIP file or container image, and Lambda automatically and precisely allocates compute execution power and runs your code based on the incoming request or event, for any scale of traffic.
5. [AWS SNS](https://aws.amazon.com/sns)
Amazon Simple Notification Service (Amazon SNS) is a fully managed messaging service for both application-to-application (A2A) and application-to-person (A2P) communication.
6. [AWS DynamoDB](https://aws.amazon.com/dynamodb/)
Amazon DynamoDB is a key-value and document database that delivers single-digit millisecond performance at any scale. It's a fully managed, multi-region, multi-active, durable database with built-in security, backup and restore, and in-memory caching for internet-scale applications. DynamoDB can handle more than 10 trillion requests per day and can support peaks of more than 20 million requests per second.
7. [AWS S3](https://aws.amazon.com/s3/)
Amazon Simple Storage Service (Amazon S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance. This means customers of all sizes and industries can use it to store and protect any amount of data for a range of use cases, such as data lakes, websites, mobile applications, backup and restore, archive, enterprise applications, IoT devices, and big data analytics.
8. [Next.js](https://nextjs.org)
Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deployed on AWS

This project is currently deployed on AWS

Check out [Live Site](https://d1jj1ig8r53a9z.cloudfront.net/).


