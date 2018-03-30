import express from 'express';

var router = express.Router();

/* GET home page (dashboard page). */
router.get('/', (req, res) => {
	res.redirect('index');
});

router.get('/index', (req, res) => {
	res.render('index', { title: 'ESRGC' });
});

router.get('/about', (req, res) => {
	res.render('about', { title: 'About Us' });
});

export default router;
