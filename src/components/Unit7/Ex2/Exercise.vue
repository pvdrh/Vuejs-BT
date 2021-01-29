<template>
    <div class="container">
        <ProductForm/>
        <ProductList/>
    </div>
</template>

<script>
  import ProductForm from './ProductForm'
  import ProductList from './ProductList'
  export default {
    name: 'Exercise',
    components: {
      ProductForm,
      ProductList
    }
  }
</script>

<style lang="scss" scoped>
    $colorDefault: #253036;
    .container {
        height: 100vh;
        padding: 24px;
        color: $colorDefault;
        display: flex;
        align-items: flex-start;
    }
</style>