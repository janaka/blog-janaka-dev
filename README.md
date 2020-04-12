# [janaka.dev](janaka.dev)

Personal blog by Janaka Abeywardhana.

Forked from [Gatsby blog starter](https://github.com/gatsbyjs/gatsby-starter-blog).
Help and inspiration from [overreacted.io by Dan Abramov](https://github.com/gaearon/overreacted.io).

## Contributions

No third-party contributions except content or code bug fixes.

### To run locally

- run `yarn dev`
- open [](https://localhost:8000)

### To publish to IPFS manually from local

This is not the preferred option. 

- `yarn build`
  Note: This command wraps build parameters. We are publishing to IPFS and need to use a plugin to make a Gatsby site compatible.
- `cd blog-janaka-dev`
- `ipfs add -r public`
- `ipfs name publish $CID` $CID hash for `publish/` from previous step

### To publish to IPFS using CI/CD

TODO

### How to setting up CI/CD using textile.io

#### Install textile.io cli

- Download and extract binary from [](https://github.com/textileio/textile/releases)
- `cd <expanded folder name>` > `./install`
- `textile --help` should return

#### Create a Textile login and team

Textile uses passwordless login for all users, giving them remote IPFS pinning for their projects.

- `textile login`
  follow the instructions.

- `textile whoami`
  Should now show you your account. 
  
If you think you'll want to collaborate with others, you should create a team and then enter your team before creating projects and buckets.

- `textile team add <NAME>`
- `textile switch`

#### Initialize a Textile Project

All Buckets are part of Projects. To make Project management easy, you can initialize a Project in the any directory. Then, each time you are working in that directory with Textile, it will know which project it is working with.

- `cd blog-janaka-dev`
- `textile project init blog-janaka-dev`
- This will create a file `./.textile/config.yml`. If you are using Git, you should commit this file to your code history.

#### Setup GitHub Variables

1. Go to the `Settings` tab of your new Github repo.
2. Select the `Secrets` option in the menu.
3. Add the following new secrets

| NAME | Example | Description|
|------|-------|----------|
| TEXTILE_AUTH_TOKEN | `<private textile auth token>` | Your private auth token for Textile. Do not share. You can find it on your local computer in your home dir. E.g. `cat ~/.textile/auth.yml` |
| DOMAIN_NAME | `janaka.dev` | (OPTIONAL) The raw domain you want to update on Cloudflare |
| SUBDOMAIN | `@` | (OPTIONAL) The subdomain on your site currently setup to use DNSLink. A DNSLink must exist for this record for the update to start working. [see here](https://blog.textile.io/ethden-using-ci-to-publish-your-webpage-using-ipfs-and-textile-buckets/). |
| CLOUDFLARE_TOKEN | `` | (OPTIONAL) Cloudflare token capable of updating your DNS records, [see here](https://blog.textile.io/ethden-using-ci-to-publish-your-webpage-using-ipfs-and-textile-buckets/). |
| CLOUDFLARE_ZONE_ID | `` | (OPTIONAL) Zone Id of your domain on Cloudflare, [see here](https://blog.textile.io/ethden-using-ci-to-publish-your-webpage-using-ipfs-and-textile-buckets/). |

#### Update your GitHub Actions

There is a value in each of the four workflows you need to update. You can find those files in,

* [.github/workflows/bucket_pull_request.yml](https://github.com/textileio/gatsby-ipfs-blog/blob/master/.github/workflows/bucket_pull_request.yml)
* [.github/workflows/bucket_remove.yml](https://github.com/textileio/gatsby-ipfs-blog/blob/master/.github/workflows/bucket_remove.yml)
* [.github/workflows/bucket_publish.yml](https://github.com/textileio/gatsby-ipfs-blog/blob/master/.github/workflows/bucket_publish.yml)
* [.github/workflows/update_dnslink.yml](https://github.com/textileio/gatsby-ipfs-blog/blob/master/.github/workflows/update_dnslink.yml)
  
In each of those files, change the value for `BUCKET_NAME` from `'gatsby-ipfs-blog'` to your unique bucket name.

| NAME | Example | Description|
|------|-------|----------|
| BUCKET_NAME | `blog-janaka-dev` | A globally unique name for your blog, containing no spaces or special characters |

