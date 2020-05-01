export const todoReducer = (state= [], action)  => {
       switch (action.type) {
           case 'ADD_TODO':
                return [...state, {
                    id: Math.random(),
                    completed: false,
                    content: action.payload
                }];
           case "TOGGLE_TODO":
               return state.map((todo) => {
                   if(todo.id === action.payload){
                       return {...state.slice(0, todo),
                        ...state.slice(todo + 1)}

                   }
                   return todo;
               })
           default:
               return state;
       }
};