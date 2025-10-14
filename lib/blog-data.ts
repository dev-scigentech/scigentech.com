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
  georgeChaitidis: {
    name: 'George Chaitidis',
    role: 'Chief Operating Officer',
    avatar: '/blog/images/george-chaitidis.png',
    bio: `George Chaitides is the COO of SciGen Technologies and led the technical and operational planning for RCOG's 2025 World Congress implementation. He specializes in large-scale conference solutions and custom judging systems.`,
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
    coverImage: '/blog/images/thrombusBanner.jpg',
    date: '2025-07-03',
    author: authors.katerinaPavlidi,
    category: 'Projects',
    tags: ['Projects', 'Events', 'News', 'Horizon Europe'],
    readingTime: 7,
  },
  {
    title: '2,260 Posters, One Weekend, Zero Compromises',
    slug: 'how-eposterslive-delievered-30-screen-digital-poster-installation-with-dual-judging-systems',
    excerpt: `How ePostersLive delivered a 30-screen digital poster installation with dual judging systems for RCOG's 2025 World Congress—managing 2,260 posters from 8,802 authors with real-time infrastructure optimization.`,
    content: `<p style="line-height: 1.5; margin-bottom: 0.8em; font-weight: bold;">How we delivered a dual judging system and 30-screen installation for RCOG's 2025 World Congress</p>

<p style="justify-self: center; margin-bottom: 0.8em;">
<img alt="rcog2025-pic3" src="/blog/images/rcog-case-study-3.png" />
</p>

<p style="line-height: 1.5; margin-bottom: 0.8em;">
The Royal College of Obstetricians and Gynaecologists 2025 World Congress took place at the ExCeL London this June, bringing together thousands of researchers who presented 2,260 posters over 3 days.
</p>

<p style="line-height: 1.5; margin-bottom: 0.8em;">
RCOG has partnered with <u style="color:#1155cc"><a target="_blank" href="https://eposterslive.com/">ePostersLive</a></u> since 2011, trusting us to deliver seamless digital poster experiences at their global events. For 2025, they needed a partner who could handle a project of this size and complexity. Having worked closely with us before, they knew we could deliver a reliable, scalable solution tailored to their exact needs.
</p>

<p style="line-height: 1.5; margin-bottom: 0.8em; font-weight: bold; font-size: larger;">
Custom Systems at Scale
</p>

<p style="line-height: 1.5; margin-bottom: 0.8em;">
We built two separate <u style="color:#1155cc"><a target="_blank" href="http://instajudge.com">InstaJudge</a></u> systems - one for ePosters and one for Oral Presentations. Each system needed different judging criteria, different workflows, and different reporting structures.
</p>

<p style="line-height: 1.5; margin-bottom: 0.8em;">
The physical setup was equally ambitious:
</p>

<li style="margin-left: 3rem;">2 mini theatres (one large screen each)</li>
<li style="margin-left: 3rem;">1 main ePoster area with 28 screens plus 2 dedicated photo displays</li>
<li style="margin-left: 3rem; margin-bottom: 0.8em;">Full on-site support team</li>

<p style="justify-self: center; margin-bottom: 0.8em;">
<img alt="rcog2025-pic1" src="/blog/images/rcog-case-study-1.png" />
</p>

<p style="justify-self: center; margin-bottom: 0.8em;">
<img alt="rcog2025-pic2" src="/blog/images/rcog-case-study-2.png" />
</p>

<p style="line-height: 1.5; margin-bottom: 0.8em;">
We also implemented a pay-per-poster pricing model at £22 per submission. For an organization managing thousands of abstracts, predictable per-poster pricing eliminates budget uncertainty.
</p>

<p style="line-height: 1.5; margin-bottom: 0.8em; font-weight: bold; font-size: larger;">
What Actually Happened: Execution at Scale
</p>

<p style="line-height: 1.5; margin-bottom: 0.8em;">
Large-scale conferences require continuous optimization, and RCOG 2025 was no exception. Our team arrived prepared to monitor performance and adjust infrastructure in real-time as needed.
</p>

<p style="line-height: 1.5; margin-bottom: 0.8em;">
On day one, we identified network issues affecting system responsiveness. Our technical team immediately implemented key optimizations and adjustments that transformed system performance for the remainder of the event. This insight helped us understand network traffic patterns and will inform our pre-event configuration for future installations.
</p>

<p style="line-height: 1.5; margin-bottom: 0.8em;">
Throughout the event, we worked in close coordination with the venue's AV team. Their technical fluency and proactive approach, including pre-loading session content and managing transitions, proved invaluable during our Monday infrastructure changes.
</p>

<p style="line-height: 1.5; margin-bottom: 0.8em; font-weight: bold; font-size: larger;">
What We Learned
</p>

<p style="line-height: 1.5; margin-bottom: 0.8em; font-weight: bold;">
1. Vendor partnerships are force multipliers
</p>

<p style="line-height: 1.5; margin-bottom: 0.8em">
The AV team became active collaborators and stepped up during critical moments to optimize performance. These kinds of partnerships are what take events from good to outstanding.
</p>

<p style="line-height: 1.5; margin-bottom: 0.8em; font-weight: bold;">
2. Infrastructure optimization is ongoing
</p>

<p style="line-height: 1.5; margin-bottom: 0.8em; ">
Performance tuning is work that happens for the entire duration of a conference. Having team members who can diagnose and adjust systems during live operation is essential when you're managing thousands of concurrent users, especially over multiple days.
</p>

<p style="line-height: 1.5; margin-bottom: 0.8em; font-weight: bold; font-size: larger;">
The Outcome
</p>

<p style="justify-self: center; margin-bottom: 0.8em;">
<img alt="rcog2025-pic4" src="/blog/images/rcog-case-study-4.png" />
</p>

<p style="justify-self: center; margin-bottom: 0.8em;">
<img alt="rcog2025-pic5" src="/blog/images/rcog-case-study-5.png" />
</p>

<p style="line-height: 1.5; margin-bottom: 0.8em;">
Experienced conference organizers know that complexity is inevitable when you're managing thousands of presentations, custom requirements, and live audiences. The real differentiator is whether your vendors have the expertise and team structure to handle them without compromising the attendee experience.
</p>

<p style="line-height: 1.5; margin-bottom: 0.8em;">
When you're managing 2,000+ presentations with custom judging systems, you need:
</p>

<p style="line-height: 1.5; margin-left: 2rem;">1. <strong>Infrastructure built for scale</strong> - systems that perform under real-world load</p>

<p style="line-height: 1.5; margin-left: 2rem;">2. <strong>On-site teams with technical depth</strong> - people who can adjust and optimize in real-time</p>

<p style="line-height: 1.5; margin-left: 2rem;">3. <strong>Strong vendor partnerships</strong> - collaborators who understand event goals, not just their contracted scope</p>

<p style="line-height: 1.5; margin-left: 2rem; margin-bottom: 0.8em;">4. <strong>Proven experience</strong> - teams that have successfully delivered at this scale before</p>

<p style="line-height: 1.5; margin-bottom: 0.8em;">
The RCOG entrusted us with one of their flagship annual events. The scale was substantial, the requirements were custom, and the execution required real-time problem-solving. The result was a successful event that demonstrated what's possible when you combine robust technology with experienced teams.</i>
</p>

<hr style="border: 1px solid grey; margin: 0.8rem 0;" />

<p style="line-height: 1.5; margin-bottom: 0.8em;">
<i>Want to discuss your upcoming conference's ePoster needs? <u style="color:#1155cc"><a target="_blank" href="https://eposterslive.com/contact">Contact our team</a></u> to see how we can customize a solution for your event.
</p>


    `,
    coverImage: '/blog/images/rcog-case-study-3.png',
    date: '2025-10-14',
    author: authors.georgeChaitidis,
    category: 'Case Studies',
    tags: [
      'RCOG 2025',
      'Case study',
      'Live judging',
      'InstaJudge',
      'ePostersLive',
    ],
    readingTime: 8,
  },
];

// Extract unique categories for filtering
export const blogCategories = [
  ...new Set(blogPosts.map((post) => post.category)),
];
