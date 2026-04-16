export type Article = {
  slug: string;
  category: 'pharmacology' | 'diseases' | 'prevention' | 'diagnostics';
  date: string;
  readingTime: string;
  image?: string;
  locales: {
    en: { title: string; excerpt: string; content: string[] };
    el: { title: string; excerpt: string; content: string[] };
    de: { title: string; excerpt: string; content: string[] };
  };
};

export const library: Article[] = [
  {
    slug: 'chest-pain-meaning',
    category: 'diseases',
    date: '2026-04-16',
    readingTime: '5 min read',
    image: '/images/article_heart.png',
    locales: {
      en: {
        title: 'Chest Pain: What Does It Mean?',
        excerpt: 'Understanding the differences between muscular pain, anxiety, and a genuine heart attack.',
        content: [
          'Chest pain is the most common reason for emergency cardiology visits. However, not all chest pain is cardiac.',
          '### Is it a Heart Attack?',
          'Cardiac pain typically feels like a heavy weight or crushing pressure in the center of the chest, often radiating to the left arm or jaw. It is normally accompanied by sweating, nausea, and shortness of breath.',
          '### Non-Cardiac Causes',
          'Sharp, localized pain that worsens when you breathe deeply or press on the area is usually muscular or skeletal. Additionally, gastric reflux can mimic cardiac pain perfectly.',
          'Never guess with chest pain. <a href="/contact" class="font-bold underline text-blue-600">Contact us for an immediate ECG check</a>.'
        ]
      },
      el: {
        title: 'Πόνοι στο Στήθος: Τι σημαίνουν πραγματικά;',
        excerpt: 'Κατανοώντας τις διαφορές ανάμεσα σε μυϊκό πόνο, άγχος και οξύ έμφραγμα.',
        content: [
          'Ο πόνος στο στήθος είναι η πιο συχνή αιτία επίσκεψης στον καρδιολόγο. Ωστόσο, δεν προέρχονται όλοι οι πόνοι από την καρδιά.',
          '### Είναι Έμφραγμα;',
          'Ο καρδιακός πόνος (στηθάγχη) συνήθως περιγράφεται ως έντονο βάρος, σφίξιμο ή κάψιμο στο κέντρο του στήθους που συχνά αντανακλά στο αριστερό χέρι, το σαγόνι ή την πλάτη.',
          '### Μη-Καρδιακά Αίτια',
          'Ο οξύς πόνος που εντοπίζεται σε ένα τελείως συγκεκριμένο σημείο σαν "σουβλιά" και χειροτερεύει όταν παίρνετε βαθιά ανάσα, είναι συνήθως μυοσκελετικός.',
          'Μην παίζετε ποτέ με τον πόνο στο στήθος. <a href="/contact" class="font-bold underline text-blue-600">Καλέστε το ιατρείο για ένα άμεσο Ηλεκτροκαρδιογράφημα</a>.'
        ]
      },
      de: {
        title: 'Brustschmerzen: Was bedeuten sie?',
        excerpt: 'Verständnis der Unterschiede zwischen Muskelschmerzen und einem echten Herzinfarkt.',
        content: [
          'Brustschmerzen sind der häufigste Grund für kardiologische Notfallbesuche.',
          '### Ist es ein Herzinfarkt?',
          'Kardiale Schmerzen fühlen sich typischerweise wie ein schweres Gewicht an.',
          'Raten Sie nie bei Brustschmerzen. <a href="/contact" class="font-bold underline text-blue-600">Kontaktieren Sie uns für ein sofortiges EKG</a>.'
        ]
      }
    }
  },
  {
    slug: 'understanding-hdl-ldl',
    category: 'diagnostics',
    date: '2026-04-12',
    readingTime: '6 min read',
    image: '/images/article_monitor.png',
    locales: {
      en: {
        title: 'HDL vs LDL: The Good and The Bad Cholesterol',
        excerpt: 'How to read your lipid profile blood tests correctly.',
        content: [
          'A simple blood test often returns a total cholesterol number, but what truly matters is the breakdown into HDL and LDL.',
          '### LDL: The Plaques Builder',
          'Low-Density Lipoprotein (LDL) is known as the "bad" cholesterol. It deposits fat particles inside the walls of your arteries.',
          '### HDL: The Cleaner',
          'High-Density Lipoprotein (HDL) acts incredibly as a scavenger, carrying LDL away from the arteries.',
          '<a href="/contact" class="font-bold underline text-blue-600">Book your clinical exam today</a> to discuss your recent lab results.'
        ]
      },
      el: {
        title: 'HDL και LDL: Η Καλή και η Κακή Χοληστερίνη',
        excerpt: 'Πώς να διαβάσετε σωστά τις αιματολογικές εξετάσεις του λιπιδαιμικού σας προφίλ.',
        content: [
          'Μια απλή εξέταση αίματος συχνά δίνει τον αριθμό της "Ολικής Χοληστερίνης", αλλά αυτό που πραγματικά έχει σημασία είναι ο διαχωρισμός σε HDL και LDL.',
          '### LDL: Ο Δημιουργός της Αθηροσκλήρωσης',
          'Η LDL είναι γνωστή ως η "κακή" χοληστερόλη. Εναποθέτει σωματίδια λίπους στα τοιχώματα των αρτηριών σας, δημιουργώντας σκληρές αθηρωματικές πλάκες.',
          '### HDL: Ο Υπερασπιστής (Η Καλή)',
          'Η HDL δρα σαν "απορριμματοφόρο", απομακρύνοντας την LDL χοληστερόλη από τα αγγεία.',
          'Έχετε κάνει πρόσφατα αιματολογικές εξετάσεις; <a href="/contact" class="font-bold underline text-blue-600">Κλείστε ένα ραντεβού ρύθμισης λιπιδίων</a> στο ιατρείο μας.'
        ]
      },
      de: {
        title: 'HDL vs LDL: Das gute und das schlechte Cholesterin',
        excerpt: 'Wie Sie Ihre Bluttests für das Lipidprofil richtig lesen.',
        content: [
          'Ein einfacher Bluttest liefert oft eine Gesamtcholesterinzahl, aber was wirklich zählt, ist LDL.',
          '### LDL: Der Plaque-Bildner',
          'LDL lagert Fettpartikel in den Wänden Ihrer Arterien ab.',
          '### HDL: Der Reiniger',
          'HDL wirkt als Fänger und transportiert LDL von den Arterien zurück zur Leber.',
          '<a href="/contact" class="font-bold underline text-blue-600">Buchen Sie noch heute Ihre klinische Untersuchung</a>.'
        ]
      }
    }
  },
  {
    slug: 'diet-for-cholesterol',
    category: 'prevention',
    date: '2026-04-10',
    readingTime: '5 min read',
    image: '/images/article_diet.png',
    locales: {
      en: {
        title: 'The Optimal Diet to Lower Cholesterol naturally',
        excerpt: 'Medical nutrition advice for achieving lower LDL levels without immediately resorting to medication.',
        content: [
          'While genetics play a huge role in cholesterol levels, your diet is the first line of defense.',
          '### Foods to Eliminate',
          'Trans fats and saturated fats directly increase LDL. Limit red meat to once a month, choose low-fat dairy, and avoid fried foods entirely. Do not worry about cholesterol from eggs, as dietary fats (not dietary cholesterol) are the main culprit.',
          '### Foods to Embrace',
          'Increase your soluble fiber intake dramatically (oats, beans, lentils). Soluble fiber binds to cholesterol in your digestive system and drags it out of the body. Additionally, Omega-3 fatty acids found in salmon and walnuts help raise HDL.'
        ]
      },
      el: {
        title: 'Διατροφή για Ρύθμιση της Χοληστερίνης',
        excerpt: 'Ιατρικές διατροφικές οδηγίες για τη μείωση της LDL χοληστερίνης φυσικά.',
        content: [
          'Αν και η κληρονομικότητα παίζει τεράστιο ρόλο, η διατροφή είναι η πρώτη γραμμή άμυνας πριν τη χρήση στατινών.',
          '### Τι πρέπει να κόψετε',
          'Τα κορεσμένα και τα trans λιπαρά αυξάνουν άμεσα την LDL. Περιορίστε το κόκκινο κρέας, προτιμήστε γαλακτοκομικά χαμηλών λιπαρών και σταματήστε τα τηγανητά. Μην ανησυχείτε για τη χοληστερόλη από τα αυγά, καθώς τα διατροφικά λίπη (όχι η διατροφική χοληστερόλη) είναι ο ένοχος.',
          '### Τι πρέπει να αυξήσετε',
          'Αυξήστε δραματικά τις διαλυτές φυτικές ίνες (βρώμη, φακές, ρεβίθια). Οι φυτικές ίνες δεσμεύουν τη χοληστερίνη στο έντερο και την απομακρύνουν.'
        ]
      },
      de: {
        title: 'Die optimale Diät zur Senkung des Cholesterins',
        excerpt: 'Medizinische Ernährungsberatung zur natürlichen Senkung des LDL-Spiegels.',
        content: [
          'Während die Genetik eine große Rolle spielt, ist Ihre Ernährung die erste Verteidigungslinie.',
          '### Lebensmittel zu vermeiden',
          'Trans- und gesättigte Fette erhöhen LDL direkt.',
          '### Lebensmittel zu bevorzugen',
          'Erhöhen Sie Ihre lösliche Ballaststoffzufuhr dramatisch.'
        ]
      }
    }
  },
  {
    slug: 'sugar-and-heart-diabetes',
    category: 'pharmacology',
    date: '2026-04-05',
    readingTime: '7 min read',
    image: '/images/article_pills.png',
    locales: {
      en: {
        title: 'Diabetes and the Heart: A Lethal Combination',
        excerpt: 'Why managing blood sugar is effectively managing your cardiovascular risk.',
        content: [
          'Diabetes is considered a coronary equivalent. This means that a patient with diabetes has the same risk of suffering a heart attack as a non-diabetic patient who has already had a heart attack.',
          '### The Toxicity of High Sugar',
          'Chronic high blood sugar damages the endothelial lining of the blood vessels, making them stiff and promoting massive atherosclerotic plaque buildup.',
          'Modern diabetic management involves revolutionary drugs like GLP-1 agonists (Ozempic/Wegovy) and SGLT2 inhibitors (Jardiance/Forxiga) which not only lower blood sugar but provide immense direct cardiovascular protection.'
        ]
      },
      el: {
        title: 'Σάκχαρο και Καρδιά: Η Άρρηκτη Σχέση του Διαβήτη',
        excerpt: 'Γιατί ο έλεγχος του ζαχάρου είναι πρακτικά απόλυτος έλεγχος του καρδιαγγειακού κινδύνου.',
        content: [
          'Ο Σακχαρώδης Διαβήτης θεωρείται "στεφανιαίο ισοδύναμο". Αυτό σημαίνει ότι ένας ασθενής με διαβήτη έχει τον ίδιο κίνδυνο να πάθει έμφραγμα με έναν μη-διαβητικό ασθενή που *έχει ήδη* πάθει έμφραγμα.',
          '### Η Τοξικότητα του Αίματος',
          'Το χρόνιο υψηλό σάκχαρο "ζαχαρώνει" και καταστρέφει το ενδοθήλιο των αγγείων, κάνοντάς τα άκαμπτα και προωθώντας τη μαζική συσσώρευση αθηρωματικής πλάκας.',
          'Η σύγχρονη αντιμετώπιση του διαβήτη δεν βασίζεται μόνο στη μετφορμίνη ή την ινσουλίνη. Οι νέες επαναστατικές κατηγορίες φαρμάκων (αγωνιστές GLP-1 και αναστολείς SGLT2) προσφέρουν άμεση καρδιαγγειακή προστασία.'
        ]
      },
      de: {
        title: 'Diabetes und das Herz',
        excerpt: 'Warum die Blutzuckerkontrolle Ihr kardiovaskuläres Risiko bestimmt.',
        content: [
          'Diabetes gilt als koronares Äquivalent.',
          '### Toxizität von hohem Zucker',
          'Chronisch hoher Blutzucker schädigt die Endothelauskleidung der Blutgefäße, macht sie steif und fördert massive atherosklerotische Plaquebildung.',
          'Modernes Management umfasst GLP-1-Agonisten und SGLT2-Inhibitoren.'
        ]
      }
    }
  },
  {
    slug: 'triglycerides-hidden-danger',
    category: 'prevention',
    date: '2026-03-25',
    readingTime: '6 min read',
    image: '/images/article_diet.png',
    locales: {
      en: {
        title: 'Triglycerides: The Hidden Danger',
        excerpt: 'Understanding triglycerides and why lowering them is crucial for stroke prevention.',
        content: [
          'While cholesterol hogs the spotlight, triglycerides—the most common type of fat in the body—are equally dangerous when elevated.',
          '### What Raises Them?',
          'Unlike LDL (which is driven by saturated fats), triglycerides are primarily driven by simple carbohydrates, refined sugars, and alcohol.',
          '### The Diet Fix',
          'To lower triglycerides, you must reduce sugar intake to near zero, avoid alcohol completely, and perform regular aerobic exercise.'
        ]
      },
      el: {
        title: 'Τριγλυκερίδια: Ο Αόρατος Κίνδυνος & Η Διατροφή',
        excerpt: 'Κατανοώντας τα τριγλυκερίδια και πώς οι απλοί υδατάνθρακες απειλούν την καρδιά σας.',
        content: [
          'Ενώ όλοι μιλούν για την χοληστερίνη, τα τριγλυκερίδια -που είναι ο πιο κοινός τύπος λίπους στο σώμα μας- είναι εξίσου επικίνδυνα. Υψηλά τριγλυκερίδια σε συνδυασμό με χαμηλή HDL δημιουργούν το χειρότερο δυνατό μεταβολικό προφίλ.',
          '### Πως Ανεβαίνουν;',
          'Σε αντίθεση με την LDL χοληστερόλη (που ανεβαίνει από το ζωικό λίπος), τα Τριγλυκερίδια εκτοξεύονται από την κατανάλωση Ζάχαρης, Επεξεργασμένων Υδατανθράκων (λευκό ψωμί, μακαρόνια) και κυρίως από το **Αλκοόλ**.',
          '### Η Λύση',
          'Για να μειώσετε τα τριγλυκερίδια: 1) Σταματήστε εντελώς το αλκοόλ και τα γλυκά, 2) Αντικαταστήστε τους λευκούς υδατάνθρακες με προϊόντα ολικής άλεσης, και 3) εντάξτε το περπάτημα/άσκηση στο καθημερινό σας πρόγραμμα.'
        ]
      },
      de: {
        title: 'Triglyceride: Die versteckte Gefahr',
        excerpt: 'Triglyceride verstehen und warum ihre Senkung entscheidend ist.',
        content: [
          'Während Cholesterin im Rampenlicht steht, sind Triglyceride ebenso gefährlich, wenn sie erhöht sind.',
          '### Was erhöht sie?',
          'Im Gegensatz zu LDL werden Triglyceride hauptsächlich durch einfache Kohlenhydrate, raffinierten Zucker und Alkohol angetrieben.',
          '### Die Lösung',
          'Reduzieren Sie die Zuckeraufnahme auf fast null und vermeiden Sie Alkohol.'
        ]
      }
    }
  },
  {
    slug: 'coronary-artery-disease',
    category: 'diseases',
    date: '2026-03-20',
    readingTime: '8 min read',
    image: '/images/article_heart.png',
    locales: {
      en: {
        title: 'Coronary Artery Disease (CAD)',
        excerpt: 'The process of atherosclerosis and modern treatments including stents and bypass.',
        content: [
          'Coronary Artery Disease develops when the major blood vessels supplying the heart become damaged or diseased. Over time, cholesterol deposits build up in your arteries.',
          '### Symptoms',
          'Initially, decreased blood flow may not cause any symptoms. As plaque builds, you may develop angina (chest pain) or shortness of breath. A complete blockage results in a heart attack.',
          'Treatments range from aggressive lipid-lowering pharmacological therapy to invasive procedures like Angioplasty (PCI/Stents) and Coronary Bypass (CABG). <a href="/contact" class="font-bold underline text-blue-600">Schedule your regular cardiac check-up to catch CAD early</a>.'
        ]
      },
      el: {
        title: 'Στεφανιαία Νόσος: Διάγνωση, Στεντ & Θεραπεία',
        excerpt: 'Η διαδικασία της αθηροσκλήρωσης και οι σύγχρονες θεραπείες.',
        content: [
          'Η Στεφανιαία Νόσος αναπτύσσεται όταν τα κύρια αιμοφόρα αγγεία που τροφοδοτούν την καρδιά υφίστανται βλάβη, με αποτέλεσμα να γεμίζουν προοδευτικά με χοληστερόλη (αθηρωματικές πλάκες).',
          '### Εμφάνιση Συμπτωμάτων',
          'Αρχικά, η μειωμένη ροή δεν προκαλεί απολύτως κανένα σύμπτωμα. Όταν όμως η στένωση μεγαλώσει, ο ασθενής θα νιώσει στηθάγχη σε προσπάθεια. Αν η πλάκα της χοληστερίνης "σπάσει", προκαλείται πλήρης απόφραξη, δηλαδή Οξύ Έμφραγμα του Μυοκαρδίου.',
          'Οι θεραπείες κυμαίνονται από ισχυρή φαρμακευτική αγωγή, μέχρι επεμβατικές μεθόδους (Αγγειοπλαστική με "μπαλονάκι"/Stent ή εγχείρηση Bypass). <a href="/services" class="font-bold underline text-blue-600">Η πρόληψη και το Triplex είναι η μόνη ασπίδα</a>.'
        ]
      },
      de: {
        title: 'Koronare Herzkrankheit (KHK)',
        excerpt: 'Die Entwicklung der Arteriosklerose und moderne Therapien.',
        content: [
          'Die koronare Herzkrankheit entsteht, wenn die Hauptblutgefäße, die das Herz versorgen, geschädigt werden.',
          '### Symptome',
          'Anfangs kann der verringerte Blutfluss keine Symptome verursachen. Wenn sich Plaque aufbaut, können Angina oder Atemnot auftreten.',
          'Die Behandlungen umfassen Angioplastie und Bypässe.'
        ]
      }
    }
  },
  {
    slug: 'diet-for-heart-mediterranean',
    category: 'prevention',
    date: '2026-03-10',
    readingTime: '5 min read',
    image: '/images/article_diet.png',
    locales: {
      en: {
        title: 'The Mediterranean Diet for Heart Health',
        excerpt: 'Why the traditional Cretan diet remains the absolute gold standard globally.',
        content: [
          'No other diet on the planet has more clinical evidence supporting cardiovascular longevity than the Mediterranean Diet.',
          '### The Core Tenets',
          'It is built on massive consumption of Extra Virgin Olive Oil, vast amounts of fresh vegetables, whole grains, and a high intake of oily fish.',
          'Red meat and processed foods are practically non-existent. This diet violently drops inflammation markers in the blood.'
        ]
      },
      el: {
        title: 'Η Μεσογειακή Διατροφή - Η Απόλυτη Ασπίδα',
        excerpt: 'Γιατί η παραδοσιακή Κρητική Διατροφή παραμένει το απόλυτο "χρυσό πρότυπο" παγκοσμίως.',
        content: [
          'Καμία άλλη δίαιτα στον πλανήτη δεν έχει περισσότερα κλινικά και επιστημονικά δεδομένα που να αποδεικνύουν τη δραστική μείωση της καρδιαγγειακής θνησιμότητας όσα η Μεσογειακή Διατροφή.',
          '### Οι Βασικοί Πυλώνες',
          'Η δίαιτα βασίζεται στην τεράστια κατανάλωση Εξαιρετικού Παρθένου Ελαιόλαδου, την αφθονία λαχανικών και οσπρίων, τα προϊόντα ολικής άλεσης και τα λιπαρά Ψάρια (σαρδέλες, σολομός).',
          'Το κόκκινο κρέας, το βούτυρο και τα υπερ-επεξεργασμένα τρόφιμα λάμπουν δια της απουσίας τους. Η διατροφή αυτή μειώνει κάθετα όλους τους δείκτες φλεγμονής και σταθεροποιεί τις αθηρωματικές πλάκες.'
        ]
      },
      de: {
        title: 'Die mediterrane Ernährung für die Herzgesundheit',
        excerpt: 'Warum die traditionelle kretische Ernährung weltweit der Goldstandard bleibt.',
        content: [
          'Keine andere Diät auf dem Planeten hat mehr klinische Beweise für kardiovaskuläre Langlebigkeit.',
          '### Die Grundpfeiler',
          'Sie basiert auf einem massiven Konsum von nativem Olivenöl extra, frischem Gemüse und öligem Fisch.'
        ]
      }
    }
  },
  {
    slug: 'hypertension-guidelines',
    category: 'pharmacology',
    date: '2026-03-15',
    readingTime: '6 min read',
    image: '/images/article_pills.png',
    locales: {
      en: {
        title: 'Modern Hypertension Management: ESC Guidelines',
        excerpt: 'An overview of the latest European Society of Cardiology guidelines concerning blood pressure targets.',
        content: [
          'Hypertension remains the leading preventable cause of cardiovascular disease worldwide. The recent European Society of Cardiology (ESC) guidelines have introduced stricter definitions for optimal blood pressure.',
          '### New Targets',
          'For most adults under 65, the target systolic blood pressure is now established at &lt;130 mmHg, provided it is well tolerated. For those over 65, aiming for &lt;140 mmHg is the primary focus, individualizing care based on frailty.',
          '### Combination Therapy',
          'Single-pill combinations (SPC) containing two distinct classes of anti-hypertensive drugs (e.g., ACE inhibitors and Calcium Channel Blockers) are now the gold standard for initial therapy. This heavily improves patient adherence to the medical protocol.',
          'Regular monitoring through 24-hour ambulatory blood pressure monitoring is emphasized to rule out "white-coat" masked hypertension. You can easily <a href="/services" class="font-bold underline text-blue-600">book a Holter Monitor session</a> at our clinic to accurately track your blood pressure over a full day.'
        ]
      },
      el: {
        title: 'Σύγχρονη Διαχείριση Υπέρτασης: Κατευθυντήριες ESC',
        excerpt: 'Μια επισκόπηση των νεότερων κατευθυντήριων οδηγιών της Ευρωπαϊκής Καρδιολογικής Εταιρείας για την αρτηριακή πίεση.',
        content: [
          'Η υπέρταση παραμένει η κύρια αποτρέψιμη αιτία καρδιαγγειακής νόσου παγκοσμίως. Οι νεότερες οδηγίες της Ευρωπαϊκής Καρδιολογικής Εταιρείας (ESC) εισήγαγαν αυστηρότερους στόχους.',
          '### Νέοι Στόχοι',
          'Για τους περισσότερους ενήλικες κάτω των 65 ετών, ο στόχος της συστολικής πίεσης καθορίζεται πια κάτω από 130 mmHg, εφόσον είναι ανεκτός. Για άτομα άνω των 65, ο αρχικός στόχος είναι κάτω από 140 mmHg, δίνοντας έμφαση στην εξατομίκευση.',
          '### Συνδυαστική Θεραπεία',
          'Ο συνδυασμός δύο διαφορετικών κατηγοριών αντιυπερτασικών φαρμάκων στο ίδιο χάπι αποτελεί πλέον το χρυσό πρότυπο για την αρχική θεραπεία.',
          'Η τακτική παρακολούθηση ενθαρρύνεται για να αποκλειστεί η "υπέρταση λευκής μπλούζας". Για την πλέον αξιόπιστη μέτρηση, <a href="/services" class="font-bold underline text-blue-600">προγραμματίστε άμεσα ένα Holter Πίεσης 24ώρου</a> στο πλήρως εξοπλισμένο ιατρείο μας, ώστε να καταγράψουμε την αληθινή διακύμανση της πίεσής σας.'
        ]
      },
      de: {
        title: 'Modernes Bluthochdruckmanagement: ESC-Richtlinien',
        excerpt: 'Ein Überblick über die neuesten Richtlinien der Europäischen Gesellschaft für Kardiologie.',
        content: [
          'Bluthochdruck bleibt weltweit die führende vermeidbare Ursache für Herz-Kreislauf-Erkrankungen.',
          '### Neue Ziele',
          'Für die meisten Erwachsenen unter 65 Jahren liegt der systolische Zielwert nun bei &lt;130 mmHg.',
          '### Kombinationstherapie',
          'Einzelpillenkombinationen sind nun der Goldstandard.',
          'Sie können ganz einfach <a href="/services" class="font-bold underline text-blue-600">eine Holter-Überwachung in unserer Praxis buchen</a>.'
        ]
      }
    }
  },
  {
    slug: 'arrhythmias-and-holter',
    category: 'diagnostics',
    date: '2026-01-20',
    readingTime: '6 min read',
    image: '/images/article_monitor.png',
    locales: {
      en: {
        title: 'Palpitations: When Should You Worry?',
        excerpt: 'Understanding arrhythmias, atrial fibrillation, and how a Holter monitor can save your life.',
        content: [
          'Feeling your heart flutter, race, or skip a beat can be terrifying. While many palpitations are benign, they can also be the first warning sign of a serious arrhythmia.',
          '### The Danger of Atrial Fibrillation (AFib)',
          'AFib is the most common sustained cardiac arrhythmia. Because the upper chambers of the heart beat irregularly, blood can pool, forming clots that travel to the brain, causing devastating strokes.',
          '### The Diagnostic Gold Standard',
          'A simple 10-second ECG in a clinic might miss arrhythmias that happen randomly. That is why wearing a 24-48 hour recording device is crucial. <a href="/services" class="font-bold underline text-blue-600">The Holter Rhythm Monitor</a> continuously captures your heart\'s electrical activity while you go about your normal day.',
          'If you feel sudden, unexplained racing in your chest, <a href="/contact" class="font-bold underline text-blue-600">request an emergency Holter placement</a>. Do not ignore your heart\'s signals.'
        ]
      },
      el: {
        title: 'Αρρυθμίες & Αίσθημα Παλμών: Πότε πρέπει να ανησυχήσετε;',
        excerpt: 'Κατανοώντας τις αρρυθμίες, την Κολπική Μαρμαρυγή, και πώς το Holter Ρυθμού μπορεί να σώσει τη ζωή σας.',
        content: [
          'Το να νιώθετε την καρδιά σας να φτερουγίζει, να χτυπάει δυνατά ή να "χάνει" χτύπους (έκτακτες συστολές) μπορεί να προκαλέσει τρόμο. Αν και πολλοί "παλμοί" είναι καλοήθεις (από άγχος ή καφεΐνη), μπορεί να κρύβουν σοβαρές αρρυθμίες.',
          '### Ο Κίνδυνος της Κολπικής Μαρμαρυγής',
          'Η Κολπική Μαρμαρυγή είναι η πιο συχνή, επικίνδυνη καρδιακή αρρυθμία. Επειδή οι κόλποι χτυπούν άτακτα, το αίμα λιμνάζει και δημιουργεί θρόμβους, οι οποίοι αν ταξιδέψουν στον εγκέφαλο προκαλούν βαρύτητα εγκεφαλικά επεισόδια.',
          '### Πώς Γίνεται η Διάγνωση',
          'Ένα απλό Ηλεκτροκαρδιογράφημα (ΗΚΓ) των 10 δευτερολέπτων στο ιατρείο μπορεί να "χάσει" διαλείπουσες αρρυθμίες. Εδώ επεμβαίνει το **Holter Ρυθμού**. Φορώντας την μικρή αυτή συσκευή, καταγράφεται κάθε χτύπος της καρδιάς σας για 24 ή 48 ώρες.',
          'Μπορείτε να <a href="/services" class="font-bold underline text-blue-600">διαβάσετε περισσότερα για τις υπηρεσίες Holter του ιατρείου</a> και εφόσον νιώθετε αρρυθμίες, παρακαλούμε <a href="/contact" class="font-bold underline text-blue-600">επικοινωνήστε αμέσως μαζί μας για τοποθέτηση</a>.'
        ]
      },
      de: {
        title: 'Herzflattern: Wann sollten Sie sich Sorgen machen?',
        excerpt: 'Herzrhythmusstörungen, Vorhofflimmern und wie ein Holter-Monitor Ihr Leben retten kann.',
        content: [
          'Wenn Ihr Herz flattert, rast oder einen Schlag aussetzt, kann das beängstigend sein. Oft ist es gutartig, kann aber auch ein Warnsignal sein.',
          '### Gefahr durch Vorhofflimmern',
          'Vorhofflimmern ist die häufigste anhaltende Herzrhythmusstörung. Sie kann zur Bildung von Blutgerinnseln führen, die Schlaganfälle verursachen.',
          '### Goldstandard für die Diagnose',
          'Ein einfaches 10-Sekunden-EKG reicht oft nicht aus. Deshalb ist das Tragen eines 24- bis 48-Stunden-Aufzeichnungsgeräts entscheidend.',
          'Wenn Sie ein unerklärliches Rasen in der Brust spüren, <a href="/contact" class="font-bold underline text-blue-600">fordern Sie sofort eine Holter-Platzierung an</a>.'
        ]
      }
    }
  },
  {
    slug: 'statins-and-lipids-preventive-cardiology',
    category: 'pharmacology',
    date: '2026-02-28',
    readingTime: '5 min read',
    image: '/images/article_pills.png',
    locales: {
      en: {
        title: 'Statins and PSCK9: Lowering Cholesterol Aggressively',
        excerpt: 'A deep dive into why "the lower, the better" is the current mantra for LDL cholesterol in high-risk patients.',
        content: [
          'Low-Density Lipoprotein (LDL) cholesterol is causally linked to Atherosclerotic Cardiovascular Disease (ASCVD). Global guidelines have drastically shifted towards extremely aggressive reduction targets for secondary prevention.',
          '### The Lower, The Better',
          'For patients who have suffered a myocardial infarction, aiming for an LDL under 55 mg/dL is absolutely critical. Statins remain the cornerstone; however, if goals are unmet, Ezetimibe and PCSK9 inhibitors are safely deployed.',
          'Debunking Statin Myths: Liver enzymes abnormalities and true myopathies are statistically extremely rare. The vascular benefit vastly outweighs any potential minor risk.'
        ]
      },
      el: {
        title: 'Στατίνες & PCSK9: Επιθετική Μείωση Χοληστερίνης',
        excerpt: 'Γιατί "όσο πιο χαμηλά, τόσο το καλύτερο" είναι το δόγμα για την LDL χοληστερόλη σε ασθενείς υψηλού κινδύνου.',
        content: [
          'Η LDL χοληστερόλη ("κακή" χοληστερίνη) αποδεδειγμένα προκαλεί αθηροσκλήρωση. Οι παγκόσμιες οδηγίες μετατοπίστηκαν προς εξαιρετικά επιθετικούς στόχους μείωσης.',
          '### Όσο Πιο Χαμηλά, Τόσο Καλύτερα',
          'Για ασθενείς με προηγούμενο έμφραγμα, ο στόχος LDL &lt; 55 mg/dL είναι απόλυτα κρίσιμος. Οι Στατίνες παραμένουν ο ακρογωνιαίος λίθος, ενώ χρησιμοποιούμε πλέον και νέα ισχυρά ενέσιμα φάρμακα (αναστολείς PCSK9) με απόλυτη ασφάλεια.',
          'Μύθοι για τις Στατίνες: Οι μυοπάθειες είναι στατιστικά εξαιρετικά σπάνιες. Το καρδιαγγειακό όφελος υπερτερεί συντριπτικά του ελάχιστου ρίσκου.',
          '<a href="/contact" class="font-bold underline text-blue-600">Επισκεφθείτε την κλινική μας για έναν αναλυτικό κλινικό έλεγχο</a> ώστε να σχεδιάσουμε το ιδανικό θεραπευτικό πλάνο μείωσης των λιπιδίων σας.'
        ]
      },
      de: {
        title: 'Statine und PSCK9: Aggressive Cholesterinsenkung',
        excerpt: 'Ein tiefer Einblick, warum "je niedriger, desto besser" das aktuelle Mantra für LDL-Cholesterin ist.',
        content: [
          'LDL-Cholesterin ist nachweislich mit Atherosklerose verbunden. Die globalen Richtlinien haben sich drastisch hin zu extrem aggressiven Reduktionszielen für die Sekundärprävention verlagert.',
          '### Je Niedriger, Desto Besser',
          'Für Patienten, die einen Herzinfarkt erlitten haben, ist ein LDL-Wert unter 55 mg/dL absolut kritisch. Statine bleiben der Grundstein.',
          'Mythen über Statine: Leberenzymanomalien und echte Myopathien sind statistisch extrem selten. Der vaskuläre Nutzen überwiegt die potenziellen Risiken bei weitem.'
        ]
      }
    }
  },
  {
    slug: 'diet-for-diabetic-patients',
    category: 'prevention',
    date: '2026-02-15',
    readingTime: '5 min read',
    image: '/images/article_diet.png',
    locales: {
      en: {
        title: 'Diet Strategies for Diabetics',
        excerpt: 'Managing your blood sugar effortlessly through targeted nutrition to protect your heart.',
        content: [
          'If you have diabetes, protecting your heart starts in the kitchen. Dietary choices directly impact your blood glucose levels and arterial inflammation.',
          '### The Carbohydrate Priority',
          'Focus purely on complex carbohydrates. Replace white rice and pasta with their whole-grain equivalents. Avoid liquid calories like fruit juices and sodas entirely.',
          'Combine carbohydrates with lean proteins or healthy fats to slow down glucose absorption. A specialized menu can make a tremendous difference in reducing HbA1c levels.'
        ]
      },
      el: {
        title: 'Απόλυτη Διατροφή για Διαβητικούς',
        excerpt: 'Πως να ελέγξετε το σάκχαρό σας μέσω συγκεκριμένων διατροφικών επιλογών για να προστατεύσετε την καρδιά σας.',
        content: [
          'Αν πάσχετε από διαβήτη, η προστασία της καρδιάς σας ξεκινάει από την κουζίνα. Οι διατροφικές επιλογές σας επηρεάζουν άμεσα τα επίπεδα γλυκόζης και τη φλεγμονή των αρτηριών.',
          '### Ο Κανόνας των Υδατανθράκων',
          'Εστιάστε αποκλειστικά σε σύνθετους υδατάνθρακες. Αντικαταστήστε το λευκό ρύζι και τα ζυμαρικά με προϊόντα σίκαλης και ολικής άλεσης. Διακόψτε εντελώς τις θερμίδες που "πίνονται" (χυμοί, αναψυκτικά).',
          'Συνδυάζετε πάντα υδατάνθρακες με πρωτεΐνες ή καλά λιπαρά (π.χ. μία φέτα ψωμί ολικής άλεσης με αυγό ή αβοκάντο) ώστε να καθυστερεί η απορρόφηση της γλυκόζης.'
        ]
      },
      de: {
        title: 'Ernährungsstrategien für Diabetiker',
        excerpt: 'Kontrollieren Sie Ihren Blutzucker durch gezielte Ernährung.',
        content: [
          'Wenn Sie an Diabetes leiden, beginnt der Schutz Ihres Herzens in der Küche.',
          '### Die Priorität von Kohlenhydraten',
          'Konzentrieren Sie sich auf komplexe Kohlenhydrate.',
          'Kombinieren Sie Kohlenhydrate immer mit mageren Proteinen oder gesunden Fetten.'
        ]
      }
    }
  },
  {
    slug: 'heart-failure-revolutionary-meds',
    category: 'pharmacology',
    date: '2026-02-10',
    readingTime: '8 min read',
    image: '/images/article_pills.png',
    locales: {
      en: {
        title: 'The SGLT2 Inhibitor Revolution in Heart Failure',
        excerpt: 'How diabetes medication transformed cardiovascular survival rates globally over the past decade.',
        content: [
          'The discovery of SGLT2 inhibitors structurally disrupted the pharmacological approach to Heart Failure with reduced Ejection Fraction (HFrEF).',
          '### Beyond Diabetes',
          'Originally designed to lower blood glucose, trials demonstrated overwhelming physiological benefits for the cardiovascular system. Molecules like Dapagliflozin significantly decreased hospitalizations.',
          '### The Four Pillars',
          'Current protocols explicitly mandate the "Four Pillar" approach: Beta-blockers, ARNI, MRA, and SGLT2 inhibitors. Initiating these therapies radically alters the disease progression trajectory.'
        ]
      },
      el: {
        title: 'Η Επανάσταση των SGLT2 Στην Καρδιακή Ανεπάρκεια',
        excerpt: 'Πώς ένα φάρμακο για τον διαβήτη μεταμόρφωσε τα ποσοστά επιβίωσης της καρδιακής ανεπάρκειας παγκοσμίως.',
        content: [
          'Η ανακάλυψη των αναστολέων SGLT2 άλλαξε κατακόρυφα τη φαρμακολογική προσέγγιση της Καρδιακής Ανεπάρκειας με μειωμένο Κλάσμα Εξώθησης (HFrEF).',
          '### Πέρα από τον Διαβήτη',
          'Αρχικά σχεδιασμένα για τη μείωση της γλυκόζης, μεγάλες κλινικές μελέτες απέδειξαν τεράστια οφέλη για το καρδιαγγειακό. Μόρια όπως η Δαπαγλιφλοζίνη (Dapagliflozin) μειώνουν σημαντικά τις νοσηλείες.',
          '### Οι 4 Πυλώνες της Θεραπείας',
          'Τα σύγχρονα πρωτόκολλα επιβάλλουν τους "4 Πυλώνες": Β-αναστολείς, ARNI (Entresto), MRA (Σπιρονολακτόνη), και αναστολείς SGLT2. Η άμεση χορήγησή τους μετά τη διάγνωση αλλάζει ριζικά την τροχιά της νόσου.'
        ]
      },
      de: {
        title: 'Die SGLT2-Inhibitor Revolution bei Herzinsuffizienz',
        excerpt: 'Wie Diabetes-Medikamente die kardiovaskulären Überlebensraten weltweit verändert haben.',
        content: [
          'Die Entdeckung von SGLT2-Inhibitoren hat den pharmakologischen Ansatz grundlegend gestört.',
          '### Mehr als nur Diabetes',
          'Ursprünglich zur Senkung des Blutzuckerspiegels entwickelt, zeigten strenge klinische Studien überwältigende physiologische Vorteile für das Herz-Kreislauf-System.',
          'Die rasche Einleitung dieser Therapien verändert den Krankheitsverlauf radikal.'
        ]
      }
    }
  },
  {
    slug: 'echocardiography-triplex-importance',
    category: 'diagnostics',
    date: '2026-04-05',
    readingTime: '7 min read',
    image: '/images/article_monitor.png',
    locales: {
      en: {
        title: 'The Unrivaled Power of the Cardiac Triplex',
        excerpt: 'Why the Echocardiogram is the most critical imaging tool in modern cardiology.',
        content: [
          'The Echocardiogram (commonly known as Triplex in Greece) is a painless, non-invasive ultrasound scan that provides real-time, moving images of the heart.',
          '### What Does It Reveal?',
          'Beyond simple anatomical dimensions, a modern Triplex evaluates the pumping strength of the heart muscle (Ejection Fraction), assesses the integrity of the heart valves (detecting stenosis or regurgitation), and measures the intra-cardiac pressures.',
          'In our clinic, Dr. Klapsinos utilizes state-of-the-art ultrasound machines equipped with advanced Doppler technologies to perform high-resolution scans.',
          'If you experience unexplained breathlessness, swelling in your ankles, or if you have a murmmer detected, <a href="/contact" class="font-bold underline text-blue-600">contact us immediately to schedule a comprehensive Triplex scan</a>.'
        ]
      },
      el: {
        title: 'Η Απόλυτη Αξία του Triplex Καρδιάς (Υπερηχοκαρδιογράφημα)',
        excerpt: 'Γιατί ο υπέρηχος αποτελεί το πολυτιμότερο απεικονιστικό εργαλείο της σύγχρονης καρδιολογίας.',
        content: [
          'Το Υπερηχοκαρδιογράφημα (γνωστό ως Triplex Καρδιάς) είναι μια εντελώς ανώδυνη, αναίμακτη εξέταση που αξιοποιεί υπερήχους για να δώσει σε πραγματικό χρόνο κινούμενες, 3D και 4D εικόνες της καρδιάς.',
          '### Τι Αποκαλύπτει ακριβώς;',
          'Πέρα από το μέγεθος των κοιλοτήτων, ένα σύγχρονο Triplex αξιολογεί τη δύναμη άντλησης του μυοκαρδίου (Κλάσμα Εξώθησης LVEF), ελέγχει τη στεγανότητα των καρδιακών βαλβίδων (εντοπίζοντας ανεπάρκειες, π.χ. της μιτροειδούς, ή στενώσεις), και μετρά τις πιέσεις των αγγείων.',
          'Με αυτό μπορούμε να διαγνώσουμε άμεσα περιστατικά αρχόμενης καρδιακής ανεπάρκειας πριν καν εμφανιστούν τα πρώτα συμπτώματα.',
          'Ο ιατρός Κλαψινός χρησιμοποιεί το τελευταίας τεχνολογίας σύστημα υπερήχων του ιατρείου. Αν νιώθετε ανεξήγητη δύσπνοια, κόπωση, ή αν τα πόδια σας πρήζονται, <a href="/contact" class="font-bold underline text-blue-600">κλείστε άμεσα ραντεβού για ένα ολοκληρωμένο Triplex Καρδιάς</a>.'
        ]
      },
      de: {
        title: 'Die unübertroffene Leistung des Herz-Triplex',
        excerpt: 'Warum das Echokardiogramm das wichtigste bildgebende Instrument in der modernen Kardiologie ist.',
        content: [
          'Das Echokardiogramm (in Griechenland oft als Triplex bezeichnet) ist eine schmerzfreie, nicht-invasive Ultraschalluntersuchung, die Bewegtbilder des Herzens in Echtzeit liefert.',
          '### Was zeigt es?',
          'Über einfache anatomische Dimensionen hinaus bewertet ein modernes Triplex die Pumpkraft des Herzmuskels, beurteilt die Integrität der Herzklappen und misst den Druck im Herzen.',
          'In unserer Klinik nutzt Dr. Klapsinos hochmoderne Ultraschallgeräte, die mit fortschrittlichen Doppler-Technologien ausgestattet sind.',
          'Wenn Sie unerklärliche Atemnot haben, <a href="/contact" class="font-bold underline text-blue-600">kontaktieren Sie uns umgehend, um einen umfassenden Triplex-Scan zu vereinbaren</a>.'
        ]
      }
    }
  },
  {
    slug: 'stents-and-angioplasty-explained',
    category: 'pharmacology',
    date: '2026-03-30',
    readingTime: '6 min read',
    image: '/images/article_steth.png',
    locales: {
      en: {
        title: 'Stents & Angioplasty Explained',
        excerpt: 'What an interventional cardiology procedure involves and what to expect during recovery.',
        content: [
          'A coronary angioplasty is a procedure used to widen blocked or narrowed coronary arteries, often saving lives during a severe heart attack.',
          '### The Procedure',
          'A tiny balloon is inserted and inflated at the blockage site. Afterwards, a small metallic mesh tube, known as a stent, is usually placed to keep the artery permanently open.',
          '### Recovery',
          'You will be prescribed strict antiplatelet therapy for months to prevent clot formation inside the new stent. Modern advanced drug-eluting stents make re-blockage extremely rare.'
        ]
      },
      el: {
        title: 'Μπαλονάκι και Stent: Πως Σώζουν Ζωές',
        excerpt: 'Τι ακριβώς είναι η αγγειοπλαστική και τι πρέπει να γνωρίζετε για την ανάρρωση.',
        content: [
          'Αν τα αγγεία της καρδιάς κλείσουν από χοληστερίνη, ο ασθενής παθαίνει έμφραγμα. Η αγγειοπλαστική (το γνωστό "μπαλονάκι") ανοίγει την κλειστή αρτηρία και συχνά σώζει τον ασθενή.',
          '### Η Διαδικασία',
          'Ένας λεπτός καθετήρας εισάγεται στο μπλοκαρισμένο σημείο. Αναπτύσσεται ένα μπαλόνι που συνθλίβει την πλάκα και στη συνέχεια αφήνεται ένα μεταλλικό πλέγμα (το Stent) για να κρατάει την αρτηρία ορθάνοιχτη.',
          '### Μετά την Επέμβαση',
          'Η λήψη φαρμάκων που αραιώνουν το αίμα (όπως κλοπιδογρέλη και ασπιρίνη) είναι απολύτως απαραίτητη για πάνω από έναν χρόνο, ώστε να μην δημιουργηθεί θρόμβος μέσα στο νέο stent!'
        ]
      },
      de: {
        title: 'Stents & Angioplastie Erklärt',
        excerpt: 'Was ein kardiologischer Eingriff beinhaltet und was man nach der Genesung erwarten kann.',
        content: [
          'Eine koronare Angioplastie ist ein Verfahren zur Erweiterung blockierter oder verengter Herzkranzgefäße.',
          '### Das Verfahren',
          'Ein winziger Ballon wird an der Blockade aufgeblasen. Danach wird normalerweise ein kleines metallisches Netzrohr, ein sogenannter Stent, platziert.',
          '### Genesung',
          'Ihnen wird eine strenge Therapie verschrieben, um die Bildung von Blutgerinnseln im neuen Stent zu verhindern.'
        ]
      }
    }
  },
  {
    slug: 'the-importance-of-sleep-for-heart',
    category: 'prevention',
    date: '2026-03-01',
    readingTime: '4 min read',
    image: '/images/article_steth.png',
    locales: {
      en: {
        title: 'Why Poor Sleep Damages Your Heart',
        excerpt: 'The critical link between sleep deprivation, sleep apnea, and cardiovascular events.',
        content: [
          'Sleep is not just for resting the mind. It is during deep sleep that the cardiovascular system enters a state of profound repair, dropping heart rate and blood pressure significantly.',
          '### Obstructive Sleep Apnea (OSA)',
          'Patients who snore loudly and momentarily stop breathing during sleep face extreme surges in blood pressure at night. This hidden disorder is a major trigger for Atrial Fibrillation and resistant hypertension.',
          'Never ignore chronic snoring. Weight loss and CPAP machines are life-saving interventions for your heart.'
        ]
      },
      el: {
        title: 'Γιατί ο Κακός Ύπνος Καταστρέφει την Καρδιά Σας',
        excerpt: 'Η επικίνδυνη σύνδεση ανάμεσα στην άπνοια ύπνου, την αϋπνία και τα καρδιαγγειακά επεισόδια.',
        content: [
          'Ο ύπνος δεν εξυπηρετεί μόνο το μυαλό. Κατά τον βαθύ ύπνο, η καρδιά "ξεκουράζεται" ρίχνοντας την αρτηριακή πίεση και τους σφυγμούς στο ναδίρ.',
          '### Το Σύνδρομο Υπνικής Άπνοιας',
          'Οι ασθενείς που ροχαλίζουν βαριά και σταματούν στιγμιαία να αναπνέουν στον ύπνο τους (άπνοιες) βιώνουν τρομακτικές αυξήσεις της πίεσης μέσα στη νύχτα. Αυτό προκαλεί σοβαρές αρρυθμίες (κολπική μαρμαρυγή) και δημιουργεί "ανθεκτική υπέρταση".',
          'Μην αγνοείτε ποτέ το βαρύ ροχαλητό. Η απώλεια βάρους και η χρήση μάσκας CPAP στον ύπνο μπορούν, κυριολεκτικά, να σώσουν τη ζωή σας.'
        ]
      },
      de: {
        title: 'Warum schlechter Schlaf Ihrem Herzen schadet',
        excerpt: 'Der kritische Zusammenhang zwischen Schlafentzug, Schlafapnoe und kardiovaskulären Ereignissen.',
        content: [
          'Schlaf dient nicht nur der Erholung des Geistes. Während des Tiefschlafs sinkt die Herzfrequenz und der Blutdruck.',
          '### Obstruktive Schlafapnoe (OSA)',
          'Patienten, die stark schnarchen und nachts aussetzen zu atmen, erleiden extreme Blutdruckspitzen.',
          'Ignorieren Sie niemals chronisches Schnarchen. Gewichtsverlust und CPAP-Maschinen sind lebensrettende Maßnahmen.'
        ]
      }
    }
  }
];
