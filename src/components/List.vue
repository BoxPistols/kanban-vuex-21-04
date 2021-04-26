<template>
    <div class="list">
        <div class="list-no">
            {{ this.listIndex + 1 }}
        </div>
        <div class="listheader">
            <p class="list-title">{{ title }}</p>
            <div class="deletelist" @click="removeList">×</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        listIndex: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {}
    },
    methods: {
        removeList() {
            if (confirm('削除しますか？')) {
                this.$store.dispatch('removelist', { listIndex: this.listIndex })
            }
        },
    },
}
</script>
