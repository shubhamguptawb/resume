import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button, ProjectCard, Wrapper } from '@/components';
import { PROJECTS_INITIALLY } from '@/utils/config';
import { sortByYear } from '@/utils/helper';
import { getSectionAnimation, projectVariants } from '@/animations';
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from '@/config/firebase'
import { ProjectType } from '@/types';
const Projects = () => {

  const [showMore, setShowMore] = useState(false);
  const title = 'My Projects'
  const [projects, setProjects] = useState<ProjectType[]>([])

  useEffect(() => {
    const q = query(collection(db, "projects"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const data: ProjectType[] = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data() as ProjectType);
      });

      setProjects(data)
    });

  }, [])


  const topProjects = projects.slice(0, PROJECTS_INITIALLY);

  const visibleProjects = showMore ? projects : topProjects;

  return (
    <Wrapper id="projects" animate={false} className='bg-gradient-right'>
      <div className='mx-auto max-w-[60rem] px-6 md:px-0'>

        <motion.h2
          {...getSectionAnimation}
          className="heading-secondary text-center !mb-12 "
        >
          {title}
        </motion.h2>
        <div className="grid grid-cols-auto-250 xs:grid-cols-auto-300 gap-6 place-items-center">
          {sortByYear(visibleProjects).map((project, i) => {
            if (i < PROJECTS_INITIALLY) {
              return (
                <ProjectCard
                  {...project}
                  key={project.id}
                  variants={projectVariants}
                  initial="hidden"
                  whileInView="show"
                  custom={i}
                // viewport={{ once: true }}
                />
              );
            }

            return (
              <ProjectCard
                {...project}
                key={project.id}
                variants={projectVariants}
                initial="hidden"
                animate="show"
                custom={i - PROJECTS_INITIALLY}
              />
            );
          })}
        </div>
        {projects.length > PROJECTS_INITIALLY && (
          <Button
            size="lg"
            className="!mt-20"
            center
            onClick={() => setShowMore((prev) => !prev)}
          >
            {showMore ? 'show less' : 'show more'}
          </Button>
        )}
      </div>
    </Wrapper>
  );
};

export default Projects;
