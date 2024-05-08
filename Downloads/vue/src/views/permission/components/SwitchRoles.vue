<template>
  <div>
    <br>
    <div style="margin-bottom:100px;margin-left: 80px;font-size: 30px;">
      您现在的身份是: {{ roles }}
    </div>
    <div style="margin-bottom:150px;margin-left: 80px;font-size: 20px;">您可以切换身份:
    <el-radio-group v-model="switchRoles" >
      <el-radio-button label="editor" />
      <el-radio-button label="admin" />
    </el-radio-group></div>
  </div>
</template>

<script>
export default {
  computed: {
    roles() {
      return this.$store.getters.roles
    },
    switchRoles: {
      get() {
        return this.roles[0]
      },
      set(val) {
        this.$store.dispatch('user/changeRoles', val).then(() => {
          this.$emit('change')
        })
      }
    }
  }
}
</script>
