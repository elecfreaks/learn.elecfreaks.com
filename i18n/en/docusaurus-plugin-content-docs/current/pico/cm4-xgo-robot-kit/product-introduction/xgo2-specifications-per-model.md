---
sidebar_position: 1
sidebar_label: XGO Specifications per Model
---

# XGO Specifications per Model

XGO Series Product Function Comparison:

| **Parameter** | **XGO-lite2** | **XGO-mini2** | **CM5-XGO-Robot** | **CM5-XGO-Mini-Robot** |
|:---:|:---:|:---:|:---:|:---:|
| Host Controller | Raspberry Pi CM4 2GB | Raspberry Pi CM4 4GB | Raspberry Pi CM5 2GB | Raspberry Pi CM5 4GB |
| Programming Environment | Python / Blockly | Python / Blockly | Python / Blockly | Python / Blockly |
| Structural Material | 1mm Aluminum Alloy | 1.5mm Aluminum Alloy | 1mm Aluminum Alloy | 1.5mm Aluminum Alloy |
| Overall Dimensions (Standard Stance) | 250×145×170mm | 270×150×180mm | 250×145×170mm | 270×150×180mm |
| Overall Weight | 575g | 915g | 575g | 915g |
| Robot Servo Joint | 6V 2.3kg.cm Plastic Case Metal Gear 300° Dual-axis TTL Serial Servo | 6V 4.5kg.cm Metal Case Steel Gear 360° Magnetic Encoding Dual-axis TTL Serial Servo | 6V 2.3kg.cm Plastic Case Metal Gear 300° Dual-axis TTL Serial Servo | 6V 4.5kg.cm Metal Case Steel Gear 360° Magnetic Encoding Dual-axis TTL Serial Servo |
| Leg & Foot Material | ABS | Silicone + ABS | ABS | Silicone + ABS |
| Slave Controller | ESP32 | ESP32 | ESP32 | ESP32 |
| Battery | 18650 2S 2500mAh | 18650 2S 3500mAh | 18650 2S 2500mAh | 18650 2S 3500mAh |
| Charger | 8.4V 1A | 8.4V 1A | 8.4V 1A | 8.4V 1A |
| Battery Life | 2 Hours (Mixed Working Condition) | 1 Hour (Mixed Working Condition) | 2 Hours (Mixed Working Condition) | 1 Hour (Mixed Working Condition) |
| Display | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-robot-kit/images/cm4-xgo-index.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-robot-kit/images/cm4-xgo-mini-index.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-robot-kit/images/cm4-xgo-index.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-robot-kit/images/cm4-xgo-mini-index.png) |

Both servo motors use TTL bus communication, and both have similar communication parameters (in the current version). However, the mini servo has a larger angular control range and more control modes due to the difference in encoder type.  The core benefits of the mini servos are higher power motors with higher resolution encoders combined with more robust gears and housing to provide better motion control, which includes speed, accuracy, and load characteristics. A few intuitive benefits of the servos in XGO-mini compared to the servos in XGO-lite:

1) Greater Durability: Longer use before a servo will fail;
2) Faster Robot Action: All movements should be noticeably faster;
3) Greater Payload Capacity: Although the mini weighs more it has significantly more payload capacity;
4) Higher control accuracy: mini has a smoother movement;
5) Compact wiring arrangement: mini servos allow a daisy-chain wiring connection, which makes the wiring arrangement more compact.
6) Lower noise: Due to the lower ratio and better gears, the joint transmission efficiency of mini is higher and the noise is lower.
