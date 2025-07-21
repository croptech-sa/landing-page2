import React from 'react';
import ProfileCard from '../components/ProfileCard';
import Footer from '../components/Footer';

interface AdvisoryMember {
  id: number;
  name: string;
  position: string;
  image: string;
  linkedin?: string;
}

const Advisory: React.FC = () => {
  const advisoryMembers: AdvisoryMember[] = [
    {
      id: 1,
      name: 'يوسف أبو بكر',
      position: 'مدير تقنية الابتكار في الهيئة العامة للمنشآت الصغيرة والمتوسطة.',
      image: '/advisors/yousef.png',
      linkedin: 'https://www.linkedin.com/in/yousef-abubakar/'
    },
    {
      id: 2,
      name: 'أحمد الجبرين',
      position: 'مؤسس ومدير عام شركة اكستند، ومصنف من مجله فوربس من ضمن افضل رواد الاعمال ابداعاً في السعودية.',
      image: '/advisors/aljabreen.png',
      linkedin: 'https://www.linkedin.com/in/ahmed-aljbreen-abb11238'
    },
    {
      id: 3,
      name: 'عبدالله سحاب',
      position: 'مؤسس و مشارك ورئيس مجلس الإدارة في مزرعة راما iRama.',
      image: '/advisors/sahab.png',
      linkedin: 'https://sa.linkedin.com/in/abdullah-sahab/ar'
    }
  ];

  const handleContactClick = (member: AdvisoryMember) => {
    if (member.linkedin) {
      window.open(member.linkedin, '_blank');
    }
  };

  return (
    <>
      <div className="min-h-screen bg-[#F8F8F6] dark:bg-[#1F2B20] pt-32 pb-16" dir="rtl">
        <div className="max-w-7xl mx-auto px-6">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#377138] mb-6">
              المجلس الاستشاري
            </h1>
            <p className="text-lg md:text-xl text-[#234723] dark:text-white/90 leading-relaxed max-w-3xl mx-auto">
              نخبة من الخبراء والمختصين الذين يقودون رؤيتنا نحو مستقبل أكثر استدامة
            </p>
          </div>

          {/* Advisory Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {advisoryMembers.map((member) => (
              <div key={member.id} className="w-full max-w-sm">
                <ProfileCard
                  avatarUrl={member.image}
                  name={member.name}
                  title={member.position}
                  status="عضو المجلس الاستشاري"
                  contactText={member.linkedin ? "LinkedIn" : "تواصل"}
                  showUserInfo={false}
                  enableTilt={true}
                  onContactClick={() => handleContactClick(member)}
                  className="advisory-card"
                  behindGradient="radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(120,50%,60%,var(--card-opacity)) 4%,hsla(120,30%,50%,calc(var(--card-opacity)*0.75)) 10%,hsla(120,20%,40%,calc(var(--card-opacity)*0.5)) 50%,hsla(120,0%,30%,0) 100%),radial-gradient(35% 52% at 55% 20%,#377138c4 0%,#073aff00 100%),radial-gradient(100% 100% at 50% 50%,#377138ff 1%,#073aff00 76%),conic-gradient(from 124deg at 50% 50%,#377138ff 0%,#234723ff 40%,#234723ff 60%,#377138ff 100%)"
                  innerGradient="linear-gradient(145deg,#37713880 0%,#23472344 100%)"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Advisory;