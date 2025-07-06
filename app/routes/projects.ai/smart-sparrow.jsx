import backgroundSprLarge from '~/assets/spr-background-large.jpg';
import backgroundSprPlaceholder from '~/assets/spr-background-placeholder.jpg';
import imageSprBackgroundVolcanismLarge from '~/assets/spr-background-volcanism-large.jpg';
import imageSprBackgroundVolcanismPlaceholder from '~/assets/spr-background-volcanism-placeholder.jpg';
import imageSprBackgroundVolcanism from '~/assets/spr-background-volcanism.jpg';
import backgroundSpr from '~/assets/spr-background.jpg';
import imageSprComponentsDarkLarge from '~/assets/spr-components-dark-large.png';
import imageSprComponentsDarkPlaceholder from '~/assets/spr-components-dark-placeholder.png';
import imageSprComponentsDark from '~/assets/spr-components-dark.png';
import imageSprComponentsLightLarge from '~/assets/spr-components-light-large.png';
import imageSprComponentsLightPlaceholder from '~/assets/spr-components-light-placeholder.png';
import imageSprComponentsLight from '~/assets/spr-components-light.png';
import imageSprDesignSystemDarkLarge from '~/assets/spr-design-system-dark-large.png';
import imageSprDesignSystemDarkPlaceholder from '~/assets/spr-design-system-dark-placeholder.png';
import imageSprDesignSystemDark from '~/assets/spr-design-system-dark.png';
import imageSprDesignSystemLightLarge from '~/assets/spr-design-system-light-large.png';
import imageSprDesignSystemLightPlaceholder from '~/assets/spr-design-system-light-placeholder.png';
import imageSprDesignSystemLight from '~/assets/spr-design-system-light.png';
import imageSprLessonBuilderDarkLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import imageSprLessonBuilderDarkPlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import imageSprLessonBuilderDark from '~/assets/spr-lesson-builder-dark.jpg';
import imageSprLessonBuilderLightLarge from '~/assets/spr-lesson-builder-light-large.jpg';
import imageSprLessonBuilderLightPlaceholder from '~/assets/spr-lesson-builder-light-placeholder.jpg';
import imageSprLessonBuilderLight from '~/assets/spr-lesson-builder-light.jpg';
import videoSprMotionLarge from '~/assets/spr-motion-large.mp4';
import videoSprMotionPlaceholder from '~/assets/spr-motion-placeholder.jpg';
import videoSprMotion from '~/assets/spr-motion.mp4';
import imageSprSchema1DarkLarge from '~/assets/spr-schema-1-dark-large.png';
import imageSprSchema1DarkPlaceholder from '~/assets/spr-schema-1-dark-placeholder.png';
import imageSprSchema1Dark from '~/assets/spr-schema-1-dark.png';
import imageSprSchema1LightLarge from '~/assets/spr-schema-1-light-large.png';
import imageSprSchema1LightPlaceholder from '~/assets/spr-schema-1-light-placeholder.png';
import imageSprSchema1Light from '~/assets/spr-schema-1-light.png';
import imageSprSchema2DarkLarge from '~/assets/spr-schema-2-dark-large.png';
import imageSprSchema2DarkPlaceholder from '~/assets/spr-schema-2-dark-placeholder.png';
import imageSprSchema2Dark from '~/assets/spr-schema-2-dark.png';
import imageSprSchema2LightLarge from '~/assets/spr-schema-2-light-large.png';
import imageSprSchema2LightPlaceholder from '~/assets/spr-schema-2-light-placeholder.png';
import imageSprSchema2Light from '~/assets/spr-schema-2-light.png';
import imageSprStoryboarderDarkLarge from '~/assets/spr-storyboarder-dark-large.png';
import imageSprStoryboarderDarkPlaceholder from '~/assets/spr-storyboarder-dark-placeholder.png';
import imageSprStoryboarderDark from '~/assets/spr-storyboarder-dark.png';
import imageSprStoryboarderLightLarge from '~/assets/spr-storyboarder-light-large.png';
import imageSprStoryboarderLightPlaceholder from '~/assets/spr-storyboarder-light-placeholder.png';
import imageSprStoryboarderLight from '~/assets/spr-storyboarder-light.png';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { SegmentedControl, SegmentedControlOption } from '~/components/segmented-control';
import { ThemeProvider, useTheme } from '~/components/theme-provider';
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
import { baseMeta } from '~/utils/meta';
import { Suspense, lazy, useMemo } from 'react';
import { media } from '~/utils/style';
import styles from './smart-sparrow.module.css';
import HRMImage from '~/assets/image.png';
import HRMS from '~/assets/HRMS.png';
import HR_BOT from '~/assets/HR_BOT.png';


const Earth = lazy(() => import('./earth').then(module => ({ default: module.Earth })));
const EarthSection = lazy(() =>
  import('./earth').then(module => ({ default: module.EarthSection }))
);

const title = 'AI-Powered HRM System';
const description =
  'I led the design and development of an production-ready intelligent chatbot system that summarizes, compares, and queries HR policies and documents using DeepLake + Azure OpenAI and that intelligently, highlights updates, and integrates multimodal understanding using LLMs and Vector databases.';
const roles = [
  'System Architecture & Design',
  'AI Chatbot Engineering (LLMs + DeepLake)',
  'Document Summarization & Comparison Pipeline',
  'Multimodal Understanding & Integration',
  'Semantic Search & Policy Retrieval',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const SmartSparrow = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const themes = ['dark', 'light'];

  const handleThemeChange = index => {
    toggleTheme(themes[index]);
  };

  return (
    <>
      <ProjectContainer>
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundSpr}
          srcSet={`${backgroundSpr} 1080w, ${backgroundSprLarge} 2160w`}
          placeholder={backgroundSprPlaceholder}
        />
        <ProjectHeader
          title={title}
          description={description}
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={theme}
              srcSet={
                isDark
                  ? `${HRMS} 1280w, ${HRMS} 2560w`
                  : `${HRMS} 1280w, ${HRMS} 2560w`
              }
              width={1280}
              height={800}
              placeholder={
                isDark
                  ? HR_BOT
                  : HR_BOT
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="The aero lesson builder app dragging an audio component into a screen about plant cells."
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>The problem</ProjectSectionHeading>
            <ProjectSectionText>
              Conventional Human Resource Management Systems (HRMS) are limited in their ability to handle dynamic employee interactions and evolving policy documentation. HR teams are burdened with high volumes of repetitive queries—such as leave balances, policy clarifications, and onboarding steps—which require manual responses, leading to inefficiency and delay. Additionally, comparing old and new versions of HR documents (like leave policies, benefits, and compliance rules) is error-prone and time-consuming.

              These systems also lack intelligent understanding of context or memory across employee sessions, resulting in fragmented user experiences. The absence of real-time document summarization, semantic search, and automated change detection significantly hampers decision-making and reduces overall HR responsiveness.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection light={isDark}>
          <ProjectSectionContent>
            <Image
              key={theme}
              srcSet={
                isDark
                  ? `${HRMImage} 84w, ${HRMImage} 48w`
                  : `${HRMImage} 84w, ${HRMImage} 48w`
              }
              width={84}
              height={40}
              placeholder={
                isDark
                  ? imageSprComponentsDarkPlaceholder
                  : imageSprComponentsLightPlaceholder
              }
              alt={`A set of ${theme} themed components for the aero design system`}
              sizes="10vw"
            />
            <ProjectTextRow>
              <SegmentedControl
                currentIndex={themes.indexOf(theme)}
                onChange={handleThemeChange}
              >
                <SegmentedControlOption>Dark theme</SegmentedControlOption>
                <SegmentedControlOption>Light theme</SegmentedControlOption>
              </SegmentedControl>
            </ProjectTextRow>
            <ProjectTextRow>
              <ProjectSectionHeading>Tech stack & system design</ProjectSectionHeading>
              <ProjectSectionText>
                The system uses Python, FastAPI, DeepLake (for embedding-based document retrieval),
                and Azure OpenAI’s GPT models. We built a summary-comparison-query pipeline with support for
                semantic search and document comparison. The system is designed to be flexible and
                scalable, allowing for easy integration with various HRMS systems and seamless
                collaboration with HR teams.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Image
              raised
              key={theme}
              className={styles.hrmSmallImage}
              srcSet={
                isDark
                  ? `${HR_BOT} 128w, ${HR_BOT} 256w`
                  : `${HR_BOT} 128w, ${HR_BOT} 256w`
              }
              width={120}
              height={100}
              placeholder={
                isDark
                  ? imageSprDesignSystemDarkPlaceholder
                  : imageSprDesignSystemLightPlaceholder
              }
              alt="The homepage of the aero design system docs website linking to principles and components."
              sizes="10vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>User Experience</ProjectSectionHeading>
              <ProjectSectionText>
                Employees can upload documents, search by policy name, or ask questions in natural language.
                Each answer includes visual links to the referenced text with document and page number highlights.
                The system also provides a side-by-side comparison of old and new policy versions, highlighting changes.
                The chatbot remembers user interactions, allowing for context-aware responses and follow-up questions.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
  <ProjectSectionContent>
    <ProjectTextRow center>
      <ProjectSectionHeading>
        Project Outcome: Intelligent HRMS Automation & Policy Intelligence System
      </ProjectSectionHeading>
      <ProjectSectionText>
        This system addressed key limitations of conventional HRMS 
        by integrating:
        <br /><br />
        <strong>Real-Time Document Summarization:</strong> Automated the summarization of lengthy 
        HR policies and guidelines to deliver concise, contextual insights to employees.
        <br /><br />
        <strong>Context-Aware Chatbot Interface:</strong> Built a memory-enabled conversational 
        agent capable of handling employee queries regarding onboarding, leaves, policies, and 
        compliance, with continuity across sessions.
        <br /><br />
        <strong>Automated Policy Comparison Engine:</strong> Designed a document difference 
        engine that compares historical and new versions of HR documents to highlight semantic and 
        structural changes (e.g., benefits, leave policies, code of conduct).
        <br /><br />
        <strong>Semantic Search for Instant Answers:</strong> Enabled employees to query any 
        HR-related document or policy using natural language and get accurate answers instantly via 
        a semantic search layer.
        <br /><br />
        <strong>Reduced Manual Overhead:</strong> Cut down repetitive HR tasks by up to 70%, 
        freeing HR teams to focus on strategic functions and improving response time for employee 
        concerns.
        <br /><br />
        <strong>Improved HR Decision-Making:</strong> Provided HR leadership with visibility into 
        evolving policy documents and employee concerns via analytics dashboards powered by change 
        detection and usage patterns.
      </ProjectSectionText>
    </ProjectTextRow>
  </ProjectSectionContent>
</ProjectSection>
      <Footer />
       </ProjectContainer>
    </>
  );
};
