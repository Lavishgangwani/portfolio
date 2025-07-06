// routes/experience.jsx
import { Footer } from '~/components/footer';
import { ProjectContainer, ProjectBackground,ProjectHeader, ProjectSection, ProjectSectionContent, ProjectTextRow, ProjectSectionHeading, ProjectSectionText } from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './experience.module.css';
import backgroundSprLarge from '~/assets/spr-background-large.jpg';
import backgroundSprPlaceholder from '~/assets/spr-background-placeholder.jpg';
import { ThemeProvider, useTheme } from '~/components/theme-provider';
import backgroundSpr from '~/assets/spr-background.jpg'; 
import Expsec from '~/assets/Expsec.png';


const title = 'Professional Experience';
const description =
  'From building intelligent HR automation systems to enhancing AI-driven surveillance, my experience spans real-world product engineering, AI deployments, and scalable backend solutions. I’ve led cross-functional initiatives and contributed to AI systems used in HR, education, finance, and security.';

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Experience' });
};

export const Experience = () => {
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
          src={Expsec}
          srcSet={`${Expsec} 1080w, ${Expsec} 2160w`}
          placeholder={backgroundSprPlaceholder}
        />
      <ProjectHeader
        title="Professional Experience"
        description={description}
        roles={[
          'AI Engineering & Deployment',
          'Real-time Proctoring & Monitoring',
          'Scalable Backend Architecture',
          'Data Science & Deep Learning',
          'Conversational AI & Bots'
        ]}
      />

      {/* Nexasprint Technologies */}
      <ProjectSection padding="top">
        <ProjectSectionContent>
          <ProjectTextRow>
            <ProjectSectionHeading>Nexasprint Technologies</ProjectSectionHeading>
            <ProjectSectionText>
              <strong>AI Engineer</strong> <br />
              <em>Mumbai, India | Jan 2025 – Present</em><br /><br />
              <ul className={styles.points}>
                <li>
                  Designed and developed a complete AI-powered HRM system that automates policy summarization, document comparison, and employee query handling using DeepLake, Azure OpenAI, and semantic search — reducing manual HR workload and improving response accuracy.
                </li>
                <li>
                  Built a real-time exam proctoring solution using YOLOv8 for object detection, along with pose and eye tracking, to detect suspicious behavior and generate automated PDF reports for post-exam audits.
                </li>
                <li>
                  Developed a WhatsApp-based financial document chatbot that uses OCR and validation logic to parse submitted files, extract key information, and respond to users with real-time feedback and document status.
                </li>
                <li>
                  Improved backend performance and scalability by using Redis for intelligent caching and MongoDB for efficient HR data storage, resulting in faster data access under concurrent user load.
                </li>
                <li>
                Designed an AI-driven RFP Automation & Tender Management System that summarizes tender documents, links clause references, auto-generates structured tables,
                detects compliance risks, tracks changes across versions, enables in-document annotations, supports semantic search across past RFPs, and allows one-click export
                to Excel or PowerPoint for leadership briefings.
              </li>
              </ul>
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSectionContent>
      </ProjectSection>

      {/* Learnbay Pvt Ltd */}
      <ProjectSection>
        <ProjectSectionContent>
          <ProjectTextRow>
            <ProjectSectionHeading>Learnbay Private Ltd.</ProjectSectionHeading>
            <ProjectSectionText>
              <strong>Data Science Intern</strong> <br />
              <em>Remote | Bengaluru, India | Oct 2023 – Dec 2024</em><br /><br />
              <ul className={styles.points}>
                        <li>
            Trained and deployed object detection models using YOLOv8 for surveillance applications, achieving 96% accuracy in identifying real-time threats and movement patterns.
          </li>
          <li>
            Built deep learning tools for early-stage cancer classification and developed a scalable fraud detection pipeline using Apache Spark for high-volume transaction data.
          </li>
          <li>
            Automated visa document processing using OCR and NLP techniques, reducing manual effort and improving data extraction accuracy for structured forms.
          </li>
          <li>
            Developed a content automation tool using CrewAI to generate YouTube blog material, reducing manual content creation time by 40% and streamlining the publishing workflow.
          </li>
          <li>
            Designed an AI-powered nutrition analysis app that predicts calorie and nutrient content from food images, improving image-based estimation accuracy by 25%.
          </li>
              </ul>
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSectionContent>
      </ProjectSection>

      <Footer />
    </ProjectContainer>
    </>
  );
};
