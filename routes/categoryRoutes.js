const express = require('express');
const { validateInfrastructure, validateInfrastructureId } = require('../validations/infrastructureValidation');
const {
  addCategory,
  updateCategory,
  getCategory,
  getWebCategory,
  isActiveStatus,
  isDeleteStatus
} = require('../controllers/categoryController');
const authenticateToken = require('../middleware/auth');

const router = express.Router();

router.post('/create-category', authenticateToken, validateInfrastructure, addCategory);
router.put('/update-category/:id', authenticateToken, validateInfrastructure, validateInfrastructureId, updateCategory);
router.get('/get-web-category', getWebCategory);
router.get('/get-category', authenticateToken, getCategory);
router.put('/isactive-category/:id', authenticateToken, validateInfrastructureId, isActiveStatus);
router.delete('/isdelete-category/:id', authenticateToken, validateInfrastructureId, isDeleteStatus);

module.exports = router;
