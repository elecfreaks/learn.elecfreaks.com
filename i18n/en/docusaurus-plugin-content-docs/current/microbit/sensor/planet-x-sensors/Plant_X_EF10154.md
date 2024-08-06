# Red Building Blocks Motor



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/motor-1-1.png)

## Parameter

| Item | Specification |
| :-: | :-: |
| SKU | EF10154 |
| **Operation Environment** |  |
| Working Voltage | 3V～5V |
| Working Temperature | -10℃～50℃ |
| **Mechanical Characteristics** |  |
| Mechanical Limit Angle | 360° |
| Weight | 18 ± 1g |
| Servo Plate Specification | Cross Hole Dual Output (1 LEGO unit deep) |
| Reduction Ratio | 1/140 |
| Gear Misalignment | ≤1° |
| **Control Characteristics** |  |
| Operation Angel | 360° |
| Optional Direction         | Clockwise |
| Operating Angle Range   | 360° |


| Item      | 3V Testing             | 5V Testing            |
|------------------|--------------------|--------------------|
| No-load Speed         | 90±10r/r/min       | 160±10r/r/min      |
| No-load Current         | 65±20mA            | 80±20mA            |
| Stalling Torque         | 0.5±0.1 kg-cm      | 0.7±0.1 kg-cm      |
| Stalling Current         | 0.70±0.2A          | 1.1±0.2A           |
| Speed         | 12500±10%          | 22000±10%          |
| Current         | Less than 30 mA         | Less than 40 mA         |
| No-lode Life         | Over 100h      | Over 50h       |


## Hardware Connection

Take Nezha breakout board for an example.

Connect the two motors to M1 and M2. 

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/motor-1-2.png)




## Add the Extensions

Click "Advanced" in the MakeCode drawer to see more choices. 

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/motor-1-3.png)

For programming Nezha breakout board, we need to add the extensions. Click "Extensions" on the bottom of the drawer and search with “nezha" to download the extension. 

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/motor-1-4.png)

*Tips:* If you met a tip indicating that the codebase will be deleted due to incompatibility, you may continue as the tips suggest or you can create a new project from the menu bar. 


## Samples for Operation

<b>Note: When using the motor, attention should be paid to ensure that the motor is not blocked, if the motor is blocked, there may be a risk of burnout.</b>

### Code as below:

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/motor-1-5.png)


### Reference Link

Link: [https://makecode.microbit.org/_8g40hhK9rLvW](https://makecode.microbit.org/_8g40hhK9rLvW)

You may download it directly below:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_8g40hhK9rLvW"
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

The two motors rotate together when after pressing button A, the motor connected to the M1 stops rotating when button B is pressed, and both motors stop rotating at the same time when buttons A and B are pressed at the same time.

### Note

<b>When using the motor, attention should be paid to ensure that the motor is not blocked, if the motor is blocked, there may be a risk of burnout.</b>
