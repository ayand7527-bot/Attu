/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface BirthdayConfig {
  recipient: {
    fullName: string;
    nickname: string;
    birthDateFormatted: string;
    hijriNote?: string;
  };
  bismillah: {
    arabic: string;
    translation: string;
  };
  hero: {
    kicker: string;
    headline: string;
    subheadline: string;
    dua: string;
  };
  giftBox: {
    lidLabel: string;
    tapPrompt: string;
    revealedTitle: string;
    revealedMessage: string;
    blessingQuote: string;
  };
  urduLetter: {
    title: string;
    subtitle: string;
    romanUrdu: string[];
    nastaliqUrdu: string[];
    englishSummary: string;
    signature: string;
  };
  cake: {
    title: string;
    subtitle: string;
    candleCount: number;
    wishPrompt: string;
    wishBlownMessage: string;
  };
  finalDua: {
    title: string;
    arabicCalligraphy: string;
    urduDua: string;
    englishMeaning: string;
    concludingWords: string;
  };
}

export const BIRTHDAY_DATA: BirthdayConfig = {
  recipient: {
    fullName: "Attiya",
    nickname: "Attu",
    birthDateFormatted: "October 30",
    hijriNote: "A blessed milestone surrounded by grace and peace",
  },
  bismillah: {
    arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    translation: "In the name of Allah, the Most Gracious, the Most Merciful",
  },
  hero: {
    kicker: "A Little Birthday Magic",
    headline: "Happy Birthday, Attu",
    subheadline: "Celebrating the grace, kindness, and warmth you bring into this world.",
    dua: "May Allah bless your life with happiness, peace, and barakah. Aameen.",
  },
  giftBox: {
    lidLabel: "For Attu",
    tapPrompt: "Tap to unwrap your birthday surprise",
    revealedTitle: "A Heartfelt Wish For You",
    revealedMessage:
      "On this October 30, may every step you take be illuminated with divine light, every burden made light, and every quiet prayer answered in the most beautiful way.",
    blessingQuote: "“May peace, barakah, and unconditional happiness accompany you always.”",
  },
  urduLetter: {
    title: "Urdu Birthday Letter",
    subtitle: "Khaas Attu Ke Liye · A Heartfelt Letter",
    romanUrdu: [
      "Assalamu Alaikum, meri pyari Attu.",
      "Salgirah mubarak ho! Allah tumhari zindagi ko khushiyon, sukoon, sehat aur barkaton se bhar de. Tumhare ilm mein izafa farmaye, tumhein hamesha apni hifazat mein rakhe aur tumhari har nek dua qubool farmaye. Aameen.",
      "Meri niyyat tumhare saath sachchi aur izzat wali hai. Main chahta hoon ke agar Allah ne hamare haq mein behtar likha ho, toh hamara rishta ek din nikah ke khoobsurat bandhan tak pahunche. Allah humein sahi raasta dikhaye aur hum dono ke liye jo behtar ho, woh naseeb farmaye.",
      "Duaon ke saath."
    ],
    nastaliqUrdu: [
      "اَلسَّلَامُ عَلَیْکُمْ، میری پیاری عطو۔",
      "سالگرہ مبارک ہو! اللہ تمہاری زندگی کو خوشیوں، سکون، صحت اور برکتوں سے بھر دے۔ تمہارے علم میں اضافہ فرمائے، تمہیں ہمیشہ اپنی حفاظت میں رکھے اور تمہاری ہر نیک دعا قبول فرمائے۔ آمین۔",
      "میری نیت تمہارے ساتھ سچی اور عزت والی ہے۔ میں چاہتا ہوں کہ اگر اللہ نے ہمارے حق میں بہتر لکھا ہو، تو ہمارا رشتہ ایک دن نکاح کے خوبصورت بندھن تک پہنچے۔ اللہ ہمیں صحیح راستہ دکھائے اور ہم دونوں کے لیے جو بہتر ہو، وہ نصیب فرمائے۔",
      "دعاؤں کے ساتھ۔"
    ],
    englishSummary:
      "Peace be upon you, dear Attu. Happy birthday! May Allah fill your days with peace, vibrant health, abundant barakah, and beneficial knowledge. May your sincere prayers always be accepted. With genuine respect and earnest prayers for what is best and blessed in Allah's decree.",
    signature: "Hamesha duaon mein yaad rakhne wala",
  },
  cake: {
    title: "The Birthday Wish",
    subtitle: "Make a sincere wish in your heart before extinguishing the flames",
    candleCount: 5,
    wishPrompt: "Make a Wish & Blow the Candles",
    wishBlownMessage:
      "Aameen! May every pure intention and prayer whispered in your heart today be granted in the most miraculous, serene manner.",
  },
  finalDua: {
    title: "Final Dua & Blessings",
    arabicCalligraphy: "اللَّهُمَّ بَارِكْ لَهَا فِي عُمُرِهَا وَارْزُقْهَا السَّعَادَةَ وَالسَّكِينَةَ",
    urduDua: "Allah tumhein ilm, sukoon, khushiyan aur barkat ata farmaye. Tumhari zindagi ko nekiyon aur rehmat se roshan kare. Aameen.",
    englishMeaning:
      "May Allah bestow upon you knowledge, serene peace, genuine happiness, and barakah. May your life be illuminated with righteous deeds and boundless divine mercy. Aameen.",
    concludingWords: "Happy Birthday once again, dearest Attu.",
  },
};
