/* ==========================================================================
   MainiTech Strategic Solutions — Multi-Page Interactive Controller
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Navigation Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      mobileToggle.classList.toggle('open');
    });

    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileToggle.classList.remove('open');
      });
    });
  }

  // 2. Navbar Scroll Style
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // 3. Dynamic Footer Year
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 4. Google Reviews Filtering (if on reviews page)
  const reviewTabs = document.querySelectorAll('.review-tab-btn');
  const reviewCards = document.querySelectorAll('.gr-card');

  if (reviewTabs.length > 0 && reviewCards.length > 0) {
    reviewTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        reviewTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const filter = tab.getAttribute('data-filter');
        reviewCards.forEach(card => {
          if (filter === 'all' || card.getAttribute('data-cat') === filter) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // 5. Letterhead Modal Data & Functions (if on recommendations page)
  const lettersData = {
    matrix: {
      company: "Matrix Credit Info",
      tagline: "Corporate Financial & Credit Infrastructure • United States",
      date: "May 18, 2026",
      salutation: "To Whom It May Concern,",
      body: `
        <p>I am pleased to recommend <strong>Nakul Maini</strong>, who has been an important part of helping me build and manage the IT side of my business.</p>
        <p>Nakul has demonstrated strong technical knowledge, excellent problem-solving skills, and a professional approach to his work. He has helped develop and manage technology systems that support my business while consistently being dependable, responsive, and solution-oriented.</p>
        <p>What I appreciate most about Nakul is his <strong>ability to understand the business side of technology</strong>. He takes the time to understand what is needed and works to find practical solutions that improve efficiency and support business growth.</p>
        <p>I highly recommend Nakul to any organization looking for a knowledgeable, reliable, and dedicated IT professional. I am confident that he will be a valuable asset to any team.</p>
      `,
      signerName: "Yuan Turk",
      signerTitle: "Chief Executive Officer, Matrix Credit Info",
      seal: "Verified Corporate Recommendation Letterhead • Matrix Credit Info USA"
    },
    duirisks: {
      company: "DUI Risks / DUI Information Provider",
      tagline: "Public Information & Legal Awareness • United States",
      date: "June 17, 2026",
      salutation: "To Whom It May Concern,",
      body: `
        <p>I want to compliment RoiLift for the creation of ads for my business and the ads that were sent over the internet.</p>
        <p><strong>Nakul Maini came up with many brand new ways to bring attention to my website.</strong> I felt like they listened to what I wanted and did a good job on their end.</p>
        <p>I highly recommend making use of this service for your company.</p>
      `,
      signerName: "Carolyn Erickson",
      signerTitle: "President, DUI Risks",
      seal: "Verified Corporate Recommendation Letterhead • DUI Risks USA"
    },
    grace: {
      company: "Dance With Grace",
      tagline: "Dance Instruction Academy & Cultural Retreats • dancingwithgrace.com • United States",
      date: "July 14, 2026",
      salutation: "Re: Letter of Recommendation for Nakul Maini",
      body: `
        <p>To Whom It May Concern,</p>
        <p>I met Mr. Maini in 2025 when he led the team doing the marketing of my company. Not only was he an absolute delight to speak to, <strong>he truly listened to our needs and worked to deeply understand my website, business and goals.</strong></p>
        <p>I believe we need more people like him working in the workplace because he is <em>“personal”</em> and makes what matters to his clients personal and actionable. Since knowing him, he has even learned another language and is focused on growing an incredible career.</p>
        <p>He has my highest recommendation.</p>
      `,
      signerName: "Grace",
      signerTitle: "Founder & Director, Dance With Grace",
      seal: "Verified Client Endorsement • Dance With Grace USA"
    },
    milos: {
      company: "Milo's Mealworms LLC",
      tagline: "Sustainable Agriculture & E-Commerce • milosmealworms.com • United States",
      date: "September 1, 2026",
      salutation: "Executive Client Endorsement & Review",
      body: `
        <p>“I went through the updated roadmap, and <strong>I love what you've put together! Thank you so much for all the time and work you've put into this.</strong></p>
        <p>OMGOODNESS!!!! You did so great!!!!!!!! I love Milo. He looks like Milo 🤗 My only thing is the end... I don't want you to change it. Because it's great! I'm really excited about the order... I'm totally with you. It sounds like a great deal 😊”</p>
        <p><em>Verified Deliverables:</em> Digital growth roadmap, video campaign creative launch, and tech stack cost reduction saving over $1,600/year via unified Google Workspace AI solutions.</p>
      `,
      signerName: "Leslie Kendell",
      signerTitle: "Owner, Milo's Mealworms LLC",
      seal: "Verified Commercial Client Endorsement • Milo's Mealworms LLC USA"
    }
  };

  window.openLetterModal = function(letterKey) {
    const data = lettersData[letterKey];
    const modalContent = document.getElementById('letterModalContent');
    const modalOverlay = document.getElementById('letterModalOverlay');

    if (!data || !modalContent || !modalOverlay) return;

    modalContent.innerHTML = `
      <div class="modal-letterhead">
        <div class="modal-letter-corp">
          <h2>${data.company}</h2>
          <span>${data.tagline}</span>
        </div>
        <div class="modal-letter-date">
          <strong>Date:</strong> ${data.date}
        </div>
      </div>
      <div class="modal-salutation">${data.salutation}</div>
      <div class="modal-letter-body">
        ${data.body}
      </div>
      <div class="modal-signoff-block">
        <p style="margin-bottom: 0.5rem;">Sincerely,</p>
        <div class="modal-signature-font">${data.signerName}</div>
        <div class="modal-signer-name">${data.signerName}</div>
        <div class="modal-signer-title">${data.signerTitle}</div>
      </div>
      <div class="modal-seal-badge">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#10B981"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
        ${data.seal}
      </div>
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.closeLetterModal = function(e) {
    if (e && e.target && e.target.id !== 'letterModalOverlay' && !e.target.classList.contains('letter-modal-close')) {
      return;
    }
    const modalOverlay = document.getElementById('letterModalOverlay');
    if (modalOverlay) {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const modalOverlay = document.getElementById('letterModalOverlay');
      if (modalOverlay && modalOverlay.classList.contains('active')) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    }
  });

  // 6. Contact Form Submission Handling (on contact page)
  const contactForm = document.getElementById('contactForm');
  const formSuccessMessage = document.getElementById('formSuccessMessage');

  if (contactForm && formSuccessMessage) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Transmitting Message...';
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Send Message Directly to Nakul Maini';
        }
        contactForm.reset();
        formSuccessMessage.style.display = 'block';
      }, 700);
    });
  }
});
