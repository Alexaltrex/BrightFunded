import {action, makeObservable, observable} from "mobx";

export class Store {
    burgerMenu: boolean = false
    scrollDown: boolean = true
    pageYOffset: number = 0
    burgerOpen1: boolean = false
    burgerOpen2: boolean = false
    joinModal: boolean = false

    constructor() {
        makeObservable(this, {
            burgerMenu: observable,
            scrollDown: observable,
            pageYOffset: observable,
            burgerOpen1: observable,
            burgerOpen2: observable,
            joinModal: observable,

            setBurgerMenu: action.bound,
            setScrollDown: action.bound,
            setPageYOffset: action.bound,
            setBurgerOpen1: action.bound,
            setBurgerOpen2: action.bound,
            setJoinModal: action.bound,
        })
    }

    setBurgerMenu(burgerMenu: boolean) {
        this.burgerMenu = burgerMenu
    }

    setScrollDown(scrollDown: boolean) {
        this.scrollDown = scrollDown;
    }

    setPageYOffset(pageYOffset: number) {
        this.pageYOffset = pageYOffset;
    }

    setBurgerOpen1(open: boolean) {
        this.burgerOpen1 = open
    }

    setBurgerOpen2(open: boolean) {
        this.burgerOpen2 = open;
    }

    setJoinModal(joinModal: boolean) {
        this.joinModal = joinModal;
    }
}
export const store = new Store()
