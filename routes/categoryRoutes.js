const express = require('express');
const { validateInfrastructure, validateInfrastructureId } = require('../validations/infrastructureValidation');
const {
  addCategory,
  updateCategory,
  getCategoryForAdmin,
  getCategory,
  getWebCategory,
  isActiveStatus,
  isDeleteStatus
} = require('../controllers/categoryController');
const authenticateToken = require('../middleware/auth');

const router = express.Router();

router.post('/create-category', authenticateToken, addCategory);
router.put('/update-category/:id', authenticateToken, validateInfrastructure, validateInfrastructureId, updateCategory);
router.get('/get-web-category', getWebCategory);
router.get('/get-category-admin', authenticateToken, getCategoryForAdmin);
router.get('/get-category', authenticateToken, getCategory);
router.put('/isactive-category/:id', authenticateToken, validateInfrastructureId, isActiveStatus);
router.delete('/isdelete-category/:id',  validateInfrastructureId, isDeleteStatus);

module.exports = router;
