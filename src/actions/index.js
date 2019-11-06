export const ADD_MOVIE = 'ADD_MOVIE'; //action type
export const BUY_ITEM = 'BUY_ITEM'; //action type
export const REMOVE_FEATURE = 'REMOVE_FEATURE'; //action type






export const addMovie = (movieName) => { //action creator
    // console.log(movieName);
    return{ //action
        type: ADD_MOVIE,
        payload: movieName
    }
};



export const buyItem = item => {
// dispatch an action here to add an item
    // console.log(item);
    return{ //action
        type: BUY_ITEM,
        payload: item
    }
};

export const removeFeature = item => {
    // console.log(item);
    return{ //action
        type: REMOVE_FEATURE,
        payload: item
    }
};