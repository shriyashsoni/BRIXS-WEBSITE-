# Core Architecture

## 1. High-Level Design
Brixs Chain employs a modular, layered architecture that strictly separates consensus from execution. This enables the network to scale horizontally and upgrade components independently.

### 1.1 The Networking Layer
A highly optimized P2P gossip protocol designed for low-latency block propagation across the globe. It uses a modified Kademlia DHT for efficient peer discovery and topology management.

### 1.2 The Consensus Layer (BrixsBFT)
A leader-based, Byzantine Fault Tolerant consensus engine that pipelines block proposal and voting phases. It ensures that once a block is committed, it can never be reverted (Absolute Finality).

### 1.3 The Execution Layer (BrixsVM)
A custom Virtual Machine built in Rust. It utilizes a multi-threaded execution engine that pre-analyzes transaction read/write sets to build a dependency graph, executing non-conflicting transactions on separate CPU cores concurrently.

### 1.4 The State Layer
An optimized state tree (Brixs Trie) layered over RocksDB. It separates hot state (frequently accessed data) from cold state, caching hot state in memory for microsecond retrieval times.
