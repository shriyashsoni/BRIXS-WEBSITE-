# Scalability and Performance

## 1. Horizontal vs Vertical Scaling
Brixs Chain maximizes vertical scaling (squeezing every ounce of performance from modern multi-core hardware) while laying the groundwork for horizontal scaling (sharding).

## 2. The 150k TPS Benchmark
In our load-testing environment, a globally distributed network of 100 validator nodes achieves sustained throughput of >150,000 TPS.
This is achieved by:
- Signature verification offloading to GPUs.
- Parallel transaction execution.
- Network-level pipelining.

## 3. Predictable Fees
Because independent transactions do not compete for the same state locks, a viral NFT mint does not cause fees to spike for someone executing a DeFi swap. Gas markets are localized to the specific state objects being accessed.

## 4. Future: Dynamic Sharding
Phase 3 of our roadmap introduces Dynamic State Sharding, allowing the network to split into parallel sub-networks automatically as global load increases, theoretically offering infinite scalability.
