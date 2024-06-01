# 积木电机

## 规格参数

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/ef09087-1.png)

| 项目 | 规格 |
| :-: | :-: |
| SKU | EF09087 |
| 使用环境条件 |  |
| 工作电压 | 3V |
| 工作温度 | -10℃～50℃ |
| 机械特性 |  |
| 机械极限角度 | 360° |
| 重量 | 9 ± 1g |
| 减速比 | 1/266 |
| 齿轮虚位 | ≤1° |
| 控制特性 |  |
| 操作角度 | 360° |
| 选装方向         | 顺时针 |
| 可动作角度范围   | 360° |


| 项目(Item)       | 3V 测试           |
|------------------|------------------|
| 空載速度          | 70±5r/min      |
| 空載电流          | 70±20mA          |
| 停止扭力          | 0.5±0.1 kg-cm    |
| 停止电流          | 0.8±0.1A         |
| 待机电流          | 7±1mA            |
| 空載寿命          | 大于 200 小时    |


## 硬件连接

此处以wukong扩展板为例。

将电机连接到扩展板的M1接口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/ef09087-2.png)

## 添加专属扩展库

在MakeCode的代码抽屉中点击“高级”，查看更多代码选项。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/ef09081-3.png)

为了给哪吒扩展板编程，我们需要添加一个扩展库。在代码抽屉底部找到“扩展”，并点击它。这时会弹出一个对话框，搜索“哪吒”，然后点击下载这个代码库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/ef09081-4.png)

*注意：*如果你得到一个提示说一些代码库因为不兼容的原因将被删除，你可以根据提示继续操作，或者在项目菜单栏里面新建一个项目。

### 如图所示编写程序

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/ef09087-5.png)


### 参考程序

请参考程序连接：[https://makecode.microbit.org/_U3p38hgW2d33](https://makecode.microbit.org/_U3p38hgW2d33)

你也可以通过以下网页直接下载程序，下载完成后即可开始运行程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_U3p38hgW2d33"
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

按键A按下时电机转动，当按键B按下时电机停止转动。

### 注意事项

<b>注意：当使用电机时，应该注意电机是否有堵转，如果电机堵转，可能有烧毁的风险。</b>
