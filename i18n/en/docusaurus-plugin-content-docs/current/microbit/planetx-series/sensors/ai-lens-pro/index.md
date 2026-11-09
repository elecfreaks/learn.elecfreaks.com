---
sidebar_position: 0
sidebar_label: AI Lens Pro
---

# AI Lens Pro

![AI Lens Pro](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/ai-lens-pro/ai-lens-pro-01.png)

## Learning Path

Prepare by reading Product Overview, Package Contents, Technical Specifications, Quick Start, and Software Library Guide. Then follow the projects below from introductory tasks to more advanced work. The six introductory pages use `sidebar_position: 0–5`, and projects begin at `6`. Lesson numbers in this table start at 1.

Younger learners can explore observation and recognition feedback with teacher guidance. Move on to data, states, and motion control after learning variables, conditions, and loops. Students with robot-building experience can tackle the integrated tasks in groups, dividing them across several lessons as needed.

| Lesson | Stage | Project | Core skills |
| --- | --- | --- | --- |
| 1 | Observation | [Camera Observation Diary](./camera.md) | Framing, photography, and changing one factor at a time |
| 2 | Observation | [Image Observation Exhibition](./photo-album.md) | Checking photos, recording conditions, and explaining observations |
| 3 | Recognition and feedback | [Expression Mirror](./facial-expression-recognition.md) | Frame refresh, Boolean conditions, and branching |
| 4 | Recognition and feedback | [Desktop Object Inspector](./object-recognition.md) | Categories, central target names, and counts |
| 5 | Recognition and feedback | [Text Command Display](./optical-character-recognition.md) | Reading strings, exact matching, and failure handling |
| 6 | Data and states | [Target Position Indicator](./object-tracking.md) | Target selection, coordinate ranges, and target loss |
| 7 | Data and states | [Model Classification Assistant](./self-learning-classification.md) | Category IDs, samples, confidence, and testing |
| 8 | Data and states | [Raised-Hand Counter](./pose-recognition.md) | Counting, state changes, and consecutive confirmation |
| 9 | Data and states | [Rhythm Flasher](./rhythm-detection.md) | Numeric conversion, timing, and task states |
| 10 | Motion control | [Traffic Card Command Car](./card-recognition.md) | Discrete instructions, Nezha2 combined wheel control, and stop branches |
| 11 | Motion control | [Gesture Command Car](./gesture-recognition.md) | Learning gestures, reusing combined wheel blocks, and stopping on command loss |
| 12 | Motion control | [Face-Tracking Pan-Tilt Camera](./face-detection.md) | Two-axis errors, stepped speeds, and travel limits |
| 13 | Motion control | [Color Sorting Station](./color-recognition.md) | Fixed-angle actions, task locking, and returning to start |
| 14 | Motion control | [Vision Line-Following Robot](./line-following.md) | Combining position and angle, steering values, and tuning |
| 15 | Integrated tasks | [Ball Search and Pickup Car](./ball-recognition.md) | Nezha ESP32 state machine, approach calibration, and gripping |
| 16 | Integrated tasks | [Wireless Observation Archive](./remote-file-management.md) | LAN access, file checks, and project archiving |

Each project's Learning Connections section identifies prior work, a transfer task, and the next lesson. Keep the same observation photos, program fragments, and parameter records so later projects build on earlier results.

Most programming projects use micro:bit and MakeCode; ball search and pickup uses Nezha ESP32 and MicroBlocks. Transfer ideas such as conditions, coordinate errors, and task states between platforms, then reconnect hardware and rebuild blocks according to each project. With one AI Lens Pro, switch recognition functions in stages, such as line following first, then stopping before switching to Ball Recognition.

An integrated challenge can follow this sequence: card or gesture command, line-following travel to the search area, ball search and pickup, confirmed classified placement, and project archiving. Validate each task before combining them. Projects with different controllers and mechanisms require program adaptation and recalibration; they cannot simply be joined and run unchanged.

## Documentation

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```
