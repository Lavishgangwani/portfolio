import profileImgLarge from '~/assets/Profile_LG.jpg';
import profileImgPlaceholder from '~/assets/profile-placeholder.jpg';
import profileImg from '~/assets/Profile_LG.jpg';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { media } from '~/utils/style';
import styles from './profile.module.css';

// const ProfileText = ({ visible, titleId }) => (
//   <Fragment>
//     <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
//       <DecoderText text="Hi there" start={visible} delay={500} />
//     </Heading>
//     <Text className={styles.description} data-visible={visible} size="l" as="p">
//       I’m Lavish Gangwani, an AI Engineer passionate about building intelligent systems that drive automation, efficiency, and real-world impact. I’ve led development on AI-powered HRM systems, financial chatbots, and computer vision solutions.
//     </Text>
//     <Text className={styles.description} data-visible={visible} size="l" as="p">
//       With hands-on expertise in LLMs, RAG, LangChain, YOLOv8, and scalable backend stacks like Redis and MongoDB, I focus on delivering full-stack AI products. You can explore my projects on{' '}
//       <Link href="https://github.com/Lavishgangwani">GitHub</Link> or visit my{' '}
//       <Link href="https://lavishgangwani.github.io/personal-portfolio/">portfolio site</Link>.
//     </Text>
//   </Fragment>
// );

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>

    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I'm <strong>Lavish Gangwani</strong>, an AI Engineer based in Mumbai, focused on building intelligent systems that automate decisions, reveal insights, and create tangible value.
    </Text>

    <Text className={styles.description} data-visible={visible} size="l" as="p">
      My journey began in the world of commerce, where I became deeply curious about how data shapes decisions. That curiosity soon turned into code—pushing me to explore machine learning, large language models, and end-to-end AI solutions. 
    </Text>

    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Over time, As I deepened my understanding of AI systems, I gravitated toward solving problems end-to-end—going beyond just building models to designing complete, production-ready pipelines. I learned how to move from experimentation in notebooks to building scalable APIs, designing robust data flows, and integrating models into real applications. This process taught me not just the science of machine learning, but the engineering discipline behind reliability, iteration, and maintainability.
    </Text>

    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Today, I focus on designing AI tools that are not just experimental, but dependable—systems that do their job quietly and well.
    </Text>

  </Fragment>
);



export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={`${profileImg} 480w, ${profileImgLarge} 960w`}
                  width={960}
                  height={1280}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Lavish Gangwani profile photo"
                />
                {/* Removed Japanese Katakana SVG */}
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
