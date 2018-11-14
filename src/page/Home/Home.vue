<template>
  <el-container style="height:100%">
    <el-header>积分管理与营销系统</el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          style="height:100%">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">营销管理</span>
            </template>
            <el-menu-item-group>
              <!-- <template slot="title">分组一</template> -->
              <el-menu-item index="1-1" @click="$router.push('/test')">营销活动管理</el-menu-item>
              <el-menu-item index="1-2" @click="$router.push('/test2')">营销活动复核</el-menu-item>
              <el-menu-item index="1-3">中奖纪录查询</el-menu-item>
              <el-menu-item index="1-4">签到参数管理</el-menu-item>
              <el-menu-item index="1-5">奖品管理</el-menu-item>
              <el-menu-item index="1-6">抽奖纪录查询</el-menu-item>
              <el-menu-item index="1-7">营销活动监控</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">活动管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">积分活动管理</el-menu-item>
              <el-menu-item index="2-2">积分活动审核</el-menu-item>
              <el-menu-item index="2-3">积分活动监控</el-menu-item>
              <el-menu-item index="2-4">积分规则试算</el-menu-item>
              <el-menu-item index="2-5">积分活动试算</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span slot="title">积分管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">积分余额</el-menu-item>
              <el-menu-item index="3-2">积分调整</el-menu-item>
              <el-menu-item index="3-3">积分冻结/解冻</el-menu-item>
              <el-menu-item index="3-4">积分调整复核</el-menu-item>
              <el-menu-item index="3-5">积分冻结/解冻复核</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-rank"></i>
              <span slot="title">积分报表</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-1">客户积分消费报表</el-menu-item>
              <el-menu-item index="4-2">战区积分消费报表</el-menu-item>
              <el-menu-item index="4-3">分行行动积分报表</el-menu-item>
              <el-menu-item index="4-4">活动产生积分报表</el-menu-item>
              <el-menu-item index="4-5">活动产生权益情况统计报表</el-menu-item>
              <el-menu-item index="4-6">客户积分明细报表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-tickets"></i>
              <span slot="title">卡券管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="5-1">卡券维护</el-menu-item>
              <el-menu-item index="5-2">卡券批量导入</el-menu-item>
              <el-menu-item index="5-3">卡券明细</el-menu-item>
              <el-menu-item index="5-4">卡券使用明细</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span slot="title">系统运维</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="6-1">登录日志</el-menu-item>
              <el-menu-item index="6-2">业务操作日志</el-menu-item>
              <el-menu-item index="6-3">积分批量任务执行监控</el-menu-item>
              <el-menu-item index="6-4">积分批量任务强制执行</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title">
              <i class="el-icon-star-on"></i>
              <span slot="title">用户管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="7-1">用户管理</el-menu-item>
              <el-menu-item index="7-2">角色管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="8">
            <template slot="title">
              <i class="el-icon-share"></i>
              <span slot="title">参数管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="8-1">数据字典设置</el-menu-item>
              <el-menu-item index="8-2">活动参数设置</el-menu-item>
              <el-menu-item index="8-3">MCC码参数设置</el-menu-item>
              <el-menu-item index="8-4">黑名单查询</el-menu-item>
              <el-menu-item index="8-5">客户群组查询/导入</el-menu-item>
              <el-menu-item index="8-6">黑名单审核</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <!-- <el-tabs v-model="editableTabsValue2" type="card" closable @tab-remove="removeTab" style="height:100%">
          <el-tab-pane
            v-for="(item) in editableTabs2"
            :key="item.name"
            :label="item.title"
            :name="item.name"
          >
            {{item.content}}
          </el-tab-pane>
        </el-tabs> -->
        <el-col :span="24" class="content-wrapper">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </el-col>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'This is home.vue',
      editableTabsValue2: '2',
      editableTabs2: [{
        title: 'Tab 1',
        name: '1',
        content: 'Tab 1 content'
      }, {
        title: 'Tab 2',
        name: '2',
        content: 'Tab 2 content'
      }],
      tabIndex: 2
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      // console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      // console.log(key, keyPath)
    }
    // addTab (targetName) {
    //   let newTabName = ++this.tabIndex + ''
    //   this.editableTabs2.push({
    //     title: 'New Tab',
    //     name: newTabName,
    //     content: 'New Tab content'
    //   })
    //   this.editableTabsValue2 = newTabName
    // },
    // removeTab (targetName) {
    //   let tabs = this.editableTabs2
    //   let activeName = this.editableTabsValue2
    //   if (activeName === targetName) {
    //     tabs.forEach((tab, index) => {
    //       if (tab.name === targetName) {
    //         let nextTab = tabs[index + 1] || tabs[index - 1]
    //         if (nextTab) {
    //           activeName = nextTab.name
    //         }
    //       }
    //     })
    //   }

    //   this.editableTabsValue2 = activeName
    //   this.editableTabs2 = tabs.filter(tab => tab.name !== targetName)
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header {
  /* background-color: #B3C0D1; */
  color: #333;
  text-align: center;
  line-height: 60px;
  border-bottom: 1px solid #e6e6e6;
}

.el-aside {
  /* background-color: #D3DCE6; */
  color: #333;
  /* text-align: center; */
  line-height: 200px;
  /* border-right: 1px solid #409EFF; */
}

.el-main {
  /* background-color: #E9EEF3; */
  color: #333;
  text-align: center;
  /* line-height: 160px; */
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
