# 灰色积木舵机

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/servo-1-1.png)

## 规格参数

| 项目 | 规格 |
| :-: | :-: |
| SKU | EF10155 |
| **使用环境条件** |  |
| 工作电压 | 4.8V～6V |
| 工作温度 | -10℃～50℃ |
| **机械特性** |  |
| 机械极限角度 | 360° |
| 重量 | 20± 1g |
| 舵片规格 | 十字孔双输出（1 个乐高单位深） |
| 减速比 | 1/300 |
| 齿轮虚位 | ≤1° |
| **控制特性** |  |
| 操作角度 | 360°±10°(在 500→2500 μsec) |
| 二边角度差       | ≤10°                |
| 回中差           | ≤2°                 |
| 中立位置         | 1500μsec          |
| 脉波信号虚位     | ≤4μsec              |
| 选装方向         | 顺时针 (1500→500μsec) |
| 脉波宽度范围     | 500→2500 μsec   |
| 可动作角度范围   | 360°(在 500→2500 μsec)   |


| 项目        | 4.8V 测试             | 6.0V 测试            |
|------------------|---------------------|---------------------|
| 空载速度         | 0.14±0.01sec/60°    | 0.12±0.01sec/60°    |
| 空载电流         | 70±20mA             | 90±20mA             |
| 停止扭力         | 1.8±0.2 kg-cm       | 2±0.2kg-cm          |
| 停止电流         | 0.8±0.1A            | 0.9±0.1A            |
| 待机电流         | 7±1mA               | 7±1 mA              |
| 空载寿命         | >50000 次           | >40000 次           |
| 温飘（环境温度 25°C） | ≤1°                | ≤1°                |




## 硬件连接

此处以哪吒扩展板为例。

将舵机连接到S1接口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/servo-1-2.png)


## 添加专属扩展库

在MakeCode的代码抽屉中点击“高级”，查看更多代码选项。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/motor-1-3.png)

为了给哪吒扩展板编程，我们需要添加一个扩展库。在代码抽屉底部找到“扩展”，并点击它。这时会弹出一个对话框，搜索“哪吒”，然后点击下载这个代码库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/motor-1-4.png)

*注意：*如果你得到一个提示说一些代码库因为不兼容的原因将被删除，你可以根据提示继续操作，或者在项目菜单栏里面新建一个项目。




### 如图所示编写程序


![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/servo-1-5.png)


### 参考程序

请参考程序连接：[https://makecode.microbit.org/_FfMWV4cfpUTX](https://makecode.microbit.org/_FfMWV4cfpUTX)

你也可以通过以下网页直接下载程序，下载完成后即可开始运行程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_FfMWV4cfpUTX"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>



### 结果

按键A按下时360°舵机转动到0°，按键B按下时360°舵机转动到360°。

### 舵机注意事项

<b>当使用舵机时，应先调整舵机角度，并根据案例需求调整舵机角度进行验证，验证完成后再安装相应的结构件，防止出现堵转的情况而导致舵机烧毁。</b>
<br />
<b>注意：当使用舵机时，应该注意舵机是否有堵转，如果舵机堵转，可能有烧毁的风险。</b>
<br />
<b>注意：当使用舵机时，应注意舵机转动的动作后续是否需要添加延时，舵机转动需要时间执行，如果在舵机执行指令的过程中，出现新的舵机指令，会覆盖前一条舵机转动的指令，导致舵机转动不到位的情况。</b>
