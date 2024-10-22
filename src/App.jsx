import { useState } from "react";
import "./App.css";
import Blogs from "./componants/blogs/blogs";
import Bookmarks from "./componants/bookmarks/bookmarks";
import Header from "./componants/Header/Header";

function App() {
  // bookmark useState
  const [bookmarks, setBookmarks] = useState([]);
  const handleAddToBookmark = (blog) => {
    setBookmarks([...bookmarks, blog]);
  };

  // read time useState
  const [readingTime, setReadingTime] = useState(0);
  const handleReadingTime = (time) => {
    setReadingTime(readingTime + time);
  };

  return (
    <div>
      <div className="container mx-auto">
        <Header></Header>
      </div>
      <div className="flex justify-between my-8 container mx-auto">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleReadingTime={handleReadingTime}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </div>
  );
}

export default App;
