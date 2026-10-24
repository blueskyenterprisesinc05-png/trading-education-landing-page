'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight, Check, ChevronDown, Minus, Send, Sparkles } from 'lucide-react'
import { brand } from '@/lib/brand'

const observations = [
  ['01', 'TOO MUCH INPUT', 'Competing interpretations, indicators and market opinions create noise.'],
  ['02', 'LATE INTERPRETATION', 'The significance of price movement only becomes obvious after the reaction.'],
  ['03', 'NO CONSISTENT SEQUENCE', 'Without a framework, interpretation changes from one trade to another.'],
]

const stages = [
  ['01', 'Liquidity', 'Study areas around previous highs and lows where liquidity may be concentrated.'],
  ['02', 'Structure', 'Observe breaks of previous highs or lows through our BOS framework.'],
  ['03', 'Reaction + blocks', 'Study reaction and relevant liquidity blocks for invalidation and risk planning.'],
]

function CommunityLink({ className = '' }: { className?: string }) {
  const configured = Boolean(brand.telegramUrl)
  return configured ? (
    <a className={className} href={brand.telegramUrl} target="_blank" rel="noreferrer noopener">
      Join the Community <ArrowUpRight aria-hidden="true" />
    </a>
  ) : (
    <button className={className} type="button" onClick={() => window.alert('Telegram destination not configured yet. Add NEXT_PUBLIC_TELEGRAM_URL to enable this link.')}>
      Join the Community <ArrowUpRight aria-hidden="true" />
    </button>
  )
}

function LiquidityMap({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? 'chart chart-compact' : 'chart'} role="img" aria-label="Educational illustration showing liquidity near a prior high, a break of structure and a reaction block.">
      <div className="chart-topline"><span>EUR / INDEX</span><span>EDUCATIONAL ILLUSTRATION</span></div>
      <svg viewBox="0 0 620 350" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <g className="grid"><path d="M20 55H600M20 115H600M20 175H600M20 235H600M20 295H600M80 20V330M180 20V330M280 20V330M380 20V330M480 20V330M580 20V330" /></g>
        <path className="liquidity-line" d="M70 85H230M115 250H340" />
        <path className="price-line" d="M22 278C55 266 58 218 87 225C115 232 112 278 140 264C168 250 153 200 180 210C211 222 199 156 231 167C264 178 245 125 277 139C311 154 284 198 319 210C349 220 339 269 370 252C402 235 388 161 420 174C451 187 442 105 473 120C500 133 496 73 526 88C550 101 548 154 575 147C588 144 592 125 600 115" />
        <path className="reaction-line" d="M420 174C451 187 442 105 473 120C500 133 496 73 526 88" />
        <path className="block" d="M405 196H480V237H405V196Z" />
        <circle className="marker-dot" cx="473" cy="120" r="5" />
        <path className="callout" d="M473 120V54H530" /><path className="callout" d="M438 216H365V280" />
        <text x="537" y="50">LIQUIDITY / PRIOR HIGH</text><text x="290" y="302">REACTION BLOCK</text><text x="31" y="73">HIGH</text><text x="31" y="244">LOW</text>
      </svg>
      <div className="chart-foot"><span><i className="legend-dot" /> Price path</span><span><i className="legend-line" /> Area of interest</span></div>
    </div>
  )
}

export default function Page() {
  const [sticky, setSticky] = useState(false)
  const [finalCtaVisible, setFinalCtaVisible] = useState(false)
  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 620)
    const finalCta = document.querySelector('.final-cta')
    const observer = finalCta ? new IntersectionObserver(([entry]) => setFinalCtaVisible(entry.isIntersecting), { threshold: 0.15 }) : null
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    if (finalCta && observer) observer.observe(finalCta)
    return () => { window.removeEventListener('scroll', onScroll); observer?.disconnect() }
  }, [])
  return (
    <main>
      <nav className="nav shell"><a className="wordmark" href="#top">{brand.name}<span>.</span></a><CommunityLink className="nav-cta" /></nav>
      <section id="top" className="hero shell section-grid">
        <div className="hero-copy"><h1>What if you&apos;ve been making trading <em>harder than it needs to be?</em></h1><p className="lede">Explore a liquidity-based framework for understanding price movement, market structure, and the reasoning behind trading decisions.</p><CommunityLink className="primary-cta" /><p className="micro"><Send aria-hidden="true" /> Join our community on Telegram.</p></div>
        <div className="hero-visual"><LiquidityMap /><div className="visual-note"><span>01</span><p>Read the relationship<br />between levels and reaction.</p></div></div>
      </section>

      <section className="section problem shell"><div className="split-heading"><div><p className="eyebrow">THE PROBLEM IS NOT A LACK OF SIGNALS</p><h2>More information<br /><em>does not create</em><br />more clarity.</h2></div><p className="section-copy">Charts are crowded with opinions, indicators, and after-the-fact explanations. Without a repeatable process, every move becomes another reason to hesitate, chase, or change the plan.</p></div><div className="problem-story"><div className="story-chart"><LiquidityMap compact /><div className="noise-lines"><Minus /><Minus /><Minus /></div></div><div className="observations">{observations.map(([n, title, text]) => <article key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div><p className="closing-line">The goal is not to predict every move. It is to study what price is doing with more consistency.</p></section>

      <section className="section framework shell"><div className="section-intro"><p className="eyebrow">THE FRAMEWORK</p><h2>A clearer way<br /><em>to interpret price.</em></h2><p className="section-copy">Our approach connects liquidity, market structure, and price reaction into a framework for studying market behavior.</p></div><div className="stages">{stages.map(([n, title, text], i) => <article className="stage" key={n}><div className="stage-number">{n}<span>{i < 2 ? '→' : '↗'}</span></div><div className="mini-chart"><span className={`mini-path path-${i + 1}`} /></div><h3>{title}</h3><p>{text}</p></article>)}</div></section>

      <section className="section evidence shell"><div className="section-intro evidence-intro"><p className="eyebrow">THE EVIDENCE</p><h2>Don&apos;t just take<br /><em>our word for it.</em></h2><p className="section-copy">Explore how the framework can be illustrated on a chart, and discover the kind of community learning experience we are building.</p></div><div className="analysis-card"><div className="analysis-header"><div><span className="label">ILLUSTRATIVE ANALYSIS</span><h3>Reading a structural shift</h3></div><span className="disclaimer">Not a real trade result.</span></div><div className="analysis-grid"><div className="analysis-chart"><LiquidityMap compact /></div><dl><div><dt>MARKET</dt><dd>Example index</dd></div><div><dt>TIMEFRAME</dt><dd>Educational view</dd></div><div><dt>LIQUIDITY AREA</dt><dd>Previous high / low</dd></div><div><dt>STRUCTURAL OBSERVATION</dt><dd>Break of Structure</dd></div><div><dt>LIQUIDITY BLOCK</dt><dd>Reaction area</dd></div><div><dt>INVALIDATION</dt><dd>Defined before entry</dd></div></dl></div></div><div className="testimonial-grid">{[1, 2, 3].map((n) => <div className="testimonial" key={n}><Sparkles aria-hidden="true" /><p>Verified community feedback will appear here.</p><span>Future member feedback slot {n}</span></div>)}</div></section>

      <section className="section community shell"><div className="community-panel"><div><p className="eyebrow">BEYOND THE CHART</p><h2>Learning doesn&apos;t<br /><em>have to happen alone.</em></h2><p className="section-copy">Join a community built around studying price, discussing market structure, and developing a more deliberate approach to trading.</p><CommunityLink className="primary-cta" /><p className="micro">Continue on Telegram.</p></div><div className="community-list">{[['01', 'Market Breakdowns', 'Explore educational chart analysis and liquidity concepts.'], ['02', 'Trading Discussions', 'Discuss market interpretations and examine different perspectives.'], ['03', 'Structured Learning', 'Connect individual concepts into a consistent analytical framework.']].map(([n, t, d]) => <div key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div><ChevronDown aria-hidden="true" /></div>)}</div></div></section>

      <section className="final-cta shell"><div className="final-rule" /><p className="eyebrow">START WITH A BETTER QUESTION</p><h2>Ready to see the market<br /><em>from another perspective?</em></h2><p>Explore liquidity, understand market structure, and connect with a community focused on disciplined learning.</p><CommunityLink className="primary-cta" /></section>
      <footer className="footer shell"><a className="wordmark" href="#top">{brand.name}<span>.</span></a><p>Clarity over noise.<br />Process over predictions.</p><p className="risk">Trading involves substantial risk and potential financial loss. Content is educational and does not constitute personalized investment advice. Past performance does not guarantee future results.</p><span className="copyright">© {new Date().getFullYear()} {brand.name}</span></footer>
      {sticky && !finalCtaVisible && <div className="sticky-cta"><CommunityLink className="primary-cta" /></div>}
    </main>
  )
}
