import type { ImageMetadata } from 'astro';

// Wontec Web Bilder
import wontecHeader from '../assets/images/projects/wontec_web/Header_Image.png';
import wontecTopLeft1 from '../assets/images/projects/wontec_web/Projects_Top_Left_1.png';
import wontecTopLeft2 from '../assets/images/projects/wontec_web/Projects_Top_Left_2.png';
import wontecTopLeft3 from '../assets/images/projects/wontec_web/Projects_Top_Left_3.png';
import wontecTopRight from '../assets/images/projects/wontec_web/Projects_Top_Right.png';
import wontecSecondRowLeft from '../assets/images/projects/wontec_web/Second_Row_Left.png';
import wontecSecondRowRight1 from '../assets/images/projects/wontec_web/Second_Row_Right_1.png';
import wontecSecondRowRight2 from '../assets/images/projects/wontec_web/Second_Row_Right_2.png';
import wontecSecondRowRight3 from '../assets/images/projects/wontec_web/Second_Row_Right_3.png';
import wontecThirdRowLeft from '../assets/images/projects/wontec_web/Third_Row_Left.png';
import wontecThirdRowMid1 from '../assets/images/projects/wontec_web/Third_Row_Mid_1.png';
import wontecThirdRowMid2 from '../assets/images/projects/wontec_web/Third_Row_Mid_2.png';
import wontecThirdRowMid3 from '../assets/images/projects/wontec_web/Third_Row_Mid_3.png';
import wontecThirdRowRight from '../assets/images/projects/wontec_web/Third_Row_Right.png';

// Steillagen Bilder
import steillagenHeader from '../assets/images/projects/steillagen/Header_Image.png';
import steillagenTopLeft1 from '../assets/images/projects/steillagen/Projects_Top_Left_1.png';
import steillagenTopLeft2 from '../assets/images/projects/steillagen/Projects_Top_Left_2.png';
import steillagenTopLeft3 from '../assets/images/projects/steillagen/Projects_Top_Left_3.png';
import steillagenTopRight from '../assets/images/projects/steillagen/Projects_Top_Right.png';
import steillagenSecondRowLeft from '../assets/images/projects/steillagen/Second_Row_Left.png';
import steillagenSecondRowRight1 from '../assets/images/projects/steillagen/Second_Row_Right_1.png';
import steillagenSecondRowRight2 from '../assets/images/projects/steillagen/Second_Row_Right_2.png';
import steillagenSecondRowRight3 from '../assets/images/projects/steillagen/Second_Row_Right_3.png';
import steillagenThirdRowLeft from '../assets/images/projects/steillagen/Third_Row_Left.png';
import steillagenThirdRowMid1 from '../assets/images/projects/steillagen/Third_Row_Mid_1.png';
import steillagenThirdRowMid2 from '../assets/images/projects/steillagen/Third_Row_Mid_2.png';
import steillagenThirdRowMid3 from '../assets/images/projects/steillagen/Third_Row_Mid_3.png';
import steillagenThirdRowRight from '../assets/images/projects/steillagen/Third_Row_Right.png';

// Fischer Bilder
import fischerHeader from '../assets/images/projects/fischer/Header_Image.png';
import fischerTopLeft1 from '../assets/images/projects/fischer/Projects_Top_Left_1.png';
import fischerTopLeft2 from '../assets/images/projects/fischer/Projects_Top_Left_2.png';
import fischerTopLeft3 from '../assets/images/projects/fischer/Projects_Top_Left_3.png';
import fischerTopRight from '../assets/images/projects/fischer/Projects_Top_Right.png';
import fischerSecondRowLeft from '../assets/images/projects/fischer/Second_Row_Left.png';
import fischerSecondRowRight1 from '../assets/images/projects/fischer/Second_Row_Right_1.png';
import fischerSecondRowRight2 from '../assets/images/projects/fischer/Second_Row_Right_2.png';
import fischerSecondRowRight3 from '../assets/images/projects/fischer/Second_Row_Right_3.png';
import fischerThirdRowLeft from '../assets/images/projects/fischer/Third_Row_Left.png';
import fischerThirdRowMid1 from '../assets/images/projects/fischer/Third_Row_Mid_1.png';
import fischerThirdRowMid2 from '../assets/images/projects/fischer/Third_Row_Mid_2.png';
import fischerThirdRowMid3 from '../assets/images/projects/fischer/Third_Row_Mid_3.png';
import fischerThirdRowRight from '../assets/images/projects/fischer/Third_Row_Right.png';

// Harbr Bilder
import harbrHeader from '../assets/images/projects/harbr/guest-journey-harbr-2000x1125.jpg';

export const projectImages = {
  wontec: {
    header: wontecHeader,
    gallery: [
      wontecTopLeft1, wontecTopLeft2, wontecTopLeft3, wontecTopRight,
      wontecSecondRowLeft, wontecSecondRowRight1, wontecSecondRowRight2, wontecSecondRowRight3,
      wontecThirdRowLeft, wontecThirdRowMid1, wontecThirdRowMid2, wontecThirdRowMid3, wontecThirdRowRight
    ]
  },
  steillagen: {
    header: steillagenHeader,
    gallery: [
      steillagenTopLeft1, steillagenTopLeft2, steillagenTopLeft3, steillagenTopRight,
      steillagenSecondRowLeft, steillagenSecondRowRight1, steillagenSecondRowRight2, steillagenSecondRowRight3,
      steillagenThirdRowLeft, steillagenThirdRowMid1, steillagenThirdRowMid2, steillagenThirdRowMid3, steillagenThirdRowRight
    ]
  },
  fischer: {
    header: fischerHeader,
    gallery: [
      fischerTopLeft1, fischerTopLeft2, fischerTopLeft3, fischerTopRight,
      fischerSecondRowLeft, fischerSecondRowRight1, fischerSecondRowRight2, fischerSecondRowRight3,
      fischerThirdRowLeft, fischerThirdRowMid1, fischerThirdRowMid2, fischerThirdRowMid3, fischerThirdRowRight
    ]
  },
  harbr: {
    header: harbrHeader,
    gallery: []
  }
} as const;

export type ProjectKey = keyof typeof projectImages; 