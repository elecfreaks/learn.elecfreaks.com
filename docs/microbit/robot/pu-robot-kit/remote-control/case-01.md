---
sidebar_position: 1
sidebar_label: "案例一：无线遥控初体验——按键控制 PU 直行与跳跃"
description: 案例简介
---

import PUProgram from '@site/src/components/PUProgram';

# 案例一：无线遥控初体验——按键控制 PU 直行与跳跃

## 案例简介

本案例为手柄遥控系列第一课。在掌握 PU 机器人基础动作编程的基础上，学习使用无线手柄（第二块 micro:bit 扩展板）与 PU 机器人建立无线电连接，通过「当 B1 按下发指令 1、当 B2 按下发指令 2」的按键编程，实现"按一下键、机器人做一个动作"的一令一动式遥控。本课帮助学生建立无线电通信与指令映射的直观认识，为后续摇杆操控、文字传令等系列课程奠定基础。

## 教学准备

| 名称 | 数量 | 图示 | 用途 |
| :--- | :---: | :---: | :--- |
| Robot PU 机器人套装 | 1 套 | <img src={require("@site/docs/microbit/robot/pu-robot-kit/remote-control/images/pu-robot.png").default} alt="Robot PU 机器人套装" width="280" style={{maxWidth: "280px", height: "auto", background: "white"}} /> | 被遥控的机器人主体（内置 micro:bit V2） |
| 无线手柄（摇杆扩展板） | 1 个 | — | 插第二块 micro:bit，提供 B1/B2 按键 |
| micro:bit V2 | 共 2 块 | — | 一块装手柄、一块装 PU 机器人 |
| USB 数据线 | 1 根 | — | 依次给两块 micro:bit 烧录程序 |
| 电脑 | 1 台 | — |  |

每组 **micro:bit V2 共 2 块**：PU 机器人端 1 块、遥控器端 1 块；机器人中已安装的主板计入总数

编程前，参照[官方快速上手](../pu-robot-kit-quick-start.md)为手柄装入 2 节 AAA 电池并开机。下图分别展示电池安装和电源开关。本系列会给两端下载自定义程序，无线电组使用 **160**，不要与出厂固件显示的频道编号混用

<img src={require("@site/docs/microbit/robot/pu-robot-kit/remote-control/images/pu-controller-batteries.png").default} alt="手柄电池安装步骤" width="560" style={{maxWidth: "100%", height: "auto", background: "white"}} />

<img src={require("@site/docs/microbit/robot/pu-robot-kit/remote-control/images/pu-controller-power.png").default} alt="手柄电源开关位置" width="560" style={{maxWidth: "100%", height: "auto", background: "white"}} />

## 课程目标

1. 认识无线手柄与无线电通信：理解"无线电组一致才能通话"这一核心概念；

2. 学会使用手柄端「设置遥控器无线电组」「初始化遥控器按钮」与机器人端「启用遥控模式」积木，完成双机配对；

3. 理解"按键按下 → 发送数字 → 机器人按数字执行对应动作"的指令映射逻辑，能独立编写 B1 直行、B2 跳跃的遥控程序；

4. 通过双人合作遥控体验，培养观察、验证与调试意识，体会"输入—传输—执行"的完整链路。

## 课程引入

同学们已经学会了让 PU 机器人自己完成直行、跳跃等动作——但每次都要先用数据线烧录程序，PU 才会"照剧本表演"。今天我们要给 PU 装上一只"遥控器"：只要轻轻按一下手柄上的按键，PU 就能立刻做出相应的动作，像玩游戏一样实时指挥它！这只遥控器是怎么和 PU "说话"的？按下不同的键，PU 又是怎么知道该做什么的？带着这两个问题，我们一起进入无线遥控的世界！

## 学习探究

1. 旧知巩固：提问"要让 PU 直行，我们使用哪个积木？跳跃呢？"请学生上台演示动作积木的使用，回顾 walk forward（直行）与 set mode jump（跳跃）两个动作，明确动作积木只能让机器人"自己按剧本动"。

2. 新概念学习——无线"对讲机"：两块 micro:bit 之间可以通过无线电波通信，但必须把频道（无线电组）调成同一个数字，就像两部对讲机调到同一频道才能通话。演示手柄端「设置遥控器无线电组 160」与机器人端「启用遥控模式（无线电组 160）」两个积木，强调"两个 160 必须一致"。

3. 新概念学习——按键与指令：手柄上 B1/B2 是"发令器"。编程后，按下 B1 就通过无线电发出数字 1，按下 B2 就发出数字 2；机器人端"听到"数字后，用"如果……那么"判断该执行什么动作。这里的 if 判断是本课编程思维的落点。

4. 动手验证：按步骤烧录两端程序后，按下手柄 B1，观察 PU 是否向前直行 4 步后停下；按下 B2，观察 PU 是否跳跃。若没反应，按"检查频道一致 → 检查手柄是否开机 → 重新烧录"顺序排查。

## MakeCode 编程

本节分遥控器端与 PU 机器人端两份程序：两块 micro:bit 需分别在 MakeCode 中新建项目、添加 robotPu 扩展，按图示搭好积木后各自烧录，即可完成配对测试。两份程序使用的无线电组必须一致（本系列统一为 160）。

### 遥控器端程序

程序说明：设置无线电组并初始化按键，之后一直监听 B1/B2——B1 按下发数字 1，B2 按下发数字 2。

<PUProgram projectId="_PiyhAo3Xv3sU" language="zh-CN" image={require("./images/case-01-controller-zh.png").default} title={"图 1-1：遥控器端程序（MakeCode 积木）"} />

### PU机器人端程序

程序说明：打开"耳朵"在频道 160 上监听。收到数字 1 → 直行 4 步；收到数字 2 → 跳跃。

<PUProgram projectId="_Ua3gkkA4XEFe" language="zh-CN" image={require("./images/case-01-robot-zh.png").default} title={"图 1-2：PU机器人端程序（MakeCode 积木）"} />

## 课堂活动

两人一组（一名操作员、一名观察员），在地面贴一条 1 米长的终点线：操作员按 B1 让 PU 直行，比比哪个小组能一次准确停在终点线上；再放一块低矮纸板当"障碍"，按 B2 让 PU 跳过去。各小组展示后互评：PU 动作是否干脆、有没有"该走不走、该停不停"的现象。

进阶挑战：把 B2 的动作从「跳跃」改成「跳舞」——找到代码里 Action.Jump 的位置换成 Action.Dance；再试试给 B3 也编一个动作（如踢球 Action.Kick），体验"一个键对应一个动作"的扩展方法。

## 总结分享

教师结合学生展示总结：无线遥控的本质是"手柄发数字、PU 按数字做动作"，两者必须工作在同一个无线电组；机器人端的"如果……那么"判断，让一串数字变成了看得见的动作，这就是指令映射。下节课我们将把手柄上的摇杆变成"方向盘"，让 PU 真正"指哪走哪"。
