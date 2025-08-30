import skeleton from '../../assets/svg/skeleton.svg';

const Layout = ({children}) => {
  return (
    <div className='relative'>
      <img src={skeleton} alt='skeleton' className='' />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
