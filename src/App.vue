<template>
    <div id="app">
        <Board />
        <ListAdd />
    </div>
</template>

<script>
import Board from './components/Board.vue'
import ListAdd from './components/ListAdd.vue'

export default {
    name: 'app',
    components: {
        Board,
        ListAdd,
    },
}
</script>
