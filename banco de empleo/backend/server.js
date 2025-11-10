const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas de ejemplo
app.get('/api/jobs', (req, res) => {
    // Ejemplo de datos de trabajos
    const jobs = [
        {
            id: 1,
            title: "Desarrollador Full-Stack Cuántico",
            company: "CyberTech Industries",
            location: "Neo Tokyo",
            description: "Buscamos un desarrollador para trabajar en tecnologías del futuro"
        },
        {
            id: 2,
            title: "Ingeniero de IA Neural",
            company: "Future Dynamics",
            location: "Nueva Shanghai",
            description: "Especialista en redes neuronales cuánticas"
        }
    ];
    res.json(jobs);
});

// Manejador de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('¡Algo salió mal en el ciberespacio!');
});

app.listen(port, () => {
    console.log(`🚀 Servidor corriendo en el puerto ${port}`);
});