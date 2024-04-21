# 飞机大战（二）

## 目的

制作一个使用加速度计控制战机飞行的飞机大战小游戏。

## 使用材料

1 x [饼干游戏编程学习机](https://item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-18602834185.82.51a95ccfE1IJt1&id=644090757603)

![retro-case-01-01.png](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/retro-case-01-01.png)

## 软件

[微软makecode](https://arcade.makecode.com/)

## 编程

在[飞机大战（一）](https://www.yuque.com/elecfreaks-learn/retro/bm01di)的基础上进行修改，通过加速度计控制战机飞行，并且让战机自动发射子弹。
飞机大战（一）的程序：[https://makecode.com/_75rf2EgEPTW4](https://makecode.com/_75rf2EgEPTW4)

由于在这个案例中使用了加速度计，所以需要按照以下步骤添加对应扩展库。
打开`高级`，选择`扩展`。

![retro-case-09-07.png](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/retro-case-09-07.png)

在弹出窗口搜索`controller`，并选择`controller扩展库`。

![retro-case-09-08.png](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/retro-case-09-08.png)

添加完成后，模块选择区出现三个积木选择模块。

目前硬件上使用光线传感器、加速度计、振动马达的相关积木块，可以在控制器的扩展插件一栏中找到。

![retro-case-09-09.png](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/retro-case-09-09.png)

`新建精灵`，为了防止精灵移动时走出屏幕画面外，`设置精灵处于屏幕范围内`，`设置场景特效为星图`。

![retro-case-09-01.png](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/retro-case-09-01.png)

在`无限循环`中，将`加速度计返回的x轴的值从-800到800映射到160至0并存入变量x`中，将`加速度计返回的y轴的值从-1023到1023映射到0至120并存入变量y`中，然后`设置战机x轴和y轴的位置分别为变量x的值和变量y的值`。（加速度计x轴和y轴的返回值的范围为-1023~1023）

![retro-case-09-06.png](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/retro-case-09-06.png)

![retro-case-09-02.png](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/retro-case-09-02.png)

`当游戏每隔1000ms时`，则`将弹射物从X屏幕上方的随机位置以50的速度向下弹射`，`设置弹射物类型`，`当碰到敌人时生命值-1`，并自动`销毁敌人`。

![retro-case-09-03.png](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/retro-case-09-03.png)

`当游戏每隔300ms时`，`从精灵处发射弹射物，x轴速度为0，y轴速度为-70`，`弹射物设为火焰特效`，`当弹射物和敌人碰撞时`，`销毁弹射物和敌人`，`得分+1`。

![retro-case-09-04.png](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/retro-case-09-04.png)

完整程序：

![retro-case-09-05.png](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/retro-case-09-05.png)

### 程序

请参考程序连接：[https://makecode.com/_4rr176iuCAYX](https://makecode.com/_4rr176iuCAYX)

## 程序下载

请查看程序下载的相关文档：[程序下载方式](https://www.yuque.com/elecfreaks-learn/retro/wxo25w)

## 结论

可以通过加速度计控制精灵在画面中移动，初始生命值为3，当玩家控制的精灵碰撞到敌人时，则-1生命值，当生命值归零则游戏结束，战机自动发射子弹，每击中一个敌人则+1分。
