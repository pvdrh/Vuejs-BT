<template>
      <div class="product">
          <h1>Sản Phẩm</h1>
      <div class="input">
        <div class="inputLabel">Tên Sản Phẩm</div>
        <input type="text" v-model="title" placeholder="Nhập tên sản phẩm"/>
      </div>
      <div class="input">
        <div class="inputLabel">Đơn Giá</div>
        <input type="number" v-model="title" placeholder="Nhập đơn giá sản phẩm"/>
      </div>
       <div class="input">
        <div class="inputLabel">Số Lượng</div>
        <input type="number" v-model="title" placeholder="Nhập số lượng sản phẩm"/>
      </div>
    </div>
</template>

<script>
    export default {
  name: "ProductForm",
}
</script>

<style>
h1{
    color: blue;
}
 .product {
    background: #f5f5f5;
    border: 1px solid #6e6e6e;
    border-radius: 5px;
    padding: 24px;
    height: 250px;
    width: 300px;
    .input {
      margin-bottom: 12px;
      
      .inputLabel {
        font-weight: bold;
        margin-bottom: 8px;
        text-align: left;
      }
      textarea {
        width: 292px;
        resize: none;
      }
      input {
        width: 292px;
        height: 30px;
      }
    }
    button {
      width: 100%;
      height: 40px;
      border-radius: 5px;
      margin-top: 20px;
      background: #0080dd;
      color: #fff;
      border: unset;
      font-weight: bold;
      font-size: 16px;
      cursor: pointer;
    }
}
</style>