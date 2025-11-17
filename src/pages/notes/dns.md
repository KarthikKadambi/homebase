---
date: 2025-11-16T20:25:00-07:00
description: Learn how DNS converts domain names to IP addresses. Understand DNS servers, records, lookup process, caching, and security.
keywords: DNS, Domain Name System, DNS servers, DNS records, A record, AAAA record, CNAME, recursive resolver, root servers, TLD servers, authoritative servers, DNS lookup, DNS caching, DoH, DoT, domain names, IP addresses, name resolution
slug: dns
title: DNS Explained | Domain Names to IP Addresses
tags:
 - notes
 - Internet
---

Every website on the Internet is hosted on a server that has an IP address. Humans are not good at remembering long numbers. So the internet uses DNS, also called the Domain Name System. DNS converts human-readable names into machine-friendly IP addresses.

When you type `google.com` or `youtube.com`, DNS finds the correct IP address and sends it back to your device. Without DNS, the internet would not be usable.

This article explains DNS in a simple and practical way, from domain names to DNS servers to the entire lookup process.

<h3 class="header-branding">What is DNS</h3>

DNS stands for Domain Name System.
It is a global directory system that maps domain names to IP addresses.

**Example:**

- Domain name: `google.com`
- IP address: `142.250.72.14`

DNS is the internet's phonebook. It makes it possible to use names instead of numbers.

Without domain names, we would need to type IP addresses like `142.250.72.14` or `2607:f8b0:4007:80a::200e` into browsers every time we want to visit a website.

<h3 class="header-branding">Why DNS Exists</h3>

Humans prefer names. Computers prefer numbers.

Imagine remembering:

- `142.250.72.14`
- `198.41.0.4`
- `23.216.147.64`

It is impossible for daily use.

DNS solves this problem by:

- Allowing websites to have friendly names.
- Handling IP changes without affecting users.
- Providing a global, distributed system to manage domains.

DNS makes the web convenient and user-friendly.

<h3 class="header-branding">How a Domain Name Works</h3>

A domain name is split into levels.

**Example:**
`www.example.com`

- `com` is the Top-Level Domain (TLD)
- `example` is the Second-Level Domain
- `www` is a subdomain

The full name is read from right to left, starting with the top-level domain.

<h3 class="header-branding">Types of DNS Servers</h3>

DNS is not a single server. It is a hierarchy of multiple server types.

**1. Root DNS Servers**

- These are the highest level.
- There are 13 root server clusters around the world.
- They know where to find Top-Level Domain servers.

<div class="external-link-box">
  <strong>Root Servers:</strong> View the official list of root DNS servers at <a href="https://www.iana.org/domains/root/servers" target="_blank" rel="nofollow noopener noreferrer">IANA Root Servers</a> and learn more at <a href="https://root-servers.org/" target="_blank" rel="nofollow noopener noreferrer">Root Servers Organization</a>
</div>

**2. TLD Servers**

They manage domains based on extension.

**Examples:**
- `.com` servers
- `.net` servers
- `.org` servers

They know where the authoritative servers for each domain are located.

**3. Authoritative DNS Servers**

These hold the actual DNS records for a specific domain.

**Example:**
If you own `example.com`, the authoritative server stores your site's IP address.

**4. Recursive Resolver**

This is the DNS server your device talks to first.
It might be your ISP DNS, or public DNS like:

- Comcast ISP DNS
- Google DNS: `8.8.8.8`
- Cloudflare DNS: `1.1.1.1`



Recursive resolver does the full lookup on your behalf.

<h3 class="header-branding">DNS Records Explained</h3>

DNS stores information using records.
Different records serve different purposes.

**A Record:**
Maps a domain name to an IPv4 address.

**AAAA Record:**
Maps a domain name to an IPv6 address.

**CNAME:**
Alias record. Points one domain to another domain.

**MX Record:**
Mail exchange record. Defines mail server for the domain.

**TXT Record:**
Stores plain text. Used for verification and authentication.

You do not need all records now. Start with A, AAAA, and CNAME.

<h3 class="header-branding">How DNS Lookup Works</h3>

Here is the exact flow when you type a domain name.

Let us use `www.example.com` as an example.

**Step 1. Your browser checks local cache:**
If it was visited recently, the answer is returned instantly.

**Step 2. Your device asks the recursive DNS resolver:**
This is usually your router or ISP DNS.

**Step 3. Resolver checks its cache:**
If cached, it returns the IP quickly.
If not, the resolver performs a full lookup.

**Step 4. Resolver asks a Root Server:**
The root server does not know the IP.
It tells the resolver: go ask the `.com` TLD server.

**Step 5. Resolver asks the TLD Server:**
The TLD server does not know the IP. It tells the resolver, go ask the authoritative server for `example.com`.

**Step 6. Resolver asks the Authoritative Server:**
The authoritative server gives the actual IP address.

**Step 7. Resolver returns the IP to your device:**
Your device uses this IP to contact the website.

**Step 8. Browser connects directly to the server:**
The DNS process is finished.
Your device now knows exactly where to send packets.

This entire flow usually takes a few milliseconds.

<div class="external-link-box">
  <strong>Visual Guide:</strong> For a visual explanation, check out <a href="https://howdns.works/" target="_blank" rel="nofollow noopener noreferrer">How DNS Works</a>
</div>

<h3 class="header-branding">DNS Caching</h3>

DNS results are stored temporarily for faster performance.
Caching happens in multiple places:

- Browser cache
- Operating system cache
- Router cache
- ISP DNS resolver cache
- Cloud DNS cache (Cloudflare, Google DNS)

Caching reduces lookup time and reduces DNS traffic.

TTL (Time To Live) controls how long DNS results stay in cache.

This is why websites load faster after the first visit. Once the IP is found, DNS stores the result for a short time to avoid repeating the entire lookup.

<h3 class="header-branding">Dynamic IP Changes do not break Websites</h3>

A website can change its server IP address without affecting users.
Only the DNS record needs to be updated.

**Example:**

1. A website originally points to `192.0.2.10`
2. The server migrates to a new IP `198.51.100.50`
3. The DNS A record is updated to the new IP
4. Users still type the same domain name
5. DNS now returns the new IP address

This makes domain names extremely flexible and allows websites to move between servers, data centers, or cloud providers without users noticing any change.

<h3 class="header-branding">What Happens if DNS Fails</h3>

If DNS stops working:

- Websites cannot be found
- Apps cannot reach servers
- Emails stop
- Login systems break
- Streaming fails

The internet becomes unreachable even though the physical network works. This shows how important DNS is.

<h3 class="header-branding">DNS over HTTPS and DNS over TLS</h3>

Modern DNS supports encryption.

**DNS over HTTPS (DoH):**
Sends DNS queries inside HTTPS to prevent spying.

**DNS over TLS (DoT):**
Encrypts DNS traffic at a lower level.

**Benefits:**

- Privacy protection
- Prevents attackers from snooping DNS queries
- More secure browsing

Services like Cloudflare and Google provide encrypted DNS.

<div class="external-link-box">
  <strong>Learn More:</strong> Explore DNS services from <a href="https://one.one.one.one/dns/" target="_blank" rel="nofollow noopener noreferrer">Cloudflare DNS</a> and <a href="https://developers.google.com/speed/public-dns" target="_blank" rel="nofollow noopener noreferrer">Google Public DNS</a>
</div>

<h3 class="header-branding">Conclusion</h3>

DNS is the naming system of the internet. It converts human-friendly domain names into machine-friendly IP addresses. DNS uses a hierarchy of servers, caching, and efficient lookup processes to make browsing fast and reliable.

Without DNS, the web would be a complex network of IPs that humans cannot remember. DNS makes the internet accessible and user-friendly.

You now understand:

- Domain names and why they exist
- DNS record types (A, AAAA, CNAME, MX, TXT)
- Root, TLD, and authoritative servers
- How DNS lookup works step by step
- DNS caching and performance optimization
- DNS security with DoH and DoT
- How dynamic IP changes work seamlessly