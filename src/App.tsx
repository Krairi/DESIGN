import { motion } from 'motion/react';
import { ArrowRight, X, CheckCircle2, Users, Utensils, Package, ShoppingCart, CheckSquare, Network } from 'lucide-react';

const Logo = () => (
  <div className="flex items-center gap-3">
    <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="19" stroke="var(--color-champagne)" strokeWidth="1" strokeOpacity="0.4"/>
      <circle cx="20" cy="20" r="11" stroke="var(--color-champagne)" strokeWidth="1" strokeOpacity="0.2"/>
      <rect x="17" y="17" width="6" height="6" fill="var(--color-champagne)" />
      <path d="M20 0L20 9M20 31L20 40M0 20L9 20M31 20L40 20" stroke="var(--color-champagne)" strokeWidth="1" strokeOpacity="0.4"/>
    </svg>
    <span className="font-sans font-medium tracking-[0.2em] text-sm uppercase text-pearl">Domyli</span>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-obsidian text-pearl font-sans selection:bg-brass selection:text-obsidian">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-obsidian/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Logo />
          <div className="hidden md:flex items-center gap-8 text-sm font-light text-mineral">
            <a href="#systeme" className="hover:text-pearl transition-colors">Le Système</a>
            <a href="#piliers" className="hover:text-pearl transition-colors">Architecture</a>
            <a href="#fonctionnement" className="hover:text-pearl transition-colors">Déploiement</a>
            <a href="#tarifs" className="hover:text-pearl transition-colors">Licences</a>
          </div>
          <button className="text-sm font-medium text-obsidian bg-champagne px-4 py-2 rounded-sm hover:bg-white transition-colors">
            Initialiser
          </button>
        </div>
      </nav>

      <main>
        {/* Section 1: Hero */}
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-16">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brass/10 rounded-full blur-[120px] pointer-events-none" />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 text-center max-w-4xl px-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-champagne animate-pulse" />
              <span className="text-xs font-mono text-mineral uppercase tracking-wider">Système d'Exploitation du Foyer</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-pearl mb-8 leading-[1.1] text-balance">
              Transformez le chaos domestique en <span className="text-gradient-champagne">exécution invisible</span>.
            </h1>
            
            <p className="text-lg md:text-xl text-mineral max-w-2xl mx-auto mb-12 font-light leading-relaxed text-balance">
              DOMYLI est le système qui structure, coordonne et pilote votre foyer avec calme, intelligence et précision.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-4 bg-pearl text-obsidian font-medium rounded-sm hover:bg-white transition-colors flex items-center justify-center gap-2">
                Initialiser mon foyer <ArrowRight size={18} />
              </button>
              <button className="px-8 py-4 bg-transparent text-pearl border border-white/10 rounded-sm hover:bg-white/5 transition-colors">
                Découvrir le système
              </button>
            </div>
          </motion.div>
          
          {/* Abstract Dashboard Mockup Hint */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="mt-24 w-full max-w-5xl px-6 relative z-10 hidden md:block"
          >
            <div className="aspect-[21/9] rounded-lg border border-white/10 bg-kernel/80 backdrop-blur-xl overflow-hidden shadow-2xl shadow-black/50 flex flex-col">
              <div className="h-12 border-b border-white/5 flex items-center px-4 gap-2 bg-obsidian/50">
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
              </div>
              <div className="flex-1 p-8 grid grid-cols-12 gap-6">
                <div className="col-span-3 space-y-6 border-r border-white/5 pr-6">
                  <div className="space-y-3">
                    <div className="h-3 w-1/3 bg-white/10 rounded-sm" />
                    <div className="h-8 w-full bg-white/5 rounded-sm" />
                    <div className="h-8 w-full bg-white/5 rounded-sm" />
                    <div className="h-8 w-full bg-champagne/10 border border-champagne/20 rounded-sm" />
                  </div>
                  <div className="space-y-3 pt-6 border-t border-white/5">
                    <div className="h-3 w-1/2 bg-white/10 rounded-sm" />
                    <div className="h-8 w-full bg-white/5 rounded-sm" />
                    <div className="h-8 w-full bg-white/5 rounded-sm" />
                  </div>
                </div>
                <div className="col-span-9 grid grid-cols-3 gap-6">
                  <div className="col-span-2 h-full bg-white/5 rounded-sm border border-white/5 p-6 flex flex-col">
                    <div className="h-4 w-1/4 bg-white/10 rounded-sm mb-6" />
                    <div className="flex-1 space-y-4">
                      <div className="h-12 w-full bg-white/5 rounded-sm" />
                      <div className="h-12 w-full bg-white/5 rounded-sm" />
                      <div className="h-12 w-full bg-white/5 rounded-sm" />
                    </div>
                  </div>
                  <div className="col-span-1 space-y-6">
                    <div className="h-1/2 bg-white/5 rounded-sm border border-white/5 p-6">
                      <div className="h-4 w-1/2 bg-white/10 rounded-sm mb-4" />
                      <div className="h-16 w-16 rounded-full border-4 border-champagne/30 border-t-champagne mx-auto mt-4" />
                    </div>
                    <div className="h-1/2 bg-brass/5 rounded-sm border border-brass/10 p-6">
                      <div className="h-4 w-1/2 bg-champagne/40 rounded-sm mb-4" />
                      <div className="space-y-2">
                        <div className="h-2 w-full bg-champagne/20 rounded-sm" />
                        <div className="h-2 w-4/5 bg-champagne/20 rounded-sm" />
                        <div className="h-2 w-full bg-champagne/20 rounded-sm" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Section 2: Problem vs System */}
        <section id="systeme" className="py-32 px-6 relative border-t border-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-pearl mb-4">Le problème n'est pas votre motivation.</h2>
              <p className="text-xl text-mineral font-light">C'est l'absence de système.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 p-10 rounded-lg border border-white/5 bg-kernel/50">
                <h3 className="text-sm font-mono text-mineral uppercase tracking-widest border-b border-white/5 pb-4">État par défaut : Chaos</h3>
                <ul className="space-y-6">
                  {['Oubli & charge mentale', 'Friction & désorganisation', 'Répétition & arbitrage permanent'].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-mineral">
                      <span className="mt-1 text-white/20"><X size={18} /></span>
                      <span className="text-lg font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-8 p-10 rounded-lg border border-brass/20 bg-brass/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brass/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                <h3 className="text-sm font-mono text-champagne uppercase tracking-widest border-b border-brass/10 pb-4 relative z-10">État gouverné : DOMYLI</h3>
                <ul className="space-y-6 relative z-10">
                  {['Structure & règles', 'Orchestration & visibilité', 'Calme & exécution'].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-pearl">
                      <span className="mt-1 text-champagne"><CheckCircle2 size={18} /></span>
                      <span className="text-lg font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Value Chain */}
        <section className="py-32 px-6 bg-kernel">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-pearl mb-16 text-balance">
              DOMYLI transforme les entrées du foyer en <span className="text-champagne">organisation gouvernée</span>.
            </h2>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              <div className="p-8 rounded-sm border border-white/10 bg-surface w-full md:w-72">
                <p className="text-sm font-mono text-mineral mb-4 uppercase tracking-wider">Entrées</p>
                <p className="text-pearl font-light">Profils, contraintes, stocks, besoins</p>
              </div>
              
              <div className="text-white/20 rotate-90 md:rotate-0 py-4 md:py-0">
                <ArrowRight size={24} />
              </div>
              
              <div className="p-8 rounded-sm border border-brass/30 bg-brass/5 w-full md:w-72 relative glow-core">
                <p className="text-sm font-mono text-champagne mb-4 uppercase tracking-wider">Moteur DOMYLI</p>
                <p className="text-pearl font-light">Orchestration, règles, planification</p>
              </div>
              
              <div className="text-white/20 rotate-90 md:rotate-0 py-4 md:py-0">
                <ArrowRight size={24} />
              </div>
              
              <div className="p-8 rounded-sm border border-white/10 bg-surface w-full md:w-72">
                <p className="text-sm font-mono text-mineral mb-4 uppercase tracking-wider">Sorties</p>
                <p className="text-pearl font-light">Tâches, courses, repas, calme</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Bento Grid */}
        <section id="piliers" className="py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-pearl mb-4">L'architecture du système</h2>
              <p className="text-xl text-mineral font-light max-w-2xl">Six piliers interconnectés pour une gouvernance totale.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Profils */}
              <div className="md:col-span-2 p-10 rounded-lg border border-white/5 bg-kernel hover:border-white/10 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                  <Users className="text-champagne" size={24} />
                </div>
                <h3 className="text-2xl font-medium text-pearl mb-3">Profils & Contraintes</h3>
                <p className="text-mineral font-light leading-relaxed text-lg">Cartographiez les membres du foyer, leurs rôles, leurs emplois du temps et leurs spécificités alimentaires. Le système s'adapte à votre réalité humaine.</p>
              </div>
              
              {/* Repas */}
              <div className="p-10 rounded-lg border border-white/5 bg-kernel hover:border-white/10 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                  <Utensils className="text-champagne" size={24} />
                </div>
                <h3 className="text-xl font-medium text-pearl mb-3">Repas & Planification</h3>
                <p className="text-mineral font-light leading-relaxed">Générez des menus intelligents basés sur vos stocks réels et les contraintes de chacun.</p>
              </div>
              
              {/* Stocks */}
              <div className="p-10 rounded-lg border border-white/5 bg-kernel hover:border-white/10 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                  <Package className="text-champagne" size={24} />
                </div>
                <h3 className="text-xl font-medium text-pearl mb-3">Stocks & Inventaire</h3>
                <p className="text-mineral font-light leading-relaxed">Une traçabilité exacte de ce que vous possédez, pour ne jamais manquer ni gaspiller.</p>
              </div>
              
              {/* Courses */}
              <div className="p-10 rounded-lg border border-white/5 bg-kernel hover:border-white/10 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                  <ShoppingCart className="text-champagne" size={24} />
                </div>
                <h3 className="text-xl font-medium text-pearl mb-3">Courses & Réapprovisionnement</h3>
                <p className="text-mineral font-light leading-relaxed">Listes générées automatiquement selon les seuils critiques et les menus prévus.</p>
              </div>
              
              {/* Tâches */}
              <div className="p-10 rounded-lg border border-white/5 bg-kernel hover:border-white/10 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                  <CheckSquare className="text-champagne" size={24} />
                </div>
                <h3 className="text-xl font-medium text-pearl mb-3">Tâches & Exécution</h3>
                <p className="text-mineral font-light leading-relaxed">Distribution déterministe des actions d'entretien selon les rôles et disponibilités.</p>
              </div>
              
              {/* Coordination */}
              <div className="md:col-span-3 p-10 rounded-lg border border-brass/20 bg-brass/5 hover:border-brass/30 transition-colors group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-brass/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-champagne/10 flex items-center justify-center mb-6">
                    <Network className="text-champagne" size={24} />
                  </div>
                  <h3 className="text-2xl font-medium text-pearl mb-3">Coordination du foyer</h3>
                  <p className="text-mineral font-light leading-relaxed text-lg max-w-4xl">Le moteur central qui relie toutes les données. Une alerte de stock bas génère une ligne de course, qui valide un repas, qui assigne une tâche de préparation. Une orchestration silencieuse et continue.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: User Feeling */}
        <section className="py-32 px-6 bg-surface border-y border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-pearl mb-8 leading-tight">
              Moins de charge mentale.<br/>
              <span className="text-mineral">Plus de stabilité domestique.</span>
            </h2>
            <p className="text-xl text-mineral font-light leading-relaxed">
              DOMYLI n'ajoute pas des tâches à votre journée. Il absorbe la complexité de l'organisation pour ne vous restituer que des actions claires, au bon moment. Retrouvez le calme d'un foyer qui se pilote de lui-même.
            </p>
          </div>
        </section>

        {/* Section 6: How it works */}
        <section id="fonctionnement" className="py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-pearl mb-20 text-center">Déployer votre infrastructure</h2>
            
            <div className="grid md:grid-cols-4 gap-12 md:gap-8">
              {[
                { step: '01', title: 'Créer le foyer', desc: 'Initialisez votre espace sécurisé et invitez les membres.' },
                { step: '02', title: 'Structurer', desc: 'Renseignez les profils, les rôles et les contraintes de base.' },
                { step: '03', title: 'Connecter', desc: 'Ajoutez vos stocks initiaux et vos préférences de repas.' },
                { step: '04', title: 'Piloter', desc: 'Laissez le système orchestrer et générer les actions.' }
              ].map((item, i) => (
                <div key={i} className="relative">
                  <div className="text-6xl font-mono font-light text-white/5 mb-6">{item.step}</div>
                  <h3 className="text-xl font-medium text-pearl mb-3">{item.title}</h3>
                  <p className="text-mineral font-light leading-relaxed">{item.desc}</p>
                  {i < 3 && <div className="hidden md:block absolute top-10 left-[calc(100%-2rem)] w-[calc(100%+1rem)] h-[1px] bg-gradient-to-r from-white/10 to-transparent" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Pricing */}
        <section id="tarifs" className="py-32 px-6 bg-kernel border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-pearl mb-4">Un investissement dans votre tranquillité</h2>
              <p className="text-xl text-mineral font-light">Une tarification simple, transparente et souveraine.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Plan 1 */}
              <div className="p-10 rounded-lg border border-white/5 bg-surface flex flex-col">
                <h3 className="text-2xl font-medium text-pearl mb-2">Licence Foyer</h3>
                <p className="text-mineral font-light mb-8">Pour une gouvernance domestique complète.</p>
                <div className="mb-10">
                  <span className="text-5xl font-medium text-pearl">9€</span>
                  <span className="text-mineral"> / mois</span>
                </div>
                <ul className="space-y-5 mb-10 flex-1">
                  {['Membres illimités', 'Gestion des stocks & repas', 'Orchestration des tâches', 'Support prioritaire'].map((feature, i) => (
                    <li key={i} className="flex items-center gap-4 text-mineral font-light">
                      <CheckCircle2 size={18} className="text-champagne shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-4 bg-white/5 text-pearl border border-white/10 rounded-sm hover:bg-white/10 transition-colors font-medium">
                  Commencer l'essai
                </button>
              </div>
              
              {/* Plan 2 */}
              <div className="p-10 rounded-lg border border-brass/30 bg-brass/5 relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-brass/10 to-transparent opacity-50 pointer-events-none" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="self-start px-3 py-1 bg-champagne text-obsidian text-xs font-mono uppercase tracking-wider rounded-sm mb-6">Recommandé</div>
                  <h3 className="text-2xl font-medium text-pearl mb-2">Licence Perpétuelle</h3>
                  <p className="text-mineral font-light mb-8">Acquérez votre système une fois pour toutes.</p>
                  <div className="mb-10">
                    <span className="text-5xl font-medium text-pearl">249€</span>
                    <span className="text-mineral"> / unique</span>
                  </div>
                  <ul className="space-y-5 mb-10 flex-1">
                    {['Toutes les fonctionnalités', 'Mises à jour à vie', 'Hébergement souverain', 'Conciergerie d\'installation'].map((feature, i) => (
                      <li key={i} className="flex items-center gap-4 text-pearl font-light">
                        <CheckCircle2 size={18} className="text-champagne shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-4 bg-champagne text-obsidian font-medium rounded-sm hover:bg-white transition-colors">
                    Acquérir le système
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Final CTA */}
        <section className="py-40 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-kernel" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brass/10 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-pearl mb-10 text-balance leading-tight">
              N’essayez pas une application de plus.<br/>
              <span className="text-gradient-champagne">Déployez votre système.</span>
            </h2>
            <button className="px-10 py-5 bg-pearl text-obsidian text-lg font-medium rounded-sm hover:bg-white transition-colors inline-flex items-center gap-3">
              Initialiser mon foyer <ArrowRight size={20} />
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 bg-obsidian">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <Logo />
          <div className="text-mineral font-light text-sm">
            © {new Date().getFullYear()} DOMYLI. Système d'Exploitation du Foyer.
          </div>
          <div className="flex gap-6 text-sm font-light text-mineral">
            <a href="#" className="hover:text-pearl transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-pearl transition-colors">Conditions</a>
            <a href="#" className="hover:text-pearl transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
