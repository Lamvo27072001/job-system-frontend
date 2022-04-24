export const SET_COUNT = "SET_COUNT";

export const setCount = (count) => ({
    type: SET_COUNT,
    payload: count,
});

export const selectCount = (state) => state.count;
