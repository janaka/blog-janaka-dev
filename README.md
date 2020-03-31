# [janaka.dev](janaka.dev)

Personal blog by Janaka Abeywardhana.

Forked from [Gatsby blog starter](https://github.com/gatsbyjs/gatsby-starter-blog).
Help and inspiration from [overreacted.io by Dan Abramov](https://github.com/gaearon/overreacted.io).

## Contributions

No third-party contributions except content or code bug fixes.

### To run locally

- run `yarn dev`
- open [](https://localhost:8000)

### To publish to IPFS manually

- run `yarn build`
- `cd blog-janaka-dev`
- `ipfs add -r public`
- `ipfs name publish $CID` $CID hash for `publish/` from previous step

### To publish to IPFS using CI/CD

TODO