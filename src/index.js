const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.get('/', (req, res, next) => {
	res.send({
		hola: 'mundo',
	});
});

app.listen(process.env.PORT, () => {
	console.log(`Server on port ${process.env.PORT}`);
});
