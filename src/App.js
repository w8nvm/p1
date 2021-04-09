import './App.css';
import React, {useState} from 'react';
import Data from './Components/Data'
import List  from './Components/List'

function App() {
    const [days, setDays] = useState(Data)

  return (
          <main>
              <section className = "container">
                  <List days = {days} />
              </section>
          </main>


  );
}

export default App;
