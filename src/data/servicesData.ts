import { Stethoscope, HeartPulse, Activity, ClipboardList, LucideIcon } from 'lucide-react';

export type ServiceData = {
  id: string;
  icon: LucideIcon;
  locales: {
    en: {
      title: string;
      shortDesc: string;
      sections: { heading: string; content: string }[];
    };
    el: {
      title: string;
      shortDesc: string;
      sections: { heading: string; content: string }[];
    };
    de: {
      title: string;
      shortDesc: string;
      sections: { heading: string; content: string }[];
    };
  };
};

export const servicesData: ServiceData[] = [
  {
    id: 'clinical',
    icon: Stethoscope,
    locales: {
      en: {
        title: "Clinical Examination & ECG",
        shortDesc: "Thorough cardiovascular assessment and consultation.",
        sections: [
          { heading: "What is it?", content: "A comprehensive cardiology clinical examination is the foundational step of cardiovascular health. It includes a detailed medical history taking, auscultation of the heart and lungs, and an Electrocardiogram (ECG/EKG) to capture the electrical activity of the heart in real-time." },
          { heading: "Why is it done?", content: "It is essential for diagnosing arrhythmias, hypertension, heart murmurs, coronary artery disease, and assessing overall cardiovascular risk. If you experience chest pain, shortness of breath, palpitations, or fainting, this is the first and most crucial test." },
          { heading: "What to expect", content: "The procedure is completely painless and non-invasive. The doctor will listen to your heart with a stethoscope, check your blood pressure, and place small sensor patches on your chest and limbs for the ECG. It usually takes 15-30 minutes." }
        ]
      },
      el: {
        title: "Κλινική Εξέταση & ΗΚΓ",
        shortDesc: "Πλήρης καρδιολογική κλινική εξέταση, λήψη ιατρικού ιστορικού και Ηλεκτροκαρδιογράφημα.",
        sections: [
          { heading: "Τι είναι;", content: "Η πλήρης καρδιολογική κλινική εξέταση είναι το θεμέλιο της καρδιαγγειακής πρόληψης. Περιλαμβάνει λεπτομερή λήψη ιατρικού ιστορικού, ακρόαση της καρδιάς και των πνευμόνων με στηθοσκόπιο, και Ηλεκτροκαρδιογράφημα (ΗΚΓ) για την ψηφιακή καταγραφή της ηλεκτρικής δραστηριότητας της καρδιάς σε πραγματικό χρόνο." },
          { heading: "Γιατί γίνεται;", content: "Είναι απαραίτητο για τη διάγνωση κρίσιμων παθήσεων όπως αρρυθμίες (π.χ. κολπική μαρμαρυγή), υπέρταση, καρδιακά φυσήματα, στεφανιαία νόσος, και συνολική αξιολόγηση καρδιαγγειακού κινδύνου. Προτείνεται άμεσα αν νιώθετε πόνο στο στήθος, δύσπνοια, ταχυπαλμίες/φτερουγίσματα ή ζάλη." },
          { heading: "Τι να περιμένετε", content: "Η διαδικασία είναι εντελώς ανώδυνη, μη επεμβατική και σύντομη (15-30 λεπτά). Ο ιατρός θα μετρήσει την αρτηριακή σας πίεση, θα ακροαστεί την καρδιά σας, και θα τοποθετήσει μικρά αυτοκόλλητα (ηλεκτρόδια) στο στήθος και τα άκρα σας για το ΗΚΓ." }
        ]
      },
      de: {
        title: "Klinische Untersuchung & EKG",
        shortDesc: "Gründliche kardiovaskuläre Beurteilung und Beratung.",
        sections: [
          { heading: "Was ist das?", content: "Eine umfassende klinische kardiologische Untersuchung ist der grundlegende Schritt der Herz-Kreislauf-Gesundheit. Sie umfasst eine detaillierte Anamneseerhebung, Auskultation von Herz und Lunge sowie ein Elektrokardiogramm (EKG) zur Echtzeiterfassung der elektrischen Herzaktivität." },
          { heading: "Warum wird es durchgeführt?", content: "Es ist wichtig für die Diagnose von Arrhythmien, Bluthochdruck, Herzgeräuschen, koronarer Herzkrankheit und zur Beurteilung des allgemeinen kardiovaskulären Risikos. Bei Brustschmerzen, Atemnot oder Herzklopfen ist dies der erste Test." },
          { heading: "Was Sie erwarten können", content: "Das Verfahren ist völlig schmerzlos und nicht invasiv. Der Arzt hört Ihr Herz mit einem Stethoskop ab, misst Ihren Blutdruck und bringt für das EKG kleine Sensorpflaster auf Brust und Gliedmaßen an." }
        ]
      }
    }
  },
  {
    id: 'triplex',
    icon: HeartPulse,
    locales: {
      en: {
        title: "Echocardiogram (Cardiac Triplex)",
        shortDesc: "Advanced ultrasound imaging of the heart.",
        sections: [
          { heading: "What is it?", content: "A Cardiac Triplex (Echocardiogram) uses high-frequency sound waves (ultrasound) to create live images of your heart. It evaluates the size, shape, and pumping capacity of the heart muscle, as well as the functionality of the heart valves." },
          { heading: "Why is it done?", content: "It precisely detects heart failure, valvular heart diseases (mitral valve prolapse, aortic stenosis), congenital heart defects, cardiomyopathies, and damage to the heart muscle from a past heart attack. It is crucial for assessing blood flow dynamics via Color Doppler." },
          { heading: "What to expect", content: "You will lie on your left side or back. A special gel will be applied to your chest, and a transducer will be moved across it. It captures the moving heartbeat on a monitor instantly. The procedure takes 15 to 30 minutes, requires no special preparation, and is completely painless." }
        ]
      },
      el: {
        title: "Έγχρωμο Triplex Καρδιάς",
        shortDesc: "Υπερηχοκαρδιογράφημα υψηλής ανάλυσης για δομή και λειτουργία.",
        sections: [
          { heading: "Τι είναι;", content: "Το Triplex (Υπερηχοκαρδιογράφημα) χρησιμοποιεί κύματα υπερήχων υψηλής συχνότητας για να δημιουργήσει ζωντανές, κινούμενες εικόνες της καρδιάς. Αξιολογεί με απόλυτη ακρίβεια το μέγεθος, το σχήμα, την αντλητική ικανότητα του μυοκαρδίου (Κλάσμα Εξώθησης), και την άριστη λειτουργία των βαλβίδων." },
          { heading: "Γιατί γίνεται;", content: "Ανιχνεύει καρδιακή ανεπάρκεια, βαλβιδοπάθειες (όπως πρόπτωση μιτροειδούς, στένωση αορτής), συγγενείς καρδιοπάθειες (τρύπα στην καρδιά), μυοκαρδιοπάθειες, και βλάβες στο μυοκάρδιο από παλαιότερο έμφραγμα. Είναι ο κορυφαίος τρόπος εκτίμησης της ροής του αίματος (Μελέτη Doppler)." },
          { heading: "Τι να περιμένετε", content: "Θα ξαπλώσετε στο εξεταστικό κρεβάτι, συνήθως στο αριστερό σας πλευρό. Ο ιατρός θα εφαρμόσει ένα ειδικό υδατοδιαλυτό τζελ στο στήθος σας και θα μετακινεί έναν ηχοβολέα (transducer) πάνω του. Δεν απαιτείται καμία απολύτως προετοιμασία, διαρκεί 15-30 λεπτά και δεν έχει ακτινοβολία." }
        ]
      },
      de: {
        title: "Echokardiographie (Herz-Triplex)",
        shortDesc: "Fortschrittliche Ultraschallbildgebung des Herzens.",
        sections: [
          { heading: "Was ist das?", content: "Ein Herz-Triplex (Echokardiogramm) verwendet hochfrequente Schallwellen (Ultraschall), um Live-Bilder Ihres Herzens zu erstellen. Es bewertet die Größe, Form und Pumpkapazität des Herzmuskels sowie die Funktionalität der Herzklappen." },
          { heading: "Warum wird es durchgeführt?", content: "Es erkennt Herzinsuffizienz, Herzklappenerkrankungen, angeborene Herzfehler und Schäden durch einen früheren Herzinfarkt. Es ist entscheidend für die Beurteilung der Blutflussdynamik über den Farb-Doppler." },
          { heading: "Was Sie erwarten können", content: "Auf Ihre Brust wird ein spezielles Gel aufgetragen, und ein Ultraschallkopf wird darüber bewegt. Der Vorgang dauert 15 bis 30 Minuten, erfordert keine spezielle Vorbereitung und ist absolut schmerzfrei." }
        ]
      }
    }
  },
  {
    id: 'holter',
    icon: Activity,
    locales: {
      en: {
        title: "Holter Monitor (Rhythm & Pressure)",
        shortDesc: "Continuous 24-48 hour ambulatory ECG tracking.",
        sections: [
          { heading: "What is it?", content: "A Holter Monitor is a small, wearable device that records your heart's rhythm or blood pressure continuously over a 24 to 48-hour period while you go about your normal daily activities." },
          { heading: "Why is it done?", content: "A standard ECG captures the heart's activity for only a few seconds. A Holter monitor is used to catch hidden or intermittent arrhythmias (like atrial fibrillation), unexplained dizziness, palpitations, fainting spells (syncope), or to evaluate the effectiveness of heart medications in real-life conditions." },
          { heading: "What to expect", content: "Electrodes will be attached to your chest and connected to a lightweight monitor worn on a belt or across your shoulder. You carry on with your normal day, including sleeping, but must avoid showering or swimming. You will be asked to keep a diary of any symptoms or stressful events." }
        ]
      },
      el: {
        title: "Holter Ρυθμού & Πίεσης (24-48h)",
        shortDesc: "Συνεχής καταγραφή ρυθμού ή υπέρτασης σε πραγματικές συνθήκες.",
        sections: [
          { heading: "Τι είναι;", content: "Το Holter είναι μια μικρή, φορητή, διακριτική συσκευή που καταγράφει συνεχώς τον ηλεκτρικό ρυθμό της καρδιάς (Holter Ρυθμού) ή την αρτηριακή πίεση (Holter Πιέσεως) για ένα 24ωρο ή 48ωρο, ενώ εσείς κάνετε τις κανονικές καθημερινές σας δραστηριότητες (δουλειά, ύπνος, άσκηση)." },
          { heading: "Γιατί γίνεται;", content: "Το απλό ΗΚΓ δείχνει την καρδιά για λίγα μόνο δευτερόλεπτα. Το Holter εντοπίζει 'κρυφές' και παροδικές αρρυθμίες (π.χ. κολπική μαρμαρυγή, ταχυκαρδίες, βραδυκαρδίες) που δεν εντοπίστηκαν στο ιατρείο. Επιπλέον, ερευνά τα αίτια μιας ανεξήγητης ζάλης, λιποθυμίας, καθώς και την αυξομείωση της πιέσεως λόγω άγχους." },
          { heading: "Τι να περιμένετε", content: "Αυτοκόλλητα ηλεκτρόδια μπαίνουν στο στήθος σας (ή ένα περιβραχιόνιο για το Holter Πίεσης) και συνδέονται με καταγραφέα που περνιέται σαν τσαντάκι. Ζείτε απολύτως φυσιολογικά, εκτός από το να κάνετε μπάνιο. Θα σας ζητηθεί να κρατάτε μικρό ημερολόγιο αν νιώσετε συμπτώματα μέσα στη μέρα." }
        ]
      },
      de: {
        title: "Langzeit-EKG & Blutdruck-Holter",
        shortDesc: "24-48 Stunden kontinuierliche Aufzeichnung von Rhythmus oder Blutdruck.",
        sections: [
          { heading: "Was ist das?", content: "Ein Holter-Monitor ist ein kleines tragbares Gerät, das Ihren Herzrhythmus oder Blutdruck über einen Zeitraum von 24 bis 48 Stunden kontinuierlich aufzeichnet, während Sie Ihren normalen täglichen Aktivitäten nachgehen." },
          { heading: "Warum wird es durchgeführt?", content: "Ein Standard-EKG erfasst die Aktivität für nur wenige Sekunden. Ein Holter wird verwendet, um versteckte Arrhythmien, unerklärlichen Schwindel, Herzklopfen oder Ohnmachtsanfälle zu erkennen oder die Wirksamkeit von Herzmedikamenten zu bewerten." },
          { heading: "Was Sie erwarten können", content: "Elektroden werden an Ihrer Brust angebracht und mit einem leichten Monitor verbunden. Sie setzen Ihren normalen Tag fort, müssen aber das Duschen oder Schwimmen vermeiden. Sie sollten ein Tagebuch über auftretende Symptome führen." }
        ]
      }
    }
  },
  {
    id: 'stress',
    icon: ClipboardList,
    locales: {
      en: {
        title: "Treadmill Stress Test",
        shortDesc: "Cardiovascular evaluation during physical exertion.",
        sections: [
          { heading: "What is it?", content: "A Stress Test, also known as an exercise electrocardiogram, observes how your heart behaves during physical exertion. You walk on a treadmill while your ECG, heart rate, and blood pressure are continuously monitored." },
          { heading: "Why is it done?", content: "Exercise demands more oxygen to the heart muscle. The test determines if the blood supply is reduced in the arteries that supply the heart (diagnosing coronary artery disease). It also assesses the safe limits of exercise before starting a fitness program or evaluating treatments." },
          { heading: "What to expect", content: "You will need comfortable athletic shoes and clothing. The treadmill starts slowly and gradually increases in speed and incline every few minutes. The test stops when you reach a target heart rate, get too tired, or if the doctor spots an anomaly." }
        ]
      },
      el: {
        title: "Δοκιμασία Κόπωσης (Σε Κυλιόμενο Τάπητα)",
        shortDesc: "Αξιολόγηση καρδιαγγειακής λειτουργίας κατά τη φυσική καταπόνηση.",
        sections: [
          { heading: "Τι είναι;", content: "Η Δοκιμασία Κοπώσεως εξετάζει το πώς ανταποκρίνεται η καρδιά σας κατά τη διάρκεια αυξανόμενης φυσικής άσκησης. Περπατάτε σε διάδρομο γυμναστικής ενώ το σύστημα καταγράφει διαρκώς το Ηλεκτροκαρδιογράφημα, την πίεση και τους σφυγμούς σας." },
          { heading: "Γιατί γίνεται;", content: "Κατά την άσκηση, η καρδιά ζητά περισσότερο οξυγόνο. Το τεστ ανιχνεύει αν υπάρχουν στενώσεις στις στεφανιαίες αρτηρίες (Στεφανιαία Νόσος) που δεν φαίνονται στην ηρεμία. Είναι κρίσιμο για διερεύνηση πόνου στο στήθος, αρρυθμιών στην άσκηση, ή και ως 'checkup' πριν την έναρξη έντονης γυμναστικής." },
          { heading: "Τι να περιμένετε", content: "Ελάτε στο ιατρείο με αθλητικά παπούτσια και άνετα ρούχα. Δεν πρέπει να φάτε 2-3 ώρες πριν. Ο διάδρομος ξεκινά χαλαρά και κάθε 3 λεπτά αυξάνεται ελαφρώς η κλίση και η ταχύτητα. Εσείς καθορίζετε πότε θα σταματήσετε αν κουραστείτε, ή θα το σταματήσει ο ιατρός αν δει ύποπτα ευρήματα." }
        ]
      },
      de: {
        title: "Belastungs-EKG (Ergometrie)",
        shortDesc: "Kardiovaskuläre Beurteilung bei körperlicher Anstrengung.",
        sections: [
          { heading: "Was ist das?", content: "Ein Belastungstest beobachtet, wie sich Ihr Herz bei körperlicher Anstrengung verhält. Sie gehen auf einem Laufband, während Ihr EKG, Ihre Herzfrequenz und Ihr Blutdruck kontinuierlich überwacht werden." },
          { heading: "Warum wird es durchgeführt?", content: "Bewegung erfordert mehr Sauerstoff für den Herzmuskel. Der Test stellt fest, ob die Blutversorgung in den Herzkranzgefäßen verringert ist (Koronare Herzkrankheit). Es bewertet auch die sicheren Leistungsgrenzen." },
          { heading: "Was Sie erwarten können", content: "Sie benötigen bequeme Sportschuhe und Kleidung. Das Laufband beginnt langsam und erhöht alle paar Minuten allmählich Geschwindigkeit und Steigung, bis zur Zielfrequenz oder Erschöpfung." }
        ]
      }
    }
  }
];
