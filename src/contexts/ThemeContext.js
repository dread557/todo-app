import React, { createContext, Component } from 'react'

export const ThemeContext = createContext()


class ThemeContextProvider extends Component {
    state = {
        light: { bg: '#fff', bdBg: '#fff', txt: 'hsl(235, 19%, 35%)', bxSdw: "box-shadow: 1px 2px 12px 3px #ccc" },
        dark: { bg: 'hsl(233, 14%, 35%)', bdBg: 'hsl(237, 14%, 26%)', txt: '#fff', bxSdw: "box-shadow: 1px 2px 12px 3px red" },
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