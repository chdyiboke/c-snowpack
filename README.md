# c-snowpack

## 初始化一个关于 snowpack 的 react 项目
npm init -y


npm i @babel/cli @babel/core @babel/preset-react @snowpack/plugin-babel servor snowpack -D
npm install react react-dom --save

npx snowpack init

```
// snowpack.config.js
module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    [
      "@snowpack/plugin-babel",
      {
        "input": ['.js', '.mjs', '.jsx', '.ts', '.tsx'], // (optional) specify files for Babel to transform
        transformOptions: {
          // babel transform options
        }
      }
    ]
  ]
}
```
```javascript
module.exports = {
  presets: [
    "@babel/preset-env",
    '@babel/preset-react',
  ],
};

``` 

## 启动
npm run dev



## css

由于浏览器不支持直接使用 JS 导入 CSS, 因此以下代码无法使用。
```
// ✘ NOT SUPPORTED OUTSIDE OF BUNDLERS
import './style.css';
```

如果想要引入css， 需要通过 style 标签直接引入资源。

官方推荐的使用方式是

简单应用，使用内敛 style
复杂应用推荐使用 CSS-in-JS


## 图片

```
// ✘ NOT SUPPORTED OUTSIDE OF BUNDLERS
import './photo.png';
// √
<img src="/img/photo.png">
```


## 热更新

Snowpack通过esm-hmr规范实现HMR 
```

// HMR Code Snippet Example
if (import.meta.hot) {
  import.meta.hot.accept(({ module }) => {
    // Accept the module, apply it into your application.
  });
}
```

## 优缺点

snowpack 优势

1. 减少了打包的时间成本，只要一次 snowpack。修改源码能够实时反馈在浏览器上。
2. 代码可移植能力强，相当于纯写 JavaScript 语言。
3. 模块和源码相互独立，有点类似于 webpack 的 DDL。
4. 对于简单应用可以快速搭建，对于一些在线编辑的网站可以使用类似的方案进行构建。

snowpack 劣势

1. 对 ES Modules 的依赖性强，在npm 上虽然 ES Modules 的包在逐渐增加，但是短期内需要包都需要做额外的处理。例如我想引入 Antd, 发现其中依赖了很多 CommonJS 的模块以及样式未使用 CSS-in-JS, 引入较为繁琐。
2. 对于一些 css，images 资源处理不够友好，需要额外手动处理，并且底层使用 rollup 来进行一次 ES Modules 的导出太过于生硬, 没有强大的自定义的插件或者配置。
太多依赖包会造成网络问题  
3. 缺少插件生态，需要等插件都规范化吧，目标webpack还是主流。  

如果看未来十年，可能前端工程化构建脚本都不需要了，浏览器可以直接运行源码，线上代码压缩混淆处理一下。


但是年轻总是充满希望和可能。 

[《模块化系列》snowpack](https://juejin.cn/post/6844904067509010439)
[精读《snowpack》](https://juejin.cn/post/6844904176342794254)
