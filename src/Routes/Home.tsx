import "../Global.css";

type projectsProps = {
  name: string;
  imageClass: string;
  link: string;
};

const Home = () => {
  // Atribui o tipo correto ao array
  const projects: projectsProps[] = [
    {
      name: "fylo",
      imageClass: "bg-custom-image",
      link: "https://paulo-borges.github.io/fylo/",
    },
    {
      name: "extension",
      imageClass: "bg-custom-image1",
      link: "https://paulo-borges.github.io/extensionBrowser/",
    },
    {
      name: "inwood",
      imageClass: "bg-custom-image2",
      link: "https://paulo-borges.github.io/inwood/",
    },
  ];

  return (
    <div>
      <h1>Meus Projetos</h1>
      {/* Usa o .map() para iterar e renderizar cada projeto */}
      {projects.map((project, index) => (
        // É importante ter uma `key` única para cada item em listas
        <div key={index}>
          <h2>{project.name}</h2>
          <div className={project.imageClass}></div>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            Ver Projeto
          </a>
        </div>
      ))}
    </div>
  );
};

export default Home;
