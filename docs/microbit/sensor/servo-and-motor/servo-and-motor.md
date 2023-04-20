# 舵机和电机的使用

## 硬件连接

此处以哪吒扩展板为例。

将两个电机分别连接到M1和M2接口。

将180°舵机连接到S1接口，将360度舵机连接到S2接口，将连续旋转舵机连接到S3接口。

![](./images/servo-and-motor-01.png)


## 添加专属扩展库

在MakeCode的代码抽屉中点击“高级”，查看更多代码选项。

![](./images/03444_05.png)

为了给哪吒扩展板编程，我们需要添加一个扩展库。在代码抽屉底部找到“扩展”，并点击它。这时会弹出一个对话框，搜索“哪吒”，然后点击下载这个代码库。

![](./images/03444_06.png)

*注意：*如果你得到一个提示说一些代码库因为不兼容的原因将被删除，你可以根据提示继续操作，或者在项目菜单栏里面新建一个项目。


## 电机使用案例


<b><font size=5 color=red>注意：当使用电机时，应该注意电机是否有堵转，如果电机堵转，可能有烧毁的风险。</font></b>

### 如图所示编写程序


![](./images/03444_08.png)


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


## 舵机使用案例

<b><font size=5 color=red>当使用舵机时，应先调整舵机角度，并根据案例需求调整舵机角度进行验证，验证完成后再安装相应的结构件，防止出现堵转的情况而导致舵机烧毁。</font></b>

<b><font size=5 color=red>注意：当使用舵机时，应该注意舵机是否有堵转，如果舵机堵转，可能有烧毁的风险。</font></b>

### 如图所示编写程序


![](./images/03444_10.png)


### 参考程序
请参考程序连接：[https://makecode.microbit.org/_hFmaEV1sAay3](https://makecode.microbit.org/_hFmaEV1sAay3)

你也可以通过以下网页直接下载程序，下载完成后即可开始运行程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_hFmaEV1sAay3"
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
按键A按下时180°舵机转动到0°，按键B按下时360°舵机转动到360°，当按键A和按键B同时按下时，连续转动舵机以100%的速度转动。
