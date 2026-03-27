---
sidebar_position：1
sidebar_label： 桌面级四轮足机器狗（XGO-mini3W）使用说明
--

# 开机与充电
## 启动与初始化指南（Power On & Initialization）

本章节详细说明 XGO 系列机器人的标准启动流程。为确保内部传感器校准准确及设备安全，请严格遵循以下操作规范。

## 核心安全警示（关键安全协议）

**禁止手持开机**

机器人在启动过程中，内部惯性测量单元（IMU）需进行零偏自动校准 。

**风险说明：** 在启动阶段手持或晃动机器人会导致IMU校准数据漂移，进而引发姿态解算错误，导致电机输出异常震荡或不可控动作 。

**操作规范：** 开机前，必须确保机器人放置于平坦、稳固的表面 。

# 四足机器人启动流程

**适用型号：XGO-Mini3W**
系统上电包含**“静态自检”** 与**“动态复位”** 两个阶段，请按以下步骤操作：

1. 体位摆放（Placement）
将机器人保持俯卧姿态（腹部着地）置于平坦地面 。

**检查点：** 确认四肢关节自然折叠，无物理干涉或卡滞现象 。

2. 统上电（Power On）

短按位于机器人背部的电源键。

**状态指示：** 电源键周围的环形LED将快速闪烁，随后转为常亮状态，表明底层电路已接通 。
![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-robot-kit/images/cm4-xgo-inspection-01.gif)

**关机**
按下背部电源开关，环形灯缓慢闪烁，机器狗缓缓趴下，机械臂收回，然后环形灯熄灭，表示系统完全关机。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-robot-kit/images/cm4-xgo-inspection-02.gif)

3. 动控制单元初始化（“唤醒”序列）

机器人将自动执行自检复位序列 ：

**站立复位：** 机身缓慢抬升至默认站立高度 。

**机械臂自检：** 机械臂自动执行伸出（Deploy）与收回（Retract）动作，验证关节伺服状态 。

**初始化完成：** 当机械臂完全收回且机身保持静止站立时，表示运动控制系统启动完毕 。

4. 操作系统就绪

当屏幕点亮并显示 XGO-OS 用户界面 时，机器人进入完全就绪状态 。

**注意：**  在初始化序列执行期间，请勿强制关机或中断电源 。

# 充电操作流程 (Charging Procedure)

**定位充电口：** 

XGO-mini3w(Quadruped)：充电口通常位于机器狗腹部，为DC圆孔。

**状态指示 (Status Indicators)** 
观察电源适配器上的 LED 指示灯以确认充电状态：
- 🔴 红灯常亮 (Solid Red)：正在充电 (Charging)。此时电池正在恒流/恒压输入电能。
- 🟢 绿灯常亮 (Solid Green)：充电完成 (Fully Charged)。电池已充满，请断开电源。
**注意：** 部分型号在电量极低时，插入充电器后可能需要等待 1-2 分钟，指示灯才会转为红色充电状态。

**充电时长 (Duration)**
- 完整充电周期通常需要 1.5 - 2 小时（具体取决于剩余电量及电池型号）。
- 严禁超过 12 小时过度充电。
  ![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/pico/cm4-xgo-robot-kit/images/cm4-xgo-preparation-04.gif)
