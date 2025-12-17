import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            <div>
                <img src={assets.logo} alt="Logo" className='mb-5 w-32' />
                <p className='w-full md:w-2/3 text-gray-600'> Est tempora repudiandae temporibus nobis voluptatum aperiam explicabo aliquid inventore quidem quae ducimus necessitatibus Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate itaque earum libero quos, officia dicta in ipsam aut cum adipisci a, tempore repudiandae optio consequuntur eligendi beatae nihil quod quis.
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul>
                    <li className='mb-2'><a href="#" className='text-gray-600 hover:text-black'>About Us</a></li>
                    <li className='mb-2'><a href="#" className='text-gray-600 hover:text-black'>Careers</a></li>
                    <li className='mb-2'><a href="#" className='text-gray-600 hover:text-black'>Our Team</a></li>
                    <li className='mb-2'><a href="#" className='text-gray-600 hover:text-black'>Contact Us</a></li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>CONTACT</p>
                <ul>
                    <li className='mb-2'><a href="#" className='text-gray-600 hover:text-black'>tamizhlove8@gmail.com</a></li>
                    <li className='mb-2'><a href="#" className='text-gray-600 hover:text-black'>+91 9629157712</a></li>
                    <li className='mb-2'><a href="#" className='text-gray-600 hover:text-black'>Lorem ipsum dolor sit amet</a></li>
                </ul>
            </div>

        </div>
    </div>
  )
}

export default Footer