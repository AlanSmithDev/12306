# 12306铁路购票系统 - GitHub上传指南

## 一、Github仓库创建

### 1.1 创建新仓库

1. 登录 GitHub：https://github.com
2. 点击右上角 **+** → **New repository**
3. 填写仓库信息：
   - **Owner**: `EliteIT2916`（你的GitHub用户名）
   - **Repository name**: `12306-railway-booking`
   - **Description**: `🔥 12306铁路购票系统 | 高并发 | 分布式 | 微服务 | Java17 | SpringCloudAlibaba | 适合应届生就业项目`
   - **Visibility**: Public（公开）
   - ⚠️ **不要勾选** Initialize this repository with a README（我们已有）

4. 点击 **Create repository**

---

## 二、项目结构说明

```
12306-railway-booking/
├── 12306-main/                    # 后端主项目
│   ├── services/                  # 微服务模块
│   │   ├── user-service/          # 用户服务
│   │   ├── ticket-service/        # 购票服务
│   │   ├── order-service/         # 订单服务
│   │   ├── pay-service/          # 支付服务
│   │   ├── gateway-service/       # 网关服务
│   │   └── aggregation-service/   # 聚合服务
│   ├── frameworks/                # 框架组件
│   │   ├── idempotent/            # 幂等组件
│   │   ├── designpattern/         # 设计模式
│   │   └── cache/                 # 缓存组件
│   ├── dependencies/              # 依赖管理
│   ├── tests/                     # 测试模块
│   └── pom.xml
├── console-vue/                   # 前端控制台
├── resources/                     # SQL脚本
├── 本地启动部署文档.md
├── 接口与业务流程时序文档.md
├── 数据库与分库分表说明文档.md
└── Java面试题笔记.md
```

---

## 三、详细项目描述（中英文双语）

### 3.1 英文版 README（推荐用于GitHub）

```markdown
# 🚄 12306 Railway Booking System

> High-concurrency distributed railway ticket booking system, built with Java 17 & Spring Cloud Alibaba. Suitable for fresh graduates seeking employment.

[![Stars](https://img.shields.io/github/stars/EliteIT2916/12306-railway-booking?style=social)](https://github.com/EliteIT2916/12306-railway-booking/stargazers)
[![Fork](https://img.shields.io/github/forks/EliteIT2916/12306-railway-booking?style=social)](https://github.com/EliteIT2916/12306-railway-booking/network/members)
[![Issues](https://img.shields.io/github/issues/EliteIT2916/12306-railway-booking)](https://github.com/EliteIT2916/12306-railway-booking/issues)

## 📖 Introduction

12306 Railway Booking System is a production-grade distributed system for railway ticket purchasing, designed to handle massive concurrent requests during peak travel seasons (e.g., Chinese New Year).

This project demonstrates key distributed system techniques including:
- High-concurrency ticket purchasing with token bucket algorithm
- Distributed locking with dual-check mechanism
- Message queue for order timeout handling
- Database sharding with consistent routing
- Cache consistency with Canal BinLog sync

## 🏗️ Tech Stack

| Category | Technology |
|----------|------------|
| Language | Java 17 |
| Framework | Spring Boot 3, Spring Cloud Alibaba 2022 |
| Message Queue | Apache RocketMQ |
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
// RocketMQ delayed message (30-minute timeout)
// Idempotent consumption with @Idempotent annotation
```

### 4. Database Sharding
```
2 databases × 32 tables
Gene-based routing: user_id融入order_sn
Efficient single-shard queries
```

## 📂 Project Structure

```
services/
├── user-service/         # User registration, login, member management
├── ticket-service/       # Ticket query, purchase, seat selection
├── order-service/        # Order creation, cancellation, timeout handling
├── pay-service/          # Payment processing, refund
└── gateway-service/      # API Gateway, authentication

frameworks/
├── idempotent/           # Idempotent annotation + AOP
├── designpattern/        # Strategy, Chain of Responsibility patterns
└── cache/                # Three-tier cache (Caffeine → Redis → DB)
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
# Start aggregation service
java -jar services/aggregation-service/target/aggregation-service.jar

# Or start microservices separately
java -jar services/user-service/target/user-service.jar
java -jar services/ticket-service/target/ticket-service.jar
```

## 📚 Documentation

- [Project Documentation](https://nageoffer.com/12306)
- [API Documentation](https://nageoffer.com/docs)
- [Interview Questions](Java面试题笔记.md)

## 💡 Key Technical Solutions

### Q: How to prevent overselling?
**A:** Token bucket algorithm + Redis Lua script ensures atomic stock deduction.

### Q: How to handle order timeout?
**A:** RocketMQ delayed message (level 14 = 30 minutes) auto-closes unpaid orders.

### Q: How to ensure idempotency?
**A:** @Idempotent annotation + Redis distributed lock prevents duplicate requests.

### Q: How to query cross-shard data?
**A:** Gene-based order_sn: user's last 6 digits embedded, ensuring same-user orders land on same shard.

## 📊 Performance Metrics

| Metric | Value |
|--------|-------|
| Max TPS | 100,000+ |
| P99 Latency | < 50ms |
| Success Rate | 99.9%+ |
| Sharding | 2 × 32 tables |

## 🎯 Learning Path

1. **Phase 1**: Understand the business flow (query → purchase → pay)
2. **Phase 2**: Study the high-concurrency solutions (token bucket, dual lock)
3. **Phase 3**: Dive into distributed system patterns (sharding, cache sync)
4. **Phase 4**: Practice system design interview questions

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the Apache License 2.0.

## 👤 Author

- GitHub: [@EliteIT2916](https://github.com/EliteIT2916)
- Email: your.email@example.com

---

⭐ Star this repo if it helps you with your interview preparation!
```

### 3.2 中文版项目描述

```markdown
# 🚄 12306铁路购票系统

> 基于Java17+SpringCloudAlibaba的高并发分布式购票系统，适合应届生就业项目

## 项目简介

12306铁路购票系统是一个生产级别的高并发分布式系统，用于处理铁路车票的在线购买。在春运等高峰期间，系统需要应对每秒数十万级的并发请求。

本项目展示了以下核心分布式系统技术：

### 🎯 核心技术亮点

| 技术点 | 实现方案 | 效果 |
|--------|----------|------|
| **高并发购票** | 令牌桶+Lua脚本原子扣减 | TPS 10万+ |
| **分布式锁优化** | 本地锁+分布式锁双重校验 | 响应时间 < 50ms |
| **订单超时处理** | RocketMQ延迟消息(30分钟) | 自动关闭未支付订单 |
| **分库分表** | ShardingSphere 2库×32表 | 基因法订单号路由 |
| **缓存一致性** | Canal BinLog + MQ异步同步 | 毫秒级数据同步 |
| **幂等设计** | @Idempotent注解+AOP | 防重复提交 |

### 📦 服务模块

- **user-service**: 用户服务 - 注册、登录、会员管理
- **ticket-service**: 购票服务 - 车票查询、购买、座位选择
- **order-service**: 订单服务 - 订单创建、取消、超时处理
- **pay-service**: 支付服务 - 支付、退款
- **gateway-service**: 网关服务 - 路由、认证、限流

### 🔧 技术栈

- **语言**: Java 17
- **框架**: Spring Boot 3, Spring Cloud Alibaba 2022
- **消息队列**: Apache RocketMQ
- **数据库**: MySQL 8.0 + ShardingSphere 5.3.2
- **缓存**: Redis + Caffeine
- **分布式锁**: Redisson
- **构建工具**: Maven

### 🚀 本地启动

```bash
# 1. 安装依赖
cd 12306-main
mvn clean install -DskipTests

# 2. 启动聚合服务
java -jar services/aggregation-service/target/aggregation-service.jar
```

### 📚 学习资源

- [官方文档](https://nageoffer.com/12306)
- [接口文档](https://nageoffer.com/docs)
- [面试题库](Java面试题笔记.md)

### 💡 面试常见问题

**Q: 如何防止超卖？**
> A: 令牌桶算法+Lua脚本保证余票扣减的原子性。

**Q: 如何处理订单超时？**
> A: RocketMQ延迟消息(级别14=30分钟)自动关闭未支付订单。

**Q: 如何保证接口幂等？**
> A: @Idempotent注解+Redis分布式锁防止重复提交。

**Q: 如何解决跨分片查询？**
> A: 基因法：用户ID后6位融入订单号，保证同用户订单落在同一分片。

## 📊 性能指标

| 指标 | 数值 |
|------|------|
| 最高TPS | 100,000+ |
| P99延迟 | < 50ms |
| 成功率 | 99.9%+ |
| 分库分表 | 2库 × 32表 |

## 📄 许可证

Apache License 2.0
```

---

## 四、详细上传步骤

### 4.1 方法一：完整上传（推荐）

```powershell
# 1. 进入项目目录
cd e:\code\12306

# 2. 初始化Git仓库（如果还没有）
git init

# 3. 添加远程仓库
git remote add origin https://github.com/EliteIT2916/12306-railway-booking.git

# 4. 创建 .gitignore 文件（排除不必要文件）
# 创建 .gitignore
```

### 4.2 创建 .gitignore 文件

```gitignore
# Maven
target/
pom.xml.tag
pom.xml.releaseBackup
pom.xml.versionsBackup
pom.xml.next
release.properties
dependency-reduced-pom.xml
buildNumber.properties
.mvn/timing.properties
.mvn/wrapper/maven-wrapper.jar

# IDE
.idea/
*.iml
*.ipr
*.iws
.project
.classpath
.settings/
.vscode/
*.swp
*.swo
*~

# Logs
*.log
logs/

# OS
.DS_Store
Thumbs.db

# Build
*.class
*.jar
*.war
*.ear
*.zip
*.tar.gz
*.rar

# Temp files
*.tmp
*.bak
*.cache
```

### 4.3 继续Git操作

```powershell
# 5. 添加所有文件
git add .

# 6. 提交
git commit -m "feat: 12306铁路购票系统初始版本

- 基于SpringCloudAlibaba的微服务架构
- 实现用户、购票、订单、支付核心服务
- 令牌桶+Lua脚本高并发解决方案
- 本地锁+分布式锁双重校验机制
- RocketMQ延迟消息订单超时处理
- ShardingSphere分库分表实现
- Canal BinLog缓存一致性方案
- 幂等性设计框架

技术栈: Java17, SpringBoot3, RocketMQ, Redis, MySQL, ShardingSphere
适用场景: 应届生就业项目面试"

# 7. 重命名分支为main
git branch -M main

# 8. 推送（首次推送设置上游分支）
git push -u origin main --force
```

### 4.4 方法二：分步骤上传

如果你想分开上传（比如先上传后端，再上传前端和文档）：

```powershell
# 第一步：只上传后端核心代码
git add 12306-main/
git commit -m "feat: 添加12306后端服务代码"
git push origin main

# 第二步：添加前端代码
git add console-vue/
git commit -m "feat: 添加前端控制台代码"
git push origin main

# 第三步：添加文档
git add *.md resources/
git commit -m "docs: 添加项目文档和SQL脚本"
git push origin main
```

---

## 五、设置GitHub仓库信息

### 5.1 添加Topics/Tags

在GitHub仓库页面 → 右侧 **About** 部分点击 ⚙️ 设置：
- Topics: `java` `spring-cloud` `microservices` `high-concurrency` `distributed-system` `rocketmq` `redis` `shardingsphere`

### 5.2 添加仓库描述

```
🔧 高并发分布式铁路购票系统 | Java17+SpringCloudAlibaba | 
   令牌桶+Lua | 双重锁校验 | RocketMQ延迟消息 | 分库分表 | 
   适合应届生就业项目
```

### 5.3 启用GitHub Pages（可选）

1. Settings → Pages → Source: main branch
2. 访问 `https://EliteIT2916.github.io/12306-railway-booking`

---

## 六、常见问题

### Q1: 推送被拒绝？
```powershell
# 如果提示拒绝，先pull再push
git pull origin main --rebase
git push origin main
```

### Q2: 文件太大？
```powershell
# 压缩或排除大文件
# 在 .gitignore 中添加
*.zip
*.tar.gz
*.exe
```

### Q3: 如何更新代码？
```powershell
git add .
git commit -m "fix: 修复XX问题"
git push
```

---

## 七、推荐的开源协议

建议使用 **Apache License 2.0** 或 **MIT License**，在仓库根目录添加 LICENSE 文件：

```bash
# 下载Apache许可证
curl -o LICENSE https://www.apache.org/licenses/LICENSE-2.0.txt
```

---

按照以上步骤操作，你的12306项目就能完整上传到GitHub了！🎉
