const Control = require('../models/Control');
const validation = require('../exception/validation');
const controlResource = require('../resources/control');
/***
 * desc     Get all GPIO
 * route    GET /api/v1/control/gpio
 * access   public
 */
exports.index = async (req, res, next) => {
  try {
    const control = await Control.findOne().sort({
      createdAt: -1
    });
    const resource = controlResource.controlResource(control);
    res.status(200).json(resource);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    next(err);      
  }
};
/***
 * desc     Get all GPIO
 * route    post /api/v1/control/gpio
 * access   public
 */
exports.store = async (req, res, next) => {
  const {
    error,
    value
  } = validation.validationControl(req.body);

  if (error) return res.status(422).json(error);
  const {
    gpio1,
    gpio2,
    gpio3,
    gpio4,
    gpio5,
    gpio6,
    gpio7,
    gpio8
  } = value;

  try {
    let newControl = new Control({
      gpio1,
      gpio2,
      gpio3,
      gpio4,
      gpio5,
      gpio6,
      gpio7,
      gpio8,
    });

    const control = await newControl.save();
    const currentControl = await Control.findById(control._id);
    const resource = controlResource.controlResource(currentControl);
    res.status(201).json(resource);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    next(err);  
  }
};