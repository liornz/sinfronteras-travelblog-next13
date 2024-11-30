import { Metadata } from 'next';
import React from 'react';
import Shop from '../../../old_components/shop-page/shop';

interface Props {
  params: Promise<{ lng: string }>;
}

export const metadata: Metadata = {
  title: 'Travelblog Sinfronteras - Shop Page',
  description: 'Shop - Sinfronteras Travel Blog - Cool items for inspiration!',
};

const ShopPage: React.FC<Props> = async ({ params }) => {
  const { lng } = await params;
  return <Shop lng={lng} />;
};

export default ShopPage;
