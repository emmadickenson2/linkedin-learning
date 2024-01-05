import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  const [name, setName] = useState("Emma");

  useEffect(() => {
    document.title= `Celebrate ${name}`;
  });

  return (
    <section>
      <p>Congratulations {name}!</p>
      <button onClick={() => setName("Will")}>
        Change Winner
      </button>
    </section>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
