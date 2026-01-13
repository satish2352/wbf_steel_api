// const { body, param } = require('express-validator');

// const validateTestimonial = [
//   body('name').notEmpty().withMessage('Name is required'),
//   body('company_Name').notEmpty().withMessage('Company_Name is required'),
//   body('review').notEmpty().withMessage('Review is required'),
//   body('experience').notEmpty().withMessage('Experience is required'),
//   body('star').isInt({ min: 1, max: 5 }).withMessage('Star rating must be between 1 and 5')
// ];

// const validateTestimonialId = [
//   param('id').isInt().withMessage('ID must be an integer')
// ];

// module.exports = { validateTestimonial, validateTestimonialId };

const { body, param, validationResult } = require("express-validator");

exports.validateTestimonial = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 2 })
    .withMessage("Name must be at least 2 characters"),

  body("company_Name")
    .trim()
    .notEmpty()
    .withMessage("Company name is required"),

  body("experience")
    .trim()
    .notEmpty()
    .withMessage("Experience is required"),

  body("review")
    .trim()
    .notEmpty()
    .withMessage("Review is required")
    .isLength({ min: 10 })
    .withMessage("Review must be at least 10 characters"),

  body("star")
    .notEmpty()
    .withMessage("Star rating is required")
    .isInt({ min: 1, max: 5 })
    .withMessage("Star must be between 1 and 5"),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array().map(e => e.msg)
      });
    }

    next();
  }
];

exports.validateTestimonialId = [
  param("id").isInt().withMessage("Invalid testimonial ID"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success:false, errors: errors.array() });
    }
    next();
  }
];
