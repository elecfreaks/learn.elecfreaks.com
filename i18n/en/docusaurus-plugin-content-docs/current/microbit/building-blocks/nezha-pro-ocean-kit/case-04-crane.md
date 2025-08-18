---
sidebar_position: 4
sidebar_label: Case4:Crane
---

# Crane
## Story Introduction
The midday sun made the port's reefs scorching hot. Ian rubbed his hands while looking at the mountain of supplies piled up at the port, feeling worried. How could he load these supplies from the port onto the "Hope"? Especially that box of navigation instruments left by his father, which weighed over 150 catties. What methods can friends help Ian with loading the supplies?

---

## Teaching Preparation

| Name | Illustration |
| :----: | :--------------: |
| Nezha Pro Ocean Kit | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/nezha-pro-ocean-kit-products-introduction-002.png.png) |

---
## Teaching Objectives
1. Understand cranes.
2. Understand the worm gear structure.
3. Explore various programming ideas for cranes.

---
## Learning and Exploration

1. Discuss in groups how to help Ian transfer the supplies to the ship. Try to display the plan through drawings and share it with other friends.


## Assembly Steps

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case04/nezha-pro-ocean-kit-step-04-1.png.pdf" type="application/pdf" width="100%" height="600px" />

---
## Hardware Connection

Use an RJ11 cable to connect Motor 2 to the "M1" port of the Nezha expansion board;

Use an RJ11 (600) cable to connect Motor 1 to the "M4" port of the Nezha expansion board;

Use an RJ11 cable to connect the potentiometer sensor to the "J1" port of the Nezha expansion board;

Use an RJ11 cable to connect Collision Sensor 1 to the "J2" port of the Nezha expansion board;

Use an RJ11 cable to connect Collision Sensor 2 to the "J3" port of the Nezha expansion board.


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case03/nezha-pro-ocean-kit-step-03-3.png.png)

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

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/nezha-pro-ocean-kit-04.png)

Program link
[https://makecode.microbit.org/_AquKFJ527Rop](https://makecode.microbit.org/_AquKFJ527Rop)

You can also download the program directly through the following webpage.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_AquKFJ527Rop"
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

Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual07.png)in the lower left corner and select**Connect Device**.

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

When the feedback value of the potentiometer sensor is lower than 300, Motor 2 will start rotating at 100% speed;

When the feedback value is higher than 700, Motor 2 will start rotating at -100% speed;

If the value is between the two, Motor 2 will stop.

If the collision sensor at port "J2" is pressed, Motor 1 will start rotating at 100% speed;

If the collision sensor at port "J3" is pressed, Motor 1 will start rotating at -100% speed.

In other cases, Motor 1 will stop.


**Picture**

---
## Extended Knowledge

### Crane: Technological Evolution from Ancient to Modern Times
#### I. Origin of Ancient Lifting Tools (BCE — Middle Ages)

**Embryonic Forms Driven by Manpower and Animal Power**

1. Lever and pulley systems: In the 3rd century BCE, the ancient Greek scholar Archimedes put forward the lever principle. The ancient Egyptians used levers to transport pyramid stones; during the same period, the pulley (embryo of pulley block) appeared in China's Warring States Period, used for lifting water and transporting heavy objects.

2. Roman "Polyspaston" crane: In the 1st century CE, the Romans invented the multi-pulley crane (Polyspaston) driven by manpower or animal power, which lifted heavy objects through ropes and winches, often used in construction (such as the construction of the Colosseum).

**Material Structure and Power Limitations**

1. Lifting tools were mainly made of wood, with a load capacity usually not exceeding 10 tons. They relied on manpower or animal power for driving, with low efficiency and limited application scenarios.

#### II. Mechanized Breakthroughs in the Industrial Revolution (18th — 19th Centuries)

**Application of Steam Power**

1. The first steam crane: At the end of the 18th century, British engineer William Armstrong invented a fixed crane powered by steam, used for loading and unloading goods at ports, with a load capacity increased to over 20 tons.

2. Innovation in railways and ports: In the 1830s, steam-driven rail cranes became popular in British railway construction; in the 1850s, port steam cranes (such as "steam winches") realized large-scale cargo loading and unloading.

**Metal Structure and Rotating Design**

1. In the mid-19th century, steel replaced wood as the main material of cranes, greatly improving structural strength; in the 1870s, French engineers invented steam cranes that could rotate 360 degrees, expanding the operating range.

#### III. 20th Century: Specialization and Diversified Development

**Popularization of Internal Combustion Engine and Electric Drive**

1. Birth of mobile cranes: In the 1910s, the United States launched wheeled cranes driven by internal combustion engines (such as improved versions of "steam shovels"); in the 1920s, crawler cranes (such as modified Caterpillar bulldozers) were suitable for complex terrains.

2. Electric drive and tower cranes: In the 1930s, electric drive cranes became popular in factories and construction sites; in the 1950s, tower cranes (such as early models of Germany's Liebherr) became core equipment for high-rise building construction due to their adjustable height and large lifting capacity.

**Technical Segmentation and Load Breakthroughs**

1. Port-specific equipment: In the 1960s, container cranes (bridge cranes) appeared, with a single spreader load of over 30 tons, promoting a revolution in global maritime transportation efficiency.

2. Super-large cranes: In the 1980s, Germany's Liebherr launched the LR 13000 crawler crane, with a maximum lifting capacity exceeding 3,000 tons, used for wind power equipment and heavy industrial installation.

#### IV. Modern Cranes: Intelligence and Greenization (21st Century to Present)

1. Application of intelligent technologies
Equipped with sensors and automatic control systems to realize load monitoring and anti-sway control (such as Japan's Tadano intelligent cranes); some models support remote control or drone-assisted positioning.

2. New energy and environmental protection design
Electric cranes (such as those modified from BYD electric truck chassis) are popular in urban construction with zero emissions; hydrogen fuel cranes (such as the pilot project of France's Air Liquide) have entered the research and development stage.

3. Special equipment for extreme scenarios
Deep-sea engineering cranes (such as Singapore's SSCV Thialf) have a maximum lifting capacity of 14,000 tons, used for submarine pipeline laying; space cranes (such as NASA's "Perseverance" robotic arm) are applied in planetary exploration.

**Key Milestone Timeline**

| Period | Event |
| --- | --- |
| 3rd century BCE | The lever principle was applied in ancient Greece, and pulleys appeared in China |
| 1784 | William Armstrong invented the first steam crane |
| 1860 | Steel structure cranes replaced wooden structures |
| 1925 | Crawler cranes were first used in engineering construction |
| 1955 | Tower cranes became popular in high-rise buildings |
| 2010 | Intelligent control systems became standard in cranes |

From ancient levers to modern intelligent equipment, the development history of cranes is essentially the iteration history of power, materials, and control technologies, continuously promoting human engineering capabilities to challenge the limits.
