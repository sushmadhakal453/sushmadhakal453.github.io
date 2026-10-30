/* =========================================================
   SINGLE CONTENT FILE — edit everything here.
   Items marked must be replaced with real data.
   Bilingual-ready: add a "ne" object mirroring "en" later and
   set SITE.defaultLang = "ne" or use the language toggle.
   ========================================================= */
window.SITE = {
  domain: "https://sushmadhakal.com.np", // the one place to set the live domain (no trailing slash)
  city: "Kathmandu", country: "NP",
  seo: {
    title: "Dr. Sushma Dhakal | Fetal Medicine Specialist in Kathmandu, Nepal",
    description: "Dr. Sushma Dhakal (MBBS, MD Obstetrics & Gynaecology, Fellowship in Fetal Medicine, FMF UK certified) offers NT scans, anomaly scans, neurosonography, amniocentesis & CVS, growth scans, high-risk pregnancy care and prenatal & genetic counselling in Kathmandu, Nepal. Book online.",
    keywords: "fetal medicine Nepal, fetal medicine specialist Kathmandu, NT scan Kathmandu, anomaly scan Nepal, neurosonogram Nepal, amniocentesis Kathmandu, gynaecologist Kathmandu, FMF certified NT scan Nepal, high-risk pregnancy Kathmandu, prenatal counselling Nepal, genetic counselling Nepal, Dr Sushma Dhakal"
  },
  /* Counselling videos: files go in public/videos/. Missing files show "Coming soon". */
  videos: [
    { file: "video1.mp4", title: "Pregnancy counselling video 1, Dr. Sushma Dhakal", description: "Short counselling video for expecting families by fetal medicine specialist Dr. Sushma Dhakal, Kathmandu.", duration: "PT59S", thumbnail: "videos/thumbs/video1.jpg", uploadDate: "2026-10-30" },
    { file: "video2.mp4", title: "Pregnancy counselling video 2, Dr. Sushma Dhakal", description: "Short counselling video for expecting families by fetal medicine specialist Dr. Sushma Dhakal, Kathmandu.", duration: "PT59S", thumbnail: "videos/thumbs/video2.jpg", uploadDate: "2026-10-30" },
    { file: "video3.mp4", title: "Pregnancy counselling video 3, Dr. Sushma Dhakal", description: "Short counselling video for expecting families by fetal medicine specialist Dr. Sushma Dhakal, Kathmandu.", duration: "PT59S", thumbnail: "videos/thumbs/video3.jpg", uploadDate: "2026-10-30" },
    { file: "video4.mp4", title: "Pregnancy counselling video 4, Dr. Sushma Dhakal", description: "Short counselling video for expecting families by fetal medicine specialist Dr. Sushma Dhakal, Kathmandu.", duration: "PT59S", thumbnail: "videos/thumbs/video4.jpg", uploadDate: "2026-10-30" },
    { file: "video5.mp4", title: "Pregnancy counselling video 5, Dr. Sushma Dhakal", description: "Short counselling video for expecting families by fetal medicine specialist Dr. Sushma Dhakal, Kathmandu.", duration: "PT59S", thumbnail: "videos/thumbs/video5.jpg", uploadDate: "2026-10-30" }
  ],
  defaultLang: "en",
  languages: ["en","ne"],
  contact: {
    openingHours: "Su-Fr 09:00-17:00", // schema.org format, used in JSON-LD
    phone: "+977-9849122491",
    phone2: "+977-9851194609",
    phoneHref: "tel:+9779849122491",
    whatsapp: "9779849122491",            // assumed WhatsApp-enabled; change if not
    email: "dhakalsushma453@gmail.com"
  },
  // Cal.com booking (free plan). Create these at cal.com, then change username/slugs here and run `npm run build`.
  cal: {
    username: "sushmadhakal",           // live at https://cal.com/sushmadhakal
    // Event-type slugs. Leave "" to embed the whole profile page (patients see every event type).
    // Once you create "consultation" / "counselling" event types in Cal.com, put the slugs here and rebuild.
    events: { consultation: "consultation", counselling: "counselling" },
    brand: "#ad3f5c",
    origin: "https://app.cal.com"
  },
  slots: ["09:00","09:30","10:00","10:30","11:00","11:30","14:00","14:30","15:00","15:30","16:00","16:30"],
  closedDays: [6], // 0=Sun ... 6=Sat. Saturday closed
  en: {
    name: "Dr. Sushma Dhakal",
    title: "Fetal Medicine Specialist & Obstetrician-Gynaecologist",
    creds: "MBBS · MD (Obstetrics & Gynaecology) · Fellowship in Fetal Medicine",
    heroLine: "Caring for two lives, from the very first heartbeat.",
    heroSub: "Expert pregnancy scans, high-risk pregnancy care and compassionate counselling, from a fetal medicine specialist trained at BLK-Max Super Speciality Hospital, New Delhi and certified by the Fetal Medicine Foundation (UK).",
    bio: "Dr. Sushma Dhakal is a Nepali obstetrician-gynaecologist with a Fellowship in Fetal Medicine from BLK-Max Super Speciality Hospital, New Delhi (2025–2026). She holds FMF (UK) certification in NT and anomaly scanning and performs first-trimester, anomaly, genetic sonogram, neurosonogram, growth and Doppler scans, as well as amniocentesis, chorionic villus sampling and fetal procedures. Before her fellowship she worked as Registrar at Kirtipur Hospital and as Lecturer at Nepal Medical College, and as Medical Officer at Patan Hospital and KIST Medical College. She counsels families on fetal structural and genetic conditions and high-risk pregnancy in Nepali, English and Hindi.",
    qualifications: [
      { t: "Fellowship in Fetal Medicine", d: "BLK-Max Super Speciality Hospital, New Delhi · Mar 2025 – Feb 2026" },
      { t: "FMF (UK) Certification", d: "NT scan and anomaly scan, Fetal Medicine Foundation, UK" },
      { t: "MD, Obstetrics & Gynaecology", d: "Kathmandu School of Medical Science, Dhulikhel · 2017 – 2020" },
      { t: "Nepal Medical Council Specialty License", d: "Obstetrics & Gynaecology · 2020" },
      { t: "MBBS", d: "KIST Medical College & Teaching Hospital, Lalitpur · 2008 – 2015" }
    ],
    experience: [
      { t: "Fellow, Fetal Medicine", d: "BLK-Max Super Speciality Hospital, New Delhi · 2025 – 2026" },
      { t: "Lecturer, Obstetrics & Gynaecology", d: "Nepal Medical College · May 2023 – Feb 2025" },
      { t: "Registrar, Obstetrics & Gynaecology", d: "Kirtipur Hospital · Dec 2020 – Apr 2023" },
      { t: "Medical Officer", d: "Patan Hospital · 2015 – 2017" },
      { t: "Medical Officer", d: "KIST Medical College & Teaching Hospital · 2015" }
    ],
    highlights: [
      "MD dissertation: Risk Factors for Intrauterine Growth Restriction and Perinatal Outcomes",
      "Poster: Endometrial Tuberculosis, a Treatable Cause of Infertility (NESOG XIV International Conference, 2019)",
      "Trained in Newborn Life Support, operative hysterectomy and laparoscopic surgery",
      "Languages: Nepali, English, Hindi"
    ],
    stats: [ { n: "10+", l: "Years in practice" }, { n: "FMF", l: "UK certified" }, { n: "3", l: "Languages" } ],
    services: [
      { i: "baby", t: "NT Scan & First-Trimester Screening", d: "11–14 week nuchal translucency scan, FMF (UK) certified." },
      { i: "search", t: "Anomaly Scan & Genetic Sonogram", d: "Detailed scan of your baby's organs, structure and markers of genetic conditions." },
      { i: "brain", t: "Neurosonogram", d: "Focused assessment of your baby's brain and spine." },
      { i: "trend", t: "Growth & Doppler Scans", d: "Tracking growth, fluid and blood flow through later pregnancy." },
      { i: "syringe", t: "Amniocentesis & CVS", d: "Genetic analysis by amniocentesis and chorionic villus sampling." },
      { i: "steth", t: "Fetal Procedures", d: "Specialised fetal procedures, including fetal reduction where indicated." },
      { i: "shield", t: "High-Risk Pregnancy Care", d: "Close monitoring and management for complicated pregnancies." },
      { i: "dna", t: "Genetic & Prenatal Counselling", d: "Clear, kind guidance on fetal structural and genetic conditions and your choices." }
    ],
    steps: [
      { t: "Book online", d: "Choose a service, date and time in under a minute." },
      { t: "Get confirmed", d: "We call or WhatsApp you to confirm and share preparation tips." },
      { t: "Visit & scan", d: "An unhurried consultation and scan with the doctor." },
      { t: "Clear guidance", d: "Leave with a report, a plan and answers to your questions." }
    ],
    testimonials: [
      { q: "My NT scan result worried me at first. Doctor explained the numbers slowly and what the next steps could be. I went home much calmer.", a: "Suchana Ghimire" },
      { q: "During the anomaly scan she showed us each part of the baby on the screen and answered all our questions without rushing.", a: "Radha Adhikari" },
      { q: "I had high blood pressure in my last pregnancy, so this time she followed me closely with regular scans. I always knew what the plan was.", a: "Elisa Chapagain" },
      { q: "We were unsure about amniocentesis. She explained the benefits and the risks honestly and let us take our time to decide.", a: "Nirmala Pandey" },
      { q: "My baby was measuring small, so we had growth and Doppler scans every two weeks. Her clear updates made a stressful time easier.", a: "Somi Gurung" }
    ],
    faq: [
      { q: "When should I get an NT scan?", a: "Between 11 weeks and 13 weeks 6 days of pregnancy." },
      { q: "When is the anomaly scan done?", a: "Usually between 18 and 22 weeks of pregnancy." },
      { q: "Is Dr. Sushma Dhakal FMF certified?", a: "Yes. She holds Fetal Medicine Foundation (UK) certification for NT and anomaly scans." },
      { q: "Can my partner come along?", a: "Yes, one companion is welcome during the scan and counselling." },
      { q: "Is online counselling available?", a: "Yes. Pick the online option when you book a counselling slot and you'll receive a video-call link." },
      { q: "Which languages are spoken?", a: "Nepali, English and Hindi." },
      { q: "What are the fees?", a: "Fees vary by service. Please call or WhatsApp us for current pricing." }
    ],
    hours: [ { d: "Sun – Fri", h: "9:00 AM – 5:00 PM" }, { d: "Saturday", h: "Closed" } ],
    counsellingTopics: ["Prenatal counselling","Genetic counselling","Abnormal scan result","Screening test results","Previous pregnancy loss","Planning a future pregnancy","Other"],
    seo: {
      title: "Dr. Sushma Dhakal | Fetal Medicine Specialist in Kathmandu, Nepal",
      description: "Dr. Sushma Dhakal (MBBS, MD Obstetrics & Gynaecology, Fellowship in Fetal Medicine, FMF UK certified) offers NT scans, anomaly scans, neurosonography, amniocentesis & CVS, growth scans, high-risk pregnancy care and prenatal & genetic counselling in Kathmandu, Nepal. Book online.",
      ogLocale: "en_US"
    },
    ui: {
      skip: "Skip to content", brandSub: "Fetal Medicine Specialist", navAbout: "About", navServices: "Services", navHow: "How it works", navVideos: "Videos", navGuides: "Guides", navFaq: "FAQ", navContact: "Contact", book: "Book", langOther: "ने", langOtherLabel: "नेपालीमा हेर्नुहोस्", menu: "Menu",
      heroEyebrow: "Dr. Sushma Dhakal · Fetal Medicine Specialist in Kathmandu, Nepal", bookAppt: "Book Appointment", reqCounsel: "Request Counselling",
      photoAlt: "Dr. Sushma Dhakal, fetal medicine specialist in Kathmandu, Nepal, in a white coat with stethoscope",
      aboutEy: "About", meet: "Meet", qualH: "Qualifications", expH: "Experience", hlH: "Highlights",
      svcEy: "Services", svcH: "Fetal medicine services in Kathmandu", svcSub: "Specialised scans and care for you and your baby.", bookThis: "Book this",
      howEy: "How it works", howH: "Simple, from booking to answers",
      vidEy: "Free counselling videos", vidH: "Counselling videos for expecting families", vidSub: "Short, trusted explanations from the doctor on scans, screening and a healthy pregnancy.", playVideo: "Play counselling video", comingSoon: "Coming soon",
      guidesEy: "Health guides", guidesH: "Pregnancy scan guides", guidesSub: "Short, doctor-written guides to help you understand your scans and tests.", readGuide: "Read guide",
      apptEy: "Appointments", apptH: "Book your visit", p1: "1 Service", p2: "2 Date & time", p3: "3 Details", chooseSvc: "Choose a service", pickDT: "Pick a date & time", date: "Date", cont: "Continue", back: "Back",
      yourDetails: "Your details", fullName: "Full name", phone: "Phone", emailOpt: "Email (optional)", weeksOpt: "Weeks pregnant (optional)", notesOpt: "Notes (optional)", confirm: "Confirm booking", calLoad: "Show booking calendar", segLabel: "Appointment type", segConsult: "Consultation / Scan", segCounsel: "Counselling", calNote: "Choose Consultation / Scan or Counselling (in person or online), then pick a time. You get an instant email confirmation.", calAlt: "Prefer to talk first?", calCounsel: "Choose a counselling slot (in-person or online).", calLoading: "Loading calendar…",
      counselEy: "Counselling", counselH: "Talk it through, in person or online", counselP: "Unexpected scan result? Questions about genetic testing? Request a private counselling session and we'll get back to you to schedule it.",
      waUs: "WhatsApp us", call: "Call", topic: "Topic", mode: "Mode", inPerson: "In-person", online: "Online", prefDate: "Preferred date (optional)", concerns: "Your concerns", concernsPh: "Share as much or as little as you like", send: "Send request",
      kindEy: "Kind words", kindH: "From families we've cared for", 
      faqEy: "FAQ", faqH: "Questions, answered", contactEy: "Contact", contactH: "Get in touch", contactSub: "Call, WhatsApp or email. We usually reply the same working day.", waLabel: "WhatsApp", email: "Email", hoursH: "Hours", 
      home: "Home", crumb: "Fetal Medicine Specialist, Kathmandu", rights: "All rights reserved.", waFab: "Chat on WhatsApp", waText: "Namaste Doctor, I'd like to enquire about an appointment.",
      errSvc: "Please choose a service.", errDate: "Please choose a date.", errClosed: "Clinic is closed that day.", errTime: "Please pick a time slot.", errName: "Please enter your full name.", errPhone: "Please enter a valid phone number.", errEmail: "Please enter a valid email.", errConcern: "Please briefly describe your concerns.",
      closedDay: "Clinic closed on this day. Please choose another date.", doneH: "Booking request received!", doneP: "Thank you, {name}. We'll call or WhatsApp you shortly to confirm.", service: "Service", time: "Time", ref: "Reference", again: "Book another",
      cDoneH: "Request sent", cDoneP: "We'll contact you on {phone} to schedule. Reference {ref}.",
      guideBy: "By", reviewed: "Medically written by", updated: "Updated", disclaimer: "This guide is for general information only and is not a substitute for personal medical advice. Every pregnancy is different. Please consult your doctor about your own situation. In an emergency, go to the nearest hospital.", bookScan: "Book this scan", ctaH: "Have questions about your pregnancy?", ctaP: "Book a consultation with Dr. Sushma Dhakal, Fellowship-trained fetal medicine specialist (FMF UK certified).", guideFaq: "Frequently asked questions", allGuides: "All guides", minRead: "min read"
    }
  },
  ne: {
    name: "डा. सुष्मा ढकाल",
    title: "भ्रूण चिकित्सा विशेषज्ञ तथा स्त्री तथा प्रसूति रोग विशेषज्ञ",
    creds: "एमबीबीएस · एमडी (स्त्री तथा प्रसूति रोग) · भ्रूण चिकित्सामा फेलोसिप",
    heroLine: "पहिलो धड्कनदेखि नै, दुई जीवनको हेरचाह।",
    heroSub: "बीएलके-म्याक्स सुपर स्पेशियालिटी अस्पताल, नयाँ दिल्लीमा तालिमप्राप्त र फिटल मेडिसिन फाउन्डेसन (FMF, UK) बाट प्रमाणित भ्रूण चिकित्सा विशेषज्ञबाट गर्भावस्थाका विशेष स्क्यान, उच्च जोखिमयुक्त गर्भावस्थाको हेरचाह र आत्मीय परामर्श।",
    bio: "डा. सुष्मा ढकाल नेपाली स्त्री तथा प्रसूति रोग विशेषज्ञ हुनुहुन्छ। उहाँले बीएलके-म्याक्स सुपर स्पेशियालिटी अस्पताल, नयाँ दिल्लीबाट भ्रूण चिकित्सा (Fetal Medicine) मा फेलोसिप (२०२५–२०२६) पूरा गर्नुभएको छ। उहाँसँग NT स्क्यान र एनोमली स्क्यानका लागि FMF (UK) प्रमाणपत्र छ। उहाँ पहिलो त्रैमासिक स्क्यान, एनोमली स्क्यान, जेनेटिक सोनोग्राम, न्युरोसोनोग्राम, ग्रोथ तथा डप्लर स्क्यानका साथै एम्नियोसेन्टेसिस, कोरियोनिक भिलस स्याम्पलिङ (CVS) र भ्रूण प्रक्रियाहरू गर्नुहुन्छ। फेलोसिपअघि उहाँले कीर्तिपुर अस्पतालमा रजिस्ट्रार, नेपाल मेडिकल कलेजमा लेक्चरर, तथा पाटन अस्पताल र KIST मेडिकल कलेजमा मेडिकल अफिसरका रूपमा काम गर्नुभएको छ। उहाँ भ्रूणको बनावट, वंशाणुगत (जेनेटिक) समस्या र उच्च जोखिमयुक्त गर्भावस्थाबारे नेपाली, अंग्रेजी र हिन्दीमा परामर्श दिनुहुन्छ।",
    qualifications: [
      { t: "भ्रूण चिकित्सामा फेलोसिप", d: "बीएलके-म्याक्स सुपर स्पेशियालिटी अस्पताल, नयाँ दिल्ली · मार्च २०२५ – फेब्रुअरी २०२६" },
      { t: "FMF (UK) प्रमाणपत्र", d: "NT स्क्यान र एनोमली स्क्यान, फिटल मेडिसिन फाउन्डेसन, UK" },
      { t: "एमडी, स्त्री तथा प्रसूति रोग", d: "काठमाडौं स्कूल अफ मेडिकल साइन्स, धुलिखेल · २०१७ – २०२०" },
      { t: "नेपाल मेडिकल काउन्सिल विशेषज्ञ लाइसेन्स", d: "स्त्री तथा प्रसूति रोग · २०२०" },
      { t: "एमबीबीएस", d: "KIST मेडिकल कलेज तथा शिक्षण अस्पताल, ललितपुर · २००८ – २०१५" }
    ],
    experience: [
      { t: "फेलो, भ्रूण चिकित्सा", d: "बीएलके-म्याक्स सुपर स्पेशियालिटी अस्पताल, नयाँ दिल्ली · २०२५ – २०२६" },
      { t: "लेक्चरर, स्त्री तथा प्रसूति रोग विभाग", d: "नेपाल मेडिकल कलेज · मे २०२३ – फेब्रुअरी २०२५" },
      { t: "रजिस्ट्रार, स्त्री तथा प्रसूति रोग विभाग", d: "कीर्तिपुर अस्पताल · डिसेम्बर २०२० – अप्रिल २०२३" },
      { t: "मेडिकल अफिसर", d: "पाटन अस्पताल · २०१५ – २०१७" },
      { t: "मेडिकल अफिसर", d: "KIST मेडिकल कलेज तथा शिक्षण अस्पताल · २०१५" }
    ],
    highlights: [
      "एमडी शोधपत्र: गर्भमा शिशुको वृद्धि रोकिने (IUGR) जोखिम कारक र प्रसवकालीन परिणाम",
      "पोस्टर प्रस्तुति: पाठेघरको क्षयरोग, बाँझोपनको उपचारयोग्य कारण (NESOG XIV अन्तर्राष्ट्रिय सम्मेलन, २०१९)",
      "नवजात शिशु जीवन रक्षा (NLS), शल्यक्रियाद्वारा पाठेघर निकाल्ने (हिस्टेरेक्टोमी) र ल्याप्रोस्कोपिक सर्जरीमा तालिम",
      "भाषा: नेपाली, अंग्रेजी, हिन्दी"
    ],
    stats: [ { n: "१०+", l: "वर्षको अनुभव" }, { n: "FMF", l: "UK प्रमाणित" }, { n: "३", l: "भाषाहरू" } ],
    services: [
      { i: "baby", t: "NT स्क्यान तथा पहिलो त्रैमासिक स्क्रिनिङ", d: "११–१४ हप्तामा गरिने न्युकल ट्रान्सलुसेन्सी (NT) स्क्यान, FMF (UK) प्रमाणित।" },
      { i: "search", t: "एनोमली स्क्यान तथा जेनेटिक सोनोग्राम", d: "शिशुका अंग, बनावट र जेनेटिक समस्याका संकेतहरूको विस्तृत जाँच।" },
      { i: "brain", t: "न्युरोसोनोग्राम", d: "शिशुको मस्तिष्क र मेरुदण्डको विशेष जाँच।" },
      { i: "trend", t: "ग्रोथ तथा डप्लर स्क्यान", d: "गर्भावस्थाको पछिल्लो चरणमा शिशुको वृद्धि, पानी र रक्तप्रवाहको निगरानी।" },
      { i: "syringe", t: "एम्नियोसेन्टेसिस तथा CVS", d: "एम्नियोसेन्टेसिस र कोरियोनिक भिलस स्याम्पलिङद्वारा जेनेटिक परीक्षण।" },
      { i: "steth", t: "भ्रूण प्रक्रियाहरू", d: "आवश्यक परेमा भ्रूण घटाउने (fetal reduction) लगायत विशेष भ्रूण प्रक्रियाहरू।" },
      { i: "shield", t: "उच्च जोखिमयुक्त गर्भावस्थाको हेरचाह", d: "जटिल गर्भावस्थाको नजिकबाट निगरानी र व्यवस्थापन।" },
      { i: "dna", t: "जेनेटिक तथा गर्भावस्था परामर्श", d: "भ्रूणको बनावट र जेनेटिक समस्या तथा तपाईंका विकल्पबारे स्पष्ट र आत्मीय मार्गदर्शन।" }
    ],
    steps: [
      { t: "अनलाइन बुक गर्नुहोस्", d: "एक मिनेटभित्रै सेवा, मिति र समय छान्नुहोस्।" },
      { t: "पुष्टि पाउनुहोस्", d: "हामी फोन वा WhatsApp मार्फत पुष्टि गर्छौं र तयारीका सुझाव दिन्छौं।" },
      { t: "भेट र स्क्यान", d: "डाक्टरसँग हतार नगरी परामर्श र स्क्यान।" },
      { t: "स्पष्ट मार्गदर्शन", d: "रिपोर्ट, योजना र आफ्ना प्रश्नका उत्तर लिएर फर्कनुहोस्।" }
    ],
    testimonials: [
      { q: "सुरुमा NT स्क्यानको नतिजाले मलाई चिन्तित बनायो। डाक्टरले अंकहरू र अब के गर्न सकिन्छ भन्ने कुरा बिस्तारै बुझाउनुभयो। म धेरै ढुक्क भएर घर फर्किएँ।", a: "सुचना घिमिरे" },
      { q: "एनोमली स्क्यानको बेला उहाँले स्क्रिनमा शिशुका हरेक भाग देखाउनुभयो र हतार नगरी हाम्रा सबै प्रश्नको जवाफ दिनुभयो।", a: "राधा अधिकारी" },
      { q: "अघिल्लो गर्भमा मेरो रक्तचाप बढेको थियो, त्यसैले यसपटक उहाँले नियमित स्क्यानसहित नजिकबाट हेरिरहनुभयो। के गर्ने भन्ने योजना सधैं स्पष्ट थियो।", a: "एलिसा चापागाईं" },
      { q: "एम्नियोसेन्टेसिस गर्ने कि नगर्ने भन्नेमा हामी अलमलमा थियौं। उहाँले फाइदा र जोखिम इमानदारीपूर्वक बताउनुभयो र निर्णय गर्न समय दिनुभयो।", a: "निर्मला पाण्डे" },
      { q: "मेरो शिशु सानो देखिएकाले हरेक दुई हप्तामा ग्रोथ र डप्लर स्क्यान भयो। उहाँको स्पष्ट जानकारीले गाह्रो समय सजिलो बनायो।", a: "सोमी गुरुङ" }
    ],
    faq: [
      { q: "NT स्क्यान कहिले गर्नुपर्छ?", a: "गर्भावस्थाको ११ हप्तादेखि १३ हप्ता ६ दिनसम्म।" },
      { q: "एनोमली स्क्यान कहिले गरिन्छ?", a: "प्रायः गर्भावस्थाको १८ देखि २२ हप्ताबीच।" },
      { q: "के डा. सुष्मा ढकाल FMF प्रमाणित हुनुहुन्छ?", a: "हो। उहाँसँग NT र एनोमली स्क्यानका लागि फिटल मेडिसिन फाउन्डेसन (UK) को प्रमाणपत्र छ।" },
      { q: "के श्रीमान् वा परिवारका सदस्य साथमा आउन सक्नुहुन्छ?", a: "हो, स्क्यान र परामर्शका बेला एक जना साथमा आउन सक्नुहुन्छ।" },
      { q: "के अनलाइन परामर्श उपलब्ध छ?", a: "छ। परामर्शको समय बुक गर्दा अनलाइन विकल्प छान्नुहोस्, तपाईंलाई भिडियो कलको लिङ्क आउनेछ।" },
      { q: "कुन-कुन भाषामा कुरा गर्न सकिन्छ?", a: "नेपाली, अंग्रेजी र हिन्दी।" },
      { q: "शुल्क कति लाग्छ?", a: "सेवाअनुसार शुल्क फरक हुन्छ। हालको शुल्कका लागि फोन वा WhatsApp गर्नुहोस्।" }
    ],
    hours: [ { d: "आइत – शुक्र", h: "बिहान ९ – साँझ ५" }, { d: "शनिबार", h: "बन्द" } ],
    counsellingTopics: ["गर्भावस्था परामर्श","जेनेटिक परामर्श","स्क्यानमा असामान्य नतिजा","स्क्रिनिङ परीक्षणको नतिजा","विगतमा गर्भ खेर गएको","भविष्यको गर्भावस्थाको योजना","अन्य"],
    seo: {
      title: "डा. सुष्मा ढकाल | भ्रूण चिकित्सा विशेषज्ञ, काठमाडौं, नेपाल",
      description: "डा. सुष्मा ढकाल (एमबीबीएस, एमडी स्त्री तथा प्रसूति रोग, भ्रूण चिकित्सामा फेलोसिप, FMF UK प्रमाणित): काठमाडौंमा NT स्क्यान, एनोमली स्क्यान, न्युरोसोनोग्राम, एम्नियोसेन्टेसिस र CVS, ग्रोथ स्क्यान, उच्च जोखिमयुक्त गर्भावस्था हेरचाह र जेनेटिक परामर्श। अनलाइन बुक गर्नुहोस्।",
      ogLocale: "ne_NP"
    },
    ui: {
      skip: "मुख्य सामग्रीमा जानुहोस्", brandSub: "भ्रूण चिकित्सा विशेषज्ञ", navAbout: "परिचय", navServices: "सेवाहरू", navHow: "प्रक्रिया", navVideos: "भिडियो", navGuides: "जानकारी", navFaq: "प्रश्नोत्तर", navContact: "सम्पर्क", book: "बुक गर्नुहोस्", langOther: "EN", langOtherLabel: "View in English", menu: "मेनु",
      heroEyebrow: "डा. सुष्मा ढकाल · भ्रूण चिकित्सा विशेषज्ञ, काठमाडौं, नेपाल", bookAppt: "अपोइन्टमेन्ट बुक गर्नुहोस्", reqCounsel: "परामर्श अनुरोध",
      photoAlt: "सेतो कोट र स्टेथोस्कोपमा डा. सुष्मा ढकाल, भ्रूण चिकित्सा विशेषज्ञ, काठमाडौं, नेपाल",
      aboutEy: "परिचय", meet: "भेट्नुहोस्", qualH: "योग्यता", expH: "अनुभव", hlH: "विशेष उपलब्धि",
      svcEy: "सेवाहरू", svcH: "काठमाडौंमा भ्रूण चिकित्सा सेवाहरू", svcSub: "तपाईं र तपाईंको शिशुका लागि विशेष स्क्यान र हेरचाह।", bookThis: "यो बुक गर्नुहोस्",
      howEy: "प्रक्रिया", howH: "बुकिङदेखि उत्तरसम्म, सजिलै",
      vidEy: "निःशुल्क परामर्श भिडियो", vidH: "गर्भवती परिवारका लागि परामर्श भिडियो", vidSub: "स्क्यान, स्क्रिनिङ र स्वस्थ गर्भावस्थाबारे डाक्टरबाट छोटो र भरपर्दो जानकारी।", playVideo: "परामर्श भिडियो चलाउनुहोस्", comingSoon: "छिट्टै आउँदैछ",
      guidesEy: "स्वास्थ्य जानकारी", guidesH: "गर्भावस्था स्क्यान सम्बन्धी जानकारी", guidesSub: "तपाईंका स्क्यान र परीक्षण बुझ्न डाक्टरले लेखेका छोटा लेखहरू।", readGuide: "पढ्नुहोस्",
      apptEy: "अपोइन्टमेन्ट", apptH: "भेटघाट बुक गर्नुहोस्", p1: "१ सेवा", p2: "२ मिति र समय", p3: "३ विवरण", chooseSvc: "सेवा छान्नुहोस्", pickDT: "मिति र समय छान्नुहोस्", date: "मिति", cont: "अगाडि बढ्नुहोस्", back: "पछाडि",
      yourDetails: "तपाईंको विवरण", fullName: "पूरा नाम", phone: "फोन", emailOpt: "इमेल (ऐच्छिक)", weeksOpt: "गर्भ कति हप्ताको (ऐच्छिक)", notesOpt: "थप जानकारी (ऐच्छिक)", confirm: "बुकिङ पुष्टि गर्नुहोस्", calLoad: "बुकिङ क्यालेन्डर हेर्नुहोस्", segLabel: "भेटको प्रकार", segConsult: "परामर्श / स्क्यान", segCounsel: "काउन्सेलिङ", calNote: "परामर्श/स्क्यान वा काउन्सेलिङ (भेटमै वा अनलाइन) छान्नुहोस्, अनि मिल्ने समय रोज्नुहोस्। इमेलमा तुरुन्तै पुष्टि आउँछ।", calAlt: "पहिले कुरा गर्न चाहनुहुन्छ?", calCounsel: "परामर्शको समय छान्नुहोस् (भेटमै वा अनलाइन)।", calLoading: "क्यालेन्डर लोड हुँदैछ…",
      counselEy: "परामर्श", counselH: "प्रत्यक्ष वा अनलाइन, खुलेर कुरा गर्नुहोस्", counselP: "स्क्यानमा अप्रत्याशित नतिजा आयो? जेनेटिक परीक्षणबारे प्रश्न छन्? गोपनीय परामर्शका लागि अनुरोध गर्नुहोस्, हामी समय मिलाउन सम्पर्क गर्नेछौं।",
      waUs: "WhatsApp गर्नुहोस्", call: "फोन गर्नुहोस्", topic: "विषय", mode: "माध्यम", inPerson: "प्रत्यक्ष भेट", online: "अनलाइन", prefDate: "रुचाइएको मिति (ऐच्छिक)", concerns: "तपाईंका चिन्ता", concernsPh: "जति चाहनुहुन्छ त्यति लेख्नुहोस्", send: "अनुरोध पठाउनुहोस्",
      kindEy: "अनुभव", kindH: "हामीले हेरचाह गरेका परिवारहरूबाट", 
      faqEy: "प्रश्नोत्तर", faqH: "प्रायः सोधिने प्रश्नहरू", contactEy: "सम्पर्क", contactH: "सम्पर्क गर्नुहोस्", contactSub: "फोन, WhatsApp वा इमेल गर्नुहोस्। प्रायः सोही कार्यदिन जवाफ दिन्छौं।", waLabel: "WhatsApp", email: "इमेल", hoursH: "समय", 
      home: "गृहपृष्ठ", crumb: "भ्रूण चिकित्सा विशेषज्ञ, काठमाडौं", rights: "सर्वाधिकार सुरक्षित।", waFab: "WhatsApp मा कुरा गर्नुहोस्", waText: "नमस्ते डाक्टर, म अपोइन्टमेन्टबारे जानकारी लिन चाहन्छु।",
      errSvc: "कृपया सेवा छान्नुहोस्।", errDate: "कृपया मिति छान्नुहोस्।", errClosed: "त्यस दिन क्लिनिक बन्द हुन्छ।", errTime: "कृपया समय छान्नुहोस्।", errName: "कृपया पूरा नाम लेख्नुहोस्।", errPhone: "कृपया सही फोन नम्बर लेख्नुहोस्।", errEmail: "कृपया सही इमेल लेख्नुहोस्।", errConcern: "कृपया आफ्ना चिन्ता छोटकरीमा लेख्नुहोस्।",
      closedDay: "यस दिन क्लिनिक बन्द छ। कृपया अर्को मिति छान्नुहोस्।", doneH: "बुकिङ अनुरोध प्राप्त भयो!", doneP: "धन्यवाद, {name}। पुष्टि गर्न हामी छिट्टै फोन वा WhatsApp गर्नेछौं।", service: "सेवा", time: "समय", ref: "सन्दर्भ नम्बर", again: "अर्को बुक गर्नुहोस्",
      cDoneH: "अनुरोध पठाइयो", cDoneP: "समय मिलाउन हामी {phone} मा सम्पर्क गर्नेछौं। सन्दर्भ नम्बर {ref}।",
      guideBy: "लेखक", reviewed: "चिकित्सकीय लेखन:", updated: "अद्यावधिक", disclaimer: "यो जानकारी सामान्य जानकारीका लागि मात्र हो, व्यक्तिगत चिकित्सकीय सल्लाहको विकल्प होइन। हरेक गर्भावस्था फरक हुन्छ। आफ्नो अवस्थाबारे डाक्टरसँग सल्लाह लिनुहोस्। आपत्कालीन अवस्थामा नजिकको अस्पताल जानुहोस्।", bookScan: "यो स्क्यान बुक गर्नुहोस्", ctaH: "गर्भावस्थाबारे प्रश्न छन्?", ctaP: "फेलोसिप-तालिमप्राप्त भ्रूण चिकित्सा विशेषज्ञ (FMF UK प्रमाणित) डा. सुष्मा ढकालसँग परामर्श बुक गर्नुहोस्।", guideFaq: "प्रायः सोधिने प्रश्नहरू", allGuides: "सबै जानकारी", minRead: "मिनेट पढाइ"
    }
  }
};
