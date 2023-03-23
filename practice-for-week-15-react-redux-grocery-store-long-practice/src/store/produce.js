// export const 


export default function produceReducer(state = {}, action) {
    const nextState = Object.assign({}, Object.freeze(state));

    switch (action.type) {
        default:
            return state;
    }
}