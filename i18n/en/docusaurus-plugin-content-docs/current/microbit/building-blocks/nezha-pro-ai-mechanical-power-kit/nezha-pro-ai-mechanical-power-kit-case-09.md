---
sidebar_position: 10
sidebar_label: Case 9: Gesture-Controlled Bulldozer
---

# Case 9: Gesture-Controlled Bulldozer

## Case Introduction
Build a gesture-controlled bulldozer, and control the bulldozer's forward direction as well as the bucket's lifting and lowering through gestures.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-09-01.png)

## Teaching Preparation

| Name | Illustration |
| :----------: | :--------------------------: |
| Nezha Pro AI Mechanical Power Kit | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-01.png) |

## Teaching Objectives
1. Complete the assembly of the gesture-controlled bulldozer, master the assembly and connection methods of the bulldozer chassis, bulldozer blade (including transmission components), and gesture recognition sensor, and realize the control of the bulldozer's forward/backward movement and blade lifting/lowering through gestures.
2. Understand the collaboration principle between the gesture recognition sensor and motors (controlling the chassis and blade), and learn to program to associate specific gestures with different actions of the bulldozer.
3. During the process of debugging the blade's lifting range and the correspondence between gestures and actions, cultivate hands-on ability, spatial thinking, and problem-solving ability, and learn to optimize the operational smoothness of the bulldozer.
4. Stimulate interest in construction machinery and equipment, perceive the application potential of "intelligent control" in industrial scenarios, and establish the cognition that "small models simulate large-scale projects".

## Story Introduction
Early the next morning, Xuan Yi (the helicopter) reported: A lot of gravel had piled up outside the fence, blocking Tiaotiao's patrol route. "It's time for 'Tie Chan (Iron Shovel)' to step in!" The engineering team robot pointed at the bulldozer stuck in the gravel pile. "It can move forward and backward according to gestures, but now it's as still as a stone."
The children found that the gesture sensor of the blade was covered with dust. "It's just like humans getting sand in their eyes and not being able to see clearly," Aji said with a smile. "After cleaning it, try waving your arm forward—that's the command to make it move forward."

## Learning Exploration
1. Which component (e.g., motor, servo) does the bulldozer blade rely on for lifting and lowering? How to control the movement range of this component through gesture commands (e.g., waving up = lifting the blade, waving down = lowering the blade)?
2. If the bulldozer blade fails to lift or lower normally while the bulldozer is moving forward, what might be the causes? (e.g., jammed blade transmission components, insufficient motor power)
3. Compare the operation methods of real bulldozers and the model—how do operators of real bulldozers control the blade? Which advantage of real operations does the model's gesture control simulate (e.g., remote control)?

## Assembly Steps
<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/files/nezha-pro-ai-mechanical-power-kit-case-09.pdf" type="application/pdf" width="100%" height="600px" />

## Hardware Connection
Connect the gesture recognition sensor to the IIC interface of the Nezha Pro Expansion Board, and connect the two smart motors to the M1 and M2 interfaces of the Nezha Pro Expansion Board respectively.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-09-02.png)

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
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-09-03.png)

Program link: [https://makecode.microbit.org/_8Jkdmi9MdaRV](https://makecode.microbit.org/_8Jkdmi9MdaRV)

You can also download the program directly through the following webpage.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_8Jkdmi9MdaRV"
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
After turning on the power, control the bulldozer's forward direction and the bucket's lifting and lowering through gestures.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-09.gif)


## Extended Knowledge
1. Working principle of real bulldozers: Real bulldozers use a hydraulic system to control the lifting and tilting of the blade, featuring high power and the ability to handle hard soil. This case uses a motor/servo to simulate the "precision control" function of the hydraulic system.
2. Development of intelligent construction machinery: Modern construction machinery (such as excavators and bulldozers) has begun to integrate intelligent control technologies, such as remote control, gesture control, and even AI algorithms to achieve automated operations (e.g., unmanned bulldozers working in mines), reducing the risk of manual operations.
3. Industrial value of gesture control: In industrial scenarios, workers may wear gloves or have greasy hands. Gesture control avoids contact with equipment buttons, reducing the risk of malfunctions, and enables remote operations (e.g., controlling machinery in hazardous environments).
