import { Button, Wrapper } from '../components';
import { getSectionAnimation } from '../animations';
import { contactSection } from '../utils/portfolio';

const Contact = () => {
  const { subtitle, title, paragraphs, link } = contactSection;
  return (
    <Wrapper
      id="contact"
      className='bg-gradient-left !py-16 md:!py-24 mb-20 md:mb-32'
      {...getSectionAnimation}
      >
      <div
      className="max-w-xl mx-auto text-center  "
      >

      <p className="text-accent text-sm capitalize mb-3 font-mono">
        {subtitle}
      </p>
      <h2 className="heading-secondary !mb-5">{title}</h2>

      {paragraphs.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}

      <Button type="link" size="lg" href={link} center className="mt-12">
        Let's Connect
      </Button>
      </div>

    </Wrapper>
  );
};

export default Contact;
