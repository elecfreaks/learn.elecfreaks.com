# 飞机大战（一）

## 目的
制作一个简单的飞机大战小游戏。

## 使用材料
1 x [饼干游戏编程学习机](https://item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-18602834185.82.51a95ccfE1IJt1&id=644090757603)
![retro-case-01-01.png](https://cdn.nlark.com/yuque/0/2021/png/12684684/1621232942695-64f1bd5c-64d1-4b18-a446-d057ff58bdf4.png#clientId=u290807aa-dcd0-4&from=ui&height=286&id=u89db64dd&margin=%5Bobject%20Object%5D&name=retro-case-01-01.png&originHeight=497&originWidth=400&originalType=binary&ratio=1&size=213971&status=done&style=none&taskId=u8294799d-88ae-4f0d-9430-a08c54e4683&width=230)

## 软件
[微软makecode](https://arcade.makecode.com/)

## 编程
`新建精灵`，通过`使用按键移动精灵`积木块控制精灵移动，为了防止精灵移动时走出屏幕画面外，`设置精灵处于屏幕范围内`，`设置场景特效为星图`。
![retro-case-03-01.png](https://cdn.nlark.com/yuque/0/2021/png/12684684/1621232984161-d5e5a2cc-e277-443f-9b8a-23752d642ab3.png#clientId=u290807aa-dcd0-4&from=ui&id=u79b6ffaf&margin=%5Bobject%20Object%5D&name=retro-case-03-01.png&originHeight=207&originWidth=400&originalType=binary&ratio=1&size=35362&status=done&style=none&taskId=ub39e4d63-d7fd-460d-be2b-944360d9914)

`设置初始生命值为3`，`当游戏每隔1000ms时`，则`将弹射物从X屏幕上方的随机位置以50的速度向下弹射`，`设置弹射物类型`，`设置初始生命值为3`，`当碰到敌人时生命值-1`，并自动`销毁敌人`。
![3.1.PNG](https://cdn.nlark.com/yuque/0/2021/png/12684684/1621318319641-2ef8a095-1f77-4c33-9fb2-62fa85fc6aab.png#clientId=u012dd38a-f7f5-4&from=ui&id=u6f7b736c&margin=%5Bobject%20Object%5D&name=3.1.PNG&originHeight=186&originWidth=339&originalType=binary&ratio=1&size=14749&status=done&style=none&taskId=u8ac37675-0225-400c-b415-82a7c6e455e)
![3.2.PNG](https://cdn.nlark.com/yuque/0/2021/png/12684684/1621318391259-6afa862e-7cbc-4472-ae12-bb6d8766f34a.png#clientId=u012dd38a-f7f5-4&from=ui&id=u93deebb8&margin=%5Bobject%20Object%5D&name=3.2.PNG&originHeight=226&originWidth=498&originalType=binary&ratio=1&size=22466&status=done&style=none&taskId=u34039a89-3411-4dba-a143-bfb903a043e)
![retro-case-03-02.png](https://cdn.nlark.com/yuque/0/2021/png/12684684/1621233012696-d18ce1c4-c3ca-4588-85e5-bfbd120e8c1c.png#clientId=u290807aa-dcd0-4&from=ui&id=ue8ca1dd4&margin=%5Bobject%20Object%5D&name=retro-case-03-02.png&originHeight=643&originWidth=600&originalType=binary&ratio=1&size=130516&status=done&style=none&taskId=u98098555-635f-4dcb-9625-b812786bb5a)

`当按键A按下时`，`从精灵处发射弹射物，x轴速度为0，y轴速度为-70`，`弹射物设为火焰特效`，`当弹射物和敌人碰撞时`，`销毁弹射物和敌人`，`得分+1`。
![3.3.PNG](https://cdn.nlark.com/yuque/0/2021/png/12684684/1621318479798-0b0418fc-d125-445b-bb3c-77e7f0deabb4.png#clientId=u012dd38a-f7f5-4&from=ui&id=u757bc752&margin=%5Bobject%20Object%5D&name=3.3.PNG&originHeight=154&originWidth=425&originalType=binary&ratio=1&size=12457&status=done&style=none&taskId=u962a0bb7-2fe9-44fc-8345-42423b67afc)
![3.4.PNG](https://cdn.nlark.com/yuque/0/2021/png/12684684/1621318566141-16b4df88-5849-46d1-ac41-1a49f55d74f7.png#clientId=u012dd38a-f7f5-4&from=ui&id=u49103e97&margin=%5Bobject%20Object%5D&name=3.4.PNG&originHeight=104&originWidth=497&originalType=binary&ratio=1&size=10068&status=done&style=none&taskId=u5ffc5ce4-de92-4d95-8880-c40a287c00d)
![retro-case-03-03.png](https://cdn.nlark.com/yuque/0/2021/png/12684684/1621233027387-9eea13e5-0278-4d39-9deb-0722c29033ad.png#clientId=u290807aa-dcd0-4&from=ui&id=u0506580c&margin=%5Bobject%20Object%5D&name=retro-case-03-03.png&originHeight=919&originWidth=600&originalType=binary&ratio=1&size=178786&status=done&style=none&taskId=u674c079a-8d96-4bd2-a39b-2f314577e05)

### 程序

请参考程序连接：[https://makecode.com/_gd04au22E9XJ](https://makecode.com/_gd04au22E9XJ)

## 程序下载
请查看程序下载的相关文档：[程序下载方式](https://www.yuque.com/elecfreaks-learn/retro/wxo25w)

## 结论
可以通过按键控制精灵在画面中移动，初始生命值为3，当玩家控制的精灵碰撞到敌人时，则-1生命值，当生命值归零则游戏结束，按下按键A则发射子弹，每击中一个敌人则+1分。
