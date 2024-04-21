---
sidebar_position: 5
sidebar_label: Case5-Smart Weather Station
---

# Case 05: Smart Weather Station

## Introduction

The aim of this lesson is to guide students to gain a deeper understanding of climate change and its impact on the environment and human beings through the creation of a Smart Weather Station in conjunction with the four case studies created earlier using this Kit. Through exploratory activities, students will be able to acquire basic skills in climate data collection and analysis, and further understand the importance of climate change and how to take measures to address it.

## Teaching Objectives

Knowledge Objective: Students will understand the impacts of climate change on the environment and human beings, and acquire basic skills in collecting and analysing climate data, as well as how to use and the principles of the Smart Weather Station Kit.

Skills Objective: Students will be able to build a Smart Weather Station and use sensors to record data such as temperature, humidity and air quality in the environment, and learn to use charts or graphs to present and analyse the data.

Attitudinal Objectives: Students will develop an awareness of and concern for climate change, a positive environmental awareness and action plan, and a spirit of teamwork and enquiry.

Extension Objective: Students will further extend their knowledge of the causes and effects of climate change and the actions taken by the international community to mitigate climate change, and will be encouraged to conduct independent research and think deeply about related issues.

By achieving the above teaching objectives, students will acquire comprehensive knowledge, skills and attitudes in teaching the climate theme, and will be able to actively participate in practical actions to protect the environment and respond to climate change.

## Teaching Preparation

Make sure you get below items ready before teaching:

| Picture | Name |
| :-: | :-: |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-02.png) | smart climate kit |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-03.png) | micro:bit V2 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-04.png) | PC |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-05.png) | USB Cable |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-05-05.png) | ELECFREAKS Smart Home Material Pack |


These materials will provide you with a complete experience and ensure that you can follow through and learn smoothly. If you are ready for the above, we can move on to the next step.

In order to better mount the wind speed sensor to the ELECFREAKS Smart Home Material Pack, we can create a simple structural piece by laser cutting.

Please check the following documents:

## Teaching Process

### Introduce

Welcome, students! Today we are going to get into a fascinating topic - climate change. Are you curious to know what climate change means for our lives and environment? Do you want to learn how technology can be used to explore and solve this global challenge? Well today, we will be working together to make an exciting Smart Weather Station and by using the sensors and devices in the Smart Weather Station Kit, we will explore and analyse data such as temperature, humidity and air quality in our environment. Not only will we learn about the importance of climate change, but we will also learn how to take steps to address this global challenge. Together, let's explore the mysteries of climate change, develop environmental awareness, and be a force for change in the world! Ready? Let's get started!

### Exploration


Group Practice: Students are divided into small groups and each group builds a Smart Weather Station using the sensors and devices from the Smart Weather Station Kit they created earlier.

Data collection: Students use the Smart Weather Station to record data on temperature, humidity and air quality in the environment, with the option of selecting different time periods for recording and saving the data.

Data Analysis: Students analyse the collected data and observe the relationship between temperature, humidity and air quality and their trends over time. Students can present the results of their data analysis using charts or graphs.

Discussion and summary: Students discuss the results of their data analysis in groups and answer the following questions: What are the signs of climate change in our environment? How might these changes affect our lives? What steps can we take to combat climate change?

### Hardware Connection

Connect the Wind speed sensor to P1, the UV sensor to P2, the LED on the Dust sensor to P3, the out to P4, the DHT11 Humidity and Temperature sensor to P10 and the OLED diplay on the IoT:bit board.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-05-06.png)

### Programming

*** Add Software Extensions ***

Go to“[makecode.microbit.org](https://makecode.microbit.org/)”, click to create new projects.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/smart-weather-station-kit-add-extension-01.png)

Click "Create" in the dialogue box after giving your project a name.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/smart-weather-station-kit-add-extension-02.png)

Click "Extensions" in the makecode drawer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/smart-weather-station-kit-add-extension-03.png)

Search with "IOT" in the dialogue box and get it downloaded.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/smart-weather-station-kit-add-extension-04.png)

*** Sample Code ***


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-04-07.png)


Link: [https://makecode.microbit.org/_a7sXEcgtc1M3](https://makecode.microbit.org/_a7sXEcgtc1M3)

You may download it directly below:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_a7sXEcgtc1M3"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

*** Download the program ***

Connect the micro:bit V2 with your PC with the USB cable.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/connect-microbit.gif)

There will be a disk named "MICROBIT" in your PC.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-drive.png)

Click ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-01.png) on the down left corner, select `Connect Device`.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-02.png)

Click ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-03.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-04.png)

Click ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-05.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-06.png)


Select `BBC micro:bit CMSIS-DAP` in the jumped-out page, and select "Connect", now the micro:bit board is successfully connected.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-07.png)

Click to download the program.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-08.png)

### Teamwork and Showcases

Students are divided into small groups and work together to create and programme the case.

Students are encouraged to co-operate, communicate and share their experiences with each other.

Each group will have the opportunity to present the cases they have produced and demonstrate them to the other groups.

*** Expected results: After connecting to the power supply, the current temperature and humidity, wind speed, UV intensity, noise intensity, and dust concentration are displayed on the OLED display. ***

（GIF动图）

### Reflection

Review the course content and remind students what knowledge and skills they have acquired.

Lead students to discuss the problems and difficulties they encountered during the production process and how they resolved them.

Guide students to take the initiative to understand the causes and effects of climate change and the actions taken by the international community to mitigate climate change.

## Extended Knowledge

### Causes and Impacts of Climate Change

The causes and effects of climate change are a complex and wide-ranging topic, so here's a brief look at some basic information:

Causes:

Greenhouse gas emissions: Human activities have led to the emission of large quantities of greenhouse gases, mainly carbon dioxide (CO2), methane (CH4), nitrous oxide (N2O), etc. These gases form a "greenhouse effect" in the atmosphere, causing the surface temperature of the Earth to rise. These gases create a "greenhouse effect" in the atmosphere, causing the surface temperature of the Earth to rise.

Fossil fuel use: Burning fossil fuels such as coal, oil and natural gas releases large amounts of carbon dioxide. This is one of the main sources of greenhouse gas emissions.

Deforestation: Forests are one of the most important absorbers of carbon dioxide on the planet, but large-scale deforestation has led to the release of carbon dioxide, destroying the absorptive capacity of forests.

Industrial activities: energy use and emissions from industrial processes are also important sources of greenhouse gases.

Impact:

Increased Climate Extreme Events: Climate change has led to more frequent and severe extreme weather events such as heavy rainfall, droughts, hurricanes and floods. These events have serious impacts on human life, agriculture, infrastructure and ecosystems.

Sea level rise: Global warming is leading to the melting of glaciers and polar ice, which in turn is leading to a rise in sea level. This will threaten coastal populations and ecosystems and increase the risk of marine erosion and flooding.

Loss of biodiversity: Climate change puts pressure on ecosystems, leading to species extinction and loss of biodiversity. Many plants and animals will not be able to adapt to the rapidly changing climatic conditions and the ecological balance will be disrupted.

Threats to agriculture and food security: Climate change threatens food security and farmers' livelihoods through its impacts on crop growing seasons, water resources and agricultural pests and diseases.

Increased health risks: Climate change contributes to air pollution, the spread of disease and problems with drinking water supplies. Extreme heat waves and natural disasters will also have a direct impact on human health.

These are just a few of the causes and effects of climate change, which are intertwined and have far-reaching implications for our planet and our own lives. Understanding and responding to the issue of climate change has therefore become particularly important.

### Actions Taken by the International Community to Mitigate Climate Change

Actions taken by the international community to mitigate climate change include the following key aspects:

1. Paris Agreement: The Paris Agreement is a major international climate change agreement adopted by the United Nations in 2015. The agreement aims to control global warming through global cooperation to limit the increase in global average temperature to 1.5 degrees Celsius and to take action to reduce greenhouse gas emissions. Countries voluntarily submit emission reduction targets and regularly report their progress to the United Nations.

2. Greenhouse gas emission reduction commitments: Many countries have adopted specific emission reduction commitments. Among them, some countries have committed to achieving carbon neutrality, i.e., reducing their greenhouse gas emissions to zero or balancing emissions with absorption at a specific time. Some countries have also set specific emission reduction targets and policies to promote the development of renewable energy, improve energy efficiency and facilitate the clean energy transition.

3. Renewable energy promotion: The international community has encouraged and supported the development and application of renewable energy sources, such as solar, wind and hydro energy. Many countries have adopted policies and measures to promote the use of renewable energy by reducing dependence on fossil fuels in order to reduce greenhouse gas emissions.

4. International cooperation and technology transfer: Countries are engaged in extensive cooperation and technology transfer in mitigating climate change. Developed countries provide financial, technological and capacity-building support to developing countries to help them address the challenges of climate change and achieve sustainable development.

5. Advancing the sustainable development agenda: The sustainable development agenda is the United Nations global development framework aimed at achieving economic, social and environmental sustainability. Climate change mitigation is one of the sustainable development goals, and countries have been active in advancing the sustainable development agenda by taking actions to achieve the twin goals of climate change and sustainable development.

These actions represent the efforts and cooperation of the international community in mitigating climate change. However, in the face of the challenges of climate change, there is still a need to further strengthen international cooperation and to take more active and vigorous action in order to achieve a sustainable future for the global climate.
