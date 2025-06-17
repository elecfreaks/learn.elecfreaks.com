---
sidebar_position: 4
sidebar_label:  Noise Detector
---

# Noise Detector

## Introduction

This project guides you to build a simple noise detector using a micro:bit board. By leveraging the onboard microphone module to collect real-time environmental sound signals, the noise level is visualized on an OLED matrix after data processing, enabling intuitive monitoring of ambient noise.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/smart-home-explorer-kit/images/case-02-01.png)

## Teaching Objectives

- Understand how the micro:bit detects noise intensity.
- Master basic programming skills for controlling LED lights using the micro:bit.

## Teaching Preparations

Before starting the lesson, ensure you have prepared the following materials:

| **Image**                                                    | **Name**                | **Quantity** | **Remarks**        |
| --- | --- | --- | --- |
| <!-- 套装产品图 -->| Smart Home Explorer Kit | 1 |  |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/microbit.png) | micro:bit | 1 | Prepare separately |
| ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/pc.png) | PC | 1 | Prepare separately |

These materials will provide a comprehensive hands-on experience to ensure smooth progress in subsequent operations and learning. If you have prepared the above, we can proceed to the next step.

## Course Introduction

**Acoustic Environment Mini-Lesson**



- Normal conversation: 40–60 dB
- Urban traffic noise: 70–85 dB (exceeding 80 dB may damage hearing)
- Industrial equipment noise: Over 100 dB (requires protective gear)



**Interactive Thinking**: Observe noise sources around you and reflect on the significance of noise monitoring for environmental protection and health management.

## Project Production

### Hardware Connection

Connect the OLED display to the I²C interface of the Petal Base Expansion Board.https://makecode.microbit.org/)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode.png)

Create a new project.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode-new-project-01.png)

Enter the project name and click **Create**.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/cutebot-fun-football-game-kit/cases-libraries/images/makecode-new-project-02.png)

### Add Software Libraries

In the makecode programming interface, click **Extensions** in the Toolbox.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-02.png)

Search for `petal` in the pop-up window and select the petal software library.


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-add-extensions-03.png)

### Write the Program

Example program: https://makecode.microbit.org/_W6k11ULjzM63

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/smart-home-explorer-kit/images/case-02-03.png)

You can also directly download the program via the embedded iframe below:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_W6k11ULjzM63"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>




### How to Download the Program to micro:bit?

Connect the PC to the micro:bit V2 using a USB cable.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/connect-microbit.gif)

After a successful connection, a drive named `MICROBIT` will appear on the computer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/microbit-drive.png)

Click the icon in the lower-left corner![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-01.png)，and select`Connect Device`。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-02.png)

Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-03.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-04.png)

Click![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-05.png)。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-06.png)


In the pop-up window, select `BBC micro:bit CMSIS-DAP` and click **Connect**. The micro:bit is now successfully connected.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-07.png)

Click to download the program.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/cases-libraries/images/download-08.png)

### Results

After powering on, the OLED display shows the current noise level, with a bar graph on the LED matrix for visual indication.

## Extended Knowledge

Noise, as a "hidden pollutant" in modern society, profoundly impacts human life, health, and the environment. Below is a multi-dimensional analysis of its effects:

### I. Health Hazards

1. **Auditory System Damage**
   - **Hearing Loss**: Long-term exposure to noise above 85 dB (e.g., traffic, industrial machinery) damages cochlear hair cells, leading to noise-induced deafness. For example, construction workers and airport ground staff have significantly higher hearing impairment rates than the general population 4.
   - **Tinnitus**: Over 40% of long-term noise-exposed individuals experience persistent tinnitus, affecting sleep and concentration.
2. **Cardiovascular Impact**
   - **Hypertension**: Noise stimulates the sympathetic nervous system, increasing adrenaline secretion and potentially causing hypertension. Studies show residents near busy roads have a 15–20% higher hypertension incidence than those in quiet areas.
   - **Arrhythmia**: Sudden intense noise (e.g., aircraft takeoff) may trigger irregular heartbeats, elevating heart attack risks.
3. **Neurological and Psychological Effects**
   - **Sleep Disorders**: Noise above 30 dB disrupts light sleep, causing insomnia and fragmented sleep. Chronic sleep deprivation may lead to anxiety and depression.
   - **Reduced Concentration**: Office noise exceeding 50 dB decreases work efficiency by 20% and increases error rates by 30%.
4. **Other Physiological Impacts**
   - **Digestive Issues**: Noise may suppress gastrointestinal function via the neuroendocrine system, causing indigestion and ulcers.
   - **Child Development**: High-decibel exposure during fetal development or infancy may impair language and cognitive abilities.

### II. Daily Life Interference

1. **Communication and Social Barriers**
   - **Noise Spiral Effect**: Public spaces exceeding 65 dB force louder conversations, leading to social fatigue over time.
   - **Conference Call Accuracy**: Background noise above 55 dB reduces information transfer accuracy by 40%.
2. **Diminished Living Quality**
   - **Urban Complaints**: Construction and traffic noise account for over 60% of urban complaints, severely affecting comfort.
   - **Sleep Loss**: Airport residents lose 1.5 hours of sleep nightly due to nighttime flights.
3. **Ecological Damage**
   - **Wildlife**: Ocean noise (e.g., shipping) disrupts cetacean sonar, hindering feeding and reproduction, even causing strandings.
   - **Birds**: Urban noise forces birds to adjust song frequencies, potentially lowering mating success and territorial defense.

### III. Production and Safety Risks

1. **Industrial Efficiency**
   - **Error Rates**: Factory noise above 85 dB increases worker errors by 25% and accident risks.
   - **Precision Issues**: Noise may reduce calibration accuracy of precision instruments, affecting product quality.
2. **Public Safety Risks**
   - **Emergency Alert Masking**: Traffic noise may obscure ambulance/fire truck sirens, delaying rescues.
   - **Community Conflicts**: Construction noise often triggers disputes and collective complaints.

### IV. Economic Costs

1. **Healthcare Expenditures**
   - **WHO Estimates**: Europe incurs over €100 billion annually in noise-related health costs, including medical expenses and productivity loss.
   - **U.S. Studies**: Noise pollution causes ~$40 billion in annual losses, primarily from hearing damage compensation and reduced efficiency.
2. **Urban Planning Costs**
   - **Noise Mitigation**: Cities invest heavily in sound barriers and low-noise roads. For example, Tokyo’s highway sound walls cost $20 million per kilometer.
   - **Property Depreciation**: Airport-adjacent properties lose 20–30% value due to noise, impacting local economies.

### V. Mitigation Strategies

1. **Personal Protection**
   - Use noise-canceling headphones/earplugs (e.g., commuting, construction sites).
   - Choose low-noise appliances (e.g., energy-efficient refrigerators, silent fans).
2. **Urban Planning Optimization**
   - Implement "acoustic environmental functional zoning" to separate residential and industrial areas.
   - Promote green buildings with soundproof materials (e.g., double-glazed windows, acoustic panels).
3. **Technological Innovation**
   - Develop low-noise transportation (e.g., electric vehicles, quieter aircraft engines).
   - Install vibration-damping and soundproofing equipment in industrial machinery.
4. **Policy and Regulation**
   - **Standards**: China’s *Social Ambient Noise Emission Standards* set a 40 dB nighttime limit for residential areas.
   - **Complaint Systems**: Strengthen noise monitoring and enforcement for construction and traffic.



**Conclusion**
Noise pollution has become a global environmental concern with far-reaching health, social, and economic impacts. Reducing noise requires individual behavior change, technological innovation, and policy coordination to achieve "quiet cities" and sustainable living. As WHO states: "Quiet is a fundamental human right and a prerequisite for a healthy ecosystem."
