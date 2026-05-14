import DeleteIcon from '@mui/icons-material/Delete'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from '@mui/material'

function ProductCard({ product, deleting, onDelete, index }) {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(product.price)

  return (
    <Card
      className="product-card"
      style={{ '--appear-delay': `${index * 70}ms` }}
      variant="outlined"
    >
      <CardMedia
        component="img"
        height="190"
        image={product.image}
        alt={product.name}
        className="product-card__image"
      />
      <CardContent className="product-card__content">
        <Stack spacing={1.5}>
          <Typography component="h2" variant="h6">
            {product.name}
          </Typography>
          <Typography color="text.secondary" className="product-card__description">
            {product.description}
          </Typography>
          <Chip className="product-card__price" color="primary" label={formattedPrice} />
        </Stack>
      </CardContent>
      <CardActions className="product-card__actions">
        <Button
          color="error"
          disabled={deleting}
          fullWidth
          onClick={() => onDelete(product.id)}
          startIcon={<DeleteIcon />}
          variant="outlined"
        >
          {deleting ? 'Deleting' : 'Delete'}
        </Button>
      </CardActions>
    </Card>
  )
}

export default ProductCard
