import { useEffect, useState } from "react";
import "./App.css";
import Comment from "./Comment";
import data from "./data"

const {comments} = data



const addCommentToDictionary = (dict, comment) => {
  dict[comment.id] = comment;
  return dict;
};



const getTopLevelComments = (comments) => {
  comments.forEach((comment) => (comment.children = {}));
  const commentsDict = comments.reduce(addCommentToDictionary, {});
  const mapChild = (comment) => {
    if (comment.parent) {
      const parent = commentsDict[comment.parent];
      parent.children[comment.id] = comment;
    }
  };
  comments.forEach(mapChild);
  return comments.filter((comment) => !comment.parent);
};

const topLevelComments = getTopLevelComments(comments)
const topLevelDict = topLevelComments.reduce(addCommentToDictionary, {})
console.log(topLevelDict)

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [topLevelComments, setTopLevelComments] = useState([]);

  return (
    <div>
      <div className="bg-gray-100 h-10 sticky top-0">
        <input
          type="checkbox"
          value={isAdmin}
          onClick={() => setIsAdmin(!isAdmin)}
        />
        <div>Admin Mode?</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-10/12 flex flex-col gap-4">
          {topLevelComments.map(
            ({ id, author, text, date, likes, image, parent, children }) => (
              <Comment
                id={id}
                author={author}
                text={text}
                date={date}
                likes={likes}
                image={image}
                parent={parent}
                children={children}
                isAdmin={isAdmin}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
