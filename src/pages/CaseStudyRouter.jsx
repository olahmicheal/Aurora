import { useParams } from 'react-router-dom';
import PaypulseCaseStudy from './PaypulseCaseStudy';
import StorecomCaseStudy from './StorecomCaseStudy';
import EventSpaceCaseStudy from './EventSpaceCaseStudy';
import ElevanaCaseStudy from './ElevanaCaseStudy';
import PrechipsCaseStudy from './PrechipsCaseStudy';
import TwentyFourCaseStudy from './TwentyFourCaseStudy';
import MaximumWackoCaseStudy from './MaximumWackoCaseStudy';

import ComingSoon from './ComingSoon';

const caseStudyPages = {
  paypulse: PaypulseCaseStudy,
  storecom: StorecomCaseStudy,
  eventspace: EventSpaceCaseStudy,
  elevana: ElevanaCaseStudy,
  prechips: PrechipsCaseStudy,
  twentyfour: TwentyFourCaseStudy,
  maximumwacko: MaximumWackoCaseStudy,

};

export default function CaseStudyRouter() {
  const { slug } = useParams();
  const PageComponent = caseStudyPages[slug];

  if (!PageComponent) {
    return <ComingSoon />;
  }

  return <PageComponent />;
}