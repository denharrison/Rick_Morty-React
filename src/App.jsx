import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import { useState, useEffect } from "react";

function App() {

const [inputData, setInputData] = useState('');
const [ characters, setCharacters ] = useState([]);
const [loading, setLoading] = useState(false)
const [page, setPage] = useState(1);
const [selectedCharacter, setSelectedCharacter] = useState(null)

 const entryInputData = (event) => { setInputData(event.target.value), setPage(1) }

 useEffect(() => {

  setLoading(true)

   const obtainData = async () => {

    try {

      let response = await fetch( `https://rickandmortyapi.com/api/character/?name=${inputData}&page=${page}`);
      if (!response.ok) throw new Error(`${response.status} ${response.statusName}`)
      if (response.status === '404') throw new Error('Нет результатов')
      let data = await response.json();

      if (data.results) {
        setCharacters(data.results)
      } else {
        setCharacters([])
        console.warn(`Персонажи не найдены: ${response.status}`);
      }
    
      
    } catch (error) {
      console.error(`Что-то пошло не так: ${error}`)
    } finally  {
        setLoading(false);
    }
   
   };

   if (inputData !== '') {
    setLoading(true);
    obtainData()
   } else {
    setLoading(false);
    setCharacters([]);
   }


 }, [inputData, page]);


  const handleCardClick = (character) => {
    setSelectedCharacter(character); // Сохраняем весь объект целиком
  };

  const closeModal = () => setSelectedCharacter(null);

  return (
    <>
      <div className="container">
        <Header onChange={entryInputData} handleCardClick={handleCardClick} />

        <main id="charactersGrid" className="grid">
          {loading ? (
            <p> Идет загрузка персонажей... </p>
          ) : (
            characters.map((character) => (
              <Card
                key={character.id}
                character={character}
                onCardClick={handleCardClick}
              />
            ))
          )}
        </main>
        {characters.length > 0 && !loading && (
          <div className="pagination">
            <button
              className="page-btn"
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
            >
              Назад
            </button>

            <div className="page-info">
              <span className="current-page">{page}</span>
            </div>

            <button className="page-btn" onClick={() => setPage((p) => p + 1)}>
              Вперед
            </button>
          </div>
        )}
      </div>

      {selectedCharacter && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}></button>

            <h2> Полный обьект персонажа </h2>

            <div className="json-container">
              <pre>{JSON.stringify(selectedCharacter, null, 2)}</pre>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App
