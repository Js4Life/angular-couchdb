import { browser, by, element } from 'protractor';

// po = page object
// testing and browser manipulation like component/svc 


export class UserListAppPage {
  navigateTo() {
    return browser.get('/dashboard');
  }

  // getParagraphText() {
  //   return element(by.css('app-root h1')).getText();
  // }

    getTitle() {
      let header = by.css('h2')
      return element(header).getText();
    }

    getUnorderedList() {
      let list = by.css('ul');
      return element(list).isPresent();
    }

    getClearButton() {
      let button = by.css('button')
      return element(button);

    }

    getUsers() {
      let item = by.css('li')
      return element.all(item)
    }

}
