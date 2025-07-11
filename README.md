# YouTube Thumbnail Tester

一个用于测试YouTube缩略图在不同设备上显示效果的工具。

## 功能特性

- 🖥️ **多设备预览** - 支持桌面、平板、手机三种设备模式
- 📱 **响应式设计** - 真实模拟YouTube界面在不同屏幕尺寸下的显示
- 🎯 **实时预览** - 上传缩略图即可立即查看效果
- 🔍 **多种视图** - 支持首页网格和搜索结果两种布局模式
- 🎨 **现代化UI** - 使用Shadcn UI和Tailwind CSS构建的美观界面

## 技术栈

- **框架**: Next.js 15 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **组件库**: Shadcn UI + Radix UI
- **图标**: Lucide React

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建项目
npm run build
```

## 部署到Cloudflare Pages

### 通过GitHub连接部署

1. 将代码推送到GitHub仓库
2. 在Cloudflare Pages中连接你的GitHub仓库
3. 配置构建设置：
   - **构建命令**: `npm run build`
   - **构建输出目录**: `out`
   - **Node.js版本**: 18或以上
4. 部署完成后，每次推送到main分支都会自动重新部署

## 项目结构

```
├── app/                    # Next.js App Router
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 主页面
├── components/            # React组件
│   ├── ui/               # Shadcn UI组件
│   ├── ControlPanel.tsx  # 控制面板
│   ├── PreviewPanel.tsx  # 预览面板
│   └── ThumbnailTester.tsx # 主测试组件
├── lib/                  # 工具函数和配置
│   ├── sampleVideos.ts   # 示例视频数据
│   └── utils.ts          # 工具函数
└── public/              # 静态资源
```

## 使用说明

1. **上传缩略图** - 点击上传区域选择图片文件
2. **选择设备类型** - 在左侧面板选择桌面、平板或手机模式
3. **切换预览模式** - 选择首页或搜索结果视图
4. **实时预览** - 在右侧查看缩略图在YouTube界面中的显示效果

## 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge

## 许可证

MIT License 