---
sidebar_position: 19
sidebar_label: Case 18：Unicycle Robot
---

# Case 18: Unicycle Robot

## Case Introduction

Use Nezha Pro Sport Kit to make a unicycle robot. Control the motor to drive the robot forward on the unicycle, simulating the unicycle riding motion. In this process, you can gain a deeper understanding of the relevant knowledge and mechanical principles of unicycle motion.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-18-01.png)

## Teaching Preparation

|     Name     |            Graphic            |
| :----------: | :--------------------------: |
|   Nezha Pro Sport Kit   |   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-01.png)  |

## Teaching Objectives

Understand the basic characteristics and skills of unicycle sports, and master the principle of unicycle robot structure-assisted stability.

Through construction and debugging, cultivate mechanical structure design and hands-on practice skills.

Inspire interest in unicycle sports and expand the understanding of sports.

## Course Introduction

Students, unicycle riding is a very challenging sport that requires superb balance skills! The unicycle robot we are going to make today does not need to rely on itself to maintain balance like a rider, but cleverly uses a special structure to "stand" steadily. By controlling the motor, it simulates unicycle riding and moves forward like a real unicycle! Want to know what this magical structure looks like? Come and start the production journey together!

## Learning and Exploration

Explore how to achieve stable movement of unicycle robots through mechanical structure-assisted support, study the relationship between motor drive and the actual movement state of the unicycle, and understand the physical principles behind unicycle movement.

## Building Steps

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/files/%E7%8B%AC%E8%BD%AE%E8%BD%A6%E8%BF%90%E5%8A%A8.pdf" type="application/pdf" width="100%" height="600px" />

## Hardware connection

Connect the smart servo to the M1 port of the Nezha Pro expansion board.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-17-02.png)

## Code Programming

Go to "[makecode.microbit.org](https://makecode.microbit.org)" and click **New Project**.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-07.png)

Enter a project name in the pop-up window and click **Create**.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-11.png)

Click **Extension** in the code drawer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-09.png)

In the pop-up interface, enter **nezha pro** and click the search icon. Click it when the **nezha pro** software library is displayed. Load the PlanetX software library in the same way.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-10.png)



### Sample Program

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-18-04.png)

Program link: [https://makecode.microbit.org/_PdAAyTHXfHsH](https://makecode.microbit.org/_PdAAyTHXfHsH)

You can also download the program directly from the following website.

<div
style={{
position: 'relative',
paddingBottom: '60%',
overflow: 'hidden',
}}
>
<iframe
src="https://makecode.microbit.org/_PdAAyTHXfHsH"
frameborder="0"
sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
style={{
position: 'absolute',
width: '100%',
height: '100%',
}}
/>
</div>

## Download Program

Connect PC and micro:bit V2 with USB cable.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual03.gif)

After the connection is successful, a drive named MICROBIT will be recognized on the computer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual06.png)

Click ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual07.png) in the lower left corner and select **Connect Device**.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual11.png)

Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual08.png).

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual12.png)

Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual09.png).

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual13.png)

In the pop-up window, select **BBC micro:bit CMSIS-DAP**, and then select **Connect**. At this point, our micro:bit has been successfully connected.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual14.png)

Click **Download the program**

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual10.png)

## Case demonstration

Press button A to start the unicycle robot, and press button B to stop the unicycle robot.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-sports-kit/images/nezha-pro-sports-kit-case-18.gif)

## Summary and sharing

## Extended knowledge

**Origin and development of unicycle sports**

The unicycle originated in the Han Dynasty in China. It was originally used as a means of transportation and later gradually evolved into a folk juggling and competitive event. In ancient times, unicycles were not only used for daily labor, but also for displaying superb skills in temple fairs, celebrations and other activities. Over time, unicycle sports have spread to all parts of the world and have developed into an extreme sport and competitive event full of challenges and fun in modern times. Today, unicycle sports cover a variety of types such as flatland skills, off-road, and racing, attracting many enthusiasts to participate.

**Skills and training for unicycle sports**

In actual unicycle sports, riders need to master basic skills such as getting on and off, riding in a straight line, turning, and braking. When getting on the bike, you usually need to step on one foot on the pedal first, and then quickly step on the other pedal after the other foot pushes the ground to gain initial velocity; when turning, the direction change is achieved by transferring the center of gravity of the body and controlling the force of the foot on the pedal. During the training, riders should start with basic balance exercises and gradually improve riding speed and skill difficulty. In addition, training of core strength, leg strength and body coordination is essential to improving unicycle riding skills.

**Unicycle sports competitions**

***Flat skills competition:***Competitors complete various difficult movements on a flat field, such as single-leg riding, jumping, spinning, etc. The referee scores according to the difficulty, completion and fluency of the movements.

***Cross-country race:***Riding on complex terrains such as mountains and jungles tests the endurance, control ability and adaptability of the players to different road conditions.

***Speed race:***Competing on riding speed on a specified track. Players need to have strong explosive power and lasting endurance, and strive for the best results through reasonable riding rhythm and skills.
