---
sidebar_position: 9
sidebar_label: Case9:Crab
---

# Crab
## Story Introduction
Right after the thrilling model-building competition, Jack pulled Ian to another venue. On the track, several building block crabs were chasing each other, and the audience around them was shouting loudly to cheer for their favorite "contestants". The scene is lively and bustling. Come and join this joyful building block crab race with Ian and Jack!

---

## Teaching Preparation

| Name | Illustration |
| :----------: | :--------------------------: |
| Nezha Pro Ocean Kit | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/nezha-pro-ocean-kit-products-introduction-002.png.png) |

---
## Teaching Objectives

1. Understand the linkage mechanism.
2. Master the use of random building blocks.
3. Explore the movement patterns of marine animals.

---
## Learning and Exploration

1. Do you know how crabs move?
2. Why do fish swim with their tails, while crabs crawl with their walking legs?

---
## Construction Steps

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case09/nezha-pro-ocean-kit-step-09-1.png.pdf" type="application/pdf" width="100%" height="600px" />

---
## Hardware Connection

Motor 1 is connected to the "M1" port of the Nezha expansion board;

The ultrasonic sensor is connected to the "J4" port of the Nezha expansion board.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case09/nezha-pro-ocean-kit-step-09-2.png.png)

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

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/nezha-pro-ocean-kit-09.png)

Program Link
[https://makecode.microbit.org/_3M21552mJU0s](https://makecode.microbit.org/_3M21552mJU0s)

You can also download the program directly through the following webpage.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_3M21552mJU0s"
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

When the ultrasonic sensor detects an object at a distance > 2cm and < 10cm, the crab moves randomly left or right.



---
## Extended Knowledge

### Crab

Crabs are the general term for Brachyura, Decapoda, Malacostraca. The following is a detailed introduction from the aspects of their species distribution, morphological characteristics, living habits, and main values:

### 1. Species and Distribution

Global species: There are about 4700 species of crabs worldwide.

### 2. Habitat Environment:

**Marine**: Most crabs live in the sea, with the most species in tropical shallow seas. For example, Raninidae and Calappidae mainly live along the coast; Grapsidae and Ocypodidae live in the vast intertidal zone; some, such as Planes and Varuna, can attach to wood or other floating objects; many crabs cohabit with other animals, such as Pinnotheres often hide in the mantle cavity of some mollusks.

**Freshwater**: Some crabs grow and reproduce entirely in freshwater, such as Eriocheir sinensis, which is distributed in rivers, lakes, and streams. Potamidae are mainly distributed in tropical regions, extending to subtropical and temperate marginal areas, mostly under mountain stream stones or in aquatic plants and sediment along the stream banks.

**Brackish water**: Such as Scylla serrata, which prefers to live in the shallow sea near the estuary where sea and fresh water meet and in the sediment at the estuary.

### 3. Morphological Characteristics
**Body structure**: The body of a crab is divided into cephalothorax and abdomen. The dorsal surface of the cephalothorax is covered by a carapace, whose shape varies by species. The center of the forehead has the 1st and 2nd pairs of antennae, with stalked compound eyes on the outside. The mouthparts include 1 pair of mandibles, 2 pairs of maxillae, and 3 pairs of maxillipeds. There are 5 pairs of thoracic legs on both sides of the carapace. The abdomen is degenerated, flat, and folded on the ventral surface of the cephalothorax.

**Appendage characteristics**: The abdomen of males is narrow and long, mostly triangular, with only the first two pairs of appendages transformed into copulatory organs; the abdomen of females is broad, with 1 pair of biramous appendages on each of the 2nd to 5th segments, densely covered with setae for holding eggs. The first pair of chelae are both tools for burrowing and weapons for defense and attack. The remaining four pairs are walking legs for crawling, each composed of seven segments, with joints that can only move up and down.

### 4. Living Habits
**Foraging behavior**: Most crabs are omnivorous, only a part are carnivorous, and a small part are herbivorous or detritivorous. Carnivorous crabs use various methods to capture prey, such as ambushing, sneak attacks, or concentrated chasing; herbivorous crabs mainly include algae-eating and vascular plant-eating types.

**Self-protection**: Crabs have various self-protection functions. The large chelae can be used for self-defense and fighting, the hard spines on the carapace make it difficult for predators to approach, and some crabs are good at camouflage. In addition, crabs often have autotomy and regeneration phenomena when in danger, and autotomy of large chelae and 4 pairs of walking legs is common.

**Activity characteristics**: Most crabs crawl and run using 4 pairs of walking legs, usually obliquely or straight, and some crabs move with fewer pairs of walking legs. Some crabs move very fast, such as Ocypode, which can run on the beach at a speed of 1-1.6 meters per second. Crabs that are good at swimming, such as Portunus, use paddle-shaped walking legs to paddle forward or backward.

**Attack and defense**: Aggressive interactions between crabs usually go through a series of steps or stages. Aggressive behavior generally occurs between male crabs, usually starting with the display of lateral chelae, followed by pushing and pulling movements through the alternate extension and contraction of each other's forelegs, and finally contracting the chela muscles to exert force to determine the winner.

### 5. Main Values

**Edible value**: Crab meat is delicious and nutritious, rich in protein, trace elements, and vitamins. Common edible crabs include Portunus trituberculatus, Portunus pelagicus, Scylla serrata, and Eriocheir sinensis.

**Medicinal value**: Crabs are cold in nature, salty in taste, enter the liver and stomach meridians, and have the effects of clearing heat and detoxifying, replenishing bone marrow, nourishing tendons and activating blood circulation, and dredging meridians. They have a certain dietary therapeutic effect on diseases such as blood stasis, injuries, jaundice, low back and leg pain, and rheumatoid arthritis.

**Economic value**: Crab farming and fishing are important economic industries in many regions, bringing considerable income to the local area and driving the development of related industries such as processing, transportation, and sales.

**Ecological value**: Crabs play an important role in the ecosystem. They are a food source for many aquatic organisms, and at the same time, they affect the material cycle and energy flow of the aquatic ecosystem through activities such as feeding and digging.
