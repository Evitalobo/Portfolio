import { GAMES } from '../shared/games';
import { GAMEINFO } from '../shared/gameinfo';
import { DESIGNS } from '../shared/designs';
import { DESIGNINFO } from '../shared/designinfo';

export const initialState = {
    games: GAMES,
    gameinfo: GAMEINFO,
    designs: DESIGNS,
    designinfo: DESIGNINFO

};

export const Reducer = (state = initialState, action) => {
    return state;
}; 