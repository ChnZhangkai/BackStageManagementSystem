<template>
    <section>
        <!-- 位置 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>营销管理</el-breadcrumb-item>
            <el-breadcrumb-item>中奖纪录查询</el-breadcrumb-item>
        </el-breadcrumb>

    <!-- 查询栏 -->
    <el-col :span="24" style="padding-bottom: 0px;background-color: #fafafa;height: 50px;margin-top: 10px;">
        <el-form :inline="true">
            <el-form-item style="float:left;margin: 8px 0 0 8px;">
                <el-input  placeholder="姓名"></el-input>
            </el-form-item>
            <el-form-item style="float:left;margin: 8px 0 0 8px;">
                <el-button type="primary" @click="doQuery">查询</el-button>
            </el-form-item>
            <el-form-item style="float:left;margin: 8px 0 0 8px;">
                <el-button type="primary" @click="doAdd">新增</el-button>
            </el-form-item>
        </el-form>
    </el-col>

        <!-- 列表 -->
        <el-table :data="tableData" border :header-cell-style="{'background-color': '#fafafa'}" style="width: 100%;margin-top: 70px;;">
            <el-table-column prop="id" label="客户编号"></el-table-column>
            <el-table-column prop="name" label="客户姓名"></el-table-column>
            <el-table-column prop="prizeId" label="奖品编号"></el-table-column>
            <el-table-column prop="prizeName" label="奖品名称"></el-table-column>
            <el-table-column prop="prizeType" label="奖品类型"></el-table-column>
            <el-table-column prop="date" label="中奖日期"></el-table-column>
            <el-table-column prop="tel" label="电话号码"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
            <el-table-column prop="prize" label="奖品描述"></el-table-column>
        </el-table>

    <!--编辑界面-->
    <el-dialog title="编辑" :visible.sync="editFormVisible">
        <el-form :model="editForm" :rules="editFormRules">
            <el-form-item label="生日" :label-width="formLabelWidth">
                <el-date-picker type="date" placeholder="选择日期" v-model="editForm.date"></el-date-picker>
            </el-form-item>
            <el-form-item label="姓名" prop="name" :label-width="formLabelWidth">
                <el-input v-model="editForm.name" auto-complete="off" style="float:left"></el-input>
            </el-form-item>
            <el-form-item label="地址" :label-width="formLabelWidth">
                <el-input type="textarea" v-model="editForm.address"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="editFormVisible = false">取消</el-button>
            <el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
        </div>
    </el-dialog>

        <el-pagination background style="margin-top:10px;" :page-size="10" layout="prev, pager, next" :total="10"></el-pagination>
    </section>
</template>

<script>
export default {
  name: 'test',
  created () {
    console.log('中奖纪录查询init')
  },
  data () {
    return {
      msg: 'test',
      tableData: [],
      editFormVisible: false, // 是否显示编辑界面
      editLoading: false,
      editFormRules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ]
      },
      // 编辑界面数据
      editForm: {
        id: 0,
        name: '',
        sex: -1,
        age: 0,
        birth: '',
        addr: ''
      },
      formLabelWidth: '120px'
    }
  },
  methods: {
    // 条件搜索
    doQuery () {
      console.log(123)
    },
    // 新增
    doAdd () {
      console.log(456)
    },
    // 修改
    handleEdit (index, row) {
      this.editFormVisible = true
      this.editForm = Object.assign({}, row)
      console.log(index + '|' + row)
    },
    // 删除
    handleDelete (index, row) {
      console.log(index + '|' + row)
    }
  }
}
</script>

<style scoped>

</style>
