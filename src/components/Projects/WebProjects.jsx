import React from 'react';
import projects from '../../data/projects.json';
import styles from './Projects.module.css';
import { ProjectCard } from './ProjectCard';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

export const WebProjects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Web Projects💻</h2>
      <div className={styles.swiperWrapper}>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[Pagination, Navigation]}
          className={styles.projectsSwiper}
        >
          {projects.slice(6,8).map((project, id) => (
            <SwiperSlide key={id}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <div className={`swiper-button-prev ${styles.swiperButtonPrev}`}></div>
        <div className={`swiper-button-next ${styles.swiperButtonNext}`}></div> */}
      </div>
    </section>
  );
};
