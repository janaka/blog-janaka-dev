---
title: Hosting this blog on IPFS with DNS and TLS
date: "2020-05-01T23:38:00.00Z"
description: "How I got HTTPS working"
---
I first got this site up and runng a couple of weeks back. Originally my goal was to host exclusively on IPFS. This was an excse to learn about IPFS hands-on. I wanted the site address to be `http://janaka.dev`. As I started setting that up, initially against the `ipfs.io` gateway, I learnt that the `.dev` TLD was TLS only. The `ipfs.io` gateway didn't support TLS. So now I had the additional challenge.

### CloudFlare

A little Googling and all I could find was [CloudFare's IPFS gateway](https://www.cloudflare.com/distributed-web-gateway/) that supported TLS. I had used [textile.io](textile.io) buckets to pin the content. The site was accessible through the address they generated, no porblem. But I had real problems getting the site to load reliably via the CloudFlare gateway with DNSLink and my domain. It nearly always didn't load. So I decided to host `https://janaka.dev` using S3 and have a site mirror setup at https://ipfs.janaka.dev even though at this point is wouldn't work. I needed setup to tinker with.

I couldn't find any formal support from CloudFlare for the IPFS gateway. I wasn't surprised as I knew it was somewhat an experiment. I Tweeted on the off chance. The dicussion put Fleek.co on my radar.

### Fleek.co

Fast-Forward to today. I decided randomly to give Fleek a shot. I must say it was pretty quick to get the site moved over and working successfully. Site load performance seems great and works reliably so far.

In my original setup with Textile.io + CloudFlare IPS Gateway I had to do all the work to setup CI/CD. I used Github Actions. Also Textile didn't have a way to automate the IPNS step. With Fleek, it handles CI/CD soup to nuts (I heard this saying recently and it stuck. Apprently it's American Google tells me :) ). It's all wizard driven. Logging with Github. Select the repo, it detected that it was Gatsby, filled out all the build config defaults, TLS cert etc. There were a few manual steps for DNS config of course but this is expected. I presume if my domain was managed by Fleek these would also be automted. So now https://ipfs.janaka.dev is built, deployed, and pinned via Fleek.co


