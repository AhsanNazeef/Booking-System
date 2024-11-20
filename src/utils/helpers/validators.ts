import Joi from "joi";

export const bookingFormValidationSchema = Joi.object({
  name: Joi.string()
    .required()
    .min(1)
    .max(50)
    .pattern(/^[a-zA-Z\s-]+$/)
    .messages({
      "string.empty": "Name is required",
      "string.min": "Name is required",
      "string.max": "Name cannot exceed 50 characters",
      "string.pattern.base":
        "Name can only contain alphabets, spaces and hyphens",
    }),

  email: Joi.string()
    .required()
    .email({ tlds: false })
    .pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)
    .messages({
      "string.empty": "Email is required",
      "string.email": "Please enter a valid email",
      "string.pattern.base":
        "Please enter a valid email format (e.g. example@domain.com)",
    }),

  phone: Joi.string()
    .required()
    .min(10) // Minimum length including country code
    .max(15) // Maximum length including country code
    .messages({
      "string.empty": "Phone number is required",
      "string.min": "Please enter a valid phone number",
      "string.max": "Please enter a valid phone number",
    }),

  numAdults: Joi.number().required().min(1).max(9).integer().messages({
    "number.base": "Number of adults must be a number",
    "number.min": "At least 1 adult is required",
    "number.max": "Maximum 9 adults allowed",
    "number.integer": "Number of adults must be a whole number",
  }),

  numChildren: Joi.number().optional().min(1).max(9).integer().messages({
    "number.min": "Minimum 1 child",
    "number.max": "Maximum 9 children allowed",
    "number.integer": "Number of children must be a whole number",
  }),

  paymentMethod: Joi.string().required().valid("mastercard", "visa").messages({
    "string.empty": "Payment method is required",
    "any.only": "Payment method must be either Master Card or Visa",
  }),
});
