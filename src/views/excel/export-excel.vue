<template>
  <div>
    <div class="bar">
      <input type="text"  placeholder="输入搜索内容" style="margin-right: 30px;"/> 
      <el-button type="primary" @click="openAddDialog">添加信息</el-button>
    </div>
    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row :total="total">
      
      <el-table-column v-for="(column, index) in columns" :key="index" :prop="column.key" :label="column.label" align="center" 
    :width="getColumnWidth(column.key)" >
          <template slot="header" slot-scope="scope">
            <div class="sortable-header" @click="sortTable(column.key)">
              <span>{{ column.label }}</span>
              <span class="ant-table-column-sorter ant-table-column-sorter-full">
                <span class="ant-table-column-sorter-inner">
                  <span role="button" aria-label="caret-up" class="anticon anticon-caret-up ant-table-column-sorter-up">
                    <svg focusable="false" data-icon="caret-up" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024">
                      <path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"></path>
                    </svg>
                  
                  <span role="button" aria-label="caret-down" class="anticon anticon-caret-down ant-table-column-sorter-down">
                    <svg focusable="false" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="0 0 1024 1024">
                      <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
                    </svg>
                  </span></span>
                </span>
              </span>
            </div>
          </template>
      <template slot-scope="scope">
        <span v-if="!scope.row.editing" @click="onClick(scope.row, column.key)">{{ scope.row[column.key] }}</span>
        <el-input v-else v-model="scope.row[column.key]" size="mini" @blur="onBlur(scope.row, column.key)"></el-input>
      </template>
    </el-table-column>
    <el-table-column :prop="'domain'" :label="'域名'" :width="'200px'" fixed align="center" ></el-table-column>
    <el-table-column label="操作" width="160" align="center" fixed="right">
    <el-button type="primary" size="small" @click="openEditDialog">修改</el-button>
        <!-- 弹出框 -->
        <el-dialog :visible="editDialogVisible" @close="closeEditDialog">
              <el-form :model="editFormData" label-width="100px">
                <el-form-item label="小组">
                  <el-input v-model="editFormData.name"></el-input>
                </el-form-item>
                <!-- 其他字段 -->
                <!-- 添加需要修改的字段和对应的输入框 -->

                <el-form-item>
                  <el-button type="primary" @click="saveEdit">保存</el-button>
                </el-form-item>
              </el-form>
            </el-dialog>
 
    <el-button type="danger" size="small" @click="handleDelete= false">删除</el-button>
      </el-table-column>
  </el-table>
  <el-dialog title="添加信息" :visible="addDialogVisible" @close="addDialogVisible = false">
  <el-form :model="addFormData" ref="addForm" label-position="left">
    <el-row><el-col :span="8"><el-form-item label="域名" prop="domain"><el-input v-model="addFormData.domain"></el-input></el-form-item> </el-col>
    <el-col :span="1"><el-form-item label=""></el-form-item></el-col>
    <el-col :span="5"><el-form-item label="小组" prop="name"><el-input v-model="addFormData.name"></el-input></el-form-item></el-col>
    <el-col :span="1"><el-form-item label=""></el-form-item></el-col>
    <el-col :span="2"><el-form-item label="国家" prop="site_monday"><el-input v-model="addFormData.site_monday"></el-input></el-form-item></el-col>
    <el-col :span="1"><el-form-item label=""></el-form-item></el-col>
    <el-col :span="2"><el-form-item label="域名状态" prop="site_tuesday"><el-input v-model="addFormData.site_tuesday"></el-input></el-form-item></el-col>
    <el-col :span="1"><el-form-item label=""></el-form-item></el-col>
    <el-col :span="2"><el-form-item label="负责人" prop="site_wednesday"><el-input v-model="addFormData.site_wednesday"></el-input></el-form-item></el-col>
    </el-row>
    <el-row>
    <el-col :span="4"><el-form-item label="后台账号" prop="site_thursday"><el-input v-model="addFormData.site_thursday"></el-input></el-form-item></el-col>
    <el-col :span="1"><el-form-item label=""></el-form-item></el-col>
    <el-col :span="4"><el-form-item label="后台密码" prop="site_friday"><el-input v-model="addFormData.site_friday"></el-input></el-form-item></el-col>
    <el-col :span="1"><el-form-item label=""></el-form-item></el-col>
    <el-col :span="3"><el-form-item label="上站时间" prop="site_saturday"><el-input v-model="addFormData.site_saturday"></el-input></el-form-item></el-col>
    <el-col :span="1"><el-form-item label=""></el-form-item></el-col>
    <el-col :span="4"><el-form-item label="数据库" prop="site_sunday"><el-input v-model="addFormData.site_sunday"></el-input></el-form-item></el-col>
    <el-col :span="1"><el-form-item label=""></el-form-item></el-col>
    <el-col :span="4"><el-form-item label="数据库密码" prop="site_updated_at"><el-input v-model="addFormData.site_updated_at"></el-input></el-form-item></el-col>
    </el-row>
    <el-row>
    <el-col :span="3"><el-form-item label="AID" prop="site_updated_at"><el-input v-model="addFormData.site_updated_at"></el-input></el-form-item></el-col>
    <el-col :span="1"><el-form-item label=""></el-form-item></el-col>
    <el-col :span="5"><el-form-item label="邮箱" prop="site_updated_at"><el-input v-model="addFormData.site_updated_at"></el-input></el-form-item></el-col>
    <el-col :span="1"><el-form-item label=""></el-form-item></el-col>
    <el-col :span="5"><el-form-item label="邮箱密码" prop="site_updated_at"><el-input v-model="addFormData.site_updated_at"></el-input></el-form-item></el-col>
    <el-col :span="1"><el-form-item label=""></el-form-item></el-col>
    <el-col :span="5"><el-form-item label="Google Analytics" prop="site_updated_at"><el-input v-model="addFormData.site_updated_at"></el-input></el-form-item></el-col>
  </el-row>
    <el-row><el-col :span="10"><el-form-item label="标题" prop="site_updated_at"><el-input v-model="addFormData.site_updated_at"></el-input></el-form-item></el-col></el-row>
    <el-row><el-col :span="23"><el-form-item label="简介" prop="site_updated_at"><el-input v-model="addFormData.site_updated_at"></el-input></el-form-item></el-col></el-row>
    <el-row><el-col :span="8"><el-form-item label="行业" prop="site_updated_at"><el-input v-model="addFormData.site_updated_at"></el-input></el-form-item></el-col></el-row>
    <el-button type="primary" @click="submitAddForm">确认添加</el-button>
  </el-form>
  </el-dialog>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />
  </div>
</template>


<script>
import { fetchArticle } from '@/api/article';
import Pagination from '@/components/Pagination'; 
import { addSite } from '@/api/article';


export default {
  components: { Pagination },
  data() {
    return {
      addDialogVisible: false,
      addFormData: {
        domain: '',name: '',
        site_monday: '',site_tuesday: '',site_wednesday: '',site_thursday: '',site_friday: '',site_saturday: '',site_sunday: '',site_updated_at: '',
      },
      editDialogVisible: false,
      editFormData: {
        // 初始化要编辑的数据
        name: '',
        // 其他字段
      },


      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10
      },
      columns: [
        // { key: 'domain', label: '域名' },
        { key: 'name', label: '小组' },
        { key: 'country', label: '国家' },
        { key: 'status', label: '域名状态' },
        { key: 'owner', label: '负责人' },
        { key: 'admin_account', label: '后台账号' },
        { key: 'admin_password', label: '后台密码' },
        { key: 'deploy_at', label: '上站时间' },
        { key: 'db', label: '数据库' },
        { key: 'db_pwd', label: '数据库密码' },
        { key: 'AID', label: 'AID' },
        { key: 'gmail', label: '邮箱' },
        { key: 'gmail_pwd', label: '邮箱密码' },
        { key: 'Analytics', label: 'Google Analytics' },
        { key: 'title', label: '标题' },
        { key: 'desc', label: '简介' },
        { key: 'website_type', label: '行业' }
      ]
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      console.log('正在获取数据，当前页码：', this.listQuery.page, '每页数量：', this.listQuery.limit);
  
    this.listLoading = true;
    fetchArticle({
    page: this.listQuery.page,
    limit: this.listQuery.limit
     }).then(response => {
          this.total = response.count;
          this.list = response.data;
           // 对所有数据进行排序
      
          const startIndex = (this.listQuery.page - 1) * this.listQuery.limit;
          const endIndex = Math.min(startIndex + this.listQuery.limit, this.total); // 防止超出总数
          this.list = this.list.slice(startIndex, endIndex);
          
          console.log('当前页数据:', this.list);
          this.listLoading = false;
  }).catch(error => {
    console.error('请求错误:', error);
    this.listLoading = false;
      });
  },
  sortTable(key) {
    // 点击排序时的逻辑
    console.log('点击了排序，排序键：', key);
    // 根据键值进行排序
    this.list.sort((a, b) => {
        if (typeof a[key] === 'string') {
            // 如果是字符串类型，按字母顺序排序
            return a[key].localeCompare(b[key]);
        } else if (typeof a[key] === 'number') {
            // 如果是数字类型，按数字大小排序
            return a[key] - b[key];
        } else {
            return 0;
        }
    });

    // 输出排序后的数据
    this.list.forEach(item => {
        console.log('数据：', item[key]);
    });

    // 切换排序方式
    this.listQuery.order = this.listQuery.order === 'asc' ? 'desc' : 'asc';
},
getColumnWidth(key) {
      switch (key) {
        case 'domain':return '205px';case 'name': return '110px';case 'country':return '100px';case 'status':return '180px';case 'owner':return '110px';
        case 'admin_account':return '210px';case 'admin_password':return '210px';case 'deploy_at':return '210px';case 'db':return '210px';case 'db_pwd':return '210px';
        case 'AID':return '150px';case 'gmail':return '150px';case 'gmail_pwd':return '150px';case 'Analytics':return '310px';case 'title':return '210px';
        case 'desc':return '610px';case 'website_type':return '110px';default:return ''; } 
      },
  openAddDialog() {
    this.addDialogVisible = true;
  },
  submitAddForm() {
    addSite(this.addFormData)
      .then(res => {
        console.log("Response from addSite:", res);
      })
      .catch(error => {
        console.error("Error from addSite:", error);
      });
  },
  openEditDialog() {
      // 打开弹出框并将当前选择的数据填充到表单中
      this.editFormData = { ...this.selectedData }; // 假设 selectedData 是当前选择的数据
      this.editDialogVisible = true;
    },
    closeEditDialog() {
      // 关闭弹出框
      this.editDialogVisible = false;
    },
    saveEdit() {
      // 发送修改后的数据到后端进行更新
      console.log('保存修改的数据:', this.editFormData);
      // 调用后端接口发送修改请求
      // 接口调用成功后关闭弹出框
      this.closeEditDialog();
    }



 }
}
</script>


<style lang="scss" scoped>
.sortable-header {
  display: flex;
  flex-direction: row; /* 将排序按钮水平排列 */
  align-items: center; /* 水平居中对齐 */
  margin-left: 30%;
}

.ant-table-column-sorter-up,
.ant-table-column-sorter-down {
  display: block; /* 将排序箭头显示为块级元素 */
  // margin-top: 2px; /* 适当调整排序箭头距离列名的上方间距 */
  line-height: 1; /* 调整行高 */
  margin-left: 0.5px;
}
.ant-table-column-sorter-down {
  margin-top: -5px; /* 适当调整排序箭头距离列名的上方间距 */
}
  .bar{
        border-radius: 2px;
        width: 400px;
        padding: 14px;
        margin: 1px 2px;
        position:relative;
    }
  .bar input{
        background:#fff no-repeat 13px 13px;
        background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU5NEY0RTlFMTA4NzExRTM5RTEzQkFBQzMyRjkyQzVBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU5NEY0RTlGMTA4NzExRTM5RTEzQkFBQzMyRjkyQzVBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTk0RjRFOUMxMDg3MTFFMzlFMTNCQUFDMzJGOTJDNUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTk0RjRFOUQxMDg3MTFFMzlFMTNCQUFDMzJGOTJDNUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4DjA/RAAABK0lEQVR42pTSQUdEURjG8dOY0TqmPkGmRcqYD9CmzZAWJRHVRIa0iFYtM6uofYaiEW2SRJtEi9YxIklp07ZkWswu0v/wnByve7vm5ee8M+85zz1jbt9Os+WiGkYdYxjCOx5wgFeXUHmtBSzpcCGa+5BJTCjEP+0nKWAT8xqe4ArPGEEVC1hHEbs2oBwdXkM7mj/JLZrad437sCGHOfUtcziutuYu2v8XUFF/4f6vMK/YgAH1HxkBYV60AR31gxkBYd6xAeF3VzMCwvzOBpypX8V4yuFRzX2d2gD/l5yjH4fYQEnzkj4fae5rJulF2sMXVrAsaTWttRFu4Osb+1jEDT71/ZveyhouTch2fINQL9hKefKjuYFfuznXWzXMTabyrvfyIV3M4vhXgAEAUMs7K0J9UJAAAAAASUVORK5CYII=);

        border: none;
        line-height: 19px;
        padding: 11px 0;

        border-radius: 2px;
        box-shadow: 0 2px 8px #c4c4c4 inset;
        text-align: left;
        font-size: 14px;
        font-family: inherit;
        color: #738289;
        font-weight: bold;
        outline: none;
        text-indent: 40px;
    }
  
</style>

