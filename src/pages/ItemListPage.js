import React from 'react';
import { Header } from '../components/Header';
import { ItemList } from '../components/ItemList';
import { Layout } from '../components/Layout';

export const ItemListPage = ({ location }) => {
  return (
    <Layout title='Listado de items' subtitle='Listado de items del proyecto'>
      <Header />
      <ItemList search={location.search.split('=')[1]} />
    </Layout>
  );
};
