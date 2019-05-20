// Created by szatpig at 2019/5/20.
import { observable,action } from 'mobx'

class TitleStore {
    @observable collapsed = false;
    @action toggle = () => {
        this.collapsed = !this.collapsed
    }
}

export default new TitleStore();
