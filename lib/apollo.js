import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([
    createUploadLink({
      uri: 'https://dolphin-app-niqzf.ondigitalocean.app/api/graphql',
      fetchOptions: {
        credentials: 'include',
      },
    }),
    headers,
  ]),
});

export default client;