<template>
    <div class="board">
        <cell></cell>
    </div>
</template>

<script>
import Cell from './Cell'
    export default {
        name: 'board',
        props: [
            'settings'
        ],
        components: {
            'cell': Cell
        },
        computed: {
            boardLength: function () {
                return this.settings.field*this.settings.field;
            }
        }
    }
</script>

<style>
    .board {

    }
</style>
