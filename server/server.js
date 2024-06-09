const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

app.use(express.json());
app.use(cors());
app.use(express.static('public'));


const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Time Tracking API',
            description: 'API for managing text',
            contact: {
                name: 'lab3'
            },
            servers: ['http://localhost:5000']
        }
    },
    apis: ['server.js']
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /jobs:
 *   get:
 *     description: Get all jobs
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 jobs:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       title:
 *                         type: string
 */

const questions = [
    {
        id: 1,
        question: "This application will help you track your working hours.",
    },
    {
        id: 2,
        question: "Easily start, pause, resume, and stop your timer for tracking work hours.",
    }
];

app.get('/text', (req, res) => {
    res.json(questions);
});

app.listen(port, () => {
    console.log(`Server started ${port}`);
});
