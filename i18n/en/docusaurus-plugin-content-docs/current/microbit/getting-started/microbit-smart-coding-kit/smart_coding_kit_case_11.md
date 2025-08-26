# Case 11: Simple AI Exercise Timer

## Introduction

By comparing the trained data model and downloading it to the micro:bit board, pressing button "A" on the micro:bit board allows you to check how many seconds you have been exercising; pressing button "B" allows you to check the time you have been stationary.

## Purpose of the Case

Learn the basic operations of Create AI projects.

## Required Materials

| Item              | Image                                                        | Quantity |
|--|--|--|
|Smart Coding Kit|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/microbit-smart-coding-kit-create-ai-00.png)|1|
|micro:bit|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/microbit%20%E6%AD%A3(1).png)|1|
|USB Cable|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/usb%20cable1.png)|1|
|Personal Computer|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-04.png)|1|

---
## User Tutorial

### Step 1: Learning Related Knowledge

1. Use the Chrome or Edge web browser to visit https://createai.microbit.org/ as shown in the figure below.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-1.png)

2. Browse and read the relevant knowledge points, locate "Projects" and click the "Simple AI exercise timer" project.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-2.png)

3. Browse and read the relevant knowledge points, then locate the "Collect data samples" directory and click "Open in micro:bit CreateAI".

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-3.png)

---
### Step 2: Create a New Project

1. Create a new project, name it, and click "Start Project".

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-4.png)

2. On the data sample page, find "connect" and click it.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-5.png)

---
### Step 3: Connect the micro:bit Board

1. Please ensure that all necessary materials and equipment are ready, then click "Next".

(If your personal computer has Bluetooth connectivity, only one micro:bit board is needed. If your personal computer does not support Bluetooth connection, click "Use micro:bit Wireless Connection" and follow the tutorial to complete the connection.)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-6.png)

2. Please connect your micro:bit board to the computer using a data cable, then click "Next" and follow the tutorial to complete the program download.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-7.png)

3. Wait for the program to be downloaded and installed on the micro:bit board.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-8.png)

4. Please disconnect the USB cable and turn on the power of the Watch Kit Pro, then click "Next".

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-9.png)

5. Click "Next" and follow the tutorial to complete the Bluetooth connection authentication process.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-10.png)

6. Select "micro:bit Board" and click "Pair", wait until the connection is successful.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-11-1.png)

7. If the connection is successful, the "X", "Y", "Z" lines in the "Real-time Data Area" will change accordingly as you shake the watch.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-12.png)

### Step 4: Train Model and Data Model Recognition Calibration

1. Click "Train Model"

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-13.png)

2. Click "Start Training" and wait for the data model deployment to complete.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-14.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-14-1.png)

3. Click "Next" and follow the tutorial to complete the guidance.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-15.png)

4. Please wear the watch kit on your right wrist, making sure that the side with the logo is facing outward. When you perform large-scale activities, you can observe that the recognition rate of the "Exercise" data model exceeds 80%.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-16.png)

5. When you are in a stationary state, you can observe that the recognition accuracy of the "Static" data model exceeds 80%.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-17.png)

### Step 5: Program Writing and Download

1. Click "Edit in MakeCode".

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-18.png)

2. Connect the micro:bit board with a data cable and click "Download".

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-19.png)

3. Click "Next"

The target of your download is the micro:bit board used for data collection, please select "Same micro:bit". If the target of your download is another different micro:bit board, select "Different micro:bit".

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-20-1.png)

4. After completing the download according to the tutorial instructions, when you are in a moving state, the LED matrix screen of the micro:bit board in the watch will display the "stick figure" icon. When you are stationary, the LED matrix screen of the micro:bit board in the watch will display the "asleep" icon.

## Result

When you are in a moving state, the LED matrix screen of the micro:bit board in the watch will display the "stick figure" icon. When you are stationary, the LED matrix screen of the micro:bit board in the watch will display the "asleep" icon. Press button "A" on the micro:bit board to check how many seconds you have been exercising; press button "B" to check the time you have been stationary.

## Common Problems
