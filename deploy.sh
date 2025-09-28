#!/bin/bash

# GitHub Pages 部署脚本

echo "🚀 开始部署到GitHub Pages..."

# 检查是否在正确的目录
if [ ! -f "package.json" ]; then
    echo "❌ 错误：请在academic-svelte目录下运行此脚本"
    exit 1
fi

# 检查git状态
if [ -z "$(git status --porcelain)" ]; then
    echo "✅ 工作目录干净，没有未提交的更改"
else
    echo "📝 发现未提交的更改，正在添加..."
    git add .
    git commit -m "Update website content - $(date)"
fi

# 推送到GitHub
echo "📤 推送到GitHub..."
git push origin main

echo "✅ 部署完成！"
echo "🌐 网站将在几分钟后更新：https://xiaodanhu14.github.io"
echo "📊 查看部署状态：https://github.com/xiaodanhu14/xiaodanhu14.github.io/actions"
