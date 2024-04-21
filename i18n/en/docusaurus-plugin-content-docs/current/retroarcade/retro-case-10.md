# Walking the Maze

## Purpose

Create a maze where the background changes as the light changes.

## Materials Requested

1 x  [ELECFREAKS Retro Makecode Arcade For Education](https://item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-18602834185.82.51a95ccfE1IJt1&id=644090757603)

![retro-case-01-01.png](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/retroarcade/images/retro-case-01-01.png)

## Software

[Microsoft makecode](https://arcade.makecode.com/)

## Programming

Since the light sensor is used in this case, you need to add the corresponding extension library according to the following steps.

Open `Advanced`, and select `Extend`.

![retro-case-09-07.png](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/retroarcade/images/retro-case-09-07.png)

Search for `controller` in the popup window and select `controller extension library`.

![retro-case-09-08.png](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/retroarcade/images/retro-case-09-08.png)

After the addition is complete, three block selection blocks appear in the block selection area.

The blocks related to the current hardware using light sensors, accelerometers, and vibration motors can be found in the expansion plug-in section of the controller.

![retro-case-09-09.png](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/retroarcade/images/retro-case-09-09.png)

`New sprite`, `set sprite initial position`, `move sprite by button`, `set map block`, `set camera to follow sprite movement`.

![retro-case-10-01.png](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/retroarcade/images/retro-case-10-01.png)

First draw the maze entrance, exit, and walls.

![retro-case-10-02.png](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/retroarcade/images/retro-case-10-02.png)

Then set the volume collision according to the wall.

![retro-case-10-03.png](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/retroarcade/images/retro-case-10-03.png)

`When the brightness is darke`, `set the background color to black`, `when the brightness is brighter`, `set the background color to light blue`.

![retro-case-10-04.png](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/retroarcade/images/retro-case-10-04.png)

`When the sprite touches the block at the entrance position`, `the countdown starts for ten seconds`, `and vibrates for 500m`.

![retro-case-10-05.png](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/retroarcade/images/retro-case-10-05.png)

`When the sprite touches the block at the end position`, `stop the countdown`, `set the salute confetti effect`, `vibrate 500ms`, `set the game over`.

![retro-case-10-06.png](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/retroarcade/images/retro-case-10-06.png)

Complete procedure:

![retro-case-10-07.png](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/retroarcade/images/retro-case-10-07.png)

### Procedures


Link: [https://makecode.com/_XmF9Vi8VK665](https://makecode.com/_XmF9Vi8VK665)

You may download it directly below:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.com/_XmF9Vi8VK665"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>



## Program Download

Please see the documentation for the program download: [Program Download Method](http://wiki.elecfreaks.com/en/retroarcade/program-download-method)

## Conclusion

Elf from the entrance to the map will start the countdown, when the countdown has not yet reached the end of the game is over, before the end of the countdown to the end of the game victory, the background color will automatically change according to the ambient light brightness, when the brightness is dark, the background color is black, when the brightness is bright, the background color is light blue.
