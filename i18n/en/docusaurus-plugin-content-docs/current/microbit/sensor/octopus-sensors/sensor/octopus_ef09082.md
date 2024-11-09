# 180 Degrees Digital Servo

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/ef09082-1.png)

## Specifications

| Item | Specifications |
| :-: | :-: |
| SKU | EF09082 |
| Environmental conditions for use |  |
| Operating voltage | 4.8～6V |
| Operating temperature | -25°C～70°C |
| Mechanical limit angle | 200°±5°  |
| weight | 10g±5% |
| Control characteristics |  |
| Operating Angle | 180°±3°(500～2500μsec) |
| Optional direction | Clockwise |
| Dead zone width | 5 μsec |

| Operating voltage | 4.8V           | 6.0V           |
|-------------------|----------------|----------------|
| Quiescent Current | 5mA            | 5mA            |
| No-load speed | 0.11sec/60°   | 0.09sec/60°   |
| No-load current | 90mA           | 200mA          |
| Stall torque | 1.3kg.cm      | 1.8kg.cm      |
| Stall current | 500-750mA±10%  | 500-750mA±10%       |

## Hardware Hookup

Here we take the Wukong expansion board as an example.

Connect the servo to the S1 port of the expansion board.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/ef09082-2.png)

## Add a dedicated extension library

Click "Advanced" in the code drawer of MakeCode to view more code options.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/ef09081-3.png)

In order to program the Nezha expansion board, we need to add an extension library. Find "Extension" at the bottom of the code drawer and click it. A dialog box will pop up, search for "Nezha", and then click to download this code library.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/ef09081-4.png)

*Note:* If you get a prompt saying that some code libraries will be deleted due to incompatibility, you can continue according to the prompt, or create a new project in the project menu bar.

### Write the program as shown

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/cases-libraries/images/classroom-science-pack-case-05-11.png)

Please refer to the program link: [https://makecode.microbit.org/_iE0FRyLoA7ak](https://makecode.microbit.org/_iE0FRyLoA7ak)

You can also download the program directly from the following website.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_iE0FRyLoA7ak"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>
### Result

When button A is pressed, the servo rotates to 0°, and when button B is pressed, the servo rotates to 180°.

### Notes on servos

<b>When using a servo, you should first adjust the servo angle, and adjust the servo angle according to the case requirements for verification. After verification, install the corresponding structural parts to prevent the servo from being blocked and burning. </b>
<br />
<b>Note: When using a servo, you should pay attention to whether the servo is blocked. If the servo is blocked, there may be a risk of burning. </b>
<br />
<b>Note: When using a servo, you should pay attention to whether the servo needs to be delayed. The servo rotation takes time to execute. If a new servo command appears during the servo execution, it will overwrite the previous servo rotation command, resulting in the servo not rotating in place. </b>
