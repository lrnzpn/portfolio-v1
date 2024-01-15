import { forwardRef } from "react";

const Contact = forwardRef((_, ref) => {
  return <section ref={ref}>hello</section>;
});

Contact.displayName = "Contact";

export default Contact;
