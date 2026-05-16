# Leo Merthon

一个多页像素风个人网站，使用纯 HTML、CSS、JavaScript 构建。内容方向围绕 AI、Golang、后端工程、阅读和音乐。

## 页面

- `index.html`：主页
- `posts.html`：笔记列表，支持搜索和标签筛选
- `archive.html`：时间线档案
- `about.html`：关于页面
- `guestbook.html`：本地留言板
- `post-*.html`：笔记详情页，支持本地评论

## 素材

站点头像和 icon 都复用 `assets/img/my.jpg`。首页主视觉为生成式像素风图片 `assets/img/leo-pixel-lab.png`，没有通过脚本生成。

社交入口位于 `index.html` 的 `.social-dock`，当前使用占位链接；Gmail 使用 `mailto:your-email@example.com`，替换成真实邮箱即可。

## 使用

可以直接打开 `index.html`，也可以在目录下启动本地服务器：

```bash
python3 -m http.server 8000
```
