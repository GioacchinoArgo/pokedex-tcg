import { createContext, useContext, useState } from "react";

const LoaderContext = createContext();

const LoaderProvider = ({ children }) => {

    const [loader, setLoader] = useState(true);

    return (
        <LoaderContext.Provider value={{ loader, setLoader }}>
            {children}
        </LoaderContext.Provider>
    )
}

const useLoader = () => {
    const value = useContext(LoaderContext);

    if (value === undefined) throw new Error('Non puoi settare il loader');

    return value;
}

export { LoaderProvider, useLoader }