// All site text lives here. Edit this file to update the portfolio.
// Anything marked PLACEHOLDER is a dummy value — replace before sharing widely.

window.SITE = {
  name: "Rethabile Shongwe",
  role: "Video & Content Specialist",
  email: "rshongwe@gmail.com",
  // Social links — a button appears for each one that has a URL
  socials: [
    { name: "TikTok", url: "https://www.tiktok.com/@ritzthabi" },
    { name: "YouTube", url: "https://www.youtube.com/channel/UCCaiBI4gwjhmRhEULwl65cA" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/rethabile-shongwe-41867422/" },
  ],
  cv: "", // PLACEHOLDER — e.g. "assets/Rethabile-Shongwe-CV.pdf" (button hides while empty)

  reel: {
    youtubeId: "Na23kKYWs98",
    youtubeUrl: "https://youtu.be/Na23kKYWs98",
    localFile: "assets/video/showreel-landscape.mp4", // used only while youtubeId is empty
    poster: "assets/img/reel-title.jpg",
  },

  intro:
    "I lead video and content across Africa: reality shows, award nights, entertainment formats and branded campaigns. Fifteen years of making content that connects, and keeping the team moving while we do it.",

  stats: [
    { value: "15+", label: "Years in African digital media" },
    { value: "6", label: "Markets" },
    { value: "20+", label: "Social platforms contributed to" },
    // Hidden until real figures are in — uncomment and update to show them:
    // { value: "10+", label: "YouTube channels managed" },
    // { value: "500M+", label: "Lifetime channel views" },
  ],

  whatIDo: "Video and Content Specialist",
  markets: ["Kenya", "Tanzania", "Uganda", "Nigeria", "Ghana", "South Africa"],
  skills: ["FCP", "CapCut", "Premiere Pro", "Analytics", "Camera"],
  youtube:
    "Managed and published on YouTube channels including Africa Magic, Akwaaba Magic, Maisha Magic, BBNaija and Nigerian Idol, handling monetisation, rights and delivery.",

  // Selected work. Categories drive the filter buttons, in this order.
  // gif: true = short silent loop, no "Tap for sound".
  categories: ["Talking Heads", "AI", "On Set", "Fun"],
  // Pinned first in Selected Work and shown under every filter
  pinned: {
    title: "Showreel",
    show: "4:5 cut · 0:54",
    clip: "assets/work/pinned-reel.mp4",
    poster: "assets/work/pinned-reel.jpg",
    youtubeId: "_smEU6cIbkc",
    youtubeUrl: "https://youtube.com/shorts/_smEU6cIbkc",
  },

  // false = always play the local files (the claude.ai preview can't embed YouTube)
  embedYouTube: true,
  work: [
    { title: "Sade", show: "Interview edit", category: "Talking Heads", clip: "assets/work/th-sade.mp4", poster: "assets/work/th-sade.jpg", link: "" },
    { title: "Remi", show: "Interview edit", category: "Talking Heads", clip: "assets/work/th-remi.mp4", poster: "assets/work/th-remi.jpg", link: "" },
    { title: "Tej", show: "Interview edit", category: "Talking Heads", clip: "assets/work/th-vertical.mp4", poster: "assets/work/th-vertical.jpg", link: "" },
    { title: "Mother of the Brides", show: "Interview edit", category: "Talking Heads", clip: "assets/work/th-mother.mp4", poster: "assets/work/th-mother.jpg", link: "" },
    { title: "Make It 80s", show: "Big Brother Naija S11", category: "AI", clip: "assets/work/ai-80s.mp4", poster: "assets/work/ai-80s.jpg", link: "" },
    { title: "Handler Song", show: "Big Brother Naija S11", category: "AI", clip: "assets/work/ai-handler.mp4", poster: "assets/work/ai-handler.jpg", link: "" },
    { title: "Reunion Soundbite", show: "BBNaija Reunion", category: "AI", clip: "assets/work/ai-reunion.mp4", poster: "assets/work/ai-reunion.jpg", link: "" },
    { title: "Ozee", show: "BBNaija Reunion", category: "AI", clip: "assets/work/ai-ozee.mp4", poster: "assets/work/ai-ozee.jpg", link: "" },
    { title: "Winner Reveal", show: "Big Brother Naija S11", category: "AI", clip: "assets/work/ai-winner.mp4", poster: "assets/work/ai-winner.jpg", link: "" },
    { title: "Angel Comes to Play", show: "BBNaija All Stars", category: "AI", clip: "assets/work/ai-angel.mp4", poster: "assets/work/ai-angel.jpg", link: "" },
    { title: "Rehearsals", show: "AMVCA 12", category: "On Set", clip: "assets/work/set-amvca.mp4", poster: "assets/work/set-amvca.jpg", link: "" },
    { title: "Housemate Profile", show: "Big Brother Naija S11", category: "On Set", clip: "assets/work/set-bluethopia.mp4", poster: "assets/work/set-bluethopia.jpg", link: "" },
    { title: "Love Island", show: "Islander feature", category: "On Set", clip: "assets/work/set-loveisland.mp4", poster: "assets/work/set-loveisland.jpg", link: "" },
    { title: "Ric Hassani", show: "Nigerian Idol S9", category: "On Set", clip: "assets/work/set-ric.mp4", poster: "assets/work/set-ric.jpg", link: "" },
    { title: "Bosslady", show: "Nigerian Idol S10", category: "On Set", clip: "assets/work/set-bosslady.mp4", poster: "assets/work/set-bosslady.jpg", link: "" },
    { title: "Winners", show: "AMVCA 12", category: "On Set", clip: "assets/work/set-amvca-winners.mp4", poster: "assets/work/set-amvca-winners.jpg", link: "" },
    { title: "Red & Yellow Card", show: "Big Brother Naija S11", category: "On Set", clip: "assets/work/set-redcard.mp4", poster: "assets/work/set-redcard.jpg", link: "" },
    { title: "Sights & Sounds", show: "AMVCA 12", category: "Fun", clip: "assets/work/fun-amvca.mp4", poster: "assets/work/fun-amvca.jpg", link: "" },
    { title: "Final Dance", show: "Stripped", category: "Fun", clip: "assets/work/fun-stripped.mp4", poster: "assets/work/fun-stripped.jpg", link: "" },
    { title: "Fairytale", show: "My Fairytale Wedding", category: "Fun", clip: "assets/work/fun-wedding.mp4", poster: "assets/work/fun-wedding.jpg", link: "" },
    { title: "Winners", show: "AMVCA 12", category: "Fun", clip: "assets/work/fun-amvca-creator.mp4", poster: "assets/work/fun-amvca-creator.jpg", link: "" },
    { title: "Countdown: Day 1", show: "FutureMe S2", category: "Fun", clip: "assets/work/fun-futureme-1.mp4", poster: "assets/work/fun-futureme-1.jpg", link: "" },
    { title: "Silhouette", show: "Real Housewives of Lagos S3", category: "Fun", clip: "assets/work/fun-rhol.mp4", poster: "assets/work/fun-rhol.jpg", link: "" },
    { title: "Wura Core", show: "Africa Magic", category: "Fun", clip: "assets/work/fun-wura.mp4", poster: "assets/work/fun-wura.jpg", link: "" },
  ],

  // Highlights: not shown yet. To bring the section back, re-add the Highlights
  // section to index.html and its render block to main.js. Draft wording — edit freely.
  highlights: [
    {
      title: "Big Brother Naija",
      text: "Video across multiple seasons: daily house highlights, housemate profiles, reunion specials and AI-led social edits.",
    },
    {
      title: "Nigerian Idol",
      text: "Digital content for Seasons 9 and 10: contestant intros, judge segments and live-show recaps.",
    },
    {
      title: "Channel Management",
      text: "Daily clipping and publishing across Canal+ general entertainment platforms.",
    },
  ],

  // Case study pages (project.html) — not linked from the site for now
  projects: [
    {
      slug: "amvca",
      title: "AMVCA",
      full: "Africa Magic Viewers' Choice Awards",
      network: "Africa Magic",
      years: "2018 – 2025",
      role: "Video Lead",
      loop: "assets/video/amvca.mp4",
      poster: "assets/img/amvca.jpg",
      youtubeId: "",
      brief:
        "Africa's biggest celebration of film and TV, every year. The brief: make the whole AMVCA week live online, from nominee announcements and rehearsals to the red carpet, the show and the winners' reactions.",
      did: [
        "Planned and led coverage across rehearsals, runway, nominee gala, red carpet and show night",
        "Ran the turnaround so backstage and winner content landed on YouTube and social the same night",
        "Shaped recurring formats: BTS, 'Do you speak AMVCA?', best-dressed and winners' reactions",
        "Reported performance after each edition to set the plan for the next one",
      ],
      results: [
        { value: "40+", label: "Videos per edition" }, // PLACEHOLDER
        { value: "25M", label: "Views across editions" }, // PLACEHOLDER
        { value: "Same night", label: "Winner content turnaround" }, // PLACEHOLDER
      ],
    },
    {
      slug: "bbnaija",
      title: "Big Brother Naija",
      full: "Big Brother Naija",
      network: "Africa Magic · DStv",
      years: "2018 – 2024",
      role: "Video Operations Lead",
      loop: "assets/video/bbnaija.mp4",
      poster: "assets/img/bbnaija.jpg",
      youtubeId: "",
      brief:
        "The continent's biggest reality show, running for months at a time and watched around the clock. The brief: keep the official channels fed every day and the audience hooked between live shows.",
      did: [
        "Managed the BBNaija YouTube channel: publishing, monetisation and rights",
        "Led freelance video teams across the season, from house highlights to host features",
        "Worked with YouTube on content requirements and anti-piracy",
        "Tracked SLAs and reported on content performance to management and clients",
      ],
      results: [
        { value: "1,000+", label: "Videos published per season" }, // PLACEHOLDER
        { value: "2M+", label: "Channel subscribers" }, // PLACEHOLDER
        { value: "Daily", label: "Publishing cadence" },
      ],
    },
    {
      slug: "nigerian-idol",
      title: "Nigerian Idol",
      full: "Nigerian Idol",
      network: "Africa Magic",
      years: "Seasons 9 – 10",
      role: "Digital Video & Content Manager",
      loop: "assets/video/idol.mp4",
      poster: "assets/img/idol.jpg",
      youtubeId: "",
      brief:
        "A live singing competition with a fanbase that lives online. The brief: build digital content around the contestants and judges that keeps viewers coming back between live shows.",
      did: [
        "Came up with digital-first segments: judge games, contestant profiles and live-show recaps",
        "Briefed and reviewed content with the production team and the client",
        "Kept YouTube, social and on-air promos aligned across the season",
        "Analysed what performed and fed it back into the next episodes",
      ],
      results: [
        { value: "150+", label: "Pieces per season" }, // PLACEHOLDER
        { value: "10M", label: "Season views" }, // PLACEHOLDER
        { value: "2", label: "Seasons" },
      ],
    },
  ],

  // Scrolling banner: shows and channels worked on
  shows: [
    "Big Brother",
    "Big Brother Naija",
    "Nigerian Idol",
    "Love Island SA",
    "The Voice Nigeria",
    "AMVCA",
    "DStvMVCA",
    "Africa Magic",
    "Maisha Magics",
    "Maisha Magic Bongo",
    "Pearl Magics",
    "Akwaaba Magic",
    "Real Housewives of Lagos",
  ],

  experience: [
    {
      years: "2022 – 2026",
      title: "Digital Video & Content Manager",
      org: "Don't Look Down TV",
      note: "Video and content across Kenya, Tanzania, Uganda, Nigeria and Ghana: AMVCA, Nigerian Idol, BBNaija, GE Video.",
    },
    {
      years: "2018 – 2022",
      title: "Senior Video Operations Manager",
      org: "Don't Look Down TV",
      note: "Managed and published on YouTube channels including Africa Magic, Akwaaba Magic, Maisha Magic, BBNaija and Nigerian Idol, handling monetisation, rights and delivery.",
    },
    {
      years: "2012 – 2017",
      title: "Video Content Creator",
      org: "Don't Look Down TV · Contract",
      note: "DStv Catch-Up, freelance teams across Big Brother projects, video lead for The Voice Nigeria and The Voice Angola.",
    },
    {
      years: "2000 – 2011",
      title: "Director & Editor",
      org: "Freelance",
      note: "Mzansi Insider (SABC 1), the SABC Crown Gospel Awards, corporate work for SAB, and a Vuka campaign.",
    },
  ],

  education: "Diploma in Motion Picture, AFDA. Major in Directing, with Editing and Writing.",
};
