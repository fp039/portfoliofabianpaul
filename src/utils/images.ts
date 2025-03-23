import type { ImageMetadata } from 'astro';

// Wontec Web Bilder
import wontecHeader from '../assets/images/projects/wontec_web/Header_Image.png';
import wontecSecondLeft from '../assets/images/projects/wontec_web/Second_Row_Left.png';
import wontecSecondRight1 from '../assets/images/projects/wontec_web/Second_Row_Right_1.png';
import wontecSecondRight2 from '../assets/images/projects/wontec_web/Second_Row_Right_2.png';
import wontecSecondRight3 from '../assets/images/projects/wontec_web/Second_Row_Right_3.png';

// Fischer Bilder
import fischerHeader from '../assets/images/projects/fischer/Header_Image.png';
import fischerSecondLeft from '../assets/images/projects/fischer/Second_Row_Left.png';
import fischerSecondRight1 from '../assets/images/projects/fischer/Second_Row_Right_1.png';
import fischerSecondRight2 from '../assets/images/projects/fischer/Second_Row_Right_2.png';
import fischerSecondRight3 from '../assets/images/projects/fischer/Second_Row_Right_3.png';

// Steillagen Bilder
import steillagenHeader from '../assets/images/projects/steillagen/Header_Image.png';
import steillagenSecondLeft from '../assets/images/projects/steillagen/Second_Row_Left.png';
import steillagenTopRight from '../assets/images/projects/steillagen/Projects_Top_Right.png';

// Harbr Bilder
import harbrGuestJourney from '../assets/images/projects/harbr/guest-journey-harbr-2000x1125.jpg';

// Shared Bilder
import workHard from '../assets/images/shared/work-hard-2000x1125.jpg';
import wondera from '../assets/images/shared/wondera-wontec-2000x1125.png';
import roseSteillagen from '../assets/images/shared/rose-steillagen-2000x1125-3.png';

// Mapping von Pfaden zu importierten Bildern
export const imageMap: Record<string, ImageMetadata> = {
  '/src/assets/images/projects/wontec_web/Header_Image.png': wontecHeader,
  '/src/assets/images/projects/wontec_web/Second_Row_Left.png': wontecSecondLeft,
  '/src/assets/images/projects/wontec_web/Second_Row_Right_1.png': wontecSecondRight1,
  '/src/assets/images/projects/wontec_web/Second_Row_Right_2.png': wontecSecondRight2,
  '/src/assets/images/projects/wontec_web/Second_Row_Right_3.png': wontecSecondRight3,
  '/src/assets/images/projects/fischer/Header_Image.png': fischerHeader,
  '/src/assets/images/projects/fischer/Second_Row_Left.png': fischerSecondLeft,
  '/src/assets/images/projects/fischer/Second_Row_Right_1.png': fischerSecondRight1,
  '/src/assets/images/projects/fischer/Second_Row_Right_2.png': fischerSecondRight2,
  '/src/assets/images/projects/fischer/Second_Row_Right_3.png': fischerSecondRight3,
  '/src/assets/images/projects/steillagen/Header_Image.png': steillagenHeader,
  '/src/assets/images/projects/steillagen/Second_Row_Left.png': steillagenSecondLeft,
  '/src/assets/images/projects/steillagen/Projects_Top_Right.png': steillagenTopRight,
  '/src/assets/images/projects/harbr/guest-journey-harbr-2000x1125.jpg': harbrGuestJourney,
  '/src/assets/images/shared/work-hard-2000x1125.jpg': workHard,
  '/src/assets/images/shared/wondera-wontec-2000x1125.png': wondera,
  '/src/assets/images/shared/rose-steillagen-2000x1125-3.png': roseSteillagen,
}; 