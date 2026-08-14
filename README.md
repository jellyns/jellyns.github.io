# jellyns.github.io

使用 Astro 构建的个人博客，通过 GitHub Actions 免费部署到 GitHub Pages。

## 内容边界

- 公开仓库只保存经过确认的正式博文。
- 草稿、工作笔记和知识库内部链接不进入本站。
- 文章放在 `src/content/blog/`，并通过 Astro Content Collections 校验元数据。

## 本地运行

```sh
npm install
npm run dev
```

构建生产版本：

```sh
npm run build
```

推送到 `main` 后，`.github/workflows/deploy.yml` 会自动构建并部署站点。
