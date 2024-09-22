import Feed from "@components/Feed";
import { Suspense } from "react";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> Prompts</span>
    </h1>
    <p className='desc text-center'>
    SharePrompts is an open-source platform for the modern world to discover, create, and share creative prompts.
    </p>

    <Suspense fallback={<div>Loading</div>}>
    <Feed />
    </Suspense>
    
  
  </section>
);

export default Home;
