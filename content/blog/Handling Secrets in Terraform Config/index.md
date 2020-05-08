---
title: "Note: Handling Secrets Correctly in Terraform" Config
date: "2020-05-08T12:18:00.00Z"
description: "How to make sure secrets are secure in Terraform config."
---

There two things that need to be handled.

### 1. Encrypt the secret in the Terraform config file
Don't have the secret as plaintext in any of the config file. Encrypt using AWS KMS. Then use [aws_kms_secrets](https://www.terraform.io/docs/providers/aws/d/kms_secrets.html) to decrypt at runtime.

Can also use an encrypted secret store like AWS Parameter Store or Hashicorp Vault.


### 2. Use an encrypted backend for state
Use Terraform Cloud ([remote](https://www.terraform.io/docs/backends/types/remote.html)) as the backend. 

State files store the plaintext version of secrets. So don't use local statefiles and check-in to version control. Use a encryted backend like Terraform cloud or AWS S3 to persist state.

*Disclaimer: These are notes for myself that I'm sharing. I'm not claiming this is the way or the best way.*