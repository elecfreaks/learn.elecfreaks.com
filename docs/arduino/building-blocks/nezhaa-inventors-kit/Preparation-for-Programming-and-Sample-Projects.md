# 编程环境准备及示例
## 下载并安装Arduino IDE
Arduino 官方网站上下载最新版本的 Arduino IDE： [https://www.arduino.cc/en/Main/Software](https://www.arduino.cc/en/Main/Software)，并根据系统选择下载安装。
<br />
![](https://cdn.nlark.com/yuque/0/2022/png/12684684/1653101563143-3c6d3e7a-865c-45df-9d26-17c2fd4dde2d.png#clientId=u1d9825fe-9ff8-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u00284771&margin=%5Bobject%20Object%5D&originHeight=266&originWidth=600&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u5e3f92bf-e710-4809-89f0-4f19f19701c&title=)
## 软件编程
下载哪吒A主控盒的库文件[NezhaA-main.zip](https://github.com/elecfreaks/NezhaA/archive/refs/heads/main.zip)<br />下载哪吒A主控盒的依赖库文件[Adafruit_NeoPixel-master.zip](https://github.com/elecfreaks/MuZa/archive/refs/heads/main.zip)<br />打开Arduino IDE 并选择工具-开发板-Arduino Uno。
<br />
![](https://cdn.nlark.com/yuque/0/2022/png/12684684/1653101564468-3fcbe985-22a5-40f1-afa7-0d7e56672855.png#clientId=u1d9825fe-9ff8-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u9b6357ca&margin=%5Bobject%20Object%5D&originHeight=634&originWidth=600&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u1f8f5064-015a-44f6-b795-d3672152ce0&title=)
<br />
使用type-c数据线将哪吒A主控盒连接至电脑端。
<br />
![](https://cdn.nlark.com/yuque/0/2022/png/12684684/1653101564699-ce169bbc-424a-41e3-ad00-88f45cc3b257.png#clientId=u1d9825fe-9ff8-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u34a043c1&margin=%5Bobject%20Object%5D&originHeight=400&originWidth=600&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u0b2701e7-d383-473d-a617-02c150fc97d&title=)
<br />
连接完成后，点击工具-端口，设置硬件连接的端口。
<br />
![](https://cdn.nlark.com/yuque/0/2022/png/12684684/1653101564693-85113bee-7506-4c31-89ed-118028829b49.png#clientId=u1d9825fe-9ff8-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u4d5a03af&margin=%5Bobject%20Object%5D&originHeight=635&originWidth=600&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=uf18d561a-8580-4e2c-9d53-39adc241b84&title=)
<br />
点击项目-加载库-添加.ZIP库…。
<br />
![](https://cdn.nlark.com/yuque/0/2022/png/12684684/1653101564745-56851e0d-9cda-4537-a91d-33b5ccc7bdf1.png#clientId=u1d9825fe-9ff8-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=udad3e253&margin=%5Bobject%20Object%5D&originHeight=635&originWidth=600&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=uac4a54da-46fc-49a3-8fd9-19ce1cd1dee&title=)
<br />
选择NezhaA-main.zip，添加哪吒A主控盒的库文件。
<br />
![添加库文件.PNG](https://cdn.nlark.com/yuque/0/2022/png/12684684/1653105214612-f605748c-0a8a-4855-a0e8-7b5fd550748a.png#clientId=u1d9825fe-9ff8-4&crop=0&crop=0&crop=1&crop=1&from=ui&height=465&id=u1ab00535&margin=%5Bobject%20Object%5D&name=%E6%B7%BB%E5%8A%A0%E5%BA%93%E6%96%87%E4%BB%B6.PNG&originHeight=827&originWidth=1067&originalType=binary&ratio=1&rotation=0&showTitle=false&size=45706&status=done&style=none&taskId=u9491fecb-f101-4896-8d72-1b8b614d9e4&title=&width=600)
<br />
用同样的方法导入添加哪吒A主控盒的依赖库文件Adafruit_NeoPixel-master.zip。
## 硬件连接
分别将两个电机和两个舵机连接到哪吒A主控盒的M1、M2和S1、S2。
<br />
![](https://cdn.nlark.com/yuque/0/2022/png/12684684/1653101565965-87184b07-bc68-4448-9ca1-e8bab9ecaab9.png#clientId=u1d9825fe-9ff8-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=ue79a1e58&margin=%5Bobject%20Object%5D&originHeight=400&originWidth=600&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ua60f7c1f-6b16-4eba-9edd-a4fddfb0b66&title=)
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
<br />
![](https://cdn.nlark.com/yuque/0/2022/png/12684684/1653101565988-a6098895-0488-45f4-8be2-e05739b0477b.png#clientId=u1d9825fe-9ff8-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u29c1e149&margin=%5Bobject%20Object%5D&originHeight=352&originWidth=193&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u726db398-559b-48eb-84d2-38e801dbb77&title=)
<br />
选择保存路径，设置文件名并点击保存。
<br />
![](https://cdn.nlark.com/yuque/0/2022/png/12684684/1653101566052-c73d6794-363e-44ac-90b8-52ea84348dd2.png#clientId=u1d9825fe-9ff8-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u3d755b2d&margin=%5Bobject%20Object%5D&originHeight=435&originWidth=558&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u7f9e4696-2fbd-4046-91a5-4855db86397&title=)
<br />
点击上传按钮，将程序上传至哪吒A主控盒
<br />
![添加库文件2.PNG](https://cdn.nlark.com/yuque/0/2022/png/12684684/1653115853739-2254f714-6d72-4944-8f78-54f8ab12bc67.png#clientId=u1d9825fe-9ff8-4&crop=0&crop=0&crop=1&crop=1&from=ui&height=468&id=u0fa3b3cc&margin=%5Bobject%20Object%5D&name=%E6%B7%BB%E5%8A%A0%E5%BA%93%E6%96%87%E4%BB%B62.PNG&originHeight=830&originWidth=1063&originalType=binary&ratio=1&rotation=0&showTitle=false&size=55783&status=done&style=none&taskId=u7fedf6a9-a7bd-4287-ab0f-067487c4a79&title=&width=600)
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
