import express from 'express';

var router = express.Router();


/* GET home page (dashboard page). */
router.get('/', function(req, res){
	res.redirect('index');
});

router.get('/index', (req, res) => {
	res.render('index', { title: 'ESRGC' });
});

export default router;