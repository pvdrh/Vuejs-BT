<template>
<div class="login">
      <div class="input">
        <div class="inputLabel">Họ và tên</div>
        <input type="text" ref="name" v-model="userName"/>
      </div>
      <div class="input">
        <div class="inputLabel">Ngày sinh</div>
        <input type="text" ref="birthDay" v-model="birthday"/>
      </div>
      <div class="input">
        <div class="inputLabel">Số điện thoại</div>
        <input type="text" ref="phone" v-model="phone"/>
      </div>
      <div class="input">
        <div class="inputLabel">Link Facebook</div>
        <input type="text" ref="facebook" v-model="fb"/>
      </div>
      <div class="buttonWarp">
        <button class="saveButton" @click="handelClick()">Save</button>
        <button class="clearButton" @click="handelClick()">Clear</button>
      </div>
    </div>    
</template>

<script>

export default{
      name: 'Ex2_login',
      data(){
          return{
            userName: '',
            phone: '',
            birthday: '',
            fb: '',
          }
      },
      
    methods: {

          handelClick(){
              var data = [this.userName, this.phone,this.birthday,this.fb]
            this.$emit('Enter', data);
        },

    // save: function () {
    //   this.name       = this.$refs.name.value;
    //   this.birthday   = this.$refs.birthDay.value;
    //   this.phone      = this.$refs.phone.value;
    //   this.facebook   = this.$refs.facebook.value;
    // },
    // clear: function () {
    //   this.name       = this.$refs.name.value = null;
    //   this.birthday   = this.$refs.birthDay.value = null;
    //   this.phone      = this.$refs.phone.value = null;
    //   this.facebook   = this.$refs.facebook.value = null;
    // },
    },
  }
</script>

<style lang="scss" >
.login {
    background: #f5f5f5;
    border: 1px solid #6e6e6e;
    padding: 24px;
    width: 300px;
    height: 400px;
    .input {
      margin-bottom: 12px;
      .inputLabel {
        font-weight: bold;
        margin-bottom: 8px;
        text-align: left;
      }
      input {
        width: 292px;
        height: 30px;
      }
    }
    .buttonWarp {
      display: flex;
      button {
        width: 100%;
        height: 40px;
        border-radius: 5px;
        margin: 20px 10px;
        color: #fff;
        border: unset;
        font-weight: bold;
        font-size: 16px;
        cursor: pointer;
      }
      button.saveButton {
        background: #0080dd;
      }
      button.clearButton {
        background: #dd1a00;
      }
    }
  }
</style>