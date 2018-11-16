<template>
    <section>
        <!-- 位置 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>首页</el-breadcrumb-item>
            <el-breadcrumb-item>营销管理</el-breadcrumb-item>
            <el-breadcrumb-item>营销活动管理</el-breadcrumb-item>
        </el-breadcrumb>

    <!-- 查询栏 -->
    <el-col :span="24" style="padding-bottom: 0px;background-color: #fafafa;height: 50px;margin-top: 10px;">
        <el-form :v-model="queryForm" :inline="true">
            <el-form-item style="float:left;margin: 8px 0 0 8px;">
                <el-input v-model="queryForm.name"  placeholder="请输入名称"></el-input>
            </el-form-item>
            <el-form-item style="float:left;margin: 8px 0 0 8px;">
                <el-date-picker type="dates" v-model="queryForm.date" placeholder="请选择日期"></el-date-picker>
            </el-form-item>
            <el-form-item style="float:left;margin: 8px 0 0 8px;">
                <el-button type="primary" @click="doQuery">查询</el-button>
            </el-form-item>
            <el-form-item style="float:right;margin: 8px 48px 0 0;">
                <el-button type="primary" @click="doAdd">新增</el-button>
            </el-form-item>
        </el-form>
    </el-col>

        <!-- 列表 -->
        <el-table :data="tableData" border :header-cell-style="{'background-color': '#fafafa'}" :row-style="rowStyle" class="tableClass" style="width: 100%;margin-top: 70px;;">
            <el-table-column type="selection" width="30"></el-table-column>
            <el-table-column prop="id" label="活动编号" width="80"></el-table-column>
            <el-table-column prop="name" label="活动名称"></el-table-column>
            <el-table-column prop="startDate" label="开始时间" width="100"></el-table-column>
            <el-table-column prop="endDate" label="结束时间" width="100"></el-table-column>
            <el-table-column prop="couponType" label="卡券类型" width="100"></el-table-column>
            <el-table-column prop="integralType" label="积分类型" width="100"></el-table-column>
            <el-table-column prop="url" label="活动链接"></el-table-column>
            <el-table-column prop="status" label="状态" width="50"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
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

        <el-pagination background style="margin-top:10px;" :page-size="10" layout="prev, pager, next" :total="18"></el-pagination>
    </section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'test',
  created () {
    console.log('营销活动管理init')
    axios.get('static/json/MCM.json').then((resp) => {
      console.log(resp)
      this.tableData = resp.data
    }, (error) => {
      console.log(error)
    }
    )
  },
  data () {
    return {
      msg: 'test',
      tableData: [],
      // 是否显示编辑界面
      editFormVisible: false,
      editLoading: false,
      editFormRules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ]
      },
      // 查询界面表单
      queryForm: {
        name: '',
        data: ''
      },
      // 编辑界面表单
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
    rowStyle (row) {
      if (row.rowIndex === 1) {
        return ''
      }
    },
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
/* .rowStyle{
    height: 30px;
} */
/* .tableClass tr{
    height: 40px;
} */
</style>
