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
    <button @click="handleSubmit">提交</button>
    <button @click="handleReset">重置</button>
  </div>
</template>
<script>
import Back from 'common/Back'
import Bar from 'common/Bar'

import iForm from '../../common/Form/form'
import iFormItem from '../../common/Form/form-item'
import iInput from '../../common/Form/input'

export default {
  components: { Back, Bar, iForm, iFormItem, iInput },
  data () {
    return {
      formValidate: {
        name: '',
        mail: ''
      },
      ruleValidate: {
        name: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
        mail: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
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
