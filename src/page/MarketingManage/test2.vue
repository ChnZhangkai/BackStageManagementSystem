<template>
    <section>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>营销管理</el-breadcrumb-item>
            <el-breadcrumb-item>营销活动复核</el-breadcrumb-item>
        </el-breadcrumb>
    </section>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      msg: 'test2222222222222222'
    }
  }
}
</script>

<style scoped>

</style>
