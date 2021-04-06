## Any Stream Landing Page
Bootstrap主题种子项目

### 目录结构
```text
src/
├── assets/             静态文件
│   ├── img             主题使用到的图片文件
│   ├── img-temp        临时图片文件，比如临时的背景图之类
│   ├── js              必要的javscript文件
│   ├── scss            样式源文件，目录下的文件将会被编译到dist/assets/css
│   ├── svg             主题使用到的svg矢量图
│   └── vendor          第三方依赖，安装依赖时会自动安装bootstrap，popper.js ，jquery到此目录
├── includes/           页面组成部分
│   ├── end.ejs         </body>至html结束部分，包含js
│   ├── navbar.ejs      导航部分
│   └── start.ejs       html开头至<body>
├── index.ejs           主题入口文件
└── other-page.ejs      主题其他页面
  
```
### 运行命令

`npm run start` start deving and serve web page

`npm run build` build and publish
