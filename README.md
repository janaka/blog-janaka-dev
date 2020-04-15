# [janaka.dev](janaka.dev)

Personal blog by Janaka Abeywardhana. Thoughts and notes on web technology, software development, and technical product managenement.

The main version at https://janaka.dev is hosted traditionally. A mirror at https://ipfs.janaka.dev is hosted on [IPFS](ipfs.io). A key reason for creating this site and using a static site generator was to host on IPFS as a learning exercise (web3). I've not managed to get IPFS hosting working reliably. So for now I've web2 hosting until I figure it out.

Forked from [Gatsby blog starter](https://github.com/gatsbyjs/gatsby-starter-blog).
Help and inspiration from [overreacted.io by Dan Abramov](https://github.com/gaearon/overreacted.io).
Syntax theme based on [Sarah Drasner's Night Owl](https://github.com/sdras/night-owl-vscode-theme/) with small tweaks. Copied from overreacted.io.

## Contributions

No third-party contributions except for code and content fixes.

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
- (one off step) create TLS cert?
- `ipfs name publish --key=blog-janaka-dev $CID` $CID is the content ID from the add step
  Should return `Published to $PEER_ID: /ipfs/$CID`

refs: [](https://docs-beta.ipfs.io/how-to/host-single-page-site/#create-your-site)

### To publish using CI/CD

- Creating a branch PR against master will publish a temp preview. See the GH action output for the temp preview URL.
- While the branch PR is up, each push to the branch should update the preview.
- Merging the branch PR to master will update the production version.
- Pushing directly to master will also update the production version.

## Setup

[CI/CD with Github action](./docs/ci-cd-setup.md)
[DNS](./docs/dns-setup.md)
