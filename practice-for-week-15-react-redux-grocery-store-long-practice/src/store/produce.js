import produceData from "../mockData/produce.json"
const POPULATE = 'produce/POPULATE'

export const populateProduce = produceData => {
    return {
        type: POPULATE,
        produce: produceData
    }
}

export default function produceReducer(state = {}, action) {
    const nextState = Object.assign({}, Object.freeze(state));

    switch (action.type) {
        case POPULATE:
            nextState[action.p]
        default:
            return state;
    }
}