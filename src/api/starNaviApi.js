import axios from 'axios'

export default class StarNaviApi {
    constructor(url) {
        this.url = url;

        this.actions = {
            getSettings: '/game-settings',
            winners: '/winners'
        }
    }

    async getSettings () {
        return axios.get(this.getUrl(this.actions.getSettings));
    }

    async getWinners () {
        return axios.get(this.getUrl(this.actions.winners));
    }

    async postWinner (data) {
        return axios.post(this.getUrl(this.actions.winners), data)
    }

    getUrl (action) {
        return this.url + action;
    }
}