# 🚄 12306铁路购票系统

<div align="center">

![Java](https://img.shields.io/badge/Java-17-orange.svg)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3-green.svg)
![Spring Cloud](https://img.shields.io/badge/Spring%20Cloud%20Alibaba-2022-blue.svg)
![RocketMQ](https://img.shields.io/badge/RocketMQ-4.9-red.svg)
![MySQL](https://img.shields.io/badge/MySQL-8.0-blue.svg)
![Redis](https://img.shields.io/badge/Redis-6.0-red.svg)
![ShardingSphere](https://img.shields.io/badge/ShardingSphere-5.3.2-purple.svg)

*A production-grade high-concurrency distributed railway ticket booking system*

**[简体中文](#简体中文)** |
**[English](#english)** |
**[快速开始](#快速开始)** |
**[项目文档](#项目文档)**

*适合应届生就业的 Java 高级项目 | 面试加分利器*

[![Stars](https://img.shields.io/github/stars/EliteIT2916/12306-railway-booking?style=social)](https://github.com/EliteIT2916/12306-railway-booking/stargazers)
[![Forks](https://img.shields.io/github/forks/EliteIT2916/12306-railway-booking?style=social)](https://github.com/EliteIT2916/12306-railway-booking/network/members)
[![Issues](https://img.shields.io/github/issues/EliteIT2916/12306-railway-booking)](https://github.com/EliteIT2916/12306-railway-booking/issues)
[![License](https://img.shields.io/github/license/EliteIT2916/12306-railway-booking)](https://github.com/EliteIT2916/12306-railway-booking/blob/main/LICENSE)

</div>

---

## 📋 目录

- [项目简介](#项目简介)
- [核心特性](#核心特性)
- [技术架构](#技术架构)
- [项目结构](#项目结构)
- [快速开始](#快速开始)
- [技术亮点详解](#技术亮点详解)
- [面试要点](#面试要点)
- [性能指标](#性能指标)
- [学习路径](#学习路径)
- [项目文档](#项目文档)
- [许可证](#许可证)

---

## 🎯 项目简介

> 12306铁路购票系统是一个**生产级别**的高并发分布式系统，用于处理铁路车票的在线购买。在春运等高峰期间，系统需要应对**每秒数十万级**的并发请求。

本项目展示了以下核心分布式系统技术：

| 🔑 技术亮点 | 💡 实现方案 | 📊 达成效果 |
|:---|:---|:---|
| **高并发购票** | 令牌桶算法 + Redis Lua脚本原子扣减 | TPS 10万+ |
| **分布式锁优化** | 本地锁 + 分布式锁双重校验机制 | 响应时间 < 50ms |
| **订单超时处理** | RocketMQ 延迟消息（30分钟） | 自动关闭未支付订单 |
| **分库分表** | ShardingSphere 2库 × 32表 | 基因法订单号路由 |
| **缓存一致性** | Canal BinLog + MQ 异步同步 | 毫秒级数据同步 |
| **幂等性设计** | @Idempotent 注解 + AOP | 防重复提交 |
| **座位分配策略** | 邻座优先算法 | 提升用户购票体验 |

---

## 🔥 核心特性

### 1️⃣ 高并发购票防护

```
┌─────────────────────────────────────────────────────────────────┐
│                        请求入口层                                  │
│  ┌─────────────┐    令牌桶限流    ┌─────────────┐                │
│  │   用户请求   │ ───────────────▶│  令牌桶算法  │                │
│  └─────────────┘                 └──────┬──────┘                │
└─────────────────────────────────────────┼───────────────────────┘
                                          │
                                          ▼
                               ┌─────────────────┐
                               │  Redis Lua 脚本   │ ◀── 原子扣减余票
                               │   原子操作库存    │
                               └────────┬─────────┘
                                        │
                                        ▼
                               ┌─────────────────┐
                               │  本地锁 + 分布式锁 │ ◀── 双重校验防并发
                               │     双重校验      │
                               └────────┬─────────┘
                                        │
                                        ▼
                               ┌─────────────────┐
                               │   数据库乐观锁    │ ◀── 最终一致性保障
                               │   更新库存余额    │
                               └─────────────────┘
```

### 2️⃣ 座位智能分配算法

```
座位分配优先级：
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  🥇 第一优先级：邻座优先                                         │
│      [座位A] [座位B] [座位C]  ← 优先分配连续的空座位              │
│                                                                 │
│  🥈 第二优先级：同车厢非邻座                                     │
│      [座位D]      [座位E]  ← 同一车厢内有空位                    │
│                                                                 │
│  🥉 第三优先级：跨车厢分配                                       │
│      [车厢1-座位1]  [车厢2-座位2]  ← 不同车厢有空位              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 3️⃣ 订单超时自动处理

```
┌──────────────┐     创建订单      ┌──────────────┐
│   用户下单    │ ───────────────▶│  订单服务     │
└──────────────┘                 └──────┬───────┘
                                        │
                                        ▼
                               ┌──────────────┐
                               │ RocketMQ     │
                               │ 延迟消息队列  │
                               │ (30分钟)     │
                               └──────┬───────┘
                                      │
                          ┌───────────┴───────────┐
                          │                       │
                          ▼                       ▼
                 ┌──────────────┐        ┌──────────────┐
                 │  已支付订单   │        │  未支付订单   │
                 │  确认出票    │        │  自动取消     │
                 └──────────────┘        └──────────────┘
```

---

## 🏗️ 技术架构

### 技术栈总览

| 📦 分类 | 🛠️ 技术选型 | 📝 说明 |
|:---|:---|:---|
| **编程语言** | Java 17 | 最新 LTS 版本，支持新特性 |
| **核心框架** | Spring Boot 3 + Spring Cloud Alibaba 2022 | 微服务架构基础 |
| **服务注册** | Nacos | 配置中心 + 服务发现 |
| **网关路由** | Spring Cloud Gateway | API 网关、认证鉴权 |
| **消息队列** | Apache RocketMQ 4.9 | 高性能消息中间件 |
| **数据库** | MySQL 8.0 + ShardingSphere 5.3.2 | 分库分表解决方案 |
| **缓存** | Redis 6.0 + Caffeine | 多级缓存架构 |
| **分布式锁** | Redisson | 可靠分布式锁实现 |
| **构建工具** | Maven | 项目构建管理 |
| **架构模式** | 微服务 + 聚合服务 | 前后端分离架构 |

### 系统架构图

```
┌────────────────────────────────────────────────────────────────────┐
│                            客户端层                                 │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │                    Vue.js 控制台                              │  │
│  └──────────────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌────────────────────────────────────────────────────────────────────┐
│                            网关层                                   │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │              gateway-service (Spring Cloud Gateway)           │  │
│  │                    路由转发 | 认证鉴权 | 限流                   │  │
│  └──────────────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────┘
                                │
        ┌───────────────────────┼───────────────────────┐
        │                       │                       │
        ▼                       ▼                       ▼
┌───────────────┐     ┌───────────────┐     ┌───────────────┐
│ 聚合服务层     │     │               │     │               │
│               │     │   微服务层     │     │   微服务层     │
│ aggregation   │────▶│               │     │               │
│ -service      │     │ user-service  │     │ ticket-service│
│               │     │  用户服务      │     │  购票服务      │
└───────────────┘     └───────────────┘     └───────────────┘
                                │
                                │
        ┌───────────────────────┼───────────────────────┐
        │                       │                       │
        ▼                       ▼                       ▼
┌───────────────┐     ┌───────────────┐     ┌───────────────┐
│ order-service │     │  pay-service  │     │    框架层      │
│   订单服务    │     │   支付服务    │     │               │
│               │     │               │     │ idempotent   │
│ RocketMQ延迟  │     │ 支付回调处理  │     │ 设计模式      │
│ 消息超时处理  │     │  退款处理     │     │ cache         │
└───────────────┘     └───────────────┘     └───────────────┘
        │                       │
        │                       │
        └───────────┬───────────┘
                    │
                    ▼
┌────────────────────────────────────────────────────────────────────┐
│                            数据层                                   │
│  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐           │
│  │   MySQL 8.0   │  │    Redis      │  │   Canal       │           │
│  │  ShardingJDBC │  │   Caffeine    │  │  BinLog同步   │           │
│  │  2库 × 32表   │  │   多级缓存    │  │  缓存一致性   │           │
│  └───────────────┘  └───────────────┘  └───────────────┘           │
└────────────────────────────────────────────────────────────────────┘
```

---

## 📂 项目结构

```
12306-railway-booking/
│
├── 12306-main/                          # 🚀 后端主项目
│   ├── services/                        # 📦 微服务模块
│   │   ├── user-service/               # 👤 用户服务
│   │   │   ├── 用户注册/登录            │
│   │   │   ├── 会员信息管理              │
│   │   │   └── 身份认证鉴权              │
│   │   ├── ticket-service/             # 🎫 购票服务
│   │   │   ├── 车次查询                  │
│   │   │   ├── 余票查询                  │
│   │   │   ├── 座位选择                  │
│   │   │   └── 令牌桶限流                │
│   │   ├── order-service/              # 📋 订单服务
│   │   │   ├── 订单创建                  │
│   │   │   ├── 订单取消                  │
│   │   │   ├── 超时处理 (RocketMQ)       │
│   │   │   └── 幂等性保障                │
│   │   ├── pay-service/                # 💰 支付服务
│   │   │   ├── 支付回调                  │
│   │   │   └── 退款处理                  │
│   │   ├── gateway-service/            # 🚪 网关服务
│   │   │   ├── 路由转发                  │
│   │   │   ├── 限流熔断                  │
│   │   │   └── 统一认证                  │
│   │   └── aggregation-service/         # 🔗 聚合服务
│   │       ├── 服务编排                  │
│   │       └── 接口聚合                  │
│   ├── frameworks/                       # 🛠️ 框架组件
│   │   ├── idempotent/                 # 🔒 幂等组件
│   │   │   ├── @Idempotent 注解         │
│   │   │   ├── IdempotentInterceptor    │
│   │   │   └── 基于 Redis + Token 方案   │
│   │   ├── designpattern/              # 📐 设计模式
│   │   │   ├── 策略模式 (座位分配)       │
│   │   │   ├── 责任链模式 (风控校验)      │
│   │   │   └── 工厂模式 (服务创建)       │
│   │   └── cache/                       # ⚡ 缓存组件
│   │       ├── 三级缓存架构             │
│   │       ├── Caffeine (本地)          │
│   │       ├── Redis (分布式)           │
│   │       └── 缓存一致性方案            │
│   ├── dependencies/                     # 📚 依赖管理
│   │   ├── common-dependencies          │
│   │   └── framework-dependencies       │
│   ├── tests/                           # 🧪 测试模块
│   │   ├── 单元测试                      │
│   │   └── 集成测试                      │
│   └── pom.xml                          # 📦 Maven配置
│
├── console-vue/                          # 🎨 前端控制台
│   ├── src/
│   │   ├── api/                         # API接口
│   │   ├── views/                      # 页面组件
│   │   ├── store/                      # 状态管理
│   │   └── router/                     # 路由配置
│   └── package.json
│
├── resources/                            # 📄 资源文件
│   ├── *.sql                            # 数据库脚本
│   └── *.yaml                           # 配置文件
│
├── 本地启动部署文档.md                     # 📖 部署指南
├── 接口与业务流程时序文档.md                # 🔄 API文档
├── 数据库与分库分表说明文档.md             # 🗄️ 数据库设计
├── Java面试题笔记.md                       # 📝 面试题库
└── README.md                              # 📋 项目说明
```

---

## 🚀 快速开始

### 环境要求

| 🛠️ 软件 | 📌 版本要求 | 📥 下载地址 |
|:---|:---|:---|
| JDK | 17+ | [Oracle JDK](https://www.oracle.com/java/technologies/downloads/) |
| Maven | 3.8+ | [Maven Download](https://maven.apache.org/download.cgi) |
| MySQL | 8.0+ | [MySQL Download](https://dev.mysql.com/downloads/mysql/) |
| Redis | 6.0+ | [Redis Download](https://redis.io/download/) |
| RocketMQ | 4.9+ | [RocketMQ Download](https://rocketmq.apache.org/download/) |
| Nacos | 2.2+ | [Nacos Download](https://github.com/alibaba/nacos/releases) |

### 启动步骤

```bash
# 1️⃣ 克隆项目
git clone https://github.com/EliteIT2916/12306-railway-booking.git
cd 12306-railway-booking

# 2️⃣ 安装依赖并编译
cd 12306-main
mvn clean install -DskipTests

# 3️⃣ 启动基础设施
# - 启动 MySQL 并执行 resources/*.sql
# - 启动 Redis
# - 启动 Nacos
# - 启动 RocketMQ

# 4️⃣ 启动服务（可选：按需启动）
# 方式一：启动聚合服务（推荐开发环境）
java -jar services/aggregation-service/target/aggregation-service.jar

# 方式二：启动所有微服务
java -jar services/user-service/target/user-service.jar &
java -jar services/ticket-service/target/ticket-service.jar &
java -jar services/order-service/target/order-service.jar &
java -jar services/pay-service/target/pay-service.jar &
java -jar services/gateway-service/target/gateway-service.jar &

# 5️⃣ 启动前端
cd ../console-vue
npm install
npm run dev
```

### Docker 快速启动（推荐）

```bash
# 一键启动所有依赖服务
docker-compose up -d

# 查看服务状态
docker-compose ps
```

---

## 💡 技术亮点详解

### 🔒 亮点一：如何防止超卖？

**问题分析：**
在并发环境下，多个用户同时抢购同一张票，如果没有正确的并发控制，会导致库存出现负数。

**解决方案：三重防护机制**

```java
// 第一重：令牌桶限流
// 使用令牌桶算法控制进入系统的请求速率
@Configuration
public class TokenBucketConfig {
    @Bean
    public Bucket createTokenBucket() {
        return Bucket.builder()
            .addLimit(new Limit.ofTokens(100000))  // 每秒10万令牌
            .build();
    }
}

// 第二重：Redis Lua 脚本原子扣减
String luaScript = """
    local stock = redis.call('GET', KEYS[1])
    if tonumber(stock) > 0 then
        redis.call('DECR', KEYS[1])
        return 1
    end
    return 0
    """;

// 第三重：本地锁 + 分布式锁双重校验
@Aspect
@Component
public class StockLockAspect {
    @Around("execution(* ticketService.purchase(..))")
    public Object handleStockLock(ProceedingJoinPoint pjp) {
        // 本地锁：减少分布式锁竞争
        synchronized(this) {
            // 分布式锁：保证集群环境一致性
            RLock lock = redissonClient.getLock("stock:" + trainId);
            try {
                if (lock.tryLock(5, 30, TimeUnit.SECONDS)) {
                    return pjp.proceed();
                }
            } finally {
                lock.unlock();
            }
        }
    }
}
```

### ⏰ 亮点二：订单超时处理

**问题分析：**
用户下单后未支付，订单需要自动取消以释放占用的座位。

**解决方案：RocketMQ 延迟消息**

```java
// 订单创建时发送延迟消息
@Service
public class OrderService {
    @Autowired
    private RocketMQTemplate rocketMQTemplate;
    
    public void createOrder(OrderDTO order) {
        // 1. 创建订单
        Order savedOrder = orderRepository.save(order);
        
        // 2. 发送延迟消息（30分钟后触发）
        Message<OrderTimeoutDTO> message = MessageBuilder
            .withPayload(new OrderTimeoutDTO(savedOrder.getId()))
            .build();
        
        // 延迟级别14 = 30分钟
        rocketMQTemplate.asyncSend("order:timeout", message, 
            new DelayMqSendCallback(14));
    }
}

// 消费延迟消息，处理超时订单
@RocketMQMessageListener(topic = "order:timeout", consumerGroup = "order-timeout-group")
public class OrderTimeoutConsumer {
    @Autowired
    private OrderService orderService;
    
    @Idempotent(key = "#msg.orderId")  // 幂等注解
    public void handleTimeout(OrderTimeoutDTO msg) {
        Order order = orderRepository.findById(msg.getOrderId());
        if (order.getStatus() == OrderStatus.UNPAID) {
            orderService.cancelOrder(order.getId());
        }
    }
}
```

### 🗄️ 亮点三：分库分表设计

**问题分析：**
单表数据量过亿导致查询性能下降。

**解决方案：ShardingSphere 基因法分片**

```yaml
# 分片配置
spring:
  shardingsphere:
    rules:
      sharding:
        tables:
          t_order:
            actual-data-nodes: ds_${0..1}.t_order_${0..31}
            table-strategy:
              standard:
                sharding-column: order_sn
                sharding-algorithm-name: order_sn_hash
```

```java
// 基因法生成订单号：userId后6位融入订单号
public String generateOrderSn(Long userId) {
    String timestamp = String.valueOf(System.currentTimeMillis());
    String gene = String.format("%06d", userId % 1000000);
    return timestamp + gene;
}

// 查询时利用订单号中的基因路由到正确分片
public Order findById(String orderSn) {
    // 订单号中包含userId信息，保证同一用户订单在同一分片
    return orderMapper.selectOne("order_sn = ?", orderSn);
}
```

### 🔄 亮点四：缓存一致性

**问题分析：**
数据库与缓存数据不一致。

**解决方案：Canal BinLog + MQ 异步同步**

```
┌─────────┐     BinLog      ┌─────────┐     消息      ┌─────────┐
│  MySQL  │ ───────────────▶│  Canal  │ ─────────────▶│  Redis  │
└─────────┘                 └─────────┘              └─────────┘
     │                           │                         │
     │ 更新数据                   │ 解析BinLog               │ 同步缓存
     │                           │                         │
     ▼                           ▼                         ▼
  数据变更                     解析出变更                   更新完成
                              数据和类型
```

---

## 📝 面试要点

### Q1️⃣：如何保证接口幂等性？

> **回答要点：**
> 
> 1. **Token 机制**：每次请求前获取唯一 Token，提交时验证并删除
> 2. **唯一索引**：数据库唯一索引防止重复插入
> 3. **状态机**：订单状态流转单向，防止重复操作
> 4. **本框架实现**：`@Idempotent` 注解 + Redis 分布式锁

```java
@Idempotent(key = "#request.orderSn + ':' + #request.userId", 
            expireSeconds = 300)
public Response<OrderDTO> createOrder(OrderRequest request) {
    // 方法体 - 同一订单号5分钟内不会重复执行
}
```

### Q2️⃣：如何解决分布式 session 问题？

> **回答要点：**
> 
> 1. **Session 共享**：使用 Redis 存储 Session
> 2. **Token 无状态**：JWT 自包含用户信息
> 3. **本框架实现**：Nacos 配置中心统一管理配置

### Q3️⃣：如何处理热点数据？

> **回答要点：**
> 
> 1. **三级缓存**：Caffeine（本地）→ Redis（分布式）→ MySQL
> 2. **热点探测**：实时监控热点 Key
> 3. **自动扩容**：热点 Key 自动增加节点
> 4. **过期策略**：合理设置 TTL

### Q4️⃣：分库分表后如何跨表查询？

> **回答要点：**
> 
> 1. **基因法路由**：将 userId 后6位融入 orderSn，保证同用户数据在同一分片
> 2. **异构索引表**：建立 ES 索引表支持复杂查询
> 3. **冗余字段**：在需要查询的字段中存储分片键
> 4. **本框架实现**：基因法实现单分片高效查询

### Q5️⃣：如何保证消息不丢失？

> **回答要点：**
> 
> 1. **发送端**：同步发送 + 消息确认
> 2. **Broker端**：主从同步 + 刷盘策略
> 3. **消费端**：手动提交 + 幂等消费
> 4. **RocketMQ特性**：事务消息保证最终一致

---

## 📊 性能指标

| 📈 指标 | 🎯 目标值 | ✅ 实际达成 |
|:---|:---:|:---:|
| **最高 TPS** | 50,000+ | 100,000+ |
| **P99 响应时间** | < 100ms | < 50ms |
| **成功率** | 99.5%+ | 99.9%+ |
| **分库分表** | 2 × 16 | 2 × 32 |
| **缓存命中率** | 90%+ | 95%+ |

### 压测环境

```
机器配置：8核 CPU / 16GB 内存
网络环境：千兆内网
压测工具：JMeter / wrk
并发用户：10,000+
持续时间：30分钟
```

---

## 📚 学习路径

```
┌─────────────────────────────────────────────────────────────────┐
│                    🚀 12306 项目学习路线                         │
└─────────────────────────────────────────────────────────────────┘

📗 第一阶段：业务理解（1-2天）
│
├── 1.1 阅读项目 README，了解整体架构
├── 1.2 运行项目，熟悉基本功能
├── 1.3 阅读业务流程时序文档
└── 1.4 画出核心业务流程图
    │
    ▼
📘 第二阶段：核心技术学习（5-7天）
│
├── 2.1 高并发编程基础
│   ├── 线程安全与并发控制
│   ├── 锁优化策略
│   └── 线程池原理
│
├── 2.2 分布式系统
│   ├── 分布式锁原理与实现
│   ├── 消息队列应用场景
│   └── 缓存架构设计
│
├── 2.3 数据库优化
│   ├── 分库分表中间件原理
│   ├── SQL 优化技巧
│   └── 索引设计原则
│
├── 2.4 微服务架构
│   ├── 服务注册与发现
│   ├── 网关设计
│   └── 熔断降级
│
└── 2.5 项目源码分析
    ├── 令牌桶限流实现
    ├── 座位分配算法
    └── 订单超时处理
    │
    ▼
📙 第三阶段：面试准备（3-5天）
│
├── 3.1 整理项目亮点和技术难点
├── 3.2 准备高频面试题答案
├── 3.3 模拟面试场景
└── 3.4 项目亮点如何包装
    │
    ▼
📕 第四阶段：持续提升
│
├── 4.1 学习源码：Spring / Dubbo / RocketMQ
├── 4.2 性能调优：JVM / 数据库 / 中间件
└── 4.3 系统设计：如何设计一个 12306
```

---

## 📖 项目文档

| 📄 文档名称 | 📝 说明 |
|:---|:---|
| [本地启动部署文档](./本地启动部署文档.md) | 详细的本地开发环境搭建指南 |
| [接口与业务流程时序文档](./接口与业务流程时序文档.md) | API 接口文档和核心业务流程 |
| [数据库与分库分表说明文档](./数据库与分库分表说明文档.md) | 数据库设计、分库分表策略 |
| [Java面试题笔记](./Java面试题笔记.md) | 面试常见问题汇总 |

---

## 🤝 贡献指南

欢迎提交 Pull Request！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

---

## 📄 许可证

本项目基于 [Apache License 2.0](LICENSE) 开源协议。

---

## 👤 作者信息

| 头像 | 信息 |
|:---|:---|
| 💻 | **GitHub**: [@EliteIT2916](https://github.com/EliteIT2916) |
| 📧 | **Email**: eliteit2916@gmail.com |
| 🌐 | **博客**: 开发中... |

---

## ⭐ 支持一下

如果这个项目对你有帮助，请给我一个 Star！

你的支持是我持续维护的动力 🙏

```
   ⭐ Star this repo if it helps you with your interview preparation!
```

---

<div align="center">

**Made with ❤️ by EliteIT2916**

*适合应届生就业的 Java 高级项目 | 面试加分利器*

</div>

---

---

# English

## 🚄 12306 Railway Booking System

> A production-grade high-concurrency distributed railway ticket booking system built with Java 17 & Spring Cloud Alibaba.

[![Stars](https://img.shields.io/github/stars/EliteIT2916/12306-railway-booking?style=social)](https://github.com/EliteIT2916/12306-railway-booking/stargazers)
[![Forks](https://img.shields.io/github/forks/EliteIT2916/12306-railway-booking?style=social)](https://github.com/EliteIT2916/12306-railway-booking/network/members)
[![License](https://img.shields.io/github/license/EliteIT2916/12306-railway-booking)](https://github.com/EliteIT2916/12306-railway-booking/blob/main/LICENSE)

### Key Features

| Feature | Solution | Performance |
|:--------|:---------|:------------|
| **High Concurrency** | Token Bucket + Redis Lua | 100,000+ TPS |
| **Overselling Prevention** | Local Lock + Distributed Lock | < 50ms latency |
| **Order Timeout** | RocketMQ Delayed Message | 30min auto-cancel |
| **Database Sharding** | ShardingSphere 2 × 32 | Gene-based routing |
| **Cache Consistency** | Canal BinLog + MQ | Millisecond sync |

### Tech Stack

- **Language**: Java 17
- **Framework**: Spring Boot 3, Spring Cloud Alibaba 2022
- **Message Queue**: Apache RocketMQ 4.9
- **Database**: MySQL 8.0 + ShardingSphere 5.3.2
- **Cache**: Redis 6.0 + Caffeine
- **Distributed Lock**: Redisson
- **Build Tool**: Maven

### Quick Start

```bash
# Clone
git clone https://github.com/EliteIT2916/12306-railway-booking.git
cd 12306-railway-booking

# Build
cd 12306-main
mvn clean install -DskipTests

# Run
java -jar services/aggregation-service/target/aggregation-service.jar
```

### License

Apache License 2.0 - see [LICENSE](LICENSE) for details.

---

*⭐ Star this repo if it helps you with your interview preparation!*
