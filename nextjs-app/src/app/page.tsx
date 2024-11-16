import React from 'react';
import ExampleMessage from './components/ExampleMessage';
import Header from './components/Header';

export default function Home() {
   return (
    <section className="py-24">
      <div className="container">
        <Header />
        <ExampleMessage />
      </div>
    </section>
  );
}