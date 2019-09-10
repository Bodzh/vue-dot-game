export default class StarNaviApi {
    constructor(url) {
        this.url = url;

        this.actions = {
            getSettings: '/game-settings',
            winners: '/winners'
        }
    }

    async getSettings () {
        return fetch(this.getUrl(this.actions.getSettings, this.getSettingsForGET()));
    }

    async getWinners () {
        return fetch(this.getUrl(this.actions.winners, this.getSettingsForGET()));
    }

    getUrl (action) {
        return this.url + action;
    }

    getSettingsForGET () {
        return {
            method: 'GET'
        }
    }
}