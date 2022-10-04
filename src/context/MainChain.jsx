import React, { useEffect, useState } from "react";
import { Contracts, Tokens } from '../contracts/';

export const MainChain = React.createContext();
export const MainChainProvider = ({children}) => {
    
useEffect(async () => {

}, [])
   
return (
    <MainChain.Provider
    value={{
        
    }}>
       {children} 
    </MainChain.Provider>
)
}