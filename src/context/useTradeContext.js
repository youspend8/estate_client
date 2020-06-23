import React, { createContext, useContext } from 'react';

export const TradeContext = createContext({});

const useTradeContext = () => {
  return useContext(TradeContext);
}

export default useTradeContext;