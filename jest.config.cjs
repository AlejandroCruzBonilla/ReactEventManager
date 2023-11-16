module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  // Configuración específica para TypeScript
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
}
