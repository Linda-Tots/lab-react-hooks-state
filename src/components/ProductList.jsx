import React from 'react'
import ProductCard from './ProductCard'

export const sampleProducts = [
  { id: 1, name: 'Apple', price: 1.00, category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: 2.50, category: 'Dairy', inStock: true },
]

const ProductList = ({ selectedCategory, onAddToCart }) => {
  const filteredProducts = sampleProducts.filter((product) => {
    if (selectedCategory === 'All') {
      return true
    }
    return product.category === selectedCategory
  })

  if (filteredProducts.length === 0) {
    return <p>No products available</p>
  }

  return (
    <div>
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  )
}

export default ProductList