### x-Table 分页表格

## 组件说明

可分页的表格，用以展示数组数据，可以传入一个 API 接口直接查询数据单元格里面不仅可以显示文本，也可以显示自定义的组件（如果可编辑，请使用 EditTable）。

## 使用场景

页面需要展示表格，且需要分页查询

## Table Attributes

除了继承 el-table 的属性，还支持以下属性：

| 参数  | 说明                                   | 类型  | 可选值 | 默认值 |
| ----- | -------------------------------------- | ----- | ------ | ------ |
| pages | 分页的配置                             | array | —      | []     |
| data  | 列表数据源，v-model 对应的是 data 属性 | array | —      | []     |

## Table Methods

| 方法名 | 说明 | 参数              |
| ------ | ---- | ----------------- |
| --     | --   | Function():string |

## Table Events

完全继承了 el-table 的 Events

## Column Attributes

| 参数      | 说明                                                                                   | 类型         | 可选值 | 默认值 |
| --------- | -------------------------------------------------------------------------------------- | ------------ | ------ | ------ |
| prop      | 同 el-table-column 的 prop                                                             | string       | -      | -      |
| label     | 同 el-table-column 的 label                                                            | string       | -      | -      |
| component | 动态组件：编辑状态下显示的表单组件, 需要实现自定义 v-model                             | VueComponent | —      | null   |
| attrs     | 对显示的组件需要设置的属性, 比如 placeholder type disabled 属性, 支持 element 表单属性 | object       | —      | {}     |
