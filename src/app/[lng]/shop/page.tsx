import Head from 'next/head';
import React from 'react';
import Shop from '../../../old_components/shop-page/shop';
import { Metadata } from 'next';

interface Props {
  params: { lng: string };
}

export const metadata: Metadata = {
  title: 'Travelblog Sinfronteras - Shop Page',
  description: 'Shop - Sinfronteras Travel Blog - Cool items for inspiration!',
};

const ShopPage: React.FC<Props> = (props) => {
  const {
    params: { lng },
  } = props;
  return <Shop lng={lng} />;
};

export default ShopPage;
