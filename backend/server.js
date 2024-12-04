// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();  // Pour charger les variables d'environnement

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Pour analyser le corps des requêtes en JSON

// Route pour gérer l'inscription à la newsletter
app.post('/api/subscribe', (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: 'L\'email est requis.' });
    }

    // Logique d'enregistrement de l'email ici, par exemple vers une base de données ou un service d'emailing (Mailchimp, SendGrid, etc.)
    console.log(`Nouvelle inscription : ${email}`);

    // Réponse de succès
    res.status(200).json({ message: 'Inscription réussie !' });
});

// Lancer le serveur
app.listen(port, () => {
    console.log(`Backend écoute sur le port ${port}`);
});
