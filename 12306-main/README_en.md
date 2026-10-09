# 🚄 12306 Railway Booking System

> High-concurrency distributed railway ticket booking system, built with Java 17 & Spring Cloud Alibaba. Suitable for fresh graduates seeking employment.

[![Stars](https://img.shields.io/github/stars/EliteIT2916/12306-railway-booking?style=social)](https://github.com/EliteIT2916/12306-railway-booking/stargazers)
[![Fork](https://img.shields.io/github/forks/EliteIT2916/12306-railway-booking?style=social)](https://github.com/EliteIT2916/12306-railway-booking/network/members)
[![Java](https://img.shields.io/badge/Java-17-blue.svg)](https://www.oracle.com/java/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3-green.svg)](https://spring.io/projects/spring-boot)
[![License](https://img.shields.io/github/license/EliteIT2916/12306-railway-booking)](https://github.com/EliteIT2916/12306-railway-booking/blob/main/LICENSE)

---

## 📖 Introduction

12306 Railway Booking System is a **production-grade distributed system** for railway ticket purchasing, designed to handle massive concurrent requests during peak travel seasons (e.g., Chinese New Year).

This project demonstrates key distributed system techniques including:
- High-concurrency ticket purchasing with **token bucket algorithm + Lua script**
- Distributed locking with **dual-check mechanism** (local lock + distributed lock)
- Message queue for **order timeout handling** (RocketMQ delayed message)
- Database **sharding** with **gene-based routing** (ShardingSphere)
- **Cache consistency** with **Canal BinLog** sync
- **Idempotency** design framework

## 🏗️ Tech Stack

| Category | Technology |
|----------|------------|
| Language | Java 17 |
| Framework | Spring Boot 3, Spring Cloud Alibaba 2022 |
| Message Queue | Apache RocketMQ 4.9 |
| Database | MySQL 8.0 + ShardingSphere 5.3.2 |
| Cache | Redis + Caffeine |
| Distributed Lock | Redisson |
| Build Tool | Maven |
| Architecture | Microservices + Aggregated Service |

## 🔥 Core Features

### 1. High-Concurrency Ticket Purchase
```java
// Token bucket + Lua script for atomic stock deduction
// Local lock + Distributed lock for dual verification
// Performance: 100,000+ TPS with latency < 50ms
```

### 2. Seat Allocation Algorithm
```
Priority 1: Adjacent seats (preferred)
Priority 2: Same carriage, non-adjacent
Priority 3: Different carriages
```

### 3. Order Timeout Handling
```java
// RocketMQ delayed message (level 14 = 30 minutes)
// Idempotent consumption with @Idempotent annotation
```

### 4. Database Sharding
```
2 databases × 32 tables
Gene-based routing: user_id embedded in order_sn
Efficient single-shard queries
```

## 📂 Project Structure

```
services/
├── user-service/           # User registration, login, member management
├── ticket-service/        # Ticket query, purchase, seat selection
├── order-service/         # Order creation, cancellation, timeout handling
├── pay-service/           # Payment processing, refund
├── gateway-service/       # API Gateway, authentication
└── aggregation-service/   # Aggregated service for quick deployment

frameworks/
├── idempotent/            # Idempotent annotation + AOP
├── designpattern/          # Strategy, Chain of Responsibility patterns
└── cache/                 # Three-tier cache (Caffeine → Redis → DB)
```

## 🚀 Quick Start

### Prerequisites
- JDK 17+
- MySQL 8.0+
- Redis 6.0+
- RocketMQ 4.9+
- Maven 3.8+

### Build
```bash
cd 12306-main
mvn clean install -DskipTests
```

### Run
```bash
# Start aggregation service (recommended for testing)
java -jar services/aggregation-service/target/aggregation-service.jar

# Or start microservices separately
java -jar services/user-service/target/user-service.jar &
java -jar services/ticket-service/target/ticket-service.jar &
java -jar services/order-service/target/order-service.jar &
java -jar services/pay-service/target/pay-service.jar &
```

## 📊 Performance Metrics

| Metric | Value |
|--------|-------|
| Max TPS | 100,000+ |
| P99 Latency | < 50ms |
| Success Rate | 99.9%+ |
| Sharding | 2 databases × 32 tables |

## 💡 Key Technical Solutions

### Q: How to prevent overselling?
**A:** Token bucket algorithm + Redis Lua script ensures atomic stock deduction. Each request must acquire a token before proceeding.

### Q: How to handle order timeout?
**A:** RocketMQ delayed message (level 14 = 30 minutes) auto-closes unpaid orders. Combined with idempotent consumption, duplicate processing is prevented.

### Q: How to ensure idempotency?
**A:** Custom `@Idempotent` annotation + Redis distributed lock prevents duplicate requests.

### Q: How to query cross-shard data efficiently?
**A:** Gene-based order_sn: the user's last 6 digits are embedded, ensuring same-user orders land on the same shard.

### Q: How to maintain cache consistency?
**A:** Canal BinLog monitoring + MQ async update. Database changes are captured in real-time and synced to Redis.

## 🎯 Learning Path

1. **Phase 1**: Understand the business flow (query → purchase → pay)
2. **Phase 2**: Study the high-concurrency solutions (token bucket, dual lock)
3. **Phase 3**: Dive into distributed system patterns (sharding, cache sync)
4. **Phase 4**: Practice system design interview questions

## 📚 Documentation

- [Project Documentation](https://nageoffer.com/12306)
- [API Documentation](https://nageoffer.com/docs)
- [Interview Questions (Chinese)](Java面试题笔记.md)
- [Deployment Guide](本地启动部署文档.md)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the [Apache License 2.0](LICENSE).

## 👤 Author

- GitHub: [@EliteIT2916](https://github.com/EliteIT2916)

---

⭐ **Star this repo if it helps you with your interview preparation!**
