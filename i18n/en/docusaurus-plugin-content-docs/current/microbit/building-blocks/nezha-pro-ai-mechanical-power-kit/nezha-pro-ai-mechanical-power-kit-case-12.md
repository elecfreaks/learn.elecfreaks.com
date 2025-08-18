---
sidebar_position: 13
sidebar_label: Case 12:Voice-Controlled Fan
---

# Case 12: Voice-Controlled Fan

## Case Introduction
Build a voice-controlled fan, and control the fan's speed, oscillation, on/off, and other functions via voice commands.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-12-01.png)

## Teaching Preparation

| Name | Illustration |
| :----------: | :--------------------------: |
| Nezha Pro AI Mechanical Power Kit | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-01.png) |

## Teaching Objectives
1. Complete the assembly of the voice-controlled fan, master the assembly and connection methods of the fan module, oscillation mechanism, and voice recognition sensor, and realize the control of the fan's on/off, speed adjustment, and oscillation through voice commands.
2. Understand the "command reception and parsing" function of the voice recognition sensor, recognize the correlation between voice commands and fan actions, and learn to program to set fan states corresponding to different voice commands.
3. During the process of debugging voice recognition sensitivity and fan speed parameters, cultivate hands-on ability, programming logic, and problem-solving ability, and learn to optimize the accuracy of voice recognition (e.g., reducing false recognition).
4. Stimulate interest in smart home appliance technology, experience the convenience of "voice interaction", and establish the cognition that "technology makes life smarter".

## Story Introduction
It was noon when everyone returned with the energy crystals. The sun scorched the metal ground, and sweat dripped from everyone's foreheads. "Hurry up and start the 'Fengyu (Wind Talk) Fan'!" Aji, the guide robot, pointed to the cooling device by the road. "It works by recognizing voice commands—say 'turn on the fan' and it spins; say 'increase fan speed' and it speeds up. But now it doesn't respond no matter how we shout."
The children shouted "Turn on!" at the fan's microphone, but the blades didn't move at all. After checking, Aji found that the wiring of the voice module was loose: "It's like having cotton stuffed in one's ears and being unable to hear clearly. We need to make it 'hear' the commands again. Fix it quickly, otherwise we'll get heatstroke before reaching the equipment room!"

## Learning Exploration
1. In what environment (e.g., quiet, noiseless) can the voice recognition sensor accurately recognize commands? In noisy environments, how to improve recognition rate by optimizing commands (e.g., shortening commands, increasing volume)?
2. Try setting multiple sets of voice commands (e.g., "turn on the fan", "fan speed 1", "fan oscillate"). How to ensure the sensor "distinguishes" between different commands during programming (e.g., preventing confusion between "turn on" and "oscillate")?
3. If the fan can only recognize some commands (e.g., recognizing "turn on" but not "turn off"), what might be the causes? (e.g., command programming errors, loose sensor wiring)
4. Compare the user experience of the voice-controlled fan with ordinary button fans and remote-controlled fans. In which scenarios (e.g., when hands are busy) is voice control more advantageous?

## Assembly Steps
<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/files/nezha-pro-ai-mechanical-power-kit-case-12.pdf" type="application/pdf" width="100%" height="600px" />

## Hardware Connection
Connect the voice recognition sensor to the IIC interface of the Nezha Pro Expansion Board, the smart motor to the M2 interface of the Nezha Pro Expansion Board, and the fan module to the J1 interface of the Nezha Pro Expansion Board.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-12-02.png)

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
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-12-03.png)

Program link: [https://makecode.microbit.org/_Uhz0mRDaV1Cy](https://makecode.microbit.org/_Uhz0mRDaV1Cy)

You can also download the program directly through the following webpage.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_Uhz0mRDaV1Cy"
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
After turning on the power, control the fan to operate via voice commands.

- Start device: Turn on the fan (default speed 1)
- Turn off device: Turn off the fan
- Raise a level: Increase speed by 1 level
- Lower a level: Decrease speed by 1 level
- Keep going: Start oscillation
- Pause: Stop oscillation

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-12.gif)


## Extended Knowledge
1. Basic process of voice recognition: The voice recognition sensor first converts human voice into electrical signals, then extracts voice features via built-in algorithms, compares them with a preset command library, and finally outputs control signals (e.g., triggering fan actions). This case simplifies this process and focuses on the "correlation between commands and actions".
2. Voice interaction of smart speakers: The technology of the voice-controlled fan is similar to that of smart speakers (e.g., Xiaoai Speaker, Tmall Genie). The difference is that smart speakers can process more complex commands (e.g., "play music", "check the weather") and realize more functions via internet connection, demonstrating the expandability of voice recognition technology.
3. Noise-resistant technology for voice recognition: To solve recognition issues in noisy environments, engineers adopt technologies such as "noise reduction algorithms" (filtering environmental noise) and "microphone arrays" (locating voice sources via multiple microphones). Future voice recognition devices will be more adaptable to complex environments.
