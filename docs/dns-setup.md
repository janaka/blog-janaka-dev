# DNS Setup

Setup a DNS for the site, using IPNS and DNSlink, which doesn't need to be updated with each IPFS `add`. When using the apex record of a domain things are a little more tricky than using some other hostname part like `www` or `blog`. Mainly because you cannot create an apex record of type=CNAME.

- Create A record: name=`@`, ttl=`2m`, IPv4=`<cloudflare gateway ips>`. Do a dig type=`A` on `cloudflare-ipfs.com` to get all the IPv4 addresses. (optional) We can repeat the same with type=`AAAA` to add an IPv6 record for the apex.
- Create a DNSlink record. Add a record with type=`TXT`, name=`@`, value=`dnslink=/ipns/$PEER_ID`. Note the $PEER_ID comes from the `ipfs name publish` step in the local publish instructions.
- Add HTTPS support: follow instructions here to generate a TLS cert [](https://www.cloudflare.com/distributed-web-gateway/).
The `.dev` TLD is forced to HTTPS. The IPFS public gateway doesn't support TLS for custom domains. But the CloudFlare gateway does (:thanksyou: CloudFlare).