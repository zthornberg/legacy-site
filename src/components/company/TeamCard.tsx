import { ArrowRight } from 'lucide-react';
import { Card } from '../ui';
import TeamAvatar from '../team/TeamAvatar';
import type { TeamMember } from '../../data/team';

/** First paragraph of a member's first bio section. */
function bioExcerpt(member: TeamMember) {
  return member.sections[0]?.text.split(/\n\n+/)[0] ?? '';
}

/** Grid card for the team index. The whole card links to the bio. */
export default function TeamCard({ member, priority = false }: { member: TeamMember; priority?: boolean }) {
  return (
    <Card hover to={`/company/team/${member.id}`} padding="none" className="flex h-full flex-col rounded-2xl p-2">
      <TeamAvatar
        name={member.name}
        src={member.headshot}
        focus={member.portrait}
        decorative
        priority={priority}
        className="rounded-lg"
      />
      <div className="flex flex-1 flex-col px-3 pb-4 pt-6 sm:px-4">
        <h3 className="font-display text-display-sm text-ink">{member.name}</h3>
        <p className="mt-1 text-[13px] leading-snug text-mute">{member.title}</p>
        <p className="mt-4 line-clamp-3 text-[14px] leading-relaxed text-mute-strong">{bioExcerpt(member)}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[13px] font-medium text-ink">
          Read bio
          <ArrowRight
            className="h-3.5 w-3.5 text-mute transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-ink"
            aria-hidden
          />
        </span>
      </div>
    </Card>
  );
}
