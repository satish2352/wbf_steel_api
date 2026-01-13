// const { body, param } = require('express-validator');

// const validateInfrastructure = [
//   body('title').notEmpty().withMessage('Title is required'),
//   // body('desc').notEmpty().withMessage('desc is required')
// ];

// const validateInfrastructureId = [
//   param('id').isInt().withMessage('ID must be an integer')
// ];

// module.exports = { validateInfrastructure, validateInfrastructureId };

const { body, param } = require("express-validator");
const apiResponse = require("../helper/apiResponse");

exports.validateInfrastructure = [
  body("title")
    .notEmpty().withMessage("Title is required")
    .isLength({ min: 3 }).withMessage("Title must be at least 3 characters"),

  body("subtitle")
    .optional()
    .isLength({ min: 3 }).withMessage("Subtitle must be at least 3 characters"),

  body("desc")
    .notEmpty().withMessage("Description is required")
    .isLength({ min: 10 }).withMessage("Description must be at least 10 characters"),

  (req, res, next) => {
    const errors = require("express-validator").validationResult(req);
    if (!errors.isEmpty()) {
      return apiResponse.validationErrorWithData(res, "Validation Error", errors.array());
    }
    next();
  }
];

exports.validateInfrastructureId = [
  param("id")
    .isInt().withMessage("Infrastructure ID must be a number"),

  (req, res, next) => {
    const errors = require("express-validator").validationResult(req);
    if (!errors.isEmpty()) {
      return apiResponse.validationErrorWithData(res, "Invalid ID", errors.array());
    }
    next();
  }
];
