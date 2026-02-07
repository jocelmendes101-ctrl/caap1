
import React, { useState } from 'react';
import { Menu, ChevronLeft, Home } from 'lucide-react';
import { Page } from './types';
import { NAV_ITEMS } from './constants';
import HomeContent from './pages/Home';
import AboutContent from './pages/About';
import SimpleInterest from './pages/SimpleInterest';
import CompoundInterest from './pages/CompoundInterest';
import Amortization from './pages/Amortization';
import Investment from './pages/Investment';
import Converter from './pages/Converter';
import SalaryCalculator from './pages/SalaryCalculator';
import BusinessViability from './pages/BusinessViability';
import StudyOrg from './pages/StudyOrg';
import ChatJC from './pages/ChatJC';
import Theory from './pages/Theory';
import News from './pages/News';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (currentPage) {
      case 'home': return <HomeContent onNavigate={setCurrentPage} />;
      case 'about': return <AboutContent />;
      case 'simple': return <SimpleInterest />;
      case 'compound': return <CompoundInterest />;
      case 'amortization': return <Amortization />;
      case 'investment': return <Investment />;
      case 'converter': return <Converter />;
      case 'salary': return <SalaryCalculator />;
      case 'business': return <BusinessViability />;
      case 'study': return <StudyOrg />;
      case 'chat': return <ChatJC />;
      case 'theory': return <Theory />;
      case 'news': return <News />;
      default: return <HomeContent onNavigate={setCurrentPage} />;
    }
  };

  const activeLabel = NAV_ITEMS.find(i => i.id === currentPage)?.label || 'CA app';

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans">
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsSidebarOpen(false)} />
      )}

      <aside className={`
        fixed lg:static inset-y-0 left-0 w-72 bg-slate-900 text-white z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-6 border-b border-slate-800">
          <h1 className="text-2xl font-black tracking-tighter text-blue-500">CA app</h1>
          <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-widest font-bold">Contabilidade & Gestão</p>
        </div>
        
        <nav className="p-4 space-y-6">
          {['', 'Cálculos', 'Ferramentas'].map((cat) => (
            <div key={cat} className="space-y-1">
              {cat && <p className="px-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">{cat}</p>}
              {NAV_ITEMS.filter(i => (i.category || '') === cat).map((item) => (
                <button
                  key={item.id}
                  onClick={() => { setCurrentPage(item.id); setIsSidebarOpen(false); }}
                  className={`
                    w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all
                    ${currentPage === item.id 
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' 
                      : 'text-slate-400 hover:bg-slate-800 hover:text-white'}
                  `}
                >
                  {item.icon}
                  <span className="font-medium text-sm">{item.label}</span>
                </button>
              ))}
            </div>
          ))}
        </nav>
      </aside>

      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <header className="h-16 bg-white border-b flex items-center justify-between px-6 sticky top-0 z-30 shadow-sm">
          <div className="flex items-center">
            <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden p-2 -ml-2 text-slate-600 hover:bg-slate-100 rounded-lg">
              <Menu size={24} />
            </button>
            <div className="flex items-center space-x-2 ml-2 lg:ml-0">
              {currentPage !== 'home' && (
                <button onClick={() => setCurrentPage('home')} className="p-1 hover:bg-slate-100 rounded-full transition-colors hidden sm:block">
                  <ChevronLeft size={20} className="text-slate-400" />
                </button>
              )}
              <h2 className="text-lg font-bold text-slate-800">{activeLabel}</h2>
            </div>
          </div>
        </header>

        <section className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-2 duration-500">
            {renderContent()}
          </div>
        </section>

        {currentPage !== 'home' && (
          <button
            onClick={() => setCurrentPage('home')}
            className="fixed bottom-6 right-6 lg:hidden bg-slate-900 text-white px-5 py-3 rounded-full shadow-2xl flex items-center space-x-2 z-40 border border-slate-700 active:scale-95"
          >
            <Home size={18} />
            <span className="text-sm font-semibold">Início</span>
          </button>
        )}
      </main>
    </div>
  );
};

export default App;
