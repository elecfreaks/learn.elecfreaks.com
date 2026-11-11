# 气泵

## 简介

气泵是一种执行单元，可用于输送空气，适合气球充气、气动装置和空气循环等创意项目。

## 特性

RJ11 端口设计，防止误插，易于使用。

## 技术规格

项目 | 参数
:-: | :-:
产品名称 | 气泵
SKU | EF05073
接口 | RJ11
接口类型 | 数字输出

## 快速上手

### 所需器材及连接示意图

将气泵连接到哪吒扩展板或哪吒 Pro 多功能扩展盒的 J1 端口。也可根据项目需要连接至 J2、J3 或 J4 端口；编程时选择与实际连线一致的端口。

## makecode编程

### 步骤 1

在 MakeCode 的代码抽屉中点击“高级”，查看更多代码选项。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/05001_04.png)

在代码抽屉底部找到并点击“扩展”。在弹出的对话框中搜索“PlanetX”，然后下载该扩展库。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/images/05001_05.png)

*注意：*如果出现提示，说明部分代码库会因不兼容而被删除，可按提示继续操作，或在项目菜单栏中新建项目。

### 步骤 2

在“行星 X_基础”分类的“执行单元”中，使用“气泵模块”积木。选择气泵所连接的端口，并将状态设为“开”或“关”。

点击积木右侧的“+”可展开更多选项：

- 时长：气泵开启后持续运行的时间，单位为毫秒；到时会自动关闭。
- 功率：气泵的输出功率，范围为 0～100%。

### 如图所示编写程序

添加两个“当按下按钮”事件：在“当按下按钮 A”中放入“气泵模块 J1 切换至开”积木，并将时长设为 `1000` 毫秒、功率设为 `100%`；在“当按下按钮 B”中放入“气泵模块 J1 切换至关”积木。

### 参考程序

请参考程序连接：[https://makecode.microbit.org/_53DL19CLcfAu](https://makecode.microbit.org/_53DL19CLcfAu)

你也可以通过以下网页直接下载程序，下载完成后即可开始运行程序。

<div
    style={{
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden',
    }}
>
    <iframe
        src="https://makecode.microbit.org/_53DL19CLcfAu"
        frameborder="0"
        sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
    />
</div>

### 结果

按下 A 键后，气泵以设定功率运行 1 秒并自动停止；按下 B 键可立即关闭气泵。

## 相关案例

## 技术文档
