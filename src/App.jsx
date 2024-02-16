import BookmarksList from "./components/BookmarksList.jsx";

function App() {
  return (
    <div className="app">
      <header className="app__header header">
        <h1 className="header__title">Application de partage de signets en React</h1>
      </header>
      <main className="app__main">
        <BookmarksList></BookmarksList>
      </main>
      <footer className="app__footer footer">
        footer
      </footer>
    </div>
  )
}

export default App;
