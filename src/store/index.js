import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// getItem(一意のキー)
const saveLists = localStorage.getItem('kanban-lists')

const store = new Vuex.Store({
    state: {
        // Stateを算出する。定義した値は、Storeのstateとして参照できる。
        // リストのデータがあれば、それをローカルストレージから取得して、stateにセットする。
        // なければ、以下リストをstateにセットする。
        lists: saveLists ? JSON.parse(saveLists) : [
            {
                title: 'Backlog',
                cards: [{ body: 'English' },
                { body: 'Mathematics' }],
            },
            {
                title: 'Todo',
                cards: [
                    { body: 'Science' }
                ]
            },
            {
                title: 'Doing',
                cards: []
            }

        ],
    },
    actions: {
        // コンポーネントの操作。 API通信、サーバーからの値を取得する
        /* addList this.$store.dispatch('addlist', { title: this.title })
            (オブジェクト, mutationsに渡す引数) */
        addlist(context, payload) {
            context.commit('addlist', payload)
        },
    },
    mutations: {
        // Mutationを実行する。ストアの状態変更 *同期的な処理が必須で非同期処理は不要
        /*  actionsでコミットするaddListを定義する
            メソッドaddListはstateを更新する
            第1引数はstatを更新する。第２引数はpayloadを受け取る */
        addlist(state, payload) {
            state.lists.push({ title: payload.title, cards: [] })
        },
    },
    getters: {
        // 算出したStateを呼ぶ
    },
})

// localStorageでは文字列で保存するため、JSON.stringifyでオブジェクトを文字列に変換する
store.subscribe((mutation, state) => {
    localStorage.setItem('kanban-lists', JSON.stringify(state.lists))
})

//main.jsでstoreをimportして使用する
export default store
