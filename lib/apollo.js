import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import withApollo from 'next-with-apollo';

function createClient({ headers, initialState }) {
  return new ApolloClient({
    link: ApolloLink.from([
      // this uses apollo-link-http under the hood, so all the options here come from that package
      createUploadLink({
        uri: 'https://dolphin-app-niqzf.ondigitalocean.app/api/graphql',
        fetchOptions: {
          credentials: 'include',
        },
        // pass the headers along from this request. This enables SSR with logged in state
        headers,
      }),
    ]),
    cache: new InMemoryCache().restore(initialState || {}),
  });
}

export default withApollo(createClient);
