import { useState } from "react";
import { DEFAULT_REQUEST } from "./constants";

const handleSave = (text, commentId, refresh) => {
  const data = { text };
  fetch(`http://127.0.0.1:8000/comments/${commentId}/`, {
    ...DEFAULT_REQUEST,
    method: "POST",
    body: JSON.stringify(data),
  }).then(() => refresh());
};

const handleDelete = (commentId, refresh) => {
  fetch(`http://127.0.0.1:8000/comments/${commentId}/`, {
    ...DEFAULT_REQUEST,
    method: "DELETE",
  }).then(() => refresh());
};

const Comment = ({
  id,
  author,
  text,
  date,
  likes,
  image,
  allowEdits,
  refresh,
}) => {
  const [editedText, setEditedText] = useState(text);
  return (
    <li className="p-4 w-9/12 rounded-lg shadow flex flex-col gap-4">
      <div className="text-4xl">{author}</div>
      {!allowEdits && <div>{text}</div>}
      {allowEdits && (
        <textarea
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        ></textarea>
      )}
      <div>
        <img src={image} />
      </div>
      <div className="flex flex-row place-content-between">
        <div className="text-gray-500">{date}</div>
        <div className="text-gray-500">{likes}❤️</div>
        {allowEdits && (
          <button
            className="bg-blue-500 text-white rounded p-2 shadow hover:shadow-lg"
            onClick={() => handleSave(editedText, id, refresh)}
          >
            Save
          </button>
        )}
        {allowEdits && (
          <button
            className="bg-blue-500 text-white rounded p-2 shadow hover:shadow-lg"
            onClick={() => handleDelete(id, refresh)}
          >
            Delete
          </button>
        )}
      </div>
    </li>
  );
};

export default Comment;
