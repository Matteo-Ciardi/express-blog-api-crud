const express = require('express');

const router = express.Router();

router.get('/', postController.index);
router.get('/:id', postController.show);
router.post('/', postController.store);
router.put('/:id', postController.update);
router.delete('/:id', postController.destroy);

module.exports = router;