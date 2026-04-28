import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_BOOKS } from '../graphql/queries';

function Books() {
    const [search, setSearch] = useState("");


    const { data, loading, error } = useQuery(GET_BOOKS, {
        variables: { search },
    });

    if (loading) return <p style={{ textAlign: 'center' }}>Завантаження книг...</p>;
    if (error) return <p style={{ color: 'red' }}>Помилка: {error.message}</p>;

    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <h2>📚 Пошук Книг</h2>

            {/* Поле пошуку */}
            <input
                type="text"
                placeholder="Шукати за назвою або автором..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                    width: '100%',
                    padding: '12px',
                    fontSize: '16px',
                    marginBottom: '20px',
                    borderRadius: '8px',
                    border: '1px solid #ddd'
                }}
            />


            <div style={{ display: 'grid', gap: '15px' }}>
                {data && data.books && data.books.length > 0 ? (
                    data.books.map((book) => (
                        <div key={book.id} style={{
                            padding: '15px',
                            border: '1px solid #eee',
                            borderRadius: '10px',
                            backgroundColor: '#f9f9f9',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                        }}>
                            <h3 style={{ margin: '0 0 5px 0', color: '#2c3e50' }}>{book.title}</h3>
                            <p style={{ margin: '0', fontWeight: 'bold', color: '#e67e22' }}>
                                Автор: {book.author}
                            </p>
                            <p style={{ fontSize: '0.9em', color: '#7f8c8d' }}>
                                Рік видання: {book.yearPublished}
                            </p>
                            <p style={{ marginTop: '10px', fontStyle: 'italic' }}>
                                {book.description}
                            </p>
                        </div>
                    ))
                ) : (
                    <p style={{ textAlign: 'center', color: '#999' }}>Книг не знайдено.</p>
                )}
            </div>
        </div>
    );
}

export default Books;