---
title: "What's Platform Engineering?"
description: "How I think about platform engineering at the momement"
tags: "#platform-engineering #platforms #infrsatructure"
date: 2021-10-27
lastmodified: 2021-10-27T14:01:47.01Z
---

"Platform Engineering" is the act of developing common internal _systems_ that enable teams working on the customer-facing product (stream-aligned[^1] or empowered[^2] teams) to focus on the customer, move faster, and scale efficiently. These systems must address a common need across most, ideally all, of engineering ([Total Addressable Market](https://en.wikipedia.org/wiki/Total_addressable_market) for Platform Engineering). These systems need to have high standards for self-service which create autonomy. Platform team success is measured by high-levels of adoption, usage, and % engineering hours freed up for customer "feature development". For success, develop, deliver, and support these systems as products by applying a Product Management mindset.

I group platform systems into two categories:

Tools - used to bake and ship a cake, the whisk used to beat the eggs and the oven. These are used at design-time/development-time throughout the development lifecycle (SDLC) aka value stream. You should think of these as the control plane of your system. Examples: testing frameworks, CI/CD systems, IDEs, launch flag systems, logging, and monitoring.

Building blocks - are the ingredients that go into the cake. The customer consumes these things. How well the cake bakes and tastes depends on the quality of the ingredients. These are runtime components, you should think of these together as the data plane. Examples: programming languages, frameworks, libraries, databases, and hosting systems.

Defining _platform_ is for another time but it's not a singular thing. A SaaS stack is composed of platforms, think of them as layers with hardware all the way at the bottom. Platform engineering in SaaS exists somewhere in the middle with everything below typically bought from cloud infrastructure providers like AWS. The lines are constantly moving as the novel practices become more commonly accepted, then productised, and eventually become a utility like AWS [^3]. If you are in platform engineering get comfortable with constantly reinventing ones job spec and technology skillset.

What's the structure of a platform engineering team? this cannot and should not be answered in isolation. It must be designed in context of the wider product engineering organisation and business which includes factors such as scale. It could be a single team, a group of teams under a common platform mission, or multiple teams under independent missions.

Ultimately platform engineering isn't defined by a universal set of responsibilities anchored around specific technologies. It's not a bucket you throw everything with labels like AWS, CI/CD, or server. Remember, the top level objective is to enable stream-aligned teams to focus on the customer, move fast, and scale. Therefore, the team structure depends on what platforms are needed which depend on what challenges the stream-aligned teams are/will be facing. There may well be some common practices and patterns that have emerged. Especially has you go lower down the stack, there should be less and less reinventing the wheel. Team Topologies[^1] and Accelerate[^4] are some of the best and broadly recognised writing on this topic to-date.

Finally, I remind myself that (internal) platform engineering isn't about solving problems with _just_ technology, remember the people factor. The culture, incentives, motivations, and team interactions all play an important part.

The above is my current (Oct 2021) best thinking based on experience and observations. If you have any thoughts, questions, or recommended reading hit me up on Twitter [@janaka_a](https://twitter.com/janaka_a).

[^1]: [Team Topologies, by Matthew Skelton](https://teamtopologies.com/key-concepts)
[^2]: [Product vs. Feature Teams, by Marty Cagan, Aug 2019](https://svpg.com/product-vs-feature-teams/)
[^3]: [Wardley Maps - Evolutionary stages, by Simon Wardley](https://twitter.com/swardley/status/988334146954170368)
[^4]: [Accelerate: Building and Scaling High Performing Technology Organizations, by Nicole Forsgren, PhD, Jez Humble, and Gene Kim](https://itrevolution.com/accelerate-book/)im](https://itrevolution.com/accelerate-book/)