---
sidebar_position: 3
sidebar_label: 3:Robot PU Extension and Barebone Program
---

# 3:Robot PU Extension and Barebone Program

## Here is a step-by-step tutorial to get you up and running with the Robot PU extension for BBC micro:bit using Microsoft MakeCode.

This guide covers how to install the specific extension and explains a “barebones” program that turns your micro:bit into a wireless receiver for the robot.

[https://makecode.microbit.org/extensions](https://makecode.microbit.org/extensions)
[https://makecode.microbit.org/reference/radio](https://makecode.microbit.org/reference/radio)

### 1. What is a MakeCode Extension?
A **MakeCode Extension** is a custom library or package of code that adds new blocks to the MakeCode editor. By default, MakeCode only shows standard blocks (like Basic, Input, and Music).

When working with specific hardware—like the Robot PU—you need to load its specific extension. This tells the micro:bit exactly how to talk to the robot’s motors and sensors, giving you access to specialized blocks like or `.robotPu.runStringCommandrobotPu.setWalkSpeedRange`

### 2. How to Add the Robot PU Extension
To use the Robot PU, you must import the code from the repository`.robotgyms`

1. **Open MakeCode:** Go to [makecode.microbit.org](makecode.microbit.org) and create a New Project.
2. **Open Extensions:** Click the **Settings (Gear icon)** in the top right corner, then select Extensions from the menu.
3. **Search for the Repository:** In the search bar at the top, paste the following URL:robotgyms/pxt-robotpu
4. **Install:** You should see a search result card appear (often labeled with the robot name or repository name). **Click that card** to add it to your project.
**Note: After clicking, the editor may reload briefly. You will now see a new category (usually named Robot PU or similar) in the toolbox on the left.**

### 3. The Barebones Program
This program acts as a “bridge.” It configures the robot and then listens for wireless radio signals to control it.

JavaScript / TypeScript View:

(You can copy and paste this directly into the JavaScript tab of MakeCode)

TypeScript

``` TypeScript
// 1. Handle incoming text commands
radio.onReceivedString(function (receivedString) {
    robotPu.runStringCommand(receivedString)
})

// 2. Handle incoming value pairs (e.g., "speed"=100)
radio.onReceivedValue(function (name, value) {
    robotPu.runKeyValueCommand(name, value)
})

// 3. Setup commands
robotPu.setChannel(166)
robotPu.setWalkSpeedRange(-3, 4)
```
JavaScript Version:


<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_RV81mdarhWo8"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>
Associated block program:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_39qDw556zCyk"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

### 4. How It Works
Here is the breakdown of what each section of the code does.

**A. The Setup**

These lines run immediately when the micro:bit turns on.

- robotPu.setChannel(166)This configures the internal communication channel for the Robot PU hardware. It ensures the micro:bit is sending signals on the specific frequency or ID that the robot’s main controller expects (in this case, channel 166).
- robotPu.setWalkSpeedRange(-3, 4)This calibrates the movement logic. It defines the minimum and maximum speed “steps” or range available to the robot.
- The lower limit (likely max reverse speed or stride).
- The upper limit (likely max forward speed or stride).

**B. The Radio Handlers**

These blocks sit and wait for wireless data from another micro:bit (the remote controller).

- radio.onReceivedString(function (receivedString) { … })When the micro:bit radio receives a simple text string (like “forward”, “stop”, or “dance”), this triggers.

    - `robotPu.runStringCommand(receivedString)`: This takes that text and passes it directly to the robot. The robot’s firmware parses the string and executes the corresponding action.

- radio.onReceivedValue(function (name, value) { … })When the radio receives a key-value pair (e.g., name: “turn”, value: 90), this triggers.

    - `robotPu.runKeyValueCommand(name, value)`: This passes the specific parameter and value to the robot. This is useful for precise controls, such as setting a servo angle to a specific degree or setting a motor to a specific speed percentage.
