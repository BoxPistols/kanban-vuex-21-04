<template>
    <div class="">
        <form class="addcard" @submit.prevent="addCardToDoList">
            <input type="text" placeholder="Add new card" class="text-input" />
            <button type="submit" class="add-button">Add</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'CardAdd',
    props: ['listIndex'],
    data() {
        return {
            body: '',
        }
    },
    methods: {
        addCardToDoList() {
            this.$storestore.dispatch('addCardToDoList', { body: this.body, listIndex: this.listIndex })
            this.body = ''
        },
    },
}
</script>

<style lang="scss" scoped></style>
