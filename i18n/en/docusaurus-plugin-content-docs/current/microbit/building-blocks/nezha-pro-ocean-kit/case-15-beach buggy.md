---
sidebar_position: 15
sidebar_label: Case15:Beach Buggy
---

# Beach Buggy

## Story Introduction

Xiao En was tired after a long day and went to bed early. The next morning, as the sun just climbed over the beach, Jack bounced over and knocked on the door, his eyes shining, shouting: "Come and see! The beach is covered with white shells brought by the waves, and there are many golden sand dunes. Let's build a beach buggy that can avoid obstacles by itself and have a race!" Call your good friends and join this super cool beach buggy adventure!

---

## Teaching Preparation

| Name | Illustration |
| :----------: | :--------------------------: |
| Nezha Pro Ocean Kit | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/nezha-pro-ocean-kit-products-introduction-002.png.png) |

---
## Teaching Objectives

1. Get to know beach buggies and understand their characteristics.
2. Explore the movement ways of the car.
3. Recognize the random number building block and master its usage.

---
## Learning and Exploration

1. Do you know how excavators and cars steer?
2. Try to summarize and compare the differences between different steering methods.

---
## Construction Steps

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case15/nezha-pro-ocean-kit-15-1.png.pdf" type="application/pdf" width="100%" height="600px" />

---
## Hardware Connection

The ultrasonic sensor is connected to the "J1" port of the Nezha expansion board;
Motor 1 is connected to the "M1" port of the Nezha expansion board;
Motor 2 is connected to the "M4" port of the Nezha expansion board.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case15/nezha-pro-ocean-kit-15-3.png.png)

---
## Code Programming

Go to "[makecode.microbit.org](https://makecode.microbit.org)" and click **New Project**.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-07.png)

Enter the project name in the pop-up window and click **Create**.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-11.png)

Click **Extensions** in the code drawer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-09.png)

In the pop-up interface, enter **nezha pro** and click the search icon. After the **nezha pro** software library is displayed, click it. Load the PlanetX software library in the same way.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-10.png)

---
### Sample Program

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case15/nezha-pro-ocean-kit-15-2.png(1).png)

Program link
[https://makecode.microbit.org/_HYmi2gKFeh6j](https://makecode.microbit.org/_HYmi2gKFeh6j)

You can also download the program directly through the following webpage.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_HYmi2gKFeh6j"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

---
### Download Program

Use a USB cable to connect the PC and micro:bit V2.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual03.gif)

After successful connection, a drive named MICROBIT will be recognized on the computer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual06.png)

Click ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual07.png) in the lower left corner and select **Connect Device**.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual11.png)

Click ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual08.png).

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual12.png)

Click ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual09.png).

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual13.png)

In the pop-up window, select **BBC micro:bit CMSIS-DAP**, then select **Connect**. So far, our micro:bit has been connected successfully.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual14.png)

Click **Download Program**

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual10.png)

---
## Case Demonstration

When the ultrasonic sensor detects a distance < 20CM, the beach buggy randomly retreats to the left or right; if the ultrasonic sensor detects a distance > 20CM, the beach buggy moves forward.


**Pictures**

---
## Extended Knowledge

### Car VS Excavator Steering

The steering systems of cars and excavators have significant differences in principles, structures, and functions. The core reason is that their usage scenarios (road driving vs. engineering operations) and driving methods (wheeled vs. tracked / wheeled) are different, leading to completely different steering design goals. The following is a comparison from key dimensions:

#### 1. Steering Principle: "Deflecting Wheels" vs "Speed Difference Drive"

**Car**: It belongs to wheeled deflection steering, which realizes steering by changing the deflection angle of the wheels.
When the steering wheel is turned, the steering rod is driven by the steering gear (such as rack and pinion type, recirculating ball type), causing the front wheels (a few models have rear wheels or four wheels) to deflect at a certain angle, and the direction is changed by the friction between the wheels and the ground. Essentially, it is "guiding the vehicle body to steer through changes in wheel direction".

**Excavator**: The mainstream is crawler-type differential steering (some small excavators are wheeled, but the principle is still different from that of cars), which realizes steering through the speed difference between the two crawlers.
Excavators have no "steering wheels"; instead, the hydraulic system controls the drive motors of the crawlers on both sides:
When the crawlers on both sides rotate at the same speed and in the same direction, the machine body travels in a straight line;
When one crawler decelerates / stops and the other rotates normally, the machine body turns to the decelerated side (with a larger turning radius);
When the crawlers on both sides rotate in opposite directions, the machine body can turn 360° in place ("zero turning radius", suitable for operations in narrow spaces).

#### 2. Structure and Power Source: "Power Assistance" vs "Hydraulic Drive"
**Car:**
Structure: Steering wheel → steering column → steering gear (core component, converting rotational motion into linear push-pull) → steering rod → wheel steering knuckle.
Power: It relies on the driver's physical strength + power assistance system (hydraulic power steering HPS, electric power steering EPS). The function of the power assistance system is to "save effort", allowing the driver to easily turn the steering wheel at low speeds (such as parking) and increasing steering resistance at high speeds to ensure stability.

**Excavator:**
Structure: Joystick (or steering wheel, for small wheeled ones) → hydraulic valve group → hydraulic pipeline → drive motors of crawlers on both sides (or wheeled drive axle).
Power: It completely relies on the hydraulic system. The driver controls the flow and direction of hydraulic oil through the joystick to directly drive the speed difference of the crawlers / wheels. The hydraulic system provides strong torque, enabling easy steering even when the machine body is under heavy load (such as when the bucket is full of materials) without additional effort from the driver.

#### 3. Steering Characteristics: "Precise and Smooth" vs "Flexible and Heavy-Duty"

**Car:**
The steering ratio (the ratio of the steering wheel rotation angle to the wheel deflection angle) is small (usually 12:1~20:1), that is, a small rotation of the steering wheel can cause the wheels to deflect significantly, which is suitable for "precise fine-tuning" in road driving (such as lane changing, cornering).
The turning radius is large (depending on the body length and wheelbase), and the steering process needs to keep the body stable (to avoid rollover). Therefore, the design emphasizes "linear response" (the steering wheel rotation amplitude is proportional to the steering angle).

**Excavator:**
There is no fixed "steering ratio"; the steering amplitude is completely determined by the speed difference of the crawlers on both sides, enabling "stepless adjustment" (from slow small-angle steering to in-place rotation).
The turning radius is extremely small (even zero radius), suitable for narrow construction sites (such as indoor demolition, foundation pit operations), and can stably steer on muddy and soft ground (the crawler has a large ground contact area, making it less likely to get stuck). Even when the machine body is carrying heavy objects (such as a bucket full of materials), the steering power can still be guaranteed.

In short, the steering of a car is "precise guidance optimized for road driving", while the steering of an excavator is "flexible heavy-duty drive designed for engineering scenarios". The differences between them stem from the fundamental differences in usage requirements.
