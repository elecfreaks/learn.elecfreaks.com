# Case 01: Aircraft Battle

## Purpose

Create a game of aircraft battle via the Retro.

## Materials Required


1 x [RETRO Arcade for Education](https://www.elecfreaks.com/retro-arcade-for-education.html)



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/retro-case-01-01.png)



## Software

[MicroSoft MakeCode](https://arcade.makecode.com/)


## Program


Create a spirite project, set move it with buttons and set it stay in screen with "on" and start screen with clouds.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/retro-case-02-01.png)

Set life to 3 in the on start block. Choose on game update every seconds block and set it as 1 sec, set the projectile catapult  from side VX 0 VY 50. Set change life by -1 while crashing the enemy and destroy it.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/retro-case-03-02.png)

While pressing button A, launch the projectiles from the spirite, set the speed from X as 0 and Y as -70. Set the effect of the projectiles in fire, when that projectile crashes onto the enemies, both of them are destroyed and the score plus 1.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/retro-case-03-03.png)





### Program
Link: [https://makecode.com/_gd04au22E9XJ](https://makecode.com/_gd04au22E9XJ)

You may download it directly below:

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_gd04au22E9XJ"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>





## Downloading Program
After programming, connect the computer with the Retro via the USB cable.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/retro-case-01-10.png)

Choose hardware "F4".

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/retro-case-01-11.png)

Match the devices and get connected with "Arcade (app)".

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/retro-case-01-12.png)

Click the reset button on the Retro and go to the downloading page.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/retro-case-01-13.png)

Click downloading to compile the program into the Retro.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/retro-case-01-14.png)


## Conclusion

Control the movement of the spirite in the screen, set the life in 3. When it crashes onto the enemy, the life score decreases 1, the game is over when the score is 0; press button A to launch the projectiles, the score adds 1 each time when the enemy gets hit.
