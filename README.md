# Xingzhi Niu — Personal Website

这是可以直接部署的静态网页包，不需要 npm、构建步骤、后端或 API key。

## 本地预览

解压后双击 `index.html` 即可查看。也可以在此目录运行：

```bash
python3 -m http.server 8000
```

浏览器打开 <http://localhost:8000>。

## 部署到现有 GitHub Pages

目标仓库：<https://github.com/Egria/website>

当前默认分支：`master`。

1. 解压网页包，将 **index.html、assets 文件夹、licenses 文件夹、.nojekyll** 放到仓库的最外层。`index.html` 必须直接位于仓库根目录，不能隔着一层 `xingzhi-website` 文件夹。上传的是解压后的文件，不是 ZIP 本身。
2. 在 GitHub 仓库页面使用 **Add file → Upload files** 上传文件和文件夹，然后提交到 `master`；也可以使用 GitHub Desktop 或 git。如果文件管理器隐藏 `.nojekyll`，在 GitHub 使用 **Add file → Create new file** 创建名为 `.nojekyll` 的空文件。
3. 打开仓库 **Settings → Pages**。在 **Build and deployment** 中，Source 选择 **Deploy from a branch**，Branch 选择 **master**，目录选择 **/(root)**，点击 **Save**。
4. 在 **Actions** 中等待 `pages build and deployment` 成功，然后访问 <https://egria.github.io/website/>。
5. 如果仍显示旧页面，强制刷新浏览器。后续修改只需提交对应文件，GitHub Pages 会自动更新。

`.nojekyll` 用于直接发布静态文件。原仓库的 `_config.yml`、`index.md` 等旧 Jekyll 文件可以保留；本包的 `index.html` 是新的首页。请合并 `assets` 文件夹，不要删除仓库原有论文、简历或其他文件。本包未包含或更改这些文件。

官方部署说明：<https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site>

## 文件与维护

- `index.html`：网页内容、经历与 Supervisor 信息、项目链接。
- `assets/site.css`：布局与样式。
- `assets/site.js`：导航、悬停展开、固定项目、经历详情和猫咪互动。
- `assets/fonts/`：本地字体；无需访问字体 CDN。
- `assets/favicon.svg`：网页图标。
- `licenses/`：字体与 Lucide 图标的授权说明，请保留。
- `.nojekyll`：GitHub Pages 静态发布标记。

字体、图标、机构标志与插图已随包提供。所有内部资源使用相对路径，支持 GitHub Pages 的 `/website/` 子目录，也可以部署到其他静态托管服务。

## 本次修改

- 所有 Professional experience 和 Early appointments 条目均有 Supervisor 名称与外链。
- UNM 的 GammaDelta 项目入口、UNMC 的 PalmaClust 项目入口与 Supervisor 位于同一行，窄屏自然换行。
- 项目入口打开 Research 中对应项目，并保持 expanded 与 pinned 状态。
- GammaDelta 在 Home 与 Research 中均有仓库链接：<https://github.com/vinash85/GammaDelta>。
- 默认首页为 Home。支持直接访问 `#about`、`#research`、`#research-gamma`、`#research-palma` 等地址；刷新项目地址后会自动展开并固定相应项目。

## 第三方资源

Lucide 图标使用 0.468.0 版本并以内联 SVG 提供（ISC）；DM Sans 与 Manrope 使用 SIL Open Font License。具体授权文本见 `licenses/`。机构标志保留原网页中提供的图像，仅用于标识对应机构。
