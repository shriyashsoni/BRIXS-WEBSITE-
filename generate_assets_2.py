import os

BASE = r"e:\chain\brixs chain main mwebsite\brixs_assets"
ASSETS = {}

ASSETS["ecosystem/16_dapp_grid"] = """<svg width="900" height="500" viewBox="0 0 900 500" xmlns="http://www.w3.org/2000/svg">
<rect width="900" height="500" fill="#050505"/>
<rect x="40" y="30" width="820" height="38" rx="4" fill="#0D0D0D" stroke="#1A1A1A" stroke-width="1"/>
<g font-family="monospace" font-size="11">
  <rect x="55" y="40" width="50" height="18" rx="9" fill="#FFFFFF"/>
  <text x="80" y="53" fill="#000000" text-anchor="middle">All</text>
  <text x="145" y="53" fill="#444444">DeFi</text><text x="205" y="53" fill="#444444">NFT</text>
  <text x="265" y="53" fill="#444444">Gaming</text><text x="345" y="53" fill="#444444">Infra</text>
  <text x="420" y="53" fill="#444444">DAO</text><text x="480" y="53" fill="#444444">Tooling</text>
</g>
<g>
  <rect x="40" y="90" width="250" height="150" rx="6" fill="#0D0D0D" stroke="#1A1A1A" stroke-width="1"/>
  <rect x="60" y="110" width="40" height="40" rx="4" fill="#1A1A1A"/>
  <text x="80" y="135" font-family="monospace" font-size="9" fill="#FFFFFF" text-anchor="middle">BX</text>
  <text x="115" y="125" font-family="Arial" font-weight="600" font-size="13" fill="#FFFFFF">BrixSwap</text>
  <text x="115" y="142" font-family="monospace" font-size="9" fill="#444444">Native DEX</text>
  <text x="60" y="185" font-family="monospace" font-size="9" fill="#555555">Zero-slippage AMM on Brixs.</text>
  <rect x="60" y="218" width="60" height="14" rx="7" fill="#1A1A1A" stroke="#333333" stroke-width="1"/>
  <text x="90" y="229" font-family="monospace" font-size="8" fill="#777777" text-anchor="middle">DeFi</text>
  <text x="200" y="229" font-family="monospace" font-size="8" fill="#444444">LIVE ↗</text>
  <rect x="325" y="90" width="250" height="150" rx="6" fill="#0D0D0D" stroke="#1A1A1A" stroke-width="1"/>
  <rect x="345" y="110" width="40" height="40" rx="4" fill="#1A1A1A"/>
  <text x="365" y="135" font-family="monospace" font-size="9" fill="#FFFFFF" text-anchor="middle">LN</text>
  <text x="400" y="125" font-family="Arial" font-weight="600" font-size="13" fill="#FFFFFF">LendX</text>
  <text x="400" y="142" font-family="monospace" font-size="9" fill="#444444">Lending Protocol</text>
  <text x="345" y="185" font-family="monospace" font-size="9" fill="#555555">Gas-free collateralized lending.</text>
  <rect x="345" y="218" width="60" height="14" rx="7" fill="#1A1A1A" stroke="#333333" stroke-width="1"/>
  <text x="375" y="229" font-family="monospace" font-size="8" fill="#777777" text-anchor="middle">DeFi</text>
  <text x="485" y="229" font-family="monospace" font-size="8" fill="#444444">LIVE ↗</text>
  <rect x="610" y="90" width="250" height="150" rx="6" fill="#0D0D0D" stroke="#1A1A1A" stroke-width="1"/>
  <rect x="630" y="110" width="40" height="40" rx="4" fill="#1A1A1A"/>
  <text x="650" y="135" font-family="monospace" font-size="9" fill="#FFFFFF" text-anchor="middle">AG</text>
  <text x="685" y="125" font-family="Arial" font-weight="600" font-size="13" fill="#FFFFFF">AgentKit</text>
  <text x="685" y="142" font-family="monospace" font-size="9" fill="#444444">AI Infrastructure</text>
  <text x="630" y="185" font-family="monospace" font-size="9" fill="#555555">Deploy autonomous AI traders.</text>
  <rect x="630" y="218" width="70" height="14" rx="7" fill="#1A1A1A" stroke="#333333" stroke-width="1"/>
  <text x="665" y="229" font-family="monospace" font-size="8" fill="#777777" text-anchor="middle">Tooling</text>
  <text x="770" y="229" font-family="monospace" font-size="8" fill="#444444">LIVE ↗</text>
</g>
<g>
  <rect x="40" y="265" width="250" height="150" rx="6" fill="#0D0D0D" stroke="#1A1A1A" stroke-width="1"/>
  <rect x="60" y="285" width="40" height="40" rx="4" fill="#1A1A1A"/>
  <text x="80" y="310" font-family="monospace" font-size="9" fill="#FFFFFF" text-anchor="middle">RW</text>
  <text x="115" y="300" font-family="Arial" font-weight="600" font-size="13" fill="#FFFFFF">RWAProtocol</text>
  <text x="115" y="317" font-family="monospace" font-size="9" fill="#444444">Real World Assets</text>
  <text x="60" y="360" font-family="monospace" font-size="9" fill="#555555">Tokenize real estate on-chain.</text>
  <rect x="60" y="393" width="60" height="14" rx="7" fill="#1A1A1A" stroke="#333333" stroke-width="1"/>
  <text x="90" y="404" font-family="monospace" font-size="8" fill="#777777" text-anchor="middle">DeFi</text>
  <rect x="325" y="265" width="250" height="150" rx="6" fill="#0D0D0D" stroke="#1A1A1A" stroke-width="1"/>
  <rect x="345" y="285" width="40" height="40" rx="4" fill="#1A1A1A"/>
  <text x="365" y="310" font-family="monospace" font-size="9" fill="#FFFFFF" text-anchor="middle">NX</text>
  <text x="400" y="300" font-family="Arial" font-weight="600" font-size="13" fill="#FFFFFF">NexMint</text>
  <text x="400" y="317" font-family="monospace" font-size="9" fill="#444444">NFT Marketplace</text>
  <text x="345" y="360" font-family="monospace" font-size="9" fill="#555555">Gas-free ERC-721 trading.</text>
  <rect x="345" y="393" width="50" height="14" rx="7" fill="#1A1A1A" stroke="#333333" stroke-width="1"/>
  <text x="370" y="404" font-family="monospace" font-size="8" fill="#777777" text-anchor="middle">NFT</text>
  <rect x="610" y="265" width="250" height="150" rx="6" fill="#0D0D0D" stroke="#1A1A1A" stroke-width="1"/>
  <rect x="630" y="285" width="40" height="40" rx="4" fill="#1A1A1A"/>
  <text x="650" y="310" font-family="monospace" font-size="9" fill="#FFFFFF" text-anchor="middle">BR</text>
  <text x="685" y="300" font-family="Arial" font-weight="600" font-size="13" fill="#FFFFFF">BridgeX</text>
  <text x="685" y="317" font-family="monospace" font-size="9" fill="#444444">Cross-chain Bridge</text>
  <text x="630" y="360" font-family="monospace" font-size="9" fill="#555555">Instant bridging from ETH/Base.</text>
  <rect x="630" y="393" width="70" height="14" rx="7" fill="#1A1A1A" stroke="#333333" stroke-width="1"/>
  <text x="665" y="404" font-family="monospace" font-size="8" fill="#777777" text-anchor="middle">Infra</text>
</g>
</svg>"""

ASSETS["ecosystem/17_world_map_nodes"] = """<svg width="1200" height="500" viewBox="0 0 1200 500" xmlns="http://www.w3.org/2000/svg">
<rect width="1200" height="500" fill="#000000"/>
<g fill="none" stroke="#FFFFFF" stroke-opacity="0.05" stroke-width="0.8">
  <ellipse cx="300" cy="220" rx="180" ry="100"/>
  <ellipse cx="600" cy="200" rx="160" ry="120"/>
  <ellipse cx="900" cy="210" rx="200" ry="110"/>
  <ellipse cx="1050" cy="320" rx="80" ry="60"/>
</g>
<g stroke="#FFFFFF" stroke-opacity="0.03" stroke-width="0.5">
  <line x1="0" y1="100" x2="1200" y2="100"/><line x1="0" y1="200" x2="1200" y2="200"/>
  <line x1="0" y1="300" x2="1200" y2="300"/><line x1="0" y1="400" x2="1200" y2="400"/>
  <line x1="200" y1="0" x2="200" y2="500"/><line x1="400" y1="0" x2="400" y2="500"/>
  <line x1="600" y1="0" x2="600" y2="500"/><line x1="800" y1="0" x2="800" y2="500"/>
  <line x1="1000" y1="0" x2="1000" y2="500"/>
</g>
<g fill="#FFFFFF">
  <circle cx="820" cy="270" r="8" fill-opacity="1"/><circle cx="820" cy="270" r="18" fill-opacity="0.1"/>
  <circle cx="840" cy="250" r="4" fill-opacity="0.7"/><circle cx="800" cy="290" r="4" fill-opacity="0.6"/>
  <circle cx="855" cy="275" r="3" fill-opacity="0.5"/><circle cx="810" cy="255" r="3" fill-opacity="0.5"/>
  <circle cx="590" cy="290" r="7" fill-opacity="0.9"/><circle cx="590" cy="290" r="15" fill-opacity="0.1"/>
  <circle cx="610" cy="275" r="3.5" fill-opacity="0.6"/><circle cx="572" cy="305" r="3" fill-opacity="0.5"/>
  <circle cx="320" cy="310" r="6" fill-opacity="0.9"/><circle cx="320" cy="310" r="14" fill-opacity="0.1"/>
  <circle cx="340" cy="295" r="3" fill-opacity="0.6"/><circle cx="300" cy="325" r="3" fill-opacity="0.5"/>
  <circle cx="980" cy="260" r="5" fill-opacity="0.8"/><circle cx="1000" cy="280" r="4" fill-opacity="0.7"/>
</g>
<g stroke="#FFFFFF" stroke-opacity="0.15" stroke-width="0.8">
  <line x1="820" y1="270" x2="590" y2="290"/>
  <line x1="590" y1="290" x2="320" y2="310"/>
  <line x1="820" y1="270" x2="980" y2="260"/>
</g>
<text x="600" y="455" font-family="monospace" font-size="11" fill="#333333" text-anchor="middle" letter-spacing="4">INDIA · AFRICA · LATAM · SE ASIA — GLOBAL FIRST</text>
</svg>"""

ASSETS["ecosystem/18_stats_hero"] = """<svg width="1000" height="300" viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg">
<rect width="1000" height="300" fill="#000000"/>
<text x="500" y="55" font-family="Arial" font-weight="300" font-size="11" fill="#333333" text-anchor="middle" letter-spacing="6">THE BRIXS ECOSYSTEM</text>
<text x="500" y="115" font-family="Arial" font-weight="700" font-size="60" fill="#FFFFFF" text-anchor="middle">BUILT ON BRIXS</text>
<line x1="100" y1="140" x2="900" y2="140" stroke="#111111" stroke-width="1"/>
<text x="180" y="195" font-family="Arial" font-weight="700" font-size="42" fill="#FFFFFF" text-anchor="middle">120+</text>
<text x="180" y="220" font-family="monospace" font-size="10" fill="#333333" text-anchor="middle" letter-spacing="3">PROJECTS</text>
<line x1="335" y1="160" x2="335" y2="240" stroke="#111111" stroke-width="1"/>
<text x="500" y="195" font-family="Arial" font-weight="700" font-size="42" fill="#FFFFFF" text-anchor="middle">$500M+</text>
<text x="500" y="220" font-family="monospace" font-size="10" fill="#333333" text-anchor="middle" letter-spacing="3">TOTAL TVL</text>
<line x1="665" y1="160" x2="665" y2="240" stroke="#111111" stroke-width="1"/>
<text x="820" y="195" font-family="Arial" font-weight="700" font-size="42" fill="#FFFFFF" text-anchor="middle">1.5M+</text>
<text x="820" y="220" font-family="monospace" font-size="10" fill="#333333" text-anchor="middle" letter-spacing="3">USERS</text>
<line x1="100" y1="250" x2="900" y2="250" stroke="#111111" stroke-width="1"/>
</svg>"""

ASSETS["token/19_tokenomics_pie"] = """<svg width="700" height="600" viewBox="0 0 700 600" xmlns="http://www.w3.org/2000/svg">
<rect width="700" height="600" fill="#050505"/>
<text x="350" y="40" font-family="Arial" font-weight="300" font-size="14" fill="#555555" text-anchor="middle" letter-spacing="4">BRX TOKEN ALLOCATION</text>
<path d="M350,310 L350,130 A180,180 0 0,1 521,220 Z" fill="#FFFFFF" fill-opacity="0.9"/>
<path d="M350,310 L521,220 A180,180 0 0,1 415,484 Z" fill="#AAAAAA" fill-opacity="0.9"/>
<path d="M350,310 L415,484 A180,180 0 0,1 185,400 Z" fill="#666666" fill-opacity="0.9"/>
<path d="M350,310 L185,400 A180,180 0 0,1 204,185 Z" fill="#333333" fill-opacity="0.9"/>
<path d="M350,310 L204,185 A180,180 0 0,1 350,130 Z" fill="#111111" stroke="#555555" stroke-width="1"/>
<circle cx="350" cy="310" r="100" fill="#050505"/>
<text x="350" y="303" font-family="monospace" font-size="11" fill="#555555" text-anchor="middle">TOTAL</text>
<text x="350" y="325" font-family="Arial" font-weight="700" font-size="20" fill="#FFFFFF" text-anchor="middle">1B BRX</text>
<g font-family="monospace" font-size="11">
  <rect x="50" y="500" width="14" height="14" fill="#FFFFFF" fill-opacity="0.9"/>
  <text x="72" y="512" fill="#888888">Community 30%</text>
  <rect x="270" y="500" width="14" height="14" fill="#AAAAAA" fill-opacity="0.9"/>
  <text x="292" y="512" fill="#888888">Ecosystem 25%</text>
  <rect x="470" y="500" width="14" height="14" fill="#666666"/>
  <text x="492" y="512" fill="#888888">Contributors 20%</text>
  <rect x="50" y="530" width="14" height="14" fill="#333333"/>
  <text x="72" y="542" fill="#888888">Investors 15%</text>
  <rect x="270" y="530" width="14" height="14" fill="#111111" stroke="#555555" stroke-width="1"/>
  <text x="292" y="542" fill="#888888">Treasury 10%</text>
</g>
</svg>"""

ASSETS["token/20_brx_coin"] = """<svg width="500" height="500" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
<rect width="500" height="500" fill="#000000"/>
<defs>
  <radialGradient id="cg" cx="45%" cy="35%" r="65%">
    <stop offset="0%" stop-color="#FFFFFF" stop-opacity="1"/>
    <stop offset="40%" stop-color="#CCCCCC" stop-opacity="1"/>
    <stop offset="80%" stop-color="#888888" stop-opacity="1"/>
    <stop offset="100%" stop-color="#333333" stop-opacity="1"/>
  </radialGradient>
  <radialGradient id="cr" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#AAAAAA"/><stop offset="100%" stop-color="#222222"/>
  </radialGradient>
</defs>
<ellipse cx="250" cy="260" rx="190" ry="40" fill="url(#cr)"/>
<ellipse cx="250" cy="240" rx="190" ry="40" fill="url(#cr)"/>
<ellipse cx="250" cy="240" rx="190" ry="170" fill="url(#cg)"/>
<g stroke="#999999" stroke-opacity="0.3" stroke-width="1">
  <ellipse cx="250" cy="250" rx="188" ry="168"/><ellipse cx="250" cy="252" rx="185" ry="165"/>
</g>
<text x="250" y="220" font-family="Arial" font-weight="700" font-size="80" fill="#333333" text-anchor="middle">B</text>
<text x="250" y="280" font-family="Arial" font-weight="300" font-size="20" fill="#555555" text-anchor="middle" letter-spacing="8">BRX</text>
<ellipse cx="195" cy="170" rx="30" ry="8" fill="#FFFFFF" fill-opacity="0.4" transform="rotate(-30, 195, 170)"/>
</svg>"""

ASSETS["token/21_staking_ui"] = """<svg width="600" height="380" viewBox="0 0 600 380" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="380" fill="#080808"/>
<rect x="30" y="20" width="540" height="340" rx="6" fill="#0D0D0D" stroke="#1A1A1A" stroke-width="1"/>
<text x="300" y="58" font-family="Arial" font-weight="300" font-size="16" fill="#FFFFFF" text-anchor="middle" letter-spacing="3">STAKING CALCULATOR</text>
<line x1="60" y1="72" x2="540" y2="72" stroke="#1A1A1A" stroke-width="1"/>
<text x="60" y="100" font-family="monospace" font-size="10" fill="#444444" letter-spacing="2">STAKE AMOUNT</text>
<rect x="60" y="110" width="460" height="40" rx="4" fill="#080808" stroke="#2A2A2A" stroke-width="1"/>
<text x="80" y="135" font-family="Arial" font-weight="700" font-size="22" fill="#FFFFFF">10,000 BRX</text>
<rect x="60" y="165" width="460" height="4" rx="2" fill="#1A1A1A"/>
<rect x="60" y="165" width="230" height="4" rx="2" fill="#FFFFFF" fill-opacity="0.6"/>
<circle cx="290" cy="167" r="10" fill="#FFFFFF"/>
<text x="60" y="200" font-family="monospace" font-size="10" fill="#444444" letter-spacing="2">LOCK DURATION: 12 MONTHS</text>
<text x="60" y="240" font-family="monospace" font-size="10" fill="#444444" letter-spacing="2">ESTIMATED APY</text>
<text x="60" y="280" font-family="Arial" font-weight="700" font-size="52" fill="#FFFFFF">14.2%</text>
<line x1="60" y1="295" x2="540" y2="295" stroke="#1A1A1A" stroke-width="1"/>
<text x="60" y="325" font-family="monospace" font-size="11" fill="#555555">ANNUAL REWARD</text>
<text x="520" y="325" font-family="Arial" font-weight="600" font-size="16" fill="#FFFFFF" text-anchor="end">+1,420 BRX</text>
</svg>"""

ASSETS["token/22_vesting_table"] = """<svg width="800" height="380" viewBox="0 0 800 380" xmlns="http://www.w3.org/2000/svg">
<rect width="800" height="380" fill="#080808"/>
<text x="400" y="35" font-family="Arial" font-weight="300" font-size="13" fill="#555555" text-anchor="middle" letter-spacing="4">VESTING SCHEDULE</text>
<rect x="40" y="55" width="720" height="36" rx="3" fill="#111111"/>
<g font-family="monospace" font-size="10" fill="#555555">
  <text x="80" y="77">COHORT</text><text x="240" y="77">ALLOCATION</text>
  <text x="380" y="77">CLIFF</text><text x="500" y="77">VESTING</text><text x="640" y="77">TGE</text>
</g>
<g font-family="monospace" font-size="11">
  <rect x="40" y="91" width="720" height="40" fill="#0A0A0A"/>
  <text x="80" y="115" fill="#FFFFFF">Core Team</text><text x="240" y="115" fill="#888888">20%</text>
  <text x="380" y="115" fill="#888888">12 months</text><text x="500" y="115" fill="#888888">36 months</text><text x="640" y="115" fill="#888888">0%</text>
  <rect x="40" y="131" width="720" height="40" fill="#080808"/>
  <text x="80" y="155" fill="#FFFFFF">Investors</text><text x="240" y="155" fill="#888888">15%</text>
  <text x="380" y="155" fill="#888888">6 months</text><text x="500" y="155" fill="#888888">24 months</text><text x="640" y="155" fill="#888888">0%</text>
  <rect x="40" y="171" width="720" height="40" fill="#0A0A0A"/>
  <text x="80" y="195" fill="#FFFFFF">Community</text><text x="240" y="195" fill="#888888">30%</text>
  <text x="380" y="195" fill="#888888">None</text><text x="500" y="195" fill="#888888">48 months</text><text x="640" y="195" fill="#888888">5%</text>
  <rect x="40" y="211" width="720" height="40" fill="#080808"/>
  <text x="80" y="235" fill="#FFFFFF">Ecosystem</text><text x="240" y="235" fill="#888888">25%</text>
  <text x="380" y="235" fill="#888888">None</text><text x="500" y="235" fill="#888888">36 months</text><text x="640" y="235" fill="#888888">10%</text>
  <rect x="40" y="251" width="720" height="40" fill="#0A0A0A"/>
  <text x="80" y="275" fill="#FFFFFF">Foundation</text><text x="240" y="275" fill="#888888">10%</text>
  <text x="380" y="275" fill="#888888">None</text><text x="500" y="275" fill="#888888">48 months</text><text x="640" y="275" fill="#888888">2%</text>
</g>
<line x1="40" y1="291" x2="760" y2="291" stroke="#1A1A1A" stroke-width="1"/>
</svg>"""

ASSETS["grants/23_grant_tiers"] = """<svg width="900" height="400" viewBox="0 0 900 400" xmlns="http://www.w3.org/2000/svg">
<rect width="900" height="400" fill="#050505"/>
<rect x="20" y="40" width="200" height="320" rx="6" fill="#0A0A0A" stroke="#1A1A1A" stroke-width="1"/>
<text x="120" y="80" font-family="monospace" font-size="9" fill="#555555" text-anchor="middle" letter-spacing="3">TIER 1</text>
<text x="120" y="110" font-family="Arial" font-weight="700" font-size="28" fill="#FFFFFF" text-anchor="middle">$500</text>
<text x="120" y="132" font-family="monospace" font-size="9" fill="#444444" text-anchor="middle">MICRO GRANT</text>
<line x1="40" y1="150" x2="200" y2="150" stroke="#1A1A1A" stroke-width="1"/>
<g font-family="monospace" font-size="9" fill="#555555">
  <text x="40" y="175">· Hackathon winners</text><text x="40" y="195">· Small tools</text>
  <text x="40" y="215">· Open source libs</text><text x="40" y="235">· Docs contributions</text>
</g>
<rect x="40" y="320" width="140" height="28" rx="4" fill="#111111" stroke="#333333" stroke-width="1"/>
<text x="110" y="338" font-family="monospace" font-size="10" fill="#888888" text-anchor="middle">APPLY</text>
<rect x="235" y="40" width="200" height="320" rx="6" fill="#0D0D0D" stroke="#2A2A2A" stroke-width="1"/>
<text x="335" y="80" font-family="monospace" font-size="9" fill="#555555" text-anchor="middle" letter-spacing="3">TIER 2</text>
<text x="335" y="110" font-family="Arial" font-weight="700" font-size="28" fill="#FFFFFF" text-anchor="middle">$5K</text>
<text x="335" y="132" font-family="monospace" font-size="9" fill="#444444" text-anchor="middle">BUILDER GRANT</text>
<line x1="255" y1="150" x2="415" y2="150" stroke="#2A2A2A" stroke-width="1"/>
<g font-family="monospace" font-size="9" fill="#555555">
  <text x="255" y="175">· MVP deployments</text><text x="255" y="195">· Testnet protocols</text>
  <text x="255" y="215">· DeFi primitives</text><text x="255" y="235">· NFT infrastructure</text>
</g>
<rect x="255" y="320" width="140" height="28" rx="4" fill="#1A1A1A" stroke="#333333" stroke-width="1"/>
<text x="325" y="338" font-family="monospace" font-size="10" fill="#888888" text-anchor="middle">APPLY</text>
<rect x="450" y="20" width="210" height="360" rx="6" fill="#111111" stroke="#FFFFFF" stroke-width="2"/>
<text x="555" y="60" font-family="monospace" font-size="9" fill="#888888" text-anchor="middle" letter-spacing="3">TIER 3 · POPULAR</text>
<text x="555" y="100" font-family="Arial" font-weight="700" font-size="34" fill="#FFFFFF" text-anchor="middle">$25K</text>
<text x="555" y="124" font-family="monospace" font-size="9" fill="#666666" text-anchor="middle">GROWTH GRANT</text>
<line x1="470" y1="142" x2="640" y2="142" stroke="#333333" stroke-width="1"/>
<g font-family="monospace" font-size="9" fill="#888888">
  <text x="470" y="168">· Audited mainnet protocols</text><text x="470" y="188">· Liquidity programs</text>
  <text x="470" y="208">· Cross-chain integrations</text><text x="470" y="228">· Agentic tooling</text>
  <text x="470" y="248">· DAO governance tools</text>
</g>
<rect x="470" y="330" width="150" height="32" rx="4" fill="#FFFFFF"/>
<text x="545" y="351" font-family="monospace" font-size="11" fill="#000000" text-anchor="middle" font-weight="bold">APPLY NOW</text>
<rect x="675" y="40" width="200" height="320" rx="6" fill="#0A0A0A" stroke="#1A1A1A" stroke-width="1"/>
<text x="775" y="80" font-family="monospace" font-size="9" fill="#555555" text-anchor="middle" letter-spacing="3">TIER 4</text>
<text x="775" y="110" font-family="Arial" font-weight="700" font-size="24" fill="#FFFFFF" text-anchor="middle">$100K+</text>
<text x="775" y="132" font-family="monospace" font-size="9" fill="#444444" text-anchor="middle">STRATEGIC</text>
<line x1="695" y1="150" x2="855" y2="150" stroke="#1A1A1A" stroke-width="1"/>
<g font-family="monospace" font-size="9" fill="#555555">
  <text x="695" y="175">· Core infrastructure</text><text x="695" y="195">· Liquidity provision</text>
  <text x="695" y="215">· Institutional partners</text><text x="695" y="235">· Strategic alliances</text>
</g>
<rect x="695" y="320" width="140" height="28" rx="4" fill="#111111" stroke="#333333" stroke-width="1"/>
<text x="765" y="338" font-family="monospace" font-size="10" fill="#888888" text-anchor="middle">CONTACT</text>
</svg>"""

ASSETS["grants/24_apply_timeline"] = """<svg width="600" height="700" viewBox="0 0 600 700" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="700" fill="#080808"/>
<text x="300" y="45" font-family="Arial" font-weight="300" font-size="14" fill="#555555" text-anchor="middle" letter-spacing="4">APPLICATION PROCESS</text>
<line x1="300" y1="80" x2="300" y2="640" stroke="#222222" stroke-width="2"/>
<circle cx="300" cy="110" r="18" fill="#FFFFFF"/>
<text x="300" y="116" font-family="Arial" font-weight="700" font-size="14" fill="#000000" text-anchor="middle">1</text>
<text x="340" y="105" font-family="Arial" font-weight="600" font-size="14" fill="#FFFFFF">Submit Application</text>
<text x="340" y="124" font-family="monospace" font-size="10" fill="#444444">5 mins · Typeform · No KYC required</text>
<line x1="300" y1="128" x2="300" y2="242" stroke="#1A1A1A" stroke-width="2" stroke-dasharray="4,6"/>
<circle cx="300" cy="260" r="18" fill="#333333" stroke="#FFFFFF" stroke-width="2"/>
<text x="300" y="266" font-family="Arial" font-weight="700" font-size="14" fill="#FFFFFF" text-anchor="middle">2</text>
<text x="340" y="255" font-family="Arial" font-weight="600" font-size="14" fill="#FFFFFF">Foundation Review</text>
<text x="340" y="274" font-family="monospace" font-size="10" fill="#444444">1-2 weeks · Internal committee</text>
<line x1="300" y1="278" x2="300" y2="392" stroke="#1A1A1A" stroke-width="2" stroke-dasharray="4,6"/>
<circle cx="300" cy="410" r="18" fill="#222222" stroke="#FFFFFF" stroke-width="2"/>
<text x="300" y="416" font-family="Arial" font-weight="700" font-size="14" fill="#FFFFFF" text-anchor="middle">3</text>
<text x="340" y="405" font-family="Arial" font-weight="600" font-size="14" fill="#FFFFFF">Interview &amp; DD</text>
<text x="340" y="424" font-family="monospace" font-size="10" fill="#444444">30 min call · Technical deep-dive</text>
<line x1="300" y1="428" x2="300" y2="542" stroke="#1A1A1A" stroke-width="2" stroke-dasharray="4,6"/>
<circle cx="300" cy="560" r="18" fill="#111111" stroke="#555555" stroke-width="2"/>
<text x="300" y="566" font-family="Arial" font-weight="700" font-size="14" fill="#777777" text-anchor="middle">4</text>
<text x="340" y="555" font-family="Arial" font-weight="600" font-size="14" fill="#FFFFFF">Funding &amp; Milestones</text>
<text x="340" y="574" font-family="monospace" font-size="10" fill="#444444">Milestone-based · On-chain payment</text>
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
