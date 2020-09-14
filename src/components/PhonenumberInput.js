import React, {Component} from 'react';
import PhoneInput from 'react-phone-number-input';

export default class PhonenumberInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            value : React.useState(),
            setValue : React.useState(),
        }

    }

    render(){
        return(
            <PhoneInput
              placeholder="Enter phone number"
              value={this.state.value}
              onChange={this.state.setValue}/>


        )
    }
}
