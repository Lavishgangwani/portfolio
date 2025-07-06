import volkiharBackgroundLarge from '~/assets/volkihar-background-large.jpg';
import volkiharBackgroundPlaceholder from '~/assets/volkihar-background-placeholder.jpg';
import volkiharBackground from '~/assets/volkihar-background.jpg';
import volkiharBannerLarge from '~/assets/volkihar-banner-large.jpg';
import volkiharBannerPlaceholder from '~/assets/volkihar-banner-placeholder.jpg';
import volkiharBanner from '~/assets/volkihar-banner.jpg';
import volkiharBookLarge from '~/assets/volkihar-book-large.png';
import volkiharBookPlaceholder from '~/assets/volkihar-book-placeholder.png';
import volkiharBook from '~/assets/volkihar-book.png';
import volkiharEnderalLarge from '~/assets/volkihar-enderal-large.jpg';
import volkiharEnderalLogoLarge from '~/assets/volkihar-enderal-logo-large.png';
import volkiharEnderalLogoPlaceholder from '~/assets/volkihar-enderal-logo-placeholder.png';
import volkiharEnderalLogo from '~/assets/volkihar-enderal-logo.png';
import volkiharEnderalPlaceholder from '~/assets/volkihar-enderal-placeholder.jpg';
import volkiharEnderal from '~/assets/volkihar-enderal.jpg';
import volkiharSlide1Large from '~/assets/volkihar-slide-1-large.jpg';
import volkiharSlide1 from '~/assets/volkihar-slide-1.jpg';
import volkiharSlide2Large from '~/assets/volkihar-slide-2-large.jpg';
import volkiharSlide2 from '~/assets/volkihar-slide-2.jpg';
import volkiharSlide3Large from '~/assets/volkihar-slide-3-large.jpg';
import volkiharSlide3 from '~/assets/volkihar-slide-3.jpg';
import volkiharSlidePlaceholder from '~/assets/volkihar-slide-placeholder.jpg';
import { Button } from '~/components/button';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment, Suspense, lazy } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import { VolkiharLogo } from './volkihar-logo';
import styles from './volkihar-knight.module.css';
import backgroundCV from '~/assets/backgroundCV.png';
import backgroundCV1 from '~/assets/backgorundCV1.png';
import glitchycomputer from '~/assets/glitchycomputer.png';
import logocv from '~/assets/logocv.png';



const Carousel = lazy(() =>
  import('~/components/carousel').then(module => ({ default: module.Carousel }))
);

const Armor = lazy(() => import('./armor').then(module => ({ default: module.Armor })));

const title = 'AI-Powered Proctoring & Cheating Detection System';
const description =
  "Designed and deployed a 24/7 AI-driven proctoring system that continuously monitors live exam feeds using CCTV and webcam sources. The system leverages YOLOv8 for high-accuracy detection of suspicious objects (phones, books), MediaPipe-based eye and pose tracking for behavioral analysis, and a real-time alert engine that notifies invigilators instantly upon detecting anomalies.It supports both real-time intervention and post-exam audit trails, automatically capturing and annotating keyframes with bounding boxes and context. A comprehensive PDF report is generated summarizing flagged activities, complete with timestamps and visual evidence—enabling unbiased, scalable supervision without requiring constant human oversight.";
const roles = [ 'Computer Vision Integration',
  'Real-time Alert System',
'Backend Engineering',
'PDF Reporting Engine'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export function VolkiharKnight() {
  return (
    <Fragment>
      <ProjectContainer>
        <ProjectBackground
          srcSet={`${backgroundCV1} 1280w, ${backgroundCV1} 1920w`}
          width={1280}
          height={720}
          placeholder={volkiharBackgroundPlaceholder}
          opacity={0.5}
        />
        <ProjectHeader
          title={title}
          description={description}
          roles={roles}
        />
        <ProjectSection>
          <ProjectSectionColumns>
            <div className={styles.glitchycomputer}>
              <Image
                srcSet={`${glitchycomputer} 960w, ${glitchycomputer} 1920w`}
                width={960}
                height={1080}
                placeholder={glitchycomputer}
                alt="A glitchy computer screen showing a video feed."
                sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 960px`}
              />
            </div>
            <div className={styles.textSection}>
              <ProjectSectionHeading>The Problem</ProjectSectionHeading>
              <ProjectSectionText>
                Traditional exam monitoring systems are ill-equipped to handle the complexities of real-time surveillance across diverse testing environments. Manual invigilation is not only labor-intensive but also inconsistent, often missing subtle forms of cheating such as hidden devices, suspicious movements, or prolonged eye aversions. This challenge becomes even more acute in remote and hybrid examination setups, where human supervision alone cannot ensure integrity at scale. Existing solutions lack intelligent automation, contextual awareness, and immediate flagging capabilities. They also fail to provide structured post-exam insights or traceable audit trails. Without integrated multimodal analysis—combining object detection, pose tracking, and behavior mapping—institutions are left with blind spots in ensuring fair and secure assessments.
              </ProjectSectionText>
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center noMargin>
              <ProjectSectionHeading>Solution</ProjectSectionHeading>
              <ProjectSectionText>
                Our system addresses these challenges by combining computer vision, real-time analytics, and automated documentation. Through the integration of YOLOv8, MediaPipe, FastAPI, and OpenCV, it creates a seamless pipeline from detection to reporting. The scalable cloud deployment ensures 24/7 availability, while modular components allow easy customization based on institutional requirements. The system provides both proactive monitoring and post-exam validation, increasing trust in remote assessments.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center noMargin>
              <ProjectSectionHeading>Technical Flow</ProjectSectionHeading>
              <ProjectSectionText as="ul">
                <li>YOLOv8 processes live video feeds to detect suspicious objects (phones, books, etc.) in real-time.</li>
                <li>MediaPipe tracks eye movement and pose estimation to detect behavioral anomalies.</li>
                <li>FastAPI handles real-time alerts and transmits notifications to invigilators.</li>
                <li>OpenCV captures and annotates snapshots with bounding boxes and time metadata.</li>
                <li>A PDF reporting engine compiles all suspicious events, timestamps, and evidence visuals.</li>
                <li>Dockerized microservices and Kubernetes deployment ensure high scalability and fault tolerance.</li>
                <li>Optional modules for screen monitoring and keystroke logging provide enhanced hybrid exam analysis.</li>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection
          backgroundElement={
            <Image
              srcSet={`${backgroundCV} 980w, ${backgroundCV} 1620w`}
              width={980}
              height={520}
              placeholder={backgroundCV}
              alt="A promotional image from Enderal showing several characters in the game overlooking a distant city."
              sizes={`80vw`}
            />
          }
        >
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <Image
                srcSet={`${logocv} 180w, ${logocv} 360w`}
                width={180}
                height={200}
                placeholder={volkiharEnderalLogoPlaceholder}
                alt="The Enderal game logo"
                sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 220px`}
                style={{ maxWidth: 220, width: '100%', marginBottom: 30 }}
              />
              <ProjectSectionHeading>Outcome</ProjectSectionHeading>
              <ProjectSectionText>
                ● Reduced query resolution time by 60% through intelligent alerting.
                <br />
                ● Enabled real-time exam surveillance with immediate response capability.
                <br />
                ● Delivered annotated visual evidence via auto-generated PDF reports.
                <br />
                ● Empowered educational institutions to conduct secure, large-scale remote assessments with minimal manual oversight.
              </ProjectSectionText>
              <Button
                secondary
                iconHoverShift
                icon="chevron-right"
                href="#"
              >
                View Demo
              </Button>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
}



// import volkiharBackgroundLarge from '~/assets/volkihar-background-large.jpg';
// import volkiharBackgroundPlaceholder from '~/assets/volkihar-background-placeholder.jpg';
// import volkiharBackground from '~/assets/volkihar-background.jpg';
// import volkiharBannerLarge from '~/assets/volkihar-banner-large.jpg';
// import volkiharBannerPlaceholder from '~/assets/volkihar-banner-placeholder.jpg';
// import volkiharBanner from '~/assets/volkihar-banner.jpg';
// import volkiharBookLarge from '~/assets/volkihar-book-large.png';
// import volkiharBookPlaceholder from '~/assets/volkihar-book-placeholder.png';
// import volkiharBook from '~/assets/volkihar-book.png';
// import volkiharEnderalLarge from '~/assets/volkihar-enderal-large.jpg';
// import volkiharEnderalLogoLarge from '~/assets/volkihar-enderal-logo-large.png';
// import volkiharEnderalLogoPlaceholder from '~/assets/volkihar-enderal-logo-placeholder.png';
// import volkiharEnderalLogo from '~/assets/volkihar-enderal-logo.png';
// import volkiharEnderalPlaceholder from '~/assets/volkihar-enderal-placeholder.jpg';
// import volkiharEnderal from '~/assets/volkihar-enderal.jpg';
// import volkiharSlide1Large from '~/assets/volkihar-slide-1-large.jpg';
// import volkiharSlide1 from '~/assets/volkihar-slide-1.jpg';
// import volkiharSlide2Large from '~/assets/volkihar-slide-2-large.jpg';
// import volkiharSlide2 from '~/assets/volkihar-slide-2.jpg';
// import volkiharSlide3Large from '~/assets/volkihar-slide-3-large.jpg';
// import volkiharSlide3 from '~/assets/volkihar-slide-3.jpg';
// import volkiharSlidePlaceholder from '~/assets/volkihar-slide-placeholder.jpg';
// import { Button } from '~/components/button';
// import { Footer } from '~/components/footer';
// import { Image } from '~/components/image';
// import {
//   ProjectBackground,
//   ProjectContainer,
//   ProjectHeader,
//   ProjectImage,
//   ProjectSection,
//   ProjectSectionColumns,
//   ProjectSectionContent,
//   ProjectSectionHeading,
//   ProjectSectionText,
//   ProjectTextRow,
// } from '~/layouts/project';
// import { Fragment, Suspense, lazy } from 'react';
// import { media } from '~/utils/style';
// import { baseMeta } from '~/utils/meta';
// import { VolkiharLogo } from './volkihar-logo';
// import styles from './volkihar-knight.module.css';
// import backgroundCV from '~/assets/backgroundCV.png';
// import backgroundCV1 from '~/assets/backgorundCV1.png';
// import glitchycomputer from '~/assets/glitchycomputer.png';
// import logocv from '~/assets/logocv.png';

// const Carousel = lazy(() =>
//   import('~/components/carousel').then(module => ({ default: module.Carousel }))
// );

// const Armor = lazy(() => import('./armor').then(module => ({ default: module.Armor })));

// const title = 'AI-Powered Proctoring & Cheating Detection System';
// const description =
//   "Developed a scalable and intelligent proctoring system to monitor live exams via CCTV and webcam streams. Integrated YOLOv8 for high-accuracy detection of prohibited items, MediaPipe for eye and pose tracking, and real-time alerting through a FastAPI backend. The system supports both real-time and post-exam audit workflows, producing auto-generated PDF reports with annotated frames, bounding boxes, and event timestamps. Deployed using Docker on cloud infrastructure for round-the-clock monitoring.";
// const roles = [
//   'Computer Vision Integration',
//   'Real-time Alert System',
//   'Backend Engineering',
//   'PDF Reporting Engine'
// ];

// export const meta = () => {
//   return baseMeta({ title, description, prefix: 'Projects' });
// };

// export function VolkiharKnight() {
//   return (
//     <Fragment>
//       <ProjectContainer>
//         <ProjectBackground
//           srcSet={`${backgroundCV1} 1280w, ${backgroundCV1} 1920w`}
//           width={1280}
//           height={720}
//           placeholder={volkiharBackgroundPlaceholder}
//           opacity={0.5}
//         />
//         <ProjectHeader
//           title={title}
//           description={description}
//           roles={roles}
//         />

//         <ProjectSection>
//           <ProjectSectionColumns>
//             <div className={styles.glitchycomputer}>
//               <Image
//                 srcSet={`${glitchycomputer} 960w, ${glitchycomputer} 1920w`}
//                 width={960}
//                 height={1080}
//                 placeholder={glitchycomputer}
//                 alt="A glitchy computer screen showing a video feed."
//                 sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 960px`}
//               />
//             </div>
//             <div className={styles.textSection}>
//               <ProjectSectionHeading>The Problem</ProjectSectionHeading>
//               <ProjectSectionText>
//                 Traditional exam monitoring systems are ill-equipped to manage complex real-time surveillance across remote or hybrid environments. Manual invigilation is inconsistent and often fails to detect subtle forms of malpractice such as hidden devices, off-screen eye movement, or body posture shifts. Most current solutions lack automated detection, contextual behavior analysis, or structured post-exam insights—leaving educational institutions exposed to integrity risks and limited auditability.
//               </ProjectSectionText>
//             </div>
//           </ProjectSectionColumns>
//         </ProjectSection>

//         <ProjectSection>
//           <ProjectSectionContent>
//             <ProjectTextRow center noMargin>
//               <ProjectSectionHeading>Technical Flow</ProjectSectionHeading>
//               <ProjectSectionText as="ul">
//                 <li>YOLOv8 processes live video feeds to detect suspicious objects (phones, books, etc.) in real-time.</li>
//                 <li>MediaPipe tracks eye movement and pose estimation to detect behavioral anomalies.</li>
//                 <li>FastAPI handles real-time alerts and transmits notifications to invigilators.</li>
//                 <li>OpenCV captures and annotates snapshots with bounding boxes and time metadata.</li>
//                 <li>A PDF reporting engine compiles all suspicious events, timestamps, and evidence visuals.</li>
//                 <li>Dockerized microservices and Kubernetes deployment ensure high scalability and fault tolerance.</li>
//                 <li>Optional modules for screen monitoring and keystroke logging provide enhanced hybrid exam analysis.</li>
//               </ProjectSectionText>
//             </ProjectTextRow>
//           </ProjectSectionContent>
//         </ProjectSection>

//         <ProjectSection>
//           <ProjectBackground
//             srcSet={`${backgroundCV} 1280w, ${backgroundCV} 1920w`}
//             width={1280}
//             height={720}
//             placeholder={backgroundCV}
//             opacity={0.4}
//           />
//           <ProjectSectionContent>
//             <ProjectTextRow center centerMobile noMargin>
//               <Image
//                 srcSet={`${logocv} 180w, ${logocv} 360w`}
//                 width={180}
//                 height={200}
//                 placeholder={volkiharEnderalLogoPlaceholder}
//                 alt="Proctoring system logo"
//                 sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 220px`}
//                 style={{ maxWidth: 220, width: '100%', marginBottom: 30 }}
//               />
//               <ProjectSectionHeading>Outcome</ProjectSectionHeading>
//               <ProjectSectionText as="ul">
//                 <li>Reduced manual monitoring effort by 60% through automated flagging and reporting.</li>
//                 <li>Enabled real-time exam surveillance across hundreds of sessions with minimal infrastructure.</li>
//                 <li>Delivered legally auditable PDF reports complete with visual and timestamped evidence.</li>
//                 <li>Allowed educational institutions to scale secure remote testing without compromising exam integrity.</li>
//               </ProjectSectionText>
//               <Button
//                 secondary
//                 iconHoverShift
//                 icon="chevron-right"
//                 href="#"
//               >
//                 View Demo
//               </Button>
//             </ProjectTextRow>
//           </ProjectSectionContent>
//         </ProjectSection>
//       </ProjectContainer>
//       <Footer />
//     </Fragment>
//   );
// }
