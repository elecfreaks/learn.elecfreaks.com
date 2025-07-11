# Case 3: Music Conductor

## Introduction

By collecting and training custom gesture data, the micro:bit can automatically play music.

## Purpose of the Case

1. Learn the data collection method for Create AI custom gestures.

## Required Materials

| Item              | Image                                                        | Quantity                                                     |
|--|--|--|
|Smart Coding Kit| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/microbit-smart-coding-kit-create-ai-00.png.png) |1|
|micro:bit|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/microbit%20%E6%AD%A3(1).png)|1|
|USB Cable|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/usb%20cable1.png)|1|
|Personal Computer|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-smart-climate-kit-case-01-04.png)|1|
___
## User Tutorial

### Step 1: Create a New Project

1. Use the Chrome or Edge web browser to visit https://createai.microbit.org/ as shown in the figure below, and click "Get Started".

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case03/microbit-smart-coding-kit-create-ai-1.png)

2. Click "New Session" and name the project.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case03/microbit-smart-coding-kit-create-ai-2.png)

___
### Step 2: Connect the micro:bit Board

1. Connect your micro:bit board to the computer using a data cable, and click "Connect".

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case03/microbit-smart-coding-kit-create-ai-3.png)

2. Prepare the corresponding materials and equipment, and click "Next".

   (If your personal computer has Bluetooth connectivity, only one micro:bit board is needed. If your personal computer does not support Bluetooth connection, click "Use micro:bit Wireless Connection" and follow the tutorial to complete the connection.)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-6.png)

3. Please connect your micro:bit board to the computer using a data cable, then click "Next" and follow the tutorial to complete the program download.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-7.png)

4. Wait for the program to be downloaded and installed on the micro:bit board.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-8.png)

5. Disconnect the USB cable and turn on the power of the Watch Kit Pro, then click "Next".

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-9.png)

6. Click "Next" and follow the tutorial to complete the Bluetooth connection authentication process.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-10.png)

7. Select "micro:bit Board" and click "Pair", wait until the connection is successful.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-11-1.png)

8. If the connection is successful, the "X", "Y", "Z" lines in the "Real-time Data Area" will change accordingly as you shake the watch.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case03/microbit-smart-coding-kit-create-ai-13.png)

___
### Step 3: Data Collection

1. Name the action "Action One" in the "Action Name" input box. Click the "triangle" icon to select the corresponding pattern displayed on the micro:bit for this action.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case03/microbit-smart-coding-kit-create-ai-14.png)

2. **Please wear the watch kit on your right wrist, ensuring that the logo is facing outward, and the pins of the micro:bit board are close to the body side.**

3. There are three methods introduced here for data collection.



**Method 1:**



Click "Record" to start collecting gyroscope data of this action. A 3, 2, 1 countdown will be displayed on the screen. When the word "GO" appears, shake your right hand quickly. Repeat this process the corresponding number of times according to the required number of data samples to collect.



**Note:** When collecting action data, try to ensure that your right hand is in roughly the same position each time. During the collection process, record the data of the action at fast, medium, and slow frequencies respectively, which helps to obtain higher-quality useful data.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case03/microbit-smart-coding-kit-create-ai-16.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case02/microbit-smart-coding-kit-create-ai-case21-1.png)

**Data Collection Principle.**
CreateAI collects the "X", "Y", "Z" axis data of the micro:bit board's gyroscope, draws these data in the form of line graphs, and extracts the "X", "Y", "Z" axis data within a specific time period to form a set of data samples.



**Method 2:**

Click the three vertical dots next to the record button and select "Record 10 samples". This mode will collect 10 samples continuously, but there will be a countdown between each sample collection.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case03/microbit-smart-coding-kit-create-ai-16-1.png)

**Method 3:**

Click the three vertical dots next to the record button and select "Record for 10 seconds". This mode will collect 10 data samples continuously after the countdown ends.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case03/microbit-smart-coding-kit-create-ai-16-2.png)

4. After completing the data collection for Action One, click "Add Action" to create a new action dataset, then name it "Static" and start collecting action data. Note: When collecting data, you can collect static states from multiple angles as data samples.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case03/microbit-smart-coding-kit-create-ai-14-1.png)

---
### Step 4: Model Training and Data Model Recognition Calibration

1. Click "Train Model" and wait for the model training to complete.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case03/microbit-smart-coding-kit-create-ai-18.png)

2.The accuracy rate of the action data model detection exceeds 80%. If all items reach this accuracy rate, the data collection is completed. If the accuracy rate of a certain action data model is lower than 80%, return to the data collection page, re-collect data and train until the accuracy rate of this action data model reaches or exceeds 80%.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case03/microbit-smart-coding-kit-create-ai-20.png)
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case03/microbit-smart-coding-kit-create-ai-21.png)

___
### Step 5: Program Writing and Download

1. Click "Edit in MakeCode".

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-18.png)
___
2. Please complete the program writing as shown in the figure below, connect the micro:bit board to the personal computer using a data cable, and download the program.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case03/microbit-smart-coding-kit-create-ai-22.png)
___
3. Click "Next"
If the download location is the micro:bit board used for data collection, select "Same micro:bit"; if the download is to another micro:bit board, select "Different micro:bit".

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-20-1.png)
___
4. After completing the download according to the tutorial instructions, when you gently shake your wrist, the micro:bit board will play music.

---
## Result

When you gently shake your wrist, the micro:bit board will play music.

## Common Problems



