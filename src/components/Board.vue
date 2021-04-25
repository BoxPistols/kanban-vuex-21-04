<template>
    <div>
        <header>THE KANBAN</header>
        <main>
            <p class="info-line">
                All: 0 tasks
            </p>
            <list-add />
        </main>
    </div>
</template>

<script>
import ListAdd from '@/components/ListAdd.vue'

export default {
    components: {
        ListAdd,
    },
}
</script>
