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
