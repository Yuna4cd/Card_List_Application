import { useEffect, useState } from 'react'
import RefreshIcon from '@mui/icons-material/Refresh'
import { Alert, Box, Button, CircularProgress, Stack, Typography } from '@mui/material'
import { deleteProduct, getProducts } from '../api/products'
import ProductCard from './ProductCard'

function ProductList() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [deletingId, setDeletingId] = useState(null)

  async function loadProducts() {
    setLoading(true)
    setError('')

    try {
      const productList = await getProducts()
      setProducts(productList)
    } catch {
      setError('Unable to load products. Make sure the backend server is running.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    let active = true

    async function fetchInitialProducts() {
      try {
        const productList = await getProducts()

        if (active) {
          setProducts(productList)
        }
      } catch {
        if (active) {
          setError('Unable to load products. Make sure the backend server is running.')
        }
      } finally {
        if (active) {
          setLoading(false)
        }
      }
    }

    fetchInitialProducts()

    return () => {
      active = false
    }
  }, [])

  async function handleDelete(productId) {
    setDeletingId(productId)
    setError('')

    try {
      const updatedProducts = await deleteProduct(productId)
      setProducts(updatedProducts)
    } catch {
      setError('Unable to delete this product. Refresh the list and try again.')
    } finally {
      setDeletingId(null)
    }
  }

  if (loading) {
    return (
      <Box className="status-panel">
        <CircularProgress aria-label="Loading products" />
      </Box>
    )
  }

  return (
    <Stack spacing={3}>
      <Box className="list-toolbar">
        <Typography component="p" color="text.secondary">
          {products.length} {products.length === 1 ? 'product' : 'products'}
        </Typography>
        <Button onClick={loadProducts} startIcon={<RefreshIcon />} variant="outlined">
          Refresh
        </Button>
      </Box>

      {error ? <Alert severity="error">{error}</Alert> : null}

      {products.length > 0 ? (
        <Box className="product-grid">
          {products.map((product) => (
            <ProductCard
              deleting={deletingId === product.id}
              key={product.id}
              onDelete={handleDelete}
              product={product}
            />
          ))}
        </Box>
      ) : (
        <Box className="status-panel status-panel--empty">
          <Typography component="h2" variant="h5">
            No products available
          </Typography>
          <Typography color="text.secondary">
            Refresh the list to load products from the backend again.
          </Typography>
        </Box>
      )}
    </Stack>
  )
}

export default ProductList
