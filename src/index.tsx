import { render } from 'react-dom'
import { App } from 'app/App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import './shared/config/i18n/i18n'
import { ErrorBoundary } from 'app/providers/ErrorBoundaries'
import './app/styles/index.scss'
import { StoreProvider } from 'app/providers/StoreProvider'

render(
    <StoreProvider>
        <BrowserRouter>
            <ThemeProvider>
                <ErrorBoundary>
                    <App/>
                </ErrorBoundary>
            </ThemeProvider>
        </BrowserRouter>
    </StoreProvider>,
    document.getElementById('root'))
