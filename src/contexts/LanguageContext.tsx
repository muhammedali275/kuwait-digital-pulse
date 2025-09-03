import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface LanguageContextType {
  language: 'en' | 'ar';
  setLanguage: (lang: 'en' | 'ar') => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    'header.logo': 'DigitalBox',
    'header.kuwaitNews': 'Kuwait News',
    'header.telecom5g': 'Telecom & 5G',
    'header.bankingFintech': 'Banking & FinTech',
    'header.cybersecurity': 'Cybersecurity',
    'header.startups': 'Startups',
    'header.enterpriseIT': 'Enterprise IT',
    'header.companies': 'Companies',
    'header.jobs': 'Jobs',
    'header.search': 'Search articles...',
    'header.signIn': 'Sign In',
    
    // Footer
    'footer.sections': 'Sections',
    'footer.resources': 'Resources',
    'footer.companies': 'Companies',
    'footer.about': 'About',
    'footer.reviews': 'Reviews',
    'footer.howToGuides': 'How-to Guides',
    'footer.dataCharts': 'Data & Charts',
    'footer.events': 'Events',
    'footer.jobs': 'Jobs',
    'footer.opinion': 'Opinion',
    'footer.allCompanies': 'All Companies',
    'footer.aboutUs': 'About Us',
    'footer.contact': 'Contact',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.advertise': 'Advertise',
    'footer.stayUpdated': 'Stay Updated',
    'footer.enterEmail': 'Enter your email',
    'footer.subscribe': 'Subscribe',
    'footer.description': "Kuwait's leading source for technology news, digital transformation insights, and innovation stories shaping the region's future.",
    'footer.allRights': 'All rights reserved',
    
    // Home Page
    'home.heroTitle': 'Kuwait\'s Premier Tech News Platform',
    'home.heroSubtitle': 'Stay ahead with the latest technology trends, digital transformation insights, and innovation stories from Kuwait and the GCC region.',
    'home.dailyReaders': 'Daily Readers',
    'home.articlesPublished': 'Articles Published', 
    'home.techCompanies': 'Tech Companies',
    'home.marketReports': 'Market Reports',
    'home.latestNews': 'Latest Technology News',
    'home.stayUpdated': 'Stay updated with Kuwait\'s digital transformation',
    'home.viewAllArticles': 'View All Articles',
    'home.executiveInterviews': 'Executive Interviews',
    'home.techLeaders': 'Insights from Kuwait\'s tech leaders',
    'home.viewAllInterviews': 'View All Interviews',
    'home.companySpotlight': 'Company Spotlight',
    'home.companyDescription': 'Discover the leading technology companies driving innovation in Kuwait\'s digital economy',
    'home.viewCompanyHub': 'View Company Hub',
    'home.stayInLoop': 'Stay in the Loop',
    'home.newsletterDescription': 'Get the latest Kuwait tech news, startup stories, and digital transformation insights delivered to your inbox every week.',
    'home.subscribeNow': 'Subscribe Now',
    'home.joinProfessionals': 'Join 25,000+ tech professionals already subscribed',
    
    // Jobs Page
    'jobs.title': 'Tech Careers in Kuwait',
    'jobs.description': 'Discover exciting technology opportunities with Kuwait\'s leading companies and startups',
    'jobs.searchPlaceholder': 'Search jobs, companies, or skills...',
    'jobs.location': 'Location',
    'jobs.filter': 'Filter',
    'jobs.browseCategory': 'Browse by Category',
    'jobs.featuredOpportunities': 'Featured Opportunities',
    'jobs.viewAllJobs': 'View All Jobs',
    'jobs.applyNow': 'Apply Now',
    'jobs.postJob': 'Post a Job',
    'jobs.hiringTitle': 'Hiring? Post Your Job',
    'jobs.hiringDescription': 'Reach Kuwait\'s top tech talent. Post your job opportunities and connect with qualified candidates in the digital transformation space.',
    'jobs.learnMore': 'Learn More',
    
    // Common
    'common.comingSoon': 'Content Coming Soon',
    'common.configureDataSource': 'Configure Data Source',
    'common.language': 'العربية',
    'common.fullTime': 'Full-time',
    'common.partTime': 'Part-time',
    'common.remote': 'Remote'
  },
  ar: {
    // Header
    'header.logo': 'الصندوق الرقمي',
    'header.kuwaitNews': 'أخبار الكويت',
    'header.telecom5g': 'الاتصالات والجيل الخامس',
    'header.bankingFintech': 'المصارف والتكنولوجيا المالية',
    'header.cybersecurity': 'الأمن السيبراني',
    'header.startups': 'الشركات الناشئة',
    'header.enterpriseIT': 'تقنية المعلومات للمؤسسات',
    'header.companies': 'الشركات',
    'header.jobs': 'الوظائف',
    'header.search': 'البحث في المقالات...',
    'header.signIn': 'تسجيل الدخول',
    
    // Footer
    'footer.sections': 'الأقسام',
    'footer.resources': 'الموارد',
    'footer.companies': 'الشركات',
    'footer.about': 'حول',
    'footer.reviews': 'المراجعات',
    'footer.howToGuides': 'أدلة إرشادية',
    'footer.dataCharts': 'البيانات والرسوم البيانية',
    'footer.events': 'الفعاليات',
    'footer.jobs': 'الوظائف',
    'footer.opinion': 'الرأي',
    'footer.allCompanies': 'جميع الشركات',
    'footer.aboutUs': 'من نحن',
    'footer.contact': 'اتصل بنا',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الخدمة',
    'footer.advertise': 'أعلن معنا',
    'footer.stayUpdated': 'ابق على اطلاع',
    'footer.enterEmail': 'أدخل بريدك الإلكتروني',
    'footer.subscribe': 'اشترك',
    'footer.description': 'المصدر الرائد في الكويت لأخبار التكنولوجيا ورؤى التحول الرقمي وقصص الابتكار التي تشكل مستقبل المنطقة.',
    'footer.allRights': 'جميع الحقوق محفوظة',
    
    // Home Page
    'home.heroTitle': 'منصة أخبار التكنولوجيا الرائدة في الكويت',
    'home.heroSubtitle': 'كن في المقدمة مع أحدث اتجاهات التكنولوجيا ورؤى التحول الرقمي وقصص الابتكار من الكويت ومنطقة الخليج.',
    'home.dailyReaders': 'القراء اليوميون',
    'home.articlesPublished': 'المقالات المنشورة',
    'home.techCompanies': 'شركات التكنولوجيا',
    'home.marketReports': 'تقارير السوق',
    'home.latestNews': 'أحدث أخبار التكنولوجيا',
    'home.stayUpdated': 'ابق محدثاً مع التحول الرقمي في الكويت',
    'home.viewAllArticles': 'عرض جميع المقالات',
    'home.executiveInterviews': 'مقابلات تنفيذية',
    'home.techLeaders': 'رؤى من قادة التكنولوجيا في الكويت',
    'home.viewAllInterviews': 'عرض جميع المقابلات',
    'home.companySpotlight': 'الضوء على الشركات',
    'home.companyDescription': 'اكتشف الشركات التقنية الرائدة التي تقود الابتكار في الاقتصاد الرقمي للكويت',
    'home.viewCompanyHub': 'عرض مركز الشركة',
    'home.stayInLoop': 'ابق في المقدمة',
    'home.newsletterDescription': 'احصل على أحدث أخبار التكنولوجيا في الكويت وقصص الشركات الناشئة ورؤى التحول الرقمي في بريدك الإلكتروني كل أسبوع.',
    'home.subscribeNow': 'اشترك الآن',
    'home.joinProfessionals': 'انضم إلى أكثر من 25,000 محترف تقنية مشترك بالفعل',
    
    // Jobs Page
    'jobs.title': 'وظائف التكنولوجيا في الكويت',
    'jobs.description': 'اكتشف فرص التكنولوجيا المثيرة مع الشركات والشركات الناشئة الرائدة في الكويت',
    'jobs.searchPlaceholder': 'البحث عن وظائف أو شركات أو مهارات...',
    'jobs.location': 'الموقع',
    'jobs.filter': 'تصفية',
    'jobs.browseCategory': 'تصفح حسب الفئة',
    'jobs.featuredOpportunities': 'الفرص المميزة',
    'jobs.viewAllJobs': 'عرض جميع الوظائف',
    'jobs.applyNow': 'تقدم الآن',
    'jobs.postJob': 'انشر وظيفة',
    'jobs.hiringTitle': 'تبحث عن موظفين؟ انشر وظيفتك',
    'jobs.hiringDescription': 'تواصل مع أفضل المواهب التقنية في الكويت. انشر فرصك الوظيفية وتواصل مع المرشحين المؤهلين في مجال التحول الرقمي.',
    'jobs.learnMore': 'تعلم المزيد',
    
    // Common
    'common.comingSoon': 'المحتوى قادم قريباً',
    'common.configureDataSource': 'تكوين مصدر البيانات',
    'common.language': 'English',
    'common.fullTime': 'دوام كامل',
    'common.partTime': 'دوام جزئي',
    'common.remote': 'عن بُعد'
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as 'en' | 'ar' | null;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};