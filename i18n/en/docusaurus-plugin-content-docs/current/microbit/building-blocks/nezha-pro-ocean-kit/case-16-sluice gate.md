---
sidebar_position: 16
sidebar_label: Case16:Sluice Gate
---

# Sluice Gate

## Story Introduction

Ian and Jack were walking on the street when they heard workers discussing: due to continuous heavy rains causing the river water to rise sharply, it was necessary to open the sluice gate to discharge the river water into the sea; while in normal times when the water level is low, the sluice gate should be closed to not only ensure the city's fresh water supply but also prevent seawater intrusion. Upon hearing this, Ian and Jack began to think about how to help the workers design an intelligent sluice gate system.

(More exciting stories are being updated......)

---

## Teaching Preparation

| Name | Illustration |
| :----------: | :--------------------------: |
| Nezha Pro Ocean Kit | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/nezha-pro-ocean-kit-products-introduction-002.png.png) |

---

## Teaching Objectives

1. Understand sluice gates and their functions.
2. Try to design an intelligent sluice gate according to task requirements.

---

## Learning and Exploration

1. According to the task requirements, discuss in groups how to design an intelligent sluice gate and what functions it should have. Draw a simple prototype based on the discussion results and share it with other groups.

---

## Construction Steps

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case16/nezha-pro-ocean-kit-16-1.png.pdf" type="application/pdf" width="100%" height="600px" />

---

## Hardware Connection

The water level sensor is connected to the "J1" port of the Nezha expansion board;

Motor 1 is connected to the "M1" port of the Nezha expansion board.


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case16/nezha-pro-ocean-kit-16-4.png.png)

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

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case16/nezha-pro-ocean-kit-16-2.png.png)

Program link
[https://makecode.microbit.org/_4Tw0b0cMWTcX](https://makecode.microbit.org/_4Tw0b0cMWTcX)

You can also download the program directly through the following webpage.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_4Tw0b0cMWTcX"
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

When the water level sensor detects that the seawater level is ＜50, the sluice gate opens; when the water level sensor detects that the seawater level is ＞50, the sluice gate closes to prevent seawater intrusion.


**Pictures**

---
## Extended Knowledge

### Seawater Intrusion

Seawater intrusion refers to the phenomenon where seawater invades inland freshwater systems through the surface or underground, and it is a common challenge faced by coastal areas worldwide. The following is an analysis from the aspects of domestic and foreign cases, core causes, impacts, and response measures:

### I. Cases

**Mississippi River, USA (2023)**

Persistent drought led to a sharp reduction in river flow, and seawater from the Gulf of Mexico intruded 113 kilometers north of New Orleans, threatening the drinking water safety of 800,000 people. Seawater corroded old lead pipes, which might cause heavy metal pollution.

**Venice, Italy (2019)**

Extreme weather caused the water level to reach 1.87 meters, 85% of the city was flooded, St. Mark's Square was invaded by seawater many times, and tourism and ancient buildings were severely damaged.

**Mekong Delta, Vietnam (2024)**

Rising sea levels and drought expanded the range of seawater intrusion, soil salinization led to a 30%-50% reduction in rice production, and the livelihoods of millions of farmers were threatened.

**Panjin, Liaoning (October 2024)**

Affected by the superposition of astronomical high tides and edge waves of temperate storm surges, 231 households in Erjiegou Street, Dawa District, Panjin City were flooded, with water depth exceeding half a meter. Panjin is located at the estuary of the Daliao River, and the trumpet-shaped terrain amplified the impact of incoming tides. Meanwhile, the sea-level rise caused by global warming (China's coastal sea level reached the highest in the same period in history in 2024) exacerbated the risk of intrusion.

### II. Core Causes

**2.1 Natural Factors**

**Superposition of Astronomical High Tides and Storm Surges**
During the syzygy period (the first and fifteenth days of the lunar calendar), the tidal forces of the sun and the moon are superimposed. If coupled with weather systems such as typhoons and cold air, storm surges can cause the tide level to exceed the orange or even red warning level. For example, the 2024 seawater intrusion along the Liaoning coast was due to the superposition of edge waves of temperate storm surges and astronomical high tides, resulting in a record-high tide level.

**Sea-Level Rise**

The global sea-level rise rate reached 3.4 mm/year from 1993 to 2023, and 4.0 mm/year along China's coast. Sea-level rise increases the basic tide level, amplifying the disaster-causing potential of storm surges.

**Topographic Impact**

Trumpet-shaped river mouths (such as the Qiantang River and Panjin Daliao River) and concave bays (such as the Bohai Bay) are prone to raising water levels due to tide convergence, leading to intrusion.

**2.2 Anthropogenic Factors**

**Over-Extraction of Groundwater**

Excessive extraction of groundwater in coastal cities leads to land subsidence, forming funnel areas and accelerating seawater intrusion. China has formed 87,000 square kilometers of funnel areas, with severe seawater intrusion in Hebei, Shandong and other places.

**River Diversion and Ecological Destruction**

Freshwater interception by water conservancy projects and destruction of mangrove wetlands have weakened natural barriers. For example, the Mekong Delta in Vietnam has an increased risk of seawater intrusion due to dam construction and wetland development.

**Climate Change**

Global warming causes polar glaciers to melt and seawater to thermally expand, further pushing up sea levels. The IPCC predicts that global sea levels may rise by 0.56-0.77 meters by 2100, and the frequency of coastal floods will increase significantly.

### III. Main Impacts

**3.1 Ecological Destruction**

Seawater intrusion leads to soil salinization (chloride ion content ＞1000 mg/L is severe salinization), wetland degradation, and threatens ecosystems such as mangroves and coral reefs. For example, wetlands in Louisiana, USA, disappear at an average rate of about 13 square kilometers per year due to seawater intrusion.

**Agricultural and Drinking Water Crisis**

Salinized soil reduces crop yields (vegetable yields decrease by 20% when chloride ＞600 mg/L), and freshwater sources are polluted. 40% of farmland in the Mekong Delta of Vietnam has been affected by salinization.

**Infrastructure Damage**

Seawater corrodes metal pipes, roads and buildings. 48% of the water supply network in New Orleans is lead, and seawater intrusion may pose long-term health risks.

**Economic Losses**

In 2024, direct economic losses caused by seawater intrusion along China's coast reached 72 million yuan, and the United States planned to invest hundreds of millions of dollars in building reverse osmosis devices to deal with the intrusion in the Mississippi River.

### IV. International Experience

**Netherlands' Delta Works Project**

By building adjustable sluice gates and dikes, the estuaries of the Rhine, Meuse and other rivers are isolated from the North Sea, effectively preventing storm surges. The project has reduced the flood risk in the Netherlands by 90%.

**Groundwater Management in the United States**

Florida has legislated to restrict groundwater extraction and promote seawater desalination (such as the Tampa Bay reverse osmosis plant) to reduce reliance on freshwater.

**Venice's MOSE Project**

78 liftable dams are built to rise and block seawater during high tide. After being put into use in 2023, the frequency of floods in Venice has decreased by 60%.

### V. Future Challenges and Suggestions

**Climate Adaptation**

It is necessary to strengthen the monitoring of sea-level rise, promote the planning of coastal cities to shift to high-altitude areas, and avoid building new infrastructure in low-lying areas.

**Technology Upgrading**

Promote technologies such as digital twins and satellite remote sensing to improve the refined forecasting capability of storm surge overtopping.

**International Cooperation**

Establish transnational monitoring networks to share storm surge and sea-level data. For example, the Association of Southeast Asian Nations (ASEAN) cooperates to address the intrusion problem in the Mekong Delta.

**Public Participation**

Coastal residents need to prepare for防潮 during astronomical high tides and avoid activities in dangerous areas. For example, the Shapowei community in Xiamen pushes early warning information through electronic fences.

Seawater intrusion is the result of the combined effects of climate change and human activities. Its governance requires global collaboration, technological innovation and ecological protection. Through multi-dimensional measures of "engineering-ecology-management", the risk of intrusion can be minimized, and the sustainable development of coastal areas can be ensured.
