# 躲避陨石

## 目的
控制精灵躲避随机掉落的陨石。

## 使用材料

1 x [饼干游戏编程学习机](https://item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-18602834185.82.51a95ccfE1IJt1&id=644090757603)

![retro-case-01-01.png](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/retroarcade/images/retro-case-01-01.png)

## 软件

[微软makecode](https://arcade.makecode.com/)

## 编程

`新建精灵`，通过`使用按键移动精灵`积木块控制精灵移动，为了防止精灵移动时走出屏幕画面外，`设置精灵处于屏幕范围内`，`设置场景特效为星图`。

![2.1.PNG](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/retroarcade/images/2.1.PNG)

![retro-case-02-01.png](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/retroarcade/images/retro-case-02-01.png)

`当游戏每隔1000ms时`，则`将弹射物从屏幕上方的随机位置以50的速度向下弹射`。

![2.2.PNG](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/retroarcade/images/2.2.PNG)

![2.3.PNG](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/retroarcade/images/2.3.PNG)

![2.4.PNG](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/retroarcade/images/2.4.PNG)

![2.5.PNG](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/retroarcade/images/2.5.PNG)

![retro-case-02-02.png](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/retroarcade/images/retro-case-02-02.png)

当玩家控制的`精灵碰撞到掉落的陨石时`，则`游戏失败`。

![2.6.PNG](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/retroarcade/images/2.6.PNG)

![2.7.PNG](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/retroarcade/images/2.7.PNG)

![retro-case-02-03.png](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/retroarcade/images/retro-case-02-03.png)

### 程序

请参考程序连接：[https://makecode.com/_EiALcT5tbJ35](https://makecode.com/_EiALcT5tbJ35)

你也可以通过以下网页直接下载程序。

## 程序下载

请查看程序下载的相关文档：[程序下载方式](https://www.yuque.com/elecfreaks-learn/retro/wxo25w)

## 结论

可以通过按键控制精灵在画面中移动，当玩家控制的精灵碰撞到掉落的陨石时，则游戏失败。
