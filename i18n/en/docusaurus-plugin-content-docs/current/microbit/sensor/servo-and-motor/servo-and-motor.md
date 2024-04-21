# The Opeation of Servos and Motors

## Hardware Connection

Here is an example of the Nezha expansion board.

Connect the two motors to the M1 and M2 interfaces respectively.

Connect the 180° servo to S1, the 360° servo to S2, and the continuous rotation servo to S3 interface.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/servo-and-motor.png)




## Add ExtensionS

Click on "Advanced" in the code drawer of MakeCode to see more code options.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/03444_05.png)

In order to program the Nezha expansion board, we need to add an expansion library. Find "Extensions" at the bottom of the code drawer and click on it. A dialog box will pop up, search for "Nezha", and click to download the library.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/03444_06.png)

*Note: *If you get a prompt saying that some code libraries will be removed for incompatibility reasons, you can either follow the prompt and continue, or create a new project inside the project menu bar.


## Motor Operation Example

<b>Note: When using the motor, you should pay attention to whether the motor has blocked rotation, if the motor is blocked, there may be a risk of burning</b>

### Program as below picture suggests

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/03444_08.png)


### Reference Program

Link: [https://makecode.microbit.org/_8g40hhK9rLvW](https://makecode.microbit.org/_8g40hhK9rLvW)

You can also download the program directly from the following webpage and start running the program once the download is complete.

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

### Results

When button A is pressed, the two motors rotate together. When button B is pressed, the motor connected to the M1 interface stops rotating, and when buttons A and B are pressed simultaneously, the two motors stop rotating at the same time.

## Servo Operation Examples

<b>When using the servo the angle should be adjusted first and verified by adjusting the servo angle according to the case requirements. After the verification is completed, the corresponding structural parts should be installed to prevent the servo from burning up due to the blocked rotation.</b>

<b>Note: When using the servo, you should pay attention to whether the servo has a blocked rotation, if yes, there may be a risk of burnout.</b>

### Write the program as shown in the figure


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/03444_10.png)


### Reference Program
Link: [https://makecode.microbit.org/_hFmaEV1sAay3](https://makecode.microbit.org/_hFmaEV1sAay3)

You can also download the program directly from the following webpage and start running the program once the download is complete.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_hFmaEV1sAay3"
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
The 180° servo rotates to 0° when button A is pressed, and the 360° servo rotates to 360° when button B is pressed. When button A and button B are pressed simultaneously, the continuous rotation of the servo rotates at 100%.

