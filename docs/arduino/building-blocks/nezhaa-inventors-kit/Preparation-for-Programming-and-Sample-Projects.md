# 编程环境准备及示例
## 下载并安装Arduino IDE
Arduino 官方网站上下载最新版本的 Arduino IDE： [https://www.arduino.cc/en/Main/Software](https://www.arduino.cc/en/Main/Software)，并根据系统选择下载安装。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/arduino/building-blocks/nezhaa-inventors-kit/images/neza-a-programming-01.png)
## 软件编程
下载哪吒A主控盒的库文件[NezhaA-main.zip](https://github.com/elecfreaks/NezhaA/archive/refs/heads/main.zip)下载哪吒A主控盒的依赖库文件[Adafruit_NeoPixel-master.zip](https://github.com/elecfreaks/MuZa/archive/refs/heads/main.zip)打开Arduino IDE 并选择工具-开发板-Arduino Uno。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/arduino/building-blocks/nezhaa-inventors-kit/images/neza-a-programming-02.png)

使用type-c数据线将哪吒A主控盒连接至电脑端。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/arduino/building-blocks/nezhaa-inventors-kit/images/neza-a-programming-03.png)

连接完成后，点击工具-端口，设置硬件连接的端口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/arduino/building-blocks/nezhaa-inventors-kit/images/neza-a-programming-04.png)

点击项目-加载库-添加.ZIP库…。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/arduino/building-blocks/nezhaa-inventors-kit/images/neza-a-programming-05.png)

选择NezhaA-main.zip，添加哪吒A主控盒的库文件。

![添加库文件.PNG]![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/arduino/building-blocks/nezhaa-inventors-kit/images/neza-a-programming-06.png)

用同样的方法导入添加哪吒A主控盒的依赖库文件Adafruit_NeoPixel-master.zip。
## 硬件连接
分别将两个电机和两个舵机连接到哪吒A主控盒的M1、M2和S1、S2。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/arduino/building-blocks/nezhaa-inventors-kit/images/neza-a-programming-07.png)

## 编写程序
### 示例一：控制舵机和电机

```
#include <MuZa.h>

MuZa muZa;    //创建一个MuZa类的实例

void setup() {
  muZa.begin();    //初始化蜂鸣器、电机、舵机、灯光
}

void loop() {
  muZa.setMotorSpeed(M1, 60);    //设置电机速度，速度为百分比，范围：-100~+100
  muZa.setMotorSpeed(M2, 60);
  muZa.setServoAngle(S1, 180);    //设置舵机角度
  delay((2) * 1000);
  muZa.setServoAngle(S2, 180);
  delay((2) * 1000);
  muZa.setServoAngle(S1, 0);
  delay((2) * 1000);
  muZa.setServoAngle(S2, 0);
  delay((2) * 1000);
}

```

点击文件-保存，保存程序文件。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/arduino/building-blocks/nezhaa-inventors-kit/images/neza-a-programming-08.png)

选择保存路径，设置文件名并点击保存。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/arduino/building-blocks/nezhaa-inventors-kit/images/neza-a-programming-09.png)

点击上传按钮，将程序上传至哪吒A主控盒

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/arduino/building-blocks/nezhaa-inventors-kit/images/neza-a-programming-10.png)

### 结果
开启电源后，两个电机开始转动，并且两个舵机轮流转动到设定的角度。

### 示例二：播放音符

```
#include <MuZa.h>

MuZa muZa;    //创建一个MuZa类的实例

void setup() {
  muZa.begin();    //初始化蜂鸣器、电机、舵机、灯光
  muZa.setTempo(60);    //设置蜂鸣器的演奏速度
  muZa.tone(262, muZa.beatsToMS(0.25));    //设置演奏音符和节拍
  muZa.tone(0, muZa.beatsToMS(0.25));    //设置蜂鸣器休止
  muZa.tone(294, muZa.beatsToMS(0.25));
  muZa.tone(0, muZa.beatsToMS(0.25));
  muZa.tone(330, muZa.beatsToMS(0.25));
  muZa.tone(0, muZa.beatsToMS(0.25));
  muZa.tone(349, muZa.beatsToMS(0.25));
  muZa.tone(0, muZa.beatsToMS(0.25));
  muZa.tone(392, muZa.beatsToMS(0.25));
  muZa.tone(0, muZa.beatsToMS(0.25));
  muZa.tone(440, muZa.beatsToMS(0.25));
  muZa.tone(0, muZa.beatsToMS(0.25));
  muZa.tone(494, muZa.beatsToMS(0.25));
  muZa.tone(0, muZa.beatsToMS(0.25));
  muZa.tone(523, muZa.beatsToMS(0.25));
  muZa.tone(0, muZa.beatsToMS(0.25));
  muZa.tone(400, 2000);    //设置蜂鸣器播放频率和时间
}

void loop() {
}


```

### 结果
开启电源后，蜂鸣器播放音符。

### 示例三：光控灯

```
#include <MuZa.h>

MuZa muZa;    //创建一个MuZa类的实例

void setup() {
  muZa.begin();    //初始化蜂鸣器、电机、舵机、灯光
}

void loop() {
  if ((muZa.getLightSensor()) < 50) {    //判断光敏传感器的返回值是否小于50
    muZa.showRGB(108, 30, 187);    //设置LED的R、G、B的值
  } else {
    muZa.clearRGB();    //清除灯光效果
  }
}

```

### 结果
根据周围的环境光强度自动打开或者关闭灯光。

### 示例四：声控灯

```
#include <MuZa.h>

MuZa muZa;    //创建一个MuZa类的实例

void setup() {
  muZa.begin();    //初始化蜂鸣器、电机、舵机、灯光
}

void loop() {
  if ((muZa.getNoiseSensor()) > 100) {    //判断噪音传感器的返回值是否大于100
    muZa.showRGB(108, 30, 187);    //设置LED的R、G、B的值
    delay((2) * 1000);    //延时1000ms
  } else {
    muZa.clearRGB();    //清除灯光效果
  }
}

```

### 结果
根据周围环境的噪音等级自动打开或者关闭灯光。
