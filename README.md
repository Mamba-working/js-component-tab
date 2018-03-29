# js-component-tab

## 组件功能
   给构造函数传递两个参数，第一个(节点元素)是必须的，第二个(tab的数目)可选,就会在改元素下生成一个tab，可以点击切换
   例如
   ```html
   <div class="tabContainer"></div>
   ```
   那么就可以执行

   ```JavaScript
   let tab = new Tab("document.querySelector(".tabContainer")",10);tab.init()
   ```

   那么就在这个div下生成了一个tab

## 实现方式
   原生js封装而成，使用了es6的class和dom操作

## 使用方式
   直接导入js文件，使用构造函数Tab传入对应参数即可(第一个为dom节点,第二个可选，tab数目)

   [预览地址](https://mamba-working.github.io/js-component-tab/sample.html)