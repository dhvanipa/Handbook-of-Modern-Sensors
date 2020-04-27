const baseUnits = [
  {
    name: 'Current',
    value: 'A',
    valueLabel: 'ampere',
    baseUnits: {
      A: 1,
      cd: 0,
      m: 0,
      kg: 0,
      K: 0,
      s: 0,
      mol: 0,
    },
  },
  {
    name: 'Intensity',
    value: 'cd',
    valueLabel: 'candela',
    baseUnits: {
      A: 0,
      cd: 1,
      m: 0,
      kg: 0,
      K: 0,
      s: 0,
      mol: 0,
    },
  },
  {
    name: 'Length',
    value: 'm',
    valueLabel: 'metre',
    baseUnits: {
      A: 0,
      cd: 0,
      m: 1,
      kg: 0,
      K: 0,
      s: 0,
      mol: 0,
    },
  },
  {
    name: 'Mass',
    value: 'kg',
    valueLabel: 'kilogram',
    baseUnits: {
      A: 0,
      cd: 0,
      m: 0,
      kg: 1,
      K: 0,
      s: 0,
      mol: 0,
    },
  },
  {
    name: 'Temperature',
    value: 'K',
    valueLabel: 'kelvin',
    baseUnits: {
      A: 0,
      cd: 0,
      m: 0,
      kg: 0,
      K: 1,
      s: 0,
      mol: 0,
    },
  },
  {
    name: 'Time',
    value: 's',
    valueLabel: 'second',
    baseUnits: {
      A: 0,
      cd: 0,
      m: 0,
      kg: 0,
      K: 0,
      s: 1,
      mol: 0,
    },
  },
  {
    name: 'Quantity',
    value: 'mol',
    valueLabel: 'mole',
    baseUnits: {
      A: 0,
      cd: 0,
      m: 0,
      kg: 0,
      K: 0,
      s: 0,
      mol: 1,
    },
  },
];

const derivedUnits = [
  {
    name: 'Capacitance',
    value: 'F',
    valueLabel: 'farad',
    baseUnits: {
      A: 2,
      cd: 0,
      m: -2,
      kg: -1,
      K: 0,
      s: 4,
      mol: 0,
    },
  },
  {
    name: 'Charge',
    value: 'C',
    valueLabel: 'coulomb',
    baseUnits: {
      A: 1,
      cd: 0,
      m: 0,
      kg: 0,
      K: 0,
      s: 1,
      mol: 0,
    },
  },
  {
    name: 'Force',
    value: 'N',
    valueLabel: 'newton',
    baseUnits: {
      A: 0,
      cd: 0,
      m: 1,
      kg: 1,
      K: 0,
      s: -2,
      mol: 0,
    },
  },
  {
    name: 'Energy',
    value: 'J',
    valueLabel: 'joule',
    baseUnits: {
      A: 0,
      cd: 0,
      m: 2,
      kg: 1,
      K: 0,
      s: -2,
      mol: 0,
    },
  },
  {
    name: 'Illuminance',
    value: 'lx',
    valueLabel: 'lux',
    baseUnits: {
      A: 0,
      cd: 1,
      m: -2,
      kg: 0,
      K: 0,
      s: 0,
      mol: 0,
    },
  },
  {
    name: 'Inductance',
    value: 'H',
    valueLabel: 'henry',
    baseUnits: {
      A: -2,
      cd: 0,
      m: 2,
      kg: 1,
      K: 0,
      s: -2,
      mol: 0,
    },
  },
  {
    name: 'Luminous Flux',
    value: 'lm',
    valueLabel: 'Lumen',
    baseUnits: {
      A: 0,
      cd: 1,
      m: 0,
      kg: 0,
      K: 0,
      s: 0,
      mol: 0,
    },
  },
  {
    name: 'Magnetic Flux',
    value: 'wb',
    valueLabel: 'weber',
    baseUnits: {
      A: -1,
      cd: 0,
      m: 2,
      kg: 1,
      K: 0,
      s: -2,
      mol: 0,
    },
  },
  {
    name: 'Magnetic Flux Density',
    value: 'T',
    valueLabel: 'tesla',
    baseUnits: {
      A: -1,
      cd: 0,
      m: 0,
      kg: 1,
      K: 0,
      s: -2,
      mol: 0,
    },
  },
  {
    name: 'Power',
    value: 'W',
    valueLabel: 'watt',
    baseUnits: {
      A: 0,
      cd: 0,
      m: 2,
      kg: 1,
      K: 0,
      s: -3,
      mol: 0,
    },
  },
  {
    name: 'Pressure',
    value: 'pa',
    valueLabel: 'pascal',
    baseUnits: {
      A: 0,
      cd: 0,
      m: -1,
      kg: 1,
      K: 0,
      s: -2,
      mol: 0,
    },
  },
  {
    name: 'Potential',
    value: 'V',
    valueLabel: 'volt',
    baseUnits: {
      A: -1,
      cd: 0,
      m: 2,
      kg: 1,
      K: 0,
      s: -3,
      mol: 0,
    },
  },
  {
    name: 'Resistance',
    value: 'Ω',
    valueLabel: 'ohm',
    baseUnits: {
      A: -2,
      cd: 0,
      m: 2,
      kg: 1,
      K: 0,
      s: -3,
      mol: 0,
    },
  },
];

export {baseUnits, derivedUnits};
