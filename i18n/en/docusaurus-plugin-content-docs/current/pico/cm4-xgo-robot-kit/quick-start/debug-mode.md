---
sidebar_position: 6
sidebar_label: Debug Mode
---

# Debug Mode

 ## 1. Remove the back cover

Remove the six screws at the top, left and right sides and tail.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/pico/cm4-xgo-robot-kit/images/cm4-xgo-debug-01.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/pico/cm4-xgo-robot-kit/images/cm4-xgo-debug-02.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/pico/cm4-xgo-robot-kit/images/cm4-xgo-debug-03.png)

At this point the back cover can be picked up, taking care not to disconnect the switch wires.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/pico/cm4-xgo-robot-kit/images/cm4-xgo-debug-04.png)



 ## 2. Confirm the serial port number
Leave the xgo robot on, then plug in the TYPE-C cable and connect the xgo to the computer.
Open the device manager on the computer (search in the box at the bottom of the taskbar to open it directly)
You will see the device name USB-SERIAL CH340 in the port section, COM4 is the serial port number

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/pico/cm4-xgo-robot-kit/images/cm4-xgo-debug-05.png)



 ## 3. Writing code for debugging

```python
import xgolib
xgo = xgolib.XGO("COM4", 115200)
```

Pass in the port number determined above when instantiating the object.

 ## 4. Shut down

The Type-C cable needs to be removed before switching off the machine, and then power off the xgo.
