import './global.css';
import React from 'react';

export const metadata = {
  title: 'Flow',
};

export default async function Layout(props: { children: React.ReactNode; modal: React.ReactNode }) {
  return (
    <>
      {props.children}
      {props.modal}
    </>
  );
}
