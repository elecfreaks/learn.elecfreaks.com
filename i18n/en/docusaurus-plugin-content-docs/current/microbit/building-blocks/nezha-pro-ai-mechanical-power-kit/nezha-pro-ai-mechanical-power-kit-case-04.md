---
sidebar_position: 5
sidebar_label: Case 4: Vibration Robot
---

# Case 4: Vibration Robot

## Case Introduction
Build a vibration robot, and achieve the robot's movement through vibration.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-04-01.png)

## Teaching Preparation

| Name | Illustration |
| :----------: | :--------------------------: |
| Nezha Pro AI Mechanical Power Kit | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-01.png) |

## Teaching Objectives
1. Complete the assembly of the vibration robot, master the assembly method of the motor and eccentric components (e.g., eccentric wheels), understand the principle of vibration generation, and realize the robot's movement function.
2. Recognize the physical phenomenon of "eccentric motion generates vibration", and understand the relationship between motor speed, vibration intensity, and the robot's movement speed.
3. During the process of adjusting the position of eccentric components and motor speed, cultivate observation ability and experimental exploration ability, and learn to analyze the impact of vibration intensity on the movement stability of the robot.
4. Experience the creativity of "unconventional movement methods", stimulate interest in the combination of physical phenomena and mechanical design, and establish a "problem-oriented" design thinking (e.g., using vibration for movement on soft ground).

## Story Introduction
After repairing Wangcai and watching it drive the mechanical sheep back into the pen, everyone followed Aji to the sandy area on the edge of the village. Tiaotiao, the vibration robot in charge of patrolling the border, was lying on the sand trembling slightly, but couldn't move at all. "The sand is too soft; ordinary walking methods won't work here," Aji kicked the sand under his feet. "Tiaotiao's secret weapon is the gear acceleration structure and cam in its body—large gears drive small gears to rotate at high speed, making the cam spin wildly like an eccentric small wheel. The vibration generated allows it to jump forward on the sand surface."
He opened Tiaotiao's shell and pointed at the stuck gear set: "Look, the acceleration gears here are jammed. The cam is rotating slower than a snail, so it can't generate enough vibration. We need to make the gears mesh again and let the small gears rotate at high speed with the large gears." Suddenly, sand dust rolled up in the distance, and Aji's sensor issued a sharp alarm: "The gear beasts are approaching the border! We must get Tiaotiao back to patrolling!"

## Learning Exploration
1. How is the "vibration" of the vibration robot generated? If the eccentric components (e.g., eccentric wheels) on the motor are removed, can the robot still move? Why?
2. When adjusting the weight or installation position of the eccentric components (e.g., close to one end of the motor shaft, far from one end), how will the vibration intensity and movement direction of the robot change?
3. When the motor speed is increased or decreased, what are the differences in the robot's movement speed and stability? Try testing on different surfaces (e.g., desktop, carpet) and observe the differences in movement effects.
4. Compare the movement methods of the vibration robot with quadruped/bipedal robots. In which scenarios (e.g., narrow gaps, soft sand) is vibration-based movement suitable?

## Assembly Steps
<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/files/nezha-pro-ai-mechanical-power-kit-case-04.pdf" type="application/pdf" width="100%" height="600px" />

## Hardware Connection
Connect the smart motor to the M2 interface of the Nezha Pro Expansion Board.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-04-02.png)

## Code Programming
Go to "[makecode.microbit.org](https://makecode.microbit.org)" and click **New Project**.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-07.png)

Enter the project name in the pop-up window and click **Create**.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-11.png)

Click **Extensions** in the code drawer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-09.png)

In the pop-up interface, enter **nezha pro** and click the search icon. After the **nezha pro** software library appears, click it. Load the PlanetX software library in the same way.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-10.png)

## Sample Program
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-04-03.png)

Program link: [https://makecode.microbit.org/_cjJRtzT5sAr2](https://makecode.microbit.org/_cjJRtzT5sAr2)

You can also download the program directly through the following webpage.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_cjJRtzT5sAr2"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

## Program Download
Use a USB cable to connect the PC and micro:bit V2.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual03.gif)

After successful connection, a drive named MICROBIT will be recognized on the computer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual06.png)

Click the icon at the bottom left ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual07.png) and select **Connect Device**.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual11.png)

Click ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual08.png).

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual12.png)

Click ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual09.png).

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual13.png)

In the pop-up window, select **BBC micro:bit CMSIS-DAP**, then select **Connect**. Now, the micro:bit has been successfully connected.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual14.png)

Click **Download Program**

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual10.png)


## Case Demonstration
After turning on the power, press button A to make the vibration robot move forward, and press button B to make the vibration robot stop moving.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-04.gif)

## Extended Knowledge
1. Daily applications of eccentric motion: Mobile phone vibration, electric massagers, and balance control of washing machine spin tubs all use the principle of "vibration generated by the rotation of eccentric components". The only difference is that different designs are used to control the intensity and direction of vibration.
2. Practical value of vibration robots: In the industrial field, micro vibration robots can be used for pipe inspection (moving inside pipes through vibration); in the scientific research field, they can simulate the "jumping" movement of insects to explore movement solutions in complex environments.
3. Vibration and balance: The movement direction of vibration robots is difficult to control accurately due to the randomness of vibration. In reality, engineers will add sensors (e.g., gyroscopes) and control algorithms to enable vibration robots to achieve directional movement.
