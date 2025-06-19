export interface Author {
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  author: Author;
  category: string;
  tags: string[];
  readingTime: number;
}

// Authors
const authors = {
  drJaneSmith: {
    name: 'Dr. Jane Smith',
    role: 'Chief Scientific Officer',
    avatar: '/female-scientist-portrait.png',
    bio: "Dr. Jane Smith leads SciGen's research initiatives with over 15 years of experience in computational biology and scientific software development. She holds a Ph.D. in Bioinformatics from Stanford University.",
  },
  katerinaPavlidi: {
    name: 'Katerina Pavlidi, MSt',
    role: 'Chief Scientific Officer',
    avatar: '/blog/images/katerina.webp',
    bio: 'Katerina works in Sales and Marketing at SciGen Technologies. She is also a college and medical school application advisor, as well as a freelance editor.',
  },
};

// Blog posts data
export const blogPosts: BlogPost[] = [
  {
    title: "What's In Our (Conference) Bag",
    slug: 'whats-in-our-conference-bag',
    excerpt:
      'Here are a few must-bring items that we think everyone attending a scientific conference should carry',
    content: `<p style="line-height: 1.5; margin-bottom: 0.8em;">Over the years, our team has attended hundreds of scientific conferences worldwide. We’ve seen it all, from presenters sending us their poster just a few minutes before their talk, to synchronizing dozens of monitors in preparation for thousands of time-scheduled poster presentations over just a couple of days.</p>
        
<p style="justify-self: center; margin-bottom: 0.8em;">
<img alt="What's In Our (Conference) Bag" src="/blog/images/bag.png" />
</p>
  
<p style="line-height: 1.5; margin-bottom: 0.8em;">
Here are a few must-bring items that we think everyone attending a scientific conference should carry:
</p>
  
<p style="line-height: 1.5; margin-left: 2rem;">1. USB stick with your poster(s) on it</p>
<p style="line-height: 1.5; margin-left: 3rem; margin-bottom: 0.8rem;">If you missed the submission deadline or made some last-minute poster changes, it’s good to have a spare copy of your poster in your email or on a USB. Whether we’re supporting your conference onsite or online, we’ll do everything we can to make sure the most up-to-date version of your poster is what gets displayed.</p>

<p style="line-height: 1.5; margin-left: 2rem;">2. Phone/laptop chargers</p>
<p style="line-height: 1.5; margin-left: 3rem; margin-bottom: 0.8rem;">There’s nothing worse than being stuck without battery power when you need your devices for presenting and networking. Thankfully, most conference venues have plenty of spare outlets for use.</p>

<p style="line-height: 1.5; margin-left: 2rem;">3. Business cards</p>
<p style="line-height: 1.5; margin-left: 3rem; margin-bottom: 0.8rem;">Most people attend conferences to expand their network. Handing out your card to new acquaintances is a great way to help them remember you so you can stay connected after the conference. Be tactful with this, though, handing out your card to strangers can come off as disingenuous.</p>

<p style="line-height: 1.5; margin-left: 2rem;">4. Band-aids</p>
<p style="line-height: 1.5; margin-left: 3rem; margin-bottom: 0.8rem;">Papercuts and blisters are not unheard of at conferences. If we’re wearing new shoes, we always come prepared, as we’ll be standing and walking for long periods of time.</p>

<p style="line-height: 1.5; margin-left: 2rem;">5. Hand sanitizer and mask</p>
<p style="line-height: 1.5; margin-left: 3rem; margin-bottom: 0.8rem;">Especially for events in the winter months, maintaining good hygiene in crowded conference spaces is the best way to avoid spreading or contracting illness.</p>

<p style="line-height: 1.5; margin-left: 2rem;">6. Water and a snack</p>
<p style="line-height: 1.5; margin-left: 3rem; margin-bottom: 0.8rem;">Most venues have these available, but it’s good to carry something on you. With the packed schedule of most conferences, you may not have time to eat between presentations or sessions that you want to attend.</p>

<p style="line-height: 1.5; margin-left: 2rem;">7. A scarf or light coat</p>
<p style="line-height: 1.5; margin-left: 3rem; margin-bottom: 0.8rem;">The temperatures in conference halls are not that consistent, unfortunately. In most cases, we get super cold if we only wear our shirts.</p>

<p style="line-height: 1.5; margin-left: 2rem;">8. Basic medications for pain relief</p>
<p style="line-height: 1.5; margin-left: 3rem; margin-bottom: 0.8rem;">We always bring along an Advil travel pack. Even if you don’t end up needing it, someone around you might, and your preparedness will make you look brilliant!</p>

<br />

    `,
    coverImage: '/blog/images/bag.png',
    date: '2024-11-19',
    author: authors.katerinaPavlidi,
    category: 'Events',
    tags: ['Events', 'Tips', 'Handy'],
    readingTime: 6,
  },

  {
    title: 'Our New Judging Tool Is Here',
    slug: 'our-new-judging-tool-is-here',
    excerpt:
      'InstaJudge is a paperless and app-less judging tool that facilitates an easy judging process and produces instant results. Scan the code, leave a rating, make your mark.',
    content: `<p style="margin-bottom: 0.8em;"><strong>Introducing</strong> <u style="color:#1155cc"><a target="_blank" href="http://instajudge.com"><strong>InstaJudge</strong></a></u></p>

<p style="margin-bottom: 0.8em;">
SciGen Technologies has developed a new judging tool for onsite presentations.
</p> 

<p style="line-height: 1.5;">
This latest addition to our product offerings is going to transform how you execute judging at your next event. Whether it’s scientific posters, photographs, or cupcakes, InstaJudge makes it easy to solicit ratings and opinions from participants.
</p>

<br />

<p style="margin-bottom: 0.8em;"><strong>How does it work?</strong></p>

<p style="line-height: 1.5; margin-bottom: 0.8em;">
The concept is simple: users scan a QR code with their phones and start submitting scores. The results then become instantly available for the organizers to use and determine category winners.
</p>

<p style="line-height: 1.5; margin-bottom: 0.8em;">
The QR code can be created for a general audience (where everyone scans the same code) or customized for each individual judge and their rating scenario.
</p>

<p style="line-height: 1.5; margin-bottom: 0.8em;">
It’s a <strong>web-based alternative to paper ballots</strong> that makes submitting scores <strong>effortless</strong> and provides <strong>instant results</strong>. Users don’t have to download anything or even move from their seats in order to share their opinion in real time.
</p>

<p style="line-height: 1.5;">
InstaJudge lets you simplify feedback collection and ensure every vote is heard and valued, making your events truly unforgettable.
</p>

<br />

<p style="line-height: 1.5; margin-bottom: 0.8em;"><strong>ePosters and InstaJudge On Site</strong></p>

<p style="line-height: 1.5; margin-bottom: 0.8em;">
InstaJudge was used for the first time at a meeting we support in Boston, MA, the <u style="color:#1155cc"><a target="_blank" href="https://epostersonline.com/psrc2024/">Plastic Surgery Research Council 2024 Annual Meeting</a></u>.
</p>

<p style="line-height: 1.5; margin-bottom: 0.8em;">
<img alt="Our New Judging Tool Is Here" src="/blog/images/psrc2024-insta-judge.jpg" />
</p>

<p style="line-height: 1.5; margin-bottom: 0.8em;">
It was also used at the European Interdisciplinary Cybersecurity Conference (EICC) in Xanthi, Greece.
</p>

<p style="line-height: 1.5; margin-bottom: 0.8em;">
See for yourself how InstaJudge works at <u style="color:#1155cc"><a target="_blank" href="https://instajudge.com/demo">instajudge.com/demo</a></u>.
</p>

<p style="line-height: 1.5; margin-bottom: 0.8em;">
If you’re interested in trying InstaJudge, contact us at <u style="color:#1155cc"><a href="mailto:sales@scigentech.com">sales@scigentech.com</a</u>>
</p>

<br />

`,
    coverImage: '/blog/images/psrc2024-insta-judge.jpg',
    date: '2024-6-25',
    author: authors.katerinaPavlidi,
    category: 'Products',
    tags: ['Products', 'InstaJudge', 'Rating'],
    readingTime: 5,
  },
  // {
  //   title: 'Enhancing Research Reproducibility Through Automated Workflows',
  //   slug: 'enhancing-research-reproducibility',
  //   excerpt:
  //     'How automated scientific workflows are addressing the reproducibility crisis in research by standardizing methodologies and reducing human error.',
  //   content: [
  //     'The reproducibility crisis has emerged as one of the most significant challenges facing modern science. Across disciplines, researchers have found that a troubling percentage of published findings cannot be replicated by independent teams. This issue undermines scientific progress and erodes public trust in research. At SciGen, we believe that automated workflows represent a powerful tool for addressing this crisis.',
  //     'Reproducibility failures stem from multiple sources, including selective reporting, p-hacking, and methodological opacity. However, a substantial portion also results from simple human error and inconsistent application of methods. These latter issues are particularly amenable to technological solutions.',
  //     'Our approach to enhancing reproducibility begins with comprehensive workflow documentation. Every step in a research process—from data collection to statistical analysis—is explicitly defined in a machine-readable format. This serves as both executable code and as documentation, eliminating the discrepancies that often arise between methods sections in papers and actual analytical procedures.',
  //     'Parameter management represents another critical component. Our systems track all variables and settings used in analyses, storing them alongside results. This prevents the common problem of researchers forgetting exactly which parameters were used to generate specific outputs, especially in iterative processes that may involve hundreds of experimental configurations.',
  //     'Environmental consistency is maintained through containerization technologies. By packaging analyses with their exact computational environment, we ensure that code runs identically regardless of the underlying hardware or operating system. This eliminates the "it works on my machine" problem that frequently hampers reproduction attempts.',
  //     'For data-intensive research, we implement automated data provenance tracking. This creates an unbroken chain of custody from raw data through all transformation and analysis steps to final results. When questions arise about findings, researchers can trace backward through this chain to identify exactly where discrepancies might have occurred.',
  //     'Perhaps most importantly, our workflow systems are designed to integrate with existing research practices rather than forcing scientists to adopt entirely new methodologies. The best reproducibility tools are those that researchers will actually use, which means minimizing friction and maximizing immediate benefits beyond just reproducibility.',
  //     'The impact of these approaches extends beyond just confirming existing findings. By standardizing workflows and reducing errors, researchers can build more confidently on previous work, accelerating the pace of discovery. Additionally, well-documented, reproducible research is more readily translated into practical applications, bridging the gap between laboratory findings and real-world impact.',
  //   ],
  //   coverImage: '/placeholder.svg?key=ulhuc',
  //   date: '2023-08-05',
  //   author: authors.drJaneSmith,
  //   category: 'Research Methodology',
  //   tags: [
  //     'Reproducibility',
  //     'Automation',
  //     'Scientific Workflows',
  //     'Research Methods',
  //     'Data Science',
  //   ],
  //   readingTime: 8,
  // },
];

// Extract unique categories for filtering
export const blogCategories = [
  ...new Set(blogPosts.map((post) => post.category)),
];
