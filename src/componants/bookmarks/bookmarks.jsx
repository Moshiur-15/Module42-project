import React from "react";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="w-1/3 border bg-gray-300 p-4">
      {/* reading time add title */}
      <h2 className="text-2xl font-bold text-center hover:outline-dotted outline-blue-800 bg-blue-100 text-blue-800 p-4 rounded-lg my-2">
        Reading Time : {readingTime}
      </h2>
      {/* Bookmarked Blogs add title  */}
      <h2 className="text-2xl font-bold text-center hover:outline-dotted outline-blue-800 bg-blue-100 text-blue-800 p-4 rounded-lg ">
        Bookmarked Blogs : {bookmarks.length}
      </h2>

      {/* # text */}
      {bookmarks.map((bookmark) => (
        <Bookmark bookmark={bookmark} key={bookmark.id}></Bookmark>
      ))}
    </div>
  );
};

export default Bookmarks;
