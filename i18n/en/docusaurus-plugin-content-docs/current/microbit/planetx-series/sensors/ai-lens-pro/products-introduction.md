---
sidebar_position: 2
sidebar_label: Product Overview
---


# **AI Camera Pro**

> **Giving robots a pair of eyes that truly work.**
> 
> 

![AI Lens Pro Product Image](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/ai-lens-pro/ai-lens-pro-01.png)

## **Product Overview**

AI Camera Pro is an intelligent vision camera designed for **K12 AI education, robotics projects, and competition applications**.

In real projects, completing an AI vision task is far more than simply "recognizing a target": the lens needs to point in the right direction, the device needs stable power, the program needs to obtain recognition results quickly, and the robot must act on those results.

AI Camera Pro integrates a **180° flippable lens, a built-in battery, built-in Wi-Fi, and a rich set of on-device AI capabilities** into a single device. This lets students complete the full journey from "seeing" to "acting" faster, spending more time on programming, experimentation, and creation rather than repeatedly dealing with mounts, cables, and connection issues.


---

## **Why AI Camera Pro Is a Better Fit for Robotics Projects?**


### **Adjust the viewing angle without redesigning the robot structure**

Robotics projects often require switching between different viewing directions.

For example, the same robot car needs its lens facing forward when doing face recognition; after switching to a line-following task, the lens needs to look at the ground instead. If the lens direction is fixed, this often means redesigning the mount or adjusting the building-block structure.

AI Camera Pro supports **180° flip adjustment**, letting you quickly change the viewing direction based on the task:

- Facing forward, for face recognition, object recognition, and similar tasks;
- Facing downward, for line following, color recognition, or ground-target detection;
- Flexibly adjust the lens direction according to the robot's height and mounting method.

A single robot structure can therefore cover more lessons and projects. When switching tasks, you usually only need to adjust the lens, without rebuilding the entire vehicle.

**For the classroom, this means less time spent on structural adjustments, and more time actually devoted to programming and experimentation.**

---

### **Fewer cables and peripheral modules for a cleaner robot structure**

Once a camera is actually mounted on a robot, the power and connection method directly affect the building experience.

AI Camera Pro has a built-in battery and Wi-Fi. In supported scenarios, you can manage files over Wi-Fi, reducing the need to frequently plug and unplug data cables during debugging; the built-in battery lets the camera power itself independently, lowering reliance on extra power cables.

This brings several very practical benefits:

- The robot's movement is less constrained by cables;
- A cleaner structure makes mounting positions easier to plan;
- Fewer extra connections means fewer potential points of failure;
- File adjustments and project debugging become smoother.

Especially in space-constrained robots or competition projects, **one fewer cable set often means more room in the structure and an easier debugging process.**

---

### **When line-following, focus on the route you actually need to follow**

Vision-based line following looks simple, but on real tracks there are often adjacent lines, intersections, borders, shadows, or other dark areas at the same time.

When multiple candidate targets appear in the frame, recognition results can jump around, showing up as the robot drifting, turning incorrectly, or following the line unstably.

AI Camera Pro provides **single-line real-time tracking** for this scenario, letting the system focus more precisely on the target route it needs to follow.

For students, this means not only more stable recognition results, but also a much clearer, more predictable feedback the first time they build a line-following project.

Teachers can also devote more class time to core concepts such as deviation values, steering control, and PID, rather than repeatedly troubleshooting "why the robot suddenly veered off."

---

### **Learn the same object from more angles**

In the real world, objects never appear in front of a camera at exactly the same angle, distance, and background.

Take an "apple" for example: viewed from the front, the side, at a distance, or under different lighting, its visual features all change. If only a single sample is trained, students easily come to understand AI as "memorizing one picture."

AI Camera Pro supports **learning multiple samples under the same ID**. Students can collect for the same category:

- Front and side views;
- Different distances;
- Different lighting;
- Different backgrounds.

These samples can all be grouped under a single ID.

This way, students not only complete recognition tasks but also naturally grasp an important AI concept:

**One category is not the same as one image.**

They can go further and verify: after adding more samples from different angles and environments, whether recognition performance changes. Compared with directly lecturing on the concept of "training data," this observable, comparable approach is far easier to understand.

---

### **Get results fast even on a first encounter with AI**

For introductory courses, students usually first need to build an intuitive sense that "visual input can control a robot's behavior."

For example, make the robot stop when it sees red. For such a task, if students must first complete training, collection, and saving steps, the first class can easily burn its time on the preparation workflow.

AI Camera Pro's color recognition supports two modes:

- **Standard color recognition**: directly recognizes common colors with no prior training needed;
- **Learned color recognition**: customize and learn your own color categories as your project requires.

This means a single feature can cover both quick hands-on experience and in-depth learning at the same time.

In the first class, you can let students first see "the camera recognizes a color, and the robot responds immediately"; as they move into deeper lessons, they can go on to understand samples, categories, and the training process.

---

## **AI Capabilities at a Glance**

AI Camera Pro is not just about "having lots of features"—it covers the complete learning journey from **AI fundamentals and model training to robot control and interactive projects**.

### **Basic Vision Recognition**

Ideal for quickly running AI introductory courses and foundational projects:

|Feature|What it can do|
|---|---|
|Color recognition|Recognize common colors; colors can also be custom-learned|
|Ball recognition|Recognize balls of specific colors and count them|
|Card recognition|Recognize number, letter, traffic-sign, and common-object cards|
|Code recognition|Recognize QR codes and barcodes|
|Object recognition|Recognize common objects|
|Optical Character Recognition (OCR)|Recognize text within a specified region|

### **Self-Learning AI**

Let students move from "using a model" further into "training a model":

|Feature|What it can do|
|---|---|
|Self-learning classification|Learn custom objects and build classifications|
|Color learning|Learn custom colors|
|Face learning|Learn and recognize faces|
|Gesture learning|Learn custom gestures|
|Object tracking|Select a target and track it continuously|

### **Human & Interactive Recognition**

Ideal for interactive robots, creative projects, and classroom experiments:

|Feature|What it can do|
|---|---|
|Face recognition|Learn faces and obtain information such as blinking and mouth-opening|
|Expression recognition|Recognize common expressions and count them|
|Gesture recognition|Recognize custom gestures|
|Pose recognition|Recognize human poses and keypoint information|

### **Robot Vision**

Ideal for putting vision results to real use in motion control:

|Feature|What it can do|
|---|---|
|Line-following recognition|Single-line real-time tracking, obtaining route-offset information|
|Ball recognition|Obtain target position, size, count, and other data|
|Object tracking|Obtain target position and size|
|Vision coordinate output|Further use recognition results for steering, following, and action control|

### **More Than Just Vision**

AI Camera Pro also comes with a microphone and a speaker, supporting audio-interactive features such as rhythm recognition.

This means projects need not stop at "what it sees"—they can extend further to "what it hears and how it responds."

---

## **Typical Application Scenarios**

### **Let the robot truly "see" the route**

Flip the lens downward, recognize the track, then control the left and right motors based on the route position.

Students can start from the most basic "recognize the route" and learn step by step:

- Image coordinates;
- Route deviation;
- Left/right steering control;
- Proportional control;
- PID.

What they ultimately see is not just a vision-recognition result, but:

**The camera sees the route → the program makes a decision → the motors change their action.**

AI vision truly enters the robot control loop.

---

### **Let the robot learn to know different objects**

Let students separately learn different objects such as apples, bottles, and building blocks.

The same object can have samples collected from multiple directions, then observe:

- What happens when only one angle is learned;
- Whether recognition performance changes after adding multiple angles;
- Whether results differ after changing the background.

Students can directly see how "training-sample quality" affects recognition performance.

At this point, AI is no longer just a callable feature, but a system that can be experimented on, compared, and improved.

---

### **Trigger different actions with colors**

For introductory classes, you can start directly with colors.

|Camera sees|Robot action|
|---|---|
|Red|Stop|
|Green|Move forward|
|Blue|Turn left|
|Yellow|Turn right|

The project is simple, but students can very intuitively understand:

**Visual input can directly influence a robot's behavior.**

---

### **Build a robot with visual interaction capabilities**

Flip the lens to the front, and it can be used for face- and human-related projects.

For example:

- Display a welcome message on the screen after seeing a face;
- Trigger different actions after detecting a blink or mouth-opening;
- Control the robot to turn after recognizing a gesture;
- Play a sound after detecting a target.

The same camera, from "looking at the ground" to "looking at people," needs no redesign of the entire mounting structure.

---

### **Reduce building and debugging burden in robot competitions**

In competition scenarios, what is truly scarce is often not features, but:

**Space, time, and stability.**

Every extra cable, extra power module, or extra mounting bracket on the camera means additional building and debugging cost.

Through its flippable lens, built-in battery, and Wi-Fi, AI Camera Pro folds as many of these peripheral needs as possible into the camera itself, letting teams reach track testing, program debugging, and whole-machine optimization at an earlier stage.

---

## **Programming Support**

AI Camera Pro supports **MakeCode and MicroBlocks** graphical programming, letting AI recognition results be used directly for robot control and interactive projects.

Through blocks, students can read the data returned by different AI features, for example:

- Whether a target was recognized;
- Target ID;
- X / Y center coordinates;
- Width and height;
- Confidence;
- Number of targets;
- Line-following offset angle and offset distance;
- QR code / barcode data;
- Human body keypoints and pose information.

This means students don't need to start from complex low-level vision algorithms, but can instead use AI results directly for conditional logic, motion control, and interaction.

For example:

**Recognize red → stop the motors**

**Recognize a face → play a welcome voice**

**Line following drifts left → adjust the left and right motor speeds**

For beginners, block programming lowers the entry barrier; as students gradually understand vision data, they can go on to explore more complex control logic.

---

## **From the First AI Lesson to a Complete Robotics Project**

AI Camera Pro can deepen alongside students' growing abilities.

![Learning Path Diagram](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/ai-lens-pro/ai-lens-pro-02.png)

### **Step 1: Perceive colors**

First understand: **the camera can obtain information from the environment.**

### **Step 2: Move along a route**

Understand further: **vision results can take part in robot motion control.**

### **Step 3: Learn to know different objects**

Begin to understand **categories, IDs, and recognition results.**

### **Step 4: Add multiple samples for the same category**

Gain further exposure to the relationship between **training data and recognition performance.**

### **Step 5: Combine motors, sensors, and vision**

Move from a single AI feature into a **complete robotics project.**

### **Step 6: Enter competitions and open-ended tasks**

Students must figure out on their own:

- Where the camera should be mounted;
- Which direction the lens should observe;
- How to improve recognition stability;
- How to make vision results work together with motion control.

At this stage, the AI camera is no longer just a standalone recognition module, but truly becomes the vision input of the robot system—in other words, the robot's "pair of eyes."

---

## **FAQ**

### **Can the lens look downward?**

Yes.

AI Camera Pro supports **180° flipping**. You can point the lens forward for face, object, and other recognition, or point it downward for line following, color recognition, and ground-target detection.

---

### **Does the lens support manual focus?**

No.

The current hardware of AI Camera Pro does not support manual focus; when using it, choose a suitable mounting distance and field of view based on your specific recognition task.

---

### **After mounting it on a car, does it still need to stay connected to a computer?**

It doesn't need a constant connection.

AI Camera Pro has built-in Wi-Fi and supports LAN file management, reducing the need to frequently connect a data cable during debugging.

---

### **Does the camera need an additional independent power source?**

The camera body does not.

AI Camera Pro has a built-in 800 mAh battery that can power the camera independently, reducing the extra power cables in robotics projects.

---

### **On first using color recognition, do I have to train it first?**

Not necessarily.

Standard color recognition can be used directly; if you need to recognize custom colors, you can switch to learned-color mode for training.

---

### **Can the same object learn multiple angles?**

Yes.

The same ID can learn multiple samples. For example, a single apple can have samples collected from the front, side, different distances, and different backgrounds, letting students more intuitively understand the meaning of "diverse training samples."

---

### **Which programming platforms are supported?**

AI Camera Pro supports **MakeCode and MicroBlocks** graphical programming.

Students can read recognition results through blocks and further control motors, the screen, sound, and other robot modules.

---

### **What kind of users is this camera best suited for?**

AI Camera Pro is especially well suited for:

- Students encountering AI vision for the first time;
- Teachers who need to run classroom projects quickly;
- Users who want to genuinely add vision capabilities to robotics projects;
- Learners working on line-following, object recognition, color recognition, and similar projects;
- Competition teams looking to reduce the complexity of power, cabling, and mounting.

If your goal isn't to study a vision model on its own, but rather **to have AI truly take part in robotics projects**, this is exactly the problem AI Camera Pro is built to solve.
