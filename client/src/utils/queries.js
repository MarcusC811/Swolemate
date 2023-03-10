import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      profile {
        first_name
        last_name
        bio
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      profile {
        first_name
        last_name
        bio
      }
    }
  }
`;