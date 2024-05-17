import { Spinner } from "phosphor-react";
import { useProjectData } from "../../hooks/useProjectData";
import { Card } from "../Card";

export function Project() {


  const { data, isFetching} = useProjectData();

  return (
    <section
      className="mx-auto lg:max-w-6xl xl:max-w-7xl my-12 space-y-6 p-5"
    >
      <div className="text-center" id="projects">
        <span className="text-green-900 text-base font-MontSerrat font-light line uppercase tracking-widest">Projetos</span>
        <h3 className="dark:text-primary text-light-800 font-Poppins font-black text-3xl laptop:text-2xl text-center">
          Meus projetos!
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-6">
        
            {isFetching &&  <span className="absolute middle-[50%] left-[50%] transform: translate-x-[-50%] translate-y-[-50%]"><Spinner className="transition-all duration-200 animate-spin-slow" width={48} height={48}/></span>}
          
            {data?.data.map((project) => (
                <Card
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                repositoryUrl={project.repositoryUrl}
                liveUrl={project.liveUrl}
              />
            ))}
      </div>
    </section>
  );
}
