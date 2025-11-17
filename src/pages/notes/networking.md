---
date: 2025-11-08T12:00:00-07:00
description: Learn computer networking basics like how devices connect, switching methods, network types, topologies, and the OSI model.
keywords: networking, computer networks, packet switching, network topology, OSI model, LAN, WAN, router, switch, protocols, Internet, data transfer, Karthik Kadambi
slug: networking
title: What is Networking | Connecting Multiple Devices
tags:
 - notes
 - Internet
---

Now that you understand [communication](/notes/what-is-communication) and [data communication](/notes/data-communication), the next step is learning how multiple devices connect together. That is where networking begins.

Networking is the system that allows computers, phones, routers, and servers to communicate in an organized and scalable way. It decides how data should travel, how devices are identified, and how information reaches the right destination.

This article explains networking at a beginner-friendly level without going too deep.

<h3 class="header-branding">What is a Network?</h3>

A network is a group of two or more devices connected together so they can share data and resources.

**Examples:**

**Your home Wi-Fi:** Phones, laptops, TV, and router talking to each other.

**Office network:** Multiple computers connected through switches and routers.

**The Internet:** Billions of devices connected globally.

A network turns simple point-to-point communication into structured communication among many devices.

<h3 class="header-branding">Why Networks exist</h3>

Without networks, each pair of devices would need a dedicated link. This is not scalable.

**Example:** If five devices needed to talk to each other directly, they would require ten separate links.

Networks solve this problem by having devices connect to a central system that forwards data intelligently. This reduces complexity and allows thousands of devices to communicate through fewer connections.

**Networking brings:**

- Easy sharing of data
- Shared access to printers and storage
- Internet connectivity
- Faster communication between systems
- Resource pooling and efficiency

<p></p>

<h3 class="header-branding">Switching methods in Networking</h3>

Switching determines how data travels inside a network. There are three main switching techniques used historically.

**1. Message Switching**

Used in old telegraph networks.

- Complete message is sent to a station.
- Station stores the message and forwards it to the next station.
- Slow, since the whole message must arrive before forwarding.

**2. Circuit Switching**

Used in telephone networks.

- A dedicated path is created between sender and receiver.
- The path stays open until communication ends.
- Great for voice calls, but inefficient for data.

**3. Packet Switching**

Used in modern computer networks and the Internet.

- Data is broken into small pieces called packets.
- Each packet travels independently.
- If one path is busy, packets take an alternate route.

Packet switching is the foundation of the Internet because it is efficient, fast, and fault-tolerant.

<p></p>

<h3 class="header-branding">Types of Networks by size</h3>

Networks can be classified based on geographic coverage.

| Type                              | Coverage                         | Description                                     |
| --------------------------------- | -------------------------------- | ----------------------------------------------- |
| **LAN (Local Area Network)**      | Small area (home, office)        | Fast, low cost, controlled by one organization  |
| **MAN (Metropolitan Area Network)** | City or campus                 | Used by service providers and large campuses    |
| **WAN (Wide Area Network)**       | Large region, country, continent | Internet Service Providers operate WANs         |
| **The Internet**                  | Global                           | Network of networks, no single owner            |

<p></p>

<h3 class="header-branding">Network Topologies</h3>

Topology explains how devices are physically or logically arranged in a network.

| Topology           | Structure                                      | Pros/Cons                                     |
| ------------------ | ---------------------------------------------- | --------------------------------------------- |
| **Bus**            | All devices share a single cable              | Simple but outdated, single point of failure  |
| **Star**           | All devices connect to a central switch        | Common in homes/offices, easy to troubleshoot |
| **Ring**           | Each device connected to two others (circle)   | Redundant, but break in ring disrupts network |
| **Mesh**           | Every device connected to every other device   | Highly reliable, expensive and complex        |
| **Hybrid**         | Combination of two or more topologies          | Used in large, complex networks               |

<p></p>

<h3 class="header-branding">Common Networking Devices</h3>

Understanding these devices helps you understand how networks are built.

**Hub:**
A basic device that sends incoming data to all ports. Inefficient and rare today.

**Switch:**
Intelligent device that sends data only to the target device. Core of modern LANs.

**Router:**
Connects different networks together. Your home router connects your LAN to the Internet.

**Modem:**
Converts digital signals to a format suitable for telephone or cable lines (and vice versa).

**Access Point:**
Provides wireless connectivity. Used in Wi-Fi networks.

**Firewall:**
Security device that monitors and controls network traffic based on rules.

<p></p>

<h3 class="header-branding">What Are Protocols?</h3>

A protocol is a set of rules that defines how data is transmitted and received.

Without protocols, devices from different manufacturers could not communicate.

**Common protocols:**

**HTTP/HTTPS:** Web browsing

**TCP:** Reliable data transfer

**UDP:** Fast, connectionless transfer (used in video streaming, gaming)

**IP:** Addressing and routing

**DNS:** Converting domain names into IP addresses

**FTP:** File transfer

Protocols ensure standardization and interoperability across the entire Internet.

<p></p>

<h3 class="header-branding">Introduction to the OSI Model</h3>

The OSI (Open Systems Interconnection) model is a conceptual framework that explains how data moves from one device to another through seven layers.

You do not need deep detail at this stage. This is just an overview.

| Layer                    | Function                                              | Examples                 |
| ------------------------ | ----------------------------------------------------- | ------------------------ |
| **7. Application**       | Used by applications like browsers and email          | HTTP, FTP, DNS           |
| **6. Presentation**      | Translates data formats; handles encryption           | SSL/TLS, JPEG, MPEG      |
| **5. Session**           | Manages sessions and connections                      | NetBIOS, RPC             |
| **4. Transport**         | Ensures reliable or fast delivery                     | TCP, UDP                 |
| **3. Network**           | Handles routing between networks                      | IP, ICMP, routers        |
| **2. Data Link**         | Moves frames within a single network                  | Ethernet, MAC addresses  |
| **1. Physical**          | Carries bits as electrical, optical, or radio signals | Cables, Wi-Fi, hubs      |

The OSI model helps us understand networks step by step and troubleshoot problems by isolating which layer is failing.

<p></p>

<h3 class="header-branding">Real-World Example: Your Home Network</h3>

Here is how networking works in a simple home environment:

1. Your laptop connects to your Wi-Fi access point.
2. The access point sends data to your router.
3. The router checks the destination IP address.
4. Router forwards data to your ISP's network.
5. Internet routers guide your packets to the destination server.
6. The server responds and packets travel back through the same structure.

Your laptop never connects directly to a website. It uses a chain of networking devices that forward your packets correctly.

<p></p>

<h3 class="header-branding">Conclusion</h3>

Networking is the foundation of modern communication. It explains how devices connect, how data is transferred, how traffic is managed, and how the Internet functions at scale.

You have now learned:
- Why networks exist and how they solve scalability problems
- Different switching methods (packet switching powers the Internet)
- Network types (LAN, WAN, Internet)
- Common topologies and devices
- The role of protocols in standardization
- A high-level view of the OSI model

Understanding networking prepares you to dive deeper into topics like IP addressing, routing, TCP/IP, and how the Internet actually works.