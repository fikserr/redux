const initialState = {
    count:0,
    isShow:true
}
    

function counterSlice(state=initialState,action) {
    console.log(state.isShow);
    if (action.type == 'minus' && state.isShow == true) {
        return {...state,
            count: state.count <= 0 ? 0 : state.count - 1
        }
    }else if (action.type == '-10' && state.isShow == true) {
        return {...state,
            count: state.count <= 10  ? state.count : state.count - 10
        }
    }else if (action.type == 'plus' && state.isShow == true) {
       return {...state,
            count: state.count + 1
        }
    }else if (action.type == '+10' && state.isShow == true) {
        return {...state,
             count: state.count + 10
         }
     }else if (action.type == 'check') {
        return{...state,
            isShow: !state.isShow
        }
     }

    return state
}
    
    export default counterSlice