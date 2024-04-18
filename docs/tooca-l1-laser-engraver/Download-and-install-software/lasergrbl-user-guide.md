---
sidebar_position: 2
sidebar_label: LaserGRBL-用户指南
---

# LaserGRBL-用户指南

## 准备工作

雕刻前使用无尘布搭配酒精擦拭激光模组的保护镜片，保证最佳雕刻效果。

在TOOCA L1 Laser Engraver的工作区域放下木板，放下定焦条，拧松激光模组侧面的手拧螺丝，进行调焦。

定焦条自然垂直向下时应与雕刻材料表面互相接触，使用右侧的手拧螺丝将其锁紧 , 并顺时针拨动定焦条直至被磁铁吸住。最后插上激光模组线。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/tooca-l1-laser-engraver/Download-and-install-software/images/assembly-tutorials-05.png)

**注意:为了保护桌子或者地板不被烧坏或烟熏，对工作台做好防护（如垫上钢板等激光不易穿透的材料），进行激光切割时，切割处的底面应悬空，以保证切割效果。**

## LaserGRBL软件使用教程

双击.exe文件安装LaserGRBL软件，若不能安装请访问[https://lasergrbl.com/download/](https://lasergrbl.com/download/)下载合适版本。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/tooca-l1-laser-engraver/Download-and-install-software/images/lasergrbl-01.png)

安装成功后，双击打开LaserGRBL软件，给机器上电，打开电源开关，等待机器初始化完成后，使用Type-C数据线连接电脑与机器。选择对应的串口号,确保波特率为115200。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/tooca-l1-laser-engraver/Download-and-install-software/images/lasergrbl-02.png)

点击“Connect”.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/tooca-l1-laser-engraver/Download-and-install-software/images/lasergrbl-03.png)

连接成功后部分图标会变亮。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/tooca-l1-laser-engraver/Download-and-install-software/images/lasergrbl-04.png)

备注：若连接失败，请长按机器微动开关3秒，听到第二声“滴”后迅速点击连接。

点击“Homing”.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/tooca-l1-laser-engraver/Download-and-install-software/images/lasergrbl-05.png)


点击“文件-添加文件”导入图片，设置图片效果(配套的椴木板雕刻推荐参数：S-MIN - 0,S-MAX - 700,Engraving Speed - 6000。)，然后点击“下一步”。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/tooca-l1-laser-engraver/Download-and-install-software/images/lasergrbl-06.png)

备注：功率%越大，或速度越慢，雕刻效果越深；功率%越小，或速度越快，雕刻效果越浅。功率%一般调节S-MAX即可，请输入功率百分比的十倍数值。例如：设置70%的功率，应输入700，而不是70。

设置Laser Mode为M4，并设置合适的功率、速度、次数、图片尺寸、位置等，点击“创建”.

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/tooca-l1-laser-engraver/Download-and-install-software/images/lasergrbl-07.png)

备注：功率、速度、次数可参考[Recommended parameters](http://www.elecfreaks.com/learn-en/tooca-laser-1/recommended-parameters.html).

点击Frame进入预览模式，此时激光模组会发出弱光，并围绕所加工图片的最大X、Y边缘运动，此时可以调整材料至合适位置。

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/tooca-l1-laser-engraver/Download-and-install-software/images/lasergrbl-08.png)

最后点击“运行程序”开始雕刻，更多详细的软件使用教程请参考https://lasergr bl.com/usage/

![](https://wiki-media-ef.oss-cn-hongkong.aliyuncs.com/docs/tooca-l1-laser-engraver/Download-and-install-software/images/lasergrbl-09.png)

此外，您也可以通过Type-C连接雕刻机，实时雕刻。更多详细的软件使用教程请参考
https://lightburnsoftware.github.io/NewDocs/

注意：LaserGRBL生成的gcode文件不包含帧预览信息，定位不方便。 使用 LaserGRBL 时不建议使用 TF 卡进行离线雕刻。 离线雕刻请参考 LightBurn 用户指南。
