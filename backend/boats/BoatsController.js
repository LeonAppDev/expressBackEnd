const express = require('express');
const bodyParser = require('body-parser');

const Boat = require('./Boat');

const router = express.Router();
router.use(bodyParser.urlencoded({extend: true}));
router.use(bodyParser.json());

router.get('/', (req, res) => {
    
  Boat.findAll().then((boats) => {

      console.log('findall');
      res.status(200).send(boats);
  }).catch((err) => {
      res.status(500).send('There was a problem finding the boats. '+err);
  })
});


router.get('/:id', (req, res) => {

	Boat.findAll({
		where: {
			id:req.params.id
		}
	}).then((boat) => {

		res.status(200).send(boat);
	}).catch((err) => {
		res.status(500).send('There was a problem finding the boat. '+err);
	})
});

module.exports = router;