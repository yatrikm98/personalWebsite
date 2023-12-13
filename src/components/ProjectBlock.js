const ProjectBlock = ({ project }) => {
    const { title, imageUrl, description, badges, liveUrl, githubUrl } = project
    return (
        <div className=" flex project mt-3">
            <div className="mr-5 flex items-center h-52">
                <img src={imageUrl} alt="No Pics" className="h-48 w-80 rotate-img border-2 border-black rounded" />
            </div>
            <div className="h-44 w-96">
                <p className="mb-3 text-xl text-blue-600">{title}</p>
                <p>{description}</p>
                <div className="flex mt-4">
                    {badges.map((badge) => {
                        return <div className="mr-1 bg-blue-900 rounded-md text-white text-lg">{badge}</div>
                    })}
                </div>
                <div className="flex mt-5 ">
                    <button className="mr-4"><a href={liveUrl} rel="noreferrer" target="_blank" className="bg-indigo-500 text-xl text-white project-a">See Live</a></button>
                    <button><a href={githubUrl} rel="noreferrer" target="_blank" className="text-xl text-white project-a">Code</a></button>
                </div>
            </div>
            
        </div>
    )
}

export default ProjectBlock;