
import React, { useState, useEffect } from 'react';
import { Book, Globe, FileText } from 'lucide-react';

const resources = [
  {
    category: 'Books',
    icon: Book,
    color: 'from-blue-500 to-cyan-400',
    items: [
      {
        title: 'Colossus: The Secrets of Bletchley Park\'s Codebreaking Computers',
        author: 'B. Jack Copeland'
      }
    ]
  },
  {
    category: 'Online Resources',
    icon: Globe,
    color: 'from-green-500 to-emerald-400',
    items: [
      {
        title: 'The National Museum of Computing',
        author: 'Official Website'
      }
    ]
  },
  {
    category: 'Academic Papers',
    icon: FileText,
    color: 'from-amber-500 to-yellow-400',
    items: [
      {
        title: 'The Colossus Computer 1943-1996',
        author: 'Tommy Flowers (IEEE Annals)'
      }
    ]
  }
];

const ResourcesSlide = () => {
  const [visibleCategories, setVisibleCategories] = useState<number[]>([]);

  useEffect(() => {
    resources.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCategories(prev => [...prev, index]);
      }, index * 300);
    });
  }, []);

  return (
    <div className="h-full w-full px-4 py-6 overflow-y-auto">
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-3">
            <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
              Resources & Further Reading
            </span>
          </h2>
          <p className="text-base text-slate-300 max-w-2xl mx-auto">
            Essential sources to deepen your understanding of Colossus
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resources.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            const isVisible = visibleCategories.includes(categoryIndex);
            const item = category.items[0];

            return (
              <div
                key={category.category}
                className={`transform transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${categoryIndex * 150}ms` }}
              >
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 h-full">
                  <div className="flex items-center mb-4">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${category.color} p-0.5 mr-3`}>
                      <div className="w-full h-full bg-slate-900 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.category}</h3>
                  </div>

                  <div className="bg-slate-700/30 p-4 rounded-lg border border-slate-600/30">
                    <h4 className="text-base font-semibold text-white leading-tight mb-2">
                      {item.title}
                    </h4>
                    <p className="text-slate-400 text-sm font-medium">{item.author}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResourcesSlide;
