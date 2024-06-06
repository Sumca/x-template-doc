### EditTable 可编辑表格

## 组件说明

可编辑的表格，用以增加/删除/修改一个数组数据，单元格里面不仅可以显示文本，还可以显示自定义的组件。

## 使用场景

页面需要展示表格，且需要编辑它

## Table Attributes

除了继承 el-table 的属性([查看element plus](https://element-plus.org/zh-CN/component/table.html#table-api))，还支持以下属性：

| 参数     | 说明                                         | 类型    | 可选值     | 默认值 |
| -------- | -------------------------------------------- | ------- | ---------- | ------ |
| columns  | 列配置数组，每条数据对应一个 EditTableColumn | array   | —          | []     |
| data     | 列表数据源，v-model 对应的是 data 属性       | array   | —          | []     |
| disabled | 是否禁用                                     | boolean | true/false | false  |
| isNo | 是否展示序号                                     | boolean | true/false | true  |
| isSelection | 是否展示行的复选框                                     | boolean | true/false | false  |
| showSlider | 是否展示Slider（还在完善中）                                     | boolean | true/false | false  |


## Table Methods

| 方法名   | 说明                                         | 参数              |
| -------- | -------------------------------------------- | ----------------- |
| validate | 校验表格中的表单，若校验不通过则返回错误信息 | Function():string |

## Table Events

完全继承了 el-table 的 Events

## Column Attributes

| 参数      | 说明                                                                                   | 类型         | 可选值              | 默认值 |
| --------- | -------------------------------------------------------------------------------------- | ------------ | ------------------- | ------ |
| prop      | 同 el-table-column 的 prop                                                             | string       | -                   | -      |
| label     | 同 el-table-column 的 label                                                            | string       | -                   | -      |
| editable  | 是否可编辑，若是则显示表单组件；否则显示文本                                           | boolean      | true/               |
| false     | false                                                                                  |
| rules     | 校验规则 同 el-form 的 rules，只对应当前列                                             | array        | —                   | []     |
| type      | 编辑状态下显示的表单组件类型，与组件的映射位于 EditTableColumn/factory.ts              | string            | input/number/select | -      |
| component | 动态组件：编辑状态下显示的表单组件, 需要实现自定义 v-model                             | VueComponent | —                   | null   |
| listeners | 列监听的事件                                                                           | object       | —                   | {}     |
| attrs     | 对显示的组件需要设置的属性, 比如 placeholder type disabled 属性, 支持 element 表单属性 | object       | —                   | {}     |
| iconName     | 对应element Icon 的图标具体名称 [参考官方文档](https://element-plus.org/zh-CN/component/icon.html) | string       | Edit/Plus/...                   |—     |
| iconAttrs     | element Icon的属性 | object       | {}                  | {}     |
| fontStyle     | 显示文本的样式（非编辑状态） | object       | 参考样式书写，对象中横杠写法需要写成小驼峰，例如font-size要写成fontSize                  | {}     |

## Table Slot

| 插槽名   | 说明                                         | 备注              |
| -------- | -------------------------------------------- | ----------------- |
| default | 默认插槽 | 官方的写法直接在表格里面写el-table-column |
| append | Table 官方插槽 | - |
| empty | Table 官方插槽 | - |
| buttton | 表格顶部的按钮组 | 主要添加按钮 |


## Column Slot
Column 内部插槽完全参考el-table-column内部插槽写法（default和header）

## 举例

```js{4}
<template>
  <edit-table
    ref="editTable"
    title="数据表格"
    max-height="300"
    showSlider
    :is-selection="true"
    :columns="columns"
    :data="tableData"
    @row-edit="onRowEdit"
  >
    <template #buttton>
      <el-button type="success" @click="onAdd">新增</el-button>
      <el-button type="info" @click="onSave">保存</el-button>
      <el-button type="danger">删除</el-button>
    </template>
    <el-table-column fixed="right" label="操作" width="120">
      <template #header>
        <el-input size="small" placeholder="Type to search" />
      </template>
      <template #default="scope">
        <el-button link type="primary" size="small">{{ scope.row.name }}</el-button>
        <el-button link type="primary" size="small">Edit</el-button>
      </template>
    </el-table-column>
  </edit-table>
</template>

<script setup name="EditTable">
const columns = [
  {
    label: '姓名',
    iconName: 'Edit',
    iconAttrs: { color: '#f534B1' },
    fontStyle: { padding: '0 4px' },
    prop: 'name',
    width: '100'
  },
  {
    type: 'switch',
    label: '状态',
    prop: 'status',
    editable: true,
    attrs: {
      activeValue: '1',
      inactiveValue: '0'
    },
    width: '100'
  },
  {
    label: '年龄',
    prop: 'age',
    width: '100',
    editable: true,
    rules: [{ required: true, message: '年龄不能为空' }],
    linstener: {
      change(val: string) {
        console.log(val)
      }
    }
  },
  {
    label: '邮箱',
    prop: 'email',
    editable: true,
    width: '200',
    attrs: { disabled: true }
  },
  {
    label: '性别',
    prop: 'gender',
    editable: true,
    type: 'select',
    width: '100',
    rules: [{ required: true, message: '性别不能为空' }],
    attrs: {
      clearable: true,
      options: [
        { label: '男', value: 'man' },
        { label: '女', value: 'feman' }
      ]
    },
    linstener: {
      change(val: string) {
        console.log(val)
      }
    }
  },
  {
    label: '日期',
    prop: 'date',
    type: 'date',
    editable: true,
    width: '280',
    attrs: {
      valueFormat: 'YYYY-MM-DD'
    }
  },
  { label: '地址', prop: 'address', width: '280' }
]
</script>
```
## 更多
更对功能开发中。。。