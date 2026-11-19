import React, { useState } from 'react'
import DarkModeToggle from './components/DarkModeToggle'
import ProductList from './components/ProductList'
import Cart from './components/Cart'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [cart, setCart] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('All')

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <h1>Product Dashboard</h1>
      <DarkModeToggle darkMode={darkMode} onToggle={toggleDarkMode} />

      <label>Filter by Category: </label>
      <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList selectedCategory={selectedCategory} onAddToCart={addToCart} />
      <Cart cart={cart} />
    </div>
  )
}

export default App