---
sidebar_position: 3
sidebar_label: Example Pattern
---

# Example Pattern

The example mode means that the robot dog is separated from the mobile phone or computer, and the robot dog can be operated and experienced through the button operation on the AI module. **A** key and **B** key are selection keys, **C** key is exit key, **D** key is confirmation key.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/pico/cm4-xgo-robot-kit/images/cm4-xgo-exmple-01.png)

1. Performance Mode: The robot dog cycles through all built-in action groups and sings.

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/pico/cm4-xgo-robot-kit/images/cm4-xgo-exmple-02.gif)

2. Face mask: Put a mask on the human face, and the robot dog will give motion feedback according to different angles of the head.

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/pico/cm4-xgo-robot-kit/images/cm4-xgo-exmple-03.png)

3. Group control mode: After the robot dog turns on the group control service, the robot dog can be group controlled through the XGOBOT APP.

4. Gesture recognition: Recognize gestures such as 1, 2, 3, 4, 5, 6, etc. Note that you need to wait for the robot dog to perform the previous action and then perform the recognition again.

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/pico/cm4-xgo-robot-kit/images/cm4-xgo-exmple-04.png)

5. Demonstrating mode: Record and execute the position of each joint of the robot dog according to the lifting on the screen.

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/pico/cm4-xgo-robot-kit/images/cm4-xgo-exmple-14.gif)

6. Background Segmentation: Segmenting the human shape from the background

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/pico/cm4-xgo-robot-kit/images/cm4-xgo-exmple-05.png)

7. Face tracking: robot dog detects faces and tracks them in real-time

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/pico/cm4-xgo-robot-kit/images/cm4-xgo-exmple-06.png)

8. Pose detection: detecting key points of the human body

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/pico/cm4-xgo-robot-kit/images/cm4-xgo-exmple-07.png)

9. Two-dimensional code detection: detect two-dimensional code information

10. Gender recognition: identify men and women and age, if a man is recognized, the robot dog will bark, if a woman is recognized, the robot dog will whine. Remarks: Raspberry Pi will respond slowly after loading the model.

11. Traffic recognition: recognize traffic signals, note that this function is a framework, users can add models and pictures as needed.

12. Emotion recognition: It can recognize emotions such as happiness, sadness, anger, etc., and the robot dog will also give corresponding feedback. Remarks: This model is relatively large, and the Raspberry Pi will be slower after loading.

    ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/pico/cm4-xgo-robot-kit/images/cm4-xgo-exmple-08.png)

13. Speech recognition: This function needs to be connected to the Internet and connected to the speech recognition cloud platform of HKUST Xunfei. According to the short words in the voice box, the dog will take corresponding actions after recognition. Note that the recognition effect of this function is different in different scenarios. Users can use the open-source code Optimize Yourself.

14. Line inspection: Robot dog inspection, this function currently only provides a framework, users need to adjust the code according to their own line inspection drawings.

15. Patch Tracking: Color Tracking

    ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/pico/cm4-xgo-robot-kit/images/cm4-xgo-exmple-09.png)

16. Audio detection: The robot dog plays music, and the histogram of the sound frequency displayed on the screen is constantly changing.

17. Height control: Control the height of the robot dog through gestures. To use this function, the light is bright and the background is clean.

18. Yolo: Object Detection

    ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/pico/cm4-xgo-robot-kit/images/cm4-xgo-exmple-10.png)

19. Wifi set: It is used for WiFi frequency 5G channel setting in different countries, and users in China do not need to set it.

    ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/pico/cm4-xgo-robot-kit/images/cm4-xgo-exmple-11.png)

20. WPA set: It is used for different robot dogs to connect to different WIFI hotspots, and can automatically generate different SSIDs and passwords.

    ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/pico/cm4-xgo-robot-kit/images/cm4-xgo-exmple-12.png)

21. Burn: The Raspberry Pi CM4 can be used to burn firmware to the lower computer of the robot dog. In general, do not operate it. If you need to upgrade, please contact the manufacturer.

22. Camera Calibration: Camera calibration for competitions, generally do not operate, for more information, please refer to the Github open-source library code.

23. Network settings: After opening this program, let the robot dog scan the QR code containing the SSID and password of WIFI generated on the XGOBOT APP, and then let the robot dog connect to the specified WIFI.



24. About Device: Display the firmware version of the lower computer, the version of the motion library and the image date of the Raspberry Pi.

    ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/pico/cm4-xgo-robot-kit/images/cm4-xgo-exmple-13.png)

Remarks: The demo code on the Raspberry Pi CM4 is open source, and the effect is not the same under different usage scenarios. Developers can modify it according to their own needs.

Github address：https://github.com/Xgorobot/RaspberryPi-CM4
