---
sidebar_position: 3
sidebar_label: Smart Washbasin
---

# Smart Washbasin

## Introduction

In this project, we will learn how to make a smart washbasin that uses ultrasonic sensors to accurately detect human approach. Once a person is detected, the system automatically triggers the water pump to achieve automatic water discharge without manual operation, which is both hygienic and convenient.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-life-kit/images/case-03-01.png)

## Teaching objectives

Understand how to use ultrasonic sensors

Understand how to use relays and water pumps

## Teaching preparation

Before starting teaching, please make sure you have prepared the following necessary materials:

| **Picture** | **Name** | **Number** | **Note** |
| --- | --- | --- | --- |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-life-kit/images/microbit-smart-life-kit.png) | Smart Life Kit | 1 |  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/USB-data-cable.png) | USB Cable | 1 |   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit.png) | micro:bit | 1 | Prepare Yourself |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/pc.png) | PC | 1 | Prepare Yourself |

These materials will provide you with a complete experience and ensure that you can smoothly carry out subsequent operations and learning. If you have prepared the above content, we can proceed to the next step.

## Course Introduction

Since 2019, the new coronavirus epidemic has ravaged the world, causing great impact on people's production and life. Regarding preventing virus infection, we must maintain social distance, wash hands frequently and maintain hygiene, etc. We found that there are some differences between the washbasins in public places and those at home. Many faucets in public places do not need to be touched by hand, which greatly reduces the risk of cross-infection. How is it achieved? Can we make one ourselves?

## Project Production

### Hardware Connection

Connect the ultrasonic sensor to the P1 interface of the wukong expansion board, connect the relay to the P2 interface of the wukong expansion board, connect the water pump to the relay, and connect the OLED display to the IIC interface of the wukong expansion board.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-life-kit/images/case-03-02.png)

### Programming platform

We usually use [graphical programming platform makecode](https://makecode.microbit.org/) to program micro:bit

Programming platform entrance: [https://makecode.microbit.org/](https://makecode.microbit.org/)

### Create a new project

Open [https://makecode.microbit.org/](https://makecode.microbit.org/)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode.png)

New Project

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode-new-project-01.png)

Enter a project name and click Create.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode-new-project-02.png)

### Add software library

Click Extensions in the Toolbox of the MakeCode programming interface.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-02.png)

Search for iot-environment-kit on the pop-up page and click to select the iot-environment-kit software library.


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-03.png)

Search for wukong on the pop-up page and click to select the wukong software library.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-04.png)

### Write a program

Sample program：[https://makecode.microbit.org/_4uRc4hUcAWXx](https://makecode.microbit.org/_4uRc4hUcAWXx)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-life-kit/images/case-03-03.png)

You can also download the program directly from the following web page.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_4uRc4hUcAWXx"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>




### How to download the program to micro:bit?

Use a USB cable to connect PC and micro:bit V2.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/connect-microbit.gif)

After the connection is successful, a drive named `MICROBIT` will be recognized on the computer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-drive.png)

Click ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-01.png) in the lower left corner and select `Connect Device`.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-02.png)

Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-03.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-04.png)

Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-05.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-06.png)


In the pop-up window, select `BBC micro:bit CMSIS-DAP`, and then select Connect. At this point, our micro:bit has been successfully connected.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-07.png)

Click Downloader.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-08.png)

### Result

After turning on the power, the OLED displays the current water level value, and the current water level is more intuitively reflected through the rotation angle of the servo.

## Extended knowledge

**Applications of smart washbasins**

Smart washbasins are increasingly used in modern life, and they usually integrate a variety of smart functions to improve user experience and hygiene standards. Here are some of the main applications of smart washbasins:

1. **Improvement of public health**: Smart washbasins can reduce the spread of bacteria and improve public health levels through functions such as automatic sensing of water, automatic soap dispensing and drying.

2. **Water and energy saving**: Through intelligent control, smart washbasins can control the flow of water and the amount of soap, thereby saving water resources and detergents, and achieving environmental protection and energy saving.

3. **Commercial and public places**: In public places such as shopping malls, airports, schools, and hospitals, smart washbasins provide convenient and efficient hand washing solutions, enhancing the service functions of these places.

4. **Home use**: Smart washbasins in the home can provide customized use experiences, such as automatically adjusting the height according to the different heights of family members, or activating the hand washing function through voice control.

5. **Improve efficiency**: In the catering service industry, smart washbasins can quickly provide a clean hand washing environment, helping staff save time and improve work efficiency.

6. **Education and cultivation of good habits**: In educational institutions such as schools, smart washbasins can educate children to develop good hand-washing habits and prevent diseases.

7. **Special needs adaptation**: For people with limited mobility or special needs, smart washbasins can provide more humane services through functions such as automatic lifting.

8. **Technology and modernity**: The introduction of smart washbasins enhances the technology and modernity of the space and improves the overall image of the place.

The development trend of smart washbasins shows that they will continue to integrate more high-tech functions, such as remote monitoring and maintenance through IoT technology, or combine artificial intelligence to provide more personalized services. With the continuous advancement of technology, smart washbasins will become more popular and become an indispensable part of modern life.
