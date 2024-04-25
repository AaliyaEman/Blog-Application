import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
const About = () => {
  return (
    <div className=' bg-black'>
      <h1 className=' text-white pt-10 text-5xl pl-8 font-PlayfairDisplay'>Everyone has a </h1>
      <h1 className=' text-white pt-4 text-5xl pl-8'>a story to tell. </h1>
      <p className='text-white pt-12 pl-8 text-justify'>
        Medium is a home for human stories and ideas.<br/>
        Here, anyone can share insightful perspectives,<br/>
        useful knowledge, and life wisdom with the world-<br/>without
         building a mailing list or a following first. The<br/>
          internet is noisy and chaotic; Medium is quiet yet<br/>
           full of insight. It’s simple, beautiful, collaborative,<br/>
            and helps you find the right audience for whatever<br/> you have
             to say.</p>
         

             <p className='text-white pt-12 pl-8 text-justify'>
             We believe that what you read and write matters.<br/>
              Words can divide or empower us, inspire or discourage<br/>
               us. In a world where the most sensational and surface-<br/>
               level stories often win, we’re building a system that<br/>
                rewards depth, nuance, and time well spent. A space for <br/>
                thoughtful conversation more than drive-by takes, and<br/>
                 substance over packaging.
                </p>

                <p className='text-white pt-12 pl-8 text-justify'>

                Ultimately, our goal is to deepen our collective<br/>
                 understanding of the world through the power of<br/>
                  writing.
                </p>

                
                <p className='text-white pt-12 pl-8 text-justify'>

                Over 100 million people connect and share their wisdom<br/> on 
                Medium every month. Many are professional writers,<br/> but just 
                as many aren’t — they’re CEOs, computer scientists,<br/> U.S.
                 presidents, amateur novelists, and anyone burning with <br/>a story
                  they need to get out into the world. They write <br/>about what 
                  they’re working on, what’s keeping them up at <br/>night, what they’ve 
                  lived through, and what they’ve learned that<br/> the rest of us might
                   want to know too.
                </p>

                <p className='text-white pt-12 pl-8 text-justify'>


                Instead of selling ads or selling your data, we’re<br/>
                 supported by a growing community of . Dive deeper ,<br />
                 into whatever matters to you. Find a post that helps<br/>
                  you learn something new, or reconsider something familiar<br/>
                  —and then
                </p>
                
                <p className='text-white pt-8 pl-40 text-justify'>
                    Share your story.
                </p>

                <div className='pt-10'>
    

<button className='flex justify-between items-center text-xl text-white pl-6 pr-6 border-b border-t border-white h-20 w-screen'>
  <div className="flex items-center">
    <span>Start Reading</span>
  </div>
  <div>
    <FaArrowRight />
  </div>
</button>

<button className='flex justify-between items-center text-xl text-white pl-6 pr-6 border-b border-t border-white h-20 w-screen'>
  <div className="flex items-center">
    <span>Start Writing</span>
  </div>
  <div>
    <FaArrowRight />
  </div>
</button>

<button className='flex justify-between items-center text-xl text-white pl-6 pr-6 border-b border-t border-white h-20 w-screen'>
  <div className="flex items-center">
    <span>Become A Member</span>
  </div>
  <div>
    <FaArrowRight />
  </div>
</button>



</div>
                
    </div>
  )
}

export default About
