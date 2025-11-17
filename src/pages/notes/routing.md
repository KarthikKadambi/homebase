---
date: 2025-11-15T20:25:00-07:00
description: Learn how routing works, how packets find their path across networks, routing tables, static vs dynamic routing, and BGP basics.
keywords: routing, routers, routing table, static routing, dynamic routing, BGP, OSPF, packet forwarding, next hop, default route, networking, internet routing
slug: routing
title: Routing Basics | How Packets Find Their Path
tags:
 - notes
 - Internet
---

Routing is one of the most important ideas in networking. When you send a message across the internet, the message does not travel in a straight line. It passes through multiple routers that guide the packet to the correct destination. This process is called routing.

Routing ensures that data can travel between networks, across cities, across countries, and across the world. Without routing, the internet would not exist.

This article explains routing in a simple way that connects directly with what you learned about IP addresses and subnetting.

<h3 class="header-branding">What is Routing</h3>

Routing is the process of selecting a path for data to travel across one or more networks.

Routers are devices that:

- Read the destination IP in a packet.
- Decide the best path to reach the destination.
- Forward the packet to the next router in the path.

Routing is the reason devices in your home can talk to servers anywhere on the internet.

<h3 class="header-branding">Why Routing Exists</h3>

Inside one subnet, devices communicate directly.
Across different subnets, direct communication does not work because devices are in different networks.

Routing exists because:

- The world has millions of networks.
- Packets must cross many networks to reach destinations.
- Routers act as guides for packets.

Routing turns isolated networks into one global system called the Internet.

<h3 class="header-branding">What a Router Actually Does</h3>

Every time a router receives a packet, it performs three steps:

**1. Reads the destination IP:**
The router checks the IP address inside the packet header.

**2. Looks up the routing table:**
A routing table tells the router which path to use for each network.

**3. Forwards the packet:**
The router sends the packet to the next router on the path. This next router is called the next hop.

Routers do this many millions of times per second.

<h3 class="header-branding">Routing Table Explained</h3>

A routing table is a list of network entries.

**Example:**

```
Destination network    Next hop       Interface
192.168.1.0/24         Direct         LAN port
10.0.0.0/8             Router A       eth0
0.0.0.0/0              Router B       WAN port
```

Each entry includes:

- The destination network
- The next hop router
- The outgoing interface

Routers choose the most specific matching network.
That means the longest prefix match wins.

**Example:**
`192.168.1.0/24` is more specific than `0.0.0.0/0`.

<h3 class="header-branding">Default Route: The Internet Shortcut</h3>

A default route is used when the router does not know where to send a packet.
It is written as:

- `0.0.0.0/0` for IPv4
- `::/0` for IPv6

In home networks, your router sends unknown traffic to your ISP using the default route. Your ISP then routes it to the global internet.

<h3 class="header-branding">Types of Routing</h3>

There are two main routing methods:

**1. Static Routing**

In static routing:

- Routes are manually configured.
- Routers do not change paths automatically.
- Useful in small networks.

**Example:**
You tell a router that `10.0.0.0/24` is behind Router B.

Static routing is simple and predictable.

**2. Dynamic Routing**

In dynamic routing:

- Routers share routing information automatically.
- Paths update when networks change.
- Used by ISPs and large companies.

Dynamic routing uses protocols such as:

- OSPF
- BGP
- RIP
- EIGRP

You do not need deep detail now. Just know that dynamic routing handles large and constantly changing networks.

<h3 class="header-branding">How Packets Travel Across the Internet</h3>

Here is the high-level flow when you access a website:

**Step 1. Your device sends the packet:**
Destination IP is the server address.

**Step 2. Packet goes to your router:**
Your router checks its routing table.

**Step 3. Packet goes to your ISP:**
Your ISP router has hundreds of routes.

**Step 4. ISP sends it to bigger networks:**
The packet hops between routers, each with its own table.

**Step 5. Packet arrives at the server network:**
The server router knows exactly where the server is located.

**Step 6. Response flows back:**
Packets return through a similar path.
Paths do not have to be identical. Routing is dynamic.

<h3 class="header-branding">What Is BGP</h3>

BGP is the protocol that ISPs use to exchange routes.
It connects thousands of independent networks called Autonomous Systems.

BGP decides:

- Which ISP your traffic goes through
- Which paths are reliable
- Which networks are reachable

BGP is why you can reach any website, even if it is across the world.

You do not need deep BGP knowledge as a beginner.
Just know that BGP makes worldwide routing possible.

<h3 class="header-branding">Routing vs Switching</h3>

Routing and switching are closely related but different.

| Switching                        | Routing                         |
| -------------------------------- | ------------------------------- |
| Works inside one network         | Works between networks          |
| Uses MAC addresses               | Uses IP addresses               |
| Faster because it is local       | Slower because it is global     |
| Used by switches                 | Used by routers                 |

Switching moves frames.
Routing moves packets.

You need both for the internet to work.

<h3 class="header-branding">Real-World Routing Example</h3>

**Example: You connect to google.com.**

1. Your laptop creates a packet with destination IP `142.250.72.14`
2. Your router checks if the IP is on the same subnet
3. It is not, so router uses the default route
4. ISP router receives the packet and checks global routes
5. Router forwards packet to a larger backbone network
6. Packet moves through multiple Tier 1 ISPs
7. It reaches Google's nearest data center
8. The server processes your request and sends the response back

All of this happens in milliseconds.

Routing makes long-distance communication possible.

<h3 class="header-branding">Conclusion</h3>

Routing is the system that guides packets across networks, across countries, and across the world. Routers read destination IPs, check routing tables, choose paths, and forward packets to the next hop. With routing, small home networks connect to large ISP networks and eventually to the global internet.

You now understand routing tables, static and dynamic routes, default routes, packet flow, and how global routing works.