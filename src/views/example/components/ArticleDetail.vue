<template>
  <div>
  <div class="bar">
    <input type="text"  placeholder="输入搜索内容" />
  </div>
  <el-table v-loading="listLoading" :data="list" element-loading-text="Loading" border fit highlight-current-row>
      <el-table-column align="center" label="域名" width="295" fixed="left">
  
        <template slot-scope="scope">
          {{ scope.row.domain }}
        </template>
      </el-table-column>
      <el-table-column label="网站三天更新文章情况" align="center">
      <el-table-column label="今天" width="90" align="center"><template slot-scope="scope">{{ scope.row.today }}</template></el-table-column>
      <el-table-column label="昨天" width="90" align="center"><template slot-scope="scope"> {{ scope.row.yesterday }}</template></el-table-column>
      <el-table-column label="前天" width="90" align="center"> <template slot-scope="scope"> {{ scope.row.day_before_yesterday }}</template></el-table-column>
      </el-table-column>
      <el-table-column label="收录情况" width="510" align="center">
      
        <el-table-column label="星期一" width="90" align="center"><template slot-scope="scope">{{ scope.row.site_monday  }}</template></el-table-column>
        <el-table-column label="星期二" width="90" align="center"><template slot-scope="scope">{{ scope.row.site_tuesday  }}</template></el-table-column>
        <el-table-column label="星期三" width="90" align="center"><template slot-scope="scope">{{ scope.row.site_wednesday  }}</template></el-table-column>
        <el-table-column label="星期四" width="90" align="center"><template slot-scope="scope">{{ scope.row.site_thursday  }}</template></el-table-column>
        <el-table-column label="星期五" width="90" align="center"><template slot-scope="scope">{{ scope.row.site_friday  }}</template></el-table-column>
        <el-table-column label="星期六" width="90" align="center"><template slot-scope="scope">{{ scope.row.site_saturday  }}</template></el-table-column>
        <el-table-column label="星期日" width="90" align="center"><template slot-scope="scope">{{ scope.row.site_sunday  }}</template></el-table-column>
      
      </el-table-column>
      <el-table-column label="谷歌蜘蛛统计" width="510" align="center"> 
        
        <el-table-column label="星期一" width="90" align="center"><template slot-scope="scope">{{ scope.row.spider_monday  }}</template></el-table-column>
        <el-table-column label="星期二" width="90" align="center"><template slot-scope="scope">{{ scope.row.spider_tuesday  }}</template></el-table-column>
        <el-table-column label="星期三" width="90" align="center"><template slot-scope="scope">{{ scope.row.spider_wednesday  }}</template></el-table-column>
        <el-table-column label="星期四" width="90" align="center"><template slot-scope="scope">{{ scope.row.spider_friday  }}</template></el-table-column>
        <el-table-column label="星期五" width="90" align="center"><template slot-scope="scope">{{ scope.row.spider_saturday }}</template></el-table-column>
        <el-table-column label="星期六" width="90" align="center"><template slot-scope="scope">{{ scope.row.spider_saturday  }}</template></el-table-column>
        <el-table-column label="星期日" width="90" align="center"><template slot-scope="scope">{{ scope.row.spider_sunday }}</template></el-table-column>
   
      </el-table-column>
      <el-table-column label="网站信息" width="510" align="center">
        <el-table-column label="网站分类" width="90" align="center"><template slot-scope="scope">{{ scope.row.website_type }}</template></el-table-column>
        <el-table-column label="上站时间" width="90" align="cbuduienter"><template slot-scope="scope">{{ scope.row.deploy_at }}</template></el-table-column>
        <el-table-column label="负责人" width="90" align="center">  <template slot-scope="scope">{{ scope.row.owner  }}</template></el-table-column>
        <el-table-column label="后台账号" width="90" align="center"><template slot-scope="scope">{{ scope.row.admin_account  }}</template></el-table-column>
        <el-table-column label="后台密码" width="90" align="center"><template slot-scope="scope">{{ scope.row.admin_password  }}</template></el-table-column>

      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />
</div>
</template>

<script>
import { fetchCreate } from '@/api/article';
import Pagination from '@/components/Pagination'; 

export default {
  components: { Pagination },
  data() {
    return {
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10
      },
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
    this.listLoading = true;
    fetchCreate({
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
}}
}
</script>



<style lang="scss" scoped>
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
