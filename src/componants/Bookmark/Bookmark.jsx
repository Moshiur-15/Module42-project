const Bookmark = ({bookmark}) => {
    return (
        <div>
            <h3 className='bg-white my-2 p-4 rounded-lg'>{bookmark.title}</h3>
        </div>
    );
};

export default Bookmark;