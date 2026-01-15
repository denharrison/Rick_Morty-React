import './App.css'

function App() {

  return (
    <>
     <div class="container">
        <header>
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg" alt="Logo" class="logo" />
            <div class="search-box">
                <input type="text" id="searchInput" placeholder="Search characters (e.g. Rick, Morty, Summer)..." />
                <div class="search-glow"></div>
            </div>
        </header>

        <main id="charactersGrid" class="grid">
            </main>
    </div>
    </>
  )
}

export default App
