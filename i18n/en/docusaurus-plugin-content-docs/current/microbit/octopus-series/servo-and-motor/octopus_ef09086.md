# ELECFREAKS 9g 360 Degrees Building Blocks Servo

## Specifications

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/ef09086-1.png)

| Term | Specification |
| :-: | :-: |
| SKU | EF09086 |
| Environmental conditions for use |  |
| Operating voltage | 4.8～6V |
| Operating temperature | -10℃～50℃ |
| **Mechanical properties** |  |
| Mechanical limit angle | 360° |
| weight | 9 ± 1g |
| Reduction ratio | 1/266 |
| Gear virtual position | ≤1° |
| **Control features** |  |
| Operating Angle | 360° |
| Optional direction | Clockwise |
| Movable angle range | ≈360° |


| Item        | 4.8V Test  | 6.0V Test       |
|-------------------|--------------------|--------------------|
| No-load speed | 70±5r/min        | 90±5r/min        |
| No-load current | 70±20mA            | 90±20mA            |
| Stop torque | 0.5±0.2 kg-cm      | 0.7±0.2kg-cm      |
| Stop current | 0.8±0.1A           | 0.9±0.1A           |
| Standby current | 7±1mA              | 7±1 mA             |
| No-load life | >50000 次          | >40000 次          |
| Temperature drift (ambient temperature 25°C) | ≤1°               | ≤1°               |


## Hardware Hookup

Here we take the wukong expansion board as an example.

Connect the servo to the S1 interface of the expansion board.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/ef09086-2.png)

## Add a dedicated extension library

Click "Advanced" in MakeCode's code drawer to see more code options.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/ef09081-3.png)

In order to program the Nezha expansion board, we need to add an extension library. Find "Extension" at the bottom of the code drawer and click it. A dialog box will pop up, search for "Nezha", and then click to download this code library.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/ef09081-4.png)

*Note:* If you get a prompt saying that some code libraries will be deleted due to incompatibility, you can continue according to the prompt, or create a new project in the project menu bar.

### Write the program as shown

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/ef09081-5.png)


### Reference Program

Please refer to the program link：[https://makecode.microbit.org/_ewhiK2hvfRX4](https://makecode.microbit.org/_ewhiK2hvfRX4)

You can also download the program directly from the following web page.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_ewhiK2hvfRX4"
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

When button A is pressed, the servo rotates at full speed, and when button B is pressed, the servo stops rotating.

### Notes on servo

<b>When using a servo, the servo angle should be adjusted first, and the servo angle should be adjusted according to the case requirements for verification. After the verification is completed, the corresponding structural parts should be installed to prevent the servo from being blocked and burning. </b>
<br />
<b>Note: When using a servo, you should pay attention to whether the servo is blocked. If the servo is blocked, there may be a risk of burning. </b>
<br />
<b>Note: When using a servo, you should pay attention to whether the servo rotation action needs to be delayed. The servo rotation takes time to execute. If a new servo command appears during the servo execution command, it will overwrite the previous servo rotation command, resulting in the servo not rotating in place. </b>
