<template>
  <el-container>
    <el-col :span="4">
      <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#021529"
          text-color="#fff"
          active-text-color="#ffd04b"
          style="height: 100vh">
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span>Tổng quan</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-s-shop"></i>
          <span>Quản lý sản phẩm</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span>Quản lý hóa đơn</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-s-data"></i>
          <span>Báo cáo thống kê</span>
        </el-menu-item>
        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>Quản lý chi nhánh</span>
          </template>
          <el-menu-item-group title="Hoạt động">
            <el-menu-item index="1-1">Sản phẩm</el-menu-item>
            <el-menu-item index="1-2">Đơn hàng</el-menu-item>
            <el-menu-item index="1-3">Khách hàng</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Báo cáo">
            <el-menu-item index="1-4">Doanh thu</el-menu-item>
            <el-menu-item index="1-5">Tồn kho</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="6">
          <i class="el-icon-setting"></i>
          <span>Cài đặt hệ thống</span>
        </el-menu-item>
      </el-menu>
    </el-col>

    <el-container style="height: 500px">
      <el-header style="text-align: right; font-size: 20px; background-color: #f2f6fe">
        <div style="float: left; font-weight: bold">
          <slot name="title">

          </slot>
        </div>
        <i class="el-icon-bell" style="margin-right: 15px"></i>
        <el-dropdown>
          <span><el-avatar src="data:image/jpeg;base64,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"></el-avatar></span>
          <el-dropdown-menu slot="dropdown" style="padding: 10px">
            <el-dropdown-item>Thông tin tài khoản</el-dropdown-item>
            <el-dropdown-item>Đổi mật khẩu</el-dropdown-item>
            <el-dropdown-item>Cấu hình</el-dropdown-item>
            <hr>
            <el-dropdown-item>Đăng xuất</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>

      <slot name="data"></slot>
    </el-container>
  </el-container>
</template>

<script>
export default {
};
</script>

<style>
  .el-menu-vertical-demo {
    text-align: left;
    
  }
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
    border-bottom: 1px solid #eee;
  }
  .el-main {
    height: 500px;
  }
</style>