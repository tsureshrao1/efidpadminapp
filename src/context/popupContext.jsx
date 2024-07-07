import React, { createContext, useContext, useReducer, useState } from 'react';

// Initial state
const initialState = {
    displayPopup: false,
    setDisplayPopup: (displayPopup) => {},
    popupContent: {
        title: '',
        regReqType: '',
        getId: '',
        details: {}
    },
    setPopupContent: (popupContent) => {}
};

// Create context
const PopupContext = createContext(initialState);

// Context provider
export const PopupProvider = ({ children }) => {
    const [displayPopup, setDisplayPopup] = useState(initialState.displayPopup);
    const [popupContent, setPopupContent] =  useState(initialState.popupContent);
    return (
        <PopupContext.Provider
            value={{
                displayPopup,
                setDisplayPopup,
                popupContent,
                setPopupContent
            }}
        >
            {children}
        </PopupContext.Provider>
    );
};

// Custom hook to use the context
export const usePopupContext = () => useContext(PopupContext);
