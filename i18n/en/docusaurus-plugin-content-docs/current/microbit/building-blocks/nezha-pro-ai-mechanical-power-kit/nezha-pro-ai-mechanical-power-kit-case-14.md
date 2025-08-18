---
sidebar_position: 15
sidebar_label: Case 14: Voice-Controlled Light
---

# Case 14: Voice-Controlled Light

## Case Introduction
Build a voice-controlled light and control its on/off status via voice commands.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-14-01.png)

## Teaching Preparation

| Name | Illustration |
| :----------: | :--------------------------: |
| Nezha Pro AI Mechanical Power Kit | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-01.png) |

## Teaching Objectives
1. Complete the assembly of the voice-controlled light, master the assembly and connection methods of the light module, lamp holder structure, and voice recognition sensor, and realize the control of the light's on/off, brightness adjustment, and color switching (if using a color light) through voice commands.
2. Understand the "command parsing" function of the voice recognition sensor, recognize the correlation between voice commands and light status, and learn to program to set light parameters (e.g., brightness value, color code) corresponding to different commands.
3. During the process of debugging light brightness and voice recognition sensitivity, cultivate hands-on ability, programming logic, and problem-solving ability, and learn to solve problems such as light flickering and false response to voice commands.
4. Stimulate interest in smart home technology, experience the convenience of "voice-controlled lighting", and establish the cognition that "technology makes life more comfortable".

## Story Introduction
Upon entering the core equipment room, it was pitch-black inside. "The lighting here is controlled by the 'Xingguang (Starlight) System'," Aji’s voice echoed in the darkness. "Saying 'turn on the light' makes it bright, and saying 'brighten' increases its brightness. Unfortunately, it’s not working now."
The children groped in the dark and said, "Turn on the light!" The tube light above flickered once. "It’s trying its best to recognize the command," Aji encouraged. "Just like how you learn a foreign language, it needs time to adapt to pronunciation."

## Learning Exploration
1. If the light module supports color switching, how to set different colors through voice commands (e.g., "light turn red", "light turn blue")? Which modules (e.g., light color control module) need to be called during programming?
2. Try setting "scene commands" (e.g., "bedtime mode" = dim light, "reading mode" = bright light). How to associate multiple light parameters (brightness, color) with one voice command during programming?
3. Will ambient noise (e.g., TV sound, talking) affect the accuracy of the voice-controlled light? How to reduce false recognition by optimizing commands (e.g., using a unique command like "little light turn on" instead of "turn on")?
4. Compare the voice-controlled light with lights controlled by smart speakers (e.g., lights controlled via "Xiaoai Speaker"). What is the difference in their technical principles? (Hint: Whether it relies on internet connection)

## Assembly Steps
<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/files/nezha-pro-ai-mechanical-power-kit-case-14.pdf" type="application/pdf" width="100%" height="600px" />

## Hardware Connection
Connect the voice recognition sensor to the IIC interface of the Nezha Pro Expansion Board, and connect the rainbow light ring to the J1 interface of the Nezha Pro Expansion Board.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-14-02.png)

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
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-14-03.png)

Program link: [https://makecode.microbit.org/_9fUX8MiLK3z7](https://makecode.microbit.org/_9fUX8MiLK3z7)

You can also download the program directly through the following webpage.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_9fUX8MiLK3z7"
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
After turning on the power, control the lighting device to operate via voice commands.

- Start device: Turn on the light
- Turn off device: Turn off the light


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-14.gif)


## Extended Knowledge
1. Technical classification of voice-controlled lights: This case is a "local voice-controlled light" (commands are preset in the sensor, no internet required), while lights controlled by smart speakers are "internet-connected voice-controlled lights" (commands are parsed via the cloud). The former has a faster response, while the latter supports more complex commands.
2. Linkage of smart home devices: Voice-controlled lights can be linked with other smart home devices—for example, saying "home mode" = light on + air conditioner on + curtains closed. This requires a "smart home gateway" to enable communication between different devices, reflecting the trend of "internet of everything".
3. Health value of lighting: Modern voice-controlled lights can also add an "eye protection mode" (e.g., adjusting color temperature), which can be quickly switched via voice commands to avoid eye damage from long-term exposure to cool light. This embodies the design concept of "technology taking health into account".
