import React from 'react';
import { motion } from 'framer-motion';

const Section5: React.FC = () => {
  const processSteps = [
    {
      id: 1,
      step: '1',
      title: 'تقديم ذكي وتمويل مستهدف',
      text: 'تبدأ الجهات الراغبة بالتشجير رحلتها عبر منصتنا الرقمية، حيث يُحدد الموقع المناسب ويُقيَّم بيئياً من قِبل خبراء كروبتك لضمان مواءمته ونجاح المشروع.'
    },
    {
      id: 2,
      step: '2',
      title: 'تنفيذ ميداني وتوثيق لحظي',
      text: 'نتولى عمليات الزراعة ميدانياً، مع تسجيل كل شجرة مباشرة برمز تعريف فريد يشمل نوعها، إحداثياتها، تاريخ الزراعة، وصور دورية لحالتها الصحية، مما يضمن الشفافية الكاملة في كل خطوة.'
    },
    {
      id: 3,
      step: '3',
      title: 'تتبع الأثر وتقارير بيئية دقيقة',
      text: 'نوفر لوحة تحكم مخصصة لكل عميل لعرض بيانات المشروع لحظياً، مع مؤشرات الكربون الممتصّ، وسجل شامل للأشجار، وتقارير ESG موثقة تعزز التزام الجهات بالاستدامة البيئية والاجتماعية.'
    }
  ];

  // Animation variants for cards
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  // Individual card component with its own useInView
  const ProcessCard: React.FC<{ step: typeof processSteps[0], index: number }> = ({ step, index }) => {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px 0px -50px 0px" }}
        variants={cardVariants}
        transition={{
          delay: index * 0.2,
          duration: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        className="mb-8 last:mb-0"
      >
        <div className="relative bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
          {/* Step Number Background */}
          <div className="absolute top-4 left-4 text-6xl font-bold text-[#377138] opacity-10">
            {step.step}
          </div>
          
          {/* Card Content */}
          <div className="relative z-10">
            <h3 className="text-xl md:text-2xl font-bold text-[#377138] mb-4 text-right">
              {step.title}
            </h3>
            <p className="text-base md:text-lg text-[#234723] leading-relaxed text-right">
              {step.text}
            </p>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section 
      id="section5" 
      className="py-16 md:py-24 bg-[#F8F8F6]"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Mobile Layout - Stacked */}
        <div className="lg:hidden">
          {/* Title Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#377138] mb-6">
              كيف نعمل؟
            </h2>
            <p className="text-lg md:text-xl text-[#234723] leading-relaxed">
              تشجير مؤسسي… خطوة بخطوة، وقابل للتتبع.
            </p>
          </div>

          {/* Cards Section */}
          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <ProcessCard key={step.id} step={step} index={index} />
            ))}
          </div>
        </div>

        {/* Desktop Layout - Two Columns */}
        <div className="hidden lg:grid lg:grid-cols-5 lg:gap-12 lg:items-center lg:min-h-[600px]">
          {/* Right Column - Title (40% width = 2/5) - Vertically Centered */}
          <div className="lg:col-span-2 text-center flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#377138] mb-6 leading-tight">
              كيف نعمل؟
            </h2>
            <p className="text-lg md:text-xl text-[#234723] leading-relaxed">
              تشجير مؤسسي… خطوة بخطوة، وقابل للتتبع.
            </p>
          </div>

          {/* Left Column - Cards (60% width = 3/5) - Full Height */}
          <div className="lg:col-span-3 flex flex-col justify-center">
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <ProcessCard key={step.id} step={step} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;