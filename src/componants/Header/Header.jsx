import profile from '../../assets/images/boy1.png'
const Header = () => {
    return (
        <div className='flex items-center justify-between border-b-2 py-5'>
            <h2 className="text-3xl">Knowledge Cafe</h2>
            <img className='w-14' src={profile} alt="" />
        </div>
    );
};

export default Header;