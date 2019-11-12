import React,{ useState, createContext } from 'react';

export const PaginationContext = createContext();

export const PaginationProvider = (props) => {

  const [ nextPage, setNextPage ] = useState(1);

  return (
    <PaginationContext.Provider value={[ nextPage, setNextPage ]}>
      {props.children}
    </PaginationContext.Provider>
  );
}