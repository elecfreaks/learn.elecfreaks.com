# 360 Degrees Digital Servo

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/ef09081-1.png)

## Specifications

| Item | Specification |
| :-: | :-: |
| SKU | EF09081 |
| Environmental conditions for use |  |
| Operating voltage | 3.3～5V |
| Operating temperature | -25°C～70°C |
| **Mechanical properties** |  |
| Mechanical limit angle | 360° |
| weight | 10g±5% |


| Item        | 3.3V Test       | 5.0V Test       |
|-------------------|--------------------|--------------------|
| Quiescent Current | 5mA  | 5mA    |
| No-load speed | 76RPM          | 120RPM           |
| No-load current | 90mA      | 90mA      |
| Stall torque | 1.3kg.cm         | 1.6kg.cm         |
| Stall current | 400mA±10%              | 750mA±10%          |

## Hardware connection

Here we take the Wukong expansion board as an example.

Connect the servo to the S1 port of the expansion board.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/ef09081-2.png)

## Add a dedicated extension library

Click "Advanced" in the code drawer of MakeCode to view more code options.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/ef09081-3.png)

In order to program the Nezha expansion board, we need to add an extension library. Find "Extension" at the bottom of the code drawer and click it. A dialog box will pop up, search for "Nezha", and then click to download this code library.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/ef09081-4.png)

*Note:* If you get a prompt saying that some code libraries will be deleted due to incompatibility, you can continue according to the prompt, or create a new project in the project menu bar.

### Write the program as shown

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/sensor/servo-and-motor/images/ef09081-5.png)

### Reference Program

Please refer to the program link: [https://makecode.microbit.org/_ewhiK2hvfRX4](https://makecode.microbit.org/_ewhiK2hvfRX4)

You can also download the program directly from the following website.

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
<b>Note: When using a servo, you should pay attention to whether the servo rotation action needs to be delayed. The servo rotation takes time to execute. If a new servo command appears during the servo execution command, it will overwrite the previous servo rotation command, resulting in the servo not rotating in place.</b>
