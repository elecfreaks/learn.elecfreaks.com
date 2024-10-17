---
sidebar_position: 4
sidebar_label: Case 1:Vehicles capable of recognizing road signs through AI technology
---

# Case 1 : Vehicles capable of recognizing road signs through AI technology

## Purpose


Build a Cutebot Pro smart car that can use AI Lens to recognize road signs.


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot-pro/cases-libraries/extended-case/images/cutebot-pro-extended-case-01-01.png)


## Material Requested

[Smart Cutebot Pro Car](https://www.elecfreaks.com/elecfreaks-smart-cutebot-pro-programming-robot-car-for-micro-bit.html)

[AI Camera](https://www.elecfreaks.com/elecfreaks-smart-ai-lens-kit.html)

[Cutebot Pro Blocks Pack](https://shop.elecfreaks.com/products/elecfreaks-cutebot-pro-blocks-pack)


## Assembly Steps

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot-pro/cases-libraries/extended-pack/cutebot-pro-blocks-pack/images/cutebot-pro-blocks-pack-step-01-01.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot-pro/cases-libraries/extended-pack/cutebot-pro-blocks-pack/images/cutebot-pro-blocks-pack-step-01-02.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot-pro/cases-libraries/extended-pack/cutebot-pro-blocks-pack/images/cutebot-pro-blocks-pack-step-01-03.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot-pro/cases-libraries/extended-pack/cutebot-pro-blocks-pack/images/cutebot-pro-blocks-pack-step-01-04.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot-pro/cases-libraries/extended-pack/cutebot-pro-blocks-pack/images/cutebot-pro-blocks-pack-step-01-05.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot-pro/cases-libraries/extended-pack/cutebot-pro-blocks-pack/images/cutebot-pro-blocks-pack-step-01-06.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot-pro/cases-libraries/extended-pack/cutebot-pro-blocks-pack/images/cutebot-pro-blocks-pack-step-01-07.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot-pro/cases-libraries/extended-pack/cutebot-pro-blocks-pack/images/cutebot-pro-blocks-pack-step-01-08.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot-pro/cases-libraries/extended-pack/cutebot-pro-blocks-pack/images/cutebot-pro-blocks-pack-step-01-09.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot-pro/cases-libraries/extended-pack/cutebot-pro-blocks-pack/images/cutebot-pro-blocks-pack-step-01-10.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot-pro/cases-libraries/extended-pack/cutebot-pro-blocks-pack/images/cutebot-pro-blocks-pack-step-01-11.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot-pro/cases-libraries/extended-pack/cutebot-pro-blocks-pack/images/cutebot-pro-blocks-pack-step-01-12.png)

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot-pro/extended-pack/cutebot-pro-blocks-pack/cutebot-pro-block-pack-step.pdf" type="application/pdf" width="100%" height="600px" />



## Hardware Connection

Connect the AI camera to the IIC port of the Cutebot Pro Smart car.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot-pro/cases-libraries/extended-case/images/cutebot-pro-extended-case-01-02.png)


## Software

[Microsoftmakecode](https://makecode.microbit.org/#)


## Program


In order to program the Cutebot Pro Smart Car, we need to add an extension library. Find `Extensions` at the bottom of the code drawer and click on it.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot-pro/cases-libraries/extended-pack/cutebot-pro-blocks-pack/images/cutebot-pro-blocks-pack-add-extensions-01.png)

This will bring up a dialog box to search for `CutebotPro` and click to download this code base.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot-pro/cases-libraries/extended-pack/cutebot-pro-blocks-pack/images/cutebot-pro-blocks-pack-add-extensions-02.png)

In order to program the AI lens, we need to add an extension library. Find `Extensions` at the bottom of the code drawer and click on it. This will bring up a dialog box to search for `PlanetX-AI` and click on Download this code library.![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot-pro/cases-libraries/extended-pack/cutebot-pro-blocks-pack/images/cutebot-pro-blocks-pack-add-extensions-03.png)


## Sample Program

`When powering up` initialize the AI lens and `set it to Card Recognition`;

`When button A is pressed `set the cart `to move forward at 30% speed`;

In `forever`, `get one image from AI Lens`, `set the cart to turn 90° to the right` when `recognize the image as turning to the right` and `card size is greater than 100`.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot-pro/cases-libraries/extended-case/images/cutebot-pro-extended-case-01-06.png)


### Programs

Please refer to the program link：[https://makecode.microbit.org/_aRxCqsMuY8iq](https://makecode.microbit.org/_aRxCqsMuY8iq)

You can also download the program directly from the following page.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_aRxCqsMuY8iq"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

## Conclude


After pressing button A, the trolley moves forward and when it encounters a street sign that turns to the right, it automatically turns 90° to the right and stops moving.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/microbit-smart-car/microbit-smart-cutebot-pro/cases-libraries/extended-case/images/cutebot-pro-extended-case-01.gif)


## Expanding Knowledge

*** Application and development of AI road sign recognition ***

AI Road Sign Recognition is an image recognition application based on Artificial Intelligence technology for detecting, recognizing and understanding traffic road signs on roads. Here are some of the key points in terms of application and development of AI Road Sign Recognition:

Traffic Management : AI Road Sign Recognition helps traffic management to monitor the condition of traffic signs and road signs on the road. It can automatically detect and recognize traffic signs, provide real-time traffic information and directions, and help drivers and pedestrians follow traffic rules and navigation.

Automatic Driving: AI road sign recognition is one of the key technologies in the development of autonomous driving vehicles. It helps self-driving vehicles recognize and understand traffic signs and instructions on the road in order to make appropriate decisions and driving plans.

Navigation and Path Planning: AI road sign recognition can be used in real-time navigation systems to help drivers and pedestrians determine the correct direction of travel and path planning. It recognizes road names, intersection directions and speed limit information on road signs to provide users with accurate navigation guidance.

Urban Planning and Traffic Optimization: AI road sign recognition can provide valuable data for urban planning and traffic optimization. By analyzing and recognizing road sign information, it can understand the structure of the road network, traffic flow and traffic conditions, so as to optimize traffic planning, improve road facilities and enhance urban traffic efficiency.

Safety Monitoring: AI road sign recognition can be used for traffic safety monitoring system. It can monitor traffic signs and road signs on the road in real time and detect abnormalities, such as damaged road signs or missing signs. This helps to repair and maintain traffic facilities in time to ensure the safety and reliability of roads.

Significant progress has been made in the development of AI road sign recognition, mainly due to the continuous development of deep learning and computer vision technologies. With the continuous optimization of algorithms and the improvement of hardware, the accuracy and real-time performance of AI road sign recognition have been significantly improved. In the future, it is expected that AI road sign recognition will develop further, become more intelligent and comprehensive, and bring more convenience and benefits to the fields of traffic management, automated driving and urban planning.
