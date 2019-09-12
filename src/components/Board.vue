<template>
    <div :style="getGridStyle" class="board">
        <div @click="expandCell(index, 'user')" v-for="(item, index) in getGrid">
            <cell :owner="item.owner"></cell>
        </div>
    </div>
</template>

<script>
import Cell from './Cell'
import {CellOwner} from '@/constants';

export default {
        name: 'board',
        props: [
            'settings'
        ],
        components: {
            'cell': Cell
        },
        data () {
          return {
              grid: []
          }
        },
        methods: {
          expandCell (index, owner) {
              this.grid[index].owner = owner;
          }
        },
        computed: {
            getGrid: function () {
                let iterable = [];

                for (let i = 0; i < this.settings.field * this.settings.field; i++) {
                    iterable.push({
                        owner: CellOwner.none,
                    })
                }

                this.grid = iterable;

                return this.grid;
            },
            getGridStyle: function () {
                return {
                    gridTemplateColumns: `repeat(${this.settings.field}, 1fr)`
                }
            }
        }
    }
</script>

<style>
    .board {
        display: grid;
    }
</style>
