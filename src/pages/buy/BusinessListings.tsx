import { Button, Card, Container, CtaBand, Eyebrow, PageHero, Reveal, Section, SectionHeading, Stat } from '../../components/ui';
import ProcessSection from '../../components/ProcessSection';
import ListingsLedger from '../../components/buy/ListingsLedger';
import { LISTINGS } from '../../components/buy/listings';

export default function BusinessListings() {
  return (
    <>
      <PageHero
        tone="paper"
        crumbs={[{ label: 'Buy' }, { label: 'Current listings' }]}
        eyebrow="Buy · Listings"
        title="Businesses currently for sale with Legacy."
        lede="Every listing is confidential. Summary financials are shown here; the seller's identity, the CIM and full financials are released to registered buyers under a signed NDA."
        actions={
          <>
            <Button to="/buy/registration" size="lg" arrow>
              Register as a buyer
            </Button>
            <Button to="/buy/representation" variant="secondary" size="lg">
              Buyer representation
            </Button>
          </>
        }
      />

      <Section tone="paper" aria-labelledby="listings-title">
        <Container>
          <SectionHeading
            split
            eyebrow="Representative listings"
            id="listings-title"
            title="Summary financials, before the NDA."
            lede="Live inventory changes weekly. Figures are rounded; cash flow is shown as SDE or adjusted EBITDA depending on size."
          />
          <Reveal className="mt-12">
            <ListingsLedger listings={LISTINGS} />
          </Reveal>
          <p className="mt-5 text-xs leading-relaxed text-mute-soft">
            Listings are anonymized and representative. Asking prices are indicative and subject to diligence.
          </p>
        </Container>
      </Section>

      <ProcessSection mode="buy" />

      <Section tone="paper" aria-labelledby="network-title">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-7">
              <Eyebrow className="mb-4">Buyer network</Eyebrow>
              <h2 id="network-title" className="max-w-xl font-display text-display-lg text-ink">
                The buyers who see Legacy deals first.
              </h2>
              <div className="mt-10 grid gap-8 border-t border-line pt-8 sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-12">
                <Stat value="2,400+" label="Registered buyers" size="lg" />
                <p className="max-w-md text-[15px] leading-relaxed text-mute">
                  Private equity groups, family offices, search funds, strategic acquirers and individual operators.
                  Each registration is reviewed by a Legacy advisor, so sellers meet buyers who are qualified to close and
                  buyers see businesses that fit their criteria.
                </p>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-5" delay={0.06}>
              <Card tone="brass" padding="lg" className="h-full">
                <Eyebrow>For buyers</Eyebrow>
                <h3 className="mt-4 font-display text-display-sm text-ink">See new listings before they go wide.</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-mute-strong">
                  Register once with your criteria. We send matching businesses, including confidential off-market
                  opportunities, and handle the NDA for every deal you request.
                </p>
                <div className="mt-7">
                  <Button to="/buy/registration" arrow>
                    Register as a buyer
                  </Button>
                </div>
                <p className="mt-5 text-[13px] leading-relaxed text-mute">
                  Already registered? Request any listing above and we will match it to your profile.
                </p>
              </Card>
            </Reveal>
          </div>
        </Container>
      </Section>

      <CtaBand
        eyebrow="For owners"
        title="Own a business like these? Start with a valuation."
        body="Legacy runs a confidential, competitive sale process for owners of $1M–$25M companies. It begins with a private conversation about what your business is worth."
        actions={
          <>
            <Button to="/contact?intent=sell" size="lg" arrow>
              Request a valuation
            </Button>
            <Button to="/sell/brokerage" variant="secondary" size="lg">
              How we sell
            </Button>
          </>
        }
      />
    </>
  );
}
