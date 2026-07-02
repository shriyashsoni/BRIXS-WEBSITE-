const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const urls = {
  "Aptos": "https://aptosnetwork.com/",
  "Ethereum": "https://ethereum.org",
  "Solana": "https://solana.com",
  "Bitcoin": "https://bitcoin.org",
  "Avalanche": "https://avax.network",
  "Cardano": "https://cardano.org",
  "Sui": "https://sui.io",
  "NEAR": "https://near.org",
  "Polkadot": "https://polkadot.com",
  "Cosmos": "https://cosmos.network",
  "Polygon": "https://polygon.technology",
  "Arbitrum": "https://arbitrum.io",
  "Optimism": "https://optimism.io",
  "Base": "https://base.org",
  "zkSync": "https://zksync.io",
  "Starknet": "https://starknet.io"
};

const baseDir = __dirname;

async function run() {
  console.log("Starting browser in visible mode...");
  // Launching browser with headless: false so the user can watch!
  const browser = await puppeteer.launch({ 
    headless: false, 
    defaultViewport: null,
    args: ['--start-maximized']
  });

  for (const [name, url] of Object.entries(urls)) {
    console.log(`Navigating to ${name} (${url})...`);
    
    // Create a separate folder for each blockchain
    const blockChainDir = path.join(baseDir, name);
    if (!fs.existsSync(blockChainDir)){
        fs.mkdirSync(blockChainDir, { recursive: true });
    }

    try {
      const page = await browser.newPage();
      await page.setViewport({ width: 1920, height: 1080 });
      
      // Go to the URL and wait for domcontentloaded
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
      
      // Wait for 5 seconds to let the user see the website and let animations load
      await new Promise(r => setTimeout(r, 5000));
      
      // Take full page screenshot
      const screenshotPath = path.join(blockChainDir, `${name}_homepage_full.png`);
      await page.screenshot({ 
          path: screenshotPath, 
          fullPage: true 
      });
      
      console.log(`Saved full page screenshot for ${name} at ${screenshotPath}`);
      await page.close();
    } catch (err) {
      console.error(`Failed to screenshot ${name}:`, err.message);
    }
  }
  
  console.log("Finished taking all screenshots!");
  await browser.close();
}

run();
