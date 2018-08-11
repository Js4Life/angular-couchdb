import { UserListAppPage } from './app.po';

import { browser, element, by } from 'protractor'

describe('User List App', () => {

  let UserListAppPage1 = new UserListAppPage();

  // it('it should FAIL',() => {

  //     expect(2).toEqual(4);

  // })

  beforeEach(() => {
   // browser.get('/dashboard');
   UserListAppPage1.navigateTo();

    it('should have a title', () => {
      // let header = by.css('h2')
      // let title = element(header).getText()

      
      let title = UserListAppPage1.getTitle();

      expect(title).toBe('Users Online Now')
    })
  })
  it('should have an unorderList', () => {
    // let list = by.css('ul');
    // let listElm = element(list).isPresent();

  
  let listElm= UserListAppPage1.getUnorderedList();

    expect(listElm).toBeTruthy();
  })

  it('should have have 16 usersss', () => {
    let total = 16;
    // let button = by.css('button')
    // let item = by.css('li')
    // let clearButton = element(button);
    let clearButton = UserListAppPage1.getClearButton();
    // let users = element.all(item);
    let users = UserListAppPage1.getUsers();
    clearButton.click();

    expect(users.count()).toBe(total)

  })


})






// describe('workspace-project App', () => {
//   let page: AppPage;

//   beforeEach(() => {
//     page = new AppPage();
//   });

//   it('should display welcome message', () => {
//     page.navigateTo();
//     expect(page.getParagraphText()).toEqual('Welcome to couchDbAngular!');
//   });
// });
