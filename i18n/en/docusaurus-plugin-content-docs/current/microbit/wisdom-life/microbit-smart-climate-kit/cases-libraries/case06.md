---
sidebar_position: 6
sidebar_label: Case 6:Smart Weather Station & SmartIoT
---

# Case 6: Smart Weather Station & SmartIoT

## Introduction
This course builds on the existing smart climate kit cases and adds **IoT data upload** and **AI analysis** modules. It guides students to build a smart weather station to collect environmental data (temperature, humidity, wind speed, UV intensity, dust concentration), upload the data to the SmartIoT platform in real time for visualization, and then export the data from the platform to send to an AI assistant (e.g., Doubao) for in-depth analysis. The course aims to help students integrate "sensor technology + IoT platform + AI tools", establish a complete thinking chain of "data collection - visualization - intelligent analysis", further understand the technical path of climate change monitoring, and cultivate the ability to solve environmental problems using technology.

## Teaching Objectives
### Knowledge Objectives
1. Consolidate knowledge about the impact of climate change on the environment and humans, and master the operating principles of the smart climate kit;
2. Understand the core functions of the SmartIoT platform (device management, data upload, visualization) and the basic logic of IoT data transmission;
3. Comprehend the full process of "sensor collection → platform upload → AI analysis".

### Skill Objectives
1. Independently build the hardware of a smart weather station and realize multi-sensor data collection;
2. Master the operations of device creation, API configuration, and real-time data upload on the SmartIoT platform;
3. Learn to export data from SmartIoT and use an AI assistant to conduct data trend analysis and correlation exploration;
4. Comprehensively present climate data conclusions by combining OLED display, platform visualization, and AI analysis results.

### Attitude Objectives
1. Deepen attention to climate change and develop a scientific inquiry awareness of "speaking with data";
2. Cultivate the ability to solve technical problems (e.g., WiFi connection failure, abnormal data upload) through teamwork;
3. Stimulate innovative thinking in using "IoT + AI" technology to address environmental challenges.

### Extended Objectives
1. Understand practical application scenarios of IoT platform and AI tool collaboration (e.g., smart agriculture, urban environmental monitoring);
2. Attempt to independently design data collection schemes (e.g., increasing collection frequency, expanding sensor types) to optimize AI analysis dimensions.

## Teaching Preparation
Before starting the teaching, please ensure you have prepared the following necessary materials:

| Image | Name |
| :-: | :-: |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-02.png) | Smart Climate Kit |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-03.png) | micro:bit V2 |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-04.png) | Personal Computer (PC) |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-05.png) | USB Data Cable |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-05-05.png) | ELECFREAKS Smart Home Material Pack |

These materials will provide you with a complete experience and ensure the smooth progress of subsequent operations and learning. If you have prepared the above content, we can move on to the next step.


## Teaching Process
### Course Introduction
Welcome, everyone! Today we will dive into a fascinating topic — climate change. Have you ever wondered what climate change means for our lives and the environment? Do you want to know how to use technology to explore and solve this global challenge? Today, we will work together to build an exciting smart weather station. Using the sensors and devices in the smart climate kit, we will explore and analyze environmental data such as temperature, humidity, and air quality. Not only will we understand the importance of climate change, but we will also learn how to take measures to address this global challenge. Let's explore the mysteries of climate change together, cultivate environmental awareness, and become a force for changing the world! Are you ready? Let's get started!

### Inquiry Activities
1. Group Discussion: "To realize the process of 'data collection → cloud upload → AI analysis', what key problems do we need to solve?" (Guide students to mention: How to connect hardware to WiFi, how to transmit data to the platform, how to export data from the platform, and how to analyze data with AI);
2. Task Breakdown: Each group takes on one key problem, infers solutions based on existing knowledge (e.g., sensor connection), and the teacher summarizes and clarifies the implementation steps of this course.

### Hardware Connection
Connect the wind speed sensor to the **P1** pin, the UV sensor to the **P2** pin, the LED of the dust sensor to the **P3** pin, the "out" terminal of the dust sensor to the **P4** pin, the DHT11 temperature and humidity sensor to the **P10** pin, and install the OLED display on the IoT:bit.

### SmartIoT Platform Settings
Platform Link: [https://www.smartiot.space/](https://www.smartiot.space/)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-01.png)

## Language Switching
The SmartIoT platform supports multiple languages (machine translation), and users can select the corresponding language by themselves.

1. Click the language switch button in the upper right corner.

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-02.png)

2. Select a language to switch.

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-03.png)

3. If the available languages cannot meet your needs or there are translation errors, you can click "Download Template" to translate by yourself.

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-04.png)

4. After completing the translation, click "Upload" to upload the translation file. This translation function can only be applied to the local device.

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-05.png)


## SmartIoT Account Registration
1. Access the SmartIoT official website and click "Login" to enter the account login page.

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-06.png)

2. Click "Create an Account" to enter the new account registration page.

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-07.png)

3. Fill in the registration information (email, username, password) and click "Sign Up".

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-08.png)

4. Click "Sign Up" to register, and an email will be sent to the email address you provided.

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-09.png)

5. Check the inbox or spam folder of your email (it may be identified as spam), and open the link in the email to activate your account.

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_05.png)

6. Registration is successful.

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_06.png)


## Logging into SmartIoT
Enter your account and password under "Log in", then select "Log in".

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-10.png)


## SmartIoT Platform Class Management
*** The class management function allows you to create student accounts. ***

1. Click the "Class Management" option to enter the class management interface. If a teacher account activation code is required, please contact ELECFREAKS official staff via email: **support@elecfreaks.com**.

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-21.png)

2. Click "Create Class" to create a class.

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-22.png)

3. In the pop-up window, enter the class name and student names.

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-23.png)

   **Note: Each name can contain a maximum of 15 characters, with one name per line (do not leave any blank lines).**

4. After creating the class, click the icon to enter the student information management interface.

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-24.png)

5. Click "Add Student" to fill in student information.

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-25.png)

6. Click "Export" to export all student data.

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-26.png)


## User Token and Topic
Click "Log in" to enter the device management page. The username and personal email are displayed in the upper left corner. The **User Token** is a unique identification code of the platform, bound to your account. It is unique globally and will not be duplicated.

*** Note: The User Token will be used in subsequent programming. ***

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-11.png)


### Code Programming
*** Adding Software Libraries ***

1. Access "[makecode.microbit.org](https://makecode.microbit.org/)" and click "New Project".

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/smart-weather-station-kit-add-extension-01.png)

2. Enter the project name in the pop-up window and click "Create".

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/smart-weather-station-kit-add-extension-02.png)

3. Click "Extensions" in the code drawer.

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/smart-weather-station-kit-add-extension-03.png)

4. Enter "IOT" in the pop-up interface, press the Enter key to search, and select to load the IOT software library.

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/smart-weather-station-kit-add-extension-04.png)

#### Code Explanation
1. Connect to the SmartIoT platform: The **User Token** is a unique account identification code, bound to the account and cannot be modified. The **Topic** is a unique device identification code, and the device to be uploaded must be specified during connection. Device numbers (Topics) are arranged in sequence.

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_12.png)

2. Obtain these two pieces of data on the SmartIoT platform.

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-17.png)

3. Determine whether the platform connection is successful (returns True if successful, False if failed).

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_14.png)

4. Click the "+" below the block to add data for upload. A maximum of 8 sets of data can be uploaded simultaneously.

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-science-iot-kit/images/smartiot_17.png)

*** Example Code ***

1. Initialize the WiFi module and connect to WiFi.

   *** Note: When connecting to a Wi-Fi network, ensure your Wi-Fi network is operating in 2.4GHz mode. ***

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-06-01.png)

2. Connect to the SmartIoT platform and fill in the `userToken` and `Topic`.

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-06-02.png)

3. Initialize the OLED display.

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-06-03.png)

4. Since the shared pins of the LED matrix screen on the micro:bit are used, the LEDs need to be disabled.

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-06-04.png)

5. Collect data such as noise intensity, wind speed, UV intensity, dust concentration, temperature, and humidity.

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-06-05.png)

6. Display the data on the OLED display.

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-06-06.png)

7. Upload the data to the SmartIoT platform.

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-06-07.png)

8. Complete Program

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-06-08.png)


You can refer to the program via the link: [https://makecode.microbit.org/_Fc3d3q9mKMsK](https://makecode.microbit.org/_Fc3d3q9mKMsK)

You can also download the program directly through the following webpage:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_Fc3d3q9mKMsK"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

*** Downloading the Program ***

1. Connect the PC to the micro:bit V2 using a USB cable.

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/connect-microbit.gif)

2. After a successful connection, a drive named `MICROBIT` will be recognized on the computer.

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-drive.png)

3. Click ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-01.png) in the lower left corner and select `Connect Device`.

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-02.png)

4. Click ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-03.png).

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-04.png)

5. Click ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-05.png).

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-06.png)

6. Select `BBC micro:bit CMSIS-DAP` in the pop-up window and click "Connect". The micro:bit is now successfully connected.

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-07.png)

7. Click to download the program.

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-08.png)


## Adding a Device
1. Add a new device (Create new device). The Topic is the unique identification code of your device (unique to your account).

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-12.png)

2. You can modify the device name and configure the device (you can have a maximum of 10 devices).

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-13.png)


## Device Page Component Management
1. Click "Add Component" in the upper left corner.

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-42.png)

2. Select the component and size in the pop-up window.

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-43.png)


### Line Chart
A maximum of 8 sets of data can be displayed, which is suitable for showing data change trends.

1. You can set the data range displayed in the chart through `Start Time` and `End Time`.

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-32.png)

2. Or select the data to be displayed in the chart through data labels.

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-33.png)

3. Or click `Edit` to enter the settings interface.

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-34.png)

4. Select the data information to be displayed by checking the labels.

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/smartiot/images/smartiot-35.png)

### Teamwork and Presentation
1. Divide students into groups to jointly complete the production of the case and program writing.
2. Encourage students to cooperate, communicate, and share experiences with each other.
3. Each group has the opportunity to present their completed case to other groups and give a demonstration.

*** Expected Result: After connecting the power supply, the current wind speed, UV intensity, dust amount, temperature, humidity, and noise intensity will be displayed on SmartIoT. ***

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-06-09.png)

After uploading the data to SmartIoT, export the uploaded data as an EXCEL spreadsheet via the data export button.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-06-10.png)

Conduct simple data analysis using Deepseek:
1. Open [Deepseek](https://chat.deepseek.com/)
2. Upload the data to Deepseek via the file upload button.

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-06-11.png)

3. Enter a prompt to let Deepseek analyze based on the file data.

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-06-12.png)


### Summary and Reflection
1. Each group organizes and analyzes the conclusions: Combine the trend chart descriptions and correlation conclusions provided by AI with the visualization charts of SmartIoT to form a group analysis report.
2. Explain the full process of "data from collection to analysis", and share the problems encountered (e.g., WiFi debugging, data format errors) and their solutions.
3. Focus on the success rate of data upload and the rationality of AI analysis conclusions, and encourage innovative ideas (e.g., adjusting the collection frequency to optimize analysis accuracy).
4. Knowledge Review: Sort out the technical chain of "sensor collection → WiFi transmission → SmartIoT storage and visualization → AI analysis", and emphasize the key nodes of each step (e.g., data format, API key).
5. Problem Reflection: "What links can we optimize to make AI analysis more accurate?" (e.g., extending data collection time, increasing sample size, calibrating sensor accuracy).
6. Action Extension: Encourage students to use the weather station to monitor the home/campus environment after class, feed back the AI analysis conclusions to the school's environmental protection club, and propose specific environmental protection suggestions (e.g., "UV intensity is high at noon, it is recommended to wear a sun hat for outdoor activities").
