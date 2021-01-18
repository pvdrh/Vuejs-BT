<template>
  <div class="container">
    <div class="Wrap">
      <div class="headerWrap">
        <div class="headerText">
          <h2 class="tdText">Todo App</h2>
        </div>
        <div class="addTaskWrap">
          <input type="text" @keydown.enter="onInput()"
                 placeholder="Nhập công việc và nhấn enter để thêm" v-model="value">
        </div>
      </div>

      <div class="bodyWrap">
        <div class="list">
          <TodoItem v-if="todos.length > 0" :todos="todos" @deleteTodo="delTask"/>
          <div v-else class="none">
            Chưa có task nào được thêm
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from "@/components/Unit3/Ex/TodoItem.vue";
export default {
  name: "Todo",
  components: {
    TodoItem
  },
  data() {
    return {
      todos: [],
    }
  },
  methods: {
    onInput() {
      let todo = {
        name: this.value,
        status: false
      }
      this.todos.push(todo);
      this.value = "";
    },
    delTask(data) {
      this.todos = this.todos.filter((todo, index) => {
        return index != data;
      })
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1380dd;
  margin: -57px;
  .Wrap {
    width: 600px;
    height: 650px;
    background-color: #ffffff;
    border-radius: 10px;
    margin: 60px;
    .headerWrap {
      margin-bottom: 30px;
      .headerText {
        .tdText {
          color: #67cf8c !important;
        }
      }
      .addTaskWrap {
        margin: 0 auto;
        width: 100%;
        input {
          width: 85%;
          font-size: 16px;
          padding: 12px;
          border: 1px solid #ddd;
          outline: none;
          border-radius: 5px;
        }
        input:focus{
          border: 1px solid #4e99e4;
        }
      }
    }
    .bodyWrap {
      height: 80%;
      .list {
        overflow-y: scroll;
        height: 95%;
        width: 95%;
        position: relative;
        .none{
          color: #ec577a;
          position: absolute;
          top:40%;
          left: 30%;
        }
      }
    }
  }
}
</style>
