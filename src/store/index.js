import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// LocalStorages 取得表示（キー）
const savedLists = localStorage.getItem('vue-kanban-lists')

// storeのインスタンス生成
const store = new Vuex.Store({
    // 状態
    // LocalStoragesにデータがあればそれを、無ければデフォルトを、JSON形式で配列設置
    state: {
        // 元の設定 -> lists: [] <- 空配列
        lists: savedLists
            ? JSON.parse(savedLists)
            : [
                  {
                      title: 'Backlog',
                      cards: [{ body: 'English' }, { body: 'Mathematics' }],
                  },
                  {
                      title: 'Todo',
                      cards: [{ body: 'Science' }],
                  },
                  {
                      title: 'Doing',
                      cards: [],
                  },
              ],
    },
    // mutationsでstate(lists)の更新
    mutations: {
        // Name(状態、引数)
        addlist(state, payload) {
            // リストの追加
            state.lists.push({
                title: payload.title,
                cards: [],
            })
        },
        removelist(state, payload) {
            state.lists.splice(payload.listIndex, 1)
        },
    },
    // mutationsの実行
    actions: {
        addlist(context, payload) {
            context.commit('addlist', payload)
        },
        removelist(context, payload) {
            context.commit('removelist', payload)
        },
    },

    getters: {},
})

// データの状態を更新後、localStorageへデータの状態を保存
store.subscribe((mutation, state) => {
    localStorage.setItem('vue-kanban-lists', JSON.stringify(state.lists))
})

// main.jsで読み込む
export default store
