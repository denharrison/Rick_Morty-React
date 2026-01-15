const Header = ({onChange}) => {

    return (
      <>
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
              onChange={onChange}
            />
            <div className="search-glow"></div>
          </div>
        </header>

      </>
    );
}

export default Header 