import clsx from 'clsx';
import { useState } from 'react'
import { Follow } from '../../components/Follow';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { News } from '../../components/News';
import { Post } from '../../components/Post';
import { ProfileArea } from '../../components/ProfileArea';
import { SearchBar } from '../../components/SearchBar';
import { SideMenu } from '../../components/SideMenu';
import { Spacer } from '../../components/Spacer';
import { TabBar } from '../../components/TabBar';
import { TermsOfService } from '../../components/TermsOfService';
import { Tweet } from '../../components/Tweet';

import '../../styles/global.css';

function ProfPage() {
  return (

    <div className="flex  flex-col h-2/3  overflow-hidden bg-white dark:bg-black ">
      <div className='grid grid-cols-4 '>
        <div className="flex justify-center">
          <SideMenu menuItemSelected={'Profile'} />
        </div>
        <div className='col-span-2 px-16 main-section-tweets scrollbar overflow-y-auto  h-screen' >
          <div className="border-x border-dark-7 dark:border-dark-4">
            <div className="flex flex-col gap-10 ">
              <Header page='Profile' />
              <ProfileArea />
              <TabBar />
            </div>            
            <Tweet textPost={'Lorem jqhswjuw wwjhcu ghj jkj.'} />
            <Tweet textPost={'Lorem jqhswjuw wwjhcu ghj jkj.'} />
          </div>
        </div>

        <div className='flex flex-col gap-6 items-center  px-14 py-3'>
          <SearchBar />
          <Follow />
          <News />
          <TermsOfService />

        </div>
      </div>
      <div className="h-28">
        <Footer />
      </div>
    </div>

  )
}

export default ProfPage;





