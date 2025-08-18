---
sidebar_position: 17
sidebar_label: Case 16:Voice-Controlled Beetle Robot
---

# Case 16: Voice-Controlled Beetle Robot

## Case Introduction
Build a voice-controlled beetle robot and control its functions via voice commands.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-16-01.png)

## Teaching Preparation

| Name | Illustration |
| :----------: | :--------------------------: |
| Nezha Pro AI Mechanical Power Kit | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-01.png) |

## Teaching Objectives
1. Complete the assembly of the voice-controlled beetle robot, master the assembly and connection methods of the line-tracking sensor, ultrasonic sensor, voice recognition sensor, and motors, and realize the collaborative operation of three core functions: "voice control", "obstacle avoidance mode", and "line-tracking mode".
2. Understand the functional division of different sensors (voice recognition sensor receives commands, ultrasonic sensor detects obstacles, line-tracking sensor recognizes paths), and learn to program "voice-controlled mode switching" (e.g., switching between obstacle avoidance/line-tracking via voice commands) and motor action control under each mode (e.g., turning when avoiding obstacles, moving along the path in line-tracking mode).
3. During the process of debugging sensor sensitivity, mode switching logic, and motor action coordination, cultivate hands-on practical ability, multi-module collaborative thinking, and problem-solving ability (e.g., solving issues such as line-tracking deviation, delayed obstacle avoidance, and stuck mode switching).
4. Stimulate interest in "multi-sensor fusion + biomimetic robots", perceive the technical charm of "intelligent control + environmental perception", and establish the cognition that "technology simulates biological perception and movement".

## Story Introduction
With all parts in place, Aji became serious: "The final step is to deliver the repair chip into the server. The space inside is too small—only 'Xiao Qiang (Little Roach)' can get in." A small robot resembling a cockroach crawled out of the toolbox.
"It can crawl through gaps and turn by recognizing voice commands," Aji demonstrated. "Say 'move forward 5 centimeters', and it will move precisely. Be careful—the internal circuits of the server are like a maze." When the children successfully directed Xiao Qiang to insert the chip into the interface, the lights of the entire village suddenly turned on—all robots had returned to normal.
The village chief and villagers cheered and swarmed in. Aji smiled and said to the children: "Look, you not only repaired the robots but also learned to create miracles with technology. This is the real magic of science and innovation!"

## Learning Exploration
1. What core commands does the voice recognition sensor need to receive? (e.g., "beetle forward", "switch to obstacle avoidance mode", "switch to line-tracking mode") During programming, how to ensure that voice commands can accurately trigger the switch between "voice control" and "automatic modes (obstacle avoidance/line-tracking)"?
2. How does the ultrasonic sensor work in obstacle avoidance mode? (e.g., when the detected distance to an obstacle ahead is less than a certain value, the motor drives the beetle to turn) If the ultrasonic sensor detects inaccurately, what problems may occur to the beetle (e.g., colliding with obstacles, false triggering of turns)?
3. How does the line-tracking sensor recognize paths (e.g., recognizing black guide lines) in line-tracking mode? How does adjusting the sensor's height or angle affect the line-tracking effect? (e.g., too high a height leads to failure in recognizing the path, inclined angle leads to deviation from the path)
4. Try adding voice commands in "obstacle avoidance mode" (e.g., "pause obstacle avoidance, move forward 5 centimeters"). During programming, how to handle the priority between "automatic mode" and "manual voice commands"? If there is a conflict (e.g., obstacle avoidance requires turning while the voice command requires moving forward), how to optimize the logic?
5. Compare the motor actions of the beetle in "manual voice control", "obstacle avoidance mode", and "line-tracking mode". What are the differences in motor speed and steering adjustments? (e.g., one side of the motor decelerates when turning in obstacle avoidance mode, and the speed of both side motors is fine-tuned to stay on the path in line-tracking mode)

## Assembly Steps
<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/files/nezha-pro-ai-mechanical-power-kit-case-16.pdf" type="application/pdf" width="100%" height="600px" />

## Hardware Connection
Connect the voice recognition sensor to the IIC interface of the Nezha Pro Expansion Board, the line-tracking sensor to the J1 interface of the Nezha Pro Expansion Board, the ultrasonic sensor to the J2 interface of the Nezha Pro Expansion Board, and the two smart motors to the M2 and M3 interfaces of the Nezha Pro Expansion Board respectively.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-16-02.png)

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
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-15-03.png)

Program link: [https://makecode.microbit.org/_foyHy3f3w4Mh](https://makecode.microbit.org/_foyHy3f3w4Mh)

You can also download the program directly through the following webpage.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_foyHy3f3w4Mh"
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
After turning on the power, control the beetle robot to operate via voice commands.

- Avoid_object: Obstacle avoidance
- Line_tacking: Line-tracking
- Full speed ahead: Move forward
- Reversing: Move backward
- Turn left: Turn left
- Turn right: Turn right
- Turn off device: Stop the robot


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-16-1.gif)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-16-2.gif)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/building-blocks/nezha-pro-ai-mechanical-power-kit/images/nezha-pro-ai-mechanical-power-kit-case-16-3.gif)

## Extended Knowledge
1. "Perception-Action" Logic of Biomimetic Robots: Real beetles use antennae (to perceive obstacles) and compound eyes (to recognize the environment) to determine direction. In this case, the ultrasonic sensor (simulating antennae for obstacle avoidance), line-tracking sensor (simulating compound eyes for path recognition), and voice recognition sensor (simulating "external command reception") are exactly the technological simulation of the beetle's "perception-action" system, reflecting the biomimetic design concept of "nature inspiring technology".
2. Multi-Sensor Fusion Technology: In this case, the three sensors do not work independently—the voice recognition sensor is responsible for "command input and mode switching", the ultrasonic/line-tracking sensors for "environmental perception", and the motors for "action execution". This "multi-sensor collaboration" technology is called "sensor fusion". It is widely used in autonomous vehicles (camera + radar + ultrasonic sensor) and industrial robots (vision + force sensor), with the core goal of enabling devices to understand the environment more comprehensively and accurately and respond accordingly.
3. Practical Application of Mode Switching: Many devices in daily life have "manual/automatic modes", such as robotic vacuum cleaners (manual remote-controlled cleaning / automatic obstacle avoidance cleaning) and washing machines (manual program selection / automatic adjustment of parameters based on perceived laundry weight). The mode switching of the beetle robot in this case is a miniature embodiment of this "user-friendly design"—it can be manually controlled via voice for "play" and also work independently via automatic modes, balancing fun and functionality.
4. Scenario Potential of Miniature Intelligent Robots: Miniature robots similar to the voice-controlled beetle can be used for operations in narrow environments in the future (e.g., entering pipes for inspection via line-tracking mode, avoiding protrusions inside pipes via obstacle avoidance mode, and switching working states via voice commands) and agricultural monitoring (tracking along crop rows, automatically avoiding obstacles when encountered, and retrieving monitoring data via voice commands). Their small size + multi-mode capability can address the needs of scenarios where large equipment cannot enter.
