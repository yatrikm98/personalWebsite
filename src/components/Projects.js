import ProjectBlock from "./ProjectBlock";
const Projects = () => {

    const projects = [{
        imageUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2JhZGIyMzUzNGI3MWNiNmFjODdhMjg3ZmQwYWRlYjliZjVlZTY1MiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/8y5PXRNoddktX66S1m/giphy.gif",
        title: "Face Detection App",
        description: "This app has a Face Detection App by Clarifai with an entry counter, user registration and log in authentication without OAuth.",
        badges: ["React", "API", "PostgreSQL", "Node", "Express", "Render"],
        liveUrl: "https://myapp-6es1.onrender.com/",
        githubUrl: "https://github.com/yatrikm98/frontendfacedetection"
    },
    {
        imageUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGIxM2M2M2ZmNDhlODg2ZDQ5ZjQ1NDM1NmI4NDk0ZDNiYTk1ZTk1YyZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/ePHSCQcPqU0ThUxvrN/giphy.gif",
        title: "Personal Portfolio",
        description: "My personal portfolio is a single page app to show about me, my skills, and personal projects.",
        badges: ["React", "Tailwind CSS"],
        githubUrl: "https://github.com/yatrikm98/personalWebsite"
    }
    ]


    const renderedProjects = projects.map((project) => {
        return <ProjectBlock key={project.title} project={project} />
    })

    return (

        <div className="flex justify-center mt-10">
            <section className="w-7/12">
                <div id="projects" className="text-2xl p-2 text-blue-600">⭐Projects</div>
                <div>{renderedProjects}</div>
                <div> Note : There are other multiple projects as well that are uploaded on my Github account. One can go through and visit.</div>
            </section>
        </div>
    )
}

export default Projects;