<template>
  <base-layout>
    <template v-slot:banner>
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in banners" :key="item">
          <img :src="item" alt="">
        </el-carousel-item>
      </el-carousel>
    </template>
    <template v-slot:ad1>
      <img src="https://vtv1.mediacdn.vn/2018/11/22/photo-3-15428716111551636354706.jpg" alt="">
    </template>
    <template v-slot:main>
      <div class="main">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>Trang chủ</el-breadcrumb-item>
          <el-breadcrumb-item>Công nghệ</el-breadcrumb-item>
          <el-breadcrumb-item>Trên tay Samsung Galaxy Buds Pro: đẹp và nhiều công nghệ</el-breadcrumb-item>
        </el-breadcrumb>
        <img class="main-img" src="https://cdn57.androidauthority.net/wp-content/uploads/2020/08/Samsung-Galaxy-Buds-Live-noise-cancelling-true-wireless-earbuds-10.jpg" alt="">
        <div class="description">
          Tai nghe True Wireless Samsung Galaxy Buds Pro là dòng sản phẩm tai nghe không dây thế hệ mới nhất từ Samsung.
          Với phiên bản lần này được lột xác hoàn toàn về thiết kế cũng như chất âm xứng đáng là lựa chọn hàng đầu cho
          người dùng đang mong muốn tìm cho mình một chiếc tai nghe không dây cao cấp để đồng hành cùng mình trong công việc và giải trí.
        </div>
      </div>
    </template>
    <template v-slot:ad2>
      <img src="https://vtv1.mediacdn.vn/2018/11/22/photo-3-15428716111551636354706.jpg" alt="">
    </template>
  </base-layout>
</template>

<script>
  import BaseLayout from './BaseLayout.vue'  
  export default {
    components: {
      BaseLayout
    },
    data() {
      return {
        banners: [
            'https://minhduongads.com/wp-content/uploads/2019/03/truyen-thong-minh-duong.jpg',
            'https://minhduongads.com/wp-content/uploads/2019/03/truyen-thong-minh-duong.jpg',
            'https://minhduongads.com/wp-content/uploads/2019/03/truyen-thong-minh-duong.jpg'
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  img {
    width: 100%;
  }
  .main {
    padding: 15px;
    .main-img {
      border-radius: 15px;
      margin: 22px 0;
    }
    .description {
      font-size: 14px;
      text-align: justify;
    }
  }
</style>