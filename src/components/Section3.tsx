import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cpu, BarChart3, Rocket } from 'lucide-react';

const Section3: React.FC = () => {
  const cards = [
    {
      id: 1,
      icon: Cpu,
      text: 'في كروبتك، بدأنا رحلتنا من الميدان الزراعي، حيث طوّرنا حلولًا ذكية تعتمد على الذكاء الاصطناعي وإنترنت الأشياء لتحسين الإنتاجية وحفظ الموارد. لكننا سرعان ما أدركنا أن التقنية الزراعية لا يجب أن تتوقف عند حدود الري والتربة—بل يمكن أن تكون أداة استراتيجية لمعالجة التحديات البيئية الأوسع.'
    },
    {
      id: 2,
      icon: BarChart3,
      text: 'مع ازدياد الحاجة إلى التشجير الحضري وتحقيق أهداف الاستدامة، وجّهنا خبراتنا لتأسيس منصة تشجير مؤسسي ذكية، تعتمد على البيانات والتتبع، وتربط الجهات الحكومية والخاصة بحلول رقمية شفافة ومتكاملة.'
    },
    {
      id: 3,
      icon: Rocket,
      text: 'بدعم من وزارة البيئة عبر برنامج "سُنبلة"، اختبرنا تقنياتنا ميدانيًا في مشاريع بيئية حقيقية، وأثبتنا فعاليتها في تقديم تشجير قابل للقياس، والإبلاغ، والمساءلة.'
    }
  ];

  // Animation variants for cards
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  // Individual card component with its own useInView
  const AnimatedCard: React.FC<{ card: typeof cards[0], index: number }> = ({ card, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { 
      once: true, 
      margin: "-100px 0px -100px 0px" 
    });

    const IconComponent = card.icon;

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={cardVariants}
        transition={{
          delay: index * 0.15, // Stagger delay
          duration: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        className="w-full"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white dark:bg-[#1F2B20] rounded-xl p-6 md:p-8 shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="flex items-start gap-6">
              {/* Icon - Right side for RTL */}
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#377138]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <IconComponent className="w-6 h-6 md:w-7 md:h-7 text-[#377138]" />
              </div>
              
              {/* Text Content - Left side for RTL */}
              <div className="flex-1">
                <p className="text-base md:text-lg text-[#234723] dark:text-white/90 leading-relaxed text-right">
                  {card.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section 
      id="section3" 
      className="relative" 
      style={{
        background: 'linear-gradient(to bottom, #F8F8F6 0%, #F8F8F6 50%, #377138 100%)'
      }}
      dir="rtl"
    >
      {/* Section Header */}
      <div className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#377138] mb-6">
            قصتنا
          </h2>
          <p className="text-lg md:text-xl text-[#234723] dark:text-white/90 leading-relaxed">
            كل شيء بدأ من المزرعة… وتحول إلى منصة تشجير وطنية.
          </p>
        </div>
      </div>

      {/* Story Cards - Native scroll animations */}
      <div className="pb-16 md:pb-24">
        <div className="space-y-8 md:space-y-12">
          {cards.map((card, index) => (
            <AnimatedCard key={card.id} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section3;