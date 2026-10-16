import { ArrowRight } from 'lucide-react';
import { Card } from '../ui';
import TeamAvatar from '../team/TeamAvatar';
import type { TeamMember } from '../../data/team';

/**
 * Grid card for the team index. The whole card links to the bio.
 * Two narrow columns on phones, so the summary only appears from `sm` up. Summaries are written to fit;
 * the clamp (3 lines on tablet-width cards, 2 from `xl`) is only a safety net.
 */
export default function TeamCard({ member, priority = false }: { member: TeamMember; priority?: boolean }) {
  return (
    <Card hover to={`/company/team/${member.id}`} padding="none" className="flex h-full flex-col p-1.5 sm:p-2">
      <TeamAvatar
        name={member.name}
        src={member.headshot}
        focus={member.portrait}
        decorative
        priority={priority}
        className="rounded-lg"
      />
      <div className="flex flex-1 flex-col px-2 pb-3 pt-4 sm:px-4 sm:pb-4 sm:pt-6">
        <h3 className="font-display text-xl leading-tight text-ink sm:text-display-sm">{member.name}</h3>
        <p className="mt-1 text-[12px] leading-snug text-mute sm:text-[13px]">{member.title}</p>
        <p className="mt-4 hidden text-[14px] leading-relaxed text-mute-strong sm:line-clamp-3 xl:line-clamp-2">{member.summary}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-[13px] font-medium text-ink sm:pt-6">
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
