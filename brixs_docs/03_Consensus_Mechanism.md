# Consensus Mechanism: BrixsBFT

## 1. Overview
BrixsBFT is our proprietary consensus algorithm, an evolution of the traditional practical Byzantine Fault Tolerance (pBFT). It is heavily optimized for high-throughput, low-latency environments.

## 2. Pipelined Architecture
Unlike traditional BFT where nodes wait for a block to be fully committed before proposing the next, BrixsBFT pipelines proposals. A leader can propose block N+1 while the network is still voting on block N.

## 3. Leader Rotation and Reputation
To prevent DoS attacks on a static leader, BrixsBFT rotates leaders rapidly based on a deterministic, verifiable random function (VRF). Validators build a reputation score based on their uptime and latency. High-performing validators have a statistically higher chance of being elected leader.

## 4. Sub-Second Finality
Because Brixs Chain uses a BFT variant rather than Nakamoto consensus, there are no forks under normal operation. Once 2/3rds of validators sign a block, it is irreversibly finalized. Our network topology targets a global finality time of ~400 milliseconds.
