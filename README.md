<!--
 * @Author: LiangJQ
 * @Date: 2019-10-29 16:16:44
 * @Description: 
 -->
# 项目说明
用wepy搭建一个小程序框架

# 代码规范

- 1、文件命名：大写开头，驼峰形式
- 2、css以下划线命名为主，例：header_wrap；如遇全局样式要在前面加"g_"说明：例：g_btn
- 3、代码缩进为4个空格或者1个tab
- 4、代码data属性要有字段注释说明：
```
    data = {
        // 例子1
        /** @type {Boolean} 弹窗显示状态 true: 显示 false: 隐藏 */
        show: false,

        // 例子2
        form: {
            name: '',     // 姓名
            age: '',      // 年龄
            birthday: '', // 生日
            sex: ''       // 性别 F: 女性 M: 男性
        }
    }
```
- 5、方法要有该方法功能注释描述：
```
    /**
     * @Description 校验form表单的字段
     * @Param {Object} form 表单字段列表
     * @Author biao
     * @Return {Boolean} 返回表单是否校验成功 true: 成功 false: 失败
     */
    validateForm(form) {
        ...
        return true;
    }
```
- 6、不提交的的文件包括：
```
node_modules/
dist/
.DS_Store
.wepycache
.git
.svn
```

# 遇到的问题
- 1、新增页面后运行可能会报错，这时候删掉dist文件，再重新运行就好了

