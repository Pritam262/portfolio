import Circles from '../../components/Circles'
import {BsArrowRight} from 'react-icons/bs'
import { motion } from 'framer-motion';
import {fadeIn} from '../../variants'
const Contact = () => {
  return <div className='h-full bg-primary/30 '>
    <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
      {/* text & form */}
      <div className="flex flex-col w-full max-w-[700px]">
        {/* text */}
        <motion.h2 variants={fadeIn('up', 0.2)} animate="show" initial='hidden'  exit='hidden' className='h2 text-center mb-5 md:text-[25px]'>Let&apos;s <span className='text-accent'>connect.</span></motion.h2>
        <motion.h2 variants={fadeIn('up', 0.2)} animate="show" initial='hidden'  exit='hidden' className='h2 text-center mb-5 md:text-[25px]'><span>pritam@pritamjana.com</span></motion.h2>
        {/* contact form */}
        <motion.form variants={fadeIn('right', 0.2)} animate="show" initial='hidden'  exit='hidden' className='flex-1 flex flex-col gap-1 w-full mx-auto'>
          {/* imput group */}
          <div className="flex flex-col xl:flex-row gap-x-2 w-full ">
            <input type="text" name="name" id="" placeholder='Enter your name' className='input my-2' autoComplete='off'/>
            <input type="text" name="email" id="" placeholder='Enter your email' className='input my-2' autoComplete='off'/>
           
              </div>
              <input type="text" name="subject" id="" placeholder='Subject' className='w-full input my-2'/>
           
            
              <textarea name="message" id=""  placeholder='message' className='textarea'></textarea>
              <button className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group '>
                <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Let&apos;s talk</span>
                <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]'/>
              </button>
        </motion.form>
      </div>
    </div>
  </div>;
};

export default Contact;
