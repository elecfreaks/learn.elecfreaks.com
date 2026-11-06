---
title: Ball Recognition
sidebar_position: 20
sidebar_label: Ball Recognition
---

# Case Study: AI Ball Search and Pickup Car

Build a Nezha ESP32 car that finds a ball, approaches it, and closes a gripper to pick it up

## Introduction

How can a robot find a ball on the floor and grip it? Build a car with a **Nezha ESP32 controller**, three smart motors, and a gripper. AI Lens Pro reports the ball's position and size; the controller operates the wheels and gripper.

The car first turns slowly to search, then aligns itself and approaches. When the ball enters the calibrated pickup position, the car stops, confirms the position across consecutive frames, and closes the gripper. It stays stopped after the action so students can check whether the ball was actually gripped.

<!-- Image placeholder: completed Nezha ESP32 ball search and pickup car -->

## Learning Objectives

1. Check whether an image contains a ball.
2. Read a selected target's X position and size.
3. Use differential wheel speeds to search, align, and approach, then operate a gripper.
4. Organize multiple actions with task states and distinguish action completion from successful pickup.
5. Calibrate and repeat tests to adjust the stopping threshold, gripper travel, and target-loss handling.

## Materials

| Item | Quantity | Image |
| --- | --- | --- |
| AI Lens Pro | 1 | <!-- Image placeholder: AI Lens Pro --> |
| Nezha ESP32 controller | 1 | <!-- Image placeholder: Nezha ESP32 --> |
| Compatible PlanetX Smart Brick Motors | 3 | <!-- Image placeholder: wheel and gripper motors --> |
| Wheels, support wheel, chassis, and camera mount | 1 set | <!-- Image placeholder: chassis --> |
| Motor-driven gripper and transmission | 1 set | <!-- Image placeholder: gripper --> |
| RJ11 cables and USB Type-C data cable | As required | <!-- Image placeholder: cables --> |
| Supplied red or blue sponge ball | 1 | <!-- Image placeholder: sponge ball --> |
| Flat, open testing area | 1 | <!-- Image placeholder: testing area --> |

## Hardware Connection

1. Turn off the power. Build a two-wheel differential-drive chassis and secure Nezha ESP32 near its center.
2. Connect the camera and three smart motors according to the table. Mount the gripper centrally at the front, with its opening facing forward.
3. Mount AI Lens Pro above the gripper, tilted slightly downward. Keep the ball visible at the gripper entrance during approach.
4. Adjust the gripper height and opening so the ball can enter between its fingers. Use a self-locking transmission that holds position after its motor stops.
5. Power on the camera and wait for its main menu before starting the controller project.

| Module | Controller port | Purpose |
| --- | --- | --- |
| AI Lens Pro | Blue IIC port | Read ball recognition results |
| Left wheel smart motor | M1 | Control left wheel speed |
| Right wheel smart motor | M2 | Control right wheel speed |
| Gripper smart motor | M3 | Open and close at calibrated angles |

<!-- Image placeholder: Nezha ESP32 IIC, M1, M2, M3 wiring and gripper mounting -->

**Note:** This design uses smart motors with angle feedback. An ordinary DC motor cannot directly replace the gripper motor. Raise the wheels to check directions first, then test gripper travel slowly. Leave clearance at the closed position so the motor does not keep pushing against a mechanical stop. Keep fingers away from the gripper during testing.

## Software Setup

Use **MicroBlocks** for this project. For connection, firmware, and project storage, see the [Nezha ESP32 guide](../../../../esp32/nezha-for-esp32-board.md).

1. Open [MicroBlocks](https://microblocksfun.cn/run/microblocks.html) and create a “Ball Search and Pickup” project.
2. Connect the computer to Nezha ESP32 with a USB Type-C data cable and select the device in the platform.
3. In Add Library, find Elecfreaks **Nezha ESP32 onboard sensor and motion control** blocks and the PlanetX **AI Lens Pro** library.
4. Check that the installed libraries provide frame refresh, ball detection, target X and size, M1–M3 speed control, M3 angle control, and angle feedback.
5. Test ball data reading, low-speed wheel movement, and gripper opening/closing separately before combining them.

**Library Availability:** The current [Software Library Guide](./library-documentation.md) marks the AI Lens Pro MicroBlocks library as “Coming Soon.” The following is teaching logic; block names and menus depend on the installed version. If the library is unavailable, obtain a compatible version before building and testing the program on hardware.

<!-- Image placeholder: connecting Nezha ESP32 and adding camera/motion libraries -->

## Using the Blocks

### 1. Check Whether a Ball Is Present

Initialize the camera and switch to **Ball Recognition**. Refresh a frame before checking for any ball. If none is detected, do not use target coordinates to move forward or trigger pickup.

### 2. Read Ball Position and Size

Use **Get X Position/Size of Largest Ball in Image**. “Largest” selects by horizontal pixel width, whereas “Size” reports the selected ball's vertical pixel span. These are different measurements.

For 640 × 480 coordinates, start with a horizontal center of X = 320 and an alignment range of 280–360. Check the actual scale returned by your library. If the gripper center does not match the image center, adjust the range around the measured pickup center **Cx**.

Place a ball inside the open gripper where it can be held, then record its X position and image size to calibrate pickup. The example starts with **Cx = 320, T = 120 px**, and a ready-position size range of **T to T + 20 px**. Adjust all of these values for the actual mechanism.

**Note:** Detecting any ball and then reading the largest target keeps detection and selection consistent. When several colors appear together, detecting a red ball does not guarantee that the largest target you read is red.

<!-- Image placeholder: ball detection, largest target X, and size blocks -->

### 3. Control Wheels and Gripper

Use M1 for the left wheel and M2 for the right, with speed control for movement and turning. Motors may be mounted as mirror images. Define positive speed as forward wheel movement, then correct each direction inside custom blocks.

Use angle control for M3. Position the gripper open and record **Open Angle** using the library's angle reference. Tune slowly and record **Closed Angle**. Both must use the same reference; do not mix relative rotation and absolute position. Check the actual position before restarting.

### 4. Display Status and Read Buttons

Update the controller screen with state, X, size, and M3 angle. Assign **A to start, B to stop, and C to open the gripper and reset**. These are project inputs and should be distinguished from system-menu controls.

<!-- Image placeholder: speed, angle feedback, screen, and button blocks -->

## Example Program: Search, Approach, and Grip

### How It Works

Use Ready, Search/Approach, Confirm Position, Closing, Await Check, Stopped, and Opening states. Manage them in one main loop and send a close command only when entering Closing, avoiding repeated tightening commands.

Complete one pickup action and stop for student inspection. The basic task does not automatically transport or release the ball, or start another search.

### Speed Settings

| Condition | Left wheel | Right wheel | Action |
| --- | ---: | ---: | --- |
| No target detected | 12% | -12% | Turn right in place; at most 20 consecutive search loops |
| X below Cx - 40 and not too close | 0% | 15% | Align left |
| X above Cx + 40 and not too close | 15% | 0% | Align right |
| Aligned and size below T | 12% | 12% | Approach slowly |
| Aligned and size from T to T + 20 | 0% | 0% | Stop and confirm position |
| Size above T + 20 | 0% | 0% | Stop and request repositioning |
| Closing, Await Check, Stopped, or Opening | 0% | 0% | Keep wheels stopped |

| Gripper parameter | Initial setting | Tuning method |
| --- | --- | --- |
| Open Angle and Closed Angle | Calibrate on the mechanism | Admit the ball when open; hold the sponge ball without pushing against stops when closed |
| M3 speed | 10% | Start slowly and adjust for the load |
| Angle arrival tolerance | ±5° | Adjust for feedback precision; require three consecutive loops |
| Action wait limit | 3000 ms | Adjust for measured travel time; stop M3 on timeout |

### Build the Program

Create **State**, **X**, **Size**, **Lost Count**, **Position Count**, **Arrival Count**, **Action Start**, **Cx**, **T**, **Open Angle**, and **Closed Angle**.

Create custom blocks for setting wheel speeds, stopping all motors, opening the gripper, and closing it. Map the following logic to your installed library. Send the gripper target and poll its angle; avoid long blocking waits that prevent the main loop from running.

```text
On start
    Initialize AI Lens Pro
    Switch to Ball Recognition
    Set Cx = 320, T = 120 (adjust after calibration)
    Set Open Angle and Closed Angle to their calibrated values
    Set Lost Count = 0, Position Count = 0, Arrival Count = 0
    Stop M1, M2, M3
    Set State = Stopped
    Display "Press C to open and reset"

Forever
    If button B press event detected
        Stop M1, M2, M3
        Set State = Stopped
    Else if button C press event detected and (State = Stopped or Await Check)
        Stop M1 and M2
        Send M3 Open Angle target at 10% speed (once only)
        Set Arrival Count = 0, Action Start = current time
        Set State = Opening
    Else if button A press event detected and State = Ready
        Set Lost Count = 0, Position Count = 0
        Set State = Search/Approach

    If State = Search/Approach or Confirm Position
        Capture a frame from AI Lens Pro
        If image contains any ball
            Set Lost Count = 0
            Set X = largest ball X position
            Set Size = largest ball size
            If Size > T + 20
                Stop all motors; set State = Stopped
                Display "Too close; reposition the ball"
            Else if X < Cx - 40
                Set Position Count = 0, State = Search/Approach
                Set left wheel to 0%, right wheel to 15%
            Else if X > Cx + 40
                Set Position Count = 0, State = Search/Approach
                Set left wheel to 15%, right wheel to 0%
            Else if Size < T
                Set Position Count = 0, State = Search/Approach
                Set both wheel speeds to 12%
            Else
                Stop both wheels; set State = Confirm Position
                Increase Position Count by 1
                If Position Count ≥ 3
                    Send M3 Closed Angle target at 10% speed (once only)
                    Set Arrival Count = 0, Action Start = current time
                    Set State = Closing
        Else
            Set Position Count = 0, State = Search/Approach
            Increase Lost Count by 1
            If Lost Count ≤ 20
                Set left wheel to 12%, right wheel to -12%
            Else
                Stop all motors; set State = Stopped

    Else if State = Closing or Opening
        Stop M1 and M2
        Set Target Angle to Closed Angle or Open Angle for the current state
        Read current M3 angle
        If absolute difference between current and Target Angle ≤ 5°
            Increase Arrival Count by 1
        Else
            Set Arrival Count = 0
        If Arrival Count ≥ 3
            Stop M3 (self-locking gripper holds its position)
            If State = Opening
                Set State = Ready
            Else
                Set State = Await Check
                Display "Grip action complete; check the ball"
        Else if current time - Action Start > 3000 ms
            Stop all motors; set State = Stopped
            Display "Gripper not in position; check travel"
    Else
        Stop M1 and M2

    Update screen with State, X, Size, and M3 angle
    Pause 100 ms
```

<!-- Image placeholder: complete Nezha ESP32 ball search and pickup MicroBlocks program -->
<!-- Program file placeholder: hardware-verified MicroBlocks project and share link -->

**Program Notes:** Searching stops after 20 consecutive loops without detecting a target. Position and gripper arrival both require three-loop confirmation. Angle arrival establishes action completion, not that the ball is held. For automatic success detection, consider a touch sensor or gripper-opening feedback as an extension.

Image size estimates proximity; it does not directly give centimeters. If the ball is hidden before entering the gripper, adjust the camera and gripper geometry and recalibrate. Never use target loss alone as the close condition. B is checked at the start of each loop; response also depends on camera communication and motor-command duration.

## Run and Save the Program

1. Connect Nezha ESP32 with a USB Type-C data cable, connect through MicroBlocks, and save the computer-side project.
2. Raise the wheels and check forward, left, right, and B-stop behavior. Separately calibrate M3 opening/closing angles and the action timeout.
3. Place the car on an open floor. Press C to open and reset, place one sponge ball ahead, and press A.
4. Check alignment, stopping, and closing. Inspect the actual grip, then press C to release and reset. Press B to stop during an action.
5. Use **Save As** in the controller's program management page to keep the program. After restarting, select and run the saved project following the controller guide; check the gripper position again before testing.

### Step-by-Step Verification

| Test | Expected observation | What to record |
| --- | --- | --- |
| Place ball left, center, and right | Align first, then approach slowly | Correct turning direction |
| Place ball at calibrated pickup position | Wheels stop; closing starts only after confirmation | X, size, and stopping error |
| Remove ball during approach or confirmation | No closing; limited search begins | Any false closing action |
| Gripper cannot reach target within the wait limit | M3 stops and a check prompt appears | Angle, elapsed time, and mechanism problem |
| Repeat pickup five times | Inspect actual grip each time | Success count and failure causes |

## Demonstration

After C resets the gripper and A starts the task, the car searches, aligns, and approaches the calibrated position. It stops to confirm before closing. It remains stopped and prompts inspection after the action. Persistent target loss or a gripper timeout also stops the task.

<!-- Video placeholder: searching, alignment, stopping, gripping, and release/reset -->

## Learning Connections

Complete the [Vision Line-Following Robot](./line-following.md) first.

Combine differential steering, coordinate alignment, repeated confirmation, and sorting-mechanism states. Complete single-ball pickup first, then try staged line following, pickup, and sorting. Record five trial results.

Next lesson: [Wireless Observation Archive](./remote-file-management.md).

## Questions and Extensions

1. Why align and confirm a stationary ball before closing the gripper?
2. Do different ball diameters produce the same image size at the same distance?
3. Why might reaching the closed angle still fail to grip the ball?
4. How could you adapt the [Color Sorting Station](./color-recognition.md) task states for classified placement after pickup?
5. Combine [Vision Line Following](./line-following.md) with a staged mission: follow the line to the search area, stop and switch to Ball Recognition, grip the ball, then return after button confirmation.
