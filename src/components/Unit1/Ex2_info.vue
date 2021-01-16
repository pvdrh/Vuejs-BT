<template>
     <div class="infoWrap">
      <div class="infoLabel" >
        Họ tên: {{ userName }}
      </div>
      <div class="infoLabel">
        Ngày sinh: {{ birthday }}
      </div>
      <div class="infoLabel">
        Số điện thoại: {{ phone }}
      </div>
      <div class="infoLabel">
        Link Facebook: <a :href="facebook">{{ fb }}</a>
      </div>
    </div>
</template>

<script>
    export default{
       props: ['userName', 'birthday', 'phone', 'fb'],
  data() {
    return {
    }
  },
  methods: {
  }
}
    
</script>

<style lang="scss">
.infoWrap {
    line-height: 40px;
    background: #fff;
    border: 1px solid #6e6e6e;
    padding: 24px;
    height: 400px;
    width: 400px;
    margin-left: 24px;
    text-align: left;
    .infoLabel {
      font-weight: bold;
      color: #00aaaa;
    }
  }
</style>