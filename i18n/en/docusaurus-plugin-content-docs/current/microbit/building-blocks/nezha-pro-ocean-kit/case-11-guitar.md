---
sidebar_position: 11
sidebar_label: Case11:Guitar
---

# Guitar

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case11/nezha-pro-ocean-kit-step-11-00.png.png)

## Story Introduction

After several competitions, Ian and Jack were still not satisfied. Ian sighed, "You guys seem to have a special love for the sea; even the competitions are full of marine elements." Jack nodded with a smile, "Of course! The sea is our treasure, bringing us countless amounts of food. We are truly grateful to it." As soon as he finished speaking, the local residents began dancing happily to the drumbeats. Jack's eyes lit up, and he pulled Ian, saying, "The most lively moment is here! Come on, let's jump into this music carnival!"

---

## Teaching Preparation

| Name | Illustration |
| :----------: | :--------------------------: |
| Nezha Pro Ocean Kit | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/nezha-pro-ocean-kit-products-introduction-002.png.png) |

---
## Teaching Objectives

1. Master nested conditional statements and understand the logic of nested conditional statements.
2. Understand when to use interval classification.

---
## Learning Exploration

1. What musical instruments do you know, and which ones can you play?
2. Do you know how sound is produced?

---
## Construction Steps

<embed src="https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case11/nezha-pro-ocean-kit-step-11-1.png.pdf" type="application/pdf" width="100%" height="600px" />

---
## Hardware Connection

The ultrasonic sensor is connected to the "J1" port of the Nezha expansion board.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/case11/nezha-pro-ocean-kit-step-11-3.png.png)

---
## Code Programming

Go to "[makecode.microbit.org](https://makecode.microbit.org)" and click **New Project**.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-07.png)

Enter the project name in the pop-up window and click **Create**.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-11.png)

Click **Extensions** in the code drawer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-09.png)

In the pop-up interface, enter **nezha pro** and click the search icon. After the **nezha pro** software library appears, click on it. Load the PlanetX software library in the same way.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-case01-10.png)

---
### Example Program

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/nezha-pro-ocean-kit/setup-diagram/nezha-pro-ocean-kit-11.png)

Program link
[https://makecode.microbit.org/_WeiUWwVYsimb](https://makecode.microbit.org/_WeiUWwVYsimb)

You can also download the program directly through the following webpage.

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_WeiUWwVYsimb"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

---
### Download Program

Use a USB cable to connect the PC and micro:bit V2.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual03.gif)

After successful connection, a drive named MICROBIT will be recognized on the computer.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual06.png)

Click the icon in the lower left corner ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual07.png) and select **Connect Device**.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual11.png)

Click ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual08.png).

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual12.png)

Click ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual09.png).

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual13.png)

In the pop-up window, select **BBC micro:bit CMSIS-DAP**, then select **Connect**. At this point, our micro:bit has been successfully connected.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual14.png)

Click **Download Program**

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/building-blocks/microbit-space-science-kit/images/microbit-space-science-kit-manual10.png)

---
## Case Demonstration
When button A is pressed:
- If the ultrasonic sensor detects a distance in the range of 9~10, it plays the tone Middle C;
- If the distance is in 11~12, it plays Middle D;
- If the distance is in 13~14, it plays Middle E;
- If the distance is in 15~16, it plays Middle F;
- If the distance is in 17~18, it plays Middle G;
- If the distance is in 19~20, it plays Middle A;
- If the distance is in 20~21, it plays Middle B.


---
## Extended Knowledge

### Origin and Development of the Guitar

The guitar is a popular plucked string instrument. The following is a detailed introduction to its origin and development, types, structure, and playing techniques:

### Origin and Development

Origin theories: Regarding the origin of the guitar, one theory suggests it originated from the kithara of ancient Greece, which later evolved into the vihuela popular in Europe; another theory holds that it originated from the lute of ancient Egypt, introduced to Spain by Arabs.

Development history: Before the 14th century, the Moors brought the guitar to Spain. Early types included those with 8, 10, and 12 strings. In the 16th century, the Spanish invented the 5-string guitar, and in 1790, a bass string was added, officially naming it the guitar.

In the late 18th century, the body of the guitar was enlarged, the sound posts were arranged in a fan shape, and the notation was improved to the staff, marking the guitar's golden age. In the mid-19th century, with the development of the piano and orchestral music, the guitar entered its second period of decline. In the late 19th century, the guitar matured in terms of playing techniques and production craftsmanship, entering its second peak period. In the 20th century, the electric guitar was invented, and the guitar began to develop in a diversified way.

### Types

Classical Guitar: Also known as the Spanish guitar, it has a flat and slightly wide fingerboard. There are 12 frets from the nut to the junction of the neck and the body. The sound box is thick with 19 frets. It is equipped with three nylon strings and three metal-wound strings, with an elegant tone. It is often used for solo performances and also applied in flamenco and jazz music.

Acoustic Guitar: The fingerboard is thinner, with 14 frets at the junction of the fingerboard and the sound box. The sound box is larger with square edges. There is a pickguard on the soundboard. It uses steel strings, producing a clear and bright tone with a larger volume than the classical guitar and a stronger metallic feel. It has a strap button at the tail and is used freely in accompaniment and singing.

Electric Guitar: The fingerboard is very narrow, using magnetic steel strings. The body is solid without a sound box. It uses magnetic pickups and produces sound through a speaker based on the principle of converting string vibrations into electrical sound. It is often used in rock, pop, blues and other music styles and is ideal as a solo instrument.

Plectrum Guitar: Also known as the jazz guitar, it has a longer neck with a slightly curved fingerboard. It uses steel strings. The sound box is smaller and thinner than that of the classical guitar, with curved front and back panels. There is no round sound hole in the middle of the front panel, but two f-shaped holes on both sides. The right hand uses a pick for plucking, and it is often used for lead playing, accompaniment, and bass playing in folk music.

Flamenco Guitar: The body is larger. The back panel and crossbar of the body are made of cypress and rosewood. The tuning pegs are made of wood like those of a violin. The tuning of each string is slightly lower. When playing strong notes, the strings hit the fingerboard, producing a special tone, and the front panel needs to be tapped during playing.

### Playing Techniques

#### Right Hand Techniques
Plucking: Including finger plucking and pick plucking. Finger plucking produces a soft and delicate tone, capable of playing rich harmonies and melodies; pick plucking produces a bright and clear tone, suitable for playing music with a brisk rhythm.
Strumming: Using fingers or a pick to quickly sweep across the strings from the bass strings to the treble strings or vice versa, producing rich harmonic effects, often used in rhythm playing.

#### Left Hand Techniques
Fretting: Pressing different positions on the fingerboard with the left hand fingers to change the vibration length of the strings, thereby producing different pitches. It requires accurate and forceful finger pressing without affecting the sound of other strings.
Glissando: Sliding the left hand fingers from one position to another on the strings, producing a continuous pitch change, making the music more fluent and expressive.
Vibrato: Slightly shaking the fingers on the pressed strings with the left hand, causing slight fluctuations in the pitch of the strings, adding a warm and soft effect to the tone.
