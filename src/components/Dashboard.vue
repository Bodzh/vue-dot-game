<template>
    <div class="dashboard d-flex flex-column justify-content-start">
        <div class="winner d-flex flex-row justify-content-between mt-1" v-for="winner of winners">
            <span> {{ winner.winner }}</span>
            <span> {{ winner.date }}</span>
        </div>
    </div>
</template>

<script>
    import StarNaviApiProviderClass from '../api/starNaviApiProvider';
    const StarNaviApiProvider = new StarNaviApiProviderClass();

    export default {
        name: 'dashboard',
        data: function () {
            return {
                winners: [],
            }
        },
        async beforeCreate () {
            this.winners = await StarNaviApiProvider.getGameWinners();
        }
    }
</script>

<style>
    .dashboard {

    }
    .winner {
        max-width: 330px;
        padding: 10px 20px;
        background-color: darkgray;
    }
</style>
