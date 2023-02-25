import React from 'react';
import { UserStats, Repos, User, Search, Navbar } from '../components';
import loadingImage from '../images/preloader.gif';
import { GithubContext } from '../context/context';

const Dashboard = () => {
  const { isLoading } = React.useContext(GithubContext)!;
  // if (isLoading) {
  //   return (
  //     <main>
  //       <Navbar />
  //       <Search />
  //       <img src={loadingImage} alt='loading' className='loading-img' />
  //     </main>
  //   );
  // }

  return (
    <main>
      <Navbar />
      <Search />
      {isLoading ? (
        <img src={loadingImage} alt='loading' className='loading-img' />
      ) : (
        <>
          <UserStats />
          <User />
          <Repos />
        </>
      )}
    </main>
  );
};

export default Dashboard;
