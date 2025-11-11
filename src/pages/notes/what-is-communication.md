---
date: 2025-11-02T12:00:00-07:00
description: Learn how communication works and why it’s the starting point for understanding computer networks and the Internet.
keywords: communication, networking, computer networks, signals, analog, digital, data transfer, Karthik Kadambi, Internet, basics, technology
image: /assets/images/posts/communication.png
slug: what-is-communication
title: What is Communication | The Foundation of Networking
tags:
 - notes
 - Internet
---

Communication is the process of transferring information from one point to another.

In human communication, we share information through speech, writing or gestures, all using sound waves, text or body language as our medium.

In technological communication, devices exchange information through electrical (wires), optical (fiber) or radio (wireless) signals, translating digital data into physical energy that can travel across distance.

<h3 class="header-branding">Basic Communication Model</h3>

Every communication system has these elements.

| Component                | Role                                                          |
| ------------------------ | ------------------------------------------------------------- |
| **Sender (Transmitter)** | Creates and sends the message                                 |
| **Receiver**             | Accepts and interprets it                                     |
| **Message**              | The actual information to be sent                             |
| **Medium (Channel)**     | The path through which the message travels (wire, air, fiber) |
| **Encoder/Decoder**      | Converts message into signals and back                        |
| **Noise**                | Anything that distorts the signal                             |
| **Feedback**             | Response from receiver (optional, in two-way systems)         |

<p></p>

<h3 class="header-branding">Types of Communication</h3>

| Type            | Description                 | Example                   |
| --------------- | --------------------------- | ------------------------- |
| **Simplex**     | One way only               | Monitor displaying output |
| **Half-duplex** | Two way, but one at a time | Walkie-talkie            |
| **Full-duplex** | Two way simultaneously     | Phone call, Internet data |

<p></p>

<h3 class="header-branding">Communication Mediums</h3>

| Medium                          | Used in                         | Characteristic                   |
| ------------------------------- | ------------------------------- | -------------------------------- |
| **Copper cables (electrical)**  | Ethernet, telephone             | Cheap, short range               |
| **Optical fiber (light)**       | Long-distance Internet backbone | Very high speed, low loss        |
| **Wireless (radio, microwave)** | Wi-Fi, 4G/5G, satellite         | Mobility, but interference-prone |

<p></p>

<h3 class="header-branding">Signals</h3>

| Type               | Description                       | Example       |
| ------------------ | --------------------------------- | ------------- |
| **Analog signal**  | Continuous wave (varies smoothly) | Sound, radio  |
| **Digital signal** | Discrete 0s and 1s (on/off)       | Computer data |

When a computer sends data:
* It encodes bits (1s and 0s) into voltage, light or radio waves
* The receiver decodes those signals back into bits

<h3 class="header-branding">Encoding & Modulation</h3>

You can think of this as:

* Turning 0s and 1s into something that can physically travel
* Encoding transforms data into signals (e.g., Manchester, NRZ)
* Modulation changes a carrier wave to represent data (AM, FM, QAM)

So when your phone sends data over Wi-Fi or 5G, it’s actually modulating radio waves with bits of information.

<h3 class="header-branding">Key Performace terms</h3>

| Term           | Meaning                                                                    |
| -------------- | -------------------------------------------------------------------------- |
| **Bandwidth**  | Maximum amount of data that can be transmitted per second (e.g., 100 Mbps) |
| **Latency**    | Time delay for data to reach destination                                   |
| **Throughput** | Actual data rate achieved                                                  |
| **Noise**      | Unwanted interference that distorts signals                                |
| **Error rate** | Percentage of bits that get corrupted                                      |

Every medium and technology balances these trade-offs.

<h3 class="header-branding">Synchronization</h3>

How do sender and receiver stay “in rhythm”?

Synchronous communication: continuous stream with a shared clock (Ethernet, video calls).

Asynchronous communication: independent timing, with start/stop markers (serial ports, email).

<h3 class="header-branding">Analog vs Digital Communication</h3>

| Type        | How it works                                                | Used in                   |
| ----------- | ----------------------------------------------------------- | ------------------------- |
| **Analog**  | Continuous wave carries info (amplitude, frequency, phase)  | Old telephones, radio, TV |
| **Digital** | Discrete bits; noise-resistant; easily encrypted and stored | Computers, Internet, VoIP |

The move from analog → digital made networking possible because digital data can be compressed, corrected, and routed easily.

<h3 class="header-branding">Data Communication vs Networking</h3>

| Concept           | Focus                                                         | Example           |
| ----------------- | ------------------------------------------------------------- | ----------------- |
| **Communication** | Transferring data between two points                          | Your PC ↔ printer |
| **Networking**    | Connecting many communication links with rules and addressing | The Internet      |

So, data communication is one-to-one; networking is many-to-many.

<blockquote>
    Networking is just structured, large-scale communication.<br/>
    Communication is the physics. Networking is the organization.
</blockquote>