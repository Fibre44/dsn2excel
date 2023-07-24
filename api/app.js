const express = require('express');
const helmet = require("helmet");
const app = express();
const cors = require('cors')
const uploadRoute = require('./route/upload')
app.use(
    helmet.contentSecurityPolicy({
        directives: {
            "script-src": ["'self'", "code.jquery.com", "cdn.jsdelivr.net"],
        },
    }),
);

app.use(cors({
    origin: '*'
}));


app.use('/api/upload', uploadRoute)

// Démarrer le serveur
const port = 3000;
app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});