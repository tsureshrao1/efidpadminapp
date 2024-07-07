import React, { createContext, useContext, useReducer, useState } from 'react';

// Initial state
const initialState = {
    displayCanvas: false,
    setDisplayCanvas: (displayCanvas) => {},
    canvasContent: {
        title: '',
        type: '',
        data: '',
        id: ''
    },
    setCanvasContent: (canvasContent) => {}
};

// Create context
const SideCanvasContext = createContext(initialState);

// Context provider
export const CanvasProvider = ({ children }) => {
    const [displayCanvas, setDisplayCanvas] = useState(false);
    const [canvasContent, setCanvasContent] =  useState(false);
    return (
        <SideCanvasContext.Provider
            value={{
                displayCanvas,
                setDisplayCanvas,
                canvasContent,
                setCanvasContent
            }}
        >
            {children}
        </SideCanvasContext.Provider>
    );
};

// Custom hook to use the context
export const useCanvasContext = () => useContext(SideCanvasContext);
