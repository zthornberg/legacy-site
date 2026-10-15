import { useParams } from 'react-router-dom';
import { team, type TeamMember } from '../../data/team';
import { Button, Card, Container, CtaBand, Eyebrow, PageHero, Reveal, Section, TextLink } from '../../components/ui';
import TeamAvatar from '../../components/team/TeamAvatar';
import Breadcrumbs from '../../components/company/Breadcrumbs';
import { cn } from '../../lib/utils';

const CONTACT_EMAIL = 'info@legacybrokers.com';

function paragraphs(text: string) {
  return text.split(/\n\n+/).map((p) => p.trim()).filter(Boolean);
}

function SiblingLink({ member, direction }: { member: TeamMember; direction: 'prev' | 'next' }) {
  const next = direction === 'next';
  return (
    <Card hover to={`/company/team/${member.id}`} padding="sm" className={cn('flex items-center gap-4', next && 'sm:flex-row-reverse sm:text-right')}>
      <TeamAvatar name={member.name} src={member.headshot} focus={member.portrait} shape="circle" decorative />
      <div className="min-w-0">
        <div className="text-[12px] text-mute">{next ? 'Next' : 'Previous'}</div>
        <div className="mt-0.5 truncate font-display text-xl text-ink">{member.name}</div>
        <div className="truncate text-[13px] text-mute">{member.title}</div>
      </div>
    </Card>
  );
}

export default function TeamMemberBio() {
  const { name } = useParams<{ name: string }>();
  const index = team.findIndex((m) => m.id === name);
  const member = index >= 0 ? team[index] : undefined;

  if (!member) {
    return (
      <>
        <PageHero
          tone="paper"
          crumbs={[{ label: 'Company' }, { label: 'Team', to: '/company/team' }, { label: 'Not found' }]}
          eyebrow="Company · Team"
          title="We couldn't find that profile."
          lede="The link may be out of date. The full leadership team is one click away."
          actions={
            <Button to="/company/team" arrow>
              Meet the team
            </Button>
          }
        />
      </>
    );
  }

  const prev = team[(index - 1 + team.length) % team.length];
  const next = team[(index + 1) % team.length];
  const firstName = member.name.split(' ')[0];
  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`For ${member.name}`)}`;

  return (
    <>
      <Section tone="paper" size="none" className="border-b border-line">
        <Container className="pb-20 pt-10 md:pb-28 md:pt-12">
          <Breadcrumbs items={[{ label: 'Company' }, { label: 'Team', to: '/company/team' }, { label: member.name }]} />

          <div className="mt-10 grid gap-12 md:mt-14 lg:grid-cols-12 lg:gap-16">
            {/* Identity column */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-24">
                <Reveal className="flex items-end gap-5 lg:block">
                  <TeamAvatar
                    name={member.name}
                    src={member.headshot}
                    focus={member.portrait}
                    priority
                    className="w-32 shrink-0 sm:w-44 lg:w-full"
                  />
                  <div className="min-w-0 lg:mt-8">
                    <h1 className="font-display text-display-lg text-ink">{member.name}</h1>
                    <p className="mt-2 text-[15px] text-mute">{member.title}</p>
                  </div>
                </Reveal>
                <div className="mt-8 border-t border-line pt-6">
                  <Eyebrow tone="mute" as="p">
                    Contact
                  </Eyebrow>
                  <div className="mt-3">
                    <TextLink href={mailto}>Email {firstName}</TextLink>
                  </div>
                  <p className="mt-2 text-[13px] text-mute">Via {CONTACT_EMAIL}</p>
                </div>
              </div>
            </aside>

            {/* Bio */}
            <div className="lg:col-span-8">
              {member.sections.map((section, si) => {
                const paras = paragraphs(section.text);
                const statement = paras.length === 1 && paras[0].length < 160;
                return (
                  <Reveal
                    as="section"
                    key={section.label}
                    className={cn(si > 0 && 'mt-12 border-t border-line pt-10 md:mt-14 md:pt-12')}
                  >
                    <h2>
                      <Eyebrow index={si + 1}>{section.label}</Eyebrow>
                    </h2>
                    {statement ? (
                      <p className="mt-6 max-w-2xl font-display text-display-sm text-ink md:text-[1.75rem] md:leading-[1.3]">
                        {paras[0]}
                      </p>
                    ) : (
                      <div className="mt-6 space-y-5">
                        {paras.map((p, pi) => (
                          <p
                            key={pi}
                            className={cn(
                              si === 0 && pi === 0
                                ? 'font-display text-[1.375rem] leading-[1.4] text-ink md:text-[1.625rem] md:leading-[1.35]'
                                : 'text-[17px] leading-relaxed text-ink/80'
                            )}
                          >
                            {p}
                          </p>
                        ))}
                      </div>
                    )}
                  </Reveal>
                );
              })}

              {team.length > 1 && (
                <nav aria-label="More of the team" className="mt-16 grid gap-4 border-t border-line pt-10 sm:grid-cols-2 md:mt-20">
                  <SiblingLink member={prev} direction="prev" />
                  <SiblingLink member={next} direction="next" />
                </nav>
              )}
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand
        title={`Start a conversation with ${firstName} and the team.`}
        body="Whether you're preparing a sale or building a brokerage practice, the first conversation is confidential and carries no obligation."
        actions={
          <>
            <Button to="/contact" size="lg" arrow>
              Start a conversation
            </Button>
            <Button to="/company/team" size="lg" variant="secondary">
              Meet the full team
            </Button>
          </>
        }
      />
    </>
  );
}
