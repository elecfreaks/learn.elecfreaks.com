# 太阳能电源管理模块

## 简介

这款太阳能电源管理模块支持太阳能板和Type-C充电，具备电源输出控制开关，内置电池仓，可安装18650电池扩展蓄电能力。


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/input/images/03461-1.png)

## 产品清单

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/input/images/03461-packing-list.png)

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
产品尺寸 | 87.8 x 55.8 x 26mm
产品重量 | ？（不含锂电池）
充电电压 | 5V
充电电流 | 1A
最大工作电压 | 5V
额定工作电压 | 5V
最小工作电压 | 4.3V
待机电流 | 0.03A
负载最大输出电流 | 1.5A

项目 | 参数
:-: | :-:
产品名称 | 太阳能板
工作电压 (Vmp) | 6V ±3%
工作电流 (Imp) | 0.16A ±3%
开路电压 (Voc) | 7.2V ±3%
短路电流 (Isc) | 0.17A ±3%
峰值功率 (Pmax) | 1W ±3%
晶硅片效率 | 20%以上
功率输出工作温度 | -20 °C to +60°C
功率公差 | ±3%
尺寸 | 110 × 60 × 2.2~2.5mm
重量 | 0.03kg ±0.01

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

## 使用说明

如果不安装18650锂电池，可以通过电源输入接口接入外部能源（例如太阳能充电板），打开电源开关，然后通过USB-A接口连接太阳能电源管理模块和用电器，并打开电源开关。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/input/images/03461-8.png)

**注意：当两个电源输入接口（PH2.0接口/Type-C接口）同时接入电源时，太阳能电源管理模块会优先使用Type-C接口的电源。**

**注意：太阳能充电板的充电功率与光照强度相关，当光照强度过低时，充电效率太低，无法激活太阳能电源管理模块的电源管理芯片，此时无法进去充电状态。**

如果安装18650锂电池则可以通过锂电池供电，通过USB-A接口连接太阳能电源管理模块和用电器，并打开电源开关。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/input/images/03461-9.png)
