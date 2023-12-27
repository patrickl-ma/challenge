import { useState } from "react";
import "./App.css";
import Comment from "./Comment";

const App = () => {
  const [comments, setComments] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLoadData = () => {
    fetch("http://127.0.0.1:8000/comments/")
      .then((response) => response.json())
      .then((json) => setComments(json));
  };

  const handleCreateNewUser = () => {
    fetch("http://127.0.0.1:8000/comments/", { method: "POST" }).then(() =>
      handleLoadData()
    );
  };

  return (
    <div className="App">
      <div className="flex flex-row gap-4 rounded p-2 bg-gray-100 sticky top-0">
        <button
          className="bg-blue-500 text-white rounded p-2 shadow hover:shadow-lg"
          onClick={handleLoadData}
        >
          Load Data
        </button>
        <div className="p-2">
          <input
            value={isAdmin}
            onClick={() => setIsAdmin(!isAdmin)}
            type="checkbox"
          />
          Admin Mode
        </div>
        {isAdmin && (
          <button
            className="bg-blue-500 text-white rounded p-2 shadow hover:shadow-lg"
            onClick={handleCreateNewUser}
          >
            Add user
          </button>
        )}
      </div>
      <ol className="flex flex-col items-center gap-4">
        {comments.map(({ id, author, text, date, likes, image }) => (
          <Comment
            key={id}
            id={id}
            author={author}
            text={text}
            date={date}
            likes={likes}
            image={image}
            allowEdits={isAdmin}
            refresh={handleLoadData}
          />
        ))}
      </ol>
    </div>
  );
};

export default App;
