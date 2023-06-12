import yatrik from '../../assets/Yatrik_02.jpg'
import './Hero.css'
const Hero = () => {

    return (
        <div className="h-screen flex justify-center items-center">
            <div className='mr-8 hero-1'>
                <p className='text-lg'> 👋 Hi,My name is </p>
                <p className='font-sacramento font-bold text-5xl'>Yatrik Mehta</p>
                <p className='text-lg'>I am a Software Developer from India,</p>
                <p className='text-lg'>focused on building tools to help people work better.</p>
            </div>
            <div className='hero-2 '>
                <img src={yatrik} alt='No Pics'  className='rounded-full'/>
            </div>
        </div>
    )
}

export default Hero;