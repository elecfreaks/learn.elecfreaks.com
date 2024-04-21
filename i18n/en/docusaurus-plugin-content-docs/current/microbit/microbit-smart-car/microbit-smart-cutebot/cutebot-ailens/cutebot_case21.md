# Cutebot & AI Lens- Face Tracking

## Purpose
---
- Use the Cutebot and [AI Lens](https://www.elecfreaks.com/elecfreaks-smart-ai-lens-kit.html) to achieve the face tracking function.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-smart-cutebot/cutebot-ailens/images/cutebot-case-21-01.png)

## Materials required
---

- 1 × Cutebot V3.0

- 1 × [Cutebot lithium battery pack](https://www.elecfreaks.com/cutebot-lithium-battery-pack.html)

- 1 × [AI Lens Kit](https://www.elecfreaks.com/elecfreaks-smart-ai-lens-kit.html)

***Note:*** The [AI Lens](https://www.elecfreaks.com/elecfreaks-smart-ai-lens-kit.html) kit works with Cutebot V3.0 only(You can see the version number printed on the baseboard).


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-smart-cutebot/cutebot-ailens/images/cutebot-16-04.png)

## Connections:
---

### Steps to install the lithium battery pack:

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-smart-cutebot/cutebot-ailens/images/cutebot-step-01.png)

Assembly steps for bricks:

Parts list:

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-smart-cutebot/cutebot-ailens/images/cutebot-step-02.png)

Steps of build-up:

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-smart-cutebot/cutebot-ailens/images/cutebot-step-03.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-smart-cutebot/cutebot-ailens/images/cutebot-step-04.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-smart-cutebot/cutebot-ailens/images/cutebot-step-05.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-smart-cutebot/cutebot-ailens/images/cutebot-step-06.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-smart-cutebot/cutebot-ailens/images/cutebot-step-07.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-smart-cutebot/cutebot-ailens/images/cutebot-step-08.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-smart-cutebot/cutebot-ailens/images/cutebot-step-09.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-smart-cutebot/cutebot-ailens/images/cutebot-step-10.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-smart-cutebot/cutebot-ailens/images/cutebot-step-11.png)

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-smart-cutebot/cutebot-ailens/images/cutebot-step-12.png)


### Connections of the AI Lens:

Connect the RJ11 cable with the [AI Lens](https://www.elecfreaks.com/elecfreaks-smart-ai-lens-kit.html) and the other end in Dupont connection to the circled place in the below picture (make sure you connect to the right connections).

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-smart-cutebot/cutebot-ailens/images/cutebot-step-13.png)

***Tips:*** the bricks holder here is flexible to be adjusted, we may manually adjust the angles of the [AI Lens](https://www.elecfreaks.com/elecfreaks-smart-ai-lens-kit.html) to meet the requirements of the functions that you want to achieve.

## Software Platform:
---

[MicroSoft MakeCode](https://makecode.microbit.org/#)

## Programming
---

### Step 1

Click “Advanced” in the drawer to see more choices.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-smart-cutebot/cutebot-ailens/images/cutebot-pk-1.png)

- We need to add a package for programming. Click “Extensions” in the bottom of the drawer and search with “cutebot” in the dialogue box to download it.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-smart-cutebot/cutebot-ailens/images/cutebot-pk-11.png)


We need to add a package for programming the [AI Lens](https://www.elecfreaks.com/elecfreaks-smart-ai-lens-kit.html) kit. Click “Extensions” in the bottom of the drawer and search with “https://github.com/elecfreaks/pxt-PlanetX-AI” in the dialogue box to download it.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-smart-cutebot/cutebot-ailens/images/cutebot-pk-12.png)

***Note:*** If you met a tip indicating that the codebase will be deleted due to incompatibility, you may continue as the tips say or build a new project in the menu.

###  Step 2

- In the on start brick, initialize the [AI Lens](https://www.elecfreaks.com/elecfreaks-smart-ai-lens-kit.html) and switch to face recognition function.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-smart-cutebot/cutebot-ailens/images/case-21-01.png)

- In the “forever” brick, set to get one image form the [AI Lens](https://www.elecfreaks.com/elecfreaks-smart-ai-lens-kit.html). If a face is on the image, set the LED screen to display √; or set to display ×.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-smart-cutebot/cutebot-ailens/images/case-21-02.png)

### Link

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-smart-cutebot/cutebot-ailens/images/case-21-03.png)

Link: [https://makecode.microbit.org/_KFMLijP1xdh5](https://makecode.microbit.org/_KFMLijP1xdh5)

You may also download it directly below:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_KFMLijP1xdh5"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>


## Result
---
- If the [AI Lens](https://www.elecfreaks.com/elecfreaks-smart-ai-lens-kit.html) recognizes the face(s), the LED screen displays √; or it displays ×.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/microbit-smart-car/microbit-smart-cutebot/cutebot-ailens/images/cutebot-case-21.gif)

## Exploration
---

## FAQ
---

## Relevant Files
---
