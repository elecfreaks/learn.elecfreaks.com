# FAQ 03
## Q:当前程序在之前的使用中一直可以顺利运行，但现在突然无法编译下载。
A:当我们打开一个过去一直可以顺利运行的程序，并试图点击下载时，发现makecode反馈错误信息`program too big by 1352 bytes!`。

![](images/FAQ-microbit-03-01.png)

这是一个由于makecode更新所导致的BUG，makecode在V5.0.12版本的更新中限制了用户的可用内存，导致了曾经可以使用的程序现在可能无法使用。

点击右上角的齿轮图标，并点击About即可查看当前版本信息。

![](./images/FAQ-microbit-03-02.png)

版本信息

![](./images/FAQ-microbit-03-03.png)

当出现程序过大的错误信息时，请在网页的地址栏中输入网址`https://makecode.microbit.org/v4.0.18#editor`来使用V4.0.18版本的makecode编译程序。

![](./images/FAQ-microbit-03-04.png)

修改完成后重新查看当前版本信息

![](./images/FAQ-microbit-03-05.png)










