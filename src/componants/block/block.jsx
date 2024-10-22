import { FaBookmark } from "react-icons/fa";

const Block = ({ blog, handleAddToBookmark , handleReadingTime}) => {
  // console.log(blog)
  const { cover, title, author, author_img ,reading_time,posted_date,hashtags} = blog;
  return (
    <div className="">
      {/* card image part */}
      <div>
        <img className="rounded-lg" src={cover} alt="" />
      </div>
      {/* card text part */}
      <div className="border-b-2 my-5">
        <div className="flex justify-between items-center">
            {/* picture of the person posting  */}
            <div className="flex items-center">
                <img className="w-14 mr-5" src={author_img} alt="" />
                <div>
                    <h2 className="text-xl font-bold">{author}</h2>
                    <p>{posted_date}</p>
                </div>
            </div>
            {/* icons part */}
            <div className="flex items-center">
                <span className="text-xl mr-3">{reading_time}  min read </span>
                <button className="hover:text-blue-500 hover:shadow-blue-500/50 text-blue-200" onClick={()=>handleAddToBookmark(blog)}><FaBookmark></FaBookmark></button>
            </div>
        </div>
        <h2 className="text-4xl font-semibold my-5">{title}</h2>
        <p>
            {
                hashtags.map((hash, inx)=> <span key={inx}><a className="mr-2" href="">#{hash}</a></span>)
            }
        </p>
        {/* Mask as read button declare */}
        <button onClick={()=>handleReadingTime(reading_time)} className="underline text-blue-500 mb-8">Mask as read</button>
      </div>
    </div>
  );
};

export default Block;
