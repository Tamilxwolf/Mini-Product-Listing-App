import Title from '../components/Title'
import { assets } from '../assets/assets'

const contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>      

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>

        <img src={assets.contact_img} className='w-full md:max-w-[480px]' alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our store</p>
          <p className='text-gray-600'> 9879 chennai metro <br /> thambaram 76,chennai</p>
          <p className='text-gray-600'>Tel: (+91) 987-654-3210 <br /> Email: info@ourstore.com</p>
          <p className='font-semibold text-xl text-gray-600'>Carears at Forever</p>
          <p className='text-gray-600'>If you are interested in working with us, please send your resume to <br /> <b className='text-blue-400'>info@ourstore.com</b></p>
          <button className='border border-black px-8 py-2 rounded-full hover:bg-black hover:text-white'>Explore Jobs</button>
        </div>

      </div>
    </div>
  ) 
}

export default contact