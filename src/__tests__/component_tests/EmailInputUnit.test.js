import React from 'react';
import { shallow } from 'enzyme';
import EmailInputUnit from '../../components/EmailInputUnit';

describe('EmailInputUnit' ,() => {

  let emailinputunit = shallow(<EmailInputUnit />)

  describe('renders components correctly', () => {
     it('renders correctly',() => {
        expect(emailinputunit).toMatchSnapshot(); 
     }); 

     it('renders Question correctly', () =>{
        expect(emailinputunit.find('Question').exists()).toBe(true);
     });
  });

});