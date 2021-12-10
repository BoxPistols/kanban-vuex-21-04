<template>
    <div>
        <!-- Debug -->
        <p>{{$data}}</p>
        <form class="addlist" @submit.prevent="addList">
            <input v-model="title" type="text" class="text-input" placeholder="Add New..." />
        </form>
        <button type="submit" class="add-button">Add</button>
        <button type="submit" class="add-button" @click="test">Test</button>
    </div>
    <!--
        @submit.prevent="addList"
            サブミット時にaddListメソッドをバンドル / リロード防止
        @v-model="title"
            titleをバインド 実質 = <input :value="title" @input="title = $event.target.value">
    -->
</template>

<script>
export default {
    data() {
        return {
            title: ""
        }
    },
    methods: {
        addList() {
            this.$store.dispatch('addlist', {
                title: this.title
            })
            this.title = ""
        },
        test() {
            alert(this.title)
        },
    }
}
</script>
