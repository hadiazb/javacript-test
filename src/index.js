const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.get('/', (req, res, next) => {
	res.send({
		name: 'Hugo Andres',
		lastName: 'Diaz Bernal',
		age: 32,
	});
});

app.listen(process.env.PORT, () => {
	console.log(`Server on port ${process.env.PORT}`);
});
