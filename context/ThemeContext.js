"use client"

import { createContext, useState } from "react"

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    const [mode, setMode] = useState("business")

    const toggle = () => {
        setMode((prev) => (prev === "business" ? "cupcake" : "business"))
    }

    return (
        <ThemeContext.Provider value={{toggle}}>
            <html lang="en" data-theme={mode}>
                {children}
            </html>
        </ThemeContext.Provider>
    )
} 