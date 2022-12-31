# 躲避陨石

## 目的
控制精灵躲避随机掉落的陨石。

## 使用材料
1 x [饼干游戏编程学习机](https://item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-18602834185.82.51a95ccfE1IJt1&id=644090757603)
![retro-case-01-01.png](https://cdn.nlark.com/yuque/0/2021/png/12684684/1621223583105-c08df1b3-5454-449e-86f3-85917fff021f.png#clientId=u636ed421-9e5b-4&from=ui&height=286&id=l7IlO&margin=%5Bobject%20Object%5D&name=retro-case-01-01.png&originHeight=497&originWidth=400&originalType=binary&ratio=1&size=213971&status=done&style=none&taskId=u1d3e8a65-67d2-4430-9310-129eaebb977&width=230)

## 软件
[微软makecode](https://arcade.makecode.com/)

## 编程
`新建精灵`，通过`使用按键移动精灵`积木块控制精灵移动，为了防止精灵移动时走出屏幕画面外，`设置精灵处于屏幕范围内`，`设置场景特效为星图`。
![2.1.PNG](https://cdn.nlark.com/yuque/0/2021/png/12684684/1621306588036-627423f3-0fdb-475d-aa54-3144144090c2.png#clientId=u8f07cef6-6ba7-4&from=ui&id=u858104a4&margin=%5Bobject%20Object%5D&name=2.1.PNG&originHeight=184&originWidth=466&originalType=binary&ratio=1&size=16884&status=done&style=none&taskId=u0afc2ad0-b8f1-447e-ba4d-a6dc43352ea)
![retro-case-02-01.png](https://cdn.nlark.com/yuque/0/2021/png/12684684/1621223665378-56c03fb2-9727-4eb6-b442-24dbbd3be91d.png#clientId=u636ed421-9e5b-4&from=ui&id=zDZ8f&margin=%5Bobject%20Object%5D&name=retro-case-02-01.png&originHeight=207&originWidth=400&originalType=binary&ratio=1&size=35362&status=done&style=none&taskId=uf2ed9860-2f93-4c39-bb43-062a3634a5c)

`当游戏每隔1000ms时`，则`将弹射物从屏幕上方的随机位置以50的速度向下弹射`。
![2.2.PNG](https://cdn.nlark.com/yuque/0/2021/png/12684684/1621306759189-b4cd68a5-6d8a-4cf0-9218-9fc8110f5bab.png#clientId=u8f07cef6-6ba7-4&from=ui&id=ub66c2be4&margin=%5Bobject%20Object%5D&name=2.2.PNG&originHeight=275&originWidth=427&originalType=binary&ratio=1&size=20714&status=done&style=none&taskId=uc9eea130-f9b0-49c2-a114-b1e0eb1372e)
![2.3.PNG](https://cdn.nlark.com/yuque/0/2021/png/12684684/1621307085864-540e71d6-821c-4edd-8343-35b770f49cb3.png#clientId=u8f07cef6-6ba7-4&from=ui&id=u2496cba6&margin=%5Bobject%20Object%5D&name=2.3.PNG&originHeight=149&originWidth=600&originalType=binary&ratio=1&size=45560&status=done&style=none&taskId=u8e84f69e-da41-4e62-8536-38627311c1b)
![2.4.PNG](https://cdn.nlark.com/yuque/0/2021/png/12684684/1621307172771-edc121c0-b6b4-4ccf-9359-e4636d91ca97.png#clientId=u8f07cef6-6ba7-4&from=ui&id=ubf141423&margin=%5Bobject%20Object%5D&name=2.4.PNG&originHeight=197&originWidth=522&originalType=binary&ratio=1&size=26729&status=done&style=none&taskId=u62c3b51b-e3fb-4b4a-ae06-c219bb5790e)
![2.5.PNG](https://cdn.nlark.com/yuque/0/2021/png/12684684/1621307243735-10adba6d-883f-4b8a-b84d-457e140a7dfb.png#clientId=u8f07cef6-6ba7-4&from=ui&id=uea542648&margin=%5Bobject%20Object%5D&name=2.5.PNG&originHeight=222&originWidth=429&originalType=binary&ratio=1&size=21869&status=done&style=none&taskId=u9187e383-62fa-476c-8e23-3a6e79edf56)
![retro-case-02-02.png](https://cdn.nlark.com/yuque/0/2021/png/12684684/1621223672732-152ff68a-c38f-45e8-a6a7-d635386862d9.png#clientId=u636ed421-9e5b-4&from=ui&id=P1YHj&margin=%5Bobject%20Object%5D&name=retro-case-02-02.png&originHeight=341&originWidth=500&originalType=binary&ratio=1&size=68695&status=done&style=none&taskId=uc645ce9c-1bd7-4d8d-855a-1c37e29fb86)

当玩家控制的`精灵碰撞到掉落的陨石时`，则`游戏失败`。
![2.6.PNG](https://cdn.nlark.com/yuque/0/2021/png/12684684/1621307360679-aa43d0b6-3548-4756-953b-35570653a92d.png#clientId=u8f07cef6-6ba7-4&from=ui&id=u2a60787f&margin=%5Bobject%20Object%5D&name=2.6.PNG&originHeight=244&originWidth=600&originalType=binary&ratio=1&size=69951&status=done&style=none&taskId=ub893442e-1008-429b-8993-987d94caac8)
![2.7.PNG](https://cdn.nlark.com/yuque/0/2021/png/12684684/1621307425006-6096a736-4ef9-47ed-8898-7d995c59a442.png#clientId=u8f07cef6-6ba7-4&from=ui&id=u371b3901&margin=%5Bobject%20Object%5D&name=2.7.PNG&originHeight=89&originWidth=365&originalType=binary&ratio=1&size=7006&status=done&style=none&taskId=u2b9754fc-87a8-47cc-b6b4-234ce79a69c)
![retro-case-02-03.png](https://cdn.nlark.com/yuque/0/2021/png/12684684/1621223684610-8362143e-ba94-4666-9df6-7bc054a3f3f2.png#clientId=u636ed421-9e5b-4&from=ui&id=BseMa&margin=%5Bobject%20Object%5D&name=retro-case-02-03.png&originHeight=521&originWidth=600&originalType=binary&ratio=1&size=110920&status=done&style=none&taskId=ubd69810a-7477-42b3-a2ed-f88e10c67d7)

### 程序
请参考程序连接：[https://makecode.com/_EiALcT5tbJ35](https://makecode.com/_EiALcT5tbJ35)
你也可以通过以下网页直接下载程序。

## 程序下载
请查看程序下载的相关文档：[程序下载方式](https://www.yuque.com/elecfreaks-learn/retro/wxo25w)
## 结论
可以通过按键控制精灵在画面中移动，当玩家控制的精灵碰撞到掉落的陨石时，则游戏失败。
