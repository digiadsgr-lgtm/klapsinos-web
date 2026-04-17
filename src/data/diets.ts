import { Activity, Droplet, Heart, Salad } from 'lucide-react';

export const dietsDB = [
  {
    id: 'diabetes',
    icon: Activity,
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    locales: {
      en: {
        title: 'Diabetes Mellitus',
        rules: [
          'Strictly avoid simple carbohydrates (sugar, sweets, white bread).',
          'Prioritize high-fiber foods (whole grains, legumes, vegetables).',
          'Maintain stable meal timing to prevent glucose spikes.',
          'Limit saturated fats to protect cardiovascular health.'
        ],
        tests: ['HbA1c (Glycosylated Hemoglobin)', 'Fasting Blood Glucose', 'Lipid Profile', 'Microalbuminuria']
      },
      el: {
        title: 'Σακχαρώδης Διαβήτης',
        rules: [
          'Αποφύγετε αυστηρά τους απλούς υδατάνθρακες (ζάχαρη, γλυκά, λευκό ψωμί).',
          'Προτιμήστε τροφές πλούσιες σε φυτικές ίνες (προϊόντα ολικής, όσπρια, λαχανικά).',
          'Σταθερά ωράρια γευμάτων για αποφυγή απότομων αυξομειώσεων του σακχάρου.',
          'Περιορισμός κορεσμένων λιπαρών για προστασία της καρδιάς.'
        ],
        tests: ['Γλυκοζυλιωμένη Αιμοσφαιρίνη (HbA1c)', 'Σάκχαρο νηστείας', 'Λιπιδαιμικό προφίλ', 'Μικρολευκωματινουρία']
      },
      de: {
        title: 'Diabetes Mellitus',
        rules: [
          'Vermeiden Sie strikt einfache Kohlenhydrate (Zucker, Süßigkeiten, Weißbrot).',
          'Bevorzugen Sie ballaststoffreiche Lebensmittel (Vollkorn, Hülsenfrüchte, Gemüse).',
          'Stabile Essenszeiten beibehalten, um Blutzuckerschwankungen zu vermeiden.',
          'Begrenzung gesättigter Fette zum Schutz des Herzens.'
        ],
        tests: ['HbA1c', 'Nüchternblutzucker', 'Lipidprofil', 'Mikroalbuminurie']
      }
    }
  },
  {
    id: 'cholesterol',
    icon: Heart,
    color: 'text-red-500',
    bg: 'bg-red-50',
    locales: {
      en: {
        title: 'High Cholesterol (LDL)',
        rules: [
          'Eliminate trans fats (fried fast food, processed snacks).',
          'Reduce saturated fats coming from red meat and full-fat dairy.',
          'Consume foods rich in Omega-3 (salmon, walnuts, flaxseed).',
          'Increase soluble fiber intake (oats, beans).'
        ],
        tests: ['Complete Lipid Profile (Total, LDL, HDL)', 'Apolipoprotein B', 'Triplex (Echocardiogram)']
      },
      el: {
        title: 'Υψηλή Χοληστερίνη (LDL)',
        rules: [
          'Εξάλειψη trans λιπαρών (τηγανητά, επεξεργασμένα σνακ).',
          'Μείωση κορεσμένων λιπαρών από κόκκινο κρέας και γαλακτοκομικά πλήρη σε λιπαρά.',
          'Αυξημένη κατανάλωση Omega-3 (σολομός, καρύδια, λιναρόσπορος).',
          'Αύξηση διαλυτών φυτικών ινών (βρώμη, όσπρια).'
        ],
        tests: ['Πλήρες Λιπιδαιμικό προφίλ (Ολική, LDL, HDL)', 'Απολιποπρωτεΐνη Β', 'Triplex Καρδιάς/Καρωτίδων']
      },
      de: {
        title: 'Hohes Cholesterin (LDL)',
        rules: [
          'Beseitigung von Transfetten (frittiertes Fast Food, verarbeitete Snacks).',
          'Reduzierung gesättigter Fette aus rotem Fleisch und Vollfett-Milchprodukten.',
          'Verzehr von Omega-3-reichen Lebensmitteln (Lachs, Walnüsse, Leinsamen).',
          'Erhöhung der Aufnahme löslicher Ballaststoffe (Hafer, Bohnen).'
        ],
        tests: ['Komplettes Lipidprofil', 'Apolipoprotein B', 'Echokardiographie (Triplex)']
      }
    }
  },
  {
    id: 'triglycerides',
    icon: Droplet,
    color: 'text-yellow-500',
    bg: 'bg-yellow-50',
    locales: {
      en: {
        title: 'High Triglycerides',
        rules: [
          'Strictly forbid alcohol consumption.',
          'Severely limit sugar and refined carbohydrates.',
          'Substitute animal fats with olive oil.',
          'Daily aerobic exercise (brisk walking at least 30-45 mins).'
        ],
        tests: ['Fasting Triglycerides', 'Liver Function Tests (AST, ALT)', 'Fasting Glucose']
      },
      el: {
        title: 'Υψηλά Τριγλυκερίδια',
        rules: [
          'Αυστηρή αποφυγή αλκοόλ.',
          'Δραστικός περιορισμός της ζάχαρης και των ραφιναρισμένων υδατανθράκων.',
          'Αντικατάσταση ζωικών λιπαρών με ελαιόλαδο.',
          'Καθημερινή αερόβια άσκηση (έντονο περπάτημα 30-45 λεπτά).'
        ],
        tests: ['Τριγλυκερίδια νηστείας', 'Έλεγχος Ηπατικής λειτουργίας (SGOT, SGPT)', 'Σάκχαρο νηστείας']
      },
      de: {
        title: 'Hohe Triglyceride',
        rules: [
          'Alkoholkonsum strikt verbieten.',
          'Zucker und raffinierte Kohlenhydrate stark einschränken.',
          'Ersatz von tierischen Fetten durch Olivenöl.',
          'Tägliche aerobe Bewegung (flottes Gehen für 30-45 Minuten).'
        ],
        tests: ['Nüchtern-Triglyceride', 'Leberfunktionstests (AST, ALT)', 'Nüchternblutzucker']
      }
    }
  },
  {
    id: 'healthy',
    icon: Salad,
    color: 'text-green-500',
    bg: 'bg-green-50',
    locales: {
      en: {
        title: 'General Heart Health',
        rules: [
          'Follow the Mediterranean Diet: rich in vegetables, fruits, and lean proteins.',
          'Maintain a stable Body Mass Index (BMI).',
          'Substitute salt with spices and herbs to control blood pressure.',
          'Hydrate well and manage daily stress levels.'
        ],
        tests: ['Annual Cardiac Checkup (ECG, Clinical Exam)', 'Blood Pressure Monitoring', 'Basic Blood Panel']
      },
      el: {
        title: 'Γενική Υγεία (Πρόληψη)',
        rules: [
          'Μεσογειακή Διατροφή: άφθονα λαχανικά, φρούτα, λευκό κρέας και ψάρια.',
          'Διατήρηση σταθερού Δείκτη Μάζας Σώματος (BMI).',
          'Αντικατάσταση αλατιού με μπαχαρικά για τον έλεγχο της αρτηριακής πίεσης.',
          'Επαρκής ενυδάτωση και διαχείριση του άγχους.'
        ],
        tests: ['Ετήσιος Καρδιολογικός Έλεγχος (ΗΚΓ, Κλινική Εξέταση)', 'Τακτικός έλεγχος Αρτηριακής Πίεσης', 'Γενικές Εξετάσεις Αίματος']
      },
      de: {
        title: 'Allgemeine Herzgesundheit',
        rules: [
          'Mittelmeerdiät: reich an Gemüse, Obst und mageren Proteinen.',
          'Erhalten Sie einen stabilen Body-Mass-Index (BMI).',
          'Ersetzen Sie Salz durch Gewürze, um den Blutdruck zu kontrollieren.',
          'Ausreichende Flüssigkeitszufuhr und Stressbewältigung.'
        ],
        tests: ['Jährlicher Herz-Check-up (EKG, klinische Untersuchung)', 'Blutdrucküberwachung', 'Kleines Blutbild']
      }
    }
  }
];
