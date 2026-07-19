/* LEGACY Pro Wrestling v8.0.6 — player-facing onboarding terminology override */
(function () {
  function installChooseWrestlerOverride() {
    if (typeof window.gauntletLiveFounderSelect !== 'function') return false;

    window.gauntletLiveFounderSelect = function () {
      const wrestlers = (window.LIVE_FOUNDERS || [])
        .map(id => window.liveFounder(id))
        .filter(Boolean);

      window.render(`
        <section class="panel live-founder-screen lpw-founder-clean">
          <button class="shell-back" onclick="gauntletLiveHome()">← CAREER</button>
          <div class="tv-kicker">NEW CAREER</div>
          <h1>CHOOSE YOUR WRESTLER</h1>
          <p class="sub">This wrestler becomes the first member of your stable.</p>
          <div class="live-founder-grid">
            ${wrestlers.map(w => `
              <button class="live-founder-card" onclick="gauntletLiveChooseFounder('${w.id}')">
                ${window.imageWithFallback(w, 'full', 'art-full', 'quickMatch')}
                <span>
                  <small>${w.title}</small>
                  <b>${w.name}</b>
                  <em>${w.signature}</em>
                </span>
              </button>
            `).join('')}
          </div>
        </section>
      `);
    };
    return true;
  }

  if (!installChooseWrestlerOverride()) {
    window.addEventListener('DOMContentLoaded', installChooseWrestlerOverride, { once: true });
  }
})();
