import '../scss/styles.scss';
import Generator from './Generator/Generator.js';

const generator = new Generator();

generator.generateFullName();
generator.generateBalance();
generator.generateAge();
generator.generateDocumentsQuantity();
