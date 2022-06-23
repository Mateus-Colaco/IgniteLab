import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4qzm3nx0ecy01z62w1k8oe4/master',
  cache: new InMemoryCache()
})