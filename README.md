# Xingzhi Niu — Personal Website

静态网页包，无需 npm、构建工具、后端或 API key。解压后可双击 `index.html` 本地预览。

## 部署到现有 GitHub Pages

仓库：<https://github.com/Egria/website>，站点：<https://egria.github.io/website/>。

1. 解压 ZIP，将 **index.html、assets 文件夹、licenses 文件夹、.nojekyll** 上传或复制到仓库最外层。请上传解压后的文件，而不是 ZIP 本身；`index.html` 应直接位于根目录。
2. 提交到 `master` 分支。可在 GitHub 仓库页面使用 **Add file → Upload files**，也可通过 GitHub Desktop 或 git 提交。
3. 在 **Settings → Pages** 确认 **Deploy from a branch → master → /(root)**。等待 Actions 中 Pages 部署完成，刷新站点。

旧仓库中的论文 PDF、简历、其他页面可以保留。请合并 `assets` 文件夹。`.nojekyll` 是静态发布标记。

项目与经历内链支持直接打开，例如 `#research-bwb`、`#research-serverless`；打开后项目将展开并固定。页面内所有图标、校徽与字体均随包提供。

## 本次更新

- 研究分类使用无衬线标签和左侧短竖线；去除两处概念插图提示。
- 2019 项目更新为 Serverless cloud computing · University of Washington。
- 所有项目仓库统一显示 Repository 和 `</>` 图标。
- 教育经历新增 Duke、UW、清华标志；硕士学校简写 University of Washington。
- 工作经历中的 CAS 标志使用中国科学院官网高清图。
- 保留 Home、Research、Playground、About 全部内容和已有项目、成果、导师链接。

第三方资源：Lucide 0.468.0 图标（ISC）；Font Awesome Free 6.7.2 品牌图标（CC BY 4.0，版权 Fonticons, Inc.）；DM Sans 与 Manrope 字体（SIL OFL）。相关授权文件见 `licenses/`，品牌图标来源和版权信息嵌在 SVG 数据中；校徽版权归对应机构所有。
