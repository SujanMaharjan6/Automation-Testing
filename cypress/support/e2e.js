// Import commands.js using ES2015 syntax:
import './commands'

// Handle uncaught exceptions during all tests
Cypress.on('uncaught:exception', (err, runnable) => {
    console.error('Uncaught exception', err);
    return false;
  });