const networks = {
  Base: "https://mainnet.base.org",
  Ethereum: "https://ethereum-rpc.publicnode.com",
  BNB: "https://bsc-dataseed1.defibit.io/",
  Arbitrum: "https://arb1.arbitrum.io/rpc",
  Optimism: "https://mainnet.optimism.io"
};

async function checkRPC(name, url) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Termux/Android)'
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        method: 'eth_blockNumber',
        params: [],
        id: 1
      })
    });

    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
    
    const data = await response.json();
    if (data.result) {
      console.log(`✅ ${name}: Connected (Block: ${parseInt(data.result, 16)})`);
    } else {
      console.log(`❌ ${name}: RPC Error (Invalid JSON structure)`);
    }
  } catch (e) {
    console.log(`❌ ${name}: Connection Failed (${e.message})`);
  }
}

async function runAll() {
  console.log("🚀 Starting Sovereign Identity Engine Audit...\n");
  for (const [name, url] of Object.entries(networks)) {
    await checkRPC(name, url);
  }
  console.log("\n✅ FINAL AUDIT DONE");
}

runAll();
