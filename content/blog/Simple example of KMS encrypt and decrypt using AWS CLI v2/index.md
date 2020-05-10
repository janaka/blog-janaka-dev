---
title: Simple example of KMS encrypt and decrypt using AWS CLI v2
date: "2020-05-07T23:34:00.00Z"
description: "KMS encrypt and decrypt commands are different with AWS CLI v2"
---

On macOS

Encrypt:

```sh
aws kms encrypt --region eu-west-1 / 
--profile <aws_profile_name> / 
--key-id <your_kms_key_here> /
--plaintext fileb://<(echo 'Hello Hello Hello you cheaky secret') / 
--encryption-context somekey=sometoken / 
--query CiphertextBlob / 
--output text
``` 

Decrypt:

```sh
aws kms decrypt --region eu-west-1 / 
--profile <aws_profile_name> / 
--ciphertext-blob fileb://<(echo '<the_output_from_the_encrypt_command_above>' | base64 -d) / 
--encryption-context somekey=sometoken / 
--output text / 
--query Plaintext | base64 -d
```


For context, I wanted to quickly encrypt an API token so I could embed it in a Terraform config. Initially, I followed the Terraform doc [here](https://www.terraform.io/docs/providers/aws/d/kms_secrets.html). The command in the doc ran successfully but the Terraform config couldn't make the API call with the token successfully. As a troubleshooting step I wanted to test the decypt using CLI. This didn't work. Trying to run the command with a sentence as the plaintext errored. It seems because it was a token the command ran successfully but didn't encrypt the actual token. This [post](https://random.ac/cess/2017/02/04/simple-aws-cli-kms-encrypt-decrypt-example/) was a great simple example. But it didn't work either. When encrypting I was getting the error `Invalid base64: "Hello Hello Hello you cheaky secret"`. This Github [issue](https://github.com/aws/aws-cli/issues/4994) put me on the right track. AWS made some breaking changes in CLI v2.