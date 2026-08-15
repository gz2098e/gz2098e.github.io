# GOOUTO.com — B2B Outdoor & Party Supplies Wholesale Showroom

Hugo + GitHub Pages 静态网站项目，面向全球B2B采购商的1000+产品线上展厅。

## 技术栈

- **静态站生成器**: Hugo (extended)
- **托管**: GitHub Pages
- **CI/CD**: GitHub Actions
- **DNS/CDN**: Cloudflare

## 快速开始

### 1. 安装 Hugo

```bash
# macOS
brew install hugo

# Linux (Snap)
snap install hugo --channel=extended

# 下载二进制文件
# https://github.com/gohugoio/hugo/releases
```

### 2. 本地开发

```bash
cd goouto-website
hugo server -D --bind 0.0.0.0 --baseURL http://localhost:1313
```

访问 `http://localhost:1313/`

### 3. 构建生产版本

```bash
hugo --minify --baseURL="https://goouto.com/"
```

输出目录: `public/`

### 4. 部署

git push 到 main 分支后，GitHub Actions 自动构建部署到 GitHub Pages。

## 项目结构

```
goouto-website/
├── config.toml              # 全站统一配置（公司信息/联系方式）
├── data/categories.toml      # 产品分类数据
├── content/
│   ├── products/             # 1000+ 产品页面（按子分类组织）
│   ├── categories/           # 分类页面
│   ├── guides/               # 采购指南
│   ├── about.md              # 关于我们
│   ├── contact.md            # 联系页面
│   ├── services.md           # 服务页面
│   └── _index.md             # 首页
├── layouts/
│   ├── partials/             # 公共组件（header/footer/seo等）
│   ├── products/             # 产品模板
│   ├── categories/           # 分类模板
│   ├── _default/             # 基础模板
│   └── index.html            # 首页模板
├── static/
│   ├── css/main.css          # 全站样式
│   ├── js/main.js            # 交互脚本
│   └── robots.txt            # 爬虫策略（全面开放AI）
└── .github/workflows/        # GitHub Actions 自动部署
```

## 公司信息管理

所有公司信息在 `config.toml` 的 `[params]` 区域统一管理：
- 公司名称、联系方式、邮箱、地址
- 修改后执行 `hugo` 重新构建，1000+页面自动同步

## 添加新产品

在 `content/products/{子分类}/` 下创建 Markdown 文件：

```bash
content/products/camping-gear/waterproof-camping-tent-4-person-wholesale.md
```

参考已有示例产品的 Front Matter 结构。

## 产品分类

5大品类，19个子分类：
- Outdoor Gear (露营/登山/照明/野餐)
- Outdoor Sports (水上运动/骑行/护具/健身)
- Outdoor Toys (水枪/飞盘/游戏/泡泡)
- Holiday & Party (圣诞/万圣/复活节/生日派对)
- Related Categories (烧烤/花园/沙滩)

## SEO & AI 策略

- 每页 title = H1标题 + 品牌后缀
- JSON-LD Product Schema 结构化数据
- robots.txt 全面开放AI爬虫（GPTBot/ClaudeBot/PerplexityBot等）
- 语义化HTML，AI抓取友好

## 联系方式

- WhatsApp: +8618006891977
- Email: mike@goouto.com
- 地址: Yiwu International Trade City, Zhejiang, China
