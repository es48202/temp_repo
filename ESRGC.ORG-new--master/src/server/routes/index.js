import express from 'express';

var router = express.Router();

import photos from './photos';

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

router.get('/contact', (req, res) => {
	res.render('contact', { title: 'Contact Us' });
});

router.get('/data', (req, res) => {
	res.render('data', { title: 'Data' });
});

router.get('/dashboard', (req, res) => {
	res.render('dashboard', { title: 'Dashboard' });
});

router.get('/photos', photos.list);

export default router;
