# Xingzhi Niu — Personal Website

index.html 包含完整样式、字体、地图、图像和交互，直接双击即可打开。无需 npm、服务器或外部资源。

## Personal 页面

- 266 个地点与连接轨迹，统一展示在可拖动、旋转和缩放的地球仪上。
- Base 城市以暖橙色圆点和光环区分，其他地点为绿色；图例与城市列表也标注 Base。当前依据原始迁居节点标注 Jilin、Shanghai、Beijing、Seattle、Tacoma、Durham。
- 地图下方以与国家视图相同的格式显示 World、19 / 195 countries visited 与进度条；不显示口径说明。统计分母采用 193 个联合国会员国加 2 个非会员观察员国；台湾、香港、澳门均归入中国，不重复计数。
- 点击地球上的已到访国家，会停止旋转并缩放至全国视图，展示一级行政区边界；访问过的行政区为青绿色，其他为浅灰。仅提供已到访的 19 个国家。
- 全国视图下方显示去重后的行政区访问比例，可用 Country 下拉框进行键盘选择；点击海洋或未到访国家、Back to globe、All footprints 或 Escape 返回全球视图；点击另一个到访国家则切换到该国。
- 统计采用各国常见的通名：中国、加拿大为 provinces，美国为 states，日本为 prefectures。分母包含同级的特区、直辖市或领地；美国为 50 州加 DC，加拿大为 10 省加 3 领地。
- 按城市/地区搜索；点击城市列表、地图圆点或悬浮城市名字，均可显示城市信息、定位并突出相连的来回轨迹；国家视图保持国家行政区背景。
- 不再拆分单次旅程，不显示旅程编号、居住阶段或逐站播放。
- 语言：汉语、English、日本語、Deutsch、Lingua Latina、Русский，采用无边框透明设计，未推断熟练程度。鼠标悬停或键盘聚焦时展开原文名言与作者，手机点按展开，再次点按收起；Escape 收起。
- 支持手机、键盘操作、减少动画偏好及全站动画暂停。

## 更新 GitHub Pages

将 index.html 上传到 <https://github.com/Egria/website> 的仓库根目录，覆盖旧文件并提交。不要上传 ZIP 本身，也不要把 HTML 放进子目录。

GitHub Pages 继续使用 master / (root)。部署后打开 <https://egria.github.io/website/#personal>。如显示旧内容，Ctrl+F5 强制刷新。原有论文、简历等文件可保留。

README、licenses、data、tools 可一起上传；网页运行只依赖 index.html。

## 编辑资料

修改 data/atlas.json，然后在解压目录运行：

    python tools/update-atlas.py

这会将 atlas.json 和 countries.json 重新嵌入 index.html，并校验国家、行政区与轨迹端点。无需第三方 Python 库。也可直接修改 HTML 内 id="atlas-data" 的 JSON。

- places：地点名称、经纬度 [longitude, latitude]、地区及近似点标记。countryCode 对应 countries.json 的 ISO 三字母国家键，admin1Id 对应行政区 feature 的 id；访问统计据此去重。未确定的行政区使用 null，不凭近似点增加访问数量。
- countries：全国轮廓、一级行政区 GeoJSON、通名 unitLabel、分母 total、来源年份与必要的覆盖说明；国家与行政区几何数据嵌入页面，可离线运行。
- countryStatistics：国家统计口径、会员国/观察员国数量、核对日期和联合国来源；countries.json 中 unStatus 标注 member / observer / other。
- baseCities：曾经以此为基地的城市名称列表；增删名称后运行更新脚本即可。
- connections：from / to 记录地点之间的有向连接，不划分旅程。重复连接合并，去程与回程方向保留；direction 为 unspecified 的连接不推断旅行方向；地图上同一连接只绘制一次。
- languages：本语言名称 name、语言代码 lang、名言 quote、作者 author、作品 work 和来源 source。替换 quote、author、source 后运行更新脚本即可。现有六句为名言占位，来源记录在 JSON 中。

嵌入的中日文字体和俄文字体子集覆盖当前名称、名言与作者；替换为其他文字时，未包含的字符会使用设备上的系统字体。

## 地理数据说明

补齐缺失的省、州、市或同级行政区，依据 GeoNames 行政区表，并核对菲律宾省份、波黑州和部分城市的行政归属。新加坡写作 Singapore, Singapore；它没有省州级行政区，显示 City-state，不将规划区域作为行政区统计。Cappadocia 已按用户提供的停靠城市细化，不再保留单独的近似点；Aral Sea 根据原始 Nukus 往返节点归入 Uzbekistan / Karakalpakstan，并保留近似点说明。

台湾地点统一显示为“城市名, Taiwan, China”，国家字段为 China、行政区字段与名称为 Taiwan, China；地图轮廓与省级访问统计均归入中国，不能独立选中为国家。

连接保留原始地点顺序以及 >/< 记号所指的出发和返回关系。线段连接停靠点，不代表实际道路或飞行路径。没有推断出行日期、交通方式或新的旅行段落。

城市使用中心参考坐标；Nakagami、Iriomote、Oroqen 和 Aral Sea 使用区域近似点。Aral Sea 采用南部区域参考点，没有推断具体营地或观景点。

拼写统一包括 Ha Long、Kota Kinabalu / Sabah、Bayannur、Safranbolu、Troy、Hualien、Oroqen、Everett、Moji、Munakata、Dawson City；Chicago 使用 Illinois。原拼写映射见 notes.aliases。

一级行政区采用 geoBoundaries 的简化边界，不同国家来源年份不同，并非统一日期的测绘结果。越南按 2025 年合并组重组为 34 个省级单位，菲律宾使用 18 个大区（包含 Negros Island Region）；黑山补充 Tuzi 和 Zeta 后为 25 个市镇。阿塞拜疆使用 2020 年的区/市边界；塞尔维亚图层为 25 个行政区，不含 Kosovo。各国覆盖说明和原始来源记录于 data/countries.json 与 data/admin-sources.json。

土耳其新增 Kaman（Kırşehir）、Kırıkkale、Gerede（Bolu）、Kayseri、Avanos / Çavuşin / Göreme / Nevşehir（Nevşehir）、Iğdır、Akçay（Balıkesir）、Gelibolu（Çanakkale）、Tekirdağ。更新的连接链记录在 data/atlas.json 的 notes.turkeyUpdates；土耳其为 24 / 81 provinces visited。

新增 Kiyama, Saga, Japan（以町役场作中心参考点），连接 Asakura 和 Fukuoka；Otsu, Shiga, Japan 与 Kyoto 往返连接。日本访问统计为 23 / 47 prefectures visited。

## 第三方来源与许可

- D3 7.9.0（ISC）：<https://d3js.org/>。
- topojson-client 3.1.0 / world-atlas 2.0.2（ISC）：<https://github.com/topojson/world-atlas>。
- 地理底图：Natural Earth（public domain），<https://www.naturalearthdata.com/>。
- 行政区：<https://www.geoboundaries.org/> 的 gbOpen（CC BY 4.0），各输入数据许可证见 data/admin-sources.json。Tuzi / Zeta 补充边界来自 OpenStreetMap（ODbL）；说明见 licenses/administrative-boundaries-NOTICE.txt。
- 大部分城市坐标经 GeoNames 核对（CC BY 4.0）：<https://www.geonames.org/>；小城镇及地区保留近似坐标。Mayo：<https://www.geonames.org/6068416/mayo.html>；Old Crow：<https://weather.gc.ca/past_conditions/index_e.html?station=zoc>。
- Noto Sans SC / Noto Sans / DM Sans / Manrope（SIL OFL）；Lucide 0.468.0（ISC）；Font Awesome Free 6.7.2 品牌图标（CC BY 4.0）。许可在 licenses/，校徽版权归对应机构。

## 验证

已检查 World 统计卡片和进度条、城市圆点/悬浮名称/列表的选择及轨迹突出、土耳其新增地点与顺序连接、点击海洋与未访国家返回、新增地点和连接、19 个国家的统计与选择、地图实际点击、台湾点击归入中国、拖动不误触选择、全国取景动画、390px 手机布局、城市搜索与定位、六种语言的展开、原有页面导航和减少动画。页面离线打开，无外部请求和脚本错误。
