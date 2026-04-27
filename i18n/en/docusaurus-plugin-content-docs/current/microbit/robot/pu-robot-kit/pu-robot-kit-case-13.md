---
sidebar_position: 22
sidebar_label: Case 13:Don’t Hit the Wall – Ultrasonic Precision Parking Challenge
---

# Case 13: Don’t Hit the Wall – Ultrasonic Precision Parking Challenge

## Case Introduction

Over the previous 12 lessons, we mastered all abilities of the PU Robot: walking, dancing, singing, lighting effects, distance sensing, emotional expression... Now, it’s time for a real **robot competition!**

The rules are simple: place a "wall" (obstacle) at the end of the track. All robots start from the same line, **walk straight toward the wall, and stop before hitting it**. The robot that stops **closest to the wall without touching it wins!**

It sounds easy, but achieving "close but no collision" requires precise control of ultrasonic distance detection, walking speed, and stopping timing – this is the core challenge of today’s lesson. Students will comprehensively use the ultrasonic sensor, movement module, loop module, and variable module to write a "precision parking" program. Through multiple rounds of competition and continuous parameter tuning, they will experience the fun of engineering optimization in a competitive environment.

## Teaching Preparation

| Name | Image/Description |
| :---: | :--- |
| PU Robot Kit | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/robot/pu-robot/pu-robot-01.png) |
| Programming Device (Computer) | One per group |
| Competition Track | Flat area ≥ 1m wide × 2m long, marked with a starting line tape |
| "Wall" (Obstacle) | Hard, flat cardboard/wood panel taller than the robot, covering the track width |
| Tape Measure | For measuring final parking distance (accurate to mm) |
| Timer | For recording group completion time |
| Printed "Score Sheet" (one per group) |  |
| Prizes/Certificates | For 1st/2nd/3rd place (optional) |

## PU Robot Biped Walking Features Review

| Feature | Description | Impact on Parking Challenge |
|:---:|:---|:---|
| Walking Method | 6-DOF servo-driven biped alternating steps | Must land fully after each step; cannot "hover mid-step" |
| Stopping Mechanism | Servos stop → hold standing posture | Fast response, no gliding, but cannot interrupt mid-gait |
| Adjustable Speed | Controlled by step size (movement range) and step frequency (loop delay) | Small steps → shorter per-step distance → easier precision, but slower |

> **Teacher Tip**: The PU Robot is an OTTO-style biped robot, not a wheeled car. Wheeled cars have "brake inertia" – they slide after stopping. Biped robots **have no gliding inertia** – they stop instantly when servos cut out. The real parking challenge for bipeds is **gait timing**: you can’t control "half-steps", only "stop after finishing the current step".

## Competition Rules

### Basic Rules

| Item | Description |
|:---:|:---|
| Goal | Robot starts at the line, walks straight, stops before the wall. **Closest without touching wins** |
| Track | Flat ground, starting line ~1.5m from the wall (adjustable for space) |
| Start | Press button A to launch; robot moves automatically |
| Valid Score | Shortest sensor-to-wall distance **without touching the wall** |
| Foul | Robot hits the wall = foul, score invalid for that round |
| Rounds | 2 practice rounds + 1 official round (adjust for time/engagement) |

### Scoring Rules

| Result | Score |
|:---:|:---:|
| ≤ 1cm (no contact) | ⭐⭐⭐ Perfect Score |
| 1cm < distance ≤ 3cm | ⭐⭐ Excellent |
| 3cm < distance ≤ 5cm | ⭐ Good |
| 5cm < distance ≤ 10cm | Pass |
| > 10cm | Too far, keep trying |
| Hit wall | Foul, 0 points |

**Tiebreaker**: If two robots park at the exact same distance, the **fastest-stopping robot** wins.

## Course Objectives

1. Comprehensively use ultrasonic sensors, movement, loops, and variables to write a **precision parking program**;
2. Experience the full engineering tuning cycle: test → analyze → modify → re-test, building scientific thinking;
3. Develop sportsmanship and teamwork skills.

## Course Introduction

Class, today is not a lesson – it’s a **competition!**

One rule only: **Make your robot walk to the wall, stop, get as close as possible – but NEVER hit it!**

You might think it’s easy – "Just walk until you see the wall and stop!" But think: between the robot receiving the "stop" command and actually stopping, there’s a process – like when you run and hear a whistle, your body keeps moving forward. That "forward drift" is the robot’s **braking buffer**.

The real challenge is: you must send the stop command **before** the robot reaches the wall, leaving a buffer. Too much buffer = too far (lose). Too little = crash (foul).

What’s the "perfect" buffer? No answer – you and your robot must find it!

## Learning Exploration

### Phase 1: Analyze the Challenge – Why Biped Parking Is Hard

1. **Discussion: Biped vs Wheeled – What’s the Difference?**

   | | Wheeled Car | Biped OTTO Robot |
   |:---|:---|:---|
   | Movement | Continuous wheel rolling | Alternating biped steps |
   | Stopping | Motor stops, friction decelerates | Servos stop, instant stand |
   | Gliding? | Yes, wheel inertia slides | **No**, stops immediately |
   | Parking Challenge | Brake timing (glide buffer) | **Gait timing** (uncontrollable final step) |
   | Consistency | Stable | **Random small errors** |

   - **Core Conclusion**: Bipeds don’t have gliding, but they have a unique issue – **you cannot precisely control step distance**. The same "forward" command may vary ±0.5cm per step.

2. **Parking Timing Analysis**:

**Key Discovery**: Error depends on when the stop command triggers in the gait cycle:
- Trigger at step start → full extra step → large error
- Trigger at step end → tiny extra movement → small error
- **This is random and uncontrollable!**

3. **Error-Reduction Strategies**:

| Strategy | Principle | Effect |
|:---:|:---|:---|
| Small Step Size | Shorter steps = smaller error even if extra step | ⭐⭐⭐ Most effective |
| Low Step Frequency | Longer intervals = more sensor detection chances | ⭐⭐ Effective |
| High Detection Rate | Shorter loop delay = faster stop trigger | ⭐⭐ Effective |
| Multiple Attempts | Run multiple rounds, pick best result | ⭐ Temporary fix |

## MakeCode Programming

### Basic Precision Parking Program
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/robot/pu-robot/pu-robot-case-12-01.png)

Program Link: [https://makecode.microbit.org/_TRMWvyP1AXsM](https://makecode.microbit.org/_TRMWvyP1AXsM)

**This is a basic example – you can optimize performance with advanced coding!**

### Phase 4: Official Competition

12. **Pre-Competition Prep**:
 - Groups confirm final parameters (most stable from practice)
 - Place robots behind the starting line, facing the wall, aligned straight
 - Judge (teacher) confirms equal starting-line-to-wall distance

13. **Official Round Flow (3 attempts per group)**:

Judge: "Ready" → Groups set robots

Judge: "3, 2, 1, GO!" → All press A simultaneously

Robots walk forward... (class cheers)

Robot stops (or crashes)

Judge measures: robot head → wall (mm precision)

Score recorded → Next group



**Post-Match Analysis**:
- Announce rankings and award certificates
- **Champion Share**: What parking threshold and step size did you use? What was your key tuning discovery?
- **Foul Group Reflection**: Why did you crash? What parameter would you change?
- **Class Discussion**: Why do the same parameters sometimes work well and sometimes poorly?

## After-Class Extension

- **Challenge 1: "Continuous Parking Master"** – After parking, automatically back up to start, then park again. 3 consecutive parks ≤ 3cm = "Master Level"! Tip: Use fixed delays for backward movement;

- **Challenge 2: "Distance Keeper"** – Robot follows an obstacle at a fixed 5cm distance. Obstacle moves forward → robot follows; stops → robot stops; backs up → robot backs up. Tip: If distance >5cm → forward; <5cm → backward; =5cm → stop;
