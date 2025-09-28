# GitHub Pages 部署指南

## 🚀 部署步骤

### 1. 准备GitHub仓库
确保您的GitHub仓库名称是 `xiaodanhu14.github.io`（用于用户页面）或者您有权限的仓库。

### 2. 上传代码到GitHub
```bash
# 在academic-svelte目录下
git init
git add .
git commit -m "Initial commit: SvelteKit academic website"
git branch -M main
git remote add origin https://github.com/xiaodanhu14/xiaodanhu14.github.io.git
git push -u origin main
```

### 3. 配置GitHub Pages设置
1. 进入GitHub仓库页面
2. 点击 **Settings** 标签
3. 在左侧菜单中找到 **Pages**
4. 在 **Source** 部分选择 **GitHub Actions**
5. 保存设置

### 4. 启用GitHub Actions
1. 在仓库页面点击 **Actions** 标签
2. 如果看到 "Workflows aren't being run on this repository"，点击 **I understand my workflows, go ahead and enable them**

### 5. 部署
- 推送代码到main分支后，GitHub Actions会自动构建和部署
- 在 **Actions** 标签页可以查看部署进度
- 部署完成后，网站将在 `https://xiaodanhu14.github.io` 访问

## 📁 项目结构
```
academic-svelte/
├── .github/workflows/deploy.yml  # GitHub Actions部署配置
├── src/                          # 源代码
├── static/                       # 静态资源
├── build/                        # 构建输出（自动生成）
└── package.json                  # 依赖配置
```

## 🔧 本地开发
```bash
cd academic-svelte
npm install
npm run dev
```

## 📝 更新网站
每次修改代码后，只需：
```bash
git add .
git commit -m "Update website content"
git push origin main
```

GitHub Actions会自动重新构建和部署网站。

## ⚠️ 注意事项
- 确保所有静态资源都在 `static/` 目录下
- 图片路径使用 `/images/...` 格式
- PDF文件放在 `static/papers/` 目录下
- 视频文件放在 `static/media/videos/` 目录下
