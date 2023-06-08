---
sidebar_position: 2
sidebar_label: Failure Analysis
---

# Failure Analysis

## Why can't the XGO stand up when it is turned on?

If you find the XGO cannot stand after pressing the power switch. At this time, you can troubleshoot the problem according to the switch indicator light of the robot dog and the on-board indicator.

![](./../images/cm4-xgo-faq-08.png)

#### Phenomenon One: XGO can't respond when the switch is pressed

It may be that the switching power supply circuit is broken. At this time, you need to disassemble the screws on the back, tail, and sides of the robot dog, remove the back panel to check the switching circuit, and repair it with an electric iron.

#### Phenomenon Two: The XGO stands but the switch indicator light is off when pressing the switch

It may be that the circuit of the switch signal light is broken. At this time, you need to disassemble the screws on the back, tail, and sides of the body of the robot dog, remove the back panel to check the switch circuit, and repair it with an electric iron.

#### Phenomenon Three: The XGO can't stand but the switch light is on when pressing the switch

1.  The green power indicators D1, D2, D3 of the driver board are on and the blue indicator light of D1 is on. At this time, a certain servo failure affects the bus communication. At this time, you can unplug the servos one by one and start them up. After locating the faulty servo record the ID on the servo and replace it with a servo with the same ID. The ID of the servo is shown in the figure: the left front leg, the right front leg, the right rear leg, and the left rear leg are the first digits of the servo ID 1, 2, 3, 4, and the lower, middle and upper servos of each leg are respectively the second digit of the servo ID which is 1, 2, 3. So for example, the ID number of the middle servo on the right rear leg is 32.

2.  All the indicator lights of the driver board are off. At this time, the driver board should be faulty and the driver board needs to be replaced.



## The XGO can stand after turning on, but the joint position is wrong

#### Phenomenon One: After the XGO is turned on, the joint position is abnormal, but all the servos are strong.

At this time, the servo works normally, but the angle of the servo is abnormal, and the robot dog needs to be re-calibrated.

#### Phenomenon Two: After the XGO is turned on, the joint position is abnormal, the joint is weak or the joint rotation position is wrong.

This phenomenon is generally caused by damage to the potentiometer of the servo or burning of the MOS tube of the servo due to excessive current, but the communication of the servo is normal, and the servo needs to be replaced at this time.

## XGO screen does not light up

#### Phenomenon 1: The power indicator light of the carrier board is not on.

At this time, you need to check whether the 4pin cable from the driver board is plugged in tightly. If the cable is OK, the carrier board is damaged, and the CM4 carrier board needs to be replaced.

#### Phenomenon 2: The power indicator of the carrier board is on, but the screen is not on.



At this time, the possible reasons are that the SD card image burn fails, the system does not start normally, or the SD card slot is faulty and the SD card is in poor contact. There is also a possibility that the cable connection between the screen and the carrier board is faulty, resulting in abnormal SPI communication of the screen. At this time, you need to replace the CM4 carrier board or screen, or re-burn the Raspberry Pi image.
