---
title: "Using gatsby-plugin-s3 with Github Actions"
date: "2020-05-11T00:36:00.00Z"
description: "How to configure Gatsby CI/CD with gatsby-plugin-s3 and Github Actions"
---

I was originally using the Gatsby and S3 sync Github actions together. This worked fine bit shifting. Later I discovered that updates were not showing up when browsing on my mobile. A quick Google and I realised there are some [HTTP cache headers that Gatsby recommend](https://www.gatsbyjs.org/docs/caching/) which I was not applying. The [gatsby-plugin-s3](https://gatsby-plugin-s3.jari.io/) which implements the recommended caching config. So I decided to switch. I didn't find Github Action examples online so maybe this post will help somebody save time.

I'm using Cloudflare rather than CloudFront and a pre-created S3 bucket which isn't managed using code (i.e. Terraform, CloudFormation etc.). It seems they have some workarounds for system like TF and CF that maintain state but maybe it's best to use the AWS CLI to codify bucket creation in this case.

Here are the relevant snipets. You can view it in context in the repo [here](https://github.com/janaka/blog-janaka-dev).

This is a better setup than what I had before. It's more Gatsby tuned and much faster. The previous workflow took 2-3mins to execute. This one takes less than 1.5mins. And if you are wondering, my caching issue is resolved. Well at least I'm seeing changes from my mobile. I'm yet to test if what should be cached is being cached.

#### gatsby-config.js fragment

```js
  plugins: [
    {
      resolve: `gatsby-plugin-s3`,
      options: {
          bucketName: process.env.AWS_S3_BUCKET_NAME,
          region: process.env.AWS_REGION,
          protocol: `https`,
          hostname: `janaka.dev`,
      },
    },
  ]
```

#### package.json fragment

```json
  "scripts": {
    "deploy": "npx -n \"-r dotenv/config\" gatsby-plugin-s3 deploy"
  }
```

#### Github Actions workflow (`.github/workflow/deploy_to_S3_on_push.yaml`)

It seems like they haven't figured out policies for all the combinations. See more details in this [GH issue](https://github.com/jariz/gatsby-plugin-s3/issues/39)

```yaml
name: Deploy Website to S3 Hosting

on:
  push:
    branches:
    - master

jobs:
  deploy:
    name: Build & Deploy
    runs-on: ubuntu-latest
    env:
      AWS_S3_BUCKET_NAME: ${{ secrets.AWS_S3_BUCKET }}
      AWS_REGION: ${{ secrets.AWS_REGION }}
    steps:
    - name: Checkout Repo
      uses: actions/checkout@master
    - name: Install dependencies
      run: yarn install --prod --pure-lockfile
    - name: Build Gatsby Site
      run: yarn build
    - name: Deploy to S3 (with sync)
      run: yarn deploy
      env:
        AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
        AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
```

#### IAM policy

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
                "s3:GetBucketLocation"
            ],
            "Resource": "*"
        },
        {
            "Sid": "VisualEditor1",
            "Effect": "Allow",
            "Action": [
                "s3:PutBucketWebsite",
                "s3:PutObject",
                "s3:PutObjectAcl",
                "s3:GetObject",
                "s3:ListBucket",
                "s3:DeleteObject"
            ],
            "Resource": [
                "arn:aws:s3:::<S3_BUCKET_NAME_HERE>",
                "arn:aws:s3:::<S3_BUCKET_NAME_HERE>/*"
            ]
        }
    ]
}
```