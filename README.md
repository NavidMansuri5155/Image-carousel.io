### Image-carousel React.js

A flexible and responsive carousel component for react


## Why do we need yet another carousel component

- Element resize support (true responsiveness)
Most of the carousel components are responsive to the viewport size, but this is not a real responsive support as we can have an element with a width:500px on a 1200px screen, most carousel component will "think" we are on a 1200px mode because they "watch" the view-port's size and not the wrapping element's size. This is the reason why react-eleastic-carousel is using the resize-observer which gives us a true responsive support, not matter on what screen size we are.

- RTL (right-to-left) support
Supporting right-to-left languages requires a full support for right-to-left rendering and animations which is not supported in most of the carousel components out there. also, right-to-left support is important and should be a standard for most applications.



###  Install

`npm install --save react-elastic-carousel`

### or

`yarn add react-elastic-carousel`

### Note
react-elastic-carousel is using styled-components for styling, this means that you should install it as well:

### `Usage`

```javascript
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];


function App() {
  return (
    <>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
        <Item><img src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80" alt="0n1.." /></Item>
          <Item><img src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="0n1.." /></Item>
          <Item><img src="https://images.unsplash.com/photo-1558001767-18747c366202?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="0n1.." /></Item>
          <Item><img src="https://images.unsplash.com/photo-1595261669521-11d7ee05804a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80" alt="0n1.." /></Item>
          <Item><img src="https://images.unsplash.com/photo-1446071103084-c257b5f70672?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=331&q=80" alt="0n1.." /></Item>
          <Item><img src="https://images.unsplash.com/photo-1496483353456-90997957cf99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=332&q=80" alt="0n1.." /></Item>
          <Item><img src="https://images.unsplash.com/photo-1565389194021-4b665316b91b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="0n1.." /></Item>
          <Item><img src="https://images.unsplash.com/photo-1575148170928-5ab5e51e8248?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80" alt="0n1.." /></Item>
        </Carousel>
      </div>
    </>

  );
}

export default App; 
```
## How will it be like 🙂

### laptop💻
<img src="public/img/Screenshot from 2021-05-08 18-52-13.png" />

### ipad 

<img src="public/img/Screenshot from 2021-05-08 18-52-34.png" />

### Mobile📱

<img src="public/img/Screenshot from 2021-05-08 18-53-04.png" />


### `Development`

`git clone https://github.com/sag1v/react-elastic-carousel.git
cd react-elastic-carousel
yarn `


### To run the docs site run

`yarn start`

### to run a demo Application run

`yarn demo`
