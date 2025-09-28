# GitHub Pages 部署脚本 (PowerShell版本)

Write-Host "🚀 开始部署到GitHub Pages..." -ForegroundColor Green

# 检查是否在正确的目录
if (-not (Test-Path "package.json")) {
    Write-Host "❌ 错误：请在academic-svelte目录下运行此脚本" -ForegroundColor Red
    exit 1
}

# 检查git状态
$gitStatus = git status --porcelain
if ([string]::IsNullOrEmpty($gitStatus)) {
    Write-Host "✅ 工作目录干净，没有未提交的更改" -ForegroundColor Green
} else {
    Write-Host "📝 发现未提交的更改，正在添加..." -ForegroundColor Yellow
    git add .
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    git commit -m "Update website content - $timestamp"
}

# 推送到GitHub
Write-Host "📤 推送到GitHub..." -ForegroundColor Blue
git push origin main

Write-Host "✅ 部署完成！" -ForegroundColor Green
Write-Host "🌐 网站将在几分钟后更新：https://xiaodanhu14.github.io" -ForegroundColor Cyan
Write-Host "📊 查看部署状态：https://github.com/xiaodanhu14/xiaodanhu14.github.io/actions" -ForegroundColor Cyan
