# 360° 9g舵机

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/ef09081-1.png)

## 规格参数

| 项目 | 规格 |
| :-: | :-: |
| SKU | EF09081 |
| 使用环境条件 |  |
| 工作电压 | 3.3～5V |
| 工作温度 | -25°C～70°C |
| 机械特性 |  |
| 机械极限角度 | 360° |
| 重量 | 10g±5% |


| 项目           | 3.3V 测试           | 5.0V 测试           |
|-------------------|--------------------|--------------------|
| 静态电流          | 5mA  | 5mA    |
| 空载转速          | 76RPM          | 120RPM           |
| 空载电流          | 90mA      | 90mA      |
| 堵转扭矩          | 1.3kg.cm         | 1.6kg.cm         |
| 堵转电流          | 400mA±10%              | 750mA±10%          |

## 硬件连接

此处以悟空扩展板为例。

将舵机连接到扩展板的S1接口。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/ef09081-2.png)


## 添加专属扩展库

在MakeCode的代码抽屉中点击“高级”，查看更多代码选项。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/ef09081-3.png)

为了给哪吒扩展板编程，我们需要添加一个扩展库。在代码抽屉底部找到“扩展”，并点击它。这时会弹出一个对话框，搜索“哪吒”，然后点击下载这个代码库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/ef09081-4.png)

*注意：*如果你得到一个提示说一些代码库因为不兼容的原因将被删除，你可以根据提示继续操作，或者在项目菜单栏里面新建一个项目。


### 如图所示编写程序

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/octopus-sensors/sensor/images/ef09081-5.png)


### 参考程序

请参考程序连接：[https://makecode.microbit.org/_ewhiK2hvfRX4](https://makecode.microbit.org/_ewhiK2hvfRX4)

你也可以通过以下网页直接下载程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_ewhiK2hvfRX4"
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

按键A按下时舵机全速转动，当按键B按下时舵机停止转动。

### 舵机注意事项

<b>当使用舵机时，应先调整舵机角度，并根据案例需求调整舵机角度进行验证，验证完成后再安装相应的结构件，防止出现堵转的情况而导致舵机烧毁。</b>
<br />
<b>注意：当使用舵机时，应该注意舵机是否有堵转，如果舵机堵转，可能有烧毁的风险。</b>
<br />
<b>注意：当使用舵机时，应注意舵机转动的动作后续是否需要添加延时，舵机转动需要时间执行，如果在舵机执行指令的过程中，出现新的舵机指令，会覆盖前一条舵机转动的指令，导致舵机转动不到位的情况。</b>
