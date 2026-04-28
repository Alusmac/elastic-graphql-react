import graphene
from graphene_django import DjangoObjectType
from .models import Product, Book
from .services import search_product, search_book


class ProductType(DjangoObjectType):
    """GraphQL type representation of the Product model.
    Maps Django Product model fields to GraphQL fields.
    """

    class Meta:
        model = Product


class BookType(DjangoObjectType):
    """GraphQL type representation of the Book model.
    Maps Django Book model fields to GraphQL fields.
    """

    class Meta:
        model = Book


class Query(graphene.ObjectType):
    """The main Query class that defines all entry points for GraphQL data fetching
    """

    products = graphene.List(ProductType, search=graphene.String())
    books = graphene.List(BookType, search=graphene.String())

    def resolve_products(self, info, search=None):
        """Resolver for the 'products' field
        """
        if search:
            results = search_product(search)
            ids = [hit['_id'] for hit in results['hits']['hits']]
            return Product.objects.filter(id__in=ids)
        return Product.objects.all()

    def resolve_books(self, info, search=None):
        """Resolver for the 'books' field
        """
        if search:
            results = search_book(search)
            ids = [hit['_id'] for hit in results['hits']['hits']]
            return Book.objects.filter(id__in=ids)
        return Book.objects.all()


schema = graphene.Schema(query=Query)

schema = graphene.Schema(query=Query)
