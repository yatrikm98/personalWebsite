const About = () => {
    return (
        <div id="about" className="flex justify-center">
            <section className="about">
                <div  className="text-2xl p-2 text-blue-600">⭐ About ME</div>
                 <div className="h-0.5 bg-blue-400 "></div>
                <p className="mt-3">
                    Worked in Textile Industry for a year
                    as a Marketing Executive.
                    After working there, I found my new passion in
                    the world of software.
                </p>
                <p>
                    I realized that
                    marketing wasn't
                    for me and wanted a more challenging
                    role where I had to keep constantly learning.
                    Impatient to learn, I started my self-taught
                    coding journey using with the help of Udemy.
                </p>
                <p >
                    I thrive at the constant learning and solving problems through
                    code to make a positive impact in people's lives. From my
                    professional experience, I offer empathy, attention to
                    details, and teamwork.
                </p>
                
                <p className="text-xl p-2 text-blue-600">Hobbies And Interests: </p>
                <ul className="flex">
                    <li className="px-4 text-lg bg-blue-900 rounded-md text-white mr-1">Chess</li>
                    <li className="px-4 text-lg bg-blue-900 rounded-md text-white mr-1">Carrom</li>
                    <li className="px-4 text-lg bg-blue-900 rounded-md text-white">Cricket</li>
                </ul>
                <p >
                   <p className="text-xl p-2 text-blue-600"> Developer Skills :</p>
                    <ul className="flex flex-wrap">
                        <li className="px-3 text-lg bg-blue-900 rounded-md text-white mr-1 ">JavaScript</li>
                        <li className="px-3 text-lg bg-blue-900 rounded-md text-white mr-1">HTML/CSS</li>
                        <li className="px-3 text-lg bg-blue-900 rounded-md text-white mr-1">React</li>
                        <li className="px-3 text-lg bg-blue-900 rounded-md text-white mr-1">Redux</li>
                        <li className="px-3 text-lg bg-blue-900 rounded-md text-white mr-1">Tailwind</li>
                        <li className="px-3 text-lg bg-blue-900 rounded-md text-white mr-1">Express</li>
                        <li className="px-3 text-lg bg-blue-900 rounded-md text-white mr-1">Node</li>
                        <li className="px-3 text-lg bg-blue-900 rounded-md text-white mr-1 mt-1">PostgreSql</li>
                    </ul>
                </p>
            </section>
        </div>
    )
}
export default About;