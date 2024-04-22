---
sidebar_position: 2
sidebar_label: Case 02 Anemometer
---

# **Case 02 Anemometer**

## Introduction

This course is designed to show how to build an anemometer using the wind speed sensor and Micro:bit in the Smart Weather Station Kit. Students will learn how to record different wind speeds through programming and sensor technology and display the wind speed data locally through an OLED display. Through this hands-on project, students will learn about the effects of wind and the application of sensors and programming.

## **Teaching Objectives **

Understanding the use of wind sensors
Understanding the effects of wind

## **Teaching Preparation**

Please make sure you have the following necessary materials ready:

| Picture | Name |
| :-: | :-: |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-02.png) | smart climate kit |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-03.png) | micro:bit V2 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-04.png) | PC |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-05.png) | USB cable |

These materials will provide you with a complete experience and ensure that you can follow through and learn smoothly. If you are ready for the above, we can move on to the next step.

## **Teaching Process**

### **Introduce**

Do you all often feel the wind blowing? Wind is one of the common natural phenomena in our daily life, which not only brings us coolness, but also has an impact on our surroundings. So, do you want to know what the current wind speed is? In this lesson, we will explore together how to make an anemometer using the wind speed sensor and Micro:bit microcontroller in the Smart Climate Kit.
An anemometer is a device that can measure the speed of the wind by using a sensor to detect the speed of the wind in the air and convert it into readable data. We will use the wind speed sensor and Micro:bit from the Smart Climate Kit and program it to read the data from the sensor and display the wind speed in real time on an OLED display.

### **Exploration **

1. The impact of wind speed on your life.

2. Learn how to write code to read sensor data using the programming environment on micro:bit.
3. How to present wind speed data as a visualization through an OLED display.

### Hardware

Connect the wind speed sensor to the P1 port and the OLED display to the IIC port.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-02-06.png)

### ** Program **

*** ** Add Extensions** ***

Go to " [makecode.microbit.org](https://makecode.microbit.org/) " and click New Project.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/smart-weather-station-kit-add-extension-01.png)

Enter the project name in the pop-up window and click "Create".

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/smart-weather-station-kit-add-extension-02.png)

Click on "Extensions" in the code drawer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/smart-weather-station-kit-add-extension-03.png)

In the pop-up interface, type "IOT", press the enter key to search, and choose to load the IOT software library.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/smart-weather-station-kit-add-extension-04.png)

*** **Sample Code**  ***

1. The heart icon is displayed when the power is turned on.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-02-07.png)

2. Initialize the OLED display.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-02-08.png)

3. The current wind speed is displayed on the OLED screen.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-02-09.png)

Link：[https://makecode.microbit.org/_5TYTix6W3Xyo](https://makecode.microbit.org/_5TYTix6W3Xyo)

You can also download the program directly from the following page.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_5TYTix6W3Xyo"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>
*** **Download Programs** ***

Use the USB cable to connect the PC to the micro:bit V2.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/connect-microbit.gif)

After a successful connection, a disk drive named `MICROBIT` is recognized on the computer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-drive.png)

Click on the bottom left corner and select `Connect Device`.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-02.png)

Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-03.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-04.png)

Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-05.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-06.png)


Select `BBC micro:bit CMSIS-DAP` in the pop-up window, and then select “Connect”, so far, the micro:bit has been connected successfully.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-07.png)

Click to download the program.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-08.png)

### **Teamwork and Showcases **

Students are divided into small groups and work together to create and program cases.
Students are encouraged to cooperate, communicate and share their experiences with each other.
Each group will have the opportunity to present the cases they have produced and demonstrate them to the other groups.

*** **Expected results: When connected to the power supply, the micro:bit displays the heart icon first and then the current wind speed on the OLED display according to the current wind speed.** ***

（GIF动图）

### ** Relection **

Review the course content and remind students what knowledge and skills they have acquired.
Lead students in a discussion about the problems and difficulties they encountered during the making of their productions and how they solved them.
Guide students to think about how wind affects people's lives at different wind speeds.

## **Extended Knowledge**

### **The Impact of Wind Speed on Life**

Wind speed is the speed at which the wind moves and it has a wide range of effects on our lives and surroundings. Here are some examples of how wind speed affects our lives:
Temperature perception: when the wind speed is high, the wind takes away the hot air around us, making us feel cooler. This is why a light breeze can provide a sense of comfort on a hot summer day.
Natural ventilation: Proper wind speed promotes air circulation and helps ventilate the room. In the absence of air conditioning or fans, a breeze can help people feel refreshed and reduce the feeling of stuffiness.
Wind energy utilization: High wind speed is important for wind energy generation. With wind turbines, wind can be converted into electricity, providing renewable and clean energy for our energy needs.
Transportation: Wind speeds have a significant impact on modes of transportation such as aviation and navigation. Strong winds and storms can cause flights to be delayed or canceled, and ships need to adjust their direction and speed depending on wind speed.
Plant Propagation: Wind can help plants spread pollen and seeds. Some plants rely on wind to spread pollen to other flowers for reproduction. Wind can also help plants spread their populations by dispersing their seeds far from their parent plant.
Weather Change: Wind speed is an important factor in weather systems that can affect temperature, precipitation, and cloud formation. For example, strong winds can change the shape and speed of cloud formation and also have an effect on precipitation distribution.
These are just some of the common effects of wind speed on life. In fact, wind speed is also closely related to the fields of meteorology, environment and building design. By understanding the effects of wind speed, we can better adapt to and utilize the natural environment to create better conditions for our life and work.

### **Classes Corresponding to Wind Speed**

Wind speeds are usually described in terms of different classes, which are based on the internationally widely used wind scale. The following are common classes corresponding to wind speeds:
No wind (Calm): wind speed less than 1 knot (less than 1.15 km/h).
Characteristics: Leaves are still and smoke is straight up. Light breeze: wind speeds of 1-3 knots (1.15-3.45 km/h).
Characteristics: Leaves are swaying slightly and you can feel the breeze blowing. Gentle breeze: Wind speed 4-6 knots (4.6-7.75 km/h).
Characteristics: Leaves and twigs sway and a noticeable wind can be felt. Moderate breeze: wind speeds of 7-10 knots (8.05-11.5 km/h).
Characteristics: Branches and larger leaves swing and a noticeable wind is felt. Fresh breeze: wind speeds of 11-16 knots (12.65-18.5 km/h).
Characteristics: Whole tree shakes, wind blows with some difficulty. Strong breeze: wind speed 17-21 knots (19.55-24.4 km/h).
Characteristics: Trees shake, some difficulty in walking. High wind: Wind speed 22-27 knots (25.3-31.15 km/h).
Characteristics: Difficulty in walking, noticeable resistance when the wind is blowing. Gale: Wind speed 28-33 knots (32.2-38.25 km/h).
Characteristics: Trees shake and walking is difficult. Strong gale: Wind speed 34-40 knots (39.15-46.3 km/h).
Characteristics: Trees sway and walking is difficult. Storm: Wind speed 41-47 knots (47.2-54.35 km/h).
Characteristics: Trees are broken and walking is extremely difficult. Hurricane: Wind speed greater than or equal to 48 knots (55.45 km/h or more).
Characteristics: Destructive storms that severely affect people and buildings. These wind ratings can help people understand and describe the strength of the wind and provide important references in weather forecasting, marine navigation, and outdoor activities. It should be noted that the actual impact of wind speed also depends on other factors, such as wind direction and topography.
