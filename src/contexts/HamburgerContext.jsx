import { createContext, useContext, useState } from "react";

const HamburgerContext = createContext();

const HamburgerProvider = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <HamburgerContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </HamburgerContext.Provider>
    )
};

const useHamburger = () => {

    const value = useContext(HamburgerContext);

    if (value === undefined) throw new Error("Non puoi settare l'hambuger menu");

    return value;
}

export { HamburgerProvider, useHamburger };