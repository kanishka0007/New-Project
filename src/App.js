import {useState} from 'react';


import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Header from './Header';
import Footer from './Footer';
import Page6 from './Page6';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='root'>
      
      <Page2/>
      <Page3 />
      <Footer/>
      <Page4/>
      <Header/>
      <Page5/>
      <Page6/>
    </div>
  )
}

export default App;

