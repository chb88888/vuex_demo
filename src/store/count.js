export default{
    namespaced:true,
    state: {
        num: 0,
        schoolName: 'zhang',
        schollAddress: '浮山',
    },
    actions: {
        qishu(context, value) {
            if (context.state.num % 2) {
                context.commit('JIA', value)
            }
        },
        wait(context, value) {
            setTimeout(() => {
                context.commit('JIA', value)
            }, 500)
        },
    },
    mutations: {
        JIA(state, value) {
            state.num += value
        },
        JIAN(state, value) {
            state.num -= value
        },
    },
    getters: {
        bigSum(state) {
            return state.num * 10
        }
    }
}