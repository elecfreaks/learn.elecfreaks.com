---
sidebar_position: 5
sidebar_label: 软件库说明文档
---

# 软件库说明文档

| 积木块类别 | 积木块图示 | 参数 | 积木块功能说明 |
| :-: | :-: | :-: | :-: |
| **OLED** | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/about-the-microbit-smart-climate-kit/images/blocks-06.png) | 参数1类型：整型<br />参数1范围：0~9 | 初始化OLED显示屏 |
| | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/about-the-microbit-smart-climate-kit/images/blocks-07.png) | 无 | 清空OLED显示屏 |
| | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/microbit-smart-climate-kit/about-the-microbit-smart-climate-kit/images/blocks-08.png) | 参数1类型：字符串<br />参数1范围：0~9、a~z、A~Z、特殊字符<br /> | OLED显示屏显示字符串 |
| **wukong** | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-introduction-to-the-functions-of-the-blocks-01.png) | 参数1类型：下拉选项<br />参数1范围：180°，270°，360°；<br /> 参数2类型：下拉选项<br />参数2范围：S0 ~ S7；<br />参数3类型：整形<br />参数3范围：0 ~ 360 <br />| 舵机角度控制 |
| **Neopixel** | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-10.png) | 参数1类型：下拉选项<br />参数1范围：P0~P16<br />参数2类型：数字<br />参数2范围：1~+∞<br />参数3类型：下拉选项<br />参数3范围：RGB(GRB format)、RGB+W、RGB(RGB format) | 该命令设置对应引脚的RGB灯条灯珠控制数量和模式并赋值给变量    |
|             | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-11.png) | 参数1类型：下拉选项<br />参数1范围：red,orange,yellow,green,blue,indigo,violet,purple,white,black | 该命令设置对应灯条亮灯颜色                                   |
|             | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-12.png) | 参数1类型：下拉选项<br />参数1范围：已设变量                 | 该命令设置对应灯条颜色刷新                                   |
|             | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-greenhouse-kit/images/microbit-greenhouse-programming-13.png) | 参数1类型：下拉选项<br />参数1范围：已设变量                 | 该命令设置对应灯条颜色清除                                   |
| **Sensor** | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/interesting-case/classroom-science-pack/images/classroom-science-pack-introduction-to-the-functions-of-the-blocks-03.png) | 参数1类型：下拉选项<br />参数1范围：temperature（°C）、temperature（°F）、humidity（0~100）<br /> 参数2类型：下拉选项<br />参数1范围：P0 ~ P16 | 获取当前温度（℃）或者湿度（0~100） |
| | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-life-kit/images/water-level.png) | 参数1类型：下拉选项<br />参数1范围：P0 ~ P16 | 获取水位等级 |
| | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-life-kit/images/light-level.png) | 参数1类型：下拉选项<br />参数1范围：P0 ~ P16 | 获取当前环境光强度等级 |
| | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-life-kit/images/distance.png) | 参数1类型：下拉选项<br />参数1范围：mm/cm/inch<br />参数2类型：下拉选项<br />参数2范围：P0 ~ P16<br />检测范围：2~400cm | 获取传感器前方障碍物的距离值 |
| | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-life-kit/images/analog-read.png) | 参数1类型：下拉选项<br />参数1范围：P0 ~ P16 | 读取模拟值 |
| | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-life-kit/images/digital-read.png) | 参数1类型：下拉选项<br />参数1范围：P0 ~ P16 | 读取数字值 |
| | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/wisdom-life/microbit-smart-life-kit/images/digital-write.png) | 参数1类型：下拉选项<br />参数1范围：P0 ~ P16<br />参数2类型：自然数<br />参数2范围：0，1 | 设置端口输出数字量 |
