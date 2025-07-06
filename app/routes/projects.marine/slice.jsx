// import sliceAnnotationLarge from '~/assets/slice-annotation-large.png';
// import sliceAnnotationPlaceholder from '~/assets/slice-annotation-placeholder.png';
// import sliceAnnotation from '~/assets/slice-annotation.png';
// import sliceAppLarge from '~/assets/slice-app-large.jpg';
// import sliceAppPlaceholder from '~/assets/slice-app-placeholder.jpg';
// import sliceApp from '~/assets/slice-app.jpg';
// import sliceBackgroundBarLarge from '~/assets/slice-background-bar-large.jpg';
// import sliceBackgroundBarPlaceholder from '~/assets/slice-background-bar-placeholder.jpg';
// import sliceBackgroundBar from '~/assets/slice-background-bar.jpg';
// import sliceBackgroundLarge from '~/assets/slice-background-large.jpg';
// import sliceBackgroundPlaceholder from '~/assets/slice-background-placeholder.jpg';
// import sliceBackground from '~/assets/slice-background.jpg';
// import sliceIrlPlaceholder from '~/assets/slice-irl-placeholder.jpg';
// import sliceIrl from '~/assets/slice-irl.jpg';
// import sliceSidebarAnnotationsLarge from '~/assets/slice-sidebar-annotations-large.png';
// import sliceSidebarAnnotationsPlaceholder from '~/assets/slice-sidebar-annotations-placeholder.png';
// import sliceSidebarAnnotations from '~/assets/slice-sidebar-annotations.png';
// import sliceSidebarLayersLarge from '~/assets/slice-sidebar-layers-large.png';
// import sliceSidebarLayersPlaceholder from '~/assets/slice-sidebar-layers-placeholder.png';
// import sliceSidebarLayers from '~/assets/slice-sidebar-layers.png';
// import sliceSlidesLarge from '~/assets/slice-slides-large.jpg';
// import sliceSlidesPlaceholder from '~/assets/slice-slides-placeholder.jpg';
// import sliceSlides from '~/assets/slice-slides.jpg';
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
// import { Fragment } from 'react';
// import { media } from '~/utils/style';
// import { baseMeta } from '~/utils/meta';
// import styles from './slice.module.css';

// const title = 'Multimodal Marine Assistant';
// const description =
//   'An AI-powered assistant purpose-built for marine engineers, combining document intelligence and visual recognition. This system integrates OCR-parsed technical manuals, real-time image analysis, and a domain-specific Retrieval-Augmented Generation (RAG) pipeline trained on proprietary marine datasets. It delivers highly accurate, context-aware responses using a memory-enabled LLM. The assistant handles natural language queries, highlights reference text from engineering PDFs, and correlates visual inputs (e.g., engine parts, control panels) to ensure real-time, multimodal support in high-stakes environments.';
// const roles = ['Multimodal AI Integration',
//   'Domain-Specific RAG Architecture',
//   'Visual & Document Understanding',
//   'LLM Prompt Engineering',
//   'Real-Time Inference Pipeline Design'];

// export const meta = () => {
//   return baseMeta({ title, description, prefix: 'Projects' });
// };

// export const Slice = () => {
//   return (
//     <Fragment>
//       <ProjectContainer className={styles.slice}>
//         <ProjectBackground
//           src={sliceBackground}
//           srcSet={`${sliceBackground} 1280w, ${sliceBackgroundLarge} 2560w`}
//           width={1280}
//           height={800}
//           placeholder={sliceBackgroundPlaceholder}
//           opacity={0.8}
//         />
//         <ProjectHeader
//           title={title}
//           description={description}
//           url="https://www.best.edu.au/s/q2yjjvl7?data=8%404!9%4020303!10%40-15087&version=1"
//           roles={roles}
//         />
//         <ProjectSection padding="top">
//           <ProjectSectionContent>
//             <ProjectImage
//               srcSet={`${sliceApp} 800w, ${sliceAppLarge} 1920w`}
//               width={800}
//               height={500}
//               placeholder={sliceAppPlaceholder}
//               alt="The Slice web application showing a selected user annotation."
//               sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
//             />
//           </ProjectSectionContent>
//         </ProjectSection>
//         <ProjectSection>
//           <ProjectSectionColumns centered className={styles.columns}>
//             <div className={styles.imagesText}>
//               <ProjectSectionHeading>Bringing it together</ProjectSectionHeading>
//               <ProjectSectionText>
//                 Teachers needed a better way to create collaborative group activities by
//                 annotating slides on Slice. Before starting this project, a layer could
//                 only be annotated by a single user, making it difficult for learners to
//                 work together.
//               </ProjectSectionText>
//               <ProjectSectionText>
//                 Our solution was to allow users to be invited to a layer, where they can
//                 see others’ annotations and make their own.
//               </ProjectSectionText>
//             </div>
//             <div className={styles.sidebarImages}>
//               <Image
//                 className={styles.sidebarImage}
//                 srcSet={`${sliceSidebarLayers} 350w, ${sliceSidebarLayersLarge} 700w`}
//                 width={350}
//                 height={750}
//                 placeholder={sliceSidebarLayersPlaceholder}
//                 alt="The layers sidebar design, now with user profiles."
//                 sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
//               />
//               <Image
//                 className={styles.sidebarImage}
//                 srcSet={`${sliceSidebarAnnotations} 350w, ${sliceSidebarAnnotationsLarge} 700w`}
//                 width={350}
//                 height={750}
//                 placeholder={sliceSidebarAnnotationsPlaceholder}
//                 alt="Multiple user annotations on a shared layer."
//                 sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
//               />
//             </div>
//           </ProjectSectionColumns>
//         </ProjectSection>
//         <ProjectSection light>
//           <ProjectSectionContent>
//             <ProjectTextRow>
//               <ProjectSectionHeading>Improving the experience</ProjectSectionHeading>
//               <ProjectSectionText>
//                 A problem we heard about often form users was that it was difficult to
//                 find images they had previously seen or worked on. To solve this we added
//                 a new tab that lists all previously annotated slides. In addition, we
//                 added the ability to favorite slides, so if users find an interesting
//                 slide they want to annotate later, they can easily save it to their
//                 account.
//               </ProjectSectionText>
//             </ProjectTextRow>
//             <Image
//               srcSet={`${sliceSlides} 800w, ${sliceSlidesLarge} 1920w`}
//               width={800}
//               height={500}
//               placeholder={sliceSlidesPlaceholder}
//               alt="The new My Slides tab in slice, showing annotated and favorited slides."
//               sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
//             />
//           </ProjectSectionContent>
//         </ProjectSection>
//         <ProjectSection padding="top">
//           <ProjectSectionContent className={styles.grid}>
//             <div className={styles.gridImage}>
//               <div className={styles.gridBackground}>
//                 <Image
//                   srcSet={`${sliceBackgroundBar} 440w, ${sliceBackgroundBarLarge} 880w`}
//                   width={440}
//                   height={790}
//                   placeholder={sliceBackgroundBarPlaceholder}
//                   alt=""
//                   role="presentation"
//                   sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
//                 />
//               </div>
//               <div className={styles.gridForeground}>
//                 <Image
//                   srcSet={`${sliceAnnotation} 440w, ${sliceAnnotationLarge} 880w`}
//                   width={440}
//                   height={340}
//                   placeholder={sliceAnnotationPlaceholder}
//                   alt="An annotation preview popover with statistics for shape perimeter and area."
//                   sizes={`(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 747px, 556px`}
//                 />
//               </div>
//             </div>
//             <div className={styles.gridText}>
//               <ProjectSectionHeading>Meaningful details</ProjectSectionHeading>
//               <ProjectSectionText>
//                 Marking and annotating areas on high resolution biomedical images is the
//                 core experience of the app, and it was easy to get lost or lose sense of
//                 scale when zooming in on details. Adding measurements for the perimeter
//                 and area of an annotation both helped to communicate the overall scale of
//                 the image and how large the annotated feature is in comparison.
//               </ProjectSectionText>
//             </div>
//           </ProjectSectionContent>
//         </ProjectSection>
//         <ProjectSection>
//           <ProjectSectionContent>
//             <ProjectTextRow>
//               <ProjectSectionHeading>Project outcomes</ProjectSectionHeading>
//               <ProjectSectionText>
//                 Real-time collaborative annotation facilitated better collaboration
//                 between learners, and was much easier to run group exercises with the new
//                 shared layers feature. Learners gave feedback that is was enjoyable to
//                 work together and see what others were doing, and liked how interactive
//                 and easy to use the application was.
//               </ProjectSectionText>
//             </ProjectTextRow>
//             <Image
//               src={sliceIrl}
//               width={940}
//               height={500}
//               placeholder={sliceIrlPlaceholder}
//               alt="Students at the University of New South Wales using the new collaborative annotation features"
//             />
//           </ProjectSectionContent>
//         </ProjectSection>
//       </ProjectContainer>
//       <Footer />
//     </Fragment>
//   );
// };
import sliceAnnotationLarge from '~/assets/slice-annotation-large.png';
import sliceAnnotationPlaceholder from '~/assets/slice-annotation-placeholder.png';
import sliceAnnotation from '~/assets/slice-annotation.png';
import sliceAppLarge from '~/assets/slice-app-large.jpg';
import sliceAppPlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceApp from '~/assets/slice-app.jpg';
import sliceBackgroundBarLarge from '~/assets/slice-background-bar-large.jpg';
import sliceBackgroundBarPlaceholder from '~/assets/slice-background-bar-placeholder.jpg';
import sliceBackgroundBar from '~/assets/slice-background-bar.jpg';
import sliceBackgroundLarge from '~/assets/slice-background-large.jpg';
import sliceBackgroundPlaceholder from '~/assets/slice-background-placeholder.jpg';
import sliceBackground from '~/assets/slice-background.jpg';
import sliceIrlPlaceholder from '~/assets/slice-irl-placeholder.jpg';
import sliceIrl from '~/assets/slice-irl.jpg';
import sliceSidebarAnnotationsLarge from '~/assets/slice-sidebar-annotations-large.png';
import sliceSidebarAnnotationsPlaceholder from '~/assets/slice-sidebar-annotations-placeholder.png';
import sliceSidebarAnnotations from '~/assets/slice-sidebar-annotations.png';
import sliceSidebarLayersLarge from '~/assets/slice-sidebar-layers-large.png';
import sliceSidebarLayersPlaceholder from '~/assets/slice-sidebar-layers-placeholder.png';
import sliceSidebarLayers from '~/assets/slice-sidebar-layers.png';
import sliceSlidesLarge from '~/assets/slice-slides-large.jpg';
import sliceSlidesPlaceholder from '~/assets/slice-slides-placeholder.jpg';
import sliceSlides from '~/assets/slice-slides.jpg';
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
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './slice.module.css';
import marine from '~/assets/marine.png';
import OnestopChat from '~/assets/OnestopChat.png';
import Marineonestop from '~/assets/Marineonestop.png';
import Technicalflow from '~/assets/Technicalflow.png';
import marinebackground from '~/assets/marinebackground.png';


const title = 'Multimodal Marine Assistant';
const description =
  'An AI-powered assistant purpose-built for marine engineers, combining document intelligence and visual recognition. This system integrates OCR-parsed technical manuals, real-time image analysis, and a domain-specific Retrieval-Augmented Generation (RAG) pipeline trained on proprietary marine datasets. It delivers highly accurate, context-aware responses using a memory-enabled LLM. The assistant handles natural language queries, highlights reference text from engineering PDFs, and correlates visual inputs (e.g., engine parts, control panels) to ensure real-time, multimodal support in high-stakes environments.';
const roles = [
  'Multimodal AI Integration',
  'Domain-Specific RAG Architecture',
  'Visual & Document Understanding',
  'LLM Prompt Engineering',
  'Real-Time Inference Pipeline Design'
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Slice = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={marinebackground}
          srcSet={`${marinebackground} 1280w, ${marinebackground} 2560w`}
          width={1280}
          height={800}
          placeholder={sliceBackgroundPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${marine} 800w, ${marine} 1920w`}
              width={800}
              height={500}
              placeholder={sliceAppPlaceholder}
              alt="Multimodal interface for marine assistant with OCR output and image reference."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Solving operational gaps</ProjectSectionHeading>
              <ProjectSectionText>
                Marine engineers often work in complex environments with outdated manuals,
                limited technical support, and no unified interface for documentation and
                visual data. We built an assistant that combines OCR, image processing,
                and language understanding to bridge this gap.
              </ProjectSectionText>
              <ProjectSectionText>
                Engineers can upload snapshots of engine parts or query large PDF manuals,
                and the system returns precise, context-rich results with reference
                highlights and visual cues.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${OnestopChat} 350w, ${OnestopChat} 700w`}
                width={350}
                height={750}
                placeholder={sliceSidebarLayersPlaceholder}
                alt="Layered view of structured document elements in marine manuals."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={`${OnestopChat} 350w, ${OnestopChat} 700w`}
                width={350}
                height={750}
                placeholder={sliceSidebarAnnotationsPlaceholder}
                alt="Annotated PDF showing figure callouts and semantic references."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Multimodal document understanding</ProjectSectionHeading>
              <ProjectSectionText>
                The system parses scanned or structured PDFs using OCR, and maps figures
                and tables with text using object detection and layout modeling. Users can
                ask natural language questions like "Where is the camshaft location?" and
                receive both text and image answers, linked by figure IDs and page numbers.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${Marineonestop} 800w, ${Marineonestop} 1920w`}
              width={800}
              height={500}
              placeholder={sliceSlidesPlaceholder}
              alt="System returning semantic response with image cross-reference."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridImage}>
              <div className={styles.gridBackground}>
                <Image
                  srcSet={`${Technicalflow} 440w, ${Technicalflow} 880w`}
                  width={440}
                  height={790}
                  placeholder={sliceBackgroundBarPlaceholder}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>Technical flow</ProjectSectionHeading>
              <ProjectSectionText>
                ● Utilized Azure Document Intelligence for high-accuracy OCR and layout-aware parsing of scanned ship manuals and technical PDFs.<br />
                ● Custom-trained YOLOv8 model using Roboflow for detecting diagrams, machinery, and labeled figures in engineering manuals. Included extensive data augmentation, annotation pipelines, and class balancing.<br />
                ● Integrated MediaPipe for real-time eye tracking and pose estimation during live interactions for behavior and engagement analytics.<br />
                ● Employed Retrieval-Augmented Generation (RAG) architecture with DeepLake vector store and Azure OpenAI’s GPT models for precise semantic retrieval and context-aware response generation.<br />
                ● Structured document metadata and visual content into unified schema to support multimodal grounding of answers (text + image-based references).<br />
                ● Designed an asynchronous pipeline to extract figure IDs, text content, and page-level embeddings for scalable marine document ingestion.<br />
                ● Real-time chat interface supports follow-up queries, memory retention, and visual highlighting of referenced manual sections for better explainability.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Project outcomes</ProjectSectionHeading>
              <ProjectSectionText>
                The intelligent assistant significantly transformed the way marine technicians interact with complex ship manuals and troubleshooting workflows:
                <br /><br />
                <strong>Reduced Query Resolution Time by 60%+</strong>: Enabled engineers to get instant, accurate answers from thousands of pages of technical documentation without manual searching.
                <br /><br />
                <strong>Real-Time Visual Troubleshooting</strong>: Empowered ship staff to upload images from engine rooms and receive AI-guided diagnostics and object-specific insights—without internet dependency in hybrid deployments.
                <br /><br />
                <strong>Frictionless Document Navigation</strong>: Delivered deep linking, page-level highlights, and figure references within parsed manuals for intuitive navigation of dense PDF materials.
                <br /><br />
                <strong>Multimodal Intelligence Made Simple</strong>: Seamlessly combined image understanding, OCR-parsed content, and semantic search into a unified interface accessible even to non-technical users.
                <br /><br />
                <strong>Operational Efficiency & Training Impact</strong>: Reduced onboarding time for new crew, improved accuracy in maintenance procedures, and decreased reliance on manual consultations with senior engineers.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
