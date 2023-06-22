import React from 'react'
import { useSelector } from 'react-redux'
import HomeCard from '../components/HomeCard';

const Home = () => {
  const {posts} = useSelector(state => state.posts);
  console.log("posts", posts);

  return (
    <div className='flex items-center m-5 flex-wrap bg-violet-300'>
      {
        posts.length > 0 && posts?.map((post, i) => (
          <HomeCard key={i} post={post} />
        ))
      }
    </div>
  )
}

export default Home