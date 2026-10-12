---
sidebar_position: 6
sidebar_label: Software Library Guide
---

# Software Library Guide

## Using MakeCode

1. Open [Microsoft MakeCode for micro:bit](https://makecode.microbit.org) and create a new project.
2. Click **Extensions**, search for `planetX-AI`, and select the `planetX-AI` extension to add it to your project.
3. Find the **planetX-AI** category in the Blocks panel on the left, then drag and drop the blocks into the workspace.
4. Once your program is complete, download it to your micro:bit to run it.

## Using MicroBlocks (Coming Soon)

1. Open the [MicroBlocks platform](https://microblocksfun.cn/run/microblocks.html).
2. Click **Add Library** in the left panel. Navigate to **Elecfreaks → PlanetX Series → AI Lens Pro**, then click **OK** to add the library.
3. Find the **AI Lens Pro** library in the left panel, then drag and drop the blocks into the workspace.
4. Connect the **Nezha For ESP32 Board** after completing your program. Click the Run button in the upper-right corner of the page or click an individual block to execute the program.

---

# Programming Block Reference

**Note:** `[X1]`, `[X2]`, and similar placeholders represent selectable parameters or input fields in the programming blocks. Boolean blocks return `true` or `false`, Number blocks return numeric values, and String blocks return text. Refer to the original requirements document for detailed parameters, return values, and items requiring confirmation.

| Category | Programming Block | Description | Notes |
| :--- | :--- | :--- | :--- |
| **AI Lens Pro Basic Settings** | **Initialize AI Lens Pro** | Establishes communication between the controller and AI Lens Pro, and initializes the camera module. | Type: Command |
| | **Switch to [X1] Function** | Switches AI Lens Pro to the selected function page or recognition mode. | Type: Command; X1: Ball Recognition / Face Recognition / Expression Recognition / Gesture Recognition / Pose Recognition / Card Recognition / Color Recognition / Object Recognition / Object Tracking / Line Tracking / OCR / Code Recognition / Feature Learning / Rhythm Recognition, etc. (dropdown) |
| | **Set Fill Light [X1] (Advanced: Brightness [X2]%)** | Turns the camera fill light on or off and adjusts its brightness. | Type: Command; X1: On / Off (dropdown); X2: Brightness, 0–100% |
| | **Capture a Frame from AI Lens Pro** | Analyzes the current camera frame and updates the recognition results. | Type: Command; Unified data refresh block for all recognition algorithms. |
| | **Connect AI Lens Pro to Wi-Fi SSID [X1] Password [X2]** | Connects the camera to a wireless network using the specified Wi-Fi name and password. | Type: Command; X1: Wi-Fi SSID (String); X2: Wi-Fi Password (String) |
| | **Is AI Lens Pro Connected to Wi-Fi?** | Checks whether the camera is currently connected to Wi-Fi. | Type: Boolean |
| **Ball Recognition** | **Image Contains [X1] Ball** | Checks whether a ball of the selected color is detected in the current image. | Type: Boolean; X1: Any / Red / Blue, etc. (dropdown) |
| | **Get Total Number of Balls in Image** | Returns the total number of balls detected in the current image. | Type: Number |
| | **Get [X2] of [X1] Ball in Image** | Returns the selected property of the target ball. | Type: Number; X1: Center / Largest (dropdown). “Largest” refers to the ball with the greatest horizontal pixel width; X2: X Position / Y Position / Size / Confidence (dropdown). When multiple balls are detected, Center selects the ball closest to the image center, while Largest selects the ball with the greatest pixel width. Size refers to the ball's vertical pixel span in the image. |
| **Card Recognition** | **Image Contains Number Card [X1]** | Checks whether the specified number card is detected. | Type: Boolean; X1: 0–9 (dropdown) |
| | **Image Contains Letter Card [X1]** | Checks whether the specified letter card is detected. | Type: Boolean; X1: A / B / C, etc. (dropdown) |
| | **Image Contains Traffic Sign Card [X1]** | Checks whether the specified traffic sign card is detected. | Type: Boolean; X1: Forward / Backward / Stop / Turn Left / Turn Right, etc. (dropdown) |
| | **Image Contains Object Card [X1]** | Checks whether the specified object card is detected. | Type: Boolean; X1: Cat / Dog / Mouse, etc., according to the supported card list (dropdown) |
| | **Get Total Number of Cards in Image** | Returns the total number of detected cards across all supported card categories. | Type: Number; All card categories are counted together. |
| | **Get [X2] of Card [X1] in Image** | Returns the position or other properties of the specified card. | Type: Number; X1: 0–9 / A–F / Traffic Signs / Objects (dropdown); X2: X Position / Y Position / Size / Confidence (dropdown). Size refers to the card's vertical pixel span in the image. |
| **Color Recognition** | **Switch Color Recognition Mode to [X1]** | Switches between standard color recognition and learned color recognition. | Type: Command; X1: Standard Color Recognition / Learned Color Recognition (dropdown) |
| | **Image Contains Color [X1]** | Checks whether the specified color is present in the image. | Type: Boolean; X1: Red / Yellow / Green / Blue / Black / White, etc. |
| | **Get [R/G/B] Value of Color in Image** | Returns the selected RGB channel value of the color at the image center. | Type: Number |
| | **Image Contains Learned Color with ID [X1]** | Checks whether the image contains a region matching the specified learned color. | Type: Boolean (Advanced); X1: Learned color ID in the device UI, 1–30 (positive integer) |
| | **Get [X2] of Learned Color with ID [X1]** | Returns the selected property of the specified learned color. | Type: Number (Advanced); X1: Learned color ID, 1–30 (positive integer); X2: R / G / B / X Position / Y Position / Width / Height / Confidence |
| **Face Recognition** | **Image Contains Face** | Checks whether a face is detected in the current image. | Type: Boolean |
| | **Get Total Number of Faces in Image** | Returns the total number of faces detected in the current image. | Type: Number |
| | **Get [X1] of Face in Image** | Returns the selected property of the target face closest to the image center. | Type: Number; X1: X Position / Y Position / Width / Height / Confidence / Blink Count / Mouth Opening Count. When multiple faces are detected, the face closest to the image center is selected by default. The usage of Confidence should be explained. |
| | **Get Confidence of Learned Face in Image** | Returns the recognition confidence value for the target face closest to the image center. | Type: Number; A numeric confidence value is returned even if the face has not been learned or the confidence is too low. The block does not return `None`. When multiple faces are detected, the face closest to the image center is selected by default. |
| | **Get Name of Learned Face in Image** | Returns the name associated with the learned face closest to the image center. | Type: String; The original requirements specify `None` for unlearned faces or low-confidence results. The exact returned string requires confirmation. When multiple faces are detected, the face closest to the image center is selected by default. |
| **Facial Expression Recognition** | **Image Contains [X1] Expression** | Checks whether a face with an analyzable expression is present in the image. | Type: Boolean; X1: Any / Happy / Sad / Angry / Surprised / Neutral, etc. |
| | **Get Total Number of Recognizable Expressions** | Returns the number of faces whose expressions can be recognized. | Type: Number |
| | **Get Expression Name in Image** | Returns the facial expression name of the person closest to the image center. | Type: String |
| **Gesture Recognition** | **Image Contains Learned Gesture** | Checks whether the image contains a gesture previously learned by the camera. | Type: Boolean; When multiple hands are detected, the one closest to the image center takes priority. |
| | **Image Contains Gesture [X1]** | Checks whether the specified gesture is detected in the current image. | Type: Boolean; X1: Gesture name (String). If name-based recognition is not yet supported, a gesture ID can be used as an advanced interface. |
| | **Get [X1] of Gesture in Image** | Returns the position or recognition data of the gesture closest to the image center. | Type: Number; X1: X Position / Y Position / Width / Height / Confidence / ID. The gesture ID identifies a previously learned gesture. |
| | **Get Gesture Name in Image** | Returns the name of the gesture closest to the image center. | Type: String |
| **Pose Recognition** | **Image Contains Human Pose** | Checks whether a human pose is detected. | Type: Boolean |
| | **Human Pose in Image Is [X1]** | Checks whether the person closest to the image center is in the specified pose. | Type: Boolean; X1: Standing / Sitting / Hand Raised, etc. (dropdown) |
| | **Get [X1] of Human Pose in Image** | Returns the position or other properties of the person closest to the image center. | Type: Number; X1: ID / X Position / Y Position / Width / Height / Confidence / Keypoint Coordinates. The pose ID identifies a previously learned pose. |
| | **Get Human Pose Name in Image** | Returns the current pose name of the person closest to the image center. | Type: String |
| **Object Recognition** | **Image Contains [X1]** | Checks whether an object supported by the recognition model is detected. | Type: Boolean; X1: Recognizable Object / Computer / Mouse / Keyboard, etc. (dropdown) |
| | **Get Total Number of Recognized Objects** | Returns the total number of objects detected in the current image. | Type: Number |
| | **Get [X1] of Object in Image** | Returns the selected property of the recognized object. | Type: Number; X1: ID / X Position / Y Position / Width / Height / Confidence |
| | **Get Object Name in Image** | Returns the category name of the object closest to the image center. | Type: String |
| **Object Tracking** | **Start Tracking Object in Selection Box (Advanced: Top-Left X [X1], Top-Left Y [X2], Bottom-Right X [X3], Bottom-Right Y [X4])** | Selects a target within the specified region and starts tracking it. If multiple targets are present, the largest target is selected first. | Type: Command; X1: Top-Left X; X2: Top-Left Y; X3: Bottom-Right X; X4: Bottom-Right Y. The default selection box is a 150 × 150-pixel region at the image center. When multiple targets are present, the largest target takes priority. |
| | **Stop Object Tracking** | Stops tracking the current target. | Type: Command |
| | **Is Object Tracking Active?** | Checks whether object tracking is currently active. | Type: Boolean |
| | **Is Tracked Object Lost?** | Checks whether the previously tracked target is temporarily missing. | Type: Boolean |
| | **Get [X1] of Tracked Object** | Returns the position, size, or other properties of the tracked object. | Type: Number; X1: X Position / Y Position / Width / Height / Confidence |
| **Line Tracking** | **Get [X1] Offset of Black Line in Image** | Returns the selected feature of the main black line detected in the image. | Type: Number; X1: Angle / Distance |
| | **Image Contains Black Line [X1] (Advanced: Center Tolerance ± [X2]°)** | Checks whether the detected black line is offset in the selected direction. | Type: Boolean; X1: Offset Left / Offset Right / Centered. A line within ±10° of the center direction is considered centered by default. |
| **Optical Character Recognition (OCR)** | **Image Contains Text** | Checks whether valid text is detected in the image. | Type: Boolean |
| | **Recognized Text Equals [X1]** | Checks whether the recognized text matches the specified text. | Type: Boolean; X1: User-entered text (String); New block |
| | **Get [X1] of Recognized Text** | Returns the selected property of the current text recognition result. | Type: Number; X1: Character Count / Confidence, etc. |
| | **Get Recognized Text** | Returns the text recognized in the image. | Type: String; Displays "Recognition Failed" when no text is recognized. |
| **QR Code and Barcode Recognition** | **Image Contains [X1] Code** | Checks whether a QR code or barcode is detected. | Type: Boolean; X1: Any / QR Code / Barcode |
| | **Recognized Code Content Equals [X1]** | Checks whether the decoded content matches the specified value. | Type: Boolean; X1: User-entered text (String) |
| | **Get Recognized Code Content** | Returns the decoded text or numeric content. | Type: String; Returns an empty string if no code is recognized. |
| **Feature Learning** | **Learn Object at Image Center as ID [X1]** | Learns the features of the target at the image center and saves them under the specified ID. | Type: Command; X1: 1–30 (positive integer) |
| | **Forget Learned Object [X1]** | Deletes the specified learned object data. | Type: Command; X1: 0–30 (integer). Setting X1 to 0 deletes all learned objects. |
| | **Image Contains Learned Object [X1]** | Checks whether the specified learned object is detected in the current image. | Type: Boolean; X1: 0–30 (integer). Setting X1 to 0 matches any learned object. |
| | **Get [X1] of Learned Object** | Returns the ID or confidence value of a learned object. | Type: Number; X1: ID / Confidence (dropdown) |
| **Rhythm Recognition** | **Recognize Audio from File [X1]** | Specifies the path of the audio file to be analyzed for rhythm recognition. | Type: Command; X1: Audio file path (String) |
| | **Record for [X1] Seconds and Recognize Rhythm** | Records audio for the specified duration and performs rhythm recognition. The default recording duration is 10 seconds. | Type: Command; X1: 1–25 seconds (positive integer; 0 is not allowed); Default: 10 seconds |
| | **Is Rhythm Recognition Successful?** | Checks whether rhythm recognition was successful. | Type: Boolean |
| | **Get [X1] of Current Rhythm** | Returns the selected property of the current rhythm recognition result. | Type: Number; X1: BPM / Beat Count / Duration |

---

# Example Projects
