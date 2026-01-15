import './App.css'

function App() {

  return (
    <>
      <body>
        <div className="container">
          <header>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg"
              alt="Logo"
              className="logo"
            />
            <div className="search-box">
              <input
                type="text"
                id="searchInput"
                placeholder="Search characters (e.g. Rick, Morty, Summer)..."
              />
              <div className="search-glow"></div>
            </div>
          </header>

          <main id="charactersGrid" className="grid"></main>
        </div>
      </body>
    </>
  );
}

export default App
