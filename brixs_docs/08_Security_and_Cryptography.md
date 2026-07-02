# Security and Cryptography

## 1. Cryptographic Primitives
- **Signatures**: Ed25519 for user transactions (fast, secure).
- **Consensus Signatures**: BLS (Boneh-Lynn-Shacham) signatures are used by validators. BLS allows signature aggregation, meaning 1,000 validator signatures can be compressed into a single, small signature, drastically reducing block size.
- **Hashing**: SHA-3 (Keccak) for state hashes and transaction IDs.

## 2. Post-Quantum Readiness
While currently using elliptic curves, the Brixs architecture is designed with cryptographic agility. We have mapped out a transition path to lattice-based cryptography (e.g., CRYSTALS-Dilithium) to ensure the chain remains secure against future quantum computer threats.

## 3. Slashing Conditions
Validators are economically penalized (slashed) for malicious behavior:
- **Equivocation (Double Signing)**: Signing two different blocks at the same height. (Severe penalty)
- **Liveness Failure**: Falling offline for extended periods. (Minor penalty / unbonding)

## 4. Formal Verification
Core protocol components and standard library smart contracts undergo rigorous formal verification to mathematically prove the absence of critical vulnerabilities.
