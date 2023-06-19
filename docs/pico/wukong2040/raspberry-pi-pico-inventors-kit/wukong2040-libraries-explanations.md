---
sidebar_position: 6
sidebar_label: Wukong2040 库文件说明
---

# WuKong2040库文件说明

| 函数定义                                     | 名称                                | 参数                                                         | 返回值                         |
| -------------------------------------------- | ----------------------------------- | ------------------------------------------------------------ | ------------------------------ |
| wukong2040板载功能库                         | WuKong2040                          | 无                                                           | 导入板载功能方法和属性         |
| 判断按键A、按键B、按键AB的状态是否被按下方法 | button_is_pressed(button:"ButtonA") | button:<br />参数类型：str<br />默认参数："ButtonA"<br />参数范围："ButtonA"、\"ButtonB"、\"ButtonAB" | 按下按键返回True,否则返回False |
| 驱动电机M1\M2\M3\M4转动                      | motor(m:"M1", speed:0)              | m:<br />参数类型：str<br />默认参数："M1"<br />参数范围："M1"\"M2"\"M3"\"M4"<br />speed:<br />参数类型：int<br />默认参数：0<br />参数范围：0~100 | 无                             |
| 驱动彩虹灯显示颜色                           | rainbow_led(n:"all", r:0, g:0, b:0) | n:<br />参数类型：str<br />默认参数："all"<br />参数范围："0"\"1"\"all" | 无                             |
| 驱动蜂鸣器播放                               | music.play()                        | 1、内置音乐，调用内置的音乐名，<br />例如：music.DADADADUM<br />2、旋律数组,用户自定义的音乐编码数组，<br />例如：notes = ['c4:1', 'e', 'g']music.play(notes) | 无                             |
