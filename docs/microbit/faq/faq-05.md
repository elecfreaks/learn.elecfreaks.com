# FAQ 05
## Q：使用IOTbit连接MQTT需要注意什么？

A:请按照wiki文档中的步骤操作，文档链接：[How to Apply with HiveMQ](https://wiki.elecfreaks.com/en/microbit/wisdom-life/microbit-smart-science-iot-kit/iot-mqtt)。

**注意事项：**

1、程序在MakeCode中的`clientID`是可以自定义的，但是需要注意的是不能和HiveMQ平台的`clientID`相同。
2、程序在MakeCode中的`port`填写为`8883`。
3、需要在HiveMQ平台上启用`SSL`。
