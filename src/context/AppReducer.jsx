
export const AppReducer = (state, action) => {

  switch (action.type) {

    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
      }

    case 'ADD_TRANSACTION':
      return {
        ...state, //initialState
        transactions: [action.payload, ...state.transactions]
        // new object       // previous objects look below

      }

    default:
      return state;
  }
}


/*
const initialState = {
transactions: [
  { id: 1, text: 'Flower', amount: -20 },
   { id: 2, text: 'Salary', amount: 300 },
   { id: 3, text: 'Book', amount: -10 },
   { id: 4, text: 'Camera', amount: 150 }
]
} */

// const initialState = [
//   { id: 1, text: 'Flower', amount: -20 },
//   { id: 2, text: 'Salary', amount: 300 },
//   { id: 3, text: 'Book', amount: -10 },
//   { id: 4, text: 'Camera', amount: 150 }
// ];