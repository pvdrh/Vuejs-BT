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
     <router-view/>
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