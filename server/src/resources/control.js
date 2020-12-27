const controlResource = (data) => {
  const {
    _id,
    gpio1,
    gpio2,
    gpio3,
    gpio4,
    gpio5,
    gpio6,
    gpio7,
    gpio8
  } = data;

  return {
    type: 'gpio',
    gpio_id: _id,
    gpio1,
    gpio2,
    gpio3,
    gpio4,
    gpio5,
    gpio6,
    gpio7,
    gpio8
  }
}
const controlCollection = (data) => {
  const collection = data.map(control => controlResource(control));
  return collection;
}
module.exports = {
  controlResource,
  controlCollection
}