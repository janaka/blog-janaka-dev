# How to setting up CI/CD using textile.io

TODO: move the following to a separate doc and link from here.

## Install textile.io cli

- Download and extract binary from [](https://github.com/textileio/textile/releases)
- `cd <expanded folder name>` > `./install`
- `textile --help` should return

## Create a Textile login and team

Textile uses passwordless login for all users, giving them remote IPFS pinning for their projects.

- `textile login`
  follow the instructions.

- `textile whoami`
  Should now show you your account.
  
If you think you'll want to collaborate with others, you should create a team and then enter your team before creating projects and buckets.

- `textile team add <NAME>`
- `textile switch`

## Initialize a Textile Project

All Buckets are part of Projects. To make Project management easy, you can initialize a Project in the any directory. Then, each time you are working in that directory with Textile, it will know which project it is working with.

- `cd blog-janaka-dev`
- `textile project init blog-janaka-dev`
- This will create a file `./.textile/config.yml`. If you are using Git, you should commit this file to your code history.

## Setup GitHub Variables

1. Go to the `Settings` tab of your new Github repo.
2. Select the `Secrets` option in the menu.
3. Add the following new secrets

| NAME | Example | Description|
|------|-------|----------|
| TEXTILE_AUTH_TOKEN | `<private textile auth token>` | Your private auth token for Textile. Do not share. You can find it on your local computer in your home dir. E.g. `cat ~/.textile/auth.yml` |

## Update your GitHub Actions

There is a value in each of the four workflows you need to update. You can find those files in,

- [.github/workflows/bucket_pull_request.yml](https://github.com/textileio/gatsby-ipfs-blog/blob/master/.github/workflows/bucket_pull_request.yml)
- [.github/workflows/bucket_remove.yml](https://github.com/textileio/gatsby-ipfs-blog/blob/master/.github/workflows/bucket_remove.yml)
- [.github/workflows/bucket_publish.yml](https://github.com/textileio/gatsby-ipfs-blog/blob/master/.github/workflows/bucket_publish.yml)
- [.github/workflows/update_dnslink.yml](https://github.com/textileio/gatsby-ipfs-blog/blob/master/.github/workflows/update_dnslink.yml)
  
In each of those files, change the value for `BUCKET_NAME` from `'gatsby-ipfs-blog'` to your unique bucket name.

| NAME | Example | Description|
|------|-------|----------|
| BUCKET_NAME | `blog-janaka-dev` | A globally unique name for your blog, containing no spaces or special characters |


## Create custom IPFS key

- create custome key `ipfs key gen --type=rsa -size=2048 blog-janaka-dev`
  Should return a `$PEER_ID`
- Create TLS cert on CloudFlare

## refs
[](https://blog.textile.io/ethden-using-ci-to-publish-your-webpage-using-ipfs-and-textile-buckets/)
[](https://github.com/textileio/gatsby-ipfs-blog/blob/master/README.md)