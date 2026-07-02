# Implementation Details

## 1. The Codebase
The core Brixs node is written entirely in **Rust** to guarantee memory safety, thread safety, and bare-metal performance. 

## 2. Concurrency Model
We heavily utilize the `tokio` asynchronous runtime. Network I/O, RPC requests, and disk operations are entirely non-blocking. 

## 3. Modularity
The codebase is structured into distinct crates (modules):
- `brixs-core`: Shared primitives and data structures.
- `brixs-consensus`: The BrixsBFT implementation.
- `brixs-vm`: The smart contract execution engine.
- `brixs-network`: The P2P libp2p implementation.
- `brixs-storage`: The RocksDB wrapper and state trie.

This strict modularity allows researchers to easily swap out the consensus engine or VM for experimental purposes without rewriting the entire node.

## 4. CI/CD and Testing
Every pull request undergoes thousands of unit tests, integration tests, and simulated adversarial network conditions (Chaos Engineering) using our custom `brixs-sim` framework.
