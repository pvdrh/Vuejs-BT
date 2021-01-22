<template>
  <base-layout>
    <template v-slot:main>
      <div class="main">
        <div class="description">
          Test
        </div>
      </div>
    </template>
  </base-layout>
</template>

<script>
  import BaseLayout from '../components/Unit4/Ex2/BaseLayout.vue'  
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