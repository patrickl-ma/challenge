import { useState } from "react";
import "./App.css";
import data from "./data";
import Comment from "./Comment";

const CommentList = ({
  id,
  author,
  text,
  date,
  likes,
  image,
  children,
  commentObj,
}) => {
  console.log(commentObj, id, children);
  return (
    <div>
      {" "}
      <Comment
        key={id}
        id={id}
        author={author}
        text={text}
        date={date}
        likes={likes}
        image={image}
        allowEdits={true}
        refresh={null}
      />
      <div className="relative left-8">
        {children.map((child) => {
          const { id, author, text, date, likes, image, children } =
            commentObj[child];
          return (
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
          );
        })}
      </div>
    </div>
  );
};

export default CommentList;
