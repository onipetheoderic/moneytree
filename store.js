import React, { useState, createContext, useReducer } from "react";

// Create Context Object
const initialState = {
    networth: [],
    countryList: [],
    investment: []
};



export const CounterContext = createContext(initialState);

export const CounterContextProvider = props => {


  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
        
        case 'setNetworth':
            return {...state, networth: action.payload}

        case 'setCountryList':
            return {...state, countryList: action.payload}
        
        case 'setInvestmentOptions':
            return {...state, investment: action.payload}


        default:
            throw new Error();
        };
  },initialState)
  return (
    <CounterContext.Provider value={{ state, dispatch }} >
      {props.children}
    </CounterContext.Provider>
  );
};