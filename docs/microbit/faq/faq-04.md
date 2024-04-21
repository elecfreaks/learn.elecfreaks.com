# FAQ 04
## Q:为什么超声波传感器的返回值会出现0的情况？
A:需要注意超声波传感器的检测范围，当障碍物处于超声波传感器的检测盲区或者超出检测距离的时候，超声波传感器的返回值为0.
因为超声波传感器是通过发射超声波，然后检测超声波碰到障碍物并反射回来的声波来判断障碍物的距离。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/faq/images/FAQ-microbit-04-02.png)

所以障碍物表面凹凸不平或者不是正对着超声波传感器，有可能会将超声波反射至其它区域，导致超声波传感器接收不到反射的声波，从而返回值为0.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/faq/images/FAQ-microbit-04-03.png)

## Q:如何排除返回值为0对测试结果的干扰？
A:在进行条件判断时，去除返回值为0的情况。
具体案例可以参考：[Case 09: Autonomous Obstacle Avoidance](http://www.elecfreaks.com/learn-en/microbitKit/smart_cutebot/cutebot_case09.html)




