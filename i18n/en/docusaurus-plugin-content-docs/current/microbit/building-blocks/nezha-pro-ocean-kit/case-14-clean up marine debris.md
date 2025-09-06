---
sidebar_position: 14
sidebar_label: Case14:Simulating Marine Debris Cleanup
---

# Simulating Marine Debris Cleanup

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case15/nezha-pro-ocean-kit-step-15-00.png.png)

## Story Introduction

With the aquaculture farm repaired, Jack looked at the storm debris floating on the sea, his face full of worry: "If this debris drifts away with the ocean currents, marine life and the environment will suffer." Ian patted his shoulder: "Don't worry! Let's figure out a way together—we'll definitely clean it up!" Do you have any good plans to help deal with marine debris? Besides cleaning up marine debris, what other ways can reduce the pollution of debris to the ocean?

--- 

## Teaching Preparation

| Name | Illustration |
| :----------: | :--------------------------: |
| Nezha Pro Ocean Kit  |   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/nezha-pro-ocean-kit-products-introduction-002.png.png)  |

--- 
## Teaching Objectives 

1. Understand the harm of marine debris.

2. Try to design a feasible plan for marine debris recycling.


--- 
## Learning and Exploration

1. How is marine debris generated, and what are its harms? Please consult relevant materials or discuss with friends.

2. How to design a marine debris recycling device? Present your ideas in words or drawings and share them.

--- 
## Construction Steps

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case14/nezha-pro-ocean-kit-14-1.png.pdf" type="application/pdf" width="100%" height="600px" />

--- 
## Hardware Connection

Collision sensors are connected to the "J1" and "J2" ports of the Nezha expansion board;

The ultrasonic sensor is connected to the "J4" port of the Nezha expansion board;

Motor 1 is connected to the "M1" port of the Nezha expansion board;

Motor 2 is connected to the "M4" port of the Nezha expansion board.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case14/nezha-pro-ocean-kit-14-2.png.png)

--- 
## Code Programming

Go to "[makecode.microbit.org](https://makecode.microbit.org)" and click **New Project**.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-07.png)

Enter the project name in the pop-up window and click **Create**.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-11.png)

Click **Extensions** in the code drawer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-09.png)

In the pop-up interface, enter **nezha pro** and click the search icon. After the **nezha pro** software library is displayed, click it. Load the PlanetX software library in the same way.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-10.png)

---
### Example Program

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/nezha-pro-ocean-kit-14.png)

Program link
[https://makecode.microbit.org/_CLeCmEPRAHyP](https://makecode.microbit.org/_CLeCmEPRAHyP)

You can also download the program directly through the following webpage.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_CLeCmEPRAHyP"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

---
### Download Program

Use a USB cable to connect the PC and micro:bit V2.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual03.gif)

After successful connection, a drive named MICROBIT will be recognized on the computer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual06.png)

Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual07.png)in the lower left corner and select **Connect Device**.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual11.png)

Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual08.png).

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual12.png)

Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual09.png).

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual13.png)

In the pop-up window, select **BBC micro:bit CMSIS-DAP**, then select **Connect**. At this point, our micro:bit has been successfully connected.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual14.png)

Click **Download Program**

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual10.png)

---
## Case Demonstration

If the ultrasonic sensor detects a distance > 20 cm:
If both touch sensors are pressed, the garbage cleaning device moves backward;
If the left collision sensor is pressed, the garbage cleaning device turns right;
If the right collision sensor is pressed, the garbage cleaning device turns left;
Otherwise, the garbage cleaning device moves forward.
If the ultrasonic sensor detects a distance < 20 cm:
If the left collision sensor is pressed, the garbage cleaning device turns right;
If the right collision sensor is pressed, the garbage cleaning device turns left;
Otherwise, it turns right.



---
## Extended Knowledge

### Marine Debris

Marine debris refers to pollutants formed by various waste generated by human activities entering the marine environment. It is one of the global marine ecological and environmental issues. Its composition is mainly plastic (accounting for over 70%), and also includes glass, metal, fabrics, fishing nets, etc. It poses a serious threat to marine ecology, human health, and social economy.

### I. Main Sources

The sources of marine debris can be divided into land-based and marine-based sources, with land-based sources accounting for about 80%-85%:

**Land-based sources**: Municipal solid waste (such as plastic bags, beverage bottles) enters the ocean through rivers, rainwater scouring, and leakage from coastal landfills; agricultural plastic films and industrial waste (such as plastic pellets) flow into the ocean with runoff; garbage discarded during coastal tourism activities (such as food packaging), etc.

**Marine-based sources**: Garbage discarded during ship navigation (such as plastic tableware, fishing nets); abandoned fishing gear in fishing activities (such as gillnets, buoys, known as "ghost fishing gear"); waste generated by offshore oil platforms and drilling operations; cargo leaked from ship accidents, etc.

### II. Main Harms

**Threatening the survival of marine organisms**:

Marine animals (such as sea turtles, seabirds, cetaceans) often ingest plastic debris (e.g., plastic bags are mistaken for jellyfish), leading to death from digestive tract obstruction;

Abandoned fishing nets, plastic rings, etc., can entangle marine organisms (such as seals, corals), causing suffocation, physical damage, or inability to hunt.

**Destroying marine ecosystems**:

Debris covers habitats such as coral reefs and seagrass beds, hindering photosynthesis, leading to the death of marine plants, and damaging the foundation of the food chain;

Microplastics (plastic particles with a diameter ＜ 5 mm) are ingested by plankton, shellfish, etc., and accumulate through the food chain, ultimately affecting the stability of the entire ecosystem.

**Endangering human health**:

Microplastics can enter the human body through seafood (such as fish, shellfish), and the toxic chemicals they carry (such as bisphenol A, phthalates) may interfere with the endocrine system and increase disease risks.

**Affecting social economy**:

Beach debris damages tourism landscapes and reduces revenue from coastal tourism;

Fishing nets entangle ship propellers and block ports, increasing shipping costs; the cost of cleaning up marine debris is high (over billions of dollars globally each year).

### III. Governance and Countermeasures

The governance of marine debris requires "prevention first, multi-stakeholder collaboration", covering source control, technical cleanup, policy constraints, and public participation:

**Source reduction and control**:

Reduce the production and use of single-use plastic products (such as plastic bags, straws) and promote biodegradable materials;

Improve the waste recycling and treatment system in coastal cities to prevent garbage from directly entering the ocean;

Regulate fishing activities, require fishermen to recycle abandoned fishing gear, and promote environmentally friendly fishing gear.

**Technical cleanup and monitoring**:

Carry out regular cleanup of beach and port debris;

Develop marine debris collection devices (such as "ocean vacuum cleaners" and "debris interception systems") to focus on cleaning up debris accumulation zones (such as the Great Pacific Garbage Patch) formed by ocean currents;

Use satellite remote sensing, drones, and other technologies to monitor the distribution of marine debris and improve governance efficiency.

**Policies and international cooperation**:

Countries formulate laws (such as the EU "Plastic Ban", China's "Plastic Restriction Order") to prohibit or restrict specific plastic products;

Coordinate global actions through international conventions (such as the International Convention for the Prevention of Pollution from Ships, the Basel Convention Amendment on Plastic Waste) to control cross-border waste transfer.

**Public awareness enhancement**:

Strengthen popular science education and advocate a "zero-waste" lifestyle;

Encourage public participation in marine debris cleanup volunteer activities and promote enterprises to assume environmental responsibilities.

The governance of marine debris is a long-term task that requires joint efforts from countries around the world, enterprises, and the public to form a closed loop from "reducing generation" to "effective cleanup", so as to protect the sustainable development of marine ecology.
