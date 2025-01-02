# 太阳能电源管理模块

## 简介

这款太阳能电源管理模块支持太阳能板和Type-C充电，具备电源输出控制开关，内置电池仓，可安装18650电池扩展蓄电能力。


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/input/images/03461-1.png)


## 特性

支持太阳能/Type-C进行充电

内置电池仓

具备电源输出控制开关

## 技术规格

项目 | 参数
:-: | :-:
产品名称 | Solar Power Manager V1.0.7
SKU|EF03461
电源需求|3V-5.5V
接口类型|PH2.0<br />Type-C<br />USB-A<br />引脚
产品尺寸 | 长87.8mm x 宽55.8mm x 高26mm
产品重量 | ？（不含锂电池）
充电电压 | 5V
充电电流 | 1A
最大工作电压 | 5V
额定工作电压 | 5V
最小工作电压 | 4.3V
待机电流 | 0.03A
负载最大输出电流 | 1.5A

## 外形与定位尺寸

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/input/images/03461-2.png)

## 硬件模块

**电源输入**

适配PH.0端口及Type-C接口，支持5V/1A输入

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/input/images/03461-3.png)

**电源输出**

适配引脚和USB-A接口，支持5V/1.5A输出

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/input/images/03461-4.png)

**电池仓**

可安装18650锂电池扩展蓄电能力。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/input/images/03461-5.png)

**电源开关**

通过拨动电源开关来控制电源开启或关闭。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/input/images/03461-6.png)

**电源指示灯**

电量指示灯用于显示电量.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/input/images/03461-7.png)

指示灯图标定义如下。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-1.png)表示LED灯常亮

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-2.png)表示LED灯熄灭

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-3.png)表示LED灯闪烁

**放电**

| 当前状态 | LED 1 | LED 2 | LED 3 | LED 4 | 电量    |
|----------|-------|-------|-------|-------|---------|
| 放电状态 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-1.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-1.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-1.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-1.png) | 76% ~ 100% |
|          | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-1.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-1.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-1.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-2.png) | 51% ~ 75% |
|          | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-1.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-1.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-2.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-2.png) | 26% ~ 50% |
|          | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-1.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-2.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-2.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-2.png) | 6% ~ 25% |
|          | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-3.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-2.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-2.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-2.png) | 0% ~ 5% |

**充电**

| 当前状态 | LED 1 | LED 2 | LED 3 | LED 4 | 电量    |
|----------|-------|-------|-------|-------|---------|
| 充电状态 | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-1.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-1.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-1.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-1.png) | 100%    |
|          | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-1.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-1.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-1.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-3.png) | 75% ~ 99%|
|          | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-1.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-1.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-3.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-2.png) | 50% ~ 74%|
|          | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-1.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-3.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-2.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-2.png) | 26% ~ 49% |
|          | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-3.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-2.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-2.png) | ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/i18n/en/docusaurus-plugin-content-docs/current/microbit/expansion-board/images/LED-2.png) | 0% ~ 25% |

1. 在电源关闭的状态下，连接电源。
3. 充电状态下电量指示灯会显示当前电量，并闪烁
4. 当充满电时，电源指示灯全部点亮，请断开电源，完成充电。
