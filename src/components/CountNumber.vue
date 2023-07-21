<template>
  <div>
    <h1>求和：{{ num }}</h1>
    <h4>求和*10：{{ bigSum }}</h4>
    <div>我的学校在{{ schoolName }}</div>
    <div>地址在{{ schollAddress }}</div>
    <div>
      <select v-model.number="number">
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
      <button @click="addClick(number)">+</button>
      <button @click="jianClick(number)">-</button>
      <button @click="qiClick(number)">奇数才能加</button>
      <button @click="waitClick(number)">等待加</button>
    </div>
    <span style="color: red">添加总人数为：{{ person.length }}</span>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "CountNumber",
  data() {
    return {
      sum: 0,
      number: 1,
    };
  },
  computed: {
    ...mapState('cNumberOptions', {
      num: "num",
      schoolName: "schoolName",
      schollAddress: "schollAddress",
    }),
    ...mapState('pAddOptions', { person: "person" }),
    ...mapGetters('cNumberOptions', ["bigSum"]),
  },
  methods: {
    ...mapMutations('cNumberOptions', { addClick: "JIA", jianClick: "JIAN" }),
    ...mapActions('cNumberOptions', { qiClick: "qishu", waitClick: "wait" }),
  },
};
</script>

<style>
</style>