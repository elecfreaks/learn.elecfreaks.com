# Case 15: Gesture-Controlled Car

## Introduction

Control the movements of the Cutebot car through custom gestures that are collected and trained.

## Purpose of the Case

Learn the data collection method for Create AI custom gestures.

___
## Required Materials

| Item              | Image                                                        | Quantity |
|--|--|--|
|Watch Kit Pro|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/microbit-smart-coding-kit-create-ai-00.png)|1|
|micro:bit|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/microbit%20%E6%AD%A3(1).png)|2|
|USB Cable|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-jacdac-smartexploration-kit/images/sensor/usb%20cable1.png)|1|
|Cutebot|![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/microbit-smart-coding-kit-create-ai-002.png.jpg)|1|
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

1. Enter "Forward" in the "Action Name" input box to name it. Click the "triangle" icon to select the corresponding pattern displayed on the micro:bit for this action.
  ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case03/microbit-smart-coding-kit-create-ai-14.png)

2. **Please hold the watch strap with the logo facing outward and the micro:bit LED matrix screen facing up**, as shown in the figure.
  Click the three vertical dots icon to adopt the continuous collection method, then start collecting data samples of the "Forward" gesture action. A 3, 2, 1 countdown will be displayed on the screen. When the word "GO" appears, start shaking the watch up and down until 10 sample data are collected.
  **Note:** When collecting action data, it is necessary to collect the high, medium, and low frequencies of shaking the watch, with 10 samples collected for each frequency.

  ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case05/microbit-smart-coding-kit-create-ai-1.png)


3. **Please hold the watch strap with the logo facing outward and the micro:bit LED matrix screen facing down**, as shown in the figure.
  Click "Add Action" and name it "Backward". Click the three vertical dots icon to adopt the continuous collection method, then start collecting data samples of the "Backward" gesture action. A 3, 2, 1 countdown will be displayed on the screen. When the word "GO" appears, start shaking the watch up and down until 10 sample data are collected.
  **Note:** When collecting action data, it is necessary to collect the high, medium, and low frequencies of shaking the watch, with 10 samples collected for each frequency.

  ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case05/microbit-smart-coding-kit-create-ai-6.png)
  ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case05/microbit-smart-coding-kit-create-ai-3.jpg)
  ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case05/microbit-smart-coding-kit-create-ai-1.png)


4. **Please hold the watch strap with the logo facing outward and the micro:bit LED matrix screen facing right**, as shown in the figure.
  Click "Add Action" and name it "Right". Click the three vertical dots icon to adopt the continuous collection method, then start collecting data samples of the "Right" gesture action. A 3, 2, 1 countdown will be displayed on the screen. When the word "GO" appears, start shaking the watch left and right until 10 sample data are collected.
  **Note:** When collecting action data, it is necessary to collect the high, medium, and low frequencies of shaking the watch, with 10 samples collected for each frequency.

  ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case05/microbit-smart-coding-kit-create-ai-7.png)
  ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case05/microbit-smart-coding-kit-create-ai-4.jpg)
  ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case05/microbit-smart-coding-kit-create-ai-1.png)


6. **Please hold the watch strap with the logo facing outward and the micro:bit LED matrix screen facing left**, as shown in the figure.
  Click "Add Action" and name it "Left". Click the three vertical dots icon to adopt the continuous collection method, then start collecting data samples of the "Left" gesture action. A 3, 2, 1 countdown will be displayed on the screen. When the word "GO" appears, start shaking the watch left and right until 10 sample data are collected.
  **Note:** When collecting action data, it is necessary to collect the high, medium, and low frequencies of shaking the watch, with 10 samples collected for each frequency.

  ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case05/microbit-smart-coding-kit-create-ai-8.png)
  ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case05/microbit-smart-coding-kit-create-ai-5.jpg)
  ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case05/microbit-smart-coding-kit-create-ai-1.png)


8. Click "Add Action" and name it "Stop". Click the three vertical dots icon to adopt the continuous collection method, then start collecting data samples of the "Stop" gesture action. A 3, 2, 1 countdown will be displayed on the screen. When the word "GO" appears, keep the watch stationary until 10 sample data are collected.
   **Note:** When collecting stop action data, the static states of the previous four directions should be collected.

   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case05/microbit-smart-coding-kit-create-ai-9.jpg)
   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case05/microbit-smart-coding-kit-create-ai-13.jpg)
   ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case05/microbit-smart-coding-kit-create-ai-1.png)

**Explanation of Collection Principle**.
Create AI collects the "X", "Y", "Z" axis data of the micro:bit board's gyroscope, draws these data in the form of line graphs, and extracts the "X", "Y", "Z" axis data within a specific time period to form a set of data samples.

### Step 4: Model Training and Data Model Recognition Calibration

1. Click "Train Model" and wait for the model training to complete.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case04/microbit-smart-coding-kit-create-ai-15.png)

2. The accuracy rate of the action data model detection exceeds 80%. If all items reach this accuracy rate, the data collection is completed. If the accuracy rate of a certain action data model is lower than 80%, return to the data collection page, re-collect data and train until the accuracy rate of this action data model reaches or exceeds 80%.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case05/microbit-smart-coding-kit-create-ai-11.png)
___
### Step 5: Program Writing and Download

1. Click "Edit in MakeCode".

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case05/microbit-smart-coding-kit-create-ai-12.png)

2. Please complete the program writing as shown in the figure below, connect the micro:bit board to the personal computer using a data cable, and download the program.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case05/microbit-smart-coding-kit-create-ai-14.png)

3. Click "Next"
If the download location is the micro:bit board used for data collection, select "Same micro:bit"; if the download is to another micro:bit board, select "Different micro:bit".

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case01/microbit-smart-coding-kit-create-ai-20-1.png)

---
### Step 6: Program Writing for the Receiver

1. Use the Chrome or Edge web browser to visit https://makecode.microbit.org/ as shown in the figure below, write the corresponding program, and download the program.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/getting-started/microbit-smart-coding-kit/Create%20AI/case05/microbit-smart-coding-kit-create-ai-15.png)

2. Please refer to the program link https://makecode.microbit.org/_9iV3b1cgR0T4

3. You can also download the program directly through the following webpage.
<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_9iV3b1cgR0T4"
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
## Result

When the front of the watch is facing up and you shake the watch up and down, the car moves forward; when the front of the watch is facing down and you shake the watch up and down, the car moves backward; when the front of the watch is facing right and you shake the watch left and right, the car turns right; when the front of the watch is facing left and you shake the watch left and right, the car turns left; when the watch is stationary, the car stops.

## Common Problems
