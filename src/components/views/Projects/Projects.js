import { forwardRef } from "react";

const Projects = forwardRef((_, ref) => {
  return <section ref={ref}>hello</section>;
});

Projects.displayName = "Projects";

export default Projects;
