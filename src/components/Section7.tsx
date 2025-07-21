import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Section7: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: 'هل أحتاج أن أملك أرضًا لأبدأ مشروع تشجير؟',
      answer: 'لا، نحن نساعدك في تأمين المواقع المناسبة بالتنسيق مع شركائنا من الجهات الحكومية والبلديات.'
    },
    {
      id: 2,
      question: 'هل أستطيع تتبع كل شجرة زرعتها؟',
      answer: 'نعم، كل شجرة ترتبط برمز تعريفي فريد، مع إحداثيات وصور وتقارير دورية داخل لوحة تحكم مخصصة.'
    },
    {
      id: 3,
      question: 'هل المنصة مخصصة للشركات فقط؟',
      answer: 'تركز كروبتك على الجهات الحكومية والخاصة، لكن نعمل على توسيع خدماتنا لتشمل الأفراد قريبًا.'
    },
    {
      id: 4,
      question: 'كيف يتم احتساب الأثر البيئي لمشروعي؟',
      answer: 'نستخدم خوارزميات تحليل مدعومة ببيانات الاستشعار ونوع الشجرة والموقع لحساب الكربون الممتص والأثر البيئي.'
    },
    {
      id: 5,
      question: 'ما أقل ميزانية يمكن أن أبدأ بها؟',
      answer: 'يمكنك البدء بأي ميزانية، وسنقترح لك نموذجًا مناسبًا لحجم مساهمتك وعدد الأشجار المستهدف.'
    },
    {
      id: 6,
      question: 'هل يمكنني الحصول على تقارير ESG لاستخدامها في شركتي؟',
      answer: 'نعم، كل مشروع مدعوم بتقارير دورية قابلة للتوثيق وفقًا لمعايير ESG وESIA.'
    },
    {
      id: 7,
      question: 'هل يتم توثيق المشروع بصور وتقارير رسمية؟',
      answer: 'نعم، نوثق المشروع بصور ميدانية دورية وتقارير ESG مؤتمتة تُعرض في لوحة تحكم العميل.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="section7" 
      className="py-16 md:py-24 bg-[#F8F8F6] dark:bg-[#1F2B20]"
      dir="rtl"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#377138] mb-6">
            الأسئلة المتكررة (FAQ)
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-[#1F2B20] border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
            >
              {/* Question Header */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-right flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  <ChevronDown className="w-5 h-5 text-[#377138]" />
                </motion.div>
                <h3 className="text-lg md:text-xl font-semibold text-[#234723] dark:text-white leading-relaxed flex-1">
                  {faq.question}
                </h3>
              </button>

              {/* Answer Content */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 border-t border-gray-200 dark:border-gray-700">
                      <motion.p
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                        className="text-base md:text-lg text-[#234723] dark:text-white/90 leading-relaxed pt-4"
                      >
                        {faq.answer}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section7;