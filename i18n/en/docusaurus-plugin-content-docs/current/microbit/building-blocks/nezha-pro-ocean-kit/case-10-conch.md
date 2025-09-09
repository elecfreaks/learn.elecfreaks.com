---
sidebar_position: 10
sidebar_label: Case10:Conch
---

# Conch

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/tupian/nezha-pro-ocean-kit-step-10-00.png.JPG)

## Story Introduction

Ian was still immersed in the excitement of the crab racing when Jack dragged him to a new venue. The host announced, "Next up is the conch crawling competition! Whoever builds a conch model that crawls the slowest will be the champion!" Jack's eyes lit up, and he raised his eyebrows at Ian: "See that? I'm an expert at building conchs! Dare to compete with me?"

--- 

## Teaching Preparation

| Name | Illustration |
| :----------: | :--------------------------: |
| Nezha Pro Ocean Kit  |   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/nezha-pro-ocean-kit-products-introduction-002.png.png)  |

--- 
## Teaching Objectives 

1. Understand worm gears.

2. Master the use of logic operation building blocks.

3. Explore the movement patterns of marine animals.

--- 
## Learning and Exploration

1. Do you know how conchs move?

2. Why do conchs crawl using their ventral feet?

--- 
## Assembly Steps

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case10/nezha-pro-ocean-kit-step-10-1.png.pdf" type="application/pdf" width="100%" height="600px" />

--- 

## Hardware Connection

Motor 1 is connected to the "M1" port of the Nezha expansion board;

The ultrasonic sensor is connected to the "J1" port of the Nezha expansion board.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case10/nezha-pro-ocean-kit-step-10-3.png.png)

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
### Sample Program

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/nezha-pro-ocean-kit-10.png)

Program link
[https://makecode.microbit.org/_hXXKfwCukXaK](https://makecode.microbit.org/_hXXKfwCukXaK)

You can also download the program directly through the following webpage.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_hXXKfwCukXaK"
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
When the ultrasonic sensor detects a distance greater than 5cm, the conch stops moving; when it detects a distance less than 5cm, the conch moves forward.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/GIF/nezha-pro-ocean-kit-step-10-00.png.gif)

---
## Extended Knowledge

### Why do conchs crawl with their ventral feet

The reason why conchs mainly crawl on the bottom is determined by their physiological structure, survival needs, and evolutionary adaptation. The specific reasons are as follows:

### 1. Movement mode determined by physiological structure
Conchs belong to gastropod mollusks. Their core locomotor organ is the ventral foot — a broad, flat muscular foot located on the ventral surface (bottom) of the body. The ventral foot generates power through wavelike muscle contractions: the muscles contract sequentially from the front to the back, driving the body to move forward slowly. At the same time, the ventral foot secretes mucus to reduce friction with the bottom (such as rocks, sand, etc.), making crawling smoother.
This structure is different from the legs of insects and the limbs of vertebrates. It cannot support the body to jump or run off the ground, and can only move close to the bottom with the help of friction, thus naturally forming the movement mode of "bottom crawling".

### 2. Adaptation to the living environment
Conchs mostly inhabit the intertidal zone, shallow seabed, or the bottom of freshwater waters, with the surrounding environment mainly consisting of rocks, sand, coral reefs, etc. Crawling on the bottom allows them to:
Obtain food efficiently: Conchs feed on algae, organic debris, microorganisms, or small invertebrates on the bottom. Being close to the bottom facilitates direct feeding on food attached to rocks or sand.
Avoid natural enemies: Gaps at the bottom, under rocks, or in sand are natural hiding places. When crawling, they can quickly hide in them, reducing the probability of being discovered by predators (such as fish, seabirds).
Adapt to the substrate environment: Different conchs have specific preferences for substrates (such as sandy, muddy, rocky). Crawling on the bottom enables them to better attach to the adapted substrate and avoid being washed away by water currents.

### 3. Energy consumption and survival strategies
Conchs have a low metabolic rate and limited energy reserves. Crawling on the bottom is an energy-efficient movement mode. Compared with swimming or jumping, crawling requires less energy, allowing them to allocate energy more efficiently in environments where food acquisition is unstable, focusing on growth and reproduction.
In addition, most conchs have thick shells and a low center of gravity. Crawling on the bottom can maintain body balance and avoid tipping over due to the weight of the shell, which is also a stable survival strategy formed in long-term evolution.

In summary, the bottom crawling of conchs is the result of the combined effect of their physiological structure, habitat environment, and energy utilization, which is an efficient adaptation to the natural environment.
