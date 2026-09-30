# Xingzhi Niu — Personal Website

index.html 包含完整样式、字体、地图、图像和交互，直接双击即可打开。无需 npm、服务器或外部资源。

## Personal 页面

- 253 个地点与连接轨迹，统一展示在可拖动、旋转和缩放的地球仪上。
- Base 城市以暖橙色圆点和光环区分，其他地点为绿色；图例与城市列表也标注 Base。当前依据原始迁居节点标注 Jilin、Shanghai、Beijing、Seattle、Tacoma、Durham。
- 按城市/地区搜索、按国家或地区筛选；点击城市可定位并突出相连的轨迹。
- 不再拆分单次旅程，不显示旅程编号、居住阶段或逐站播放。
- 语言：汉语、English、日本語、Deutsch、Lingua Latina、Русский，未推断熟练程度。鼠标悬停或键盘聚焦时展开原文名言与作者，手机点按展开，再次点按收起；Escape 收起。
- 支持手机、键盘操作、减少动画偏好及全站动画暂停。

## 更新 GitHub Pages

将 index.html 上传到 <https://github.com/Egria/website> 的仓库根目录，覆盖旧文件并提交。不要上传 ZIP 本身，也不要把 HTML 放进子目录。

GitHub Pages 继续使用 master / (root)。部署后打开 <https://egria.github.io/website/#personal>。如显示旧内容，Ctrl+F5 强制刷新。原有论文、简历等文件可保留。

README、licenses、data、tools 可一起上传；网页运行只依赖 index.html。

## 编辑资料

修改 data/atlas.json，然后在解压目录运行：

    python tools/update-atlas.py

这会将资料重新嵌入 index.html。无需第三方 Python 库。也可直接修改 HTML 内 id="atlas-data" 的 JSON。

- places：地点名称、经纬度 [longitude, latitude]、地区及近似点标记。
- baseCities：曾经以此为基地的城市名称列表；增删名称后运行更新脚本即可。
- connections：from / to 记录地点之间的有向连接，不划分旅程。重复连接合并，去程与回程方向保留；地图上同一连接只绘制一次。
- languages：本语言名称 name、语言代码 lang、名言 quote、作者 author、作品 work 和来源 source。替换 quote、author、source 后运行更新脚本即可。现有六句为名言占位，来源记录在 JSON 中。

嵌入的中日文字体和俄文字体子集覆盖当前名称、名言与作者；替换为其他文字时，未包含的字符会使用设备上的系统字体。

## 地理数据说明

补齐缺失的省、州、市或同级行政区，依据 GeoNames 行政区表，并核对菲律宾省份、波黑州和部分城市的行政归属。新加坡写作 Singapore, Singapore；Cappadocia 和 Aral Sea 等跨行政区地点保留区域名称。

连接保留原始地点顺序以及 >/< 记号所指的出发和返回关系。线段连接停靠点，不代表实际道路或飞行路径。没有推断出行日期、交通方式或新的旅行段落。

城市使用中心参考坐标；Cappadocia、Nakagami、Iriomote、Oroqen 和 Aral Sea 使用区域近似点。Aral Sea 采用南部区域参考点，没有推断具体营地或观景点。

拼写统一包括 Ha Long、Kota Kinabalu / Sabah、Bayannur、Safranbolu、Troy、Hualien、Oroqen、Everett、Moji、Munakata、Dawson City；Chicago 使用 Illinois。原拼写映射见 notes.aliases。

## 第三方来源与许可

- D3 7.9.0（ISC）：<https://d3js.org/>。
- topojson-client 3.1.0 / world-atlas 2.0.2（ISC）：<https://github.com/topojson/world-atlas>。
- 地理底图：Natural Earth（public domain），<https://www.naturalearthdata.com/>。
- 大部分城市坐标经 GeoNames 核对（CC BY 4.0）：<https://www.geonames.org/>；小城镇及地区保留近似坐标。Mayo：<https://www.geonames.org/6068416/mayo.html>；Old Crow：<https://weather.gc.ca/past_conditions/index_e.html?station=zoc>。
- Noto Sans SC / Noto Sans / DM Sans / Manrope（SIL OFL）；Lucide 0.468.0（ISC）；Font Awesome Free 6.7.2 品牌图标（CC BY 4.0）。许可在 licenses/，校徽版权归对应机构。

## 验证

已检查本地离线打开、城市搜索及定位、地区筛选、空结果、全部六种语言的悬停、键盘聚焦和手机点按展开、缩放、键盘操作、原有页面导航、减少动画，以及 390px 手机布局。无外部请求和脚本错误。
