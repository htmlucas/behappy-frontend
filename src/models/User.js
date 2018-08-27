export default class User {
  constructor() {
    this.name = '';
    this.gender = '';
  }

  validName = () => {
    return (
      typeof this.name === 'string' &&
      this.name.length !== 0 && 
      this.name.length <= 40
    );
  }

  validGender = () => {
    return ['m', 'f'].some(param => {
      return this.gender === param;
    });
  }
}