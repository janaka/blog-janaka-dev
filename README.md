# [janaka.dev](janaka.dev)

Personal blog by Janaka Abeywardhana. Thoughts and notes on web technology, software development, and technical product managenement.

The main version at https://janaka.dev is hosted traditionally. A mirror at https://ipfs.janaka.dev is hosted on [IPFS](ipfs.io). A key reason for creating this site and using a static site generator was to host on IPFS as a learning exercise (web3). I've not managed to get IPFS hosting working reliably. So for now web2 hosting until I figure it out.

Forked from [Gatsby blog starter](https://github.com/gatsbyjs/gatsby-starter-blog).
Help and inspiration from [overreacted.io by Dan Abramov](https://github.com/gaearon/overreacted.io).
Syntax theme based on [Sarah Drasner's Night Owl](https://github.com/sdras/night-owl-vscode-theme/) with small tweaks. Copied from overreacted.io.

## Contributions

No third-party contributions except for code and content fixes. PRs welcome.

[Supported languages](https://prismjs.com/#supported-languages) in code blocks


### Deploy to IPFS [https://ipfs.janaka.dev](https://ipfs.janaka.dev)

- Push to master on Github triggers the deploy workflow on [fleek.co](fleek.co)

### Deploy to traditional hosting [https://janaka.dev](https://janaka.dev)

- Push to master on Github triggers the deploy workflow on Github actions

### To run locally

- run `yarn dev`
- open [https://localhost:8000](https://localhost:8000)

### Deploy to IPFS manually from local

This is not the preferred option.

- `yarn build`
  Note: This command wraps `gatsby build`
- `cd blog-janaka-dev`
- `ipfs add -r public`
- (One off step) create custome key `ipfs key gen --type=rsa -size=2048 blog-janaka-dev`
  Should return a `$PEER_ID`
- (one off step) create TLS cert?
- `ipfs name publish --key=blog-janaka-dev $CID` $CID is the content ID from the add step
  Should return `Published to $PEER_ID: /ipfs/$CID`

refs: [https://docs-beta.ipfs.io/how-to/host-single-page-site/#create-your-site](https://docs-beta.ipfs.io/how-to/host-single-page-site/#create-your-site)

### Deploy to S3 hosting from local

This is not the preferred option. Use this only if local testing of CI/CD is require for troubleshooting

- Add the following to a `.env` file

  ```env
  AWS_S3_BUCKET_NAME=<bucket name>
  AWS_REGION=<aws region>
  AWS_PROFILE=<aws credentials profile name>
  ```

- `yarn build`
- `yarn deploy`

## Setup

- [CI/CD with Github action](./docs/ci-cd-setup.md)
- [DNS](./docs/dns-setup.md)
