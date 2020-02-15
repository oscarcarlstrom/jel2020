let initialValues = {
  TEMP: 0,
  HUMID: 0,
  AIR_PRESS: 0,
  AIR_QUAL: 0
};

export let state = {
  'prod/e58215b4-ab97-41b0-8abe-3fdf299bac4e/m/d/nrf-352656100826489/d2c': {
    name: 'Thingy 89',
    location: [59.436691, 10.594773],
    ...initialValues
  },
  'prod/e58215b4-ab97-41b0-8abe-3fdf299bac4e/m/d/nrf-352656100986572/d2c': {
    name: 'Thingy 72',
    location: [59.437668, 10.591147],
    ...initialValues
  }
};
