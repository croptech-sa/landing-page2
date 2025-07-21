import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Camera, FileCheck } from 'lucide-react';

const Section2: React.FC = () => {
  const cards = [
    {
      id: 1,
      icon: MapPin,
      title: 'تتبع كل شجرة بدقة'
    },
    {
      id: 2,
      icon: Camera,
      title: 'توثيق موقعها وصورها وحالتها'
    },
    {
      id: 3,
      icon: FileCheck,
      title: 'ربطها بتقارير قابلة للتدقيق'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      x: 50 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      id="section2" 
      className="min-h-screen bg-[#F8F8F6] dark:bg-[#1F2B20] py-16 md:py-24"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Right Column - Text Content */}
          <motion.div 
            className="order-1 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={textVariants}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#377138] mb-8 leading-tight">
              لماذا كروبتك؟
            </h2>
            <div className="text-lg md:text-xl text-[#234723] dark:text-white/90 leading-relaxed space-y-6">
              <p>
                المشكلة ليست في زراعة الأشجار… بل في إثباتها.
              </p>
              <p>
                في ظل تسارع التزامات الاستدامة والحوكمة البيئية (ESG)، تواجه الشركات والجهات تحديًا جوهريًا:
              </p>
              <p className="font-medium">
                كيف تضمن أن مشاريعها البيئية حقيقية، موثقة، ومؤثرة فعلًا؟
              </p>
            </div>
          </motion.div>

          {/* Left Column - Supporting Points Cards */}
          <motion.div 
            className="order-2 lg:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <div className="space-y-6">
              {cards.map((card) => {
                const IconComponent = card.icon;
                return (
                  <motion.div
                    key={card.id}
                    variants={cardVariants}
                    className="bg-white dark:bg-[#1F2B20] rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#377138]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-[#377138]" />
                      </div>
                      <h3 className="text-lg font-semibold text-[#234723] dark:text-white text-right flex-1">
                        {card.title}
                      </h3>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Additional Paragraph Below */}
        <motion.div 
          className="mt-16 md:mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textVariants}
        >
          <p className="text-lg md:text-xl text-[#234723] dark:text-white/90 leading-relaxed text-right md:text-center max-w-4xl mx-auto">
            وهنا يأتي دور كروبتك: نبني جسرًا بين التشجير الفعلي والتحول الرقمي،
            ونقدّم أداة مؤسسية ذكية لتمكين الجهات من تنفيذ مشاريع خضراء مستدامة بثقة وبالبيانات.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Section2;