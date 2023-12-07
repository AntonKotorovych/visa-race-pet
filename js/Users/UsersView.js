export default class UsersView {
  constructor() {
    // All Buttons
    this.fullNameGenerateButton = document.getElementById('generateFullName');
    this.balanceGenerateButton = document.getElementById('generateBalance');
    this.ageGenerateButton = document.getElementById('generateAge');
    this.documentsGenerateButton = document.getElementById('generateDocuments');
    this.englishLevelGenerateButton = document.getElementById('generateEnglishLevel');
    this.generateAllButton = document.getElementById('generateAll');

    // All input fields
    this.fullNameInput = document.getElementById('fullName');
    this.balanceInput = document.getElementById('balance');
    this.ageInput = document.getElementById('age');
    this.documentsInput = document.getElementById('documents');
    this.englishLevelInput = document.getElementById('englishLevel');
  }

  bindEvents(handler) {
    this.fullNameGenerateButton.addEventListener('click', () => {
      const fullName = handler.generateFullName();
      this.renderFullNameInput(fullName);
    });

    this.balanceGenerateButton.addEventListener('click', () => {
      const balance = handler.generateBalance();
      this.renderBalanceInput(balance);
    });

    this.ageGenerateButton.addEventListener('click', () => {
      const age = handler.generateAge();
      this.renderAgeInput(age);
    });

    this.documentsGenerateButton.addEventListener('click', () => {
      const documents = handler.generateDocuments();
      this.renderDocumentsInput(documents);
    });

    this.englishLevelGenerateButton.addEventListener('click', () => {
      const englishLevel = handler.generateEnglishLevel();
      this.renderEnglishLevelInput(englishLevel);
    });

    this.generateAllButton.addEventListener('click', () => {
      handler.generateAllParticipants();
    });
  }

  renderFullNameInput(value) {
    this.fullNameInput.value = value;
  }

  renderBalanceInput(value) {
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
