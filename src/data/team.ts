export type TeamSection = { label: string; text: string };
export type TeamMember = {
  id: string;
  name: string;
  title: string;
  photo?: string;
  sections: TeamSection[];
};

export const team: TeamMember[] = [
  {
    id: "zackary-thornberg",
    name: "Zackary Thornberg",
    title: "Chief Executive Officer",
    photo: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
    sections: [
      {
        label: "About",
        text:
"Zack sets the standard for how Legacy shows up: prepared, calm, and relentlessly on the client's side. He's led or supported $50M+ in transactions and is most comfortable doing the unglamorous work—clean comps, clear narratives, disciplined follow-through. He spearheads national go-to-market campaigns, coaches brokers on principled negotiation, and keeps the bar simple: under-promise, over-deliver, protect dignity at every step.\n\nBefore Legacy, Zack built national sales programs across complex, high-touch deals. He cares more about quiet preparation than noise, and he expects the same from the teams who serve founders and buyers through consequential moments."
      },
      {
        label: "Personal",
        text:
"A devout Christian and father of four (Piper, Jackie, Jasmine, Autumn), Zack reads widely across business, economics, psychology, and philosophy. He appreciates the clarity and ambition of thinkers like Naval Ravikant, Peter Thiel, Phil Knight, Benjamin Franklin, and Sam Altman. Dostoevsky is a favorite—reminding him that human decisions are always more complex than they look, which is why he listens first, then acts with conviction."
      },
      {
        label: "Why this work",
        text:
"Entrepreneurship is personal. Zack's goal is to make hard transitions easier—and to leave every counterparty better than he found them."
      }
    ]
  },
  {
    id: "david-tucker",
    name: "David Tucker",
    title: "Chief Operations Officer",
    photo: "https://images.pexels.com/photos/2182976/pexels-photo-2182976.jpeg",
    sections: [
      {
        label: "About",
        text:
"David is a systems builder who turns judgment into process. He helped scale his family's Middle-Tennessee textiles company from a standing start to $5M+ in annual revenue, professionalizing production, tightening cash cycles, and developing people. Previously, as operations director at a leading tactical-gear manufacturer, he helped steer a 3,000% growth arc without letting quality slip.\n\nAt Legacy, David designs the machine behind the promises—clean pipelines, practical checklists, and steady execution that holds under pressure so brokers can focus on outcomes, not friction."
      },
      {
        label: "Personal",
        text:
"David and his wife, Lauren, live in Nashville. He enjoys long walks, time with family and friends, and serving his church and community. He lends energy to mission-driven work that protects free speech and strengthens civil society."
      },
      {
        label: "Why this work",
        text:
"Because good process is respect. It protects client time, dollars, and outcomes."
      }
    ]
  },
  {
    id: "cameron-bloniarz",
    name: "Cameron Bloniarz",
    title: "Chief Marketing Officer",
    photo: "https://images.pexels.com/photos/2182979/pexels-photo-2182979.jpeg",
    sections: [
      {
        label: "About",
        text:
"Cameron makes demand feel effortless—and never lets it run on autopilot. A full-stack storyteller (strategy, script, video, distribution), he led brand and growth initiatives at Mold In Graphics Systems before building Legacy's proprietary seller-lead engine. He blends creative instincts with rigorous testing, keeping brokers in real conversations and the pipeline both warm and honest.\n\nHe believes in saying one true thing well, then proving it with results. Human tone over hype; proof over promises."
      },
      {
        label: "Personal",
        text:
"Cameron lives near Sedona with his wife, Celeste, and their newborn daughter. Weekends look like ultimate frisbee, thoughtful personal finance, travel—and the occasional Pokémon VGC tournament for equal parts strategy and fun."
      },
      {
        label: "Why this work",
        text:
"Owners deserve clarity and buyers deserve signal. Great marketing gives both."
      }
    ]
  },
  {
    id: "gene-wright",
    name: "Gene Wright",
    title: "Senior Advisor / Mentor Broker",
    photo: "/media/Gene Headshot Full Sized.png",
    sections: [
      {
        label: "About",
        text:
"Gene is steady hands for complex moments. With decades across enterprise consulting and middle-market advisory, he's supported transactions involving nationally recognized brands and today leads Northstar Business Advisories while serving in leadership within Georgia's brokerage community. He co-developed state-approved broker education and is the person our brokers call when a listing must become a defensible story—or when diligence gets noisy.\n\nHis counsel is practical and unvarnished: what actually moves value, what breaks deals, and how to prepare cleanly for both."
      },
      {
        label: "Personal",
        text:
"Gene lives outside Atlanta. He loves good food, SEC football, and investing time in the next generation of founders and analysts through entrepreneurship education."
      },
      {
        label: "Why this work",
        text:
"Helping owners finish well—and helping advisors learn to do it the right way."
      }
    ]
  },
  {
    id: "brady-smith",
    name: "Brady Smith",
    title: "Senior Software Engineer / IT Support",
    photo: "/media/Brady Smith Headshot.png",
    sections: [
      {
        label: "About",
        text:
"Brady builds the software that makes Legacy feel modern without getting in the way. A lifelong technologist, he previously led engineering for a successful blockchain-enabled strategy game. At Legacy he owns the broker portal, secure integrations, and the quiet data plumbing that turns information into usable signal for busy advisors.\n\nHe partners tightly with operations so tools match reality—fewer clicks, faster answers, better decisions."
      },
      {
        label: "Personal",
        text:
"Brady brings levity to the team. He enjoys time outdoors, movies with friends, and spoiling his pets. He and Zack share a throwback bond from their junior days competing internationally in Pokémon—a reminder to stay calm and focused when stakes are high."
      },
      {
        label: "Why this work",
        text:
"Because trustworthy software should disappear into the background and let good judgment lead."
      }
    ]
  }
];