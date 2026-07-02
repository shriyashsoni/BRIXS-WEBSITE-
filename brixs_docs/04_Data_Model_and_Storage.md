# Data Model and Storage

## 1. Object-Centric Paradigm
Instead of a purely account-based model (like Ethereum) or a pure UTXO model (like Bitcoin), Brixs Chain uses an **Object-Centric Model**. Everything on the chain is an object with a unique ID, owner, and typed data.

## 2. State Tree: The Brixs Trie
We utilize a highly concurrent, sparse Merkle tree. Traditional Patricia Tries become a bottleneck due to lock contention during state updates. The Brixs Trie allows concurrent lock-free updates to different branches.

## 3. Storage Economics
To combat state bloat, Brixs Chain implements **State Rent**. Objects that exist in the hot state must pay a fractional fee over time. If rent is not paid, objects are compressed and moved to cold storage (Archival nodes). They can be re-activated by paying a restoration fee.

## 4. Database Engine
The underlying storage utilizes a heavily tuned instance of RocksDB, with custom compaction algorithms optimized for NVMe SSDs to handle millions of IOPS.
