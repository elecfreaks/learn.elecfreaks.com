# 飞机大战（二）

## 目的
制作一个使用加速度计控制战机飞行的飞机大战小游戏。

## 使用材料
1 x [饼干游戏编程学习机](https://item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-18602834185.82.51a95ccfE1IJt1&id=644090757603)
![retro-case-01-01.png](https://cdn.nlark.com/yuque/0/2021/png/12684684/1621232942695-64f1bd5c-64d1-4b18-a446-d057ff58bdf4.png#clientId=u290807aa-dcd0-4&from=ui&height=286&id=u89db64dd&margin=%5Bobject%20Object%5D&name=retro-case-01-01.png&originHeight=497&originWidth=400&originalType=binary&ratio=1&size=213971&status=done&style=none&taskId=u8294799d-88ae-4f0d-9430-a08c54e4683&width=230)

## 软件
[微软makecode](https://arcade.makecode.com/)

## 编程
在[飞机大战（一）](https://www.yuque.com/elecfreaks-learn/retro/bm01di)的基础上进行修改，通过加速度计控制战机飞行，并且让战机自动发射子弹。
飞机大战（一）的程序：[https://makecode.com/_75rf2EgEPTW4](https://makecode.com/_75rf2EgEPTW4)
由于在这个案例中使用了加速度计，所以需要按照以下步骤添加对应扩展库。
打开`高级`，选择`扩展`。
![retro-case-09-07.png](https://cdn.nlark.com/yuque/0/2021/png/12684684/1623318144827-822b5245-863a-4054-9be2-f6caef34e803.png#clientId=uec72d3f4-d703-4&from=drop&id=u90726c1f&margin=%5Bobject%20Object%5D&name=retro-case-09-07.png&originHeight=399&originWidth=600&originalType=binary&ratio=1&size=64054&status=done&style=none&taskId=ue024cbe6-3a04-4c67-8734-0f3478e0521)

在弹出窗口搜索`controller`，并选择`controller扩展库`。
![retro-case-09-08.png](https://cdn.nlark.com/yuque/0/2021/png/12684684/1623318371993-213e0c57-9a52-44de-a225-f52dbcb02744.png#clientId=uec72d3f4-d703-4&from=drop&id=u0b0a2c8d&margin=%5Bobject%20Object%5D&name=retro-case-09-08.png&originHeight=270&originWidth=600&originalType=binary&ratio=1&size=36529&status=done&style=none&taskId=ub31da819-2c91-4280-b957-783c65a38bf)
添加完成后，模块选择区出现三个积木选择模块。
目前硬件上使用光线传感器、加速度计、振动马达的相关积木块，可以在控制器的扩展插件一栏中找到。
![retro-case-09-09.png](https://cdn.nlark.com/yuque/0/2021/png/12684684/1623318841107-51b7c655-94a5-4d96-a552-8a54afc62c59.png#clientId=uec72d3f4-d703-4&from=drop&id=u4307e196&margin=%5Bobject%20Object%5D&name=retro-case-09-09.png&originHeight=408&originWidth=600&originalType=binary&ratio=1&size=100563&status=done&style=none&taskId=u18fab68d-7db9-4344-a919-3fa570a6763)

`新建精灵`，为了防止精灵移动时走出屏幕画面外，`设置精灵处于屏幕范围内`，`设置场景特效为星图`。
![retro-case-09-01.png](https://cdn.nlark.com/yuque/0/2021/png/12684684/1623316438077-caf69c50-21f6-4ede-b9ea-b32e16557e73.png#clientId=uec72d3f4-d703-4&from=drop&id=u43fb40f4&margin=%5Bobject%20Object%5D&name=retro-case-09-01.png&originHeight=203&originWidth=354&originalType=binary&ratio=1&size=30386&status=done&style=none&taskId=u655318d7-22ae-476a-ac36-19d2e2cbc1f)

在`无限循环`中，将`加速度计返回的x轴的值从-800到800映射到160至0并存入变量x`中，将`加速度计返回的y轴的值从-1023到1023映射到0至120并存入变量y`中，然后`设置战机x轴和y轴的位置分别为变量x的值和变量y的值`。（加速度计x轴和y轴的返回值的范围为-1023~1023）
![retro-case-09-06.png](https://cdn.nlark.com/yuque/0/2021/png/12684684/1623317585524-991086cd-5909-4916-b47b-3c27f356750d.png#clientId=uec72d3f4-d703-4&from=drop&height=542&id=u88389d67&margin=%5Bobject%20Object%5D&name=retro-case-09-06.png&originHeight=737&originWidth=544&originalType=binary&ratio=1&size=96243&status=done&style=none&taskId=u9d43b82b-03e9-4b68-aa8c-7b22bc6df0d&width=400)
![retro-case-09-02.png](https://cdn.nlark.com/yuque/0/2021/png/12684684/1623316503830-556d27d4-82bd-459e-92dd-7f27f22f48ed.png#clientId=uec72d3f4-d703-4&from=drop&id=ub22366a5&margin=%5Bobject%20Object%5D&name=retro-case-09-02.png&originHeight=170&originWidth=567&originalType=binary&ratio=1&size=44773&status=done&style=none&taskId=uedbf4414-cc14-427f-b945-8e9ef20adc8)

`当游戏每隔1000ms时`，则`将弹射物从X屏幕上方的随机位置以50的速度向下弹射`，`设置弹射物类型`，`当碰到敌人时生命值-1`，并自动`销毁敌人`。
![retro-case-09-03.png](https://cdn.nlark.com/yuque/0/2021/png/12684684/1623317077853-7b0f5f3b-0b80-4c25-8caa-3c91631c173d.png#clientId=uec72d3f4-d703-4&from=drop&id=DSrOf&margin=%5Bobject%20Object%5D&name=retro-case-09-03.png&originHeight=304&originWidth=463&originalType=binary&ratio=1&size=62758&status=done&style=none&taskId=u08c5b318-7dd4-4e14-b04e-d083d09ccd4)

`当游戏每隔300ms时`，`从精灵处发射弹射物，x轴速度为0，y轴速度为-70`，`弹射物设为火焰特效`，`当弹射物和敌人碰撞时`，`销毁弹射物和敌人`，`得分+1`。
![retro-case-09-04.png](https://cdn.nlark.com/yuque/0/2021/png/12684684/1623317428764-0dfd49b9-106b-494e-b900-21f3a92281b0.png#clientId=uec72d3f4-d703-4&from=drop&id=ufbb9e5ea&margin=%5Bobject%20Object%5D&name=retro-case-09-04.png&originHeight=265&originWidth=510&originalType=binary&ratio=1&size=47875&status=done&style=none&taskId=u21fc028c-5130-4dbd-a350-53f5c6972b5)

完整程序：
![retro-case-09-05.png](https://cdn.nlark.com/yuque/0/2021/png/12684684/1623317407875-eb89184b-5239-4a8b-8d37-8d30c1f8d39a.png#clientId=uec72d3f4-d703-4&from=drop&id=u1e5d281a&margin=%5Bobject%20Object%5D&name=retro-case-09-05.png&originHeight=933&originWidth=600&originalType=binary&ratio=1&size=188651&status=done&style=none&taskId=u9ea61614-d557-4abc-9eb9-db3c08fde73)

### 程序

请参考程序连接：[https://makecode.com/_4rr176iuCAYX](https://makecode.com/_4rr176iuCAYX)

## 程序下载
请查看程序下载的相关文档：[程序下载方式](https://www.yuque.com/elecfreaks-learn/retro/wxo25w)

## 结论
可以通过加速度计控制精灵在画面中移动，初始生命值为3，当玩家控制的精灵碰撞到敌人时，则-1生命值，当生命值归零则游戏结束，战机自动发射子弹，每击中一个敌人则+1分。
