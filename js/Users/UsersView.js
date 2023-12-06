export default class UsersView {
  constructor() {
    this.fullNameInput = document.getElementById('fullName');
    this.balanceInput = document.getElementById('balance');
    this.ageInput = document.getElementById('age');
    this.documentsInput = document.getElementById('documents');
    this.englishLevelInput = document.getElementById('englishLevel');
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
    const checkboxArray = this.documentsInput.querySelectorAll('div');

    function checkboxArrayHandling(checkboxArray, documentsCounter) {
      const slicedCheckboxArray = Array.from(checkboxArray).slice(0, documentsCounter);

      slicedCheckboxArray.forEach(checkboxDiv => {
        const checkbox = checkboxDiv.querySelector('input[type="checkbox"]');
        checkbox.checked = true;
      });
    }

    checkboxArrayHandling(checkboxArray, value);
  }

  renderEnglishLevelInput(value) {
    for (const option of this.englishLevelInput.options) {
      if (option.value === value) {
        option.selected = true;
      }
    }
  }
}
