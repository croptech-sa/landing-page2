import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Section4: React.FC = () => {
  const cards = [
    {
      id: 1,
      title: 'أثرنا البيئي',
      intro: 'كل شجرة مزروعة تساهم بشكل مباشر في:',
      bullets: [
        'زيادة الغطاء النباتي ودعم مبادرة السعودية الخضراء.',
        'تحسين جودة الهواء بامتصاص ثاني أكسيد الكربون وتقليل البصمة الكربونية.',
        'خفض درجات الحرارة في البيئات الحضرية.',
        'دعم التنوع البيولوجي وتعزيز النظم البيئية المحلية.'
      ]
    },
    {
      id: 2,
      title: 'أثرنا الرقمي',
      intro: 'نُمكن الشركات من:',
      bullets: [
        'تتبع دقيق لكل شجرة برمز تعريفي ذكي وفريد عبر منصتنا الرقمية.',
        'إثبات زراعة الأشجار على خرائط فعلية باستخدام إحداثيات الموقع الجغرافي.',
        'توثيق حقيقي بالصور الميدانية الدورية وحالة الشجرة على مدى الزمن.',
        'تقييم تلقائي لحالة الأشجار (حية / ضعيفة / ميتة) باستخدام بيانات الاستشعار.',
        'حساب الكربون المعوض لكل شجرة، وتجهيزه لتقارير ESG وESIA.'
      ]
    }
  ];

  return (
    <section 
      id="section4" 
      className="py-16 md:py-24" 
      style={{
        background: 'linear-gradient(to bottom, #377138 0%, #F8F8F6 100%)'
      }}
      dir="rtl"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
            أثرنا
          </h2>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            في كروبتك، لا نكتفي بزراعة الأشجار فقط، بل نبني حلًا متكاملًا له أثر مزدوج: بيئي ملموس ورقمي شفاف، وكلاهما قابل للقياس والتوثيق، مستفيدين من قدراتنا التحليلية والتقنية.
          </p>
        </div>

        {/* Accordion Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: card.id * 0.1 }}
            >
              {/* Card Header */}
              <div className="p-6 md:p-8 text-right">
                <h3 className="text-xl md:text-2xl font-bold text-[#377138] mb-3">
                  {card.title}
                </h3>
                <p className="text-base md:text-lg text-[#234723] leading-relaxed">
                  {card.intro}
                </p>
              </div>

              {/* Card Content - Always Visible */}
              <div className="px-6 md:px-8 pb-6 md:pb-8">
                <div className="border-t border-gray-200 pt-6">
                  <ul className="space-y-4">
                    {card.bullets.map((bullet, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-2 h-2 bg-[#377138] rounded-full mt-3 flex-shrink-0" />
                        <p className="text-base md:text-lg text-[#234723] leading-relaxed">
                          {bullet}
                        </p>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Paragraph */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-base md:text-lg text-[#234723] leading-relaxed max-w-2xl mx-auto">
            وبهذا النموذج، نربط التقنية بالتشجير الحقيقي، ونقدم قيمة مستدامة يمكن إثباتها ومشاركتها بثقة.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Section4;