---
title: "Side Project Intro - EasyRunner"
description: "Why I scratched my own itch and built a no-surprises, single-server PaaS called EasyRunner."
tags: "#side-projects #paas"
date: 2025-07-03
lastmodified: 2025-07-04T10:15:00Z
---

Ever shipped a side project, crossed your fingers, and prayed the infra bill wouldn’t explode overnight?  
Yeah, me too. That moment sparked **EasyRunner**.

## [EasyRunner.xyz](https://easyrunner.xyz)

EasyRunner is a single-server, self-hosted Platform-as-a-Service aimed at indie hackers and solopreneurs building SaaS products. It guarantees no surprise bills and avoids lock-in.

The first release is a CLI that configures an Ubuntu VM (or VPS) on any cloud provider for painless app deployment. Communication and configuration happen agent-lessly over SSH. The hosting stack is Caddy (reverse proxy) and Podman (container runtime). The CLI itself is written in Python.

I've been working on EasyRunner on and off since the end of last year. It’s already usable, but a few rough edges need tidying up before launch.

### Origin story — scratching my own itch

This project grew out of challenges I hit while building [Docq.AI](https://docq.ai). Our monolithic app relies on an embedded SQLite DB and a handful of ML models, so Azure App Service wasn’t an option — we needed directly attached disk.

Spinning up an Azure VM, automating the infra, bolting on App Gateway … it reminded me that cloud still feels like pulling teeth. Provisioning VMs and load balancers is one task; installing Podman/Docker, hardening the box, and wiring up CI/CD is another.

### What I really wanted

The Developer Experience (DX) of Vercel, Render, or Railway _plus_ the portability, cost predictability, and architectural freedom of raw VMs. Direct-attached disk? ARM CPU? Custom networking? No problem.

Hosted PaaS products impose plenty of hidden constraints — you rarely notice until you slam into them. More options mean more room to manoeuvre.

### Side-project reality check

Most side projects never need complex, highly available clusters. The trick is staying alive long enough to find traction, _without_ a heart-stopping invoice. Cheap VMs fit the bill: simple, versatile, and you can multi-tenant several apps on one box.

### Existing options didn’t click

Some competitors aren’t fully open-source, others lean on Kubernetes, or they try to solve _every_ problem and end up bloated. I’m laser-focusing EasyRunner on hosting the apps you’re building — not your media server or home automation rig.

### Licensing & next steps

EasyRunner is currently closed-source. I’ll ship it under a perpetual per-server business licence: buy once for major versions or subscribe for ongoing updates. If revenue clears a healthy threshold, I’ll share a cut with the open-source projects EasyRunner stands on.

Stay tuned — and maybe, just maybe, you can skip that next infra-induced headache.

Goto [EasyRunner.xyz](https://easyrunner.xyz) and join the waiting list to show your interest and support.
