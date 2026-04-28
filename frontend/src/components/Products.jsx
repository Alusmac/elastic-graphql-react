import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../graphql/queries';

function Products() {
    const [search, setSearch] = useState("");


    const { data, loading, error } = useQuery(GET_PRODUCTS, {
        variables: { search },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div style={{ padding: '20px' }}>

            <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ marginBottom: '20px', padding: '8px', width: '300px' }}
            />

            {/* Список результатів */}
            <div>
                {data && data.products && data.products.length > 0 ? (
                    data.products.map((p, index) => (
                        <div key={index} style={{ borderBottom: '1px solid #ccc', margin: '10px 0' }}>
                            <h3>{p.title}</h3>
                            <p>Price: ${p.price}</p>
                        </div>
                    ))
                ) : (
                    <p>No products found.</p>
                )}
            </div>
        </div>
    );
}

export default Products;