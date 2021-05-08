import './App.css';
import Carousel from "react-elastic-carousel";
import Item from "./Item";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];


function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Images Carousel in React.js </h1>
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
