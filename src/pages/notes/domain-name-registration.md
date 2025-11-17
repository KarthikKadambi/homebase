---
date: 2025-11-22T20:25:00-07:00
description: Learn how domain names are registered, managed, and connected to websites. Understand registrars, registries, DNS, and nameservers.
keywords: domain names, domain registration, registrar, registry, ICANN, DNS, nameservers, TLD, website hosting, domain management, DNS records
image: /assets/images/posts/domain.png
slug: domain-name-registration
title: Domain Names Explained | How They Are Registered and Managed
tags:
 - notes
 - Internet
---

Every website begins with a domain name. Before DNS can map a domain to an IP address, the domain must be registered. This article explains how domain names are created, bought, owned, and managed.

<h3 class="header-branding">What is a Domain Name</h3>

A domain name is a unique, human-readable label used to identify websites.

**Examples:**

- `google.com`
- `karthikkadambi.com`

A domain name points to the servers that host your website.

<h3 class="header-branding">Who Controls Domain Names Worldwide</h3>

Domain names are managed through an international system.

**ICANN:**

The Internet Corporation for Assigned Names and Numbers.
It oversees domain name policies globally.

<div class="external-link-box">
  <strong>Learn More:</strong> New to domain names? Read the <a href="https://www.icann.org/en/beginners" target="_blank" rel="nofollow noopener noreferrer">ICANN Beginners Guide</a>
</div>

**Registries:**

Organizations that manage specific TLDs.

**Examples:**
- Verisign manages `.com`
- Public Interest Registry manages `.org`
- Google manages `.app` and `.dev`

<div class="external-link-box">
  <strong>Registry Operators:</strong> View the complete list of TLD registry operators at <a href="https://www.icann.org/en/contracted-parties/registry-operators/resources/listings" target="_blank" rel="nofollow noopener noreferrer">ICANN Registry Listings</a>
</div>

**Registrars:**

Companies where you buy domains.

**Examples:**
- Porkbun
- Namecheap
- GoDaddy
- Cloudflare
- Google Domains
- Squarespace

Registrars interact with registries on your behalf.

<div class="external-link-box">
  <strong>Accredited Registrars:</strong> View the full list of ICANN accredited registrars at <a href="https://www.icann.org/en/contracted-parties/accredited-registrars/list-of-accredited-registrars" target="_blank" rel="nofollow noopener noreferrer">ICANN Registrar Listings</a>
</div>

<h3 class="header-branding">How a Domain Name is Structured</h3>

**Example:**
`blog.example.com`

Breaking it down:

- `com` is the top-level domain (TLD)
- `example` is the second-level domain
- `blog` is a subdomain

You register only the second-level domain under a TLD.

<h3 class="header-branding">How to Register a Domain Name</h3>

Registering a domain is simple.

**Step 1: Search for availability**

Use a registrar to check if the name is free.

<div class="external-link-box">
  <strong>Domain Search:</strong> Search and register domains at <a href="https://porkbun.com/" target="_blank" rel="nofollow noopener noreferrer">Porkbun</a>
</div>

**Step 2: Choose the TLD**

**Examples:**
- `.com`
- `.net`
- `.org`
- `.dev`
- `.app`

Each TLD has different pricing and rules.

**Step 3: Purchase the domain**

Registration is usually for one to ten years.
You must renew periodically to maintain ownership.

**Step 4: Assign DNS**

You set:
- Nameservers
- DNS provider
- DNS records

This connects the domain to your hosting server.

<h3 class="header-branding">What are Nameservers</h3>

Nameservers are DNS servers responsible for your domain.
They store DNS records that define where your website lives.

**Examples:**

- `ns1.cloudflare.com`
- `ns2.cloudflare.com`

You set nameservers at your registrar.

<h3 class="header-branding">How Domains point to Websites</h3>

After registering a domain, you configure DNS.

The most important records are:

- **A record:** for IPv4
- **AAAA record:** for IPv6
- **CNAME:** for aliases
- **MX record:** for email

These records tell the world where your website or services are hosted.

<h3 class="header-branding">Domain Expiration and Renewal</h3>

Domains must be renewed.
If you forget to renew:

1. The domain enters a grace period
2. Then it enters redemption period
3. It may finally become available for others to buy

Large companies often enable auto-renew to avoid losing domains.

<h3 class="header-branding">Difference between Domain Name and Hosting</h3>

People often confuse the two.

| Domain Name                      | Hosting                          |
| -------------------------------- | -------------------------------- |
| Your website address             | Where your website files live    |
| Bought from a registrar          | Bought from a hosting provider   |
| Does not store data              | Stores website content           |

Both are needed to build a website.

<h3 class="header-branding">Conclusion</h3>

Domain names are registered through a global system involving registrars, registries, and DNS. Once purchased, you configure DNS records to point your domain to a server. Understanding domain registration helps you build and manage websites confidently.