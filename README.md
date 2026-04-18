<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  .wrap { font-family: var(--font-sans); padding: 1rem 0 2rem; display: flex; flex-direction: column; gap: 2rem; }
  .section-title { font-size: 10px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-text-secondary); margin-bottom: 10px; }
  .row { display: flex; flex-wrap: wrap; gap: 8px; }
  .swatch { border-radius: 8px; overflow: hidden; border: 0.5px solid var(--color-border-tertiary); flex: 1; min-width: 120px; }
  .swatch-color { height: 48px; }
  .swatch-info { padding: 8px 10px; }
  .swatch-name { font-size: 12px; font-weight: 500; color: var(--color-text-primary); }
  .swatch-hex { font-size: 11px; font-family: var(--font-mono); color: var(--color-text-secondary); margin-top: 2px; }
  .swatch-role { font-size: 10px; color: var(--color-text-secondary); margin-top: 1px; }
  .divider { height: 0.5px; background: var(--color-border-tertiary); }
  .font-row { display: flex; flex-direction: column; gap: 10px; }
  .font-card { border: 0.5px solid var(--color-border-tertiary); border-radius: 10px; padding: 14px 16px; }
  .font-label { font-size: 10px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-text-secondary); margin-bottom: 6px; }
  .font-sample-sora { font-family: 'Sora', sans-serif; font-size: 22px; font-weight: 500; color: var(--color-text-primary); line-height: 1.2; }
  .font-sample-mono { font-family: 'JetBrains Mono', monospace; font-size: 15px; font-weight: 400; color: var(--color-text-primary); }
  .font-meta { font-size: 11px; font-family: var(--font-mono); color: var(--color-text-secondary); margin-top: 6px; }
  .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  .theme-card { border-radius: 12px; overflow: hidden; border: 0.5px solid var(--color-border-tertiary); }
  .theme-header { padding: 12px 14px; font-size: 11px; font-weight: 500; letter-spacing: 0.06em; text-transform: uppercase; }
  .theme-body { padding: 12px 14px; display: flex; flex-direction: column; gap: 7px; }
  .theme-row { display: flex; justify-content: space-between; align-items: center; }
  .theme-key { font-size: 11px; font-family: var(--font-mono); color: var(--color-text-secondary); }
  .theme-val { font-size: 11px; font-family: var(--font-mono); font-weight: 500; color: var(--color-text-primary); }
  .dot { display: inline-block; width: 10px; height: 10px; border-radius: 50%; margin-right: 5px; vertical-align: middle; border: 0.5px solid rgba(0,0,0,0.08); }
  .spacing-row { display: flex; flex-direction: column; gap: 6px; }
  .sp-item { display: flex; align-items: center; gap: 12px; }
  .sp-bar-wrap { flex: 1; }
  .sp-bar { height: 8px; border-radius: 4px; }
  .sp-label { font-size: 11px; font-family: var(--font-mono); color: var(--color-text-secondary); min-width: 80px; }
  .sp-val { font-size: 11px; font-family: var(--font-mono); color: var(--color-text-primary); min-width: 36px; text-align: right; }
</style>

<link href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">

<div class="wrap">

  <div>
    <div class="section-title">Typography</div>
    <div class="font-row">
      <div class="font-card">
        <div class="font-label">Display &amp; body — Sora</div>
        <div class="font-sample-sora">Mohammad Naim</div>
        <div class="font-sample-sora" style="font-weight:300; font-size:15px; margin-top:4px; color: var(--color-text-secondary);">Building modern web experiences.</div>
        <div class="font-meta">font-family: 'Sora', sans-serif · weights: 300, 400, 500, 600</div>
      </div>
      <div class="font-card">
        <div class="font-label">Monospace — JetBrains Mono</div>
        <div class="font-sample-mono">Frontend · Backend · AI / ML · Tools</div>
        <div class="font-sample-mono" style="margin-top:4px; color: var(--color-text-secondary);">2021 — 2025 &nbsp;·&nbsp; 4+ years</div>
        <div class="font-meta">font-family: 'JetBrains Mono', monospace · weights: 400, 500</div>
      </div>
    </div>
  </div>

  <div class="divider"></div>

  <div>
    <div class="section-title">Core palette — used across all sections</div>
    <div class="row">
      <div class="swatch">
        <div class="swatch-color" style="background:#1a56db;"></div>
        <div class="swatch-info">
          <div class="swatch-name">Accent blue</div>
          <div class="swatch-hex">#1a56db</div>
          <div class="swatch-role">CTAs, accent rule, dots, badges</div>
        </div>
      </div>
      <div class="swatch">
        <div class="swatch-color" style="background:#09090b;"></div>
        <div class="swatch-info">
          <div class="swatch-name">zinc-950</div>
          <div class="swatch-hex">#09090b</div>
          <div class="swatch-role">Dark bg, light btn fill</div>
        </div>
      </div>
      <div class="swatch">
        <div class="swatch-color" style="background:#18181b;"></div>
        <div class="swatch-info">
          <div class="swatch-name">zinc-900</div>
          <div class="swatch-hex">#18181b</div>
          <div class="swatch-role">Dark cards, light btn bg</div>
        </div>
      </div>
      <div class="swatch">
        <div class="swatch-color" style="background:#ffffff; border:0.5px solid #e4e4e7;"></div>
        <div class="swatch-info">
          <div class="swatch-name">white</div>
          <div class="swatch-hex">#ffffff</div>
          <div class="swatch-role">Light bg, dark btn fill</div>
        </div>
      </div>
    </div>
  </div>

  <div>
    <div class="section-title">Semantic accent colors</div>
    <div class="row">
      <div class="swatch">
        <div class="swatch-color" style="background:#eff6ff;"></div>
        <div class="swatch-info">
          <div class="swatch-name">blue-50</div>
          <div class="swatch-hex">#eff6ff</div>
          <div class="swatch-role">Education badge bg (light)</div>
        </div>
      </div>
      <div class="swatch">
        <div class="swatch-color" style="background:#2563eb;"></div>
        <div class="swatch-info">
          <div class="swatch-name">blue-600</div>
          <div class="swatch-hex">#2563eb</div>
          <div class="swatch-role">Education badge text (light)</div>
        </div>
      </div>
      <div class="swatch">
        <div class="swatch-color" style="background:#172554;"></div>
        <div class="swatch-info">
          <div class="swatch-name">blue-950</div>
          <div class="swatch-hex">#172554</div>
          <div class="swatch-role">Education badge bg (dark)</div>
        </div>
      </div>
      <div class="swatch">
        <div class="swatch-color" style="background:#60a5fa;"></div>
        <div class="swatch-info">
          <div class="swatch-name">blue-400</div>
          <div class="swatch-hex">#60a5fa</div>
          <div class="swatch-role">Education badge text (dark)</div>
        </div>
      </div>
    </div>
    <div class="row" style="margin-top:8px;">
      <div class="swatch">
        <div class="swatch-color" style="background:#f0fdf4;"></div>
        <div class="swatch-info">
          <div class="swatch-name">emerald-50</div>
          <div class="swatch-hex">#f0fdf4</div>
          <div class="swatch-role">Work badge bg (light)</div>
        </div>
      </div>
      <div class="swatch">
        <div class="swatch-color" style="background:#059669;"></div>
        <div class="swatch-info">
          <div class="swatch-name">emerald-600</div>
          <div class="swatch-hex">#059669</div>
          <div class="swatch-role">Work badge text (light)</div>
        </div>
      </div>
      <div class="swatch">
        <div class="swatch-color" style="background:#022c22;"></div>
        <div class="swatch-info">
          <div class="swatch-name">emerald-950</div>
          <div class="swatch-hex">#022c22</div>
          <div class="swatch-role">Work badge bg (dark)</div>
        </div>
      </div>
      <div class="swatch">
        <div class="swatch-color" style="background:#34d399;"></div>
        <div class="swatch-info">
          <div class="swatch-name">emerald-400</div>
          <div class="swatch-hex">#34d399</div>
          <div class="swatch-role">Work badge text (dark)</div>
        </div>
      </div>
    </div>
  </div>

  <div class="divider"></div>

  <div>
    <div class="section-title">Light &amp; dark theme tokens</div>
    <div class="grid2">
      <div class="theme-card">
        <div class="theme-header" style="background:#ffffff; color:#09090b; border-bottom:0.5px solid #e4e4e7;">Light mode</div>
        <div class="theme-body" style="background:#fafafa;">
          <div class="theme-row"><span class="theme-key">page bg</span><span class="theme-val"><span class="dot" style="background:#ffffff; border-color:#ccc;"></span>#ffffff</span></div>
          <div class="theme-row"><span class="theme-key">card bg</span><span class="theme-val"><span class="dot" style="background:#ffffff; border-color:#ccc;"></span>#ffffff</span></div>
          <div class="theme-row"><span class="theme-key">card border</span><span class="theme-val"><span class="dot" style="background:#f4f4f5; border-color:#ccc;"></span>#f4f4f5</span></div>
          <div class="theme-row"><span class="theme-key">text primary</span><span class="theme-val"><span class="dot" style="background:#18181b;"></span>#18181b</span></div>
          <div class="theme-row"><span class="theme-key">text muted</span><span class="theme-val"><span class="dot" style="background:#71717a;"></span>#71717a</span></div>
          <div class="theme-row"><span class="theme-key">text hint</span><span class="theme-val"><span class="dot" style="background:#a1a1aa;"></span>#a1a1aa</span></div>
          <div class="theme-row"><span class="theme-key">nav link</span><span class="theme-val"><span class="dot" style="background:#71717a;"></span>#71717a</span></div>
          <div class="theme-row"><span class="theme-key">chip border</span><span class="theme-val"><span class="dot" style="background:#e4e4e7; border-color:#ccc;"></span>#e4e4e7</span></div>
          <div class="theme-row"><span class="theme-key">btn primary bg</span><span class="theme-val"><span class="dot" style="background:#18181b;"></span>#18181b</span></div>
          <div class="theme-row"><span class="theme-key">btn primary txt</span><span class="theme-val"><span class="dot" style="background:#ffffff; border-color:#ccc;"></span>#ffffff</span></div>
          <div class="theme-row"><span class="theme-key">section rule</span><span class="theme-val"><span class="dot" style="background:#f4f4f5; border-color:#ccc;"></span>#f4f4f5</span></div>
          <div class="theme-row"><span class="theme-key">accent</span><span class="theme-val"><span class="dot" style="background:#1a56db;"></span>#1a56db</span></div>
          <div class="theme-row"><span class="theme-key">hero name fade</span><span class="theme-val"><span class="dot" style="background:#d4d4d8; border-color:#ccc;"></span>#d4d4d8</span></div>
        </div>
      </div>
      <div class="theme-card">
        <div class="theme-header" style="background:#18181b; color:#fafafa; border-bottom:0.5px solid #27272a;">Dark mode</div>
        <div class="theme-body" style="background:#09090b;">
          <div class="theme-row"><span class="theme-key" style="color:#a1a1aa;">page bg</span><span class="theme-val" style="color:#e4e4e7;"><span class="dot" style="background:#09090b; border-color:#444;"></span>#09090b</span></div>
          <div class="theme-row"><span class="theme-key" style="color:#a1a1aa;">card bg</span><span class="theme-val" style="color:#e4e4e7;"><span class="dot" style="background:#18181b; border-color:#444;"></span>#18181b</span></div>
          <div class="theme-row"><span class="theme-key" style="color:#a1a1aa;">card border</span><span class="theme-val" style="color:#e4e4e7;"><span class="dot" style="background:#27272a; border-color:#444;"></span>#27272a</span></div>
          <div class="theme-row"><span class="theme-key" style="color:#a1a1aa;">text primary</span><span class="theme-val" style="color:#e4e4e7;"><span class="dot" style="background:#e4e4e7; border-color:#555;"></span>#e4e4e7</span></div>
          <div class="theme-row"><span class="theme-key" style="color:#a1a1aa;">text muted</span><span class="theme-val" style="color:#e4e4e7;"><span class="dot" style="background:#a1a1aa; border-color:#555;"></span>#a1a1aa</span></div>
          <div class="theme-row"><span class="theme-key" style="color:#a1a1aa;">text hint</span><span class="theme-val" style="color:#e4e4e7;"><span class="dot" style="background:#71717a; border-color:#555;"></span>#71717a</span></div>
          <div class="theme-row"><span class="theme-key" style="color:#a1a1aa;">nav link</span><span class="theme-val" style="color:#e4e4e7;"><span class="dot" style="background:#a1a1aa; border-color:#555;"></span>#a1a1aa</span></div>
          <div class="theme-row"><span class="theme-key" style="color:#a1a1aa;">chip border</span><span class="theme-val" style="color:#e4e4e7;"><span class="dot" style="background:#3f3f46; border-color:#555;"></span>#3f3f46</span></div>
          <div class="theme-row"><span class="theme-key" style="color:#a1a1aa;">btn primary bg</span><span class="theme-val" style="color:#e4e4e7;"><span class="dot" style="background:#ffffff; border-color:#555;"></span>#ffffff</span></div>
          <div class="theme-row"><span class="theme-key" style="color:#a1a1aa;">btn primary txt</span><span class="theme-val" style="color:#e4e4e7;"><span class="dot" style="background:#18181b; border-color:#555;"></span>#18181b</span></div>
          <div class="theme-row"><span class="theme-key" style="color:#a1a1aa;">section rule</span><span class="theme-val" style="color:#e4e4e7;"><span class="dot" style="background:#27272a; border-color:#555;"></span>#27272a</span></div>
          <div class="theme-row"><span class="theme-key" style="color:#a1a1aa;">accent</span><span class="theme-val" style="color:#e4e4e7;"><span class="dot" style="background:#1a56db;"></span>#1a56db</span></div>
          <div class="theme-row"><span class="theme-key" style="color:#a1a1aa;">hero name fade</span><span class="theme-val" style="color:#e4e4e7;"><span class="dot" style="background:#3f3f46; border-color:#555;"></span>#3f3f46</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="divider"></div>

  <div>
    <div class="section-title">Type scale</div>
    <div style="border: 0.5px solid var(--color-border-tertiary); border-radius: 10px; overflow: hidden;">
      <table style="width:100%; border-collapse:collapse; font-size:12px;">
        <thead>
          <tr style="background:var(--color-background-secondary);">
            <th style="padding:8px 12px; text-align:left; font-weight:500; color:var(--color-text-secondary); border-bottom:0.5px solid var(--color-border-tertiary);">Role</th>
            <th style="padding:8px 12px; text-align:left; font-weight:500; color:var(--color-text-secondary); border-bottom:0.5px solid var(--color-border-tertiary);">Size</th>
            <th style="padding:8px 12px; text-align:left; font-weight:500; color:var(--color-text-secondary); border-bottom:0.5px solid var(--color-border-tertiary);">Weight</th>
            <th style="padding:8px 12px; text-align:left; font-weight:500; color:var(--color-text-secondary); border-bottom:0.5px solid var(--color-border-tertiary);">Font</th>
            <th style="padding:8px 12px; text-align:left; font-weight:500; color:var(--color-text-secondary); border-bottom:0.5px solid var(--color-border-tertiary);">Tailwind class</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:0.5px solid var(--color-border-tertiary);">
            <td style="padding:8px 12px; color:var(--color-text-primary);">Hero h1</td>
            <td style="padding:8px 12px; font-family:var(--font-mono); color:var(--color-text-secondary);">60–72px</td>
            <td style="padding:8px 12px; font-family:var(--font-mono); color:var(--color-text-secondary);">600</td>
            <td style="padding:8px 12px; font-family:var(--font-mono); color:var(--color-text-secondary);">Sora</td>
            <td style="padding:8px 12px; font-family:var(--font-mono); color:var(--color-text-secondary);">text-5xl md:text-7xl font-semibold</td>
          </tr>
          <tr style="border-bottom:0.5px solid var(--color-border-tertiary);">
            <td style="padding:8px 12px; color:var(--color-text-primary);">Section h2</td>
            <td style="padding:8px 12px; font-family:var(--font-mono); color:var(--color-text-secondary);">30px</td>
            <td style="padding:8px 12px; font-family:var(--font-mono); color:var(--color-text-secondary);">600</td>
            <td style="padding:8px 12px; font-family:var(--font-mono); color:var(--color-text-secondary);">Sora</td>
            <td style="padding:8px 12px; font-family:var(--font-mono); color:var(--color-text-secondary);">text-3xl font-semibold</td>
          </tr>
          <tr style="border-bottom:0.5px solid var(--color-border-tertiary);">
            <td style="padding:8px 12px; color:var(--color-text-primary);">Card title</td>
            <td style="padding:8px 12px; font-family:var(--font-mono); color:var(--color-text-secondary);">16px</td>
            <td style="padding:8px 12px; font-family:var(--font-mono); color:var(--color-text-secondary);">600</td>
            <td style="padding:8px 12px; font-family:var(--font-mono); color:var(--color-text-secondary);">Sora</td>
            <td style="padding:8px 12px; font-family:var(--font-mono); color:var(--color-text-secondary);">font-semibold</td>
          </tr>
          <tr style="border-bottom:0.5px solid var(--color-border-tertiary);">
            <td style="padding:8px 12px; color:var(--color-text-primary);">Body / description</td>
            <td style="padding:8px 12px; font-family:var(--font-mono); color:var(--color-text-secondary);">18px</td>
            <td style="padding:8px 12px; font-family:var(--font-mono); color:var(--color-text-secondary);">400</td>
            <td style="padding:8px 12px; font-family:var(--font-mono); color:var(--color-text-secondary);">Sora</td>
            <td style="padding:8px 12px; font-family:var(--font-mono); color:var(--color-text-secondary);">text-lg leading-relaxed</td>
          </tr>
          <tr style="border-bottom:0.5px solid var(--color-border-tertiary);">
            <td style="padding:8px 12px; color:var(--color-text-primary);">Card body text</td>
            <td style="padding:8px 12px; font-family:var(--font-mono); color:var(--color-text-secondary);">14px</td>
            <td style="padding:8px 12px; font-family:var(--font-mono); color:var(--color-text-secondary);">400</td>
            <td style="padding:8px 12px; font-family:var(--font-mono); color:var(--color-text-secondary);">Sora</td>
            <td style="padding:8px 12px; font-family:var(--font-mono); color:var(--color-text-secondary);">text-sm leading-relaxed</td>
          </tr>
          <tr style="border-bottom:0.5px solid var(--color-border-tertiary);">
            <td style="padding:8px 12px; color:var(--color-text-primary);">Section label</td>
            <td style="padding:8px 12px; font-family:var(--font-mono); color:var(--color-text-secondary);">12px</td>
            <td style="padding:8px 12px; font-family:var(--font-mono); color:var(--color-text-secondary);">500</td>
            <td style="padding:8px 12px; font-family:var(--font-mono); color:var(--color-text-secondary);">JetBrains Mono</td>
            <td style="padding:8px 12px; font-family:var(--font-mono); color:var(--color-text-secondary);">text-xs font-mono tracking-widest</td>
          </tr>
          <tr>
            <td style="padding:8px 12px; color:var(--color-text-primary);">Nav links / chips</td>
            <td style="padding:8px 12px; font-family:var(--font-mono); color:var(--color-text-secondary);">14px</td>
            <td style="padding:8px 12px; font-family:var(--font-mono); color:var(--color-text-secondary);">400</td>
            <td style="padding:8px 12px; font-family:var(--font-mono); color:var(--color-text-secondary);">Sora</td>
            <td style="padding:8px 12px; font-family:var(--font-mono); color:var(--color-text-secondary);">text-sm</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</div>

Here's everything used in the design: Everything is documented above. A few things worth noting:

**Accent blue (`#1a56db`)** is the only colour that stays identical in both light and dark mode — it's used for the horizontal rule under the hero name, timeline dots, skill bullet dots, and the section labels.

**The inverted button** is a nice touch of the design: in light mode the primary button is black-on-white, and in dark mode it flips to white-on-black — same component, opposite values.

**JetBrains Mono** is used very deliberately and sparingly — only for dates, category labels, section labels, and metadata. Everything readable at length uses Sora.

If you want to customise the accent colour across the whole site, `#1a56db` is the only value you need to change — it's defined once in `tailwind.config.js` as `accent` and referenced everywhere as `bg-blue-600` / `text-blue-600`.
