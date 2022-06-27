const burgerState = {
    burger: { salad: 1, cheese: 1, beef: 1},
    menu: {
        salad: 10,
        cheese: 20,
        beef: 35
    },
    total: 65
}

export const GioHangBurgerReducer = (state = burgerState, action) => {
    switch(action.type) {
        case 'ADD_BREADMID': {
            if(action.amount === -1 && state.burger[action.propsBurger] < 1) {
                return {...state}
            }
            let burgerUpdate = {...state.burger};
            burgerUpdate[action.propsBurger] += action.amount;
            state.burger = burgerUpdate;
            state.total += action.amount * state.menu[action.propsBurger];
            return {...state}
        }; break;
        default: {
            return {...state}
        }
    }
}