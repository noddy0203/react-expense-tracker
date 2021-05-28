export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_TRANSACTIONS":
    return {
      ...state,
      loading:false,
      transactions:action.payload
    }
    case "delete":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        )
      }
    case "add":
      return {
        ...state,
        transactions: [...state.transactions , action.payload]
      };
      case "TRANSACTIONS_ERROR":
        return {
          ...state,
          error:action.payload
        }
    default:
      return state;
  }
};
