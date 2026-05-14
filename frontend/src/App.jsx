import { Box, Container, CssBaseline, ThemeProvider, Typography, createTheme } from '@mui/material'
import ProductList from './components/ProductList'
import './App.css'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2563eb',
    },
    error: {
      main: '#dc2626',
    },
    background: {
      default: '#f6f7f9',
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: ['Inter', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'].join(','),
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box component="main" className="app-shell">
        <Container maxWidth="lg">
          <Box className="app-header">
            <Typography component="h1" variant="h3">
              Product Cards
            </Typography>
            <Typography color="text.secondary" className="app-subtitle">
              Browse products from the backend API and remove cards from the current list.
            </Typography>
          </Box>
          <ProductList />
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default App
