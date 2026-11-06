---
sidebar_position: 0
sidebar_label: AI摄像头Pro
---

# AI摄像头Pro

![产品主图](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/microbit/sensor/planet-x-sensors/ai-lens-pro/ai-lens-pro-01.png)


## 教学路线

先按“产品介绍—产品清单—技术规格—快速入门—软件库说明”完成准备，再沿下表由易到难开展案例。侧栏六个导读页使用 `sidebar_position: 0～5`，案例从 `6` 开始，表中的课次从 1 计数。

低龄学生可由教师带领完成观察与识别反馈；具备变量、条件和循环基础后，再进入数据与状态、运动控制。综合任务适合有机器人搭建经验的学生分组完成，可按学情拆成多课时。

| 课次 | 学习阶段 | 案例 | 核心能力 |
| --- | --- | --- | --- |
| 1 | 观察入门 | [镜头观察日记](./camera.md) | 取景、拍摄与单一变量比较 |
| 2 | 观察入门 | [图像观察小展览](./photo-album.md) | 照片核对、条件记录与观察表达 |
| 3 | 识别与反馈 | [表情互动镜](./facial-expression-recognition.md) | 图像刷新、布尔判断与条件分支 |
| 4 | 识别与反馈 | [桌面物品检查员](./object-recognition.md) | 类别、中心名称与数量的区别 |
| 5 | 识别与反馈 | [文字口令提示牌](./optical-character-recognition.md) | 字符串读取、精确匹配与失败处理 |
| 6 | 数据与状态 | [目标位置指示器](./object-tracking.md) | 目标选择、坐标区间与丢失状态 |
| 7 | 数据与状态 | [积木分类助手](./self-learning-classification.md) | 类别 ID、采样、置信度与测试 |
| 8 | 数据与状态 | [举手计数器](./pose-recognition.md) | 变量计数、状态变化与连续确认 |
| 9 | 数据与状态 | [节奏闪光器](./rhythm-detection.md) | 数值换算、计时与任务状态 |
| 10 | 运动控制 | [交通卡片指挥车](./card-recognition.md) | 离散指令、差速转向与停车分支 |
| 11 | 运动控制 | [手势指挥小车](./gesture-recognition.md) | 学习手势、名称匹配与指令丢失停车 |
| 12 | 运动控制 | [人脸追踪云台](./face-detection.md) | 双轴坐标误差、分档控制与限位 |
| 13 | 运动控制 | [颜色分拣台](./color-recognition.md) | 定角度动作、任务锁定与机构复位 |
| 14 | 运动控制 | [视觉巡线小车](./line-following.md) | 位置与角度融合、转向系数与调参 |
| 15 | 综合任务 | [小球搜寻小车](./ball-recognition.md) | Nezha ESP32 状态机、接近标定与夹取 |
| 16 | 综合任务 | [观察资料无线整理站](./remote-file-management.md) | 局域网访问、文件核对与项目归档 |

每课末尾的“学习衔接”给出前置案例、迁移任务和下一课入口。建议保留同一组观察照片、程序片段和参数记录，让后续任务基于前面的成果继续改进。

多数编程案例使用 micro:bit 与 MakeCode；小球搜寻夹取使用 Nezha ESP32 与 MicroBlocks。跨平台时迁移条件判断、坐标误差和任务状态等思路，并按对应案例重新接线和搭建积木。单个 AI Lens Pro 在组合任务中按阶段切换识别功能，例如先巡线、停车后再切换小球识别。

综合挑战可采用“卡片或手势发令—巡线抵达搜寻区—搜寻并夹取小球—确认后分类放置—整理项目资料”的任务链。先逐项验证，再组合；涉及不同主控和机构的案例，需要迁移程序与重新标定，不能直接拼接运行。

## 目录

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```
