import React, { useEffect, useRef, useState } from 'react'
import Navbar from '@/Components/Navbar';

import HeartIcon from '@mui/icons-material/Favorite';
import CollectionIcon from '@mui/icons-material/CollectionsRounded';
import EmailIcon from '@mui/icons-material/EmailRounded';
import DocIcon from '@mui/icons-material/ArticleRounded';

import MainPage from '@/Pages/MainPage'
import Topbar from '@/Components/Topbar';
import Collection from '@/Pages/Collection';
import MessagePage from '@/Pages/MessagePage';
import ProfilePage from '@/Pages/ProfilePage';
import Lock from '@/Components/Lock';

const routers = [
  {
    path: 'Main',
    page: <MainPage />,
    icon: <HeartIcon className='text-black text-xl' />
  }, {
    path: 'Profiles',
    page: <ProfilePage />,
    icon: <DocIcon className='text-black text-xl' />
  }, {
    path: 'Gallery',
    page: <Collection />,
    icon: <CollectionIcon className='text-black text-xl' />
  }, {
    path: 'Thank you ♥',
    page: <MessagePage />,
    icon: <EmailIcon className='text-black text-xl' />
  }
]

function App() {

  const [page, setPage] = useState(0);
  const [unlock, setUnlock] = useState(false);

  if (!unlock) return (
    <div className={`p-3 w-screen min-h-screen flex flex-col justify-start items-center bg-white`}>
      <Lock onSubmit={() => setUnlock(true)} />
    </div>
  )

  return (
    <div className={`p-3 w-screen min-h-screen flex flex-col justify-start items-center bg-white`}>
      <Topbar label={routers[page].path} />
      {routers[page].page}
      <Navbar routers={routers} onChage={(p) => setPage(p)} />
    </div>
  )
}

export default App
