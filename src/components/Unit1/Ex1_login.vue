<template>
      <div class="login">
      <div class="input">
        <div class="inputLabel">Nhập tiêu đề</div>
        <input type="text" v-model="title"/>
      </div>
      <div class="input">
        <div class="inputLabel">Nhập nội dung</div>
        <textarea name="" id="" cols="30" rows="10" v-model="strHtml"></textarea>
      </div>
    </div>
</template>

<style>
 .login {
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