import { createContext } from "react";

export const counterContext = createContext(0)

// The createContext function is used to create a context object. In this case, we are creating a context called counterContext with an initial value of 0. This context can be used to share the count state across different components in the application without having to pass props down manually through each level of the component tree.
// Is counterContext ko apne App component me use krenge.