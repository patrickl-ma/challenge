import { useEffect, useState } from "react";
import "./App.css";
import data from "./data";
import Comment from "./Comment";
import CommentList from "./CommentList";

const commentsOutside = data.comments.sort(
  (objA, objB) => Number(objB.id) - Number(objA.id)
);

const App = () => {
  const [comments, setComments] = useState([]);
  const [topLevel, setTopLevel] = useState([]);
  const [commentObj, setCommentObj] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);
  const [searchText, setSearchText] = useState("");

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

  const getParentComment = (parentId) => {
    const { id, author, text, date, likes, image } = commentObj[parentId];
    return (
      <div className="bg-blue-500">
        <Comment
          id={id}
          author={author}
          text={text}
          date={date}
          likes={likes}
          image={image}
          allowEdits={false}
          refresh={null}
        />
      </div>
    );
  };

  useEffect(() => {
    const commentObjOutside = commentsOutside.reduce((acc, comment) => {
      comment.children = [];
      acc[comment.id] = comment;
      return acc;
    }, {});
    commentsOutside.forEach((comment) => {
      if (comment.parent)
        commentObjOutside[comment.parent].children.push(comment.id);
    });
    const topLevelOutside = commentsOutside.filter(
      (comment) => !comment.parent
    );
    setTopLevel(topLevelOutside);
    setComments(commentsOutside);
    setCommentObj(commentObjOutside);
  }, []);

  const matchingComments = commentsOutside.filter(({ text }) =>
    text.includes(searchText)
  );

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
        <input
          placeholder="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
      </div>
      {Object.keys(commentObj).length &&
        matchingComments.map(
          ({ id, author, text, date, likes, image, children, parent }) => {
            return (
              <div className="py-5 border-solid border-4">
                {parent && commentObj && getParentComment(parent)}
                <CommentList
                  key={id}
                  id={id}
                  author={author}
                  text={text}
                  date={date}
                  likes={likes}
                  image={image}
                  allowEdits={true}
                  refresh={null}
                  children={children}
                  commentObj={commentObj}
                />
              </div>
            );
          }
        )}
      {/* <ol className="flex flex-col items-center gap-4">
        {topLevel?.map(({ id, author, text, date, likes, image, children }) => (
          <CommentList
            key={id}
            id={id}
            author={author}
            text={text}
            date={date}
            likes={likes}
            image={image}
            allowEdits={isAdmin}
            refresh={handleLoadData}
            children={children}
            commentObj={commentObj}
          />
        ))}
      </ol> */}
    </div>
  );
};

export default App;
