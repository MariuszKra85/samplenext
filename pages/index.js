import { gql, useQuery } from '@apollo/client';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const QUERY = gql`
  query Users {
    allProducts {
      id
    }
  }
`;

export default function Home() {
  const { data, loading, error } = useQuery(QUERY);

  if (loading) {
    return (
      <div className={styles.container}>
        <p>loading...</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {console.log(data)}
      <p>this is site</p>
    </div>
  );
}
