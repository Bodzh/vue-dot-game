<template>
    <div class="board">
        <div class="cells-row d-flex flex-row" v-for="i of iterable">
            <div v-for="item of iterable">
                <cell></cell>
            </div>
        </div>
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
            iterable: function () {
                let iterable = [];

                for (let i = 0; i < this.settings.field; i++) {
                    iterable.push(i)
                }

                return iterable
            }
        }
    }
</script>

<style>
    .board {

    }
</style>
