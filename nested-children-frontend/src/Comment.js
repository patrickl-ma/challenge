import { useState } from "react";

const Comment = ({
  id,
  author,
  text,
  date,
  likes,
  image,
  parent,
  children,
  isAdmin,
}) => {
  const [editedText, setEditedText] = useState(text);
  return (
    <div key={id} className="rounded-lg shadow-md p-4">
      <div>
        <div className="text-4xl">{author}</div>
        {isAdmin ? (
          <textarea
            value={editedText}
            className="w-full"
            onChange={(e) => setEditedText(e.target.value)}
          ></textarea>
        ) : (
          <div>{text}</div>
        )}
        <div>
          <img src={image}></img>
        </div>
        <div className="flex flex-row place-content-between">
          <div>{likes} ❤️</div>
          <div>{date}</div>
          {isAdmin && (
            <button className="bg-blue-500 text-white p-2 rounded">Save</button>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4 relative left-3">
        {children.map(({ id, author, text, date, likes, image, parent, children }) => {
          return (
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
          );
        })}
      </div>
    </div>
  );
};

export default Comment;
