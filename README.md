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
- (One off step) create custome key `ipfs key gen --type=rsa -size=2048 blog-janaka-dev`
  Should return a `$PEER_ID`
- `ipfs name publish --key=blog-janaka-dev $CID` $CID is the content ID from the add step
  Should return `Published to $PEER_ID: /ipfs/$CID`

refs: [](https://docs-beta.ipfs.io/how-to/host-single-page-site/#create-your-site)

### To publish to IPFS using CI/CD

- Creating a branch PR against master will publish a temp preview. See the GH action output for the temp preview URL.
- While the branch PR is up, each push to the branch should update the preview.
- Merging the branch PR to master will update the production version.
- Pushing directly to master will also update the production version.

## Setup

[CI/CD with Github action](./docs/ci-cd-setup.md)
[DNS](./docs/dns-setup.md)