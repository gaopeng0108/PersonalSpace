### `dom.html`
这个文件主要演示了，`dom` 操作的性能，面对长列表的时候所产生的性能问题

因此完整的渲染长列表基本上很难达到业务的需求，因此需要非完整的长列表渲染，非完整的长列表渲染一般有两种方式
### 懒渲染
懒渲染就是我们常说的无限滚动，每当页面滚动到底部时，再去加载剩余数据

使用场景
* 纯滚动列表，独立存在
* 根据业务诉求

### 可视区域渲染
只渲染可见部分，不可见部分不渲染。在滚动的时候更新列表项

适用于以下场景
* 每个数据的展现形式高度一致
* 一次需要加载的数据量比较大
* 滚动条需要挂在在一个固定高度区域
* 类似饿了么的滚动点餐列表非常适合