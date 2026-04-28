import React, { useState } from 'react';
import './App.css';
import Products from './components/Products';
import Books from './components/Book';

function App() {

  const [activeTab, setActiveTab] = useState('products');

  return (
    <div className="App">
      <header className="App-header" style={{ minHeight: 'auto', padding: '20px' }}>
        <h1>Elastic Search + GraphQL</h1>

        <nav className="navigation">
          <button
            className={activeTab === 'products' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => setActiveTab('products')}
          >
            📦 Товари
          </button>
          <button
            className={activeTab === 'books' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => setActiveTab('books')}
          >
            📚 Книги
          </button>
        </nav>
      </header>

      <main className="content-area">
        {activeTab === 'products' ? (
          <section>
            <h2 className="section-title">Каталог товарів</h2>
            <Products />
          </section>
        ) : (
          <section>
            <h2 className="section-title">Бібліотека книг</h2>
            <Books />
          </section>
        )}
      </main>
    </div>
  );
}

export default App;