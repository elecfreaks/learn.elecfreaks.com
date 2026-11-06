---
sidebar_position: 6
sidebar_label: Camera
---

# Case Study: AI Camera Observation Diary

Use one camera to record how an object looks under different conditions

## Introduction

How does the same model look close up, farther away, in bright light, or in shadow? In this project, use the AI Lens Pro camera to take a set of observation photos of one object, then compare them in the photo album.

The diary also prepares you for AI learning: first understand how images change, then consider why a recognition system needs samples from different angles and environments.

<!-- Image placeholder: observation setup and photo comparisons -->

## Learning Objectives

1. Learn to frame a subject, take a photo, and save it.
2. Keep conditions consistent and change one factor at a time.
3. Observe how distance, angle, and lighting affect an image.
4. Organize experimental results with photos and a record sheet.

## Materials

| Item | Quantity | Image |
| --- | --- | --- |
| AI Lens Pro | 1 | <!-- Image placeholder: AI Lens Pro --> |
| Model or other still object | 1 | <!-- Image placeholder: subject --> |
| Camera stand, background paper, and ruler | 1 set | <!-- Image placeholder: observation station --> |
| Observation record sheet | 1 | <!-- Image placeholder: record sheet --> |
| Supported storage media | As required for saving | <!-- Image placeholder: storage media --> |

## Hardware Connection

1. Charge AI Lens Pro and secure it to a stand.
2. Check available storage according to the device's saving requirements. If a TF card is required, turn off the device before inserting a supported card, then power it on.
3. Place the object in front of the background paper. Adjust the camera so the entire subject is visible.
4. Operate the camera directly for this project; an external micro:bit or IIC cable is not required.

<!-- Image placeholder: camera mounting, subject, and distance markers -->

## Software Setup

Power on AI Lens Pro and open **Camera** from the main menu. This project uses the device's camera and photo album functions; MakeCode is not required.

Use the capture controls, button assignments, and save messages shown by your firmware. Take a test photo and confirm that it appears in the album before starting the observation record.

## Using the Features

### 1. Observe the Live View

Keep the camera fixed and move the object. Observe its position and size in the frame. AI Lens Pro does not support manual focus adjustment, so adjust the shooting distance to obtain a suitable view.

### 2. Take a Photo and Confirm It Was Saved

Use the capture action provided by the camera interface. Wait for the save message, then open the [photo album](./photo-album.md) to check the new photo. Record the photo order or the displayed filename rather than assuming a naming convention.

<!-- Image placeholder: live view, capture control, and save message -->

## Example Activity: Create a Set of Observation Photos

### How It Works

Choose one object and take a reference photo. Then change distance, angle, and lighting separately. Record the conditions for every photo so you can compare them later.

### Photo Settings

| Photo | Changed condition | Conditions kept the same | What to observe |
| --- | --- | --- | --- |
| 1 | None; reference image | Front view, even lighting, fixed distance | Outline and color |
| 2 | Increase the distance | Camera position, object orientation, lighting | Proportion of the frame occupied by the subject |
| 3 | Turn the object sideways | Reference distance and lighting | Appearance and visible details |
| 4 | Use dimmer lighting | Reference distance and front view | Brightness and detail |

### Steps

1. Mark the camera and object positions on the table. Record the reference distance and take photo 1.
2. Move the object farther back, record the new distance, and take photo 2.
3. Return the object to its reference position. Change only its orientation and take photo 3.
4. Restore the front view. Change only the lighting and take photo 4.
5. Open the album and check each photo against your notes. Retake photos if necessary.

<!-- Image placeholder: four shooting conditions and their photos -->

**Activity Notes:** Changing only one factor at a time makes differences easier to explain. This activity saves observation photos; it does not automatically add them to another recognition function's training data. Collect learning samples through that function's learning workflow.

## Save and Check

1. Confirm that all four photos open in the album.
2. Record the photo order, shooting conditions, and observations on your sheet.
3. To export files, see [Remote File Management](./remote-file-management.md) and use the file access options available on your device.

## Demonstration

Create a set of images of the same object. Compare changes in apparent size with distance, changes in outline with angle, and changes in detail with lighting.

<!-- Video placeholder: framing, capturing, saving, and checking the album -->

## Learning Connections

Start with [Quick Start](./quick-start.md) to learn how to power on and operate the device.

Take four photos of one object at different distances, angles, and lighting levels. Keep the condition records for the next lesson's exhibition.

Next lesson: [Image Observation Exhibition](./photo-album.md).

## Questions and Extensions

1. Why should lighting and orientation stay the same when comparing the effect of distance?
2. Which changes most strongly affect the object's color and outline?
3. Which conditions would you choose when teaching the camera to recognize this object?
4. Can you photograph similar objects and compare their most distinctive details?
