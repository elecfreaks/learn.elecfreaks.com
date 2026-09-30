---
sidebar_position: 2
sidebar_label: Product Overview
---


# **AI Camera Pro**

> **Make it easier for your robot to gain a pair of truly useful “eyes.”**

![Product Image](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/ai-lens-pro/ai-lens-pro-01.png)

## **Product Overview**

AI Camera Pro is an intelligent vision camera designed for **K12 AI education, robotics projects, and competition applications**.

In real-world projects, completing an AI vision task involves more than simply “recognizing a target.” The camera needs the right viewing angle, the device needs stable power, the program needs to access recognition results quickly, and the robot needs to respond based on those results.

AI Camera Pro integrates a **180° rotatable camera, built-in battery, built-in Wi-Fi, and a wide range of on-device AI capabilities** into one device. This helps students move more quickly from “seeing” to “acting,” so they can spend more time programming, experimenting, and creating instead of repeatedly dealing with mounts, cables, and connections.

---

## **Why Is AI Camera Pro Better Suited for Robotics Projects?**

### **Adjust the Viewing Angle Without Redesigning the Robot Structure**

Robotics projects often require switching between different viewing directions.

For example, the same robot may need the camera to face forward for face recognition, but point downward when switching to a line-following task. With a fixed camera angle, this often means redesigning the mount or rebuilding part of the structure.

AI Camera Pro supports **180° rotation**, allowing the viewing direction to be adjusted quickly for different tasks:

- Face forward for face recognition, object recognition, and similar tasks;
- Face downward for line following, color recognition, or ground-target detection;
- Adjust the camera direction according to the robot’s height and mounting method.

This allows the same robot structure to support more lessons and projects. When switching tasks, students usually only need to adjust the camera instead of rebuilding the entire robot.

**In the classroom, this means less time spent adjusting structures and more time for programming and experimentation.**

---

### **Reduce Cables and External Modules for a Cleaner Robot Build**

Once a camera is mounted on a robot, power and connectivity have a direct impact on the overall building experience.

AI Camera Pro includes a built-in battery and Wi-Fi. In supported scenarios, files can be managed over Wi-Fi, reducing the need to repeatedly connect and disconnect data cables during debugging. The built-in battery also allows the camera itself to operate independently, reducing reliance on additional power cables.

This brings several practical benefits:

- Fewer cable restrictions while the robot is moving;
- A cleaner structure with more flexible mounting options;
- Fewer additional connections and fewer potential failure points;
- Smoother file management and project debugging.

Especially in compact robots or competition projects, **one less set of cables can mean more usable space and a much easier debugging process.**

---

### **Stay Focused on the Line That Actually Matters**

Visual line following may look simple, but real tracks often contain adjacent lines, intersections, borders, shadows, or other dark regions.

When multiple candidate targets appear in the camera view, the recognition result may jump between them, causing the robot to drift, turn incorrectly, or follow the route inconsistently.

AI Camera Pro provides **real-time single-line tracking** for this scenario, helping the system stay focused on the intended path.

For students, this means not only more stable recognition results, but also clearer and more predictable feedback when building their first line-following project.

Teachers can also spend more classroom time on key concepts such as error values, steering control, and PID instead of repeatedly troubleshooting why the robot suddenly turned away.

---

### **Learn the Same Object from Multiple Angles**

Real-world objects do not always appear at the same angle, distance, or against the same background.

Take an apple as an example. Its visual features may look different from the front, from the side, at a greater distance, or under different lighting conditions. If only one sample is used for training, students may easily assume that AI is simply “memorizing one image.”

AI Camera Pro supports **multiple samples under the same ID**. Students can collect samples of the same category from:

- Front and side views;
- Different distances;
- Different lighting conditions;
- Different backgrounds.

These samples can all be assigned to the same ID.

This allows students not only to complete a recognition task, but also to naturally understand an important AI concept:

**A category is not the same as a single image.**

They can also continue experimenting by observing whether recognition changes after adding more samples from different angles and environments. Compared with simply explaining the concept of “training data,” this observable and comparable process is easier to understand.

---

### **Get Results Quickly, Even in the First AI Lesson**

For beginner lessons, students often need to quickly build an intuitive understanding that visual input can directly affect robot behavior.

For example, a robot can stop when it sees red. For a task like this, requiring students to complete training, sampling, and saving before they can even begin may use up much of the first lesson.

AI Camera Pro supports two color-recognition modes:

- **Standard Color Recognition**: Recognizes common colors directly without prior training;
- **Learned Color Recognition**: Allows users to train custom color categories based on project needs.

This means the same feature can support both quick exploration and deeper learning.

In the first lesson, students can immediately see that “the camera recognizes a color, and the robot responds.” In more advanced lessons, they can continue learning about samples, categories, and training.

---

## **AI Features at a Glance**

AI Camera Pro is not simply about having “many features.” It supports a complete learning path from **AI introduction and model learning to robot control and interactive projects**.

### **Basic Visual Recognition**

Suitable for quickly starting AI beginner lessons and basic projects:

| Feature | What You Can Do |
|---|---|
| Color Recognition | Recognize common colors and learn custom colors |
| Ball Recognition | Recognize balls of specific colors and count them |
| Card Recognition | Recognize number cards, letter cards, traffic sign cards, and common object cards |
| Code Recognition | Recognize QR codes and barcodes |
| Object Recognition | Recognize common objects |
| Optical Character Recognition (OCR) | Recognize text within a specified area |

### **Self-Learning AI**

Helps students move from “using models” to “training models”:

| Feature | What You Can Do |
|---|---|
| Self-Learning Classification | Learn custom objects and create categories |
| Color Learning | Learn custom colors |
| Face Learning | Learn and recognize faces |
| Gesture Learning | Learn custom gestures |
| Object Tracking | Select a target and track it continuously |

### **Human and Interactive Recognition**

Suitable for interactive robots, creative projects, and classroom experiments:

| Feature | What You Can Do |
|---|---|
| Face Recognition | Learn faces and obtain blink and mouth-opening information |
| Expression Recognition | Recognize common facial expressions and count them |
| Gesture Recognition | Recognize custom gestures |
| Pose Recognition | Recognize human poses and keypoint information |

### **Robot Vision**

Designed to turn visual results into actual motion control:

| Feature | What You Can Do |
|---|---|
| Line Tracking | Track a single line in real time and obtain route offset information |
| Ball Recognition | Obtain target position, size, quantity, and other data |
| Object Tracking | Obtain target position and size |
| Visual Coordinate Output | Use recognition results for steering, following, and action control |

### **More Than Vision**

AI Camera Pro also includes a microphone and speaker, enabling sound-based interaction such as rhythm recognition.

This means projects do not have to stop at “what the robot sees.” They can also expand to “what the robot hears” and “how it responds.”

---

## **Typical Application Scenarios**

### **Let the Robot Truly “See” the Route**

Rotate the camera downward to detect the track, then control the left and right motors based on the line position.

Students can start with basic line detection and gradually learn:

- Image coordinates;
- Route deviation;
- Left/right steering control;
- Proportional control;
- PID.

The final result is no longer just a visual recognition output:

**Camera sees the route → Program makes a decision → Motors change behavior.**

AI vision becomes part of a complete robot control loop.

---

### **Teach the Robot to Recognize Different Objects**

Students can train the camera to recognize different objects such as apples, bottles, and building blocks.

They can collect samples of the same object from different directions and observe:

- What happens when only one angle is used for training;
- Whether recognition changes after adding multiple angles;
- Whether changing the background affects the result.

Students can directly observe how the quality of training samples affects recognition performance.

At this point, AI is no longer just a feature to call. It becomes a system that can be tested, compared, and improved.

---

### **Trigger Different Actions with Colors**

For beginner lessons, color is a simple place to start.

| Camera Sees | Robot Action |
|---|---|
| Red | Stop |
| Green | Move Forward |
| Blue | Turn Left |
| Yellow | Turn Right |

The project is simple, but it helps students clearly understand that:

**Visual input can directly affect robot behavior.**

---

### **Build a Robot with Visual Interaction**

Rotate the camera forward for face- and human-related projects.

For example:

- Display a welcome message when a face is detected;
- Trigger different actions when a blink or mouth opening is detected;
- Control robot steering with gestures;
- Play a sound when a target is detected.

The same camera can switch from “looking at the ground” to “looking at people” without redesigning the entire mounting structure.

---

### **Reduce Building and Debugging Work in Robotics Competitions**

In competition scenarios, the most limited resources are often not features, but:

**Space, time, and reliability.**

Every extra cable, power module, or fixed camera mount adds more building and debugging work.

With a rotatable camera, built-in battery, and Wi-Fi, AI Camera Pro keeps more of these requirements inside the camera itself, allowing teams to move earlier into route testing, program debugging, and full-system optimization.

---

## **Programming Support**

AI Camera Pro supports graphical programming with **MakeCode and MicroBlocks**, allowing AI recognition results to be used directly in robot control and interactive projects.

Using programming blocks, students can access data returned by different AI features, such as:

- Whether a target is detected;
- Target ID;
- X / Y center coordinates;
- Width and height;
- Confidence;
- Number of detected targets;
- Line-following offset angle and offset distance;
- QR code / barcode data;
- Human keypoints and pose information.

This allows students to use AI results directly in conditions, motion control, and interaction logic without starting from complex low-level vision algorithms.

For example:

**Red detected → Stop the motors**

**Face detected → Play a welcome message**

**Line shifts left → Adjust left and right motor speeds**

For beginners, block-based programming lowers the entry barrier. As students gain a better understanding of visual data, they can gradually explore more advanced control logic.

---

## **From the First AI Lesson to a Complete Robotics Project**

AI Camera Pro can support students as their skills progress.

![Learning Path](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/ai-lens-pro/ai-lens-pro-02.png)

### **Step 1: Sense Colors**

First understand: **A camera can collect information from the environment.**

### **Step 2: Follow a Route**

Then understand: **Visual results can participate in robot motion control.**

### **Step 3: Recognize Different Objects**

Begin to understand **categories, IDs, and recognition results.**

### **Step 4: Add Multiple Samples to the Same Category**

Explore the relationship between **training data and recognition performance.**

### **Step 5: Combine Motors, Sensors, and Vision**

Move from a single AI feature to a **complete robotics project.**

### **Step 6: Enter Competitions and Open-Ended Tasks**

Students begin to make their own decisions about:

- Where the camera should be mounted;
- Which direction the camera should face;
- How to improve recognition stability;
- How to coordinate visual results with motion control.

At this stage, AI Camera Pro is no longer just an independent recognition module. It becomes the robot’s visual input system — in other words, its **“eyes.”**

---

## **FAQ**

### **Can the camera face downward?**

Yes.

AI Camera Pro supports **180° rotation**. The camera can face forward for face and object recognition, or downward for line following, color recognition, and ground-target detection.

---

### **Does the lens support manual focus adjustment?**

No.

The current AI Camera Pro hardware does not support manual focus adjustment. For best results, select an appropriate mounting distance and viewing range for the specific recognition task.

---

### **Does the camera need to stay connected to a computer after it is mounted on a robot?**

No, not all the time.

AI Camera Pro includes built-in Wi-Fi and supports local-network file management, reducing the need to frequently connect a data cable during debugging.

---

### **Does the camera require an additional external power module?**

Not for the camera itself.

AI Camera Pro includes a built-in 800 mAh battery, allowing the camera to power itself and reducing additional power cabling in robotics projects.

---

### **Do I need to train the camera before using color recognition for the first time?**

Not necessarily.

Standard Color Recognition can be used directly. If custom colors are required, you can switch to Learned Color Recognition mode and train your own color categories.

---

### **Can the same object be learned from multiple angles?**

Yes.

The same ID can contain multiple samples. For example, the same apple can be sampled from the front, side, at different distances, and against different backgrounds. This helps students understand the value of diverse training samples.

---

### **Which programming platforms are supported?**

AI Camera Pro supports graphical programming with **MakeCode and MicroBlocks**.

Students can read recognition results through programming blocks and use them to control motors, displays, sound, and other robot modules.

---

### **Who Is AI Camera Pro Best Suited For?**

AI Camera Pro is especially suitable for:

- Students who are new to AI vision;
- Teachers who need to quickly launch classroom projects;
- Users who want to integrate vision into real robotics projects;
- Learners working on line following, object recognition, color recognition, and similar projects;
- Competition teams looking to reduce power, cabling, and mounting complexity.

If your goal is not simply to study a vision model, but to **make AI an active part of a robotics project**, that is exactly what AI Camera Pro is designed to support.
