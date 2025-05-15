export interface Author {
  name: string
  role: string
  avatar: string
  bio: string
}

export interface BlogPost {
  title: string
  slug: string
  excerpt: string
  content: string[]
  coverImage: string
  date: string
  author: Author
  category: string
  tags: string[]
  readingTime: number
}

// Authors
const authors = {
  drJaneSmith: {
    name: "Dr. Jane Smith",
    role: "Chief Scientific Officer",
    avatar: "/female-scientist-portrait.png",
    bio: "Dr. Jane Smith leads SciGen's research initiatives with over 15 years of experience in computational biology and scientific software development. She holds a Ph.D. in Bioinformatics from Stanford University.",
  },
  drSarahJohnson: {
    name: "Dr. Marah Johnson",
    role: "Marketing & Sales Director",
    avatar: "/placeholder.svg?key=aor9h",
    bio: "Dr. Sarah Johnson directs SciGen's medical research partnerships. Her expertise in clinical trials and medical imaging has helped shape our healthcare-focused software solutions.",
  },
  katerinaPavlidi: {
    name: "Katerina Pavlidi, MSt",
    role: "Chief Scientific Officer",
    avatar: "/blog/images/katerina.webp",
    bio: "Katerina works in Sales and Marketing at SciGen Technologies. She is also a college and medical school application advisor, as well as a freelance editor.",
  },
}

// Blog posts data
export const blogPosts: BlogPost[] = [
  {
    title: "What's In Our (Conference) Bag",
    slug: "whats-in-our-conference-bag",
    excerpt:
      "Here are a few must-bring items that we think everyone attending a scientific conference should carry",
    content: [
      "Over the years, our team has attended hundreds of scientific conferences worldwide. We’ve seen it all, from presenters sending us their poster just a few minutes before their talk, to synchronizing dozens of monitors in preparation for thousands of time-scheduled poster presentations over just a couple of days.",
      "Here are a few must-bring items that we think everyone attending a scientific conference should carry:",
      "1. USB stick with your poster(s) on it, If you missed the submission deadline or made some last-minute poster changes, it’s good to have a spare copy of your poster in your email or on a USB. Whether we’re supporting your conference onsite or online, we’ll do everything we can to make sure the most up-to-date version of your poster is what gets displayed.",
      "2. Phone/laptop chargers. There’s nothing worse than being stuck without battery power when you need your devices for presenting and networking. Thankfully, most conference venues have plenty of spare outlets for use.",
      "3. Business cards. Most people attend conferences to expand their network. Handing out your card to new acquaintances is a great way to help them remember you so you can stay connected after the conference. Be tactful with this, though, handing out your card to strangers can come off as disingenuous.",
      "4. Band-aids. Papercuts and blisters are not unheard of at conferences. If we’re wearing new shoes, we always come prepared, as we’ll be standing and walking for long periods of time.",
      "5. Hand sanitizer and mask. Especially for events in the winter months, maintaining good hygiene in crowded conference spaces is the best way to avoid spreading or contracting illness.",
      "6. Water and a snack. Most venues have these available, but it’s good to carry something on you. With the packed schedule of most conferences, you may not have time to eat between presentations or sessions that you want to attend.",
      "7. A scarf or light coat. The temperatures in conference halls are not that consistent, unfortunately. In most cases, we get super cold if we only wear our shirts.",
      "8. Basic medications for pain relief. We always bring along an Advil travel pack. Even if you don’t end up needing it, someone around you might, and your preparedness will make you look brilliant!",
    ],
    coverImage: "/blog/images/bag.png",
    date: "2024-11-19",
    author: authors.katerinaPavlidi,
    category: "Events",
    tags: ["Events", "Tips", "Handy"],
    readingTime: 6,
  },
 
  {
    title: "Revolutionizing Medical Imaging Analysis with AI-Powered Software",
    slug: "revolutionizing-medical-imaging-analysis",
    excerpt:
      "How artificial intelligence is transforming the way researchers and clinicians analyze medical images, leading to faster and more accurate diagnoses.",
    content: [
      "The field of medical imaging has seen remarkable advancements in recent years, with artificial intelligence (AI) playing an increasingly crucial role in enhancing the capabilities of imaging analysis software. At SciGen, we've been at the forefront of this revolution, developing cutting-edge solutions that combine deep learning algorithms with traditional image processing techniques.",
      "Our Thrombus platform represents a significant leap forward in cardiovascular imaging analysis. By leveraging convolutional neural networks trained on extensive datasets of angiograms and other vascular images, the software can identify potential blockages and abnormalities with unprecedented accuracy. This not only speeds up the analysis process but also reduces the likelihood of human error.",
      "One of the key challenges in medical imaging analysis has always been the variability in image quality and the subtle nature of many pathological features. Traditional software often struggles with these issues, requiring extensive manual intervention and adjustment. Our AI-powered approach addresses these challenges by adapting to different imaging conditions and highlighting subtle patterns that might be missed by the human eye.",
      "The implications for clinical practice are profound. Radiologists and cardiologists using our software can process more images in less time, allowing them to focus their expertise on the most complex cases. This efficiency gain is particularly valuable in emergency settings, where rapid diagnosis can be life-saving.",
      "Beyond diagnosis, our imaging analysis tools are also proving valuable in research contexts. Scientists studying disease progression or the effects of experimental treatments can analyze large volumes of imaging data with greater consistency and detail than ever before. This is accelerating the pace of discovery in fields ranging from oncology to neurology.",
      "As we look to the future, we're exploring ways to further enhance our imaging analysis capabilities. One promising direction is the integration of multimodal data, combining insights from different imaging techniques (MRI, CT, ultrasound, etc.) to provide a more comprehensive view of patient health. We're also working on federated learning approaches that allow our AI models to improve continuously while respecting patient privacy and data security requirements.",
      "The revolution in medical imaging analysis is just beginning, and we're excited to be part of this transformative journey. By continuing to innovate at the intersection of AI and medical science, we aim to empower healthcare professionals and researchers with tools that expand the boundaries of what's possible in medical imaging.",
    ],
    coverImage: "/placeholder.svg?key=qsqyg",
    date: "2023-11-15",
    author: authors.drSarahJohnson,
    category: "Medical Research",
    tags: ["AI", "Medical Imaging", "Healthcare", "Diagnostics", "Thrombus"],
    readingTime: 8,
  },
  {
    title: "Enhancing Research Reproducibility Through Automated Workflows",
    slug: "enhancing-research-reproducibility",
    excerpt:
      "How automated scientific workflows are addressing the reproducibility crisis in research by standardizing methodologies and reducing human error.",
    content: [
      "The reproducibility crisis has emerged as one of the most significant challenges facing modern science. Across disciplines, researchers have found that a troubling percentage of published findings cannot be replicated by independent teams. This issue undermines scientific progress and erodes public trust in research. At SciGen, we believe that automated workflows represent a powerful tool for addressing this crisis.",
      "Reproducibility failures stem from multiple sources, including selective reporting, p-hacking, and methodological opacity. However, a substantial portion also results from simple human error and inconsistent application of methods. These latter issues are particularly amenable to technological solutions.",
      "Our approach to enhancing reproducibility begins with comprehensive workflow documentation. Every step in a research process—from data collection to statistical analysis—is explicitly defined in a machine-readable format. This serves as both executable code and as documentation, eliminating the discrepancies that often arise between methods sections in papers and actual analytical procedures.",
      "Parameter management represents another critical component. Our systems track all variables and settings used in analyses, storing them alongside results. This prevents the common problem of researchers forgetting exactly which parameters were used to generate specific outputs, especially in iterative processes that may involve hundreds of experimental configurations.",
      'Environmental consistency is maintained through containerization technologies. By packaging analyses with their exact computational environment, we ensure that code runs identically regardless of the underlying hardware or operating system. This eliminates the "it works on my machine" problem that frequently hampers reproduction attempts.',
      "For data-intensive research, we implement automated data provenance tracking. This creates an unbroken chain of custody from raw data through all transformation and analysis steps to final results. When questions arise about findings, researchers can trace backward through this chain to identify exactly where discrepancies might have occurred.",
      "Perhaps most importantly, our workflow systems are designed to integrate with existing research practices rather than forcing scientists to adopt entirely new methodologies. The best reproducibility tools are those that researchers will actually use, which means minimizing friction and maximizing immediate benefits beyond just reproducibility.",
      "The impact of these approaches extends beyond just confirming existing findings. By standardizing workflows and reducing errors, researchers can build more confidently on previous work, accelerating the pace of discovery. Additionally, well-documented, reproducible research is more readily translated into practical applications, bridging the gap between laboratory findings and real-world impact.",
    ],
    coverImage: "/placeholder.svg?key=ulhuc",
    date: "2023-08-05",
    author: authors.drJaneSmith,
    category: "Research Methodology",
    tags: ["Reproducibility", "Automation", "Scientific Workflows", "Research Methods", "Data Science"],
    readingTime: 8,
  },
]

// Extract unique categories for filtering
export const blogCategories = [...new Set(blogPosts.map((post) => post.category))]
