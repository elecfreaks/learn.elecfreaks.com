# Case 45：The Grasping Car V2

## Introduction
In the previous case we built a grabbing car which can grasp objects very well, but it is not able to turn. We use [Nezha Inventor's Kit](https://www.elecfreaks.com/nezha-inventor-s-kit-for-micro-bit-without-micro-bit-board.html) to build a car that can both turn and grab objects here, the obvious feature in this case is that only one servo is applied to realize both the functions of lifting, lowering and grasping objects by the mechanical claw.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-inventor-s-kit-case-45-01.png)

## Quick to Start

### Materials Required

[Nezha Inventor's Kit](https://www.elecfreaks.com/nezha-inventor-s-kit-for-micro-bit-without-micro-bit-board.html)

### Assembly

Components List

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-inventor-s-kit-case-45-02.png)

Build it as the assembly steps suggest:

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-inventor-s-kit-step-45-01.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-inventor-s-kit-step-45-02.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-inventor-s-kit-step-45-03.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-inventor-s-kit-step-45-04.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-inventor-s-kit-step-45-05.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-inventor-s-kit-step-45-06.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-inventor-s-kit-step-45-07.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-inventor-s-kit-step-45-08.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-inventor-s-kit-step-45-09.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-inventor-s-kit-step-45-10.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-inventor-s-kit-step-45-11.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-inventor-s-kit-step-45-12.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-inventor-s-kit-step-45-13.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-inventor-s-kit-step-45-14.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-inventor-s-kit-step-45-15.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-inventor-s-kit-step-45-16.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-inventor-s-kit-step-45-17.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-inventor-s-kit-step-45-18.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-inventor-s-kit-step-45-19.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-inventor-s-kit-step-45-20.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-inventor-s-kit-step-45-21.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-inventor-s-kit-step-45-22.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-inventor-s-kit-step-45-23.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-inventor-s-kit-step-45-24.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-inventor-s-kit-step-45-25.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-inventor-s-kit-step-45-26.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-inventor-s-kit-step-45-27.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-inventor-s-kit-step-45-28.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-inventor-s-kit-step-45-29.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-inventor-s-kit-step-45-30.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-inventor-s-kit-step-45-31.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-inventor-s-kit-step-45-32.png)


### Connection Diagram

Connect the [geekservo](https://shop.elecfreaks.com/products/elecfreaks-360-degrees-building-blocks-servo?_pos=1&_psq=servo&_ss=e&_v=1.0) to S1 and the two [motors](https://shop.elecfreaks.com/products/elecfreaks-high-speed-building-blocks-motor?_pos=4&_sid=a2da3fff8&_ss=r) to M1 and M2 on [Nezha Breakout Board](https://shop.elecfreaks.com/products/elecfreaks-nezha-breakout-board?_pos=1&_sid=00432325a&_ss=rl).

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-inventor-s-kit-case-45-03.png)


## MakeCode Programming


### Step 1

Click "Advanced" in the MakeCode drawer to see more choices.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-inventor-s-kit-case-37-04.png)

For programming [Nezha Breakout Board](https://shop.elecfreaks.com/products/elecfreaks-nezha-breakout-board?_pos=1&_sid=00432325a&_ss=rl), we need to add a package. Search with "Nezha" in the dialogue box and click to download it.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-inventor-s-kit-case-37-06.png)

*Notice*: If you met a tip indicating that some codebases would be deleted due to incompatibility, you may continue as the tips say or create a new project in the menu.

### Step 2
### Code as the picture suggests

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/neza-inventor-s-kit-case-45-07.png)

### Reference
Link: [https://makecode.microbit.org/_Mbm1a77fzcrK](https://makecode.microbit.org/_Mbm1a77fzcrK)

You may also download it directly:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_Mbm1a77fzcrK"
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

After powering on the device, the arm will be put on the floor. Flap your hands or make some noise near the micro:bit, the robot will move forward.
While pressing button C on the PlanetX button module, the robot car stops moving and the robot arm starts grasping the goods and lifting them up.
Touching the micro:bit logo to reverse the robot car and press button D to put the goods down.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/45_2.gif)
