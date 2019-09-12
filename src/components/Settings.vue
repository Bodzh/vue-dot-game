<template>
    <div class="settings d-flex flex-row justify-content-center">
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {{currentMode}}
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a  v-for="(value, property) in settings" @click="setMode(property, value)" class="dropdown-item" href="#">{{getSettingName(property)}}</a>
            </div>
        </div>
        <input class="form-control name-input" type="text" placeholder="Enter Name">
        <button @click="onStarted" type="button" class="btn btn-secondary">Start Game</button>
    </div>
</template>

<script>
    import StarNaviApiProviderClass from '../api/starNaviApiProvider';
    const StarNaviApiProvider = new StarNaviApiProviderClass();

    export default {
        name: 'settings',
        data: function () {
            return {
                settings: {},
                currentMode: 'Choose Mode'
            }
        },
        async beforeCreate () {
            this.settings = await StarNaviApiProvider.getGameSettings()
        },
        methods: {
            getSettingName (setting) {
                if (setting === 'easyMode') {
                    return 'Easy Mode';
                } else if (setting === 'normalMode') {
                    return 'Normal Mode';
                } else {
                    return 'Hard Mode';
                }
            },
            setMode (setting, value) {
                this.currentMode = this.getSettingName(setting);

                this.$emit('onSettingChanged', value)
            },
            onStarted () {
                this.$emit('onStarted');
            }
        }
    }
</script>

<style>
    .settings {

    }
    .name-input {
        max-width: 300px;
    }
</style>
