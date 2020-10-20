import React from 'react';
import { Header } from '../components/Header';
import '../assets/loading.scss';
import { Layout } from '../components/Layout';

export const NotFoundPage = ({ searchTerm }) => {
  return (
    <Layout title='Not found'>
      <Header />
      <h1 className='loading'>Página no encontrada</h1>
    </Layout>
  );
};
