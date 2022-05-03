import React, { createContext, Component } from 'react'

export const ThemeContext = createContext()


class ThemeContextProvider extends Component {
    state = {
        light: { bg: 'hsl(220, 98%, 61%)', txt: 'hsl(235, 19%, 35%)' },
        dark: { bg: 'hsl(220, 98%, 61%)', txt: 'hsl(234, 39%, 85%)' },
        isLightTheme: true
    }
    toggleTheme = () => {
        this.setState({ isLightTheme: !this.state.isLightTheme })
    }
    render() {
        return (
            <ThemeContext.Provider value={{ ...this.state, toggleTheme: this.toggleTheme }}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export default ThemeContextProvider