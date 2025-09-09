---
sidebar_position: 7
sidebar_label: Case7:Lighthouse
---

# Lighthouse

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/tupian/nezha-pro-ocean-kit-step-07-00.png.png)

## Story Introduction
Ian has been sailing at sea for two weeks. Late at night, he flipped through his father's navigation log, which clearly recorded that there was an island nearby, but he couldn't find it. Suddenly, a violent storm hit, with huge waves tilting the hull by 15 degrees, and the wooden planks creaked as they shook. He gripped the rudder tightly, stared firmly at the sea, and finally caught a glimpse of the island's outline through the rain curtain. But the night was pitch-black, and he couldn't find the port at all. What can our little friends do to help Ian?

--- 

## Teaching Preparation

| Name | Illustration |
| :----------: | :--------------------------: |
| Nezha Pro Ocean Kit  |   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/nezha-pro-ocean-kit-products-introduction-002.png.png)  |

--- 
## Teaching Objectives 
1. Understand lighthouses.

2. Get to know the light sensor and rainbow LED ring module.

3. Master the use of light sensor building blocks and rainbow LED ring building blocks.

--- 
## Learning and Exploration

Do you know lighthouses? Do you know their functions?

--- 
## Construction Steps

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case07/nezha-pro-ocean-kit-step-07-1.png.pdf" type="application/pdf" width="100%" height="600px" />

--- 

## Hardware Connection

Motor 1 is connected to the "M4" port of the Nezha expansion board;

The light sensor is connected to the "J1" port of the Nezha expansion board;

The rainbow LED ring module is connected to the "J2" port of the Nezha expansion board.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case07/nezha-pro-ocean-kit-step-07-3.png.png)

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

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/nezha-pro-ocean-kit-07.png)

Program Link
[https://makecode.microbit.org/_UtCdk8JVoVJK](https://makecode.microbit.org/_UtCdk8JVoVJK)

You can also download the program directly through the following webpage.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_UtCdk8JVoVJK"
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

When the optical fiber sensor detects that the ambient light intensity is ＜ 100, the rainbow LED ring lights up in yellow.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/GIF/nezha-pro-ocean-kit-step-07-00.png.gif)

---
## Extended Knowledge

A lighthouse is a tower-shaped luminous navigation mark built near key parts of waterways. The following will introduce it from the dimensions of its history, structure, functions, and examples of famous lighthouses:

### 1. Development History

**Ancient Lighthouses:** Around 270 BC, Ptolemy II commissioned the Greek architect Sostratus to build the world's first lighthouse — the Pharos Lighthouse — at the eastern end of Pharos Island. It not only guided ships entering Alexandria Harbor but also showcased the prominence of Egyptian monarchs, becoming one of the Seven Wonders of the Ancient World. The Romans also built a series of lighthouses, creating the earliest lighthouse network system. Among them, the Ostia Lighthouse, built in 50 AD, remained until the 15th century.

**Modern Lighthouses:** From the end of the 18th century to the 19th century, light emitters with reflectors, lens lighthouses, and electric lighthouses appeared one after another. After the signing of the Sino-British Treaty of Tientsin in 1858, it was stipulated that "buoys, signal boats, tower markers, and watchtowers should be set up at each trading port, which should be constructed by consular officers and local officials after joint consideration", thus kicking off the construction of modern lighthouses in China.

**Contemporary Lighthouses:** In the early 20th century, electricity and calcium carbide acetylene gas began to replace kerosene as the light source of lighthouses, and with the further development of Dalén light, the tower lights could be automatically lit at dusk and turned off at dawn. With the rapid development of science and technology, comprehensive navigation systems such as radar transponders, DGPS systems, and AIS (Automatic Identification System) have been established. Although the navigation function of lighthouses has been weakened, their historical and cultural value has been valued by various countries.

### 2. Basic Structure

**Tower Body:** It can be constructed from various building materials such as stone, bricks, and steel. The main purpose is to adapt to and resist harsh natural conditions such as wind and waves to maintain its stability and durability. The height of the tower body should meet the requirements of the light's range.

**Luminaire:** It consists of two basic parts: a light emitter and a light radiator. The light source of modern lighthouses mainly uses electricity. The center of the light emitter's luminous body is located at the focal point of the condenser lens. The spherical light emitted by the light source becomes a parallel light beam with a certain divergence angle through the condenser lens.

### 3. Main Functions

**Navigation Assistance:** Guide ships to sail, help crew members determine directions in the vast sea, find the correct waterway, and avoid dangerous areas such as shoals, reefs, and sandbars.

**Military Defense:** In the past, lighthouses were often used for military purposes, such as coastal defense observation and preventing smuggling. Generally, there are also defensive facilities such as artillery batteries and castles near lighthouses. In addition, lighthouses can also play a certain role in psychological warfare.

**Sovereignty Assertion:** In disputed waters, lighthouses are often regarded as a symbol of sovereignty.

**Geographical Coordinates:** With the development of modern navigation technology, the navigation value of lighthouses is decreasing, but they have potential historical and cultural value and have become human geographical coordinates pursued by various countries.

### 4. Famous Famous Lighthouses

**Torre de Hércules Lighthouse:** Located in Spain, it was built in the 2nd century AD. It is the only remaining Roman lighthouse still in use so far and holds the title of "the oldest operational lighthouse in the world".

**Cape of Good Hope Lighthouse:** Located at the tip of the Cape of Good Hope Peninsula in Cape Town, South Africa, it is the southernmost lighthouse in Africa and one of the most famous lighthouses in the world. Its original lighthouse was built in 1859 and has been rebuilt and relocated many times due to poor location and other reasons.

**Laotieshan Lighthouse:** Located at the southern end of Lüshunkou, Dalian, Liaoning Province, China, it is surrounded by the sea on three sides. The tower is 14.2 meters high and 6 meters in diameter. It was manufactured by the French and built by the British in 1893 during the Qing Dynasty. In 1997, it was listed as "one of the 100 historical and cultural lighthouses in the world" by the International Association of Marine Aids to Navigation and Lighthouse Authorities (IALA).
