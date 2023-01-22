import { ThemeProvider } from "styled-components"
import { TransactionsProvider } from "./contexts/TransactionsContext"
import { Home } from "./pages"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"


function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <TransactionsProvider>
        <Home />
      </TransactionsProvider>
    </ThemeProvider>
  )
}

export default App
