---
sidebar_position: 8
sidebar_label: Smart medicine box
---

# Smart medicine box

## Introduction

In this project, we will learn how to make a smart medicine box. You can control the medicine box to dispense medicine by pressing the collision sensor, display the number of times to take medicine through the OLED display, and use the light sensor to detect the ambient light intensity around the medicine box. When the ambient light intensity exceeds the threshold, an alarm will automatically sound to remind the user not to store medicine in a strong light environment.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-life-kit/images/case-08-01.png)

## Teaching objectives

Make a smart medicine box case

Learn how to use hardware and tools to solve problems in life

## Teaching preparation

Before starting teaching, please make sure you have prepared the following necessary materials:

| **Picture** | **Name** | **Number** | **Note** |
| --- | --- | --- | --- |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-life-kit/images/microbit-smart-life-kit.png) | Smart Life Kit | 1 |  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/USB-data-cable.png) | USB cable | 1 |   |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit.png) | micro:bit | 1 | Prepare Yourself |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/pc.png) | PC | 1 | Prepare Yourself |

These materials will provide you with a complete experience, ensuring that you can smoothly carry out subsequent operations and learning. If you have prepared the above content, we can proceed to the next step.

## Course Introduction

In life, there are often elderly people in the family who forget to take medicine due to memory loss, which makes the family worried. Therefore, we need something in our lives to solve this problem and express our concern for our loved ones. So can we make one ourselves?

## Project Production

### Hardware Connection

Connect the light sensor to the P1 interface of the wukong expansion board, the collision sensor to the P2 interface of the wukong expansion board, and the OLED display to the IIC interface of the wukong expansion board.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-life-kit/images/case-08-02.png)

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

Sample program: [https://makecode.microbit.org/_9mhFH7d5pDJi](https://makecode.microbit.org/_9mhFH7d5pDJi)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-life-kit/images/case-08-03.png)

You can also download the program directly from the following website.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_9mhFH7d5pDJi"
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

In the pop-up window, select `BBC micro:bit CMSIS-DAP`, and then select Connect. At this point, our micro:bit has been successfully connected.![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-07.png)

Click Downloader.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-08.png)

### Results

The smart medicine box can be controlled to dispense medicine by pressing the collision sensor, the number of times the medicine is taken is displayed on the OLED display, and the light sensor is used to detect the ambient light intensity around the medicine box. When the ambient light intensity exceeds the threshold, an alarm is automatically issued to remind the user not to store the medicine in a strong light environment.

## Extended knowledge

**Optimization of smart medicine box**

The smart medicine box is a device that helps users better manage drug intake through technical means. It has multiple functions and advantages:

1. **Remind to take medicine**: The smart medicine box can remind users to take medicine on time through sound, light, mobile phone APP push and other methods. This is a very practical function for elderly people with memory loss or busy modern people.

2. **Record medication status**: Some smart medicine boxes can record the user's medication status, including medication time, frequency and dosage, which helps doctors understand the patient's medication compliance and adjust the treatment plan.

3. **Improve medication compliance**: The smart medicine box can help improve patients' medication compliance through regular reminders and records, and reduce poor treatment effects or recurrence of illness caused by forgetting to take medicine.

4. **Remote monitoring**: Smart medicine boxes can usually be connected to the mobile phone APP of family members or caregivers to achieve remote monitoring, so that family members can keep abreast of the patient's medication situation.

5. **Personalized settings**: Users can personalize smart medicine boxes through mobile phone APP according to their own medication needs, including setting different reminder times and medication plans.

6. **Data sharing**: The data of smart medicine boxes can be shared through cloud services, which is convenient for doctors and family members to access and helps to achieve better health management.

7. **Entertainment function**: Some smart medicine boxes also integrate entertainment functions, such as playing music, voice greetings, etc., which increases the interactivity with users and improves the user experience.

8. **Age-friendly design**: Considering the usage habits of the elderly, smart medicine boxes usually have a simple and intuitive operation interface, which is convenient for the elderly to use.

9. **Safety**: Smart medicine boxes can prevent children from accidentally taking medicines through the locking function, which improves the safety of family medication.

10. **Saving medical costs**: By improving medication compliance and treatment effects, smart medicine boxes help reduce repeated medical visits and additional medical costs caused by improper treatment.

These advantages of smart medicine boxes make them a powerful tool for modern health management, especially for patients who need to take medicine for a long time, smart medicine boxes provide a convenient and effective solution. With the continuous advancement of technology, the functions of smart medicine boxes will become more diversified and intelligent in the future.
