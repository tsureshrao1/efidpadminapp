import React, { createContext, useContext, useReducer } from 'react';

// Initial state
const initialState = {
    userData: JSON.parse(sessionStorage.getItem("USER_DETAILS") || '{}'),
    appSettings: {
        theme: 'light',
        notifications: true
    }
};

// Create context
const AppContext = createContext();

// Reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return { ...state, userData: action.payload };
        case 'SET_APP_SETTINGS':
            return { ...state, appSettings: action.payload };
        default:
            return state;
    }
};

// Context provider
export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // Actions
    const setUserData = (userData) => {
        dispatch({ type: 'SET_USER_DATA', payload: userData });
    };

    const setAppSettings = (settings) => {
        dispatch({ type: 'SET_APP_SETTINGS', payload: settings });
    };

    return (
        <AppContext.Provider
            value={{
                state,
                setUserData,
                setAppSettings
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

// Custom hook to use the context
export const useAppContext = () => useContext(AppContext);
