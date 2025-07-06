import gamestackTexture2Large from '~/assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from '~/assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from '~/assets/gamestack-list.jpg';
import gamestackTextureLarge from '~/assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import gamestackTexture from '~/assets/gamestack-login.jpg';
import sliceTextureLarge from '~/assets/slice-app-large.jpg';
import sliceTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceTexture from '~/assets/slice-app.jpg';
import sprTextureLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from '~/assets/spr-lesson-builder-dark.jpg';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';
import image from "~/assets/image.png";
import marine from "~/assets/marine.png";
import Onestop from "~/assets/Onestop.png";
import OnestopChat from "~/assets/OnestopChat.png";
import HRMS from "~/assets/HRMS.png";
import backgroundCV1 from '~/assets/backgorundCV1.png';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Software Engineer',
    description: `Design portfolio of ${config.name} — a product designer working on web & mobile apps with a focus on motion, experience design, and accessibility.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

//     const indicatorObserver = new IntersectionObserver(
//       ([entry]) => {
//         setScrollIndicatorHidden(!entry.isIntersecting);
//       },
//       { rootMargin: '-100% 0px 0px 0px' }
//     );

//     sections.forEach(section => {
//       sectionObserver.observe(section.current);
//     });

//     indicatorObserver.observe(intro.current);

//     return () => {
//       sectionObserver.disconnect();
//       indicatorObserver.disconnect();
//     };
//   }, [visibleSections]);

//   return (
//     <div className={styles.home}>
//       <Intro
//         id="intro"
//         sectionRef={intro}
//         scrollIndicatorHidden={scrollIndicatorHidden}
//       />
//       <ProjectSummary
//         id="project-1"
//         sectionRef={projectOne}
//         visible={visibleSections.includes(projectOne.current)}
//         index={1}
//         title="Designing the future of education"
//         description="Designing a platform to help educators build better online courseware"
//         buttonText="View project"
//         buttonLink="/projects/smart-sparrow"
//         model={{
//           type: 'laptop',
//           alt: 'Smart Sparrow lesson builder',
//           textures: [
//             {
//               srcSet: `${sprTexture} 1280w, ${sprTextureLarge} 2560w`,
//               placeholder: sprTexturePlaceholder,
//             },
//           ],
//         }}
//       />
//       <ProjectSummary
//         id="project-2"
//         alternate
//         sectionRef={projectTwo}
//         visible={visibleSections.includes(projectTwo.current)}
//         index={2}
//         title="Video game progress tracking"
//         description="Design and development for a video game tracking app built in React Native"
//         buttonText="View website"
//         buttonLink="https://gamestack.hamishw.com"
//         model={{
//           type: 'phone',
//           alt: 'App login screen',
//           textures: [
//             {
//               srcSet: `${gamestackTexture} 375w, ${gamestackTextureLarge} 750w`,
//               placeholder: gamestackTexturePlaceholder,
//             },
//             {
//               srcSet: `${gamestackTexture2} 375w, ${gamestackTexture2Large} 750w`,
//               placeholder: gamestackTexture2Placeholder,
//             },
//           ],
//         }}
//       />
//       <ProjectSummary
//         id="project-3"
//         sectionRef={projectThree}
//         visible={visibleSections.includes(projectThree.current)}
//         index={3}
//         title="Biomedical image collaboration"
//         description="Increasing the amount of collaboration in Slice, an app for biomedical imaging"
//         buttonText="View project"
//         buttonLink="/projects/slice"
//         model={{
//           type: 'laptop',
//           alt: 'Annotating a biomedical image in the Slice app',
//           textures: [
//             {
//               srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
//               placeholder: sliceTexturePlaceholder,
//             },
//           ],
//         }}
//       />
//       <Profile
//         sectionRef={details}
//         visible={visibleSections.includes(details.current)}
//         id="details"
//       />
//       <Footer />
//     </div>
//   );
// };

const indicatorObserver = new IntersectionObserver(
  ([entry]) => {
    setScrollIndicatorHidden(!entry.isIntersecting);
  },
  { rootMargin: '-100% 0px 0px 0px' }
);

sections.forEach(section => {
  sectionObserver.observe(section.current);
});

indicatorObserver.observe(intro.current);

return () => {
  sectionObserver.disconnect();
  indicatorObserver.disconnect();
};
}, [visibleSections]);

return (
  <div className={styles.home}>
    <Intro
      id="intro"
      sectionRef={intro}
      scrollIndicatorHidden={scrollIndicatorHidden}
    />

    <ProjectSummary
      id="project-1"
      sectionRef={projectOne}
      visible={visibleSections.includes(projectOne.current)}
      index={1}
      title="AI-powered HRMS System"
      description="A smart HR assistant built with LLMs to handle leave queries, document search, and onboarding. Integrated with FastAPI, MongoDB, Redis, and Azure AI for seamless workflow automation and real-time employee support."
      buttonText="View Project"
      buttonLink="/projects/ai"
      model={{
        type: 'laptop',
        alt: 'HRMS AI Assistant UI',
        textures: [
          {
            srcSet: `${HRMS} 1280w, ${HRMS} 2560w`,
            placeholder: sprTexturePlaceholder,
          },
        ],
      }}
    />

    <ProjectSummary
      id="project-2"
      alternate
      sectionRef={projectTwo}
      visible={visibleSections.includes(projectTwo.current)}
      index={2}
      title="Multimodal Marine Assistant"
      description="An AI-powered assistant for marine engineers using OCR-parsed documents, real-time image uploads, and a domain-specific RAG system trained on proprietary marine data and a context-aware model with memory for accurate and multimodal responses."
      buttonText="Explore Project"
      buttonLink="/projects/marine"
      model={{
        type: 'phone',
        alt: 'Marine assistant system preview',
        textures: [
          {
            srcSet: `${Onestop} 250w, ${Onestop} 350w`,
            placeholder: Onestop,
          },
          {
            srcSet: `${OnestopChat} 975w, ${OnestopChat} 1050w`,
            placeholder: OnestopChat,
          },
        ],
      }}
    />

    <ProjectSummary
      id="project-3"
      sectionRef={projectThree}
      visible={visibleSections.includes(projectThree.current)}
      index={3}
      title="AI-Powered Proctoring & Cheating Detection System"
      description="A comprehensive real-time and post-exam vigilance engine leveraging AI and Computer Vision. The system processes webcam/CCTV feeds using YOLOv8 for object detection (e.g., phones, books), pose and eye tracking for behavioral cues, and dynamically generates PDF-based incident reports. Enabled robust exam monitoring through live alerts and post-exam audit tools, ensuring fairness and minimizing human supervision overhead.

"
      buttonText="See CV Projects"
      buttonLink="/projects/vision"
      model={{
        type: 'laptop',
        alt: 'Exam proctoring system UI',
        textures: [
          {
            srcSet: `${backgroundCV1} 800w, ${backgroundCV1} 1920w`,
            placeholder: sliceTexturePlaceholder,
          },
        ],
      }}
    />

    <Profile
      sectionRef={details}
      visible={visibleSections.includes(details.current)}
      id="details"
    />
    <Footer />
  </div>
);
};
