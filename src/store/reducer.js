const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD':
            return {
                ...state,
                persons: state.persons.concat({id: Math.random(), name: action.name, age: action.age})
            }
        case 'DELETE':
            const updatedPersons = state.persons.filter(person => person.id !== action.personId);
            return {
                ...state,
                persons: updatedPersons
            }
        default:
            break;
    }
    return state;
}

export default reducer;