# 学术个人主页 - SvelteKit版本

这是您的个人学术主页的SvelteKit版本，相比原来的HTML版本，这个版本具有以下优势：

## 🚀 主要特性

- **组件化设计**：使用Svelte组件，便于维护和自定义
- **数据驱动**：内容通过JSON/JS文件管理，更新内容只需修改数据文件
- **响应式设计**：完美适配各种设备
- **GitHub Pages友好**：配置为静态站点生成，可直接部署到GitHub Pages
- **现代化开发体验**：热重载、TypeScript支持等

## 📁 项目结构

```
academic-svelte/
├── src/
│   ├── lib/
│   │   ├── data/           # 数据文件
│   │   │   ├── profile.js  # 个人信息
│   │   │   ├── news.js     # 新闻动态
│   │   │   ├── publications.js  # 发表论文
│   │   │   └── projects.js # 研究项目
│   │   └── Navigation.svelte # 导航组件
│   ├── routes/
│   │   ├── +layout.svelte  # 主布局
│   │   ├── +page.svelte    # 首页
│   │   ├── publications/   # 发表论文页面
│   │   └── projects/       # 研究项目页面
│   ├── app.css            # 全局样式
│   └── app.html           # HTML模板
├── static/                # 静态资源
│   ├── images/           # 图片
│   ├── papers/           # 论文PDF
│   └── media/            # 媒体文件
└── package.json          # 项目配置
```

## 🛠️ 如何更新内容

### 1. 更新个人信息
编辑 `src/lib/data/profile.js` 文件：
```javascript
export const profile = {
  name: "您的姓名",
  position: "您的职位",
  email: "您的邮箱",
  // ... 其他信息
};
```

### 2. 添加新闻动态
编辑 `src/lib/data/news.js` 文件：
```javascript
export const news = [
  {
    date: "2025.01",
    content: "您的新闻内容"
  },
  // ... 其他新闻
];
```

### 3. 添加发表论文
编辑 `src/lib/data/publications.js` 文件：
```javascript
export const publications = [
  {
    year: 2025,
    authors: "作者列表",
    title: "论文标题",
    venue: "发表会议/期刊",
    links: {
      pdf: "PDF链接",
      // ... 其他链接
    }
  },
  // ... 其他论文
];
```

### 4. 添加研究项目
编辑 `src/lib/data/projects.js` 文件：
```javascript
export const projects = [
  {
    title: "项目标题",
    description: "项目描述",
    thumbnail: "/images/projects/项目图片.jpg",
    tags: ["标签1", "标签2"],
    links: {
      details: "/projects/项目详情页面",
      paper: "/papers/论文.pdf"
    }
  },
  // ... 其他项目
];
```

## 🚀 开发和部署

### 本地开发
```bash
npm install
npm run dev
```

### 构建生产版本
```bash
npm run build
```

### GitHub Pages部署
1. 将代码推送到GitHub仓库
2. 在仓库设置中启用GitHub Pages
3. 选择"GitHub Actions"作为部署源
4. 项目已配置自动部署

## 🎨 自定义样式

所有样式都在 `src/app.css` 中定义，使用了CSS变量，便于主题定制：

```css
:root {
  --primary-blue: #05668D;
  --dark-blue: #028090;
  --teal: #00A896;
  --mint: #02C39A;
  --light-mint: #F0F3BD;
  /* ... 其他颜色变量 */
}
```

## 📱 响应式设计

网站已经过响应式优化，在以下设备上都能完美显示：
- 桌面电脑
- 平板电脑
- 手机

## 🔧 技术栈

- **SvelteKit** - 现代Web框架
- **TypeScript** - 类型安全
- **Vite** - 快速构建工具
- **Font Awesome** - 图标库
- **Google Fonts** - 字体

## 📞 支持

如果您在使用过程中遇到任何问题，请检查：
1. Node.js版本是否为18+ 
2. 是否正确安装了所有依赖
3. 静态资源路径是否正确

---

相比原来的HTML版本，这个SvelteKit版本让您能够：
- ✅ 轻松更新内容而不需要写HTML
- ✅ 组件化设计，便于维护
- ✅ 现代化开发工具链
- ✅ 更好的性能和SEO
- ✅ 一键部署到GitHub Pages
