<template>
    <base-layout>
  <template v-slot:header>
    <h1>Here might be a page title</h1>
    
  </template>
 
<Lession4 #alo />
  <el-button type="primary" icon="el-icon-edit"></el-button>
<el-button type="primary" icon="el-icon-share"></el-button>
<el-button type="primary" icon="el-icon-delete"></el-button>
<el-button type="primary" icon="el-icon-search">Search</el-button>
<el-button type="primary">Upload<i class="el-icon-upload el-icon-right"></i></el-button>

  <template v-slot:footer>
    <p>Here's some contact info</p>
  </template>
</base-layout>
</template>

<script>
    import BaseLayout from './BaseLayout.vue'  
    import Lession4 from './Lession4.vue'  

    export default{
        components: {
        BaseLayout,
        Lession4
  }
}
</script>

<style>

</style>