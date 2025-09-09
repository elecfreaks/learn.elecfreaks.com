---
sidebar_position: 12
sidebar_label: Case12:Simulating Tidal Power Generation
---

# Simulating Tidal Power Generation

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/tupian/nezha-pro-ocean-kit-step-12-00.png.png)

## Story Introduction

Ian and Jack were dancing to the music when a hurried man ran over and whispered something in Jack's ear. Jack immediately turned to Ian and said, "You stay here and enjoy yourself. I have something urgent to deal with and need to go back!" Before he finished speaking, he quickly merged into the bustling crowd with that man and disappeared.

After Jack left, Ian had to wander around the street. As he walked, he heard passers-by talking— it turned out that the small island was in big trouble! The storm a few days ago damaged the power generation equipment, and now there is an urgent shortage of electricity supply. A new device needs to be replaced, but everyone can't think of a solution for the moment.

---

## Teaching Preparation

| Name | Illustration |
| :----------: | :--------------------------: |
| Nezha Pro Ocean Kit | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/nezha-pro-ocean-kit-products-introduction-002.png.png) |

---
## Teaching Objectives

1. Understand what tidal power generation is.

2. Explore the conversion relationships between different forms of energy.


---
## Learning and Exploration

1. Do you know what tides are? Share your knowledge of tidal power generation with friends.

2. Discuss with classmates where electricity comes from in daily life.

---
## Construction Steps

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case12/nezha-pro-ocean-kit-12-1.png.pdf" type="application/pdf" width="100%" height="600px" />

---
## Hardware Connection

Motor 1 is connected to the "M1" port of the Nezha expansion board;

Motor 2 is connected to the "M2" port of the Nezha expansion board;

The dual-track line sensor is connected to the "J1" port of the Nezha expansion board;

The rainbow LED ring is connected to the "J4" port of the Nezha expansion board.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case12/nezha-pro-ocean-kit-12-2.png.png)

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

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/nezha-pro-ocean-kit-12.png)

Program link
[https://makecode.microbit.org/_MFeCcz31mJct](https://makecode.microbit.org/_MFeCcz31mJct)

You can also download the program directly through the following webpage.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_MFeCcz31mJct"
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

Click ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual07.png) in the lower left corner and select **Connect Device**.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual11.png)

Click ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual08.png).

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual12.png)

Click ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual09.png).

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual13.png)

In the pop-up window, select **BBC micro:bit CMSIS-DAP**, then select **Connect**. At this point, our micro:bit has been successfully connected.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual14.png)

Click **Download Program**

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual10.png)

---
## Case Demonstration

Long press button A on the micro:bit to control the tidal generator to move downward. When the dual-track line sensor detects that the tidal generator has dropped to a certain position, the tidal generator stops moving downward, triggers the tidal generator to rotate, and the rainbow LED ring lights up, simulating the scene of tidal power generation;

Long press button B on the micro:bit to control the tidal generator to move upward. When the dual-track line sensor no longer detects the tidal generator, the tidal generator stops rotating and the rainbow LED ring turns off.


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/GIF/nezha-pro-ocean-kit-step-12-00.png.gif)

---
## Extended Knowledge

### Tidal Power Generation

Tidal power generation is a renewable energy utilization technology that converts the water level difference (tidal range) formed by the ebb and flow of seawater tides or the kinetic energy of tidal currents into electrical energy through specific devices. Its core is the capture and conversion of tidal energy, which has the characteristics of being clean, renewable, and highly predictable.

### I. Principle: Source and Conversion of Tidal Energy

Tides are mainly formed by the gravitational pull (tidal force) of the moon and the sun on the Earth, with the moon having a more significant impact. The seawater on the Earth's surface rises and falls periodically under the action of tidal forces: the rise and fall during the day is called "tide", and that at night is called "汐" (xi, meaning night tide), collectively referred to as "tides".

The energy conversion paths of tidal power generation are divided into two categories:

**Potential energy utilization**: Utilize the water level difference (tidal range) between high tide and low tide, form a reservoir through a dam, and after storing water, drive a water turbine to rotate, which in turn drives a generator to generate electricity (similar to the principle of a hydropower station).

**Kinetic energy utilization**: Directly utilize the kinetic energy of tidal currents (horizontal flow of seawater) to capture energy through underwater turbines (similar to wind turbines) and drive power generation.

### II. Main Forms
**Dam-type Tidal Power Station (potential energy type)**

The most common form. A dam is built in a bay or estuary to form a closed reservoir, and water turbines and generators are installed in the dam body.

**During high tide**: Seawater enters the reservoir through sluices to store potential energy;

**During low tide**: The water level in the reservoir is higher than that of the open sea, and water is released to drive the water turbine to generate electricity;

Some power stations can generate electricity bidirectionally (utilizing the water level difference during both high tide and low tide).

**Tidal Current Power Station (kinetic energy type)**

No dam is needed. Underwater turbines are directly placed in sea areas with strong tidal currents (such as straits and waterways). The tidal current pushes the turbines to rotate, driving the generator to generate electricity, similar to an "underwater windmill". Its advantages are less impact on the environment and relatively lower construction costs, but it relies on strong tidal current speeds (usually ≥ 2 m/s).

### III. Advantages and Limitations
**Advantages**

**Renewable and clean**: Tidal energy comes from celestial gravity, which is inexhaustible. The power generation process has no fuel consumption and no greenhouse gas emissions.

**High predictability**: The time and amplitude of tides can be accurately calculated through astronomical laws (with an error of ≤ 10 minutes), and the power generation is stable, which is convenient for power grid dispatching (better than the randomness of wind energy and solar energy).

**Long service life**: Equipment (such as dams and turbines) can operate for decades with low maintenance costs.

**Limitations**

**Strict geographical restrictions**: Dam-type power stations require bays/estuaries with a tidal range of ≥ 3 meters (only about 200 such places in the world meet the conditions); tidal current power stations require areas with strong tidal currents, so their application range is narrow.

**High construction costs**: The dam project of dam-type power stations is large in scale and high in investment (for example, the cost of the La Rance Power Station in France is twice that of a thermal power station of the same scale).

**Ecological impact**: Dams may block the natural flow of seawater, affect the migration and spawning of aquatic organisms, and change the local marine ecological environment.

### IV. Typical Cases

La Rance Tidal Power Station in France (completed in 1966): The world's first large-scale tidal power station with an installed capacity of 240,000 kilowatts, adopting a bidirectional power generation mode, and is a benchmark for dam-type power stations.

China Jiangxia Tidal Experiment Power Station (completed in 1980): The largest tidal power station in Asia, located in Wenling, Zhejiang, with an installed capacity of 39,000 kilowatts, is a multi-unit experimental power station.

UK Severn Tidal Project (planned): It is planned to utilize the large tides of the Severn River (with a tidal range of up to 15 meters), with a planned installed capacity of up to 3.2 million kilowatts, and is one of the world's largest potential tidal power stations.

#### V. Development Prospects
With technological progress (such as low-cost turbines and modular tidal current equipment), the economy of tidal power generation is gradually improving. At present, the global installed capacity of tidal power generation is about 0.5 gigawatts (GW), which is far lower than that of wind power and solar energy. However, it is regarded as an important supplement in the energy transition of coastal countries (such as the United Kingdom, Canada, and China). In the future, "low-impact design" combined with marine ecological protection will be the core direction of its development.
