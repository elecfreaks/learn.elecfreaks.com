# Aircraft battle (2）

## Purpose

Make an airplane battle mini-game using accelerometers to control the flight of warplanes.

## Materials Requested

1 x  [ELECFREAKS Retro Makecode Arcade For Education](https://item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-18602834185.82.51a95ccfE1IJt1&id=644090757603)

![retro-case-01-01.png](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/retroarcade/images/retro-case-01-01.png)

## Software

[Microsoft makecode](https://arcade.makecode.com/)

## Programming

Modified from [Aircraft battle(1)](https://www.yuque.com/elecfreaks-learn/retro/bm01di) to control the flight of the fighter by accelerometer and to make the fighter fire bullets automatically.

Program of  [Aircraft battle(1)]: [https://makecode.com/_75rf2EgEPTW4](https://makecode.com/_75rf2EgEPTW4)

Since the accelerometer is used in this case, you need to add the corresponding extension library according to the following steps.
Open `Advanced`, and select `Extensions`.

![retro-case-09-07.png](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/retroarcade/images/retro-case-09-07.png)

Search in the pop-up window `controller`, and select `controller Extended Library`.

![retro-case-09-08.png](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/retroarcade/images/retro-case-09-08.png)

When the addition is complete, three building block selection modules appear in the module selection area.

Current hardware using light sensors, accelerometers, vibration motors related blocks can be found in the expansion plug-in section of the controller.

![retro-case-09-09.png](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/retroarcade/images/retro-case-09-09.png)

`New sprite`, To prevent the sprite from moving out of the screen, `set the sprite to be within screen range`, `set scene effects to star map`.

![retro-case-09-01.png](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/retroarcade/images/retro-case-09-01.png)

In `infinite loop`, map`the value of x-axis returned by accelerometer from-800 to 160 to 0 and store it in variable x`, map`the value of y-axis returned by accelerometer from -1023 to 1023 to 0 to 120 and store it in variable y`, then `set the position of x-axis and y-axis of warplane to the value of variable x and the value of variable y respectively`. (The range of the accelerometer x-axis and y-axis return values is -1023 to 1023)

![retro-case-09-06.png](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/retroarcade/images/retro-case-09-06.png)

![retro-case-09-02.png](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/retroarcade/images/retro-case-09-02.png)

`When the game is played every 1000ms`, then `shoot the projectile down from a random location at the top of the X screen at a speed of 50`, `set ejector type`, `-1 life when touching the enemy`, and automatically `destroy the enemy`.

![retro-case-09-03.png](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/retroarcade/images/retro-case-09-03.png)

`When the game is played every 300ms`, `launch projectiles from the sprite with an x-axis speed of 0 and a y-axis speed of -70`, `projectiles set to flame effects`, `when projectiles and enemies collide`, `destroy projectiles and enemies`, `score+1`.

![retro-case-09-04.png](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/retroarcade/images/retro-case-09-04.png)

Complete program:

![retro-case-09-05.png](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/retroarcade/images/retro-case-09-05.png)

### Procedures

Link: [https://makecode.com/_4rr176iuCAYX](https://makecode.com/_4rr176iuCAYX)

You can also download the program directly from the following pages.


You may download it directly below:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.com/_4rr176iuCAYX"
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

You can control the sprite through the accelerometer to move in the screen, the initial life value of 3, when the player-controlled sprite collision to the enemy, then -1 life value, when the life value to zero is the end of the game, the war machine automatically launch bullets, each hit an enemy is +1 points.
