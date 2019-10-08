import StarNaviApiClass from './starNaviApi'
import {StarNaviApiConfig} from '../../config';

const StarNaviApi = new StarNaviApiClass(StarNaviApiConfig.url);

export default class StarNaviApiProvider {
    async getGameSettings () {
        let response;

        try {
           response = await StarNaviApi.getSettings();
        } catch (error) {
            console.error(error);
        }

        return response.data;
    }

    async getGameWinners () {
        let response;

        try {
            response = await StarNaviApi.getWinners();
        } catch (error) {
            console.error(error);
        }

        return response.data;
    }

    async postWinner (winner) {
        await StarNaviApi.postWinner(winner);
    }
}