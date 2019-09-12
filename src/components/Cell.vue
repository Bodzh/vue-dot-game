<template>
    <div class="cell" :class="getCellStyle">
    </div>
</template>

<script>
    export default {
        name: 'cell',
        props: [
            'owner'
        ],
        computed: {
            getCellStyle: function () {
                if (this.owner === 'user') {
                    return 'user'
                }

                return 'none'
            }
        }
    }
</script>

<style>
    .cell {
        height: 50px;
        width: 50px;
        border: 1px solid midnightblue;
    }
    .none {
        background-color: white;
    }
    .user {
        background-color: green;
    }
    .vacant {
        background-color: blue;
    }
    .comp {
        background-color: red;
    }
</style>