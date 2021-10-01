---
title: "Introducing Osobisty, My Universal Personal Search Engine"
description: "Over the past 3 weeks I built a universal personal search system which I've named Osobisty"
tags: "#personal-search-engine #pkm #react-js #typesense"
date: 2021-10-01
lastmodified: 2021-10-01T11:33:47.01Z
---

Over the past 3 weeks I built a universal personal search system which I've named Osobisty (which means personal or private in Polish). I'll dive deeper into _why_ I need Osobisty in another post. The short story is I'm looking at ways to improve how I capture information, learn (turn into knowledge), and recall that information+knowledge when needed. This post is about why I decided to **build this rather than "buy"** along with some technical details.

## What is a Universal Personal Search Engine?

It's a single place to _search_ and _access_ my curated content both public or private. I currently have private notes (Zettlekasten), Kindle highlights, and bookmarked tweets indexed. Bookmarked web pages are next on the list. Contact list, stared emails , and stared Google Drive content might come down the road. You get the idea.

## Inspiration

The penny dropped when I heard Linus Lee (aka [The Sephist](https://twitter.com/thesephist)) talk about his [Monocle project](https://thesephist.com/posts/monocle/) on the [The Changelog E455 - Building Software for Yourself](https://changelog.com/podcast/455). The problem(s) he's trying to solve resonated. [Apollo](https://github.com/amirgamil/apollo) is another personal search engine, inspired by Monocle, which I also looked at.

The reasons why Linus builds his own software also resonated. I used to outright dismiss the idea but I'll give it more consideration going forward. However I don't intend to build my own solutions to the extent Linus has. I'm definitely not going to build an entire custom stack and tool chain. I might implement a very basic programming language for fun and learning.

As a side note Linus is a [side project](https://thesephist.com/projects/) machine, he's obviously a very talented engineer. He shares a lot of interesting thoughts on various topics from creative work, productivity, startups, to life. It's worth following his writing for inspiration if those topics interest you.

## Why build my own solution?

Generally my preference is to buy rather than build. Other than websites and this [Desktop Clock](https://twitter.com/janaka_a/status/1279422672808620033?s=20) I've never built software for personal use. My important _needs_ and problems don't tend to be unique so somebody else has already built a solution that is good enough. The same is of course true in this case so here are my reasons.

My main requirements:

1) Full control over my private data. I can choose to not expose the system over the Internet. If it's way less likely to get hacked and leaked in a public way compared to a commercial service.
2) No data and information lock-in (including meta). I want to manage as much of the data as possible in easy to edit Markdown because want it to be super portable over a long period of time (multiple decades into the future).
3) Support for ingesting _my_ information sources. This meant having the flexibility to extent with custom source formats.

These criteria exclude SaaS solutions. By those requirements Monocle or Apollo are still in the run, they both can meet my main requirements. However, Monocle is built in Linus' custom programming language (Ink) and UI framework (Torus). Apollo is written in Golang. If I'm going to spend any time coding I want to use languages and technology that are the most broadly applicable in the industry today. That gives me the most return on time-investment because I gain knowledge that helps with my day job. Which gets at the **other key reason to build rather than buy. I want a good excuse to code and build, because I enjoy it**. Something that adds value to learning and my day job makes it worth while.

I think it's obvious why I don't want to learn Ink and Torus ([Linus' reasons are legit](https://thesephist.com/posts/pl/)). What's the problem with Golang then? It's applicable in the industry. But I don't want to build a web UI using Golang. It's the wrong tool for the job in my opinion. If I decided to build the search engine backend myself I may have used Golang but I decided not to hand build that (more about that below). Unlike Linus I don't have a goal to learn the insides of a search engine implementation. It's something I've already dabbled in, though 10-15yrs ago, and I don't need to understand it any deeper at this time. Of course assuming I could find a suitable search engine to build on top of...

## Technologies used to build Osobisty

UI - ReactJS + TypeScript.
Crawlers and indexers - NodeJS + TypeScript
Search engine - [Typesense](https://typesense.org/) a fast OSS search engine that's really easy to work with. I started out considering DuckDB which I'd come across recently (I think on [Changelog E454](https://changelog.com/podcast/454)) which supported text indexing. And Lucene was probably one of my backup options. But then I discovered Typesene. I also looked at [Meilisearch](https://www.meilisearch.com/) but Typesense seemed to be better all-round. I didn't do a deep analysis, just on paper assessment.

React is a [very popular industry choice](https://insights.stackoverflow.com/survey/2021#section-most-popular-technologies-web-frameworks) for web UI and I'm familiar with it. I did consider using this as an excuse to try out [NextJS](https://nextjs.org/) but decided against the overhead for now. I wanted to balance productivity and learning. Given the UI was going to be Typescript I decided to use the same for the indexers, again remove the learning/refreshing overheard of two languages rather double down on one.

As a starting point the UI and functonality is clone of Monocle (full credit to Linus in the code) which I plan to Open Source soon.

I've also started to work on an accompanying Chrome extension. More on that in a separate post. This is also inspired by Linus, he has a Chrome extension that does semantic search in Monocle to surface related content to a web page is browsing. It looks like I'll have to implement the semantic search algorithm.