<template>
    <div class="infoWrap">
      <div><h2>{{title}}</h2></div>
      <div v-html="strHtml"></div>
    </div>
</template>

<style>
 .infoWrap {
    background: #fff;
    border: 1px solid #6e6e6e;
    border-radius: 5px;
    padding: 24px;
    height: 250px;
    width: 250px;
    margin-left: 24px;
  }
</style>