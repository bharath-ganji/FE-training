import { NightwatchTests} from 'nightwatch';

const homePage: NightwatchTests = {
  'localhost Title test': () => {
    browser
      .url('http://localhost:3000')
      .assert.titleContains('React App');
  },

  'Test home text/link available on left navigation panel': () => {
    browser
      .url('http://localhost:3000')
      .waitForElementVisible('#home')
      .assert.textEquals('#home', 'Home')
     
  },

};

export default homePage;
