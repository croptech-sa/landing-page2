import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Brain, Database, FileText, BarChart3, Monitor } from 'lucide-react';
import MagicBento from './MagicBento';

const Section6: React.FC = () => {
  const bentoCards = [
    {
      title: 'GPS تتبع الموقع الجغرافي',
      description: 'نربط كل شجرة بإحداثيات دقيقة تتيح إثبات الزراعة ميدانيًا وتعزز الشفافية.',
      icon: <MapPin className="w-8 h-8 text-[#377138]" />,
      size: 'large' as const,
      color: '#1a1a1a'
    },
    {
      title: 'نظام تقدير الكربون',
      description: 'نحسب الكربون الممتص استنادًا لنوع الأشجار وموقعها ونموها، دعمًا لتقارير الاستدامة والحياد الكربوني.',
      icon: <BarChart3 className="w-8 h-8 text-[#377138]" />,
      size: 'large' as const,
      color: '#1a1a1a'
    },
    {
      title: 'الذكاء الاصطناعي (AI)',
      description: 'نستخدم خوارزميات لتحليل بيانات النمو والبيئة، ومراقبة الحالة الصحية، والتنبؤ بالمخاطر.',
      icon: <Brain className="w-6 h-6 text-[#377138]" />,
      size: 'small' as const,
      color: '#1a1a1a'
    },
    {
      title: 'إدارة بيانات مركزية',
      description: 'تخزين وربط وتحليل بيانات كل شجرة في قاعدة موحدة تدعم التكامل البيئي.',
      icon: <Database className="w-6 h-6 text-[#377138]" />,
      size: 'small' as const,
      color: '#1a1a1a'
    },
    {
      title: 'نظام تقارير آلي',
      description: 'يصدر تقارير دورية توثق عدد الأشجار، مواقعها، حالتها الصحية، والصور المرتبطة.',
      icon: <FileText className="w-6 h-6 text-[#377138]" />,
      size: 'small' as const,
      color: '#1a1a1a'
    },
    {
      title: 'واجهات رقمية تفاعلية',
      description: 'لوحات تحكم مرنة لعرض أداء المشروع والأشجار والتقارير البيئية لحظيًا.',
      icon: <Monitor className="w-6 h-6 text-[#377138]" />,
      size: 'small' as const,
      color: '#1a1a1a'
    }
  ];

  return (
    <section 
      id="section6" 
      className="py-16 md:py-24 bg-black"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            التقنيات المستخدمة
          </h2>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            وراء كل شجرة، نظام ذكي يحلل، يتتبع، ويوثق.
          </p>
        </motion.div>

        {/* Magic Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <MagicBento
            cards={bentoCards}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            glowColor="55, 113, 56"
            spotlightRadius={250}
            particleCount={8}
          />
        </motion.div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
          grid-auto-rows: minmax(200px, auto);
        }

        @media (min-width: 768px) {
          .bento-grid {
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: repeat(3, minmax(180px, auto));
          }
        }

        .bento-card {
          border-radius: 1rem;
          padding: 2rem;
          border: 1px solid rgba(55, 113, 56, 0.2);
          background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        .bento-card:hover {
          border-color: rgba(55, 113, 56, 0.5);
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .bento-card--large {
          grid-column: span 2;
          grid-row: span 1;
        }

        .bento-card--small {
          grid-column: span 1;
          grid-row: span 1;
        }

        @media (max-width: 767px) {
          .bento-card--large,
          .bento-card--small {
            grid-column: span 1;
            grid-row: span 1;
          }
        }

        .bento-card--border-glow {
          position: relative;
        }

        .bento-card--border-glow::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(
            135deg,
            rgba(var(--glow-color, 55, 113, 56), calc(var(--glow-intensity, 0) * 0.8)),
            rgba(var(--glow-color, 55, 113, 56), calc(var(--glow-intensity, 0) * 0.4)),
            transparent
          );
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: xor;
          -webkit-mask-composite: xor;
          pointer-events: none;
        }

        .bento-card__content {
          position: relative;
          z-index: 10;
          height: 100%;
          display: flex;
          flex-direction: column;
          text-align: right;
        }

        .bento-card__icon {
          margin-bottom: 1rem;
          display: flex;
          justify-content: flex-end;
        }

        .bento-card__title {
          font-size: 1.25rem;
          font-weight: 700;
          color: white;
          margin-bottom: 0.75rem;
          line-height: 1.4;
        }

        .bento-card--large .bento-card__title {
          font-size: 1.5rem;
        }

        .bento-card__description {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          font-size: 0.95rem;
          flex-grow: 1;
        }

        .bento-card--large .bento-card__description {
          font-size: 1rem;
        }

        .particle-container {
          position: relative;
        }

        .particle {
          position: absolute;
          pointer-events: none;
          z-index: 100;
        }
      `}</style>
    </section>
  );
};

export default Section6;