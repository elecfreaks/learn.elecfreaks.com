# FAQ 02
## Q:单独添加wukong软件库或者PlanetX软件库都可以使用，但同时添加这两个软件库会导致程序无法编译或者下载？
A:当我们同时添加多个软件库时，需要注意检查多个软件库之间是否会出现冲突。
比如我们同时添加了wukong软件库和PlanetX软件库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/FAQ-microbit-02-01.png)

那么在点击下载时就会提示错误信息`-> Line 1 ('sendBufferAsm:'), error: label redefinition`。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/FAQ-microbit-02-02.png)

此时请点击图中红框位置“JaveScript”切换编程界面。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/FAQ-microbit-02-03.png)

切换界面后，点击界面左边的资源管理器；

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/FAQ-microbit-02-04.png)

将两个相互冲突的软件库中的一个删掉即可，这里以删除PlanetX软件库为例。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com//images/FAQ-microbit-02-05.png)


