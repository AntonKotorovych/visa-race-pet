import Generator from '../Generator/Generator';

export default class UsersView {
  constructor() {
    this.generator = new Generator();

    // All Buttons
    this.fullNameGenerateButton = document.getElementById('generateFullName');
    this.balanceGenerateButton = document.getElementById('generateBalance');
    this.ageGenerateButton = document.getElementById('generateAge');
    this.documentsGenerateButton = document.getElementById('generateDocuments');
    this.englishLevelGenerateButton = document.getElementById('generateEnglishLevel');
    this.generateAllButton = document.getElementById('generateAll');
    this.clearAllButton = document.getElementById('clearAll');
    this.addParticipantButton = document.getElementById('addNewUser');

    // All input fields
    this.fullNameInput = document.getElementById('fullName');
    this.balanceInput = document.getElementById('balance');
    this.ageInput = document.getElementById('age');
    this.documentsInput = document.getElementById('documents');
    this.englishLevelInput = document.getElementById('englishLevel');
  }

  bindFullNameInput(handler) {
    this.fullNameGenerateButton.addEventListener('click', () => {
      const fullName = this.generator.generateFullName();
      this.renderFullName(fullName);
      handler(fullName);
    });
  }

  bindBalanceInput(handler) {
    this.balanceGenerateButton.addEventListener('click', () => {
      const balance = this.generator.generateBalance();
      this.renderBalance(balance);
      handler(balance);
    });
  }

  bindAgeInput(handler) {
    this.ageGenerateButton.addEventListener('click', () => {
      const age = this.generator.generateAge();
      this.renderAgeInput(age);
      handler(age);
    });
  }

  bindDocumentsInput(handler) {
    this.documentsGenerateButton.addEventListener('click', () => {
      const documents = this.generator.generateDocuments();
      this.renderDocumentsInput(documents);
      handler(documents);
    });
  }

  bindEnglishLevelInput(handler) {
    this.englishLevelGenerateButton.addEventListener('click', () => {
      const englishLevel = this.generator.generateEnglishLevel();
      this.renderEnglishLevelInput(englishLevel);
      handler(englishLevel);
    });
  }

  bindAddAllUsers(handler) {
    this.generateAllButton.addEventListener('click', () => {
      handler();
    });
  }

  bindClearAllUsers(handler) {
    this.clearAllButton.addEventListener('click', () => {
      handler();
    });
  }

  bindAddParticipant(handler) {
    this.addParticipantButton.addEventListener('click', () => {
      handler();
    });
  }

  renderFullName(value) {
    this.fullNameInput.value = value;
  }

  renderBalance(value) {
    this.balanceInput.value = value;
  }

  renderAgeInput(value) {
    this.ageInput.value = value;
  }

  renderDocumentsInput(value) {
    const checkboxArray = this.documentsInput.children;

    for (let i = 0; i < checkboxArray.length; i++) {
      if (checkboxArray[i].innerText === value[i]) {
        checkboxArray[i].querySelector('input[type="checkbox"').checked = true;
      }
    }
  }

  renderEnglishLevelInput(value) {
    for (const option of this.englishLevelInput.options) {
      if (option.value === value) {
        option.selected = true;
      }
    }
  }
}
