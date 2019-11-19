export const initialState = {
    list:[
        {
            item: '',
            completed: false,
            id: Math.random()
        }
    ]
}

export function todoReducer(state, action) {
    switch(action.type) {
        case "ADD_TODO":
            return {
                list:[...state.list, action.payload]
            }
        case "TOGGLE_COMPLETE":
            return{
                list: state.list.map(item => {
                    if(item.id === action.payload){
                        return {...item, completed: !item.completed}
                    }else{
                        return item
                    }
                })
            }
        case "REMOVE_TODO":
            return{
                list: state.list.filter(item => !item.completed)
            }
        default: 
            return state
    }
}