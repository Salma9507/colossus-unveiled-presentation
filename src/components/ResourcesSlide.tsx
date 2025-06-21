
import React, { useState, useEffect } from 'react';
import { Book, Globe, Video, FileText, ExternalLink } from 'lucide-react';

const resources = [
  {
    category: 'Books',
    icon: Book,
    color: 'from-blue-500 to-cyan-400',
    items: [
      {
        title: 'Colossus: The Secrets of Bletchley Park\'s Codebreaking Computers',
        author: 'B. Jack Copeland',
        description: 'Comprehensive history of Colossus and its impact',
        type: 'Academic'
      },
      {
        title: 'Station X: The Codebreakers of Bletchley Park',
        author: 'Michael Smith',
        description: 'Broader context of Bletchley Park operations',
        type: 'Popular'
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
        author: 'Official Website',
        description: 'Home to rebuilt Colossus Mark II computer',
        type: 'Museum'
      },
      {
        title: 'Bletchley Park Trust',
        author: 'Heritage Site',
        description: 'Official historical records and archives',
        type: 'Archive'
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
        author: 'Tommy Flowers (IEEE Annals)',
        description: 'First-hand account by the chief engineer',
        type: 'Primary Source'
      },
      {
        title: 'Breaking Teleprinter Ciphers at Bletchley Park',
        author: 'Various Authors',
        description: 'Technical details of the decryption process',
        type: 'Technical'
      }
    ]
  },
  {
    category: 'Documentaries',
    icon: Video,
    color: 'from-purple-500 to-pink-400',
    items: [
      {
        title: 'Code-Breakers: Bletchley Park\'s Lost Heroes',
        author: 'BBC Documentary',
        description: 'Focuses on unsung heroes including Tommy Flowers',
        type: 'Documentary'
      },
      {
        title: 'The Real Enigma Heroes',
        author: 'Channel 4',
        description: 'Broader context of WWII codebreaking efforts',
        type: 'Historical'
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
    <div className="h-full w-full px-3 py-2 overflow-y-auto">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold mb-2">
            <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
              Resources & Further Reading
            </span>
          </h2>
          <p className="text-sm text-slate-300 max-w-3xl mx-auto">
            Explore these sources to deepen your understanding of Colossus and its historical significance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          {resources.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            const isVisible = visibleCategories.includes(categoryIndex);

            return (
              <div
                key={category.category}
                className={`transform transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${categoryIndex * 150}ms` }}
              >
                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 h-full">
                  <div className="flex items-center mb-3">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${category.color} p-0.5 mr-3`}>
                      <div className="w-full h-full bg-slate-900 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white">{category.category}</h3>
                  </div>

                  <div className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className={`bg-slate-700/30 p-3 rounded-lg border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300 transform ${
                          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                        }`}
                        style={{ transitionDelay: `${(categoryIndex * 150) + (itemIndex * 100) + 300}ms` }}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-sm font-semibold text-white leading-tight flex-1 mr-2">
                            {item.title}
                          </h4>
                          <span className={`px-2 py-0.5 bg-gradient-to-r ${category.color} text-slate-900 rounded-full text-xs font-medium flex-shrink-0`}>
                            {item.type}
                          </span>
                        </div>
                        
                        <p className="text-slate-400 text-xs mb-1 font-medium">{item.author}</p>
                        <p className="text-slate-300 text-xs leading-relaxed">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Research Tips */}
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 p-4 rounded-xl border border-slate-600/30">
          <div className="flex items-center mb-3">
            <ExternalLink className="w-5 h-5 text-amber-400 mr-2" />
            <h3 className="text-lg font-bold text-amber-400">Research Tips</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-lg font-bold text-white mb-1">Visit Museums</div>
              <div className="text-slate-400 text-xs">
                The National Museum of Computing has a working Colossus replica
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-white mb-1">Primary Sources</div>
              <div className="text-slate-400 text-xs">
                Look for accounts by Tommy Flowers and other original engineers
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-white mb-1">Context Matters</div>
              <div className="text-slate-400 text-xs">
                Understanding WWII cryptography helps appreciate Colossus's impact
              </div>
            </div>
          </div>
        </div>

        {/* Citation Note */}
        <div className="text-center mt-4 p-3 bg-amber-500/10 rounded-lg border border-amber-500/20">
          <p className="text-amber-400 text-sm font-medium mb-1">Academic Citation Note</p>
          <p className="text-slate-300 text-xs">
            When citing these sources, remember that much of Colossus remained classified until the 1970s. 
            Earlier historical accounts may not include complete information about its role and capabilities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResourcesSlide;
