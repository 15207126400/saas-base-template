import { useTranslations } from 'next-intl';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const faqs = [
  {
    questionKey: 'howToPlay',
    answerKey: 'howToPlayAnswer'
  },
  {
    questionKey: 'controls',
    answerKey: 'controlsAnswer'
  },
  {
    questionKey: 'rules',
    answerKey: 'rulesAnswer'
  },
  {
    questionKey: 'death',
    answerKey: 'deathAnswer'
  },
  {
    questionKey: 'win',
    answerKey: 'winAnswer'
  }
];

export default function Faq() {
  const t = useTranslations('Faq');
  
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 bg-gradient-to-r from-pink-500 to-violet-500 text-transparent bg-clip-text">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            {t('description')}
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map(({ questionKey, answerKey }) => (
            <AccordionItem 
              key={questionKey} 
              value={questionKey}
              className="border-gray-700 px-6 py-2 rounded-lg hover:bg-gray-800/50 transition-colors"
            >
              <AccordionTrigger className="text-gray-100 hover:text-pink-500 hover:no-underline">
                {t(questionKey)}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                {t(answerKey)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
} 