# GreenSock & Bootstrap Sidebar Menu for React

## Description
A sidebar sliding menu for React, created with Bootstrap and animated with the GreenSock Animation Platform (GSAP).

This is a simple set of files to be used in any React project. So far is not a re-usable or composable component.

## Usage
Simply clone this repo:

```
$ git clone https://github.com/rhernandog/gsap-bootstrap-sidebar-menu.git
```
And then copy and paste the `SidebarMenu.js` file from the `src` folder into your project. Then you can use the file in your project like this:

```js
// this menu depends on using react router dom
import { BrowserRouter, Route } from "react-router-dom";
import SidebarMenu from "./your-path/SidebarMenu";

// then inside the render method of your main project file
render(){
  return <BrowserRouter>
    <Route path="/" component={SidebarMenu} />
  </BrowserRouter>
}
```

By default the component uses icons from Font Awesome, so you need to include those in your html file or install them using either NPM or Yarn. The code detects if you're passing an icon to the menu items or not. In the `SidebarMenu.js` you'll find at the top of the file an array with the menu elements and dividers. If you don't want to use icons in the menu items just don't pass them:

```js
const menuItems = [
  { type: "link", url: "/", title: "Dashboard" },
];
```

Finally the component is based on Bootstrap's css code (version 4.2.1), so that has to be included as well. You can also use Bootstrap's SASS files and compile it using your setup. In that case you can import Bootstrap's variables, mixins and functions in order to use them with the menu. In that case you can just import the `_menu.scss` file in your main SASS file:

```scss
@import "your-path/menu";
```

## Bugs
Report any bugs or issues:

[https://github.com/rhernandog/gsap-bootstrap-sidebar-menu/issues](https://github.com/rhernandog/gsap-bootstrap-sidebar-menu/issues)

## License
MIT

## Author
- Rodrigo Hernando G.
- Follow on Twitter [@websnapcl](https://twitter.com/websnapcl/)
