---
date: 2025-11-09T12:00:00-07:00
description: Learn what IP addresses are, how they identify devices, IPv4 vs IPv6, public vs private IPs, subnetting, NAT, and routing basics.
keywords: IP address, IPv4, IPv6, networking, subnetting, CIDR, NAT, public IP, private IP, routing, MAC address, DHCP, DNS, Internet, Karthik Kadambi
slug: ip-address
title: IP Address | How Devices are identified on the Internet
tags:
 - notes
 - Internet
---

Now that you understand [networking](/notes/networking/) and how devices connect, the next question is: how does data know where to go?

Every device on a network needs a unique way to identify itself. Without an identifier, data would not know where to go. This identifier is called an IP address.

An IP address works like a digital home address for devices. It helps computers, phones, servers, and routers send data to the correct destination.

In this article, you will learn what an IP address is, how it works, why we have IPv4 and IPv6, how private IPs differ from public IPs, and how subnetting groups devices together.

<h3 class="header-branding">What is an IP Address?</h3>

An IP (Internet Protocol) address is a numerical label given to every device that connects to a network. It has two primary functions:

**Identification:**
Identifies a device on the network.

**Location:**
Shows where the device is located within a network. This helps routers forward packets in the correct direction.

**Example:**
When you visit a website, your device and the server exchange data using their IP addresses.

<p></p>

<h3 class="header-branding">What IP Addresses look like</h3>

There are two versions of IP in use today.

**1. IPv4 (Internet Protocol version 4)**

| Property       | Details                                  |
| -------------- | ---------------------------------------- |
| **Format**     | Four numbers separated by dots           |
| **Example**    | `192.168.1.10`                           |
| **Range**      | Each number ranges from 0 to 255         |
| **Total IPs**  | Around 4.3 billion addresses             |
| **Status**     | Running out of available addresses       |

**2. IPv6 (Internet Protocol version 6)**

| Property       | Details                                      |
| -------------- | -------------------------------------------- |
| **Format**     | Eight groups of hexadecimal numbers          |
| **Example**    | `2601:646:a200:be90:35ba:a263:a5b5:fd42`     |
| **Total IPs**  | 340 undecillion addresses (practically unlimited) |
| **Status**     | Designed to replace IPv4                     |

IPv6 exists because IPv4 ran out of addresses. IPv6 provides a massive address space that can support every device for many decades.

<p></p>

<h3 class="header-branding">How devices get an IP Address</h3>

There are two main ways a device can obtain an IP address:

**1. Static IP**

- Manually assigned by an administrator
- Never changes
- Used by servers, cameras, routers, and services that must always be reachable at the same address

**2. Dynamic IP**

- Automatically assigned by DHCP (Dynamic Host Configuration Protocol)
- Used by most home devices
- Can change when you reconnect

**Example:**
When your phone connects to Wi-Fi, the router's DHCP server gives it a temporary IP address. It may get a different IP the next time you reconnect.

<p></p>

<h3 class="header-branding">Public vs Private IP addresses</h3>

Not all IP addresses are the same. Some are visible on the Internet, others are hidden inside local networks.

| Type               | Visibility           | Assigned By         | Example             | Used For                        |
| ------------------ | -------------------- | ------------------- | ------------------- | ------------------------------- |
| **Public IP**      | Visible on Internet  | Internet Service Provider (ISP) | `13.228.29.42`      | Your router, servers, websites  |
| **Private IP**     | Only inside local network | Router (via DHCP)   | `192.168.1.10`      | Your laptop, phone, smart TV    |

**Reserved private IP ranges:**

- `10.0.0.0` to `10.255.255.255`
- `172.16.0.0` to `172.31.255.255`

<h3 class="header-branding">How data Ttravels using IP: High Level Flow</h3>

You request a website.

Your device sends the request to your router.

Router uses your public IP to communicate with the internet.

Packets travel through multiple routers.

Destination server receives your packet because it matches the server IP.

The server sends response packets back to your public IP.

Your router forwards the response to your private IP inside your network.

Every packet contains the source IP and destination IP.

<h3 class="header-branding">What Is CIDR and why it matters</h3>

CIDR stands for Classless Inter Domain Routing.
It defines how many IP addresses belong to a network.

Example:
192.168.1.0/24

**This means:**

**Network portion:** 24 bits

**Host portion:** 8 bits

There are 256 addresses in this network

CIDR is important for **subnetting** and **routing**.

<h3 class="header-branding">Subnetting: organizing a Network</h3>

Subnetting divides a large network into smaller groups.

**Benefits:**
* Better security
* Reduced congestion
* Organized grouping of devices
* Efficient use of IPs

Example.
192.168.1.0/24 can be split into two smaller networks.

192.168.1.0/25

192.168.1.128/25

Each subnet has 128 addresses.

You do not need to calculate manually now. You only need to understand the idea that subnetting groups devices so they stay organized and manageable.

<h3 class="header-branding">IP vs MAC Address</h3>

IP address identifies a device on a network.
MAC address identifies a device on the network interface card.

IP is logical and can change.
MAC is physical and fixed in hardware.

Together, they make routing and delivery possible.

<h3 class="header-branding">How Routers Use IP</h3>

Routers read the destination IP in each packet.
They forward the packet to the next best router until it reaches the final device.
This process is called routing.

Routing uses the network portion of the IP to decide which direction to send packets.

<h3 class="header-branding">NAT: How many devices share one Public IP</h3>

At home, many devices share a single public IP using a technique called NAT.

**Example:**

Your router has one public IP from ISP.

Your laptop, phone, TV get private IPs.

NAT maps private IPs to the single public IP.
This is why the whole house can use the internet at the same time.

<h3 class="header-branding">IPv4 vs IPv6: why both exist</h3>

IPv4 is almost exhausted.
IPv6 fixes the shortage with a huge address space and better efficiency.

**Key differences:**

IPv6 is faster to route in many cases.

IPv6 has built in security features.

IPv6 supports auto configuration without DHCP.

Both will coexist for a long time.

<h3 class="header-branding">Real World Examples</h3>

**Example 1. Your home network**

Router public IP: 104.18.210.55

Laptop private IP: 192.168.1.20

Phone private IP: 192.168.1.12

TV private IP: 192.168.1.52

All use NAT through router.

**Example 2. Website server**

Public IP: 172.66.43.102

Used so anyone on internet can reach it.

**Example 3. DNS resolving**

You type google.com.

DNS converts that name to an IP.

Browser uses that IP to connect to Google servers.

Names are for humans. IPs are for computers.

<h3 class="header-branding">Conclusion</h3>

IP addresses are the foundation of the internet. They identify devices, guide packets, organize networks, allow routing, and let billions of devices communicate every second.

You now understand the basics of IPv4 and IPv6, public and private IPs, subnetting, NAT, and how routers use IP to move data.