# 飞机大战（一）

## 目的
制作一个简单的飞机大战小游戏。

## 使用材料

1 x [饼干游戏编程学习机](https://item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-18602834185.82.51a95ccfE1IJt1&id=644090757603)

![retro-case-01-01.png](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/retroarcade/images/retro-case-01-01.png)
## 软件

[微软makecode](https://arcade.makecode.com/)

## 编程

`新建精灵`，通过`使用按键移动精灵`积木块控制精灵移动，为了防止精灵移动时走出屏幕画面外，`设置精灵处于屏幕范围内`，`设置场景特效为星图`。

![retro-case-03-01.png](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/retroarcade/images/retro-case-03-01.png)

`设置初始生命值为3`，`当游戏每隔1000ms时`，则`将弹射物从X屏幕上方的随机位置以50的速度向下弹射`，`设置弹射物类型`，`设置初始生命值为3`，`当碰到敌人时生命值-1`，并自动`销毁敌人`。

![3.1.PNG](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/retroarcade/images/3.1.PNG)

![3.2.PNG](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/retroarcade/images/3.2.PNG)

![retro-case-03-02.png](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/retroarcade/images/retro-case-03-02.png)

`当按键A按下时`，`从精灵处发射弹射物，x轴速度为0，y轴速度为-70`，`弹射物设为火焰特效`，`当弹射物和敌人碰撞时`，`销毁弹射物和敌人`，`得分+1`。

![3.3.PNG](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/retroarcade/images/3.3.PNG)

![3.4.PNG](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/retroarcade/images/3.4.PNG)

![retro-case-03-03.png](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/retroarcade/images/retro-case-03-03.png)

### 程序

请参考程序连接：[https://makecode.com/_gd04au22E9XJ](https://makecode.com/_gd04au22E9XJ)

## 程序下载

请查看程序下载的相关文档：[程序下载方式](https://www.yuque.com/elecfreaks-learn/retro/wxo25w)

## 结论

可以通过按键控制精灵在画面中移动，初始生命值为3，当玩家控制的精灵碰撞到敌人时，则-1生命值，当生命值归零则游戏结束，按下按键A则发射子弹，每击中一个敌人则+1分。
