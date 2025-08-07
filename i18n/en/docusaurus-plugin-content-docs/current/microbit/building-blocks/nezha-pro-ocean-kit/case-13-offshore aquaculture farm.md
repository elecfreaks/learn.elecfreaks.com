---
sidebar_position: 13
sidebar_label: Case13:Simulating an Offshore Aquaculture Farm
---

# Simulating an Offshore Aquaculture Farm
## Story Introduction

After solving the island's power crisis, Ian began to worry about Jack, who had left in a hurry. After inquiring around, he learned that Jack's offshore aquaculture farm was damaged by a storm, and Jack had rushed back to repair it. Ian decided to go to help. What suggestions do you have for repairing the farm? What sensors need to be added to monitor the environment and better promote aquaculture?

--- 

## Teaching Preparation

| Name | Illustration |
| :----------: | :--------------------------: |
| Nezha Pro Ocean Kit  |   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/nezha-pro-ocean-kit-products-introduction-002.png.png)  |

--- 
## Teaching Objectives 

1. Understand what offshore aquaculture is.

2. Know the impact of basic characteristics of seawater such as salinity and temperature on cultured organisms.


--- 
## Learning and Exploration

1. Do you know the concept of offshore aquaculture? Please look up relevant information with your partners, record key points, and share with them.

2. If you were to design an offshore aquaculture farm, how would you do it? Try to present your ideas through drawing.

--- 
## Construction Steps

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case13/nezha-pro-ocean-kit-13-1.png.pdf" type="application/pdf" width="100%" height="600px" />

--- 

## Hardware Connection

The light sensor is connected to the "J1" port of the Nezha expansion board;

The rainbow light ring is connected to the "J2" port of the Nezha expansion board;

The DHT11 temperature and humidity sensor is connected to the "J3" port of the Nezha expansion board;

The OLED display is connected to the "IIC" port of the Nezha expansion sensor.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case13/nezha-pro-ocean-kit-13-3.png.png)

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

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/nezha-pro-ocean-kit-13.png)

Program link
[https://makecode.microbit.org/_Lu54UhC8PdUC](https://makecode.microbit.org/_Lu54UhC8PdUC)

You can also download the program directly through the following webpage.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_Lu54UhC8PdUC"
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

The DHT11 temperature and humidity sensor acquires the current environmental temperature and humidity data, which are displayed on the OLED display. When the light sensor detects that the current ambient light brightness is less than 100, the rainbow light ring lights up; otherwise, it turns off.

**Picture**

---
## Extended Knowledge

### Offshore Aquaculture Farms

Offshore aquaculture farms are places where humans artificially cultivate and breed marine organisms (such as fish, shellfish, algae, etc.) in the ocean. They are like "farms in the ocean", which can not only provide us with abundant seafood but also protect wild marine biological resources.

### I. What are the types of offshore aquaculture farms?

According to the distance from the shore, they are mainly divided into two categories:

**Inshore aquaculture farms**: Shallow sea areas close to the shore, such as bays and tidal flats. The water here is shallow and easy to manage, suitable for cultivating kelp, scallops, shrimps, etc.

**Offshore aquaculture farms**: Deep sea areas far from the shore, which require large cages, aquaculture platforms and other equipment, and can breed fish with high environmental requirements such as large yellow croakers and tuna.

### II. Classification by aquaculture methods

**Raft culture**: "Floating rafts" are composed of foam buoys or plastic floats, which are fixed in the sea by anchors. Cultured organisms (such as scallops and kelp) are hung on ropes under the rafts to suspend them in a suitable water layer (to avoid pollution from seabed sludge).

**Cage culture**: "Underwater cages" are enclosed with high-strength nets and fixed in the sea to breed fish (such as sea bass and grouper). The mesh size is just right to allow water flow (bringing in oxygen and natural bait) and to block cultured fish and large predators.

**Bottom sowing culture**: The seedlings of benthic organisms such as shellfish and sea cucumbers are directly sown in seabed sediments or rocky areas, allowing them to grow as in a natural environment. Only designated areas are demarcated to prevent poaching, which is suitable for species with strong environmental adaptability.

**Factory ship aquaculture**: Aquaculture cabins are built on large ships, and water temperature and salinity are regulated by equipment. They can move in the open sea and even "follow the habits of fish schools". It is an emerging high-tech aquaculture method in recent years.

### III. Aquaculture objects: from "vegetable basket" to "economic chain"

The "residents" of offshore aquaculture farms cover a variety of marine organisms, including both common food ingredients and economic species for processing:

**Algae**: Kelp, laver, wakame (rich in iodine and dietary fiber, known as "marine vegetables");

**Shellfish**: Scallops, oysters, clams (filter plankton in seawater, with low aquaculture costs);

**Fish**: Large yellow croakers, sea bass, salmon (high in protein, common on dining tables);

**Crustaceans**: Whiteleg shrimps, mud crabs (delicious in meat, with high economic value);

**Echinoderms**: Sea cucumbers, sea urchins (nutritious, with both edible and medicinal value).

### IV. Important significance: balancing demand and protection

**Ensuring food security**: About 1/3 of global seafood comes from aquaculture. Offshore aquaculture farms can stably supply high-quality protein, alleviating the problem of "insufficient wild seafood".

**Protecting wild resources**: Reducing overfishing of wild fish and shellfish, allowing biological populations in natural sea areas to recover.

**Driving economic development**: Coastal areas form industrial chains through aquaculture, processing, and sales, providing a large number of jobs (such as seedling breeders, aquaculture workers, seafood processors).

**Exploring blue agriculture**: Using marine space to develop "agriculture that does not occupy cultivated land" provides a new solution to the food pressure brought by population growth.

### V. Challenges: the key to sustainable development

Although offshore aquaculture is beneficial, it is necessary to avoid "neglecting one aspect while focusing on another":

If the aquaculture density is too high, residual bait and excrement will pollute the seawater, leading to water quality deterioration;

Introduced aquaculture species may escape into natural sea areas, squeezing the living space of native organisms;

Natural disasters such as typhoons and red tides may destroy aquaculture facilities and cause losses.


Therefore, modern offshore aquaculture farms are paying more and more attention to "ecological aquaculture": controlling aquaculture scale, selecting native species, and adopting circulating water technology (to reduce pollution), so that aquaculture and marine ecology can coexist harmoniously.
In short, offshore aquaculture farms are "sustainable granaries" opened by humans in the sea with wisdom - allowing us to enjoy seafood with peace of mind while striving to protect the health of the sea.
