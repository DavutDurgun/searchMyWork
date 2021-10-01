const Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_ADD_FAVORITE_JOBS': {
            const { jobsFavoriteList } = action.payload;
            console.log(jobsFavoriteList)
            
            return { ...state, jobsFavoriteList };
        }

        default: { return state; }
    }
}

export default Reducer;