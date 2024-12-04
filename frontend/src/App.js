// frontend/src/App.js
import React from 'react';
import NewsletterForm from './components/NewsletterForm';

const App = () => {
  return (
    <div className="App">
      <h1>Bienvenue sur Opomly</h1>
      <p>Inscrivez-vous à notre newsletter pour rester informé des mises à jour !</p>
      <NewsletterForm />
    </div>
  );
}

export default App;
