import { team } from '../../data/team';
import { Button, Card, Container, CtaBand, Eyebrow, PageHero, Reveal, Section, SectionHeading, TextLink } from '../../components/ui';
import TeamCard from '../../components/company/TeamCard';

const VALUES = [
  {
    kicker: 'How we serve',
    title: 'Humility',
    body: "We put our clients' needs before our own and approach every relationship with respect and empathy, especially when the decision is personal.",
  },
  {
    kicker: 'How we execute',
    title: 'Excellence',
    body: 'Careful preparation, continuous improvement, and a relentless standard for the work that buyers will scrutinize line by line.',
  },
  {
    kicker: 'How we negotiate',
    title: 'Integrity',
    body: "Every deal is built on trust, transparency, and doing what's right for all parties involved in the transaction.",
  },
];

export default function OurTeam() {
  return (
    <>
      <PageHero
        tone="paper"
        eyebrow="Company · Team"
        title="The people behind every mandate."
        lede="Our team is your team. Legacy's leadership brings together entrepreneurs, finance professionals, and marketers united by a commitment to service, drawing on 35+ years of combined experience to guide owners and brokers through consequential transactions."
      />

      <Section tone="paper" aria-labelledby="leadership-heading" className="pt-12 md:pt-16">
        <Container>
          <div className="mb-10 flex items-end justify-between gap-6 border-b border-line pb-5 md:mb-12">
            <h2 id="leadership-heading" className="eyebrow text-brass-deep">
              Leadership
            </h2>
            <span className="tabular text-[13px] text-mute">{String(team.length).padStart(2, '0')} people</span>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {team.map((member, i) => (
              <Reveal as="li" key={member.id} delay={(i % 3) * 0.06} className="h-full">
                <TeamCard member={member} priority={i < 3} />
              </Reveal>
            ))}
            <Reveal as="li" delay={0.12} className="h-full">
              <Card tone="deep" padding="lg" className="flex h-full min-h-[18rem] flex-col justify-between rounded-2xl">
                <Eyebrow tone="mute">Beyond the leadership team</Eyebrow>
                <div className="mt-10">
                  <h3 className="font-display text-display-sm text-ink">A national network of licensed brokers.</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-mute">
                    Independent brokers build their own M&amp;A practices on the Legacy platform, with this team behind
                    their process, marketing, and software.
                  </p>
                  <TextLink to="/licensing/program" className="mt-6">
                    Explore the licensing program
                  </TextLink>
                </div>
              </Card>
            </Reveal>
          </ul>
        </Container>
      </Section>

      <Section tone="white" divider aria-labelledby="values-heading">
        <Container>
          <SectionHeading
            id="values-heading"
            eyebrow="Values"
            title="Three commitments behind every engagement."
            split
            lede="They shape how we prepare a company, how we run a process, and how we treat every counterparty at the table."
          />
          <div className="mt-14 grid border-t border-line md:mt-16 md:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal
                key={v.title}
                delay={i * 0.06}
                className="border-b border-line py-8 md:border-b-0 md:border-l md:px-8 md:py-10 md:first:border-l-0 md:first:pl-0 md:last:pr-0"
              >
                <Eyebrow index={i + 1} tone="mute">
                  {v.kicker}
                </Eyebrow>
                <h3 className="mt-6 font-display text-display-md text-ink">{v.title}</h3>
                <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-mute">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Work with the team behind Legacy."
        body="Whether you're preparing a sale or building a brokerage practice, the first conversation is confidential and carries no obligation."
        actions={
          <>
            <Button to="/contact" size="lg" arrow>
              Start a conversation
            </Button>
            <Button to="/licensing/program" size="lg" variant="secondary">
              Explore licensing
            </Button>
          </>
        }
      />
    </>
  );
}
