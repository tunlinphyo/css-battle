import { Battle, BATTLE_LIST, BATTLES, List } from "./data";

export class Battles {
    private _battles: Battle[] = BATTLES;
    private _list: List[] = BATTLE_LIST;

    constructor() {}

    list() {
        return this._list;
    }

    battles(id: number) {
        const item = this._list.find(item => item.id === id);
        if (!item) return null
        return {
            ...item,
            items: item.itemIds.map(id => this.battle(id))
        }
    }

    battle(id: number) {
        return this._battles.find(item => item.id === id);
    }
}