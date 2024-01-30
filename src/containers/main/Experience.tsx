import { motion } from 'framer-motion';
import { Tablist } from '../../components';
import { getSectionAnimation } from '../../animations';
import { experienceSection } from '../../utils/portfolio';

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="py-32 bg-gradient-left"
      {...getSectionAnimation}
    >
      <div className='mx-auto px-6 md:px-0 max-w-[60rem]'>

        <h2 className="heading-secondary">{experienceSection.title}</h2>

        <Tablist experiences={experienceSection.experiences} />
      </div>
    </motion.section>
  );
};

export default Experience;
