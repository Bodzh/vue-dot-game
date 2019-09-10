import StarNaviApiClass from './starNaviApi'
import {StarNaviApiConfig} from '../../config';

const StarNaviApi = new StarNaviApiClass(StarNaviApiConfig.url);

export default class StarNaviApiProvider {
    async getGameSettings () {
        let response = await StarNaviApi.getSettings();

        if (response.ok) {
            return response.json();
        }

        return null;
    }

    async getGameWinners () {
        let response = await StarNaviApi.getWinners();

        if (response.ok) {
           return response.json();
        }

        return null;
    }
}