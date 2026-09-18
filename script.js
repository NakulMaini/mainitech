// Database of dedicated sub-service pages
const serviceDatabase = {
  'growth-consultation': {
    badge: 'Business Strategy & Analysis',
    title: 'Consultation for Business Growth & Scaling',
    subtitle: 'High-level commercial roadmap formulation, operational scaling frameworks, and market expansion advisory led directly by Nakul Maini.',
    cards: [
      { title: 'Commercial Funnel Audit', desc: 'Systematic diagnosis of customer acquisition friction, sales bottlenecks, and leakages in your revenue generation cycle.' },
      { title: 'Market Positioning Strategy', desc: 'Value proposition differentiation that helps your service or product stand out from low-cost commoditized competitors.' },
      { title: 'Fractional Executive Direction', desc: 'Direct strategy sessions without the financial liabilities of a full-time executive salary.' },
      { title: 'Execution Roadmaps', desc: 'Concrete milestones and operational SOPs for your team to implement with disciplined weekly tracking.' }
    ],
    faqs: [
      { q: 'How is Nakul Maini’s growth consultation different from generic business coaches?', a: 'I do not offer abstract motivational coaching. Backed by mathematical modeling and 8+ years of technical experience, I audit hard operational bottlenecks, cut wasted costs, and implement concrete systems that protect cash flow.' },
      { q: 'How does territorial non-compete apply to this consultation?', a: 'Before starting, we sign an NDA. During our engagement, I will not consult for or advise your direct competitors in your niche and market region.' }
    ]
  },
  'profile-audits': {
    badge: 'Operational & Technical Audit',
    title: 'Comprehensive Web & Business Profile Audits',
    subtitle: 'Deep structural inspections of your digital footprint, technical infrastructure, conversion paths, and workflow redundancies.',
    cards: [
      { title: 'Full Web Ecosystem Audit', desc: 'Forensic analysis of site speed, conversion rate friction, SEO health, indexing, and mobile responsiveness.' },
      { title: 'Operational Redundancy Checks', desc: 'Review of existing software tools, subscriptions, and vendor contracts to eliminate duplicate monthly expenditure.' },
      { title: 'Digital Footprint Optimization', desc: 'Synchronizing your brand credentials across Google Maps, directories, review platforms, and high-trust communities.' },
      { title: 'Prioritized Action Matrix', desc: 'A ranked roadmap categorizing high-impact quick fixes and long-term technical enhancements.' }
    ],
    faqs: [
      { q: 'What is the immediate ROI of an operational audit?', a: 'Most clients discover between 15% and 30% in monthly software bloat and operational leakage within the first 30 days of the audit.' },
      { q: 'Do you audit internal workflows as well as public web assets?', a: 'Yes. We evaluate how your team handles incoming inquiries, communication tools, and data reporting to eliminate manual overhead.' }
    ]
  },
  'workflow-structuring': {
    badge: 'Operational Precision',
    title: 'Workflow & Operations Restructuring',
    subtitle: 'Standardize standard operating procedures (SOPs), automate reporting, and scale productivity without inflating payroll.',
    cards: [
      { title: 'SOP Documentation', desc: 'Building repeatable operational playbooks so your business runs smoothly without constant managerial intervention.' },
      { title: 'Cross-Functional Coordination', desc: 'Aligning marketing, technical development, and client delivery across distributed global time zones.' },
      { title: 'Workflow Automation', desc: 'Integrating modern automation pipelines to eliminate redundant manual data entry and recurring administrative tasks.' },
      { title: 'Operational Velocity', desc: 'Accelerating project turnaround times and establishing clear accountability metrics across all team members.' }
    ],
    faqs: [
      { q: 'Can you restructure teams operating across different countries?', a: 'Yes. Having managed operational teams of up to 238 members, I specialize in structuring workflows across US, European, and Asian time zones.' },
      { q: 'Will this process disrupt current operations?', a: 'No. Restructuring is implemented in parallel phases, standardizing high-frequency tasks first before optimizing secondary workflows.' }
    ]
  },
  'cost-reduction': {
    badge: 'Margin Protection',
    title: 'Operational Cost Reduction Strategies',
    subtitle: 'Systematic elimination of operational waste, software bloat, and inefficient workflows to widen your profit margins.',
    cards: [
      { title: 'Tech Stack Consolidation', desc: 'Replacing fragmented, high-cost subscriptions with integrated, cost-effective infrastructure.' },
      { title: 'Vendor Renegotiation Strategy', desc: 'Benchmarking supplier and service contracts against competitive market rates to lower recurring costs.' },
      { title: 'Payroll Arbitrage', desc: 'Transitioning expensive full-time in-house roles into agile fractional specialist workflows starting from $12/day.' },
      { title: 'Cash Flow Safeguards', desc: 'Protecting working capital through proactive expense tracking and waste prevention protocols.' }
    ],
    faqs: [
      { q: 'Does cost reduction mean compromising on quality?', a: 'Never. The goal is eliminating redundant software, bloated retainers, and manual operational friction while preserving customer-facing quality.' },
      { q: 'How quickly will we see cost savings?', a: 'Software consolidation and vendor optimizations typically reflect on your balance sheet in the very first billing cycle.' }
    ]
  },
  'bookkeeping': {
    badge: 'Financial Clarity',
    title: 'Bookkeeping & Account Management',
    subtitle: 'Clean balance sheets, accurate transaction reconciliation, and financial clarity for international operations.',
    cards: [
      { title: 'Multi-Currency Reconciliation', desc: 'Tracking and reconciling receivables and disbursements across USD, EUR, GBP, CAD, and NZD without confusion.' },
      { title: 'Expense Classification', desc: 'Ensuring every single operational expense is correctly categorized for maximum tax deductions and transparent reporting.' },
      { title: 'Accounts Receivable & Invoicing', desc: 'Streamlining international client payment collections via domestic bank transfers and instant gateways.' },
      { title: 'Monthly Financial Statements', desc: 'Delivering clear P&L, balance sheets, and cash-flow reports so leadership always knows the company’s financial position.' }
    ],
    faqs: [
      { q: 'Do you manage bookkeeping for international clients?', a: 'Yes. We specialize in cross-border reconciliations across US domestic accounts, European SEPA, and international payment gateways.' },
      { q: 'How does this integrate with fractional business strategy?', a: 'Clean financial books provide the ground-truth data required to make informed growth decisions and eliminate budget leaks.' }
    ]
  },
  'smm': {
    badge: 'Growth Marketing',
    title: 'Social Media Marketing (SMM)',
    subtitle: 'Direct-response social media strategies designed to acquire high-value customers rather than chasing vanity likes.',
    cards: [
      { title: 'Platform-Specific Strategy', desc: 'Bespoke distribution schedules and creative formats tailored for LinkedIn, Instagram, X, Facebook, and YouTube.' },
      { title: 'Direct-Response Creative', desc: 'Crafting messaging hooks, angles, and ad creatives engineered to convert viewers into qualified inquiries.' },
      { title: 'Pipeline Generation', desc: 'Turning social channels into predictable inbound customer acquisition pipelines for your sales funnel.' },
      { title: 'Analytics & Attribution', desc: 'Tracking which specific posts, campaigns, and platforms generate paying clients rather than empty engagement.' }
    ],
    faqs: [
      { q: 'How is your SMM different from traditional marketing agencies?', a: 'Traditional agencies sell impressions and vanity metrics. MainiTech designs social media pipelines tied directly to net customer acquisition and sales.' },
      { q: 'Do you sign non-compete agreements for marketing clients?', a: 'Yes. Under our binding NDA, we never manage marketing or social campaigns for direct competitors in your niche and market region.' }
    ]
  },
  'smo': {
    badge: 'Profile Authority',
    title: 'Social Media Optimization (SMO)',
    subtitle: 'Fine-tuning your social profiles to rank high in platform search algorithms and convert profile visitors into paying clients.',
    cards: [
      { title: 'Profile Architecture', desc: 'Optimizing headlines, bios, call-to-action buttons, and featured sections for maximum conversion.' },
      { title: 'Search & Keyword Indexing', desc: 'Injecting high-intent search terms into social bios and post metadata to appear in internal platform discovery.' },
      { title: 'Visual Authority Alignment', desc: 'Ensuring your profile aesthetic, banners, and credentials immediately communicate senior professional credibility.' },
      { title: 'Link Funnel Integration', desc: 'Structuring bio link pathways that direct interested visitors into consultation bookings and payment portals.' }
    ],
    faqs: [
      { q: 'What is the turnaround time for SMO?', a: 'Profile restructuring and search indexing are typically completed within 7 to 10 days, generating immediate conversion improvements.' },
      { q: 'Does SMO help organic reach?', a: 'Yes. Properly optimized profiles with clean keyword structures receive higher placement in platform search suggestions.' }
    ]
  },
  'seo': {
    badge: 'Organic Search Authority',
    title: 'Search Engine Optimization (SEO & AEO)',
    subtitle: 'Engineered for high organic placement across modern Google Search algorithms, voice search, and generative AI answers.',
    cards: [
      { title: 'Technical SEO Infrastructure', desc: 'Speed optimization, clean semantic HTML5 hierarchies, and complete JSON-LD Schema markup.' },
      { title: 'Answer Engine Optimization (AEO)', desc: 'Structuring content specifically to be cited by Google AI Overviews, Perplexity, and voice search engines.' },
      { title: 'High-Intent Keyword Mapping', desc: 'Targeting commercial search terms used by paying decision-makers rather than high-volume vanity traffic.' },
      { title: 'Authority Link Building', desc: 'Earning authoritative, contextual backlinks that establish genuine domain credibility.' }
    ],
    faqs: [
      { q: 'What is Answer Engine Optimization (AEO)?', a: 'AEO optimizes your web content so that AI engines and search assistants directly select and cite your business when answering user questions.' },
      { q: 'How soon can we see ranking improvements?', a: 'Technical fixes and structured schema improve crawl efficiency immediately. Organic ranking lifts for commercial keywords typically reflect in 60 to 90 days.' }
    ]
  },
  'email-sms': {
    badge: 'Direct Acquisition',
    title: 'Email & SMS Text Marketing',
    subtitle: 'High-deliverability direct messaging sequences that nurture leads, reduce churn, and drive repeat business.',
    cards: [
      { title: 'Automated Onboarding Sequences', desc: 'Welcome flows, educational drips, and consultation-booking sequences that trigger automatically.' },
      { title: 'List Segmentation & Hygiene', desc: 'Cleaning lists, maintaining sender reputation, and ensuring emails land in primary inboxes rather than spam.' },
      { title: 'Direct-Response SMS Campaigns', desc: 'Timely text alerts, appointment confirmations, and special offers with 95%+ open rates.' },
      { title: 'Conversion Copywriting', desc: 'Plain-text, conversational messaging that bypasses promotional filters and connects with decision-makers.' }
    ],
    faqs: [
      { q: 'Do you manage technical deliverability?', a: 'Yes. We configure SPF, DKIM, DMARC, and custom tracking domains to protect inbox placement.' },
      { q: 'How often should campaigns be deployed?', a: 'We design cadence based on your business model—from high-touch automated nurture sequences to weekly client newsletters.' }
    ]
  },
  'lead-gen': {
    badge: 'B2B & B2C Pipelines',
    title: 'Targeted Lead Generation',
    subtitle: 'Multi-channel outbound and inbound funnels that identify, qualify, and deliver high-intent prospects to your calendar.',
    cards: [
      { title: 'Ideal Customer Profiling (ICP)', desc: 'Defining the exact industry, revenue band, location, and job title of your highest-margin buyers.' },
      { title: 'Verified Prospect Data', desc: 'Scraping and validating clean corporate email addresses and direct phone lines to maintain high connection rates.' },
      { title: 'Personalized Multi-Touch Outreach', desc: 'Coordinated touchpoints across email, social platforms, and targeted direct messaging.' },
      { title: 'Calendar Automation', desc: 'Directly booking qualified prospects into your schedule so you spend your time closing deals.' }
    ],
    faqs: [
      { q: 'Are your lead generation methods compliant?', a: 'Yes. We adhere to CAN-SPAM, GDPR, and platform-specific guidelines, focusing on highly targeted, relevant outreach.' },
      { q: 'How do you ensure leads are qualified?', a: 'We implement qualifying survey funnels so that only prospects with genuine budget and intent can book appointments.' }
    ]
  },
  'gbp': {
    badge: 'Local Search Dominance',
    title: 'Google Business Profile (GBP) Optimization',
    subtitle: 'Dominate Google Local Map Packs and capture phone calls, directions, and immediate local bookings.',
    cards: [
      { title: 'Category & Keyword Optimization', desc: 'Selecting high-converting primary categories and structuring services with local search intent.' },
      { title: 'Geo-Targeted Content Updates', desc: 'Regular publishing of geo-tagged updates, photos, and service announcements that signal local activity.' },
      { title: 'Review Acceleration Strategy', desc: 'Systematic workflows to collect 5-star Google reviews from satisfied clients to build social proof.' },
      { title: 'Citation Consistency', desc: 'Ensuring your Name, Address, and Phone (NAP) are identical across all directories to build local trust.' }
    ],
    faqs: [
      { q: 'Why is Google Business Profile critical for local service businesses?', a: 'Over 46% of all Google searches have local intent. Ranking in the top 3 Map Pack positions drives the vast majority of local calls and website visits.' },
      { q: 'Can you fix suspended or duplicate profiles?', a: 'Yes. We audit guideline compliance, correct conflicting information, and submit formal reinstatement appeals.' }
    ]
  },
  'yelp-mapquest': {
    badge: 'Local Directory Authority',
    title: 'Yelp & MapQuest Authority Optimization',
    subtitle: 'Strengthen off-Google directory citations and capture customers searching on Apple Maps, Yelp, and navigation ecosystems.',
    cards: [
      { title: 'Apple Maps & MapQuest Sync', desc: 'Ensuring GPS navigation databases have 100% accurate address and contact details for your business.' },
      { title: 'Yelp Profile Hardening', desc: 'Complete profile completion, image curation, and review response frameworks that protect your brand reputation.' },
      { title: 'Citations Cleanup', desc: 'Locating and rectifying outdated phone numbers and addresses across secondary business directories.' },
      { title: 'Local Trust Amplification', desc: 'Building signals that reinforce your primary Google rankings by showing complete ecosystem consistency.' }
    ],
    faqs: [
      { q: 'Does Yelp optimization help non-restaurant businesses?', a: 'Yes. Service businesses, consultants, and contractors receive substantial high-intent buyer traffic from Yelp search.' },
      { q: 'Why do secondary directories matter?', a: 'Search engines crawl secondary directories like MapQuest and Yelp to verify your corporate authenticity.' }
    ]
  },
  'forums': {
    badge: 'Community Authority',
    title: 'Forum Authority Growth (Reddit, Quora, Medium)',
    subtitle: 'Capture high-intent buyers looking for unbiased third-party recommendations on top authority discussion platforms.',
    cards: [
      { title: 'Reddit Authority Growth', desc: 'Providing high-value, non-spam answers in relevant subreddits where prospects discuss industry challenges.' },
      { title: 'Quora Question Ranking', desc: 'Authoring evergreen, in-depth responses that rank directly on Google for long-tail informational searches.' },
      { title: 'Medium Thought Leadership', desc: 'Publishing editorial essays and case studies that rank on search engines and establish domain expertise.' },
      { title: 'Organic Buyer Funneling', desc: 'Subtly guiding community readers to your consultation booking pages through genuine value-add contributions.' }
    ],
    faqs: [
      { q: 'Why is Reddit and Quora visibility critical in 2026?', a: 'Google’s latest algorithms heavily prioritize firsthand human experiences from forums. Authoritative answers frequently rank at the top of Google results.' },
      { q: 'How do you avoid forum bans?', a: 'We never post low-effort marketing spam. We write detailed, technical, high-value answers that legitimately solve problems while establishing brand credibility.' }
    ]
  },
  'web-dev': {
    badge: 'Technical Engineering',
    title: 'High-Converting Custom Web Development',
    subtitle: 'Lightning-fast, mobile-responsive, zero-bloat web architecture designed specifically to turn traffic into paying clients.',
    cards: [
      { title: 'Zero-Bloat Architecture', desc: 'Clean, semantic HTML5, modern CSS, and lightweight vanilla JavaScript that load in under a second.' },
      { title: 'Conversion-Focused UX/UI', desc: 'Clear visual hierarchies, compelling call-to-action buttons, and frictionless contact pathways.' },
      { title: 'Full Schema & SEO Integration', desc: 'Built from the ground up with clean Schema.org markup, semantic metadata, and Open Graph previews.' },
      { title: 'International Payment Portals', desc: 'Integrated multi-currency bank wire displays, copy utilities, and secure payment checkout buttons.' }
    ],
    faqs: [
      { q: 'Do you build on bloated CMS platforms like WordPress or Wix?', a: 'We specialize in high-performance static and serverless architectures that load instantly and cannot be hacked through vulnerable plugins.' },
      { q: 'Is the website mobile-responsive?', a: 'Yes. All layouts are fully responsive and tested across iOS, Android, tablets, and wide desktop screens.' }
    ]
  },
  'app-dev': {
    badge: 'Software Engineering',
    title: 'Mobile Application Development',
    subtitle: 'Custom iOS and Android mobile software designed to automate client operations, communications, and customer engagement.',
    cards: [
      { title: 'Cross-Platform Applications', desc: 'High-performance apps developed with unified codebases for simultaneous release on iOS and Android.' },
      { title: 'Automated Client Portals', desc: 'Custom apps that give your clients 24/7 access to account updates, documents, and communication.' },
      { title: 'Internal Operations Apps', desc: 'Field-service and team management tools that streamline reporting and reduce manual phone calls.' },
      { title: 'API & Database Architecture', desc: 'Scalable backend endpoints, secure cloud authentication, and automated data backups.' }
    ],
    faqs: [
      { q: 'What is your software development experience?', a: 'Holding MCA and BCA degrees and DiCES training at TU Leoben & TU Wien, I have led software development teams building real-world enterprise apps that cut manual operational overhead.' },
      { q: 'Who owns the source code upon completion?', a: 'You retain 100% intellectual property ownership of the codebase upon deployment.' }
    ]
  },
  'airbnb-conversion': {
    badge: 'Short-Term Rental Yield',
    title: 'Airbnb Conversion Rate Enhancement',
    subtitle: 'Transform underperforming listings into top-ranking, high-occupancy assets that maximize nightly yield.',
    cards: [
      { title: 'High-Converting Copywriting', desc: 'Reframing listing titles, descriptions, and amenities to address guest desires and eliminate hesitations.' },
      { title: 'Photo Hierarchy Engineering', desc: 'Sequencing listing photographs to tell a visual story that hooks guests in the first 5 seconds.' },
      { title: 'Amenity & Highlight Tuning', desc: 'Configuring listing attributes so your property appears in high-value guest filter searches.' },
      { title: 'Algorithm Placement Optimization', desc: 'Improving acceptance velocity and review sentiment to secure top organic placement on Airbnb search.' }
    ],
    faqs: [
      { q: 'How does conversion enhancement boost revenue without lowering nightly rates?', a: 'By positioning the unique benefits and superior presentation of your property, guests gladly pay premium nightly rates over neighboring generic listings.' },
      { q: 'Do you manage the listings directly?', a: 'Yes. We provide complete listing optimization as well as ongoing turnkey management.' }
    ]
  },
  'airbnb-marketing': {
    badge: 'Hospitality Growth',
    title: 'Airbnb Property Marketing Strategy',
    subtitle: 'Multi-channel guest acquisition, direct booking funnels, and dynamic seasonal pricing to safeguard occupancy.',
    cards: [
      { title: 'Dynamic Pricing Calibration', desc: 'Setting algorithmically adjusted pricing models that capture high margins during peak seasons and maintain occupancy during lulls.' },
      { title: 'Direct Booking Funnels', desc: 'Creating off-platform booking portals to capture repeat guests without paying marketplace commission fees.' },
      { title: 'Local Partnership Marketing', desc: 'Connecting your listing with local corporate relocations, travel nurses, and tourism event networks.' },
      { title: 'Review Strategy', desc: 'Automated messaging sequences that guarantee 5-star ratings from satisfied guests.' }
    ],
    faqs: [
      { q: 'How do you handle seasonality?', a: 'We analyze local booking patterns months in advance to proactively adjust minimum stays and dynamic rates.' },
      { q: 'Do you enforce market exclusivity for properties?', a: 'Yes. Under our NDA, we never manage competing listings in your immediate neighborhood.' }
    ]
  },
  'airbnb-mgmt': {
    badge: 'Turnkey Hospitality',
    title: 'Turnkey Airbnb Operations & Account Management',
    subtitle: 'Complete operational management, guest messaging, maintenance coordination, and financial reporting.',
    cards: [
      { title: '24/7 Guest Communications', desc: 'Instant response times to inquiry messages, booking requests, and on-stay guest questions.' },
      { title: 'Turnover & Cleaning Coordination', desc: 'Automating cleaning schedules and inspection checklists between guest check-outs and check-ins.' },
      { title: 'Listing Maintenance Protocols', desc: 'Coordinating reliable local contractors for rapid maintenance without owner stress.' },
      { title: 'Monthly Revenue Reporting', desc: 'Comprehensive financial statements showing occupancy, gross yield, operating expenses, and net profit.' }
    ],
    faqs: [
      { q: 'Can you manage properties remotely?', a: 'Yes. We combine digital smart-locks, automated guest messaging, and vetted local cleaning teams to manage properties smoothly.' },
      { q: 'How do we track earnings?', a: 'You receive monthly financial reconciliations detailing every payout and expense.' }
    ]
  }
};

// Dynamic Service Loader (Prevents 404s)
function loadService(serviceKey) {
  const data = serviceDatabase[serviceKey];
  if (!data) return;

  const mainPortal = document.getElementById('main-portal');
  const serviceView = document.getElementById('service-view');
  const contentArea = document.getElementById('service-content-area');

  let cardsHtml = data.cards.map(card => `
    <div class="detail-card">
      <h3>${card.title}</h3>
      <p>${card.desc}</p>
    </div>
  `).join('');

  let faqsHtml = data.faqs.map(faq => `
    <div class="faq-item">
      <button class="faq-question">${faq.q} <span class="faq-icon">+</span></button>
      <div class="faq-answer"><p>${faq.a}</p></div>
    </div>
  `).join('');

  contentArea.innerHTML = `
    <div class="service-hero-box">
      <div class="section-badge">${data.badge}</div>
      <h1>${data.title}</h1>
      <p>${data.subtitle}</p>
      <a href="https://wa.me/919811301467?text=Hello%20Nakul,%20I'd%20like%20to%20discuss%20${encodeURIComponent(data.title)}." target="_blank" class="btn btn-primary btn-large">Book a Free Consultation</a>
    </div>

    <div class="section-header text-center">
      <h2>Strategic Focus & Deliverables</h2>
      <p>Precision execution designed for measurable return on investment.</p>
    </div>

    <div class="service-detail-grid">
      ${cardsHtml}
    </div>

    <div class="nda-banner" style="margin: 40px auto;">
      <div class="nda-icon">🔒</div>
      <div class="nda-text">
        <h3>Territorial Exclusivity Guaranteed</h3>
        <p>We execute strict NDAs and never consult for or manage campaigns for direct competitors in your niche and operational territory.</p>
      </div>
    </div>

    <div class="section-header text-center" style="margin-top: 50px;">
      <h2>Dedicated Service FAQ</h2>
      <p>Answers specific to ${data.title}.</p>
    </div>

    <div class="faq-accordion" style="max-width: 800px; margin: 0 auto 50px;">
      ${faqsHtml}
    </div>
  `;

  // Attach accordion handlers
  contentArea.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.parentElement;
      parent.classList.toggle('active');
      const icon = btn.querySelector('.faq-icon');
      if (icon) {
        icon.innerText = parent.classList.contains('active') ? '−' : '+';
      }
    });
  });

  mainPortal.style.display = 'none';
  serviceView.style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showMainPortal() {
  document.getElementById('service-view').style.display = 'none';
  document.getElementById('main-portal').style.display = 'block';
}

// Global Tab switcher
function openCurrency(currencyKey, event) {
  const panels = document.querySelectorAll('.tab-panel');
  const buttons = document.querySelectorAll('.tab-btn');

  panels.forEach(p => p.classList.remove('active'));
  buttons.forEach(b => b.classList.remove('active'));

  const target = document.getElementById(currencyKey);
  if (target) target.classList.add('active');
  if (event && event.currentTarget) event.currentTarget.classList.add('active');
}

// Clipboard copying utility
function copyText(textToCopy, event) {
  navigator.clipboard.writeText(textToCopy).then(() => {
    const btn = event.target;
    const orig = btn.innerText;
    btn.innerText = 'Copied!';
    setTimeout(() => { btn.innerText = orig; }, 2000);
  }).catch(err => {
    console.error('Copy failed: ', err);
  });
}

// Global Accordion Handler
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const parent = btn.parentElement;
    parent.classList.toggle('active');
    const icon = btn.querySelector('.faq-icon');
    if (icon) {
      icon.innerText = parent.classList.contains('active') ? '−' : '+';
    }
  });
});

// Modal Logic for LOR Previews
function openPdfModal(fileUrl, title) {
  const modal = document.getElementById('document-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');

  modalTitle.innerText = title;
  modalBody.innerHTML = `<iframe src="${fileUrl}" title="${title}"></iframe>`;
  modal.style.display = 'flex';
}

function openImageModal(fileUrl, title) {
  const modal = document.getElementById('document-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');

  modalTitle.innerText = title;
  modalBody.innerHTML = `<img src="${fileUrl}" alt="${title}">`;
  modal.style.display = 'flex';
}

function closeModalDirect() {
  const modal = document.getElementById('document-modal');
  const modalBody = document.getElementById('modal-body');
  modal.style.display = 'none';
  modalBody.innerHTML = '';
}

function closeModal(event) {
  if (event.target.id === 'document-modal') {
    closeModalDirect();
  }
}