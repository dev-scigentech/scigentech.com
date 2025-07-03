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
  {
    title: 'ThrombUS+, a Horizon Europe Project',
    slug: 'horizon-europe-project',
    excerpt: `SciGen Technologies is a consortium partner in ThrombUS+, a Horizon Europe project tasked with creating a wearable device capable of the early detection of deep vein thrombosis. Learn more about our mission to transform DVT care at <a target="_blank" href="http://thrombus.eu">http://thrombus.eu</a>.`,
    content: `<p style="margin-bottom: 0.8em;">SciGen Technologies is a proud partner in the <u style="color:#1155cc"><a target="_blank" href="https://thrombus.eu/">ThrombUS+ project</a></u>, a Horizon Europe-funded venture to create a diagnostic wearable device capable of detecting deep vein thrombosis (DVT).</p>

<p style="margin-bottom: 0.8em;">
ThrombUS+ kicked off on January 1, 2024, and will conclude on June 30, 2027. The project has 18 partners from Greece, Lithuania, France, Germany, the USA, Italy, Finland, and Spain.
The Horizon Europe Innovation Action funds the venture with 9.5 M€.
</p>

<p style="margin-bottom: 0.8em;">
<u>What is ThrombUS+?</u>
</p>

<p style="margin-bottom: 0.8em;">
ThrombUS+ has an ambitious mission to develop an innovative wearable diagnostic device for point-of-care, operator-free, continuous monitoring of deep vein thrombosis. 
</p>

<p style="margin-bottom: 0.8em; place-self: center;">
<iframe width="560" height="315" src="https://www.youtube.com/embed/vSYu6Xk1FuA" title="ThrombUS+ Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</p>

<p style="margin-bottom: 0.8em;">
Deep vein thrombosis (DVT) poses a significant health risk, with potentially life-threatening consequences when left undetected.
DVT involves the formation of blood clots in deep veins, primarily in the lower limbs, leading to blood flow obstruction.
Shockingly, up to two-thirds of DVT cases exhibit no clinical symptoms, making early diagnosis challenging.
ThrombUS+ steps in to bridge this gap, bringing together a diverse team of experts spanning industry, technology, regulation, social science, and clinical trials.
</p>

<p style="margin-bottom: 0.8em;">
SciGen’s role in the project is to lead communication and dissemination activities, including the data challenge and engagement of stakeholders.
</p>

<p style="margin-bottom: 0.8em;">
Communication activities include raising awareness and sharing project information to a wide range of stakeholders and audiences, from practitioners to laypeople.
To accomplish the communication goals, SciGen has created a project <u style="color:#1155cc"><a target="_blank" href="https://thrombus.eu/">website</a></u>, <u style="color:#1155cc"><a target="_blank" href="https://www.youtube.com/watch?v=E1BCky4j_b0">educational video</a></u>,
<u style="color:#1155cc"><a target="_blank" href="https://www.linkedin.com/company/thrombus-eu-project/">social media channels</a></u>, <u style="color:#1155cc"><a target="_blank" href="https://thrombus.s3.eu-west-1.amazonaws.com/facts-sheet/print+flyer.pdf">flyer</a></u>,
and <u style="color:#1155cc"><a target="_blank" href="https://thrombus.us1.list-manage.com/subscribe?u=9a2b7c8eae90cb58d7b6a49c1&id=a2591c9ecf">newsletters</a></u>.
</p>

<p style="margin-bottom: 0.8em;">
Dissemination activities begin after the conclusion of data collection. The first clinical trial has already begun enrollment and is nearing 500 participants. The results will be shared with specialized audiences such as researchers, clinicians and policymakers.
The goal of disseminating the ThrombUS+ project results is to promote their use by relevant stakeholders and audiences and ensure a real-life application of the device for the benefit of patients.
</p>

<p style="margin-bottom: 0.8em;">
<u>About SciGen</u>
</p>

<p style="margin-bottom: 0.8em;">
SciGen is the company behind <u style="color:#1155cc"><a target="_blank" href="https://eposterslive.com/">ePostersLive</a></u>, <u style="color:#1155cc"><a target="_blank" href="https://instajudge.com/">InstaJudge</a></u>, PosterGenius, <u style="color:#1155cc"><a target="_blank" href="http://eposterscholar.com/">ePosterScholar</a></u>,
and other products that have transformed modern scientific communication. SciGen’s journey began with a vision to harness technology to make scientific research more accessible, efficient and impactful.
SciGen is also the inventor of the technology for electronic posters as a means of presentation at scientific conferences, which it introduced to the global market. This technology and the digital presentation of scientific (medical and academic) posters have become the most advanced and widespread method in the global scientific community.
SciGen Technologies' innovative technologies were highlighted in an article by the highly reputable <i>Nature</i> in 2012.
</p>

<p style="line-height: 1.5; margin-bottom: 0.3em; margin-top: 1.2em; width: 50%; place-self: center;">
<img alt="latest-consortium-meeting" src="/blog/images/latest-consortium-meeting.jpg" />
</p>
<p style="margin-bottom: 1.2em; font-size: 14px ; place-self:center;">
Prototype shared at the latest consortium meeting
</p>

<p style="margin-bottom: 0.8em;">
Consortium Partners:
</p>

<p style="margin-bottom: 0.8em;">
<ol style="margin-left: 2rem; margin-bottom: 0.8em;">
  <li>1) <u style="color:#1155cc"><a target="_blank" href="https://www.athenarc.gr/en/home">Athena Research Center</a></u>, Greece</li>
  <li>2) <u style="color:#1155cc"><a target="_blank" href="https://en.ktu.edu/">Kaunas University of Technology</a></u>, Lithuania</li>
  <li>3) <u style="color:#1155cc"><a target="_blank" href="https://vermon.com/">Vermon SA Center</a></u>, France</li>
  <li>4) <u style="color:#1155cc"><a target="_blank" href="https://www.ipms.fraunhofer.de/en.html">Fraunhofer IPMS</a></u>, Germany</li>
  <li>5) <u style="color:#1155cc"><a target="_blank" href="https://www.pcultrasound.com/">Telemed Ultrasound Medical Systems</a></u>, Lithuania</li>
  <li>6) <u style="color:#1155cc"><a target="_blank" href="https://echonous.com/">EchoNous</a></u>, USA</li>
  <li>7) <u style="color:#1155cc"><a target="_blank" href="https://www.medis.company/en/">medis Medizinische Messtechnik GmbH</a></u>, Germany</li>
  <li>8) <u style="color:#1155cc"><a target="_blank" href="https://comftech.com/en/">ComfTech srl</a></u>, Italy</li>
  <li>9) <u style="color:#1155cc"><a target="_blank" href="https://www.tuni.fi/en">Tampere University</a></u>, Finland</li>
  <li>10) <u style="color:#1155cc"><a target="_blank" href="https://lsmu.lt/en/">Lietuvos sveikatos mokslų universitetas (LSMU)</a></u>, Lithuania</li>
  <li>11) <u style="color:#1155cc"><a target="_blank" href="https://www.papageorgiou-hospital.gr/?lang=en">Papageorgiou General Hospital</a></u>, Greece</li>
  <li>12) <u style="color:#1155cc"><a target="_blank" href="https://operapadrepio.it/it/">Fondazione Casa Sollievo della Sofferenza</a></u>, Italy</li>
  <li>13) <u style="color:#1155cc"><a target="_blank" href="https://www.hopital-simoneveil.fr/">Hôpital Simone Veil - Groupement hospitalier Eaubonne-Montmorency</a></u>, France</li>
  <li>14) <u style="color:#1155cc"><a target="_blank" href="https://www.vde.com/en">VDE</a></u>, Germany</li>
  <li>15) <u style="color:#1155cc"><a target="_blank" href="https://www.medeaproject.eu/?lang=en">Medea Project</a></u>, Italy</li>
  <li>16) <u style="color:#1155cc"><a target="_blank" href="https://www.phazeclinical.com/">Phaze Clinical Research & Pharma Consulting S.A.</a></u>, Greece</li>
  <li>17) <u style="color:#1155cc"><a target="_blank" href="https://www.predictby.com/">PredictBy</a></u>, Spain</li>
  <li>18) <u style="color:#1155cc"><a target="_blank" href="https://www.scigentech.com/">SciGen Technologies, SA.</a></u>, Greece</li>
</ol>
</p>

<p style="margin-bottom: 0.8em;">
Be sure to <u style="color:#1155cc"><a target="_blank" href="https://www.linkedin.com/company/thrombus-eu-project/">connect with ThrombUS+ on LinkedIn</a></u>
and via the <u style="color:#1155cc"><a target="_blank" href="https://thrombus.us1.list-manage.com/subscribe?u=9a2b7c8eae90cb58d7b6a49c1&id=a2591c9ecf">newsletter</a></u> to stay up-to-date with news and the latest updates.
</p>

<p style="line-height: 1.5; margin-bottom: 2.5em; margin-top: 2.5em; width: 100%; place-items: center;">
<img alt="thrombus-banner" src="/blog/images/thrombus-banner.png" />
</p>
    `,
    coverImage: '/blog/images/image.jpg',
    date: '2025-07-03',
    author: authors.katerinaPavlidi,
    category: 'Projects',
    tags: ['Projects', 'Events', 'News', 'Horizon Europe'],
    readingTime: 7,
  },
];

// Extract unique categories for filtering
export const blogCategories = [
  ...new Set(blogPosts.map((post) => post.category)),
];
