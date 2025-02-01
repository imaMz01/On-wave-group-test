// const express = require('express');
// const multer = require('multer');
// const path = require('path');
// const app = express();
// const port = 3000;
// const uploadFolder = 'upload_images';

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, uploadFolder);
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + path.extname(file.originalname)); 
//     }
// });

// app.use(express.static('public'));
// app.use(express.static(uploadFolder));

// app.post('/upload', upload.single('image'), (req, res) => {
//     if (!req.file) {
//         return res.status(400).send('Aucun fichier téléchargé');
//     }
//     res.status(200).send('Fichier téléchargé avec succès');
// });

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/public/index.html');
// });

// app.listen(port, () => {
//     console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
// });
const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 3000;
const uploadFolder = 'upload_images';

// Configuration du stockage Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadFolder);  // Dossier où les fichiers seront stockés
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));  // Nom unique basé sur la date actuelle
    }
});

// Initialisation de Multer avec la configuration de stockage
const upload = multer({ storage: storage });

app.use(express.static('public'));
app.use(express.static(uploadFolder));

// Route pour gérer l'upload
app.post('/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('Aucun fichier téléchargé');
    }
    res.status(200).send('Fichier téléchargé avec succès');
});

// Route pour afficher la page d'accueil
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Démarrage du serveur
app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
