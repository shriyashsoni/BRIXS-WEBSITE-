# Network Topology

## 1. Node Types
Brixs Chain supports a diverse set of nodes to ensure decentralization:
- **Validator Nodes**: Heavy-duty servers that participate in BrixsBFT consensus. Require substantial BRIX staking.
- **Full Nodes**: Maintain the current state and verify blocks, but do not vote in consensus. They serve RPC requests and offload traffic from validators.
- **Archive Nodes**: Store the entire historical state and transaction history of the blockchain since genesis.
- **Light Clients**: Cryptographically verify block headers without downloading the full state, perfect for mobile wallets.

## 2. Peer-to-Peer Protocol
The P2P layer is built on libp2p. We implement a custom gossip protocol that optimizes bandwidth by utilizing Erasure Coding for block propagation, ensuring that a block can be reconstructed even if some packets are dropped.

## 3. Sentry Node Architecture
To protect Validator nodes from DDoS attacks, Validators sit behind a ring of Sentry Nodes. Public IPs of Validators are hidden; they only communicate with their trusted sentries, which handle all external P2P traffic.
