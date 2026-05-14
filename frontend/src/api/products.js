import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:5000/api',
})

export async function getProducts() {
  const response = await apiClient.get('/products')
  return response.data
}

export async function deleteProduct(productId) {
  const response = await apiClient.delete(`/products/${productId}`)
  return response.data.products
}
