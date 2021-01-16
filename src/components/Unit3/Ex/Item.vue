<template>
 <div>
   <div class="tdDetail" v-for="(todo,index) in todos" :key="index">
     <div class="tdCheck">
       <input type="checkbox" @click="todo.status = !todo.status" :checked="todo.status">
     </div>
     <div class="tdText" :class="{success : todo.status}">
       {{todo.name}}
     </div>
     <div class="del" v-if="todo.status">
       <input type="button" value="Xóa" @click="deleteTodo(index)">
     </div>
   </div>
 </div>
</template>

<script>
export default {
  props:['todos'],
  name: "Item",
  methods:{
    deleteTodo(index){
      this.$emit('deleteTodo',index);
    }
  }
}
</script>

<style scoped lang="scss">
.tdDetail {
  display: flex;
  width: 95%;
  margin-left: 30px;
  height: 80px;
  line-height: 80px;
  border-bottom: 1px solid white;
  .tdCheck {
    margin: 0 15px;
  }
  .tdText {
    width: 70%;
    text-align: left;
  }
  .success{
    text-decoration-line: line-through;
  }
  .del {
    width: 10%;
    input {
      width: 100%;
      height: 35px;
      border-radius: 1px;
      color: #fff;
      border: unset;
      font-weight: bold;
      font-size: 14px;
      cursor: pointer;
      background-color: red;
    }
  }
}
</style>