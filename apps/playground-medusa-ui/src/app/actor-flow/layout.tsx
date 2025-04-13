import './global.css';
import React from 'react';

export const metadata = {
  title: 'Actor Flow',
  description: 'A sample Next.js app showing dynamic routing with modals as a route.',
};

export default async function Layout(props: { children: React.ReactNode; modal: React.ReactNode }) {
  return (
    <>
      {props.children}
      {props.modal}
    </>
  );
}
