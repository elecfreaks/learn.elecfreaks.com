---
sidebar_position: 3
sidebar_label: Case3:Transport Vehicle

---

# Transport Vehicle

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case03/nezha-pro-ocean-kit-step-03-00.png.png)

## Story Introduction
The morning fog had not yet lifted, and Ian looked at the boxes of supplies piled up at the town entrance — thirty barrels of fresh water, more than fifty boxes of grain, half a bundle of hemp rope, as well as the box of nautical instruments left by his father and numerous daily supplies. To carry all these to the port by himself, he would need to make many round trips. Please help Ian find a way to transport the supplies to the port.

--- 

## Teaching Preparation

| Name | Illustration |
| :----------: | :--------------------------: |
| Nezha Pro Ocean Kit | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/nezha-pro-ocean-kit-products-introduction-002.png.png) |

--- 
## Teaching Objectives 
1. Understand the potentiometer sensor.

2. Understand the collision sensor.

3. Learn about the development history and characteristics of maritime transportation.

--- 

## Learning Exploration

1. Explore the principle of the car's steering.

2. Share the history of automobile development.

3. Share with friends the functions of the future transport vehicles you imagine.

## Construction Steps

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case03/nezha-pro-ocean-kit-step-03-1.png.pdf" type="application/pdf" width="100%" height="600px" />

--- 

## Hardware Connection
Motor 2 is connected to the "M1" port of the Nezha expansion board;

Motor 1 is connected to the "M2" port of the Nezha expansion board;

The potentiometer sensor is connected to the "J1" port of the Nezha expansion board;

Collision Sensor 1 is connected to the "J2" port of the Nezha expansion board;

Collision Sensor 2 is connected to the "J3" port of the Nezha expansion board;

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
### Example Program

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/nezha-pro-ocean-kit-03.png)

Program Link
[https://makecode.microbit.org/_1K8XPj5pT0Jc](https://makecode.microbit.org/_1K8XPj5pT0Jc)

You can also download the program directly through the following webpage.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_1K8XPj5pT0Jc"
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

Press Collision Sensor 1, and the car moves forward; press Collision Sensor 2, and the car moves backward. The speed of the car is controlled by the potentiometer sensor.



---
### Extended Knowledge

### Maritime Transport: The Blue Artery Connecting the World

#### I. Historical Evolution of Maritime Transport

**Ancient Times to the Middle Ages (Age of Sailing Ships)**

Technical Features: Driven by wind power, typical examples include the treasure ships of the Ming Dynasty in China, Arab dhows, and European caravels.

Trade Networks: Maritime branches of the Silk Road (Indian Ocean - Pacific routes), Mediterranean trade circles (grain transportation in the Roman Empire).

Limitations: Slow speed (about 5-7 knots), reliance on monsoons, and routes restricted by geography.

**Industrial Revolution to the 20th Century (Age of Steam and Mechanization)**

Technological Breakthroughs: Fulton's steamship came out in 1807; iron-hulled ships replaced wooden ships in the 19th century; containerization in the 20th century (McLean first used containers in 1956).

Impact: Global maritime trade volume was about 500 million tons in 1900; after World War II, container transportation reduced costs by 90%, promoting global division of labor.

**21st Century to Present (Intelligence and Green Transformation)**

Current Situation: In 2023, global maritime transport undertakes about 80% of international trade (calculated by ton-kilometers), with the total tonnage of the merchant fleet exceeding 2 billion tons (UNCTAD data).

Trends: Automated ports (such as Shanghai Yangshan Port), LNG-powered ships, digital shipping management (blockchain bills of lading).

#### II. Main Modes and Vessel Types of Maritime Transport
| Transport Mode | Vessel Type | Typical Cargo | Characteristics |
|---|---|---|---|
| Container Transport | Container ships (ultra-large ones like 24,000 TEU) | Industrial products, consumer goods | Standardized loading and unloading, accounting for 35% of maritime trade volume (by value), with routes covering major ports worldwide. |
| Bulk Cargo Transport | Cape-size, Panamax bulk carriers | Iron ore, coal, grain | Single-vessel deadweight exceeds 200,000 tons, with routes concentrated in resource-exporting countries (such as Australia - China iron ore routes). |
| Tanker Transport | VLCC (Very Large Crude Carrier, deadweight 300,000+ tons) | Crude oil, refined oil | Routes are significantly affected by geopolitics (such as the Strait of Hormuz, Strait of Malacca), requiring anti-pollution design. |
| Liquefied Gas Transport | LNG/LPG carriers | Liquefied natural gas, liquefied petroleum gas | Require low-temperature or high-pressure storage, high ship construction costs, with routes concentrated in the Middle East - East Asia, North America - Europe. |
| General Cargo Transport | Multipurpose cargo ships | Machinery, vehicles, building materials | Suitable for non-standardized goods, gradually replaced by containers, accounting for less than 10%. |
| Special Transport | Ro-ro ships, heavy-lift ships, refrigerated ships | Automobiles, heavy equipment, fresh food | Ro-ro ships can directly load and unload vehicles (such as automobile exports); refrigerated ships have temperature control accuracy of ±0.5℃. |

#### III. Key Routes and Hubs of Global Maritime Transport

**Major International Routes**

Asia-Europe Routes: Suez Canal Route (Asia - Europe, shortening the voyage by 40% compared to going around the Cape of Good Hope), Arctic Northeast Route (China-Russia route, navigable in summer).

Trans-Pacific Routes: Far East - North America West Coast (Long Beach, Los Angeles), Far East - North America East Coast (via the Panama Canal).

Atlantic Routes: Europe - North America (traditional trade routes), South America East Coast - Europe (soybean, iron ore transportation).

**Hub Ports (2023 Throughput Data)**

Container Ports: Shanghai Port (47.3 million TEU), Singapore Port (37.4 million TEU), Ningbo-Zhoushan Port (33.35 million TEU).

Bulk Cargo Ports: Port Hedland, Australia (iron ore, annual throughput 180 million tons), Tubarão Port, Brazil (iron ore).

Tanker Ports: Jubail Port, Saudi Arabia; Fujairah Port, UAE (Persian Gulf crude oil transshipment hubs).

#### IV. Challenges and Sustainable Development of Maritime Transport

**Environmental Challenges**

Carbon Emissions: The shipping industry accounts for 2.8% of global greenhouse gas emissions (2023). The International Maritime Organization (IMO) requires net-zero emissions by 2050.

Pollution Risks: Ship sulfur emissions (IMO 2020 sulfur limit order, sulfur content ≤0.5%), biological invasion caused by ballast water (such as the spread of zebra mussels).

Accident Impacts: Crude oil spills (such as the 1989 Exxon Valdez accident, polluting Alaskan waters), containers falling into the sea (about 10,000 standard containers lost annually).

**Geopolitical and Security Risks**

Piracy Threats: Gulf of Guinea (54 pirate attacks in 2023), Gulf of Aden (risk reduced after international escort).

Geopolitical Conflicts: The Russia-Ukraine war affected Black Sea grain transportation (2022 Black Sea Grain Initiative), Red Sea shipping disrupted by the Yemeni conflict.

Sustainable Development Practices

Green Technologies: Methanol-powered ships (such as Maersk's first methanol container ship in 2023), ammonia-fuel test ships, wind-assisted propulsion (installation of sails or kites).

Digital Transformation: Blockchain bills of lading (such as Maersk and IBM's TradeLens platform), AI-predicted route optimization (reducing fuel consumption by 10-15%).

International Governance: IMO's "2021 International Shipping Carbon Intensity Indicator (CII)", requiring ships to improve carbon intensity by 2% annually.

#### V. Future Trends: Intelligence, Low-Carbonization, and Regionalization

**Technological Innovation**

Autonomous ships (such as Japan's unmanned container ship tested in 2024), hydrogen-fueled ships (2030 target).

**Regionalized Trade**

Short-sea shipping (European short-sea transport accounting for 30%), intra-regional port alliances (such as the Southeast Asian port network).

**Emerging Markets**

Development of coastal shipping in Africa (such as the expansion of Lagos Port in Nigeria), commercialization of Arctic routes (China-Russia cooperation in the Yamal LNG project).

As the cornerstone of globalization, maritime transport is transforming from "efficiency first" to "green and intelligent". Its development is deeply intertwined with geopolitics, technological innovation, and ecological protection, reshaping the world economic pattern of the 21st century.
