import Generator from '../Generator/Generator';

export default class UsersView {
  constructor() {
    this.generator = new Generator();

    // All Buttons
    this.fullNameGenerateButton = document.getElementById('generateFullName');
    this.balanceGenerateButton = document.getElementById('generateBalance');
    this.ageGenerateButton = document.getElementById('generateAge');
    this.documentsGenerateButton = document.getElementById('generateDocuments');
    this.documentPassport = document.getElementById('passport');
    this.documentInsurance = document.getElementById('insurance');
    this.documentPhoto = document.getElementById('photo');
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

  bindGeneratedFullName(handler) {
    this.fullNameGenerateButton.addEventListener('click', () => {
      handler();
    });
  }

  bindFullNameInput(handler) {
    this.fullNameInput.addEventListener('input', () => {
      handler(this.fullNameInput.value);
    });
  }

  bindGeneratedBalance(handler) {
    this.balanceGenerateButton.addEventListener('click', () => {
      handler();
    });
  }

  bindBalanceInput(handler) {
    this.balanceInput.addEventListener('input', () => {
      handler(this.balanceInput.value);
    });
  }

  bindGeneratedAge(handler) {
    this.ageGenerateButton.addEventListener('click', () => {
      handler();
    });
  }

  bindAgeInput(handler) {
    this.ageInput.addEventListener('input', () => {
      handler(this.balanceInput.value);
    });
  }

  bindGeneratedDocuments(handler) {
    this.documentsGenerateButton.addEventListener('click', () => {
      handler();
    });
  }

  bindDocument(handler) {
    this.documentPassport.addEventListener('click', () => {
      handler(this.documentPassport.id);
    });

    this.documentInsurance.addEventListener('click', () => {
      handler(this.documentInsurance.id);
    });

    this.documentPhoto.addEventListener('click', () => {
      handler(this.documentPhoto.id);
    });
  }

  bindGeneratedEnglishLevel(handler) {
    this.englishLevelGenerateButton.addEventListener('click', () => {
      handler();
    });
  }

  bindEnglishLevel(handler) {
    this.englishLevelInput.addEventListener('click', () => {
      handler(this.englishLevelInput.value);
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
      const documentsArray = this.documentsInput.children;
      let documents = [];
      for (let i = 0; i < documentsArray.length; i++) {
        const checkbox = documentsArray[i].querySelector('input[type="checkbox"]');
        if (checkbox.checked) documents.push(checkbox.id);
      }

      this.resetAllInputs();
      handler(documents);
      alert('Participant has been added successfully!');
    });
  }

  renderFullName(value) {
    this.fullNameInput.value = value;
  }

  renderBalance(value) {
    this.balanceInput.value = value;
  }

  renderAge(value) {
    this.ageInput.value = value;
  }

  renderDocuments(value) {
    const checkboxArray = this.documentsInput.children;

    for (let i = 0; i < checkboxArray.length; i++) {
      const checkboxId = checkboxArray[i].querySelector('input[type="checkbox"]').id;
      checkboxArray[i].querySelector('input[type="checkbox"]').checked = checkboxId === value[i];
    }
  }

  renderEnglishLevel(value) {
    for (const option of this.englishLevelInput.options) {
      if (option.value === value) {
        option.selected = true;
      }
    }
  }

  resetAllInputs() {
    this.fullNameInput.value = '';
    this.balanceInput.value = '';
    this.ageInput.value = '';

    const checkboxArray = this.documentsInput.children;

    for (let i = 0; i < checkboxArray.length; i++) {
      checkboxArray[i].querySelector('input[type="checkbox"]').checked = false;
    }

    this.englishLevelInput.children[0].selected = true;
  }
}
