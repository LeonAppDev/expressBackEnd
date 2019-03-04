const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('db');

const router = express.Router();
router.use(bodyParser.urlencoded({extend: true}));
router.use(bodyParser.json());


const UserMeta = sequelize.import('../../models/wprh_usermeta');
/*router.get('/', (req, res) => {
    
  UserMeta.findAll().then((usermeta) => {

      console.log('findall');
      res.status(200).send(usermeta);
  }).catch((err) => {
      res.status(500).send('There was a problem finding the boats. '+err);
  })
});
*/

router.get('/:user_id', (req, res) => {

	UserMeta.findAll({
		where: {
			user_id:req.params.user_id
		}
	}).then((usermeta) => {

		res.status(200).send(usermeta);
	}).catch((err) => {
		res.status(500).send('There was a problem finding the usermeta. '+err);
	})
});

router.get('/:meta_key', (req, res) => {

	UserMeta.findAll({
		where: {
			meta_key:req.params.meta_key
		}
	}).then((usermeta) => {

		res.status(200).send(usermeta);
	}).catch((err) => {
		res.status(500).send('There was a problem finding the usermeta. '+err);
	})
});

module.exports = router;