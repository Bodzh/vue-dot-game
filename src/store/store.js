import Vuex from 'vuex';
import Vue from 'vue';
import {MutationTypes} from '@/store/mutationTypes';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        winners: []
    },
    mutations: {
        [MutationTypes.ADD_WINNER] (state, payload) {
            state.winners.push(payload);
        }
    },
    actions: {
        addWinner ({commit}, winner) {
            commit(MutationTypes.ADD_WINNER, winner);
        }
    }
});