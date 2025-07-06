// import { classes } from '~/utils/style';
// import styles from './icon.module.css';
// import { forwardRef } from 'react';
// import sprites from './icons.svg';

// export const Icon = forwardRef(({ icon, className, size, ...rest }, ref) => {
//   return (
//     <svg
//       aria-hidden
//       ref={ref}
//       className={classes(styles.icon, className)}
//       width={size || 24}
//       height={size || 24}
//       {...rest}
//     >
//       <use href={`${sprites}#${icon}`} />
//     </svg>
//   );
// });

import { classes } from '~/utils/style';
import styles from './icon.module.css';
import { forwardRef } from 'react';
import sprites from './icons.svg';

// 🆕 Import the prebuilt LinkedIn icon
import { Linkedin } from 'lucide-react'; // or any icon lib you're using

export const Icon = forwardRef(({ icon, className, size = 24, ...rest }, ref) => {
  if (icon === 'linkedin') {
    return (
      <Linkedin
        ref={ref}
        className={classes(styles.icon, className)}
        size={size}
        {...rest}
      />
    );
  }

  // Fallback for other icons using sprite
  return (
    <svg
      aria-hidden
      ref={ref}
      className={classes(styles.icon, className)}
      width={size}
      height={size}
      {...rest}
    >
      <use href={`${sprites}#${icon}`} />
    </svg>
  );
});
