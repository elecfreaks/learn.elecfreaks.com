---
sidebar_position: 21
sidebar_label: Remote File Management
---

# Case Study: AI Wireless Observation Archive

Export observation files over a local network and organize a project archive

## Introduction

How can you save observation photos to a computer? Use AI Lens Pro Wi-Fi and Remote File Management to access the device's file interface from the same local network, download photos, and organize shooting conditions and project notes.

Accessible folders, file types, and upload/download capabilities depend on your firmware's interface. First connect and export manually, then try the optional micro:bit Wi-Fi setup workflow.

<!-- Image placeholder: AI Lens Pro and computer transferring files over a LAN -->

## Learning Objectives

1. Understand the role of a device address on a local network.
2. Find the file management entry point on the device.
3. Download files and verify their content and count.
4. Organize originals, condition records, and project notes in a directory.

## Materials

| Item | Quantity | Image |
| --- | --- | --- |
| AI Lens Pro with saved observation photos | 1 | <!-- Image placeholder: AI Lens Pro --> |
| Computer with a browser | 1 | <!-- Image placeholder: computer --> |
| Wi-Fi network accessible to both devices | 1 | <!-- Image placeholder: local network --> |
| micro:bit, compatible IIC breakout board, and cables | Optional, 1 set | <!-- Image placeholder: optional controller --> |

## Hardware Connection

1. Power on AI Lens Pro and check its battery and storage space.
2. Connect the computer and camera to a local network that allows them to reach each other.
3. For optional programming, turn off the power before connecting the camera to the board's **IIC port**. Power on the camera before running the controller.
4. No external micro:bit is required if you configure Wi-Fi on the device directly.

<!-- Image placeholder: same-network connection and optional IIC wiring -->

## Software Setup

Open **Remote File Management** from the AI Lens Pro main menu. Follow the current interface to configure or confirm Wi-Fi. Record the actual access address it provides. If a QR code is available, follow the interface instructions to obtain the entry point.

Do not assume an IP address, port, password, or photo directory. Enter the complete address currently shown by the device. Recheck connections after computer sleep or network changes.

## Using the Features

### 1. Open the File Interface in a Browser

Enter the displayed address in the computer's browser. If it does not open, check both network connections, whether the address changed, and whether wireless client isolation is enabled. Sharing a Wi-Fi network name does not always guarantee communication between devices.

### 2. Locate and Download Files

Find the observation photos in the directories actually exposed by the interface. Download and open one file before exporting the rest. If the photo folder or download action is unavailable, check the features supported by your firmware.

### 3. Configure Wi-Fi with Blocks (Optional)

Add `planetX-AI` in MakeCode. Use **Connect AI Lens Pro to Wi-Fi SSID [Name] Password [Password]**, then check **Is AI Lens Pro Connected to Wi-Fi?**. Browsing and downloading still take place in the device's file management interface.

<!-- Image placeholder: device address, browser file list, and Wi-Fi blocks -->

## Example Activity: Export and Organize Observation Photos

### How It Works

Verify browser access and one download before exporting the full set. Create a project folder on the computer, retain originals, and keep the shooting record and conclusions together.

### Archive Structure

| Folder or file | Contents |
| --- | --- |
| Original Photos | Unmodified files downloaded from the device |
| Presentation Copies | Copies for cropping, captions, and layout |
| Shooting Record | Mapping from photos to distance, angle, and lighting |
| Project Notes | Materials, investigation question, steps, and conclusions |

### Steps

1. Open Remote File Management on the device, confirm the network, and record the current address.
2. Open the address in the computer's browser and find the experiment photos.
3. Download one photo and open it on the computer to verify its content.
4. Download the rest and record filenames and shooting conditions. If only individual downloads are supported, download them one by one.
5. Put files in Original Photos and copy them into Presentation Copies before editing.
6. Check the count and content, then add shooting records and project notes to complete the archive.

### Optional Program

To configure Wi-Fi through micro:bit, follow this block logic using your own network credentials:

```text
On start
    Initialize AI Lens Pro
    Switch to Remote File Management
    Connect to Wi-Fi (SSID, password)
    If AI Lens Pro Wi-Fi is connected
        Show tick
    Else
        Show cross
```

<!-- Image placeholder: wireless file workflow and optional MakeCode program -->
<!-- Program link placeholder: optional Wi-Fi configuration MakeCode share link -->

**Activity Notes:** A Wi-Fi status prompt does not replace checking actual browser access. Remove real network passwords before sharing a MakeCode project. Organize the archive on the computer; the device does not need to support renaming, bulk downloads, or creating folders.

## Save and Check

1. Open every downloaded photo on the computer and check its count, content, and matching record.
2. Close the browser and confirm that local files still open, proving they were saved to the computer.
3. Exit file management after backing up. If the interface offers an action to end the service, follow it.

## Demonstration

Access AI Lens Pro files from the computer over the local network, download the photos, and create an archive containing originals, presentation copies, and experiment records.

<!-- Video placeholder: networking, file access, downloads, and local verification -->

## Learning Connections

Complete the [Ball Search and Pickup Car](./ball-recognition.md) first.

Export the Camera Observation Diary and Photo Album images. On the computer, archive them alongside pickup test sheets, parameter records, and program copies to create a project that can be presented and retested.

Return to the [Learning Path](./index.md) to choose a project to test and improve again.

## Questions and Extensions

1. Why might an old address stop working after the device reconnects?
2. Does viewing a photo in the browser mean it is saved to the computer?
3. How can you check file integrity after an interrupted download?
4. Can your class use a shared folder structure and shooting record format to exchange results?
