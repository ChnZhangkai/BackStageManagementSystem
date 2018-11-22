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
                <el-input v-model="queryForm.name" clearable placeholder="请输入名称"></el-input>
            </el-form-item>
            <el-form-item style="float:left;margin: 8px 0 0 8px;">
              <el-select v-model="queryForm.status" clearable placeholder="请选择状态">
                <el-option v-for="item in paramData" :key="item.paramCode" :label="item.paramName" :value="item.paramCode"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item style="float:left;margin: 8px 0 0 8px;">
                <el-date-picker type="date" value-format="yyyyMMdd" v-model="queryForm.startTime" placeholder="请选择开始日期"></el-date-picker>
            </el-form-item>
            <el-form-item style="float:left;margin: 8px 0 0 8px;">
                <el-date-picker type="date" value-format="yyyyMMdd" v-model="queryForm.endTime" placeholder="请选择结束日期"></el-date-picker>
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
            <!-- <el-table-column type="selection" width="30"></el-table-column> -->
            <el-table-column prop="activityCode" label="活动编号" width="80"></el-table-column>
            <el-table-column prop="activityName" label="活动名称"></el-table-column>
            <el-table-column prop="startTime" label="开始时间" width="100"></el-table-column>
            <el-table-column prop="endTime" label="结束时间" width="100"></el-table-column>
            <el-table-column prop="cardType" label="卡券类型" width="100"></el-table-column>
            <el-table-column prop="jfType" label="积分类型" width="100"></el-table-column>
            <el-table-column prop="activityLink" label="活动链接"></el-table-column>
            <el-table-column prop="status" label="状态" width="100"></el-table-column>
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

        <el-pagination background style="margin-top:10px;"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total" >
        </el-pagination>

        <!--编辑界面-->
        <el-dialog title="编辑" center :visible.sync="editFormVisible" width="780px">
            <el-form :model="editForm" :rules="addFormRules" ref="editForm">
                <div style="display:flex">
                  <el-form-item label="活动编号" prop="activityCode" :label-width="formLabelWidth" style="width:350px">
                    <el-input v-model="editForm.activityCode"></el-input>
                  </el-form-item>
                  <el-form-item label="活动名称" prop="activityName" :label-width="formLabelWidth" style="width:350px">
                      <el-input v-model="editForm.activityName"></el-input>
                  </el-form-item>
                </div>
                <div style="display:flex">
                  <el-form-item label="开始日期" prop="startTime" :label-width="formLabelWidth">
                    <el-date-picker type="date" value-format="yyyyMMdd" v-model="editForm.startTime" placeholder="选择日期"></el-date-picker>
                  </el-form-item>
                  <el-form-item label="结束日期" prop="endTime" :label-width="formLabelWidth">
                      <el-date-picker type="date" value-format="yyyyMMdd" v-model="editForm.endTime" placeholder="选择日期"></el-date-picker>
                  </el-form-item>
                </div>
                <div style="display:flex">
                  <el-form-item label="参与活动卡券类型" :label-width="formLabelWidth" style="width:350px">
                    <el-input v-model="editForm.joinCardType"></el-input>
                  </el-form-item>
                  <el-form-item label="参与活动积分类型" :label-width="formLabelWidth" style="width:350px">
                      <el-input v-model="editForm.joinJfType"></el-input>
                  </el-form-item>
                </div>
                <div style="display:flex">
                  <el-form-item label="活动目标类型" :label-width="formLabelWidth" style="width:350px">
                    <el-input v-model="editForm.activityTargetType"></el-input>
                  </el-form-item>
                  <el-form-item label="活动目标数量" :label-width="formLabelWidth" style="width:350px">
                      <el-input v-model="editForm.activityTargetNum"></el-input>
                  </el-form-item>
                </div>
                <div style="display:flex">
                  <el-form-item label="活动卡券类型" :label-width="formLabelWidth" style="width:350px">
                    <el-input v-model="editForm.cardType"></el-input>
                  </el-form-item>
                  <el-form-item label="活动积分数量" :label-width="formLabelWidth" style="width:350px">
                      <el-input v-model="editForm.jfNum"></el-input>
                  </el-form-item>
                </div>
                <el-form-item label="活动说明" :label-width="formLabelWidth" style="width: 700px;">
                    <el-input type="textarea" v-model="editForm.activityExplain"></el-input>
                </el-form-item>
                <el-form-item label="活动目标" :label-width="formLabelWidth" style="width: 700px;">
                    <el-input type="textarea" v-model="editForm.activityTargetDesc"></el-input>
                </el-form-item>
                <el-form-item label="活动链接" prop="activityLink" :label-width="formLabelWidth" style="width: 700px;">
                    <el-input v-model="editForm.activityLink"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="editFormVisible = false">取消</el-button>
                <el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
            </div>
        </el-dialog>

        <!--新增界面-->
        <el-dialog title="新增" :visible.sync="addFormVisible" width="780px" v-loading.fullscreen.lock="addLoading" center>
            <el-form :model="addForm" :rules="addFormRules" ref="addForm">
                <div style="display:flex">
                  <el-form-item label="活动编号" prop="activityCode" :label-width="formLabelWidth" style="width:350px">
                    <el-input v-model="addForm.activityCode"></el-input>
                  </el-form-item>
                  <el-form-item label="活动名称" prop="activityName" :label-width="formLabelWidth" style="width:350px">
                      <el-input v-model="addForm.activityName"></el-input>
                  </el-form-item>
                </div>
                <div style="display:flex">
                  <el-form-item label="开始日期" prop="startTime" :label-width="formLabelWidth">
                    <el-date-picker type="date" value-format="yyyyMMdd" v-model="addForm.startTime" placeholder="选择日期"></el-date-picker>
                  </el-form-item>
                  <el-form-item label="结束日期" prop="endTime" :label-width="formLabelWidth">
                      <el-date-picker type="date" value-format="yyyyMMdd" v-model="addForm.endTime" placeholder="选择日期"></el-date-picker>
                  </el-form-item>
                </div>
                <div style="display:flex">
                  <el-form-item label="参与活动卡券类型" :label-width="formLabelWidth" style="width:350px">
                    <el-input v-model="addForm.joinCardType"></el-input>
                  </el-form-item>
                  <el-form-item label="参与活动积分类型" :label-width="formLabelWidth" style="width:350px">
                      <el-input v-model="addForm.joinJfType"></el-input>
                  </el-form-item>
                </div>
                <div style="display:flex">
                  <el-form-item label="活动目标类型" :label-width="formLabelWidth" style="width:350px">
                    <el-input v-model="addForm.activityTargetType"></el-input>
                  </el-form-item>
                  <el-form-item label="活动目标数量" :label-width="formLabelWidth" style="width:350px">
                      <el-input v-model="addForm.activityTargetNum"></el-input>
                  </el-form-item>
                </div>
                <div style="display:flex">
                  <el-form-item label="活动卡券类型" :label-width="formLabelWidth" style="width:350px">
                    <el-input v-model="addForm.cardType"></el-input>
                  </el-form-item>
                  <el-form-item label="活动积分数量" :label-width="formLabelWidth" style="width:350px">
                      <el-input v-model="addForm.jfNum"></el-input>
                  </el-form-item>
                </div>
                <el-form-item label="活动说明" :label-width="formLabelWidth" style="width: 700px;">
                    <el-input type="textarea" v-model="addForm.activityExplain"></el-input>
                </el-form-item>
                <el-form-item label="活动目标" :label-width="formLabelWidth" style="width: 700px;">
                    <el-input type="textarea" v-model="addForm.activityTargetDesc"></el-input>
                </el-form-item>
                <el-form-item label="活动链接" prop="activityLink" :label-width="formLabelWidth" style="width: 700px;">
                    <el-input v-model="addForm.activityLink"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="addFormVisible = false">取消</el-button>
                <el-button type="primary" @click.native="addSubmit">提交</el-button>
            </div>
        </el-dialog>

    </section>
</template>

<script>
// import axios from 'axios'
// import { formatTime } from '../../utils/myUtils'
export default {
  name: 'test',
  created () {
    console.log('营销活动管理init')
    this.doQuery()
    this.doQueryParam()
  },
  data () {
    return {
      pageNum: 1,
      pageSize: 10,
      total: 0,
      checkParam: '',
      // 营销活动待审核参数选项
      paramData: [],
      // table数据
      tableData: [],
      // 是否显示编辑界面
      editFormVisible: false,
      // 是否显示新增页面
      addFormVisible: false,
      addLoading: false,
      editLoading: false,
      editFormRules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' }
        ]
      },
      addFormRules: {
        activityCode: [
          { required: true, message: '请输入活动编号', trigger: 'blur' }
        ],
        activityName: [
          { required: true, message: '请输入活动名称', trigger: 'blur' }
        ],
        startTime: [
          { required: true, message: '请选择开始日期', trigger: 'blur' }
        ],
        endTime: [
          { required: true, message: '请选择结束日期', trigger: 'blur' }
        ],
        activityLink: [
          { required: true, message: '请填写活动页面链接', trigger: 'blur' }
        ]
      },
      // 查询界面表单
      queryForm: {
        startTime: '',
        endTime: '',
        status: '',
        date: []
      },
      // 编辑界面表单
      editForm: {
        activityCode: '',
        activityName: '',
        joinCardType: '',
        joinJfType: '',
        startTime: '',
        endTime: '',
        activityExplain: '',
        activityTargetDesc: '',
        activityLink: '',
        activityTargetType: '',
        activityTargetNum: '',
        cardType: '',
        jfNum: ''
      },
      startTime: '',
      endTime: '',
      // 新增表单
      addForm: {
        activityCode: '',
        activityName: '',
        joinCardType: '',
        joinJfType: '',
        startTime: '',
        endTime: '',
        activityExplain: '',
        activityTargetDesc: '',
        activityLink: '',
        activityTargetType: '',
        activityTargetNum: '',
        cardType: '',
        jfNum: ''
      },
      formLabelWidth: '130px'
    }
  },
  methods: {
    rowStyle (row) {
      if (row.rowIndex === 1) {
        return ''
      }
    },
    // 当前页面显示数改变时
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
      this.pageSize = val
    //   this.doQuery()
    },
    // 页码改变时
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      this.pageNum = val
    //   this.doQuery()
    },
    // 搜索
    doQuery () {
      let param = {
        pageNum: this.pageNum,
        pageSize: this.pageSize,
        activityName: this.queryForm.name,
        status: this.queryForm.status,
        startTime: this.queryForm.startTime,
        endTime: this.queryForm.endTime
      }
      this.http.post(this.api.marketing, param).then((resp) => {
        // console.log(resp)
        if (resp.resultCode === '000000') {
          this.total = resp.data.total
          this.tableData = resp.data.list
          console.log(this.tableData)
        }
      }, (error) => {
        console.log(error)
      })
    },
    // 打开新增dialog
    doAdd () {
      this.addFormVisible = true
    },
    // 打开修改dialog
    handleEdit (index, row) {
      this.editFormVisible = true
      this.editForm = Object.assign({}, row)
      console.log(index + '|' + JSON.stringify(row))
    },
    // 新增提交
    addSubmit () {
      console.log(this.addForm)
      this.$refs.addForm.validate((valid) => {
        if (valid) {
          // this.addLoading = true
          console.log('新增提交')
          console.log(this.addForm)
          this.addForm.startTime = formatTime(this.addForm.startDate, 'yyyyMMdd')
          this.addForm.endTime = formatTime(this.addForm.endDate, 'yyyyMMdd')
          this.http.post(this.api.addMarketing, this.addForm).then((resp) => {
            if (resp.resultCode === '000000') {
              // 重置表单
              this.$refs.addForm.resetFields()
              this.doQuery()
              this.$message({
                type: 'success',
                message: '新增成功'
              })
            }
            // this.addLoading = false
            this.addFormVisible = false
          }, () => {
            this.$message({
              type: 'error',
              message: '新增失败'
            })
            this.addFormVisible = false
            // this.addLoading = false
          })
        }
      })
    },
    editSubmit () {
      console.log(JSON.stringify(this.editForm))
    },
    // 删除
    handleDelete (index, row) {
      console.log(JSON.stringify(row))
      console.log(index + '|' + row)
      this.$confirm('确定删除该条记录吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.tableData.splice(index, 1)
        this.$message({
          type: 'success',
          message: '删除成功'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    // 获取营销活动审核状态参数
    doQueryParam () {
      let paramReq = {'parentCode': 'marketing_check'}
      this.http.post(this.api.param, paramReq).then((resp) => {
        console.log(resp)
        if (resp.resultCode === '000000') {
          this.paramData = resp.data
        }
      }, (error) => {
        console.log(error)
      })
    },
    stringToDate (value) {
      if (value) {
        var year = value.substr(0, 4)
        var month = (value.substr(4, 6)).substr(0, 2)
        var day = value.substr(6)
        var date = new Date(year, month - 1, day)
        return date
      }
    }
  },
  watch: {
    pageNum: function () {
      this.doQuery()
    },
    pageSize: function () {
      this.doQuery()
    }
  }
}
</script>

<style scoped>
/* .tableClass tr{
    height: 40px;
} */
</style>
