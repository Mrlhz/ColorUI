<template>
  <div>
    <back>表单</back>
    <bar bgcolor="blue">具有数据校验功能的表单组件</bar>
    <i-form ref="form" :model="formValidate" :rules="ruleValidate">
      <i-form-item label="用户名" prop="name">
        <i-input v-model="formValidate.name"></i-input>
      </i-form-item>
      <i-form-item label="邮箱" prop="mail">
        <i-input v-model="formValidate.mail"></i-input>
      </i-form-item>
      <i-form-item label="号码" prop="phone">
        <i-input v-model="formValidate.phone"></i-input>
      </i-form-item>
    </i-form>

    <Button size="md" type="primary" @click="handleSubmit">提交</Button>
    <Button size="md" type="default" @click="handleReset">重置</Button>
  </div>
</template>
<script>

import iForm from 'packages/Form/form'
import iFormItem from 'packages/Form/form-item'
import iInput from 'packages/Form/input'

export default {
  components: { iForm, iFormItem, iInput },
  data () {
    return {
      formValidate: {
        name: '',
        mail: '',
        phone: ''
      },
      ruleValidate: {
        name: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
        mail: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
        ],
        phone: [
          // bug
          // { type: 'number', message: '手机号码格式不正确', trigger: 'blur' },
          { required: true, message: '手机号码不能为空' },
          {
            validator (rule, value, callback, source, options) {
              const errors = []
              if (!/^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(value)) {
                // errors.push(new Error(`${rule.field} must be a phone number`))
                errors.push(new Error('手机号码格式不正确'))
              }
              return errors
            }
          }
        ]
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$refs.form.validate(valid => {
        if (valid) {
          console.log('提交成功')
        } else {
          console.log('表单校验失败')
        }
      })
    },
    handleReset () {
      this.$refs.form.resetFields()
    }
  }
}
</script>
