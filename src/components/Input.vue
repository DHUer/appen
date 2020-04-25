<template>
    <div class="s01">
        <div class="container">
            <!-- <input v-model="msgTip" class="msg" />
            <input v-model="msg" class="tip" @keyup="search" @keydown.tab="fill" @keydown.tab.stop="onKeyup"/> -->
        </div>
      <form>
        <fieldset>
          <legend >Deploy AI with Training Data</legend>
        </fieldset>
        <div class="inner-form" >
          <div class="input-field first-wrap">
            <div class="container">
                
            <input  v-model="msgTip"  class="msg"/>
            
            <input  v-model="msg"  class="tips" @keyup="search" @keydown.tab="fill" @keydown.tab.stop="onKeyup"/>
            </div>

          </div>
          <div class="input-field third-wrap">
            <button class="btn-search" type="button" @click="addFre">submit</button>
          </div>
        </div>
      </form>
    </div>
</template>

<script>
import { search_word, addFrequency } from "../api/word-api";
export default {
  name: "auto-complete",
  data() {
    return {
      msg: "",
      isShow: true,
      msgTip: ""
    };
  },
  methods: {
    async search() {
        let tip =await search_word(this.msg);
        
        this.msgTip = this.msg + tip;
    },
    fill() {
        this.msg = this.msgTip;
        let arr = this.msg.split(" ");
        addFrequency(arr);
    },
    onKeyup(e) {
        // 阻止事件冒泡传播
        e.preventDefault();
    },
    addFre() {
        addFrequency(this.msg.split(" "));
    }
  }

};
</script>

<style scoped>
@import "../assets/main.css"
</style>

