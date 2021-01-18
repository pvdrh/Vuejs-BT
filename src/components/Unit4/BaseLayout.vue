<template>
 <div class="container">
  <header>
    <h1>alo</h1>
<slot name="alo"></slot>
  </header>
  <main>
    <h1>aloo</h1>
    <slot></slot>
  </main>
  <footer>
    <h1>alooo</h1>
  </footer>
</div>
</template>

<script>
import Lession4 from './Lession4.vue'  

    export default{
        name: "BaseLayout",
        component:{
            Lession4,
        }
    }
</script>

<style>

</style>