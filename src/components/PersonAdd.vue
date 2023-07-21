<template>
  <div>
    <h1>添加人数:
        <input placeholder="添加人数" v-model="person"/>
        <button @click="addNum">添加</button>
    </h1>
    <ul v-for="item in personList" :key="item.id">
        <li>{{item.person}}</li>
    </ul>
    <span style="color:red">求和为:{{num}}</span>
  </div>
</template>

<script>

import {nanoid} from 'nanoid'
export default {
    name: 'PersonAdd',
    data() {
        return {
            person: ''
        }
    },
    computed: {
        personList() {
            return this.$store.state.pAddOptions.person
        },
        num() {
            return this.$store.state.cNumberOptions.num

        }
    },
    methods: {
        addNum() {
            let id = nanoid()
            let val = {person: this.person, id}
            this.$store.commit('pAddOptions/PERSONADD', val)
            this.person = ''
        }
    }
}
</script>

<style>

</style>