// frontend/src/components/NewsletterForm.js
import React, { useState } from 'react';
import axios from 'axios';

const NewsletterForm = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/subscribe', { email });
            console.log(response.data);
            setMessage('Inscription réussie !');
        } catch (error) {
            setMessage('Erreur lors de l\'inscription.');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Entrez votre email"
                    required
                />
                <button type="submit">S'inscrire</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default NewsletterForm;
