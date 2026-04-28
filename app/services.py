from elasticsearch import Elasticsearch

es = Elasticsearch("http://localhost:9200")


def index_product(product):
    """index product
    """
    es.index(index="products", id=product.id, document={
        "title": product.title,
        "description": product.description,
        "price": product.price,
    })


def search_product(query):
    """ search product by query
    """
    return es.search(index="products",
                     query={
                         "multi_match": {
                             "query": query,
                             "fields": ["title", "description"]
                         }})


def index_book(book):
    """index book
    """
    es.index(index="books", id=book.id, document={
        "title": book.title,
        "author": book.author,
        "description": book.description,
        "year_published": book.year_published,
    })


def search_book(query):
    """search book by query
    """
    return es.search(index="books",
                     query={
                         "multi_match": {
                             "query": query,
                             "fields": ["title", "author", "description"]
                         }})
