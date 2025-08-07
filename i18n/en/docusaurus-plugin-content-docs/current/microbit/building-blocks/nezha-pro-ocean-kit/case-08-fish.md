---
sidebar_position: 8
sidebar_label: Case 8: Fish
---

# Fish
## Story Introduction
One night, with the help of his friends on the island, Xiao En successfully landed on the island. Xiao En has been on the island for two days and made a new friend, Jack. On this day, Jack excitedly told him that the island was holding a Harvest Festival with many interesting activities, and he dragged him to participate in the building block model construction competition. The two hurried to the scene and heard the host announce: "This year's theme is building fish models, and we'll see whose model is the most lifelike. Come and join this joyful building block construction competition with Xiao En and Jack!

---

## Teaching Preparation

| Name | Illustration |
| :----------: | :--------------------------: |
| Nezha Pro Ocean Kit | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/nezha-pro-ocean-kit-products-introduction-002.png.png) |

---
## Teaching Objectives

1. Understand the ultrasonic sensor.
2. Master the use of ultrasonic building blocks.
3. Explore the movement patterns of marine animals.

---
## Learning and Exploration

1. How do fish move in water? Do all fish use their tails to move?
2. Do you know what movement methods marine organisms have?

---
## Construction Steps

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case08/nezha-pro-ocean-kit-step-08-1.png.pdf" type="application/pdf" width="100%" height="600px" />

---
## Hardware Connection

Motor 1 is connected to the "M1" port of the Nezha expansion board;
The ultrasonic sensor is connected to the "J1" port of the Nezha expansion board.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case08/nezha-pro-ocean-kit-step-08-2.png.png)

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

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case08/nezha-pro-ocean-kit-step-08-3.png.png)

Program link
[https://makecode.microbit.org/_amkeM9L6k1xE](https://makecode.microbit.org/_amkeM9L6k1xE)

You can also download the program directly through the following webpage.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_amkeM9L6k1xE"
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

The closer the object detected by the ultrasonic sensor, the greater the swimming amplitude of the fish. When the ultrasonic sensor detects a distance of 0, the fish stops swimming.

**Picture**

---
## Extended Knowledge

### Movement Patterns of Marine Animals

The movement patterns of marine animals are diverse, which are the results of their long-term evolution to adapt to the marine environment (such as water flow, water pressure, food distribution, etc.). Due to differences in body shape, living habits and survival needs, different types of marine animals have developed unique movement strategies. The following is a detailed introduction from major groups:

### I. Swimming Animals: Active and Fast Movement

These animals achieve efficient swimming by swinging or paddling specific parts of their bodies, and are the most active movers in the ocean.

#### Fish:

They rely on the movement of the trunk and tail to generate power, which is the main movement mode of most fish. For example, sharks propel their bodies forward by swinging their tails left and right. The shape of the caudal fin (such as the crescent-shaped caudal fin of tuna) can also reduce water resistance, making them outstanding in swimming speed (tuna can reach 60-80 kilometers per hour).
Some fish use fins for assistance: pectoral and pelvic fins are responsible for balance and steering, while dorsal and anal fins prevent the body from rolling over. For example, flounders can move flexibly on the seabed through the coordinated paddling of pectoral and pelvic fins.

#### Cetaceans:

As mammals, they rely on the up and down swing of the horizontal tail fin (fluke) to move forward, which is different from the left and right swing of fish. This method can utilize water flow more efficiently. Although large cetaceans such as blue whales are huge, they can swim at 20-30 kilometers per hour and can accelerate to more than 50 kilometers per hour in emergencies.
Pectoral flippers (pectoral fins) are mainly used for steering and deceleration. For example, dolphins can complete complex movements such as jumping and rotating through flexible pectoral flippers.

#### Cephalopods:

Squid, octopus, etc., move through **"jet propulsion"**: they contract their mantle and quickly eject water from the funnel-shaped siphon, using the reaction force to propel their bodies forward. This method can make squid accelerate to more than 15 kilometers per hour in an instant, which is convenient for avoiding natural enemies.

### II. Crawling and Creeping Animals: Slow Movement on the Seabed

These animals mostly live on the seabed (intertidal zone, shallow sea or deep sea), move slowly, and feed on benthic organisms or attach to survive.

#### Crustaceans:

Crabs crawl horizontally through their walking legs. Among their 8 pairs of walking legs, the first 3 pairs are used for walking, and the last 5 pairs are for assistance. Their special joint structure allows them to move flexibly on beaches and rocks. Some crabs (such as swimming crabs) can also swim briefly by swinging their tails.
Lobsters crawl slowly with their walking legs, and when in danger, they will bend their tails and pop backward to escape.

#### Mollusks:

Shellfish (such as clams, oysters) usually use their hatchet feet to dig into sediment or crawl slowly, and the contraction of the hatchet foot muscles can drive the body to move.
Snails (such as limpets) crawl on rock surfaces by means of mucus on their ventral feet and wavy contraction of muscles.

#### Echinoderms:

Starfish move through tube feet: tube feet are tubular structures under the arms of starfish, which can expand and contract under water pressure control. Hundreds of tube feet cooperate to allow starfish to "walk" on the seabed and even climb on vertical rocks.
Sea cucumbers move slowly like earthworms by the contraction and extension of their body wall muscles. When in danger, they will spit out their internal organs to confuse natural enemies and escape faster at the same time.

### III. Floating and Planktonic Animals: Passive Movement with Water Flow

These animals are small in size or have specialized body structures, unable to actively resist water flow, and mainly float with ocean currents, forming the basis of the marine food chain.

#### Zooplankton:

Such as krill, jellyfish, copepods, etc., which are usually millimeters in size. They move weakly through cilia (copepods) or contraction of the umbrella (jellyfish), but mainly rely on ocean currents for diffusion. When the umbrella of a jellyfish contracts, water is ejected from below, enabling short-distance upward or downward movement, but the overall movement is still with the waves.

#### Larvae of some large animals:

After hatching, the larvae of sea turtles and fish enter the planktonic stage, relying on the yolk sac for energy, floating with ocean currents to suitable growing waters, and only start active swimming when they develop to a certain stage.

### IV. Special Movement Methods

#### Jumping and Gliding:

Flying fish can glide in the air through their broad pectoral fins. After accelerating in the water, they swing their tails violently to leap out of the water, and their pectoral fins can expand to glide for tens of meters to avoid natural enemies such as tuna and dolphins.

Mudskippers (amphibious fish) can not only swim in water, but also jump or crawl on mudflats relying on their pectoral fins and tail fins, and even climb onto the trunks of mangroves.

#### Combination of Attachment and Movement:

Barnacle larvae float with water flow, and after finding suitable attachments such as rocks and ship bottoms, they secrete calcium shells to fix themselves. Adults no longer move, but obtain food by filtering water flow.
Coral polyp larvae float with ocean currents, attach to reefs and then develop into adults, forming coral reefs. The overall community is fixed, but individual polyps can capture food by stretching their tentacles.

### Summary
The movement patterns of marine animals are closely related to their living environment, feeding habits and defense strategies: active swimmers pursue speed and efficiency, benthic crawlers focus on stability and concealment, planktonic organisms rely on ocean current diffusion, and special groups have evolved unique skills such as jumping and gliding. These diverse movement patterns together constitute the dynamic balance of the marine ecosystem and are a vivid embodiment of biological adaptive evolution.