import os

BASE = r"e:\chain\brixs chain main mwebsite\brixs_assets"
ASSETS = {}

ASSETS["network/25_network_table"] = """<svg width="800" height="480" viewBox="0 0 800 480" xmlns="http://www.w3.org/2000/svg">
<rect width="800" height="480" fill="#050505"/>
<text x="400" y="38" font-family="Arial" font-weight="300" font-size="14" fill="#555555" text-anchor="middle" letter-spacing="4">BRIXS MAINNET</text>
<rect x="40" y="55" width="720" height="190" rx="6" fill="#0A0A0A" stroke="#1A1A1A" stroke-width="1.5"/>
<g font-family="monospace" font-size="11">
  <rect x="40" y="55" width="720" height="38" rx="4" fill="#111111"/>
  <text x="70" y="79" fill="#444444">Network Name</text><text x="300" y="79" fill="#FFFFFF">Brixs Mainnet</text><text x="710" y="79" fill="#333333" text-anchor="end">⎘</text>
  <line x1="40" y1="93" x2="760" y2="93" stroke="#111111" stroke-width="1"/>
  <text x="70" y="117" fill="#444444">RPC URL</text><text x="300" y="117" fill="#FFFFFF">https://rpc.brixs.network</text><text x="710" y="117" fill="#333333" text-anchor="end">⎘</text>
  <line x1="40" y1="131" x2="760" y2="131" stroke="#111111" stroke-width="1"/>
  <text x="70" y="155" fill="#444444">Chain ID</text><text x="300" y="155" fill="#FFFFFF">7171</text><text x="710" y="155" fill="#333333" text-anchor="end">⎘</text>
  <line x1="40" y1="169" x2="760" y2="169" stroke="#111111" stroke-width="1"/>
  <text x="70" y="193" fill="#444444">Currency Symbol</text><text x="300" y="193" fill="#FFFFFF">BRX</text><text x="710" y="193" fill="#333333" text-anchor="end">⎘</text>
  <line x1="40" y1="207" x2="760" y2="207" stroke="#111111" stroke-width="1"/>
  <text x="70" y="231" fill="#444444">Block Explorer</text><text x="300" y="231" fill="#FFFFFF">https://scan.brixs.network</text><text x="710" y="231" fill="#333333" text-anchor="end">⎘</text>
</g>
<rect x="40" y="265" width="720" height="52" rx="6" fill="#FFFFFF"/>
<text x="400" y="296" font-family="Arial" font-weight="600" font-size="15" fill="#000000" text-anchor="middle" letter-spacing="2">ADD BRIXS MAINNET TO METAMASK</text>
<text x="400" y="352" font-family="Arial" font-weight="300" font-size="14" fill="#555555" text-anchor="middle" letter-spacing="4">BRIXS TESTNET</text>
<rect x="40" y="368" width="720" height="52" rx="6" fill="#0A0A0A" stroke="#1A1A1A" stroke-width="1.5"/>
<text x="70" y="400" font-family="monospace" font-size="11" fill="#444444">Chain ID: 71711   RPC: https://testnet-rpc.brixs.network</text>
<rect x="40" y="432" width="720" height="40" rx="6" fill="#111111" stroke="#333333" stroke-width="1"/>
<text x="400" y="456" font-family="Arial" font-weight="500" font-size="13" fill="#888888" text-anchor="middle" letter-spacing="2">ADD TESTNET TO METAMASK</text>
</svg>"""

ASSETS["roadmap/26_timeline"] = """<svg width="800" height="900" viewBox="0 0 800 900" xmlns="http://www.w3.org/2000/svg">
<rect width="800" height="900" fill="#050505"/>
<text x="400" y="50" font-family="Arial" font-weight="300" font-size="14" fill="#555555" text-anchor="middle" letter-spacing="4">PATH TO THE OPEN MONEY STACK</text>
<line x1="400" y1="90" x2="400" y2="860" stroke="#1A1A1A" stroke-width="2"/>
<circle cx="400" cy="130" r="22" fill="#FFFFFF"/>
<text x="400" y="136" font-family="Arial" font-size="12" fill="#000000" text-anchor="middle" font-weight="bold">✓</text>
<rect x="30" y="100" width="340" height="80" rx="4" fill="#0D0D0D" stroke="#333333" stroke-width="1"/>
<text x="50" y="128" font-family="monospace" font-size="9" fill="#888888" letter-spacing="2">PHASE 1 · JUNE 2026 · DONE</text>
<text x="50" y="150" font-family="Arial" font-weight="600" font-size="15" fill="#FFFFFF">Testnet Launch</text>
<text x="50" y="170" font-family="monospace" font-size="9" fill="#555555">Chain live · RPC · Faucet · Explorer</text>
<line x1="400" y1="128" x2="400" y2="242" stroke="#1A1A1A" stroke-width="2" stroke-dasharray="4,6"/>
<circle cx="400" cy="270" r="22" fill="#111111" stroke="#FFFFFF" stroke-width="2"/>
<text x="400" y="276" font-family="Arial" font-size="11" fill="#888888" text-anchor="middle">2</text>
<rect x="430" y="240" width="340" height="80" rx="4" fill="#0D0D0D" stroke="#222222" stroke-width="1"/>
<text x="450" y="268" font-family="monospace" font-size="9" fill="#555555" letter-spacing="2">PHASE 2 · JULY 2026</text>
<text x="450" y="290" font-family="Arial" font-weight="600" font-size="15" fill="#FFFFFF">Ecosystem Launch</text>
<text x="450" y="310" font-family="monospace" font-size="9" fill="#444444">Main site · Grants · First 10 dApps</text>
<line x1="400" y1="292" x2="400" y2="392" stroke="#1A1A1A" stroke-width="2" stroke-dasharray="4,6"/>
<circle cx="400" cy="420" r="22" fill="#0D0D0D" stroke="#444444" stroke-width="2"/>
<text x="400" y="426" font-family="Arial" font-size="11" fill="#555555" text-anchor="middle">3</text>
<rect x="30" y="390" width="340" height="80" rx="4" fill="#080808" stroke="#1A1A1A" stroke-width="1"/>
<text x="50" y="418" font-family="monospace" font-size="9" fill="#444444" letter-spacing="2">PHASE 3 · AUGUST 2026</text>
<text x="50" y="440" font-family="Arial" font-weight="600" font-size="15" fill="#AAAAAA">Bridge Live</text>
<text x="50" y="460" font-family="monospace" font-size="9" fill="#333333">Cross-chain transfers from ETH / Base</text>
<line x1="400" y1="442" x2="400" y2="542" stroke="#1A1A1A" stroke-width="2" stroke-dasharray="4,6"/>
<circle cx="400" cy="570" r="22" fill="#080808" stroke="#333333" stroke-width="2"/>
<text x="400" y="576" font-family="Arial" font-size="11" fill="#444444" text-anchor="middle">4</text>
<rect x="430" y="540" width="340" height="80" rx="4" fill="#080808" stroke="#1A1A1A" stroke-width="1"/>
<text x="450" y="568" font-family="monospace" font-size="9" fill="#333333" letter-spacing="2">PHASE 4 · Q4 2026</text>
<text x="450" y="590" font-family="Arial" font-weight="600" font-size="15" fill="#888888">Mainnet</text>
<text x="450" y="610" font-family="monospace" font-size="9" fill="#2A2A2A">BRX Token · Staking · DAO Governance</text>
<line x1="400" y1="592" x2="400" y2="692" stroke="#111111" stroke-width="2" stroke-dasharray="4,6"/>
<circle cx="400" cy="720" r="22" fill="#050505" stroke="#222222" stroke-width="2"/>
<text x="400" y="726" font-family="Arial" font-size="11" fill="#333333" text-anchor="middle">5</text>
<rect x="30" y="690" width="340" height="80" rx="4" fill="#050505" stroke="#111111" stroke-width="1"/>
<text x="50" y="718" font-family="monospace" font-size="9" fill="#222222" letter-spacing="2">PHASE 5 · 2027</text>
<text x="50" y="740" font-family="Arial" font-weight="600" font-size="15" fill="#555555">Superchain</text>
<text x="50" y="760" font-family="monospace" font-size="9" fill="#222222">Base · Optimism · Mode interop</text>
</svg>"""

ASSETS["about/27_founder_story"] = """<svg width="900" height="400" viewBox="0 0 900 400" xmlns="http://www.w3.org/2000/svg">
<rect width="900" height="400" fill="#080808"/>
<rect x="40" y="40" width="280" height="320" rx="6" fill="#0D0D0D" stroke="#1A1A1A" stroke-width="1"/>
<circle cx="180" cy="165" r="75" fill="#141414"/>
<ellipse cx="180" cy="305" rx="100" ry="55" fill="#111111"/>
<text x="180" y="175" font-family="Arial" font-size="48" fill="#222222" text-anchor="middle">👤</text>
<text x="180" y="350" font-family="monospace" font-size="9" fill="#333333" text-anchor="middle">FOUNDER PHOTO</text>
<text x="370" y="75" font-family="monospace" font-size="9" fill="#333333" letter-spacing="3">ORIGIN STORY — JABALPUR, INDIA</text>
<text x="370" y="115" font-family="Arial" font-weight="300" font-size="26" fill="#FFFFFF">From a community of</text>
<text x="370" y="155" font-family="Arial" font-weight="700" font-size="48" fill="#FFFFFF">20,000</text>
<text x="370" y="195" font-family="Arial" font-weight="300" font-size="26" fill="#FFFFFF">to a global network.</text>
<line x1="370" y1="215" x2="840" y2="215" stroke="#1A1A1A" stroke-width="1"/>
<g font-family="Arial" font-weight="300" font-size="13" fill="#555555">
  <text x="370" y="248">At 19, a developer from Jabalpur built Apna Coding —</text>
  <text x="370" y="270">a community of 20,000+ developers across India.</text>
  <text x="370" y="292">He saw how gas fees locked emerging markets out of</text>
  <text x="370" y="314">Web3. Brixs Chain was born to fix that — zero gas,</text>
  <text x="370" y="336">EVM compatible, built for the next billion users.</text>
</g>
</svg>"""

ASSETS["about/28_team_grid"] = """<svg width="800" height="300" viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg">
<rect width="800" height="300" fill="#050505"/>
<g>
  <rect x="20" y="20" width="170" height="260" rx="6" fill="#0A0A0A" stroke="#1A1A1A" stroke-width="1"/>
  <rect x="50" y="45" width="110" height="110" rx="4" fill="#141414"/>
  <circle cx="105" cy="80" r="28" fill="#222222"/>
  <ellipse cx="105" cy="140" rx="38" ry="25" fill="#1A1A1A"/>
  <text x="105" y="185" font-family="Arial" font-weight="600" font-size="13" fill="#FFFFFF" text-anchor="middle">Aryan Sharma</text>
  <text x="105" y="203" font-family="monospace" font-size="9" fill="#444444" text-anchor="middle">Founder &amp; CEO</text>
  <line x1="40" y1="218" x2="170" y2="218" stroke="#111111" stroke-width="1"/>
  <text x="75" y="245" font-family="monospace" font-size="10" fill="#333333">𝕏</text><text x="110" y="245" font-family="monospace" font-size="10" fill="#333333">in</text>
  <rect x="210" y="20" width="170" height="260" rx="6" fill="#0A0A0A" stroke="#1A1A1A" stroke-width="1"/>
  <rect x="240" y="45" width="110" height="110" rx="4" fill="#141414"/>
  <circle cx="295" cy="80" r="28" fill="#222222"/>
  <ellipse cx="295" cy="140" rx="38" ry="25" fill="#1A1A1A"/>
  <text x="295" y="185" font-family="Arial" font-weight="600" font-size="13" fill="#FFFFFF" text-anchor="middle">Priya Nair</text>
  <text x="295" y="203" font-family="monospace" font-size="9" fill="#444444" text-anchor="middle">CTO</text>
  <line x1="230" y1="218" x2="360" y2="218" stroke="#111111" stroke-width="1"/>
  <text x="265" y="245" font-family="monospace" font-size="10" fill="#333333">𝕏</text><text x="300" y="245" font-family="monospace" font-size="10" fill="#333333">in</text>
  <rect x="400" y="20" width="170" height="260" rx="6" fill="#0A0A0A" stroke="#1A1A1A" stroke-width="1"/>
  <rect x="430" y="45" width="110" height="110" rx="4" fill="#141414"/>
  <circle cx="485" cy="80" r="28" fill="#222222"/>
  <ellipse cx="485" cy="140" rx="38" ry="25" fill="#1A1A1A"/>
  <text x="485" y="185" font-family="Arial" font-weight="600" font-size="13" fill="#FFFFFF" text-anchor="middle">Dev Mehta</text>
  <text x="485" y="203" font-family="monospace" font-size="9" fill="#444444" text-anchor="middle">Head of Protocol</text>
  <line x1="420" y1="218" x2="550" y2="218" stroke="#111111" stroke-width="1"/>
  <text x="455" y="245" font-family="monospace" font-size="10" fill="#333333">𝕏</text><text x="490" y="245" font-family="monospace" font-size="10" fill="#333333">in</text>
  <rect x="590" y="20" width="170" height="260" rx="6" fill="#0A0A0A" stroke="#1A1A1A" stroke-width="1"/>
  <rect x="620" y="45" width="110" height="110" rx="4" fill="#141414"/>
  <circle cx="675" cy="80" r="28" fill="#222222"/>
  <ellipse cx="675" cy="140" rx="38" ry="25" fill="#1A1A1A"/>
  <text x="675" y="185" font-family="Arial" font-weight="600" font-size="13" fill="#FFFFFF" text-anchor="middle">Sofia Reyes</text>
  <text x="675" y="203" font-family="monospace" font-size="9" fill="#444444" text-anchor="middle">DevRel Lead</text>
  <line x1="610" y1="218" x2="740" y2="218" stroke="#111111" stroke-width="1"/>
  <text x="645" y="245" font-family="monospace" font-size="10" fill="#333333">𝕏</text><text x="680" y="245" font-family="monospace" font-size="10" fill="#333333">in</text>
</g>
</svg>"""

ASSETS["features/29_crosschain_bridge"] = """<svg width="900" height="420" viewBox="0 0 900 420" xmlns="http://www.w3.org/2000/svg">
<rect width="900" height="420" fill="#050505"/>
<text x="450" y="38" font-family="Arial" font-weight="300" font-size="13" fill="#555555" text-anchor="middle" letter-spacing="4">FRAGMENTED LIQUIDITY IS DEAD</text>
<g>
  <rect x="30" y="70" width="140" height="50" rx="4" fill="#0D0D0D" stroke="#222222" stroke-width="1"/>
  <text x="100" y="100" font-family="monospace" font-size="11" fill="#777777" text-anchor="middle">Ethereum</text>
  <rect x="30" y="145" width="140" height="50" rx="4" fill="#0D0D0D" stroke="#222222" stroke-width="1"/>
  <text x="100" y="175" font-family="monospace" font-size="11" fill="#777777" text-anchor="middle">Base</text>
  <rect x="30" y="220" width="140" height="50" rx="4" fill="#0D0D0D" stroke="#222222" stroke-width="1"/>
  <text x="100" y="250" font-family="monospace" font-size="11" fill="#777777" text-anchor="middle">Arbitrum</text>
  <rect x="30" y="295" width="140" height="50" rx="4" fill="#0D0D0D" stroke="#222222" stroke-width="1"/>
  <text x="100" y="325" font-family="monospace" font-size="11" fill="#777777" text-anchor="middle">Optimism</text>
  <rect x="30" y="370" width="140" height="50" rx="4" fill="#0D0D0D" stroke="#222222" stroke-width="1"/>
  <text x="100" y="400" font-family="monospace" font-size="11" fill="#777777" text-anchor="middle">Polygon</text>
</g>
<g stroke="#FFFFFF" stroke-opacity="0.18" stroke-width="1.2">
  <line x1="170" y1="95" x2="350" y2="210"/>
  <line x1="170" y1="170" x2="350" y2="215"/>
  <line x1="170" y1="245" x2="350" y2="220"/>
  <line x1="170" y1="320" x2="350" y2="225"/>
  <line x1="170" y1="395" x2="350" y2="230"/>
</g>
<rect x="320" y="155" width="220" height="110" rx="6" fill="#111111" stroke="#FFFFFF" stroke-width="1.5"/>
<text x="430" y="198" font-family="monospace" font-size="10" fill="#888888" text-anchor="middle">BRIXS VAULT</text>
<text x="430" y="220" font-family="Arial" font-weight="600" font-size="14" fill="#FFFFFF" text-anchor="middle">Unified Liquidity</text>
<text x="430" y="242" font-family="monospace" font-size="8" fill="#555555" text-anchor="middle">Zero-slippage · Native Bridge</text>
<line x1="540" y1="210" x2="620" y2="210" stroke="#FFFFFF" stroke-opacity="0.4" stroke-width="2"/>
<polygon points="618,205 628,210 618,215" fill="#FFFFFF" fill-opacity="0.4"/>
<rect x="635" y="170" width="200" height="80" rx="6" fill="#0D0D0D" stroke="#FFFFFF" stroke-width="1.5"/>
<text x="735" y="208" font-family="Arial" font-weight="600" font-size="13" fill="#FFFFFF" text-anchor="middle">Your dApp</text>
<text x="735" y="232" font-family="monospace" font-size="9" fill="#555555" text-anchor="middle">Any Asset · Any Chain</text>
</svg>"""

ASSETS["features/30_account_abstraction"] = """<svg width="700" height="420" viewBox="0 0 700 420" xmlns="http://www.w3.org/2000/svg">
<rect width="700" height="420" fill="#080808"/>
<text x="350" y="38" font-family="Arial" font-weight="300" font-size="13" fill="#555555" text-anchor="middle" letter-spacing="4">EIP-4337 ACCOUNT ABSTRACTION</text>
<rect x="30" y="140" width="130" height="80" rx="6" fill="#0D0D0D" stroke="#2A2A2A" stroke-width="1"/>
<text x="95" y="175" font-family="monospace" font-size="10" fill="#888888" text-anchor="middle">USER</text>
<text x="95" y="196" font-family="monospace" font-size="9" fill="#444444" text-anchor="middle">FaceID / Google</text>
<line x1="160" y1="180" x2="225" y2="180" stroke="#FFFFFF" stroke-opacity="0.25" stroke-width="1.5"/>
<polygon points="223,175 232,180 223,185" fill="#FFFFFF" fill-opacity="0.25"/>
<rect x="235" y="140" width="130" height="80" rx="6" fill="#0D0D0D" stroke="#333333" stroke-width="1"/>
<text x="300" y="175" font-family="monospace" font-size="10" fill="#777777" text-anchor="middle">BUNDLER</text>
<text x="300" y="196" font-family="monospace" font-size="9" fill="#333333" text-anchor="middle">UserOp Pool</text>
<line x1="365" y1="180" x2="430" y2="180" stroke="#FFFFFF" stroke-opacity="0.25" stroke-width="1.5"/>
<polygon points="428,175 437,180 428,185" fill="#FFFFFF" fill-opacity="0.25"/>
<rect x="440" y="100" width="130" height="80" rx="6" fill="#111111" stroke="#FFFFFF" stroke-width="1.5"/>
<text x="505" y="135" font-family="monospace" font-size="10" fill="#FFFFFF" text-anchor="middle">PAYMASTER</text>
<text x="505" y="156" font-family="monospace" font-size="9" fill="#888888" text-anchor="middle">Sponsors Gas</text>
<rect x="440" y="220" width="130" height="80" rx="6" fill="#0D0D0D" stroke="#333333" stroke-width="1"/>
<text x="505" y="255" font-family="monospace" font-size="10" fill="#777777" text-anchor="middle">ENTRYPOINT</text>
<text x="505" y="276" font-family="monospace" font-size="9" fill="#333333" text-anchor="middle">EIP-4337</text>
<rect x="270" y="335" width="160" height="60" rx="6" fill="#111111" stroke="#FFFFFF" stroke-width="2"/>
<text x="350" y="362" font-family="Arial" font-weight="600" font-size="13" fill="#FFFFFF" text-anchor="middle">BRIXS CHAIN</text>
<text x="350" y="382" font-family="monospace" font-size="9" fill="#888888" text-anchor="middle">Zero Gas for Users</text>
<g stroke="#FFFFFF" stroke-opacity="0.18" stroke-width="1">
  <line x1="505" y1="180" x2="505" y2="220"/>
  <line x1="505" y1="300" x2="400" y2="335"/>
  <line x1="300" y1="220" x2="350" y2="335"/>
</g>
<text x="350" y="415" font-family="monospace" font-size="9" fill="#333333" text-anchor="middle" letter-spacing="2">USERS NEVER HOLD NATIVE TOKENS FOR GAS</text>
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
