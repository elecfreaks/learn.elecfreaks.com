# 走迷宫

## 目的
制作一个背景随着光线变化而变化的迷宫。

## 使用材料
1 x [饼干游戏编程学习机](https://item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-18602834185.82.51a95ccfE1IJt1&id=644090757603)
![retro-case-01-01.png](https://cdn.nlark.com/yuque/0/2021/png/12684684/1621232942695-64f1bd5c-64d1-4b18-a446-d057ff58bdf4.png#clientId=u290807aa-dcd0-4&from=ui&height=286&id=u89db64dd&margin=%5Bobject%20Object%5D&name=retro-case-01-01.png&originHeight=497&originWidth=400&originalType=binary&ratio=1&size=213971&status=done&style=none&taskId=u8294799d-88ae-4f0d-9430-a08c54e4683&width=230)

## 软件
[微软makecode](https://arcade.makecode.com/)

## 编程
由于在这个案例中使用了光线传感器，所以需要按照以下步骤添加对应扩展库。
打开`高级`，选择`扩展`。
![retro-case-09-07.png](https://cdn.nlark.com/yuque/0/2021/png/12684684/1623318144827-822b5245-863a-4054-9be2-f6caef34e803.png#clientId=uec72d3f4-d703-4&from=drop&id=u90726c1f&margin=%5Bobject%20Object%5D&name=retro-case-09-07.png&originHeight=399&originWidth=600&originalType=binary&ratio=1&size=64054&status=done&style=none&taskId=ue024cbe6-3a04-4c67-8734-0f3478e0521)

在弹出窗口搜索`controller`，并选择`controller扩展库`。
![retro-case-09-08.png](https://cdn.nlark.com/yuque/0/2021/png/12684684/1623318371993-213e0c57-9a52-44de-a225-f52dbcb02744.png#clientId=uec72d3f4-d703-4&from=drop&id=u0b0a2c8d&margin=%5Bobject%20Object%5D&name=retro-case-09-08.png&originHeight=270&originWidth=600&originalType=binary&ratio=1&size=36529&status=done&style=none&taskId=ub31da819-2c91-4280-b957-783c65a38bf)
添加完成后，模块选择区出现三个积木选择模块。
目前硬件上使用光线传感器、加速度计、振动马达的相关积木块，可以在控制器的扩展插件一栏中找到。
![retro-case-09-09.png](https://cdn.nlark.com/yuque/0/2021/png/12684684/1623318841107-51b7c655-94a5-4d96-a552-8a54afc62c59.png#clientId=uec72d3f4-d703-4&from=drop&id=u4307e196&margin=%5Bobject%20Object%5D&name=retro-case-09-09.png&originHeight=408&originWidth=600&originalType=binary&ratio=1&size=100563&status=done&style=none&taskId=u18fab68d-7db9-4344-a919-3fa570a6763)

`新建精灵`，`设置精灵初始位置`，`通过按键移动精灵`，`设置地图图块`，`设置镜头跟随精灵移动`。
![retro-case-10-01.png](https://cdn.nlark.com/yuque/0/2021/png/12684684/1623379186516-ea06d4c4-6417-4033-9e59-b1bae2c4a822.png#clientId=u4049a5d1-1fe0-4&from=drop&id=u6e29a6d6&margin=%5Bobject%20Object%5D&name=retro-case-10-01.png&originHeight=353&originWidth=514&originalType=binary&ratio=1&size=68870&status=done&style=none&taskId=u31c19fd7-82d4-4fe5-bfc1-ac5dce37d83)
先画出迷宫入口，出口，以及墙体。
![retro-case-10-02.png](https://cdn.nlark.com/yuque/0/2021/png/12684684/1623379278323-0f15e714-b1ae-46ec-8acc-d4bf1523fd1e.png#clientId=u4049a5d1-1fe0-4&from=drop&id=u3b74b309&margin=%5Bobject%20Object%5D&name=retro-case-10-02.png&originHeight=267&originWidth=600&originalType=binary&ratio=1&size=90886&status=done&style=none&taskId=u5c7740ac-94fc-4ba6-a2d3-31165dd3386)

再根据墙体设置体积碰撞。
![retro-case-10-03.png](https://cdn.nlark.com/yuque/0/2021/png/12684684/1623379841740-134f0e98-99c5-4787-9906-e43c2728d5d6.png#clientId=u4049a5d1-1fe0-4&from=drop&id=ud173ca37&margin=%5Bobject%20Object%5D&name=retro-case-10-03.png&originHeight=266&originWidth=600&originalType=binary&ratio=1&size=86992&status=done&style=none&taskId=ud20d266e-f965-4227-b6d4-f49368ea64b)

`当亮度较暗时`，`设置背景颜色为黑色`，`当亮度较亮时`，`设置背景颜色为浅蓝色`。
![retro-case-10-04.png](https://cdn.nlark.com/yuque/0/2021/png/12684684/1623379950208-9ee66655-cd73-4f85-b118-d91626a1640d.png#clientId=u4049a5d1-1fe0-4&from=drop&id=uf4a1da86&margin=%5Bobject%20Object%5D&name=retro-case-10-04.png&originHeight=134&originWidth=434&originalType=binary&ratio=1&size=24035&status=done&style=none&taskId=u432cfe3f-da6e-4e75-80d8-f00de50d142)

`当精灵碰到入口位置的图块时`，`开始倒计时十秒`，`并振动500m`。
![retro-case-10-05.png](https://cdn.nlark.com/yuque/0/2021/png/12684684/1623380265025-4b058529-7f2a-417e-9ffa-31bfe9ed9c3f.png#clientId=u4049a5d1-1fe0-4&from=drop&id=ufb2b359e&margin=%5Bobject%20Object%5D&name=retro-case-10-05.png&originHeight=202&originWidth=600&originalType=binary&ratio=1&size=36359&status=done&style=none&taskId=ue32cbbee-f433-4ac6-9038-e3f198c711f)

`当精灵碰到终点位置的图块时`，`停止倒计时`，`设置礼炮纸屑特效`，`振动500ms`，`设置游戏结束`。
![retro-case-10-06.png](https://cdn.nlark.com/yuque/0/2021/png/12684684/1623380408546-91988214-ca11-49e9-b524-892f98646b7e.png#clientId=u4049a5d1-1fe0-4&from=drop&id=u87835763&margin=%5Bobject%20Object%5D&name=retro-case-10-06.png&originHeight=295&originWidth=600&originalType=binary&ratio=1&size=53148&status=done&style=none&taskId=u15542c55-4358-4cd7-9d36-9e8e2da9973)

完整程序：
![retro-case-10-07.png](https://cdn.nlark.com/yuque/0/2021/png/12684684/1623380524148-d52ded69-21de-4ec0-9078-6006a0972eb8.png#clientId=u4049a5d1-1fe0-4&from=drop&id=u5de9f50e&margin=%5Bobject%20Object%5D&name=retro-case-10-07.png&originHeight=998&originWidth=600&originalType=binary&ratio=1&size=183625&status=done&style=none&taskId=u213f6325-f5bf-4d6d-ab13-a3f0110abc7)

### 程序

请参考程序连接：[https://makecode.com/_XmF9Vi8VK665](https://makecode.com/_XmF9Vi8VK665)

## 程序下载
请查看程序下载的相关文档：[程序下载方式](https://www.yuque.com/elecfreaks-learn/retro/wxo25w)

## 结论
精灵从入口处进入地图则开始倒计时，当倒计时结束还未到达终点则游戏结束，在倒计时结束前到达终点则游戏胜利，背景颜色会根据环境光线亮度自动变化，当亮度较暗时，背景颜色为黑色，当亮度较亮时，背景颜色为浅蓝色。
