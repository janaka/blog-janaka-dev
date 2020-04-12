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
  Note: This command wraps `gatsby build --prefix-paths`. We are publishing to IPFS which needs relative paths. Gatsby doesn't support relative paths out of the box. So we use a plugin to make a Gatsby site IPFS compatible.
- `cd blog-janaka-dev`
- `ipfs add -r public`
- `ipfs name publish $CID` $CID hash for `publish/` from previous step.
  Should return `Published to $PEER_ID: /ipfs/$CID`

refs: [](https://docs-beta.ipfs.io/how-to/host-single-page-site/#create-your-site)

### To publish to IPFS using CI/CD

- Creating a branch PR against master will publish a temp preview. See the GH action output for the temp preview URL.
- While the branch PR is up, each push to the branch should update the preview.
- Merging the branch PR to master will update the production version.
- Pushing directly to master will also update the production version.

## DNS Setup

Setup a DNS for the site, using IPNS and DNSlink, which doesn't need to be updated with each IPFS `add`. When using the apex record of a domain things are a little more tricky than using some other hostname part like `www` or `blog`. Mainly because you cannot create an apex record of type=CNAME.

- Create A record: name=`@`, ttl=`2m`, IPv4=`<cloudflare gateway ips>`. Do a dig type=`A` on `cloudflare-ipfs.com` to get all the IPv4 addresses. (optional) We can repeat the same with type=`AAAA` to add an IPv6 record for the apex.
- Create a DNSlink record. Add a record with type=`TXT`, name=`@`, value=`dnslink=/ipns/$PEER_ID`. Note the $PEER_ID comes from the `ipfs name publish` step in the local publish instructions.
- Add HTTPS support: follow instructions here to generate a TLS cert [](https://www.cloudflare.com/distributed-web-gateway/).
The `.dev` TLD is forced to HTTPS. The IPFS public gateway doesn't support TLS for custom domains. But the CloudFlare gateway does (:thanksyou: CloudFlare).

## How to setting up CI/CD using textile.io

TODO: move the following to a separate doc and link from here.

### Install textile.io cli

- Download and extract binary from [](https://github.com/textileio/textile/releases)
- `cd <expanded folder name>` > `./install`
- `textile --help` should return

### Create a Textile login and team

Textile uses passwordless login for all users, giving them remote IPFS pinning for their projects.

- `textile login`
  follow the instructions.

- `textile whoami`
  Should now show you your account.
  
If you think you'll want to collaborate with others, you should create a team and then enter your team before creating projects and buckets.

- `textile team add <NAME>`
- `textile switch`

### Initialize a Textile Project

All Buckets are part of Projects. To make Project management easy, you can initialize a Project in the any directory. Then, each time you are working in that directory with Textile, it will know which project it is working with.

- `cd blog-janaka-dev`
- `textile project init blog-janaka-dev`
- This will create a file `./.textile/config.yml`. If you are using Git, you should commit this file to your code history.

### Setup GitHub Variables

1. Go to the `Settings` tab of your new Github repo.
2. Select the `Secrets` option in the menu.
3. Add the following new secrets

| NAME | Example | Description|
|------|-------|----------|
| TEXTILE_AUTH_TOKEN | `<private textile auth token>` | Your private auth token for Textile. Do not share. You can find it on your local computer in your home dir. E.g. `cat ~/.textile/auth.yml` |
| DOMAIN_NAME | `janaka.dev` | (OPTIONAL) The raw domain you want to update on Cloudflare |
| SUBDOMAIN | `@` | (OPTIONAL) The subdomain on your site currently setup to use DNSLink. A DNSLink must exist for this record for the update to start working. [see here](https://blog.textile.io/ethden-using-ci-to-publish-your-webpage-using-ipfs-and-textile-buckets/). |
| CLOUDFLARE_TOKEN | `<token_here>` | (OPTIONAL) Cloudflare token capable of updating your DNS records, [see here](https://blog.textile.io/ethden-using-ci-to-publish-your-webpage-using-ipfs-and-textile-buckets/). |
| CLOUDFLARE_ZONE_ID | `<zone_id_here>` | (OPTIONAL) Zone Id of your domain on Cloudflare, [see here](https://blog.textile.io/ethden-using-ci-to-publish-your-webpage-using-ipfs-and-textile-buckets/). |

### Update your GitHub Actions

There is a value in each of the four workflows you need to update. You can find those files in,

- [.github/workflows/bucket_pull_request.yml](https://github.com/textileio/gatsby-ipfs-blog/blob/master/.github/workflows/bucket_pull_request.yml)
- [.github/workflows/bucket_remove.yml](https://github.com/textileio/gatsby-ipfs-blog/blob/master/.github/workflows/bucket_remove.yml)
- [.github/workflows/bucket_publish.yml](https://github.com/textileio/gatsby-ipfs-blog/blob/master/.github/workflows/bucket_publish.yml)
- [.github/workflows/update_dnslink.yml](https://github.com/textileio/gatsby-ipfs-blog/blob/master/.github/workflows/update_dnslink.yml)
  
In each of those files, change the value for `BUCKET_NAME` from `'gatsby-ipfs-blog'` to your unique bucket name.

| NAME | Example | Description|
|------|-------|----------|
| BUCKET_NAME | `blog-janaka-dev` | A globally unique name for your blog, containing no spaces or special characters |

refs: 
[](https://blog.textile.io/ethden-using-ci-to-publish-your-webpage-using-ipfs-and-textile-buckets/)
[](https://github.com/textileio/gatsby-ipfs-blog/blob/master/README.md)