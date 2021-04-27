<template>
    <div class="">
        <form class="addcard" @submit.prevent="addCardToList">
            <input type="text" placeholder="Add new card" class="text-input" v-model="body" />
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
        addCardToList: function () {
            this.$store.dispatch('addCardToList', { body: this.body, listIndex: this.listIndex })
            this.body = ''
        },
    },
}
</script>

<style lang="scss" scoped></style>
