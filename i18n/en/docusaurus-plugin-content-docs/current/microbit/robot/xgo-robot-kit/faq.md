---
sidebar_position: 20
sidebar_label: FAQ
---

# Solutions to common problems

## The robot dog can't walk straight

1. The robot dog is corrected by the gyroscope. When starting up, the robot dog needs to be placed on the ground or on the table. After pressing the switch, the gyroscope will have a 3-5s initialization process. During this period, do not move the robot dog. Operate after the light is always on.

2. If the robot dog still has a large deviation after excluding the problem of gyroscope initialization, the robot dog needs to be recalibrated.

## Recalibrate the robot dog

When you find that your robot dog’s posture is abnormal, such as standing posture, a leg is seriously deviated so that the four legs cannot touch the ground at the same time, or the body is obviously skewed, it is likely that the initial position deviates from the expected position due to loose screws or the sliding teeth of the steering gear. At this point, you can perform initial position calibration to recalibrate the initial position preset value of the robot dog.

1. Open the XGO APP, after connecting to the robot via Bluetooth, click the Settings button to run it as a developer, as shown in the figure below.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite2-faq-07.png)

2. Back to the main page, click the calibration icon.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite2-faq-04.png)

3. Enter the calibration page and click CALIBRATE.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite2-faq-05.png)

4. At this time, the servo of the robot dog will no longer output torque, allowing you to rotate all joints. Place the robot dog according to the posture shown in the figure below. Note that the shoulder of each leg is perpendicular to the body, the thigh is perpendicular to the ground, and the calf is perpendicular to the thigh. whether it is placed vertically will directly affect the posture of the robot dog when it is working.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/xgo-005.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/xgo-006.png)

5. After placing the standard, click the "Complete Calibration" button in the calibration interface, and the robot dog will return to the initial standing posture after 10 seconds.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite2-faq-06.png)

## Replace Servos

Take the example of replacing a knee servo, the diagram below shows the replaced servo. **Note: There are 12 different IDs for servos on the robot dog, they must be replaced with the same ID**.

Step 1: Open the back cover of the robot dog and unplug the damaged knee servo cable from the drive board.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite2-faq-08.png)

Step 2: Remove the tiller screws from the main and secondary tiller plates of the knee tiller and remove the lower leg.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite2-faq-09.png)



Step 3: Remove the damaged servo, taking care not to pull hard on the servo cable.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite2-faq-10.png)

Step 4: Pass the knee tiller cable through the corresponding position and fix the tiller to the thigh sheet metal.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite2-faq-11.png)



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite2-faq-12.png)


Step 5: Attach the lower leg to the main and secondary rudder discs, taking care that the lower leg and thigh need to form a 90° right angle.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite2-faq-13.png)


Step 6: Plug the cable into the motherboard, close the top cover of the robot dog, switch on and re-calibrate it.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/microbit-xgo-lite2-faq-14.png)
