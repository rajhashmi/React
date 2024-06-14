import React from "react";

const rectContext = React.createContext();

const ContextProvider = rectContext.Provider;
const ContextConsumer = rectContext.Consumer;

export {
    ContextProvider,
    ContextConsumer
}