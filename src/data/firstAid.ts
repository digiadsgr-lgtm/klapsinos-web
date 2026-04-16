import { HeartPulse, Activity, ThermometerSun, Scissors, Zap, AlertTriangle, Droplet, Flame, Stethoscope, BriefcaseMedical } from 'lucide-react';

export type Emergency = {
  id: string;
  icon: any;
  color: string;
  bg: string;
  keywords: string[];
  locales: {
    en: { title: string; steps: string[] };
    el: { title: string; steps: string[] };
    de: { title: string; steps: string[] };
  }
};

export const firstAidDB: Emergency[] = [
  {
    id: 'heart_attack',
    icon: HeartPulse,
    color: 'text-red-500',
    bg: 'bg-red-50',
    keywords: ['πόνος', 'στήθος', 'βάρος', 'ιδρώτας', 'chest pain', 'sweat', 'pressure', 'herzinfarkt'],
    locales: {
      en: {
        title: 'Heart Attack / Chest Pain',
        steps: [
          "Call emergency services (166 or 112) immediately.",
          "Have the person sit down, rest, and try to keep calm.",
          "Loosen any tight clothing.",
          "If they are conscious and not allergic, give them an aspirin (325mg) to chew slowly.",
          "If unconscious, begin CPR immediately (push hard and fast in center of chest)."
        ]
      },
      el: {
        title: 'Έμφραγμα / Πόνος στο στήθος',
        steps: [
          "Καλέστε αμέσως το 166 ή το 112.",
          "Βάλτε τον ασθενή να καθίσει ή να ξαπλώσει αναπαυτικά. Χαλαρώστε τα στενά ρούχα.",
          "Αν δεν έχει αλλεργία και έχει τις αισθήσεις του, δώστε του να μασήσει 1 ασπιρίνη.",
          "Μην του δώσετε φαγητό ή υγρά.",
          "Αν χάσει τις αισθήσεις του, ξεκινήστε αμέσως ΚΑΡΠΑ (συμπιέσεις στο στήθος)."
        ]
      },
      de: {
        title: 'Herzinfarkt / Brustschmerzen',
        steps: [
          "Rufen Sie sofort den Notruf (166 oder 112).",
          "Setzen Sie die Person bequem hin und lockern Sie enge Kleidung.",
          "Geben Sie eine Aspirin zum Kauen, falls keine Allergie besteht.",
          "Kein Essen oder Trinken verabreichen.",
          "Bei Bewusstlosigkeit sofort Herzdruckmassage beginnen."
        ]
      }
    }
  },
  {
    id: 'choking',
    icon: AlertTriangle,
    color: 'text-orange-500',
    bg: 'bg-orange-50',
    keywords: ['πνιγμονή', 'φαγητό', 'λαιμός', 'choking', 'food', 'erstickung'],
    locales: {
      en: {
        title: 'Choking (Heimlich Maneuver)',
        steps: [
          "Ask 'Are you choking?' If they cannot cough, speak, or breathe, act immediately.",
          "Stand behind the person and lean them slightly forward.",
          "Give 5 firm back blows between the shoulder blades with the heel of your hand.",
          "If unsuccessful, place a fist just above their navel, grasp it with your other hand, and give 5 quick, upward abdominal thrusts (Heimlich).",
          "Call 112 if the object does not dislodge and continue cycles of 5 blows and 5 thrusts."
        ]
      },
      el: {
        title: 'Πνιγμονή (Λαβή Heimlich)',
        steps: [
          "Ενθαρρύνετε τον καθαρό βήχα αν μπορεί. Αν δε μπορεί να μιλήσει ή να αναπνεύσει, δράστε άμεσα.",
          "Δώστε 5 δυνατά χτυπήματα στην πλάτη, ανάμεσα στις ωμοπλάτες.",
          "Αν δεν βγει το αντικείμενο, κάντε 5 κοιλιακές ωθήσεις (Λαβή Heimlich): Αγκαλιάστε τον από πίσω, βάλτε τη γροθιά σας πάνω από τον ομφαλό και πιέστε δυνατά προς τα μέσα και πάνω.",
          "Εναλλάσσετε 5 χτυπήματα στην πλάτη και 5 ωθήσεις. Καλέστε το 166/112."
        ]
      },
      de: {
        title: 'Erstickung (Heimlich-Manöver)',
        steps: [
          "Ermutigen Sie zum Husten. Wenn nicht möglich, handeln Sie sofort.",
          "Geben Sie 5 kräftige Schläge auf den Rücken zwischen die Schulterblätter.",
          "Heimlich-Manöver anwenden: Faust über dem Bauchnabel platzieren und 5 mal kräftig nach innen/oben ziehen.",
          "Wiederholen Sie dies und rufen Sie 112."
        ]
      }
    }
  },
  {
    id: 'stroke',
    icon: Activity,
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    keywords: ['εγκεφαλικό', 'μούδιασμα', 'ομιλία', 'stroke', 'fast', 'schlaganfall'],
    locales: {
      en: {
        title: 'Stroke (F.A.S.T.)',
        steps: [
          "Face: Ask them to smile. Does one side droop?",
          "Arms: Ask them to raise both arms. Does one drift downward?",
          "Speech: Ask them to repeat a simple phrase. Is their speech slurred?",
          "Time: If you see ANY of these signs, call 112 immediately. Time is brain cells.",
          "Note the exact time symptoms started."
        ]
      },
      el: {
        title: 'Εγκεφαλικό Επεισόδιο (F.A.S.T.)',
        steps: [
          "Face (Πρόσωπο): Ζητήστε του να χαμογελάσει. Μήπως στραβώνει η μία πλευρά;",
          "Arms (Χέρια): Ζητήστε του να σηκώσει τα χέρια. Μήπως το ένα πέφτει;",
          "Speech (Ομιλία): Ζητήστε του να πει μια πρόταση. Η ομιλία του είναι μπερδεμένη;",
          "Time (Χρόνος): Αν δείτε ΕΣΤΩ ΚΑΙ ΕΝΑ, καλέστε ΑΜΕΣΩΣ το 166.",
          "Σημειώστε ακριβώς την ώρα που ξεκίνησαν τα συμπτώματα."
        ]
      },
      de: {
        title: 'Schlaganfall (F.A.S.T.)',
        steps: [
          "Face (Gesicht): Bitten Sie um ein Lächeln. Hängt eine Seite?",
          "Arms (Arme): Beide Arme heben. Sinkt einer ab?",
          "Speech (Sprache): Sprache verwaschen?",
          "Time (Zeit): Bei JEDEM Anzeichen SOFORT 112 rufen.",
          "Notieren Sie die genaue Startzeit der Symptome."
        ]
      }
    }
  },
  {
    id: 'bleeding',
    icon: Droplet,
    color: 'text-red-600',
    bg: 'bg-red-50',
    keywords: ['αίμα', 'αιμορραγία', 'πληγή', 'bleeding', 'blood', 'tourniquet', 'blutung'],
    locales: {
      en: {
        title: 'Severe Bleeding',
        steps: [
          "Apply firm, direct pressure to the wound with a clean cloth or hands.",
          "Call 112 immediately if the bleeding is severe or spurting.",
          "Do NOT remove the cloth if it soaks through; add more cloth on top.",
          "If on a limb and pressure doesn't work, apply a tourniquet 2-3 inches above the wound (not on a joint).",
          "Note the exact time a tourniquet was applied."
        ]
      },
      el: {
        title: 'Σοβαρή Αιμορραγία / Τραύμα',
        steps: [
          "Ασκήστε δυνατή, άμεση πίεση στην πληγή με ένα καθαρό πανί ή με τα χέρια σας.",
          "Καλέστε το 166 άμεσα αν η αιμορραγία είναι μεγάλη ή τινάζεται (αρτηριακή).",
          "ΜΗΝ βγάζετε το πανί αν γεμίσει αίμα, προσθέστε άλλο από πάνω.",
          "Αν η αιμορραγία σε άκρο (χέρι/πόδι) δεν σταματά, εφαρμόστε τουρνικέ 5-7cm πάνω από την πληγή.",
          "Σημειώστε με στυλό την ώρα κατασκευής του τουρνικέ."
        ]
      },
      de: {
        title: 'Schwere Blutung',
        steps: [
          "Üben Sie festen, direkten Druck auf die Wunde aus.",
          "Rufen Sie 112, wenn die Blutung stark ist.",
          "Entfernen Sie vollgesogene Tücher nicht, legen Sie neue darüber.",
          "Wenn direkter Druck bei Gliedmaßen nicht hilft, Tourniquet anlegen.",
          "Zeitpunkt der Tourniquet-Anlage notieren."
        ]
      }
    }
  },
  {
    id: 'fainting',
    icon: Stethoscope,
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    keywords: ['λιποθυμία', 'ζαλάδα', 'fainting', 'dizzy'],
    locales: {
      en: {
        title: 'Fainting (Syncope)',
        steps: [
          "Catch the person before they fall if possible.",
          "Lay them flat on their back and elevate their legs above heart level.",
          "Loosen tight clothing (collars, belts).",
          "Do NOT splash water on their face or force them to drink.",
          "Call 112 if they don't wake up within 1-2 minutes."
        ]
      },
      el: {
        title: 'Λιποθυμία',
        steps: [
          "Βάλτε τον ασθενή να ξαπλώσει ανάσκελα.",
          "Ανασηκώστε τα πόδια του πάνω από το επίπεδο της καρδιάς.",
          "Χαλαρώστε στενά ρούχα, ζώνες και κολάρα. Εξασφαλίστε καθαρό αέρα.",
          "ΜΗΝ του ρίχνετε νερό στο πρόσωπο, μην του δίνετε νερό με το ζόρι.",
          "Αν δεν συνέλθει μέσα σε 1-2 λεπτά, καλέστε το 166."
        ]
      },
      de: {
        title: 'Ohnmacht',
        steps: [
          "Flach auf den Rücken legen.",
          "Beine über Herzhöhe anheben.",
          "Enge Kleidung lockern.",
          "Kein Wasser ins Gesicht schütten.",
          "Wenn nach 2 Minuten keine Besserung, 112 rufen."
        ]
      }
    }
  },
  {
    id: 'anaphylaxis',
    icon: BriefcaseMedical,
    color: 'text-teal-600',
    bg: 'bg-teal-50',
    keywords: ['αλλεργία', 'αναφυλαξία', 'πρήξιμο', 'anaphylaxis', 'allergy'],
    locales: {
      en: {
        title: 'Anaphylaxis (Severe Allergy)',
        steps: [
          "If they have an epinephrine auto-injector (EpiPen), use it immediately! Inject into the outer thigh.",
          "Call 112 even if epinephrine was given.",
          "Keep the person lying down. If they are vomiting, turn them on their side.",
          "If breathing stops, begin CPR."
        ]
      },
      el: {
        title: 'Αναφυλακτικό Σοκ (Αλλεργία)',
        steps: [
          "Αν διαθέτουν προγεμισμένη σύριγγα αδρεναλίνης (EpiPen), χορηγήστε την ΑΜΕΣΩΣ στον έξω μηρό.",
          "Καλέστε το 166 (ακόμη κι αν χορηγήθηκε η αδρεναλίνη).",
          "Ξαπλώστε τον ασθενή. Αν κάνει εμετό, γυρίστε τον στο πλάι.",
          "Αν διακοπεί η αναπνοή, ξεκινήστε αμέσως ΚΑΡΠΑ."
        ]
      },
      de: {
        title: 'Anaphylaxie (Schwere Allergie)',
        steps: [
          "EpiPen sofort in den äußeren Oberschenkel injizieren, falls vorhanden.",
          "In jedem Fall 112 rufen.",
          "Patient flach hinlegen. Bei Erbrechen auf die Seite drehen.",
          "Bei Atemstillstand CPR beginnen."
        ]
      }
    }
  },
  {
    id: 'burns',
    icon: Flame,
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    keywords: ['έγκαυμα', 'φωτιά', 'κάψιμο', 'burns', 'fire'],
    locales: {
      en: {
        title: 'Burns (Thermal & Chemical)',
        steps: [
          "Cool the burn immediately using cool running water for at least 15-20 minutes.",
          "Remove clothing or jewelry near the burn area, BEFORE swelling starts.",
          "Cover with a sterile, non-fluffy dressing or cling film.",
          "Do NOT pop blisters or apply ice, butter, or creams.",
          "Call 112 for severe burns or chemical/electrical burns."
        ]
      },
      el: {
        title: 'Εγκαύματα',
        steps: [
          "Δροσίστε ΑΜΕΣΩΣ το έγκαυμα με τρεχούμενο, δροσερό (όχι παγωμένο) νερό για 15-20 λεπτά.",
          "Αφαιρέστε ρούχα και κοσμήματα κοντά στην περιοχή πριν ξεκινήσει το οίδημα (πρήξιμο).",
          "ΜΗΝ σπάτε φουσκάλες και ΜΗΝ βάζετε πάγο, οδοντόκρεμα ή βούτυρο.",
          "Σκεπάστε ελαφρά τη μεμβράνη (π.χ. μεμβράνη τροφίμων).",
          "Αν το έγκαυμα είναι μεγάλο, στο πρόσωπο, ή χημικό, καλέστε 166."
        ]
      },
      de: {
        title: 'Verbrennungen',
        steps: [
          "Verbrennung sofort unter kühlem Wasser für 15-20 Minuten kühlen.",
          "Kleidung und Schmuck in der Nähe rasch entfernen.",
          "Keine Blasen aufstechen! Kein Eis oder Hausmittel verwenden.",
          "Leicht abdecken.",
          "Bei großen, tiefen oder chemischen Verbrennungen 112 rufen."
        ]
      }
    }
  },
  {
    id: 'seizures',
    icon: Zap,
    color: 'text-indigo-500',
    bg: 'bg-indigo-50',
    keywords: ['επιληψία', 'σπασμοί', 'κρίση', 'seizure', 'epilepsy'],
    locales: {
      en: {
        title: 'Seizures (Epilepsy)',
        steps: [
          "Clear the area of hard or sharp objects to prevent injury.",
          "Do NOT restrain the person or put ANYTHING in their mouth.",
          "Place something soft under their head.",
          "Roll them onto their side (recovery position) as the seizure ends.",
          "Call 112 if the seizure lasts >5 minutes or if it's their first seizure."
        ]
      },
      el: {
        title: 'Επιληπτική Κρίση (Σπασμοί)',
        steps: [
          "Απομακρύνετε επικίνδυνα αντικείμενα. Προστατέψτε το κεφάλι βάζοντας κάτι μαλακό από κάτω.",
          "ΜΗΝ προσπαθείτε να τον κρατήσετε ακίνητο. ΜΗΝ βάζετε ΤΙΠΟΤΑ στο στόμα του.",
          "Όταν σταματήσουν οι σπασμοί, γυρίστε τον στο πλάι (θέση ανάνηψης).",
          "Καλέστε το 166 αν η κρίση διαρκεί πάνω από 5 λεπτά ή αν είναι η πρώτη του."
        ]
      },
      de: {
        title: 'Krampfanfall (Epilepsie)',
        steps: [
          "Gefährliche Gegenstände aus dem Weg räumen.",
          "Kopf mit etwas Weichem polstern.",
          "Person NICHT festhalten und NICHTS in den Mund stecken.",
          "Nach dem Anfall in die stabile Seitenlage bringen.",
          "112 rufen, wenn Anfall > 5 Minuten dauert."
        ]
      }
    }
  }
];
