const Joi = require('@hapi/joi');

const validationControl = (data) => {
  const Schema = Joi.object({
    gpio1: Joi.boolean().truthy('yes').falsy('no'),
    gpio2: Joi.boolean().truthy('yes').falsy('no'),
    gpio3: Joi.boolean().truthy('yes').falsy('no'),
    gpio4: Joi.boolean().truthy('yes').falsy('no'),
    gpio5: Joi.boolean().truthy('yes').falsy('no'),
    gpio6: Joi.boolean().truthy('yes').falsy('no'),
    gpio7: Joi.boolean().truthy('yes').falsy('no'),
    gpio8: Joi.boolean().truthy('yes').falsy('no'),
  });

  const validationResult = Schema.validate(data, {
    abortEarly: false
  });

  const {
    error,
    value
  } = validationResult;

  if(error){
    const errorMessage = error.details.map(msg => {
      const {
        message
      } = msg;
      return {
        message
      };
    });

    return jsonFormatter(422, 'ValidationError', errorMessage);
  }

  return {
    value: value
  }
};

function jsonFormatter(statusCode, statusText, detail) {
  return {
    error: {
      code: statusCode,
      title: statusText,
      details: detail
    }
  };
}

module.exports = {
  validationControl 
}