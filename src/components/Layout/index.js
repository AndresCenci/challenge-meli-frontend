import React from 'react';
import { Helmet } from 'react-helmet';

export const Layout = ({ children, title, subtitle }) => {
  return (
    <>
      <Helmet>
        {
          title &&
          <title>Frontend Challenge</title>
        }
        {
          subtitle &&
          <meta name='description' content={subtitle} />
        }
      </Helmet>
      {children}
    </>
  );
};
