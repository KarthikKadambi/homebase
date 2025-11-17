---
date: 2025-11-12T20:25:00-07:00
description: Learn how subnetting divides networks into smaller parts. Understand network bits, host bits, CIDR notation, and subnet masks.
keywords: subnetting, subnet mask, CIDR, IP addressing, network segmentation, routing, network bits, host bits, IPv4, networking, network design
slug: subnet
title: Subnetting | How Networks are Divided and Organized
tags:
 - notes
 - Internet
---

Subnetting is one of the most important concepts in networking. It explains how a single large network can be divided into smaller and more organized networks. This helps with security, performance, and efficient use of IP addresses.

You do not need advanced math to understand subnetting. You only need to know how networks are split into two parts: one part identifies the network, the other part identifies the device inside that network.

This article explains subnetting simply and visually.

<h3 class="header-branding">What is a Subnet</h3>

A subnet is a smaller part of a larger network. When you subnet, you divide a large network into multiple smaller ones.

**Example:**

You have the network `192.168.1.0/24`.

It contains 256 addresses.

You can split it into two smaller networks, each containing 128 addresses.

Subnetting helps networks stay organized and reduces congestion.

<h3 class="header-branding">Why Subnetting exists</h3>

**Subnetting provides several benefits:**

**1. Better security:**
Devices in one subnet cannot reach another subnet unless rules allow it.

**2. Better performance:**
Reduces broadcast traffic and improves speed.

**3. Better organization:**
You can group devices logically. Example: one subnet for servers, one subnet for cameras, one subnet for employees.

**4. Efficient use of IPs:**
You avoid wasting large blocks of addresses when only a few devices are needed.

Subnetting is the foundation of modern network design.

<h3 class="header-branding">Understanding Network Bits and Host Bits</h3>

An IP address has two sections:

**Network part:**
Identifies the network.

**Host part:**
Identifies the device inside that network.

**Example:**

`192.168.1.0/24`

- First 24 bits are the network part.
- Last 8 bits are the host part.
- Total hosts possible: 256.

When you change the subnet mask, you change how many bits belong to the network and how many belong to the hosts.

That is the entire logic behind subnetting.

<h3 class="header-branding">CIDR Notation</h3>

CIDR means Classless Inter-Domain Routing.

It represents the network with a slash value. Examples: `/24`, `/25`, `/26`, `/16`.

This number tells how many bits belong to the network part.

**Examples:**

- `/24` means 24 bits for network.
- `/25` means 25 bits for network.
- `/26` means 26 bits for network.

More network bits means fewer host bits.
Fewer network bits means more hosts per subnet.

<h3 class="header-branding">A Simple Example of Subnetting</h3>

Start with a common network:

`192.168.1.0/24`

This network has:

- 256 IPs (from `192.168.1.0` to `192.168.1.255`)
- 254 usable IPs for devices
- 1 network address
- 1 broadcast address

Now, split this network into two sub-networks.

**Two subnets of 128 IPs each:**

`192.168.1.0/25`
Range: `192.168.1.0` to `192.168.1.127`

`192.168.1.128/25`
Range: `192.168.1.128` to `192.168.1.255`

This is subnetting. You took a `/24` and turned it into two `/25` networks.

<h3 class="header-branding">Subnet Mask Explained</h3>

Subnet mask shows which bits are network bits.

**Examples:**

- `/24` means mask is `255.255.255.0`
- `/25` means mask is `255.255.255.128`
- `/26` means mask is `255.255.255.192`

Mask values grow larger as the network portion grows.

Subnet mask helps devices know if another device is inside the same subnet or in a different one. If both devices share the same network address, routing is not needed. If not, the packet goes to a router.

<h3 class="header-branding">How Routers Use Subnets</h3>

Routers use subnet boundaries to decide where to send packets.

**If both devices are in the same subnet:**
Packet is sent directly.

**If devices are in different subnets:**
Packet goes to router, which forwards it to the correct network.

Subnetting helps routers make faster decisions.

<h3 class="header-branding">Real-World Subnetting Use Cases</h3>

**Home networks:**

Many routers use:
- `192.168.0.0/24`
- `192.168.1.0/24`

**Offices:**

Networks are divided for departments.

Examples:
- `10.0.1.0/24` for HR
- `10.0.2.0/24` for Engineering
- `10.0.3.0/24` for Guests

**Data centers:**

Subnets isolate servers and improve security.

Examples:
- One subnet for web servers
- One for database servers
- One for backup systems

Subnetting is everywhere.

<h3 class="header-branding">The Simplest Way to Think About Subnetting</h3>

Subnetting is just splitting and grouping.

If you remember three rules, you understand subnetting:

1. A subnet mask decides how many bits belong to the network.
2. More network bits means smaller subnets.
3. Routers use subnet boundaries to forward packets.

Everything else is math on top of this idea.
You do not need deep math unless you take certifications like CCNA.

<h3 class="header-branding">Conclusion</h3>

Subnetting is a method to divide networks into smaller and more manageable parts. It makes networks more secure, more organized, and more efficient. You now understand what network bits and host bits are, how CIDR works, how subnets are created, and why subnetting is essential for routing.