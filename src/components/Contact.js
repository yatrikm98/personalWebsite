import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";

const Contact = () => {
    return (
        <div id='contact' className="flex flex-col justify-center items-center">
            <div className="text-2xl text-blue-600">⭐Search Me</div>
            <div className="flex mt-5">
                <a href='https://www.linkedin.com/in/yatrikmehta82/' rel="noreferrer" target="_blank">
                    <AiFillLinkedin className='h-16 w-16 text-black mr-5' />
                </a>
                <a href= "https://www.instagram.com/mehtayatrik/" rel="noreferrer" target="_blank">
                    <AiFillInstagram className='h-16 w-16 text-black mr-5' />
                </a>
                <a href="https://github.com/yatrikm98" rel="noreferrer" target="_blank">
                    <AiFillGithub className='h-16 w-16 text-black ' />
                </a>

            </div>
        </div>
    )
}

export default Contact;

