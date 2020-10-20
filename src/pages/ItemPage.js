import React from 'react';
import { Header } from '../components/Header';
import { Item } from '../components/Item';
import { Layout } from '../components/Layout';

export const ItemPage = ({ location }) => {
  return (
    <Layout title='Item seleccionado' subtitle='Item seleccionado del proyecto'>
      <Header />
      <Item id={location.pathname.split('/')[2]} />
    </Layout>
  );
};
