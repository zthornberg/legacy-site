import { Button, CtaBand } from '../components/ui';
import HomeHero from '../components/home/HomeHero';
import ProofStrip from '../components/home/ProofStrip';
import ThreePaths from '../components/home/ThreePaths';
import SaleTimeline from '../components/home/SaleTimeline';
import ClosedTransactions from '../components/home/ClosedTransactions';
import Approach from '../components/home/Approach';
import LicensingBand from '../components/home/LicensingBand';
import home from '../content/home.json';

export default function Home() {
  const { cta } = home;
  return (
    <>
      <HomeHero />
      <ProofStrip />
      <ThreePaths />
      <SaleTimeline />
      <ClosedTransactions />
      <Approach />
      <LicensingBand />
      <CtaBand
        tone="brass"
        title={cta.title}
        body={cta.body}
        actions={
          <>
            <Button to={cta.primary.to} arrow>
              {cta.primary.label}
            </Button>
            <Button to={cta.secondary.to} variant="secondary">
              {cta.secondary.label}
            </Button>
          </>
        }
      />
    </>
  );
}
