<template>
    <div class="dashboard d-flex flex-column justify-content-start">
        <div class="winner d-flex flex-row justify-content-between mt-1" v-for="winner of getWinners">
            <span> {{ winner.winner }}</span>
            <span> {{ winner.date }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'dashboard',
        data: function () {
            return {
                winners: [],
            }
        },
        computed: {
            getWinners: function () {
                return this.$store.state.winners
            }
        }
    }
</script>

<style>
    .dashboard {
        max-height: 600px;
        overflow: scroll;
        overflow-x: auto;
    }
    .winner {
        max-width: 330px;
        padding: 10px 20px;
        background-color: darkgray;
    }
</style>
