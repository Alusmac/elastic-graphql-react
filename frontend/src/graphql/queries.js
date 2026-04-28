import {gql} from "@apollo/client";


export const GET_PRODUCTS = gql`
    query GetProducts($search: String) {
        products(search: $search) {
            id
            title
            price
        }
    }
`;


export const GET_BOOKS = gql`
    query GetBooks($search: String) {
        books(search: $search) {
            id
            title
            author
            yearPublished
            description
        }
    }
`;