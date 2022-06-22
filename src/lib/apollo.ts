import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4oymnq11epy01z4diw23jwg/master",
  cache: new InMemoryCache(),
})
