# 红色积木电机



![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/motor-1-1.png)

## 规格参数

| 项目 | 规格 |
| :-: | :-: |
| SKU | EF10154 |
| **使用环境条件** |  |
| 工作电压 | 3V～5.5V |
| 工作温度 | -10℃～50℃ |
| **机械特性** |  |
| 机械极限角度 | 360° |
| 重量 | 18 ± 1g |
| 舵片规格 | 十字孔双输出（1 个乐高单位深） |
| 减速比 | 1/140 |
| 齿轮虚位 | ≤1° |
| **控制特性** |  |
| 操作角度 | 360° |
| 选装方向         | 顺时针 |
| 可动作角度范围   | 360° |


| 项目      | 3V 测试             | 5V 测试             |
|------------------|--------------------|--------------------|
| 空载速度         | 90±10r/r/min       | 160±10r/r/min      |
| 空载电流         | 65±20mA            | 80±20mA            |
| 停止扭力         | 0.5±0.1 kg-cm      | 0.7±0.1 kg-cm      |
| 停止电流         | 0.70±0.2A          | 1.1±0.2A           |
| 马达转速         | 12500±10%          | 22000±10%          |
| 马达电流         | 小于 30 mA         | 小于 40 mA         |
| 空载寿命         | 大于 100 小时      | 大于 50 小时       |


## 硬件连接

此处以哪吒扩展板为例。

将两个电机分别连接到M1和M2接口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/motor-1-2.png)




## 添加专属扩展库

在MakeCode的代码抽屉中点击“高级”，查看更多代码选项。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/motor-1-3.png)

为了给哪吒扩展板编程，我们需要添加一个扩展库。在代码抽屉底部找到“扩展”，并点击它。这时会弹出一个对话框，搜索“哪吒”，然后点击下载这个代码库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/motor-1-4.png)

*注意：*如果你得到一个提示说一些代码库因为不兼容的原因将被删除，你可以根据提示继续操作，或者在项目菜单栏里面新建一个项目。


## 电机使用案例

<b>注意：当使用电机时，应该注意电机是否有堵转，如果电机堵转，可能有烧毁的风险。</b>

### 如图所示编写程序

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/motor-1-5.png)


### 参考程序

请参考程序连接：[https://makecode.microbit.org/_8g40hhK9rLvW](https://makecode.microbit.org/_8g40hhK9rLvW)

你也可以通过以下网页直接下载程序，下载完成后即可开始运行程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_8g40hhK9rLvW"
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

按键A按下时两个电机一起转动，当按键B按下时接在M1接口的电机停止转动，当按键A和B同时按下时两个电机同时停止转动。

### 注意事项

<b>注意：当使用电机时，应该注意电机是否有堵转，如果电机堵转，可能有烧毁的风险。</b>
