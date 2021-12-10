kanban-vuex-21-04

---

# Note

## Docs

* See [Configuration Reference](https://cli.vuejs.org/config/)

## Store

1. Components
    - ActionをDispatchする（呼ぶ）
    - ↓
1. Actions
    - API通信、サーバーからの値を取得する
    - ↓
    - Mutationを実行する
1. Mutation
    - Stateを更新する
    - ↓
1. State
    - Stateを算出する
    - ↓
1. Getters
    - 算出したStateを呼ぶ
    - ↓
* Components

---

# Develop

## Now

* Board / Add Base

## 要件

* Button押下と同時にリストを作成する
* ListAdd.vueで定義したactionsを使いmutationsをにコミットする

### 設計

* Store設定
  + actions
    - 実行操作
  + mutations
    - actionsで実行する操作の定義化
  + lists、配列のベース作成

## 要件

* ストアのデータをlocalStorageに保存する

### 設計

*
