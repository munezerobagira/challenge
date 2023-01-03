import React from 'react';
import Head from 'next/head';
export interface HTMLHeadProps {
  description: string;
  title: string;
}
function HTMLHead({ description, title }: HTMLHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} data-testid="html-description" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default HTMLHead;
