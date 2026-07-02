import os

BASE = r"e:\chain\brixs chain main mwebsite\brixs_assets"
ASSETS = {}

ASSETS["hero/01_hero_mesh_background"] = """<svg width="1400" height="700" viewBox="0 0 1400 700" xmlns="http://www.w3.org/2000/svg">
<defs><radialGradient id="bg" cx="50%" cy="45%" r="70%"><stop offset="0%" stop-color="#111111"/><stop offset="100%" stop-color="#000000"/></radialGradient></defs>
<rect width="1400" height="700" fill="url(#bg)"/>
<g stroke="#FFFFFF" stroke-opacity="0.055" stroke-width="0.8">
  <line x1="0" y1="120" x2="1400" y2="120"/><line x1="0" y1="210" x2="1400" y2="210"/><line x1="0" y1="300" x2="1400" y2="300"/>
  <line x1="0" y1="390" x2="1400" y2="390"/><line x1="0" y1="480" x2="1400" y2="480"/><line x1="0" y1="570" x2="1400" y2="570"/>
  <line x1="100" y1="0" x2="100" y2="700"/><line x1="233" y1="0" x2="233" y2="700"/><line x1="366" y1="0" x2="366" y2="700"/>
  <line x1="499" y1="0" x2="499" y2="700"/><line x1="632" y1="0" x2="632" y2="700"/><line x1="700" y1="0" x2="700" y2="700"/>
  <line x1="768" y1="0" x2="768" y2="700"/><line x1="901" y1="0" x2="901" y2="700"/><line x1="1034" y1="0" x2="1034" y2="700"/>
  <line x1="1167" y1="0" x2="1167" y2="700"/><line x1="1300" y1="0" x2="1300" y2="700"/>
</g>
<g fill="#FFFFFF">
  <circle cx="100" cy="120" r="2.5" fill-opacity="0.5"/><circle cx="700" cy="120" r="3" fill-opacity="0.7"/>
  <circle cx="1300" cy="120" r="2.5" fill-opacity="0.5"/><circle cx="233" cy="300" r="2" fill-opacity="0.4"/>
  <circle cx="700" cy="300" r="4" fill-opacity="0.8"/><circle cx="1167" cy="300" r="2" fill-opacity="0.4"/>
  <circle cx="100" cy="480" r="1.5" fill-opacity="0.3"/><circle cx="1300" cy="480" r="1.5" fill-opacity="0.3"/>
</g>
<g stroke="#FFFFFF" stroke-opacity="0.1" stroke-width="0.6">
  <line x1="100" y1="120" x2="700" y2="120"/><line x1="700" y1="120" x2="1300" y2="120"/>
  <line x1="233" y1="300" x2="700" y2="300"/><line x1="700" y1="300" x2="1167" y2="300"/>
  <line x1="700" y1="120" x2="700" y2="300"/>
</g>
<ellipse cx="700" cy="300" rx="400" ry="100" fill="#FFFFFF" fill-opacity="0.02"/>
</svg>"""

ASSETS["hero/02_hero_cube_centerpiece"] = """<svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="tf" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FFFFFF"/><stop offset="100%" stop-color="#CCCCCC"/></linearGradient>
  <linearGradient id="rf" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#888888"/><stop offset="100%" stop-color="#444444"/></linearGradient>
  <linearGradient id="lf" x1="100%" y1="0%" x2="0%" y2="0%"><stop offset="0%" stop-color="#333333"/><stop offset="100%" stop-color="#111111"/></linearGradient>
</defs>
<rect width="800" height="600" fill="#000000"/>
<polygon points="400,100 640,230 640,490 400,360" fill="url(#rf)" stroke="#FFFFFF" stroke-width="1.5"/>
<polygon points="400,100 160,230 160,490 400,360" fill="url(#lf)" stroke="#FFFFFF" stroke-width="1.5"/>
<polygon points="400,100 640,230 400,360 160,230" fill="url(#tf)" stroke="#FFFFFF" stroke-width="1.5"/>
<g stroke="#000000" stroke-opacity="0.2" stroke-width="1">
  <line x1="400" y1="100" x2="400" y2="360"/><line x1="400" y1="100" x2="520" y2="165"/>
  <line x1="400" y1="100" x2="280" y2="165"/>
</g>
<polygon points="640,230 760,165 760,295 640,360" fill="#333333" stroke="#FFFFFF" stroke-width="1.2" opacity="0.8"/>
<polygon points="640,230 760,165 640,100 520,165" fill="#999999" stroke="#FFFFFF" stroke-width="1.2" opacity="0.8"/>
<polygon points="160,490 400,360 400,490 160,560" fill="none" stroke="#FFFFFF" stroke-width="1" opacity="0.35"/>
<g fill="#FFFFFF">
  <circle cx="400" cy="100" r="4"/><circle cx="640" cy="230" r="3" fill-opacity="0.8"/>
  <circle cx="160" cy="230" r="3" fill-opacity="0.8"/><circle cx="400" cy="360" r="3" fill-opacity="0.7"/>
  <circle cx="760" cy="165" r="2.5" fill-opacity="0.6"/>
</g>
</svg>"""

ASSETS["hero/03_particle_network"] = """<svg width="1200" height="500" viewBox="0 0 1200 500" xmlns="http://www.w3.org/2000/svg">
<rect width="1200" height="500" fill="#000000"/>
<defs><radialGradient id="ng" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.9"/><stop offset="100%" stop-color="#FFFFFF" stop-opacity="0"/></radialGradient></defs>
<g stroke="#FFFFFF" stroke-opacity="0.08" stroke-width="0.8">
  <line x1="150" y1="100" x2="320" y2="200"/><line x1="320" y1="200" x2="500" y2="150"/>
  <line x1="500" y1="150" x2="680" y2="250"/><line x1="680" y1="250" x2="850" y2="180"/>
  <line x1="850" y1="180" x2="1050" y2="300"/><line x1="150" y1="100" x2="200" y2="350"/>
  <line x1="200" y1="350" x2="420" y2="400"/><line x1="420" y1="400" x2="600" y2="380"/>
  <line x1="600" y1="380" x2="780" y2="420"/><line x1="780" y1="420" x2="1000" y2="370"/>
  <line x1="1000" y1="370" x2="1050" y2="300"/><line x1="320" y1="200" x2="420" y2="400"/>
  <line x1="500" y1="150" x2="600" y2="380"/><line x1="680" y1="250" x2="780" y2="420"/>
</g>
<g fill="#FFFFFF">
  <circle cx="150" cy="100" r="5" fill-opacity="0.9"/><circle cx="320" cy="200" r="4" fill-opacity="0.7"/>
  <circle cx="500" cy="150" r="6" fill-opacity="1"/><circle cx="680" cy="250" r="4" fill-opacity="0.7"/>
  <circle cx="850" cy="180" r="5" fill-opacity="0.9"/><circle cx="1050" cy="300" r="4" fill-opacity="0.7"/>
  <circle cx="200" cy="350" r="3.5" fill-opacity="0.6"/><circle cx="420" cy="400" r="4" fill-opacity="0.7"/>
  <circle cx="600" cy="380" r="3.5" fill-opacity="0.6"/><circle cx="780" cy="420" r="4" fill-opacity="0.7"/>
  <circle cx="1000" cy="370" r="4" fill-opacity="0.8"/>
</g>
<circle cx="500" cy="150" r="20" fill="url(#ng)" fill-opacity="0.3"/>
<circle cx="850" cy="180" r="16" fill="url(#ng)" fill-opacity="0.25"/>
</svg>"""

ASSETS["stats/04_stats_ribbon"] = """<svg width="1200" height="100" viewBox="0 0 1200 100" xmlns="http://www.w3.org/2000/svg">
<rect width="1200" height="100" fill="#0A0A0A"/>
<rect x="0" y="0" width="1200" height="1" fill="#FFFFFF" fill-opacity="0.12"/>
<rect x="0" y="99" width="1200" height="1" fill="#FFFFFF" fill-opacity="0.12"/>
<line x1="300" y1="20" x2="300" y2="80" stroke="#FFFFFF" stroke-opacity="0.1" stroke-width="1"/>
<line x1="600" y1="20" x2="600" y2="80" stroke="#FFFFFF" stroke-opacity="0.1" stroke-width="1"/>
<line x1="900" y1="20" x2="900" y2="80" stroke="#FFFFFF" stroke-opacity="0.1" stroke-width="1"/>
<circle cx="120" cy="38" r="4" fill="#FFFFFF"/><circle cx="120" cy="38" r="8" fill="#FFFFFF" fill-opacity="0.15"/>
<text x="135" y="43" font-family="monospace" font-size="10" fill="#888888" letter-spacing="2">TPS</text>
<text x="90" y="72" font-family="Arial" font-weight="700" font-size="26" fill="#FFFFFF">10,000+</text>
<circle cx="420" cy="38" r="4" fill="#FFFFFF"/><circle cx="420" cy="38" r="8" fill="#FFFFFF" fill-opacity="0.15"/>
<text x="435" y="43" font-family="monospace" font-size="10" fill="#888888" letter-spacing="2">AVG FEE</text>
<text x="385" y="72" font-family="Arial" font-weight="700" font-size="26" fill="#FFFFFF">$0.0001</text>
<circle cx="720" cy="38" r="4" fill="#FFFFFF"/><circle cx="720" cy="38" r="8" fill="#FFFFFF" fill-opacity="0.15"/>
<text x="735" y="43" font-family="monospace" font-size="10" fill="#888888" letter-spacing="2">TOTAL TXS</text>
<text x="675" y="72" font-family="Arial" font-weight="700" font-size="26" fill="#FFFFFF">1.2M+</text>
<circle cx="1020" cy="38" r="4" fill="#FFFFFF"/><circle cx="1020" cy="38" r="8" fill="#FFFFFF" fill-opacity="0.15"/>
<text x="1035" y="43" font-family="monospace" font-size="10" fill="#888888" letter-spacing="2">ADDRESSES</text>
<text x="960" y="72" font-family="Arial" font-weight="700" font-size="26" fill="#FFFFFF">150K+</text>
</svg>"""

ASSETS["stats/05_block_chain_visual"] = """<svg width="700" height="320" viewBox="0 0 700 320" xmlns="http://www.w3.org/2000/svg">
<rect width="700" height="320" fill="#080808"/>
<defs><linearGradient id="bg2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#1a1a1a"/><stop offset="100%" stop-color="#0a0a0a"/></linearGradient></defs>
<text x="350" y="35" font-family="monospace" font-size="10" fill="#333333" text-anchor="middle" letter-spacing="4">BLOCK TIME 0.25s — LIVE CHAIN</text>
<g>
  <rect x="20" y="100" width="120" height="80" rx="4" fill="url(#bg2)" stroke="#FFFFFF" stroke-width="1.5"/>
  <text x="80" y="132" font-family="monospace" font-size="9" fill="#888888" text-anchor="middle">#1,284,921</text>
  <text x="80" y="150" font-family="monospace" font-size="8" fill="#555555" text-anchor="middle">0x4a2f...</text>
  <circle cx="80" cy="165" r="4" fill="#FFFFFF"/>
  <line x1="140" y1="140" x2="175" y2="140" stroke="#FFFFFF" stroke-opacity="0.4" stroke-width="2"/>
  <polygon points="173,135 180,140 173,145" fill="#FFFFFF" fill-opacity="0.4"/>
  <rect x="185" y="100" width="120" height="80" rx="4" fill="url(#bg2)" stroke="#FFFFFF" stroke-width="1.5"/>
  <text x="245" y="132" font-family="monospace" font-size="9" fill="#888888" text-anchor="middle">#1,284,922</text>
  <text x="245" y="150" font-family="monospace" font-size="8" fill="#555555" text-anchor="middle">0x7c9d...</text>
  <circle cx="245" cy="165" r="4" fill="#FFFFFF"/>
  <line x1="305" y1="140" x2="340" y2="140" stroke="#FFFFFF" stroke-opacity="0.4" stroke-width="2"/>
  <polygon points="338,135 345,140 338,145" fill="#FFFFFF" fill-opacity="0.4"/>
  <rect x="350" y="100" width="120" height="80" rx="4" fill="url(#bg2)" stroke="#FFFFFF" stroke-width="1.5"/>
  <text x="410" y="132" font-family="monospace" font-size="9" fill="#888888" text-anchor="middle">#1,284,923</text>
  <text x="410" y="150" font-family="monospace" font-size="8" fill="#555555" text-anchor="middle">0xb3e1...</text>
  <circle cx="410" cy="165" r="4" fill="#FFFFFF"/>
  <line x1="470" y1="140" x2="505" y2="140" stroke="#FFFFFF" stroke-opacity="0.4" stroke-width="2"/>
  <polygon points="503,135 510,140 503,145" fill="#FFFFFF" fill-opacity="0.4"/>
  <rect x="515" y="88" width="140" height="104" rx="4" fill="#111111" stroke="#FFFFFF" stroke-width="2"/>
  <text x="585" y="122" font-family="monospace" font-size="9" fill="#FFFFFF" text-anchor="middle">#1,284,924</text>
  <text x="585" y="142" font-family="monospace" font-size="9" fill="#888888" text-anchor="middle">LATEST</text>
  <text x="585" y="162" font-family="monospace" font-size="8" fill="#555555" text-anchor="middle">0.25s</text>
  <circle cx="585" cy="178" r="5" fill="#FFFFFF"/>
</g>
<text x="80" y="210" font-family="monospace" font-size="8" fill="#333333" text-anchor="middle">0.25s</text>
<text x="245" y="210" font-family="monospace" font-size="8" fill="#333333" text-anchor="middle">0.25s</text>
<text x="410" y="210" font-family="monospace" font-size="8" fill="#333333" text-anchor="middle">0.25s</text>
</svg>"""

ASSETS["features/06_icon_unified_liquidity"] = """<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<rect width="200" height="200" fill="#000000"/>
<circle cx="75" cy="100" r="55" fill="none" stroke="#FFFFFF" stroke-width="2"/>
<circle cx="125" cy="100" r="55" fill="none" stroke="#FFFFFF" stroke-width="2"/>
<clipPath id="cl1"><circle cx="75" cy="100" r="55"/></clipPath>
<circle cx="125" cy="100" r="55" fill="#FFFFFF" fill-opacity="0.15" clip-path="url(#cl1)"/>
<text x="100" y="96" font-family="monospace" font-size="8" fill="#FFFFFF" text-anchor="middle">UNIFIED</text>
<text x="100" y="108" font-family="monospace" font-size="8" fill="#FFFFFF" text-anchor="middle">VAULT</text>
<line x1="30" y1="70" x2="95" y2="95" stroke="#FFFFFF" stroke-opacity="0.5" stroke-width="1"/>
<polygon points="90,88 98,96 86,98" fill="#FFFFFF" fill-opacity="0.5"/>
<line x1="170" y1="70" x2="105" y2="95" stroke="#FFFFFF" stroke-opacity="0.5" stroke-width="1"/>
<polygon points="110,88 102,96 114,98" fill="#FFFFFF" fill-opacity="0.5"/>
</svg>"""

ASSETS["features/07_icon_zero_gas"] = """<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<rect width="200" height="200" fill="#000000"/>
<rect x="65" y="60" width="60" height="90" rx="4" fill="none" stroke="#FFFFFF" stroke-width="2"/>
<rect x="75" y="75" width="40" height="30" rx="2" fill="#FFFFFF" fill-opacity="0.15" stroke="#FFFFFF" stroke-width="1"/>
<line x1="125" y1="80" x2="148" y2="80" stroke="#FFFFFF" stroke-width="2"/>
<rect x="142" y="70" width="16" height="30" rx="3" fill="none" stroke="#FFFFFF" stroke-width="1.5"/>
<line x1="45" y1="45" x2="155" y2="155" stroke="#FFFFFF" stroke-width="3"/>
<text x="100" y="175" font-family="Arial" font-weight="700" font-size="13" fill="#FFFFFF" text-anchor="middle" letter-spacing="2">$0.0001</text>
</svg>"""

ASSETS["features/08_icon_ai_agent"] = """<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<rect width="200" height="200" fill="#000000"/>
<polygon points="100,30 140,65 140,135 100,170 60,135 60,65" fill="none" stroke="#FFFFFF" stroke-width="2"/>
<polygon points="100,55 122,70 122,100 100,115 78,100 78,70" fill="#FFFFFF" fill-opacity="0.1" stroke="#FFFFFF" stroke-width="1"/>
<g stroke="#FFFFFF" stroke-opacity="0.4" stroke-width="1">
  <line x1="100" y1="30" x2="30" y2="80"/><line x1="30" y1="80" x2="60" y2="135"/>
  <line x1="100" y1="170" x2="170" y2="120"/><line x1="170" y1="120" x2="140" y2="65"/>
</g>
<g fill="#FFFFFF"><circle cx="30" cy="80" r="4"/><circle cx="170" cy="120" r="4"/><circle cx="100" cy="87" r="6"/></g>
<text x="95" y="92" font-family="monospace" font-size="9" fill="#000000" font-weight="bold">AI</text>
</svg>"""

ASSETS["features/09_icon_speed"] = """<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<rect width="200" height="200" fill="#000000"/>
<polygon points="115,20 75,105 105,105 85,180 145,85 112,85" fill="#FFFFFF" fill-opacity="0.9"/>
<g stroke="#FFFFFF" stroke-opacity="0.2" stroke-width="1.5">
  <line x1="20" y1="80" x2="65" y2="80"/><line x1="15" y1="100" x2="60" y2="100"/><line x1="20" y1="120" x2="65" y2="120"/>
</g>
<text x="100" y="185" font-family="monospace" font-size="9" fill="#888888" text-anchor="middle" letter-spacing="2">10,000 TPS</text>
</svg>"""

ASSETS["features/10_icon_evm"] = """<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<rect width="200" height="200" fill="#000000"/>
<polygon points="100,25 145,95 100,120 55,95" fill="#FFFFFF" fill-opacity="0.9"/>
<polygon points="100,120 145,95 100,175" fill="#AAAAAA"/>
<polygon points="100,120 55,95 100,175" fill="#666666"/>
<polygon points="100,25 100,120 55,95" fill="#DDDDDD"/>
<text x="100" y="185" font-family="monospace" font-size="9" fill="#888888" text-anchor="middle" letter-spacing="3">100% EVM</text>
</svg>"""

ASSETS["developer/11_terminal_window"] = """<svg width="800" height="400" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
<rect width="800" height="400" fill="#000000"/>
<rect x="50" y="40" width="700" height="320" rx="10" fill="#0D0D0D" stroke="#2A2A2A" stroke-width="1.5"/>
<rect x="50" y="40" width="700" height="36" rx="10" fill="#1A1A1A"/>
<rect x="50" y="64" width="700" height="12" fill="#1A1A1A"/>
<circle cx="80" cy="58" r="6" fill="#333333"/><circle cx="100" cy="58" r="6" fill="#333333"/><circle cx="120" cy="58" r="6" fill="#333333"/>
<text x="400" y="63" font-family="monospace" font-size="11" fill="#555555" text-anchor="middle">brixs-terminal</text>
<g font-family="monospace" font-size="13">
  <text x="80" y="110" fill="#666666">$</text><text x="95" y="110" fill="#FFFFFF"> npm i -g @brixs/cli</text>
  <text x="80" y="135" fill="#555555">✓ installed @brixs/cli@2.4.1</text>
  <text x="80" y="165" fill="#666666">$</text><text x="95" y="165" fill="#FFFFFF"> brixs init my-dapp</text>
  <text x="80" y="190" fill="#444444">→ Initializing project scaffold...</text>
  <text x="80" y="208" fill="#444444">→ Fetching Brixs ABI templates...</text>
  <text x="80" y="226" fill="#444444">✓ Project ready at ./my-dapp</text>
  <text x="80" y="256" fill="#666666">$</text><text x="95" y="256" fill="#FFFFFF"> brixs deploy --network testnet</text>
  <text x="80" y="281" fill="#444444">→ Compiling contracts...</text>
  <text x="80" y="299" fill="#444444">→ Deploying to Brixs Testnet...</text>
  <text x="80" y="325" fill="#FFFFFF">✓ Deployment Successful!</text>
  <text x="80" y="345" fill="#666666">TX: 0x4a2f9b1c3d8e7f2a...</text>
</g>
<rect x="80" y="355" width="9" height="14" fill="#FFFFFF" fill-opacity="0.8"/>
</svg>"""

ASSETS["developer/12_architecture_diagram"] = """<svg width="900" height="550" viewBox="0 0 900 550" xmlns="http://www.w3.org/2000/svg">
<rect width="900" height="550" fill="#050505"/>
<text x="450" y="35" font-family="Arial" font-weight="300" font-size="13" fill="#555555" text-anchor="middle" letter-spacing="4">BRIXS CHAIN ARCHITECTURE</text>
<line x1="100" y1="50" x2="800" y2="50" stroke="#FFFFFF" stroke-opacity="0.07" stroke-width="1"/>
<rect x="80" y="450" width="740" height="70" rx="4" fill="#0A0A0A" stroke="#444444" stroke-width="1.5"/>
<text x="450" y="482" font-family="monospace" font-size="12" fill="#666666" text-anchor="middle" letter-spacing="3">ETHEREUM SEPOLIA</text>
<text x="450" y="504" font-family="monospace" font-size="10" fill="#333333" text-anchor="middle">Settlement Layer — L1 Security</text>
<rect x="80" y="350" width="340" height="70" rx="4" fill="#0D0D0D" stroke="#555555" stroke-width="1.5"/>
<text x="250" y="382" font-family="monospace" font-size="12" fill="#777777" text-anchor="middle" letter-spacing="2">CELESTIA</text>
<text x="250" y="402" font-family="monospace" font-size="10" fill="#444444" text-anchor="middle">Data Availability Layer</text>
<rect x="480" y="350" width="340" height="70" rx="4" fill="#0D0D0D" stroke="#555555" stroke-width="1.5"/>
<text x="650" y="382" font-family="monospace" font-size="12" fill="#777777" text-anchor="middle" letter-spacing="2">ARBITRUM ORBIT</text>
<text x="650" y="402" font-family="monospace" font-size="10" fill="#444444" text-anchor="middle">Rollup Framework</text>
<rect x="200" y="230" width="500" height="80" rx="4" fill="#181818" stroke="#FFFFFF" stroke-width="2"/>
<text x="450" y="263" font-family="Arial" font-weight="600" font-size="16" fill="#FFFFFF" text-anchor="middle" letter-spacing="3">BRIXS CHAIN L2</text>
<text x="450" y="285" font-family="monospace" font-size="10" fill="#888888" text-anchor="middle">10,000 TPS — 0.25s Block Time — EVM Equivalent</text>
<rect x="80" y="120" width="220" height="70" rx="4" fill="#111111" stroke="#333333" stroke-width="1"/>
<text x="190" y="150" font-family="monospace" font-size="11" fill="#666666" text-anchor="middle">DeFi / dApps</text>
<text x="190" y="168" font-family="monospace" font-size="9" fill="#333333" text-anchor="middle">ERC-20 · Lending · AMM</text>
<rect x="340" y="120" width="220" height="70" rx="4" fill="#111111" stroke="#333333" stroke-width="1"/>
<text x="450" y="150" font-family="monospace" font-size="11" fill="#666666" text-anchor="middle">AI Agents</text>
<text x="450" y="168" font-family="monospace" font-size="9" fill="#333333" text-anchor="middle">Autonomous TX · CLI Native</text>
<rect x="600" y="120" width="220" height="70" rx="4" fill="#111111" stroke="#333333" stroke-width="1"/>
<text x="710" y="150" font-family="monospace" font-size="11" fill="#666666" text-anchor="middle">Wallets / AA</text>
<text x="710" y="168" font-family="monospace" font-size="9" fill="#333333" text-anchor="middle">EIP-4337 · Paymasters</text>
<g stroke="#FFFFFF" stroke-opacity="0.2" stroke-width="1.5">
  <line x1="190" y1="190" x2="350" y2="230"/><line x1="450" y1="190" x2="450" y2="230"/>
  <line x1="710" y1="190" x2="550" y2="230"/><line x1="350" y1="310" x2="250" y2="350"/>
  <line x1="550" y1="310" x2="650" y2="350"/><line x1="250" y1="420" x2="250" y2="450"/>
  <line x1="650" y1="420" x2="650" y2="450"/>
</g>
</svg>"""

ASSETS["developer/13_rpc_dashboard"] = """<svg width="900" height="500" viewBox="0 0 900 500" xmlns="http://www.w3.org/2000/svg">
<rect width="900" height="500" fill="#080808"/>
<rect x="0" y="0" width="200" height="500" fill="#0D0D0D"/>
<rect x="200" y="0" width="1" height="500" fill="#1A1A1A"/>
<text x="24" y="40" font-family="monospace" font-size="11" fill="#555555" letter-spacing="2">RPC DASHBOARD</text>
<g font-family="monospace" font-size="11" fill="#444444">
  <rect x="16" y="60" width="168" height="28" rx="3" fill="#FFFFFF" fill-opacity="0.05"/>
  <text x="24" y="78" fill="#FFFFFF">Overview</text>
  <text x="24" y="115">API Keys</text><text x="24" y="145">Usage Logs</text>
  <text x="24" y="175">Endpoints</text><text x="24" y="205">Billing</text>
</g>
<text x="230" y="40" font-family="Arial" font-weight="300" font-size="18" fill="#FFFFFF">API Overview</text>
<rect x="230" y="75" width="140" height="70" rx="3" fill="#111111" stroke="#222222" stroke-width="1"/>
<text x="245" y="100" font-family="monospace" font-size="9" fill="#555555">REQUESTS</text>
<text x="245" y="125" font-family="Arial" font-weight="700" font-size="24" fill="#FFFFFF">2.4M</text>
<rect x="390" y="75" width="140" height="70" rx="3" fill="#111111" stroke="#222222" stroke-width="1"/>
<text x="405" y="100" font-family="monospace" font-size="9" fill="#555555">LATENCY</text>
<text x="405" y="125" font-family="Arial" font-weight="700" font-size="24" fill="#FFFFFF">12ms</text>
<rect x="550" y="75" width="140" height="70" rx="3" fill="#111111" stroke="#222222" stroke-width="1"/>
<text x="565" y="100" font-family="monospace" font-size="9" fill="#555555">UPTIME</text>
<text x="565" y="125" font-family="Arial" font-weight="700" font-size="24" fill="#FFFFFF">99.9%</text>
<rect x="230" y="165" width="620" height="180" rx="3" fill="#0D0D0D" stroke="#1A1A1A" stroke-width="1"/>
<text x="245" y="188" font-family="monospace" font-size="9" fill="#444444" letter-spacing="2">REQUEST VOLUME 24H</text>
<g fill="#FFFFFF" fill-opacity="0.7">
  <rect x="260" y="280" width="16" height="40"/><rect x="282" y="260" width="16" height="60"/>
  <rect x="304" y="245" width="16" height="75"/><rect x="326" y="265" width="16" height="55"/>
  <rect x="348" y="235" width="16" height="85"/><rect x="370" y="250" width="16" height="70"/>
  <rect x="392" y="230" width="16" height="90"/><rect x="414" y="215" width="16" height="105"/>
  <rect x="436" y="240" width="16" height="80"/><rect x="458" y="225" width="16" height="95"/>
  <rect x="480" y="205" width="16" height="115"/><rect x="502" y="220" width="16" height="100"/>
  <rect x="524" y="210" width="16" height="110"/><rect x="546" y="195" width="16" height="125"/>
  <rect x="568" y="215" width="16" height="105"/><rect x="590" y="200" width="16" height="120"/>
  <rect x="612" y="190" width="16" height="130"/><rect x="634" y="205" width="16" height="115"/>
  <rect x="656" y="195" width="16" height="125"/><rect x="678" y="180" width="16" height="140"/>
  <rect x="700" y="190" width="16" height="130"/><rect x="722" y="175" width="16" height="145"/>
  <rect x="744" y="185" width="16" height="135"/><rect x="766" y="168" width="16" height="152"/>
</g>
<line x1="245" y1="320" x2="820" y2="320" stroke="#FFFFFF" stroke-opacity="0.06" stroke-width="1"/>
<rect x="230" y="360" width="620" height="40" rx="3" fill="#0D0D0D" stroke="#1A1A1A" stroke-width="1"/>
<text x="250" y="383" font-family="monospace" font-size="10" fill="#555555">ENDPOINT</text>
<text x="360" y="383" font-family="monospace" font-size="10" fill="#FFFFFF">https://rpc.brixs.space/v1/••••••••••</text>
<rect x="758" y="368" width="72" height="24" rx="3" fill="#FFFFFF" fill-opacity="0.08" stroke="#333333" stroke-width="1"/>
<text x="794" y="384" font-family="monospace" font-size="10" fill="#888888" text-anchor="middle">COPY</text>
</svg>"""

ASSETS["developer/14_faucet_card"] = """<svg width="500" height="420" viewBox="0 0 500 420" xmlns="http://www.w3.org/2000/svg">
<rect width="500" height="420" fill="#000000"/>
<rect x="60" y="40" width="380" height="340" rx="8" fill="#0D0D0D" stroke="#222222" stroke-width="1.5"/>
<ellipse cx="250" cy="95" rx="18" ry="22" fill="#FFFFFF" fill-opacity="0.9"/>
<polygon points="250,68 236,90 264,90" fill="#FFFFFF" fill-opacity="0.9"/>
<text x="250" y="145" font-family="Arial" font-weight="300" font-size="18" fill="#FFFFFF" text-anchor="middle" letter-spacing="2">BRIXS FAUCET</text>
<text x="250" y="165" font-family="monospace" font-size="9" fill="#444444" text-anchor="middle" letter-spacing="2">TESTNET TOKEN DISPENSER</text>
<line x1="100" y1="180" x2="400" y2="180" stroke="#1A1A1A" stroke-width="1"/>
<rect x="90" y="200" width="320" height="40" rx="4" fill="#080808" stroke="#2A2A2A" stroke-width="1"/>
<text x="108" y="225" font-family="monospace" font-size="10" fill="#333333">0x Paste wallet address...</text>
<text x="250" y="275" font-family="Arial" font-weight="700" font-size="36" fill="#FFFFFF" text-anchor="middle">0.5 BRX</text>
<text x="250" y="295" font-family="monospace" font-size="9" fill="#444444" text-anchor="middle">PER REQUEST · 24H COOLDOWN</text>
<rect x="90" y="315" width="320" height="46" rx="4" fill="#FFFFFF"/>
<text x="250" y="344" font-family="Arial" font-weight="600" font-size="14" fill="#000000" text-anchor="middle" letter-spacing="2">DROP ME 0.5 BRIXS</text>
</svg>"""

ASSETS["developer/15_code_config"] = """<svg width="800" height="380" viewBox="0 0 800 380" xmlns="http://www.w3.org/2000/svg">
<rect width="800" height="380" fill="#000000"/>
<rect x="30" y="20" width="740" height="340" rx="8" fill="#0D0D0D" stroke="#1A1A1A" stroke-width="1.5"/>
<rect x="30" y="20" width="740" height="34" rx="8" fill="#141414"/>
<rect x="30" y="42" width="740" height="12" fill="#141414"/>
<circle cx="58" cy="37" r="5" fill="#2A2A2A"/><circle cx="78" cy="37" r="5" fill="#2A2A2A"/><circle cx="98" cy="37" r="5" fill="#2A2A2A"/>
<text x="400" y="42" font-family="monospace" font-size="11" fill="#444444" text-anchor="middle">hardhat.config.js</text>
<rect x="680" y="27" width="70" height="20" rx="3" fill="#1A1A1A" stroke="#2A2A2A" stroke-width="1"/>
<text x="715" y="41" font-family="monospace" font-size="9" fill="#555555" text-anchor="middle">COPY</text>
<g font-family="monospace" font-size="12">
  <text x="60" y="90" fill="#555555">// hardhat.config.js — Brixs Network</text>
  <text x="60" y="115" fill="#888888">require</text><text x="110" y="115" fill="#FFFFFF">(</text><text x="118" y="115" fill="#AAAAAA">"@nomicfoundation/hardhat-toolbox"</text><text x="400" y="115" fill="#FFFFFF">);</text>
  <text x="60" y="145" fill="#888888">module</text><text x="107" y="145" fill="#FFFFFF">.exports = {</text>
  <text x="80" y="170" fill="#888888">networks</text><text x="131" y="170" fill="#FFFFFF">: {</text>
  <text x="100" y="195" fill="#666666">brixs</text><text x="134" y="195" fill="#FFFFFF">: {</text>
  <text x="120" y="220" fill="#666666">url</text><text x="140" y="220" fill="#FFFFFF">: </text><text x="152" y="220" fill="#AAAAAA">"https://rpc.brixs.network"</text><text x="385" y="220" fill="#FFFFFF">,</text>
  <text x="120" y="245" fill="#666666">chainId</text><text x="168" y="245" fill="#FFFFFF">: </text><text x="180" y="245" fill="#CCCCCC">7171</text><text x="200" y="245" fill="#FFFFFF">,</text>
  <text x="120" y="270" fill="#666666">accounts</text><text x="177" y="270" fill="#FFFFFF">: [</text><text x="197" y="270" fill="#AAAAAA">process.env.PRIVATE_KEY</text><text x="372" y="270" fill="#FFFFFF">]</text>
  <text x="100" y="295" fill="#FFFFFF">},</text>
  <text x="80" y="320" fill="#FFFFFF">},</text>
  <text x="60" y="345" fill="#FFFFFF">};</text>
</g>
</svg>"""

print(f"Total SVGs defined: {len(ASSETS)}")
for rel_path, svg_content in ASSETS.items():
    svg_path = f"{BASE}/{rel_path}.svg"
    folder = os.path.dirname(svg_path)
    os.makedirs(folder, exist_ok=True)
    with open(svg_path, "w", encoding="utf-8") as f:
        f.write(svg_content)
    print(f"  ✓ Written {svg_path}")

print("Done writing SVGs!")
