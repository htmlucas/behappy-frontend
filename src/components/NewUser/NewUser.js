import React, {Component} from 'react';

import Label from '../Label';
import Input from '../Input';
import GenderSelector from '../GenderSelector';

class NewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: '',
        gender: ''
      },
      validation: {
        invalidName: false,
        invalidGender: false
      }
    };
  }

  updateUserName = (event) => {
    let user = this.state.user;
    user.name = event.target.value;
    this.setState({
      user: user
    });
  }

  updateUserGender = (event, gender) => {
    event.preventDefault();
    let user = this.state.user;
    user.gender = gender;
    this.setState({
      user: user
    });
  }

  render() {
    return (
      <div className="center">
        <form className="pure-form pure-form-stacked">
          <Label 
              htmlFor="name" 
              text="Quem é você?" 
              invalidValue={this.state.validation.invalidName} />
          <Input 
              id="name" 
              placeholder="Digite seu nome" 
              maxLength="40" 
              readOnly={false}
              invalidValue={this.state.validation.invalidName}
              defaultValue={this.state.user.name}
              onChange={this.updateUserName}
          />
          <Label
            text="Seu gênero:"
            invalidValue={this.state.validation.invalidGender}
          />
          <GenderSelector
            invalidValue={this.state.validation.invalidGender}
            gender={this.state.user.gender}
            updateGender={this.updateUserGender}
          />
        </form>
      </div>
    );
  }
}

export default NewUser;
