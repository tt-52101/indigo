## Indigo
接口管理，调试，自动化测试，监控 系统，目前实现 HTTP/HTTPS

[![Build Status](https://travis-ci.org/asura-pro/indigo.svg?branch=master)](https://travis-ci.org/asura-pro/indigo)

### 特性
>不是基于脚本实现，所以功能上没有脚本强大和灵活，但作为更高层次的抽象提供了一些脚本较难拥有的特性

- OpenApi 接口定义管理
- 丰富可扩展的断言类型
- 在线管理和调试 用例，场景，任务
- 任意环境支持，通过动态代理实现，只需求改动一个参数就可以动态指定是访问测试，预览，冒烟或线上等环境
- 现代化的UI，参考了 Postman 等流行工具的UI，比较方便使用
- 定时任务支持
- 历史数据分析对比
- 汇总报告

### 构建

1. `yarn install`
2. `yarn run build`
