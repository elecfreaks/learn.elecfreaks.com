---
sidebar_position: 9
sidebar_label: Case 8:Gesture-Controlled Desk Lamp
---

# Case 8: Gesture-Controlled Desk Lamp

## Case Introduction
Build a gesture-controlled desk lamp, and control the lamp's activation, deactivation, and light switching through gestures.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-08-01.png)

## Teaching Preparation

| Name | Illustration |
| :----------: | :--------------------------: |
| Nezha Pro AI Mechanical Power Kit | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-01.png) |

## Teaching Objectives
1. Complete the assembly of the gesture-controlled desk lamp, master the assembly and connection methods of the lamp bracket, light module, and gesture recognition sensor, and realize the control of the lamp's on/off and light adjustment through gestures.
2. Understand the collaboration principle between the gesture recognition sensor and the light module, and learn to program to associate specific gestures (such as waving, pausing) with light states (on, off, light color).
3. During the process of debugging sensor sensitivity and light brightness parameters, cultivate hands-on ability and programming logic, and learn to solve problems such as gesture recognition delay and uneven light brightness.
4. Stimulate interest in smart home technology, experience the convenience of "contactless control", and establish the cognition that "technology improves life".

## Story Introduction
In the evening, the command center suddenly lost power. A "click" was heard in the darkness, and Aji turned on the emergency light: "Don't panic, try the 'Light Shadow' desk lamp. It can adjust brightness through gestures, but unfortunately, it only flickers now."
The children studied the lamp's infrared sensor in the dim light: "When a hand swipes in front of the sensor, it's like sending a password to it." Aji's eyes glowed green in the dark, "Just like a magician waving a wand to create light."

## Learning Exploration
1. Try designing different gestures corresponding to light functions (e.g., waving up = turning on the light, waving down = turning off the light, waving left and right = adjusting brightness). How to set the "gradient" effect of brightness (e.g., gradually changing from dark to bright) during programming?
2. Does ambient light affect the accuracy of the gesture recognition sensor? In strong or weak light environments, how to adjust sensor parameters (e.g., sensitivity) to improve recognition rate?
3. If the desk lamp has "light flickering" or "no response to gestures", what might be the causes? (e.g., loose wiring of the light module, interference between the sensor and the light module)
4. Compare the user experience of gesture-controlled desk lamps with ordinary button desk lamps and voice-controlled desk lamps. In which scenarios (e.g., when holding things with both hands) is gesture control more advantageous?

## Assembly Steps
<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/files/nezha-pro-ai-mechanical-power-kit-case-08.pdf" type="application/pdf" width="100%" height="600px" />

## Hardware Connection
Connect the gesture recognition sensor and OLED display to the IIC interface of the Nezha Pro Expansion Board, connect the smart motor to the M1 interface of the Nezha Pro Expansion Board, connect the rainbow light ring to the J1 interface of the Nezha Pro Expansion Board, and connect the collision sensor to the J2 interface of the Nezha Pro Expansion Board.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-08-02.png)

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
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-08-03.png)

Program link: [https://makecode.microbit.org/_gHJJCvUY0Jcd](https://makecode.microbit.org/_gHJJCvUY0Jcd)

You can also download the program directly through the following webpage.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_gHJJCvUY0Jcd"
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
After turning on the power, control the light on/off and color through gesture recognition. The collision sensor can simply control the light on/off, and the OLED displays the current light color.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-08.gif)


## Extended Knowledge
1. Application of gesture recognition in smart homes: In addition to desk lamps, gesture recognition is also used in smart TVs (waving to change channels), smart refrigerators (waving to open doors), smart mirrors (gestures to adjust functions), etc. The core is to improve usability through "contactless operation".
2. Development of light control technology: From manual switches to voice control, remote control, and then to gesture and voice control, the upgrading of light control technology reflects the "people-oriented" design concept, making home appliances more in line with human usage habits.
3. Anti-interference design of sensors: To reduce the impact of ambient light and noise on sensors, engineers add filter circuits and algorithm optimizations (such as ignoring messy signals) inside the sensors. In this case, you can try to improve recognition by blocking strong light and keeping gestures stable.
