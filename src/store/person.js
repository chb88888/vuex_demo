export default {
    namespaced:true,
    state: {
        person: [{
            person: '张三',
            id: '001'
        }]
    },
    actions: {},
    mutations: {
        PERSONADD(state, value) {
            state.person.unshift(value)
        }
    },
    getters: {}
}