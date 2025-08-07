---
sidebar_position: 1
sidebar_label: Case1:Sailboat
---

# Sailboat

## Story Introduction
Ian harbors a dream of exploring the ocean, eager to witness the wonders of sperm whales, coral reefs, and deep-sea fish. He hopes to head to the vast sea to find his father who went to sea years ago and hasn't returned. At night, Ian clutches his father's nautical log, falls asleep to the rhythm of the waves, and in his dream, he sails a small boat, uncovering the mysteries of the deep ocean. Please help Ian build a small boat.

--- 

## Teaching Preparation
|Name|Illustration|
|:----------: | :--------------------------:|
|Nezha Pro Ocean Kit|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/nezha-pro-ocean-kit-products-introduction-002.png.png)|

--- 
## Teaching Objectives 
1. Understand different types of boats.

2. Get to know the dual-track line sensor.

3. Learn to use the branch structure building blocks.

--- 
## Learning and Exploration

1. Share the types of boats you know and the power-driven boats.

2. Discuss with classmates why boats can float on the water.

--- 
## Construction Steps

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case01/nezha-pro-ocean-kit-step-01-1.png.pdf" type="application/pdf" width="100%" height="600px" />

--- 

## Hardware Connection

Motor 1 is connected to the "M4" port of the Nezha expansion board;

Motor 2 is connected to the "M1" port of the Nezha expansion board;

The dual-track line sensor is connected to the "J4" port of the Nezha expansion board.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case01/nezha-pro-ocean-kit-step-01-2.png)

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

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case01/nezha-pro-ocean-kit-step-01-3.png.png)

Program Link
[https://makecode.microbit.org/_30uehPYzFER0](https://makecode.microbit.org/_30uehPYzFER0)

You can also download the program directly through the following webpage.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_30uehPYzFER0"
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

In the pop-up window, select **BBC micro:bit CMSIS-DAP**, then select **Connect**. So far, our micro:bit has been successfully connected.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual14.png)

Click **Download Program**

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual10.png)

---
## Case Demonstration

Blow or push the sail control lever by hand until the dual-track line sensor cannot detect the lever, the boat moves forward; when the sail control lever returns to its original position, the boat stops moving.

**Picture**

---
## Extended Knowledge

### The Development History of Boats

#### 1. Prehistoric Embryonic Period: Primitive Navigation with Natural Materials (1 million years ago - 3000 BC)

**1. Utilization of Natural Floats**

- Driftwood and Gourds: In the Paleolithic Age, humans discovered that natural floating objects such as trees and gourds could carry weight. They made simple rafts by binding branches with vines. The earliest evidence was found in archaeological discoveries in the Congo River basin in Africa.

- Bark Boats: In the Neolithic Age, Northern Europeans sewed birch bark onto a wooden frame and coated it with animal fat to make it waterproof, which was used for fishing in lakes. The earliest existing bark boat can be traced back to 8000 BC.

**2. Technological Breakthrough: The Birth of Dugout Canoes**

- Around 6000 BC, Mesopotamia and the Yangtze River basin in China independently invented dugout canoes: hollowing out entire tree trunks with stone axes, which could carry 2-3 people. This marked the beginning of humans actively transforming navigation tools.

#### 2. Ancient Civilization Period: The Golden Age of Sailing Ships and Oared Ships (3000 BC - 15th Century)

**1. The Sailing Revolution in the Mediterranean and West Asia**

- Ancient Egyptian Papyrus Boats (3000 BC): Made by bundling Nile papyrus into a hull, with a wooden mast hanging linen sails, sailing downstream at a speed of 5km/h. Murals record their use in transporting pyramid stones.

- Phoenician Biremes (1200 BC): With a row of oarsmen (about 50 people) on each side of the hull, paired with triangular sails, they could row forward against the wind, becoming the main force in Mediterranean trade and naval battles.

**2. Ship Innovations in East Asia**

- Chinese Tower Ships (Han Dynasty): Up to 3 layers high, with watchtowers and crossbows on the deck, with a maximum load of 1,000 tons. The "Book of the Later Han" records their use in cross-sea expeditions to the Korean Peninsula.

- Japanese Envoy Ships to the Tang Dynasty (7th Century): Adopting the "Envoy to Tang Ship" type, with a pointed bow, a square stern, equipped with a balanced rudder and bamboo sails, the success rate of crossing the East China Sea was 40% higher than that of previous generations.

**3. Navigation Technology in the Indian Ocean and Africa**

- Arab Dhows (9th Century): Using flexible triangular sails (adaptable to crosswinds), with a load of 200-300 tons, they monopolized the Indian Ocean spice trade. Vasco da Gama's voyage drew on its ship type.

#### 3. Age of Discovery: The Peak of Sailing Ships and Geographical Discoveries (15th - 17th Centuries)

**1. Revolutionary Designs of European Ships**

- Caravel (15th Century): Invented by the Portuguese, with a combination of three masts and triangular sails, it had a shallow draft and flexible steering. Columbus' "Santa Maria" in his 1492 voyage to the Americas was of this type.

- Galleon (16th Century): The main warship of Spain, with a hull as tall as a castle, equipped with 30-50 cannons. The Spanish Armada used this type of ship to expedition to Britain in 1588.

**2. The Last Voyage of Chinese Navigation**

- Zheng He's Treasure Ship (15th Century): According to the "History of the Ming Dynasty", the largest treasure ship was 44 zhang long (about 138 meters), with nine masts and twelve sails, capable of carrying a thousand people. It reached East Africa half a century earlier than Columbus' fleet, but failed to continue the navigation tradition due to the sea ban policy.

#### 4. Industrial Revolution Period: Steam Power and Iron Hulls (18th - 19th Centuries)

**1. The Birth of Steamships**

- In 1807, Fulton built the "Clermont": with paddle wheels as propellers, the steam engine had 20 horsepower, sailing along the Hudson River at 8km/h, marking the beginning of the era of commercial steamships.

- In 1838, the "Great Western" became the first steamship to cross the Atlantic (coal-fired, wooden hull), shortening the voyage time from 21 days for sailing ships to 15 days.

**2. Popularization of Iron Ships and Propellers**

- In 1858, Britain's "Great Eastern": 211 meters long, with an iron hull, equipped with both paddle wheels and propellers, with a load of 27,000 tons, once laid transatlantic submarine cables.

- In 1860, propellers replaced paddle wheels as the mainstream: Prussia's "Ariadne" first adopted full propeller propulsion, with 30% higher efficiency than paddle wheels.
