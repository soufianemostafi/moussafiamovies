const router = require('express').Router();
let Upload = require('../models/upload.model');


router.route('/').get((req, res) => {
  Upload.find()
    .then(upload => res.json(upload))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;

  const upload = new Upload({
    name
  });

  upload.save()
    .then(() => res.json('Upload added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;