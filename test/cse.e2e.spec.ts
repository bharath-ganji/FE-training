import { NightwatchTests} from 'nightwatch';

const cse: NightwatchTests = {
  'home/CSE card has icon': () => {
    browser
      .url('http://localhost:3000/home/CSE')
      .assert.titleContains('React App');
  },

  'home/CSE card has icon has text': () => {
    browser
      .url('http://localhost:3000/home/CSE')
      .waitForElementVisible('.card__body')
      .assert.textEquals('.card__body', 'Golden year')
     
  },

};

export default cse;
