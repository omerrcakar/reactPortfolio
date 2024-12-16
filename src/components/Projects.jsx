import { PROJECTS } from "../constants"


const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">
            Projects
        </h2>
        <div>
            {PROJECTS.map((project, index) => (
                <div 
                    key={index} 
                    className="mb-8 flex flex-wrap lg:justify-center lg:gap-6"
                >
                    {/* Resim Alanı */}
                    <div className="w-full lg:w-1/4 flex justify-center">
                        <div className="mb-6 overflow-hidden rounded aspect-square max-w-[170px]">
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Açıklama Alanı */}
                    <div className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold">{project.title}</h6>
                        <p className="mb-4 text-neutral-400">{project.description}</p>
                        {project.technologies.map((tech, index) => (
                            <span 
                                key={index} 
                                className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-200"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects

