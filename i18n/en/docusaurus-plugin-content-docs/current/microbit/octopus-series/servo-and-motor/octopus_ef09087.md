# Building Brick Motor

## Specifications

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/ef09087-1.png)

| Item | Specifications |
| :-: | :-: |
| SKU | EF09087 |
| Environmental conditions for use |  |
| Operating voltage | 3V |
| Operating temperature | -10℃～50℃ |
| Mechanical properties |  |
| Mechanical limit angle | 360° |
| weight | 9 ± 1g |
| Reduction ratio | 1/266 |
| Gear virtual position | ≤1° |
| Control characteristics |  |
| Operating Angle | 360° |
| Optional direction | Clockwise |
| Movable angle range | 360° |


| Item   | 3V Test       |
|------------------|------------------|
| no-load speed | 70±5r/min      |
| No-load current | 70±20mA          |
| Stop torque | 0.5±0.1 kg-cm    |
| Stop current | 0.8±0.1A         |
| Standby current | 7±1mA            |
| No-load life | 大于 200 小时    |

## Hardware connection

Here we take the wukong expansion board as an example.

Connect the motor to the M1 interface of the expansion board.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/ef09087-2.png)

## Add a dedicated extension library

Click "Advanced" in the code drawer of MakeCode to view more code options.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/ef09081-3.png)

In order to program the Nezha expansion board, we need to add an extension library. Find "Extension" at the bottom of the code drawer and click it. A dialog box will pop up, search for "Nezha", and then click to download this code library.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/ef09081-4.png)

*Note:* If you get a prompt saying that some code libraries will be deleted due to incompatibility, you can continue according to the prompt, or create a new project in the project menu bar.

### Write the program as shown

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/sensor/servo-and-motor/images/ef09087-5.png)

### Reference Program

Please refer to the program link: [https://makecode.microbit.org/_U3p38hgW2d33](https://makecode.microbit.org/_U3p38hgW2d33)

You can also download the program directly from the following website, and start running the program after downloading.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_U3p38hgW2d33"
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

When button A is pressed, the motor rotates, and when button B is pressed, the motor stops rotating.

### Notes

<b>Note: When using the motor, you should pay attention to whether the motor is stuck. If the motor is stuck, there may be a risk of burning. </b>
