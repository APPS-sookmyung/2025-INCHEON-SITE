import Icon from '../components/mainpage/icon';
import Layout from '../components/mainpage/layout';

const MainPage = () => {
  return (
    <div className='relative flex justify-center'>
      <Layout>
        <Icon
          id='b1'
          className='aboslute float-left z-1000 top-0 left-0'
          width='140'
          height='140'
        />
      </Layout>
    </div>
  );
};

export default MainPage;
