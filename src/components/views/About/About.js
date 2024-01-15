import { forwardRef } from "react";

const About = forwardRef((_, ref) => {
  return <section ref={ref}>hello</section>;
});

About.displayName = "About";

export default About;
