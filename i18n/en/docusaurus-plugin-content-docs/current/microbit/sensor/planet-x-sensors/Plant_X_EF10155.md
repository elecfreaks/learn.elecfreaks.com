# Grey Building Blocks Servo

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/servo-1-1.png)

## Specification

| Item | Specification |
| :-: | :-: |
| SKU | EF10155 |
| **Operation Environment** |  |
| Working Voltage | 4.8V～6V |
| Working Temperature | -10℃～50℃ |
| **Mechanical Characteristics** |  |
| Mechanical Limit Angle | 360° |
| Weight | 20± 1g |
| Servo Plate Specification | Cross Hole Dual Output (1 LEGO unit deep)  |
| Reduction Ratio | 1/300 |
| Gear Misalignment | ≤1° |
| **Control Characteristics** |  |
| Operation Angel | 360°±10°(At 500→2500 μsec) |
| Bilateral Angular Difference     | ≤10°                |
| Return Difference           | ≤2°                 |
| Neutral Position         | 1500μsec          |
| Pulse Signal Deadband     | ≤4μsec              |
| Optional Direction         | Clockwise (1500→500μsec) |
| Pulse Width Range    | 500→2500 μsec   |
| Operating Angle Range   | 360°(At 500→2500 μsec)   |


| Item        | 4.8V Testing             | 6.0V Testing            |
|------------------|---------------------|---------------------|
| No-load Speed         | 0.14±0.01sec/60°    | 0.12±0.01sec/60°    |
| No-load Current         | 70±20mA             | 90±20mA             |
| Stalling Torque         | 1.8±0.2 kg-cm       | 2±0.2kg-cm          |
| Stalling Current         | 0.8±0.1A            | 0.9±0.1A            |
| Standby Current        | 7±1mA               | 7±1 mA              |
| No-load Life         | >50000 times           | >40000 times           |
| Temperature drift (ambient temperature 25°C) | ≤1°                | ≤1°                |




## Hardware Connection

Take Nezha breakout board for an example.

Connect the servo to S1 port.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/servo-1-2.png)


## Add the Extensions

Click "Advanced" in the MakeCode drawer to see more choices.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/03444_05.png)

For programming Nezha breakout board, we need to add the extensions. Click "Extensions" on the bottom of the drawer and search with “nezha" to download the extension.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/03444_06.png)

*Tips:* If you met a tip indicating that the codebase will be deleted due to incompatibility, you may continue as the tips suggest or you can create a new project from the menu bar.




### Code as below:


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/sensor/planet-x-sensors/images/servo-1-5.png)


### Reference Link

Link: [https://makecode.microbit.org/_FfMWV4cfpUTX](https://makecode.microbit.org/_FfMWV4cfpUTX)

You may download it directly below:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_FfMWV4cfpUTX"
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

The 360° servo rotates to 0° when button A is pressed and rotates to 360° when button B is pressed.

### Note

<b>When using a servo, you should adjust the servo angle and adjust it according to the case requirements for verification. After the verification is completed, install the corresponding structural parts to prevent the servo from being blocked and burning. </b>
<br />
<b>Note: When using a servo, you should pay attention to whether the servo is blocked. If the servo is blocked, there may be a risk of burning. </b>
<br />
<b>Note: When using a servo, you should pay attention to whether the servo rotation action needs to be delayed. The servo rotation takes time to execute. If a new servo command appears during the servo execution, it will overwrite the previous servo rotation command, resulting in the servo not rotating in place. </b>
