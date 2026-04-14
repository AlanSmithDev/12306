# 12306 铁路购票系统 - Java 面试题完整笔记

> 本文档专为 12306 铁路购票系统项目求职者设计，包含完整的面试题库、项目介绍必背笔记。面试题设计为可追问、可连贯的对话式结构，涵盖 Java 基础、框架、项目场景、算法、数据库等全方位内容。
>
> **项目官网**：https://nageoffer.com/12306/
>
> **项目博客**：https://nageoffer.com/docs/
>
> **掘金文章**：https://juejin.cn/post/7259757499254718524

*文档版本：2026-04-14 最终版*
*更新内容：完整目录（锚点定位）、所有面试题详细答案、项目介绍必背笔记*

---

## 📑 目录导航

#### [一、项目介绍必背笔记](#一项目介绍必背笔记)
- [1.1 一句话项目介绍](#11-一句话项目介绍)
- [1.2 项目整体架构](#12-项目整体架构)
- [1.3 技术栈清单](#13-技术栈清单)
- [1.4 项目亮点总结](#14-项目亮点总结)
- [1.5 项目难点与解决方案](#15-项目难点与解决方案)
- [1.6 业务功能清单](#16-业务功能清单)
- [1.7 项目版本说明](#17-项目版本说明)

#### [二、Java 基础面试题](#二java-基础面试题)
- [2.1 集合框架](#21-集合框架)
  - [HashMap 底层结构与哈希冲突](#hashmap-底层结构与哈希冲突)
  - [ArrayList 和 LinkedList 区别](#arraylist-和-linkedlist-区别)
- [2.2 并发编程](#22-并发编程)
  - [synchronized 和 Lock 区别](#synchronized-和-lock-区别)
  - [线程上下文切换](#线程上下文切换)
  - [ABA 问题及解决方案](#aba-问题及解决方案)
- [2.3 JVM 与性能优化](#23-jvm-与性能优化)
  - [JVM 内存结构](#jvm-内存结构)
  - [垃圾回收算法](#垃圾回收算法)
  - [OOM 问题排查](#oom-问题排查)

#### [三、框架面试题](#三框架面试题)
- [3.1 Spring 框架](#31-spring-框架)
  - [Spring Bean 生命周期](#spring-bean-生命周期)
  - [循环依赖解决](#循环依赖解决)
  - [事务传播行为](#事务传播行为)
- [3.2 Spring MVC](#32-spring-mvc)
  - [工作流程](#工作流程)
- [3.3 MyBatis](#33-mybatis)
  - [#{} 和 ${} 的区别](#和--的区别)
  - [分页插件原理](#分页插件原理)
- [3.4 Spring Boot](#34-spring-boot)
  - [自动配置原理](#自动配置原理)
  - [ starter 原理](#starter-原理)

#### [四、项目场景面试题](#四项目场景面试题)
- [4.1 分布式锁](#41-分布式锁)
  - [项目中的锁应用](#项目中的锁应用)
  - [双重锁校验](#双重锁校验)
- [4.2 缓存策略](#42-缓存策略)
  - [三层缓存架构](#三层缓存架构)
  - [缓存问题解决方案](#缓存问题解决方案)
- [4.3 消息队列](#43-消息队列)
  - [RocketMQ 应用](#rocketmq-应用)
  - [延迟消息处理](#延迟消息处理)
- [4.4 分库分表](#44-分库分表)
  - [ShardingSphere 应用](#shardingsphere-应用)
  - [分片策略](#分片策略)
- [4.5 幂等性设计](#45-幂等性设计)
  - [幂等注解实现](#幂等注解实现)

#### [五、算法面试题](#五算法面试题)
- [5.1 LRU 缓存](#51-lru-缓存)
- [5.2 线程安全计数器](#52-线程安全计数器)
- [5.3 秒杀系统](#53-秒杀系统)
- [5.4 合并有序链表](#54-合并有序链表)
- [5.5 环形链表](#55-环形链表)

#### [六、MySQL 数据库面试题](#六mysql-数据库面试题)
- [6.1 索引结构](#61-索引结构)
- [6.2 索引失效场景](#62-索引失效场景)
- [6.3 事务隔离级别](#63-事务隔离级别)
- [6.4 SQL 优化](#64-sql-优化)

#### [七、Redis 高级面试题](#七redis-高级面试题)
- [7.1 数据结构](#71-数据结构)
- [7.2 持久化机制](#72-持久化机制)
- [7.3 集群方案](#73-集群方案)
- [7.4 缓存问题](#74-缓存问题)

#### [八、线程池与并发深度解析](#八线程池与并发深度解析)
- [8.1 Hippo4j 动态线程池](#81-hippo4j-动态线程池)
- [8.2 参数设置原则](#82-参数设置原则)

#### [九、设计模式深度解析](#九设计模式深度解析)
- [9.1 责任链模式](#91-责任链模式)
- [9.2 策略模式](#92-策略模式)

#### [十、Spring Cloud Alibaba 深度解析](#十spring-cloud-alibaba-深度解析)
- [10.1 Nacos 服务注册](#101-nacos-服务注册)
- [10.2 Sentinel 熔断限流](#102-sentinel-熔断限流)
- [10.3 Gateway 网关](#103-gateway-网关)

#### [十一、分布式系统设计](#十一分布式系统设计)
- [11.1 分布式 ID 生成](#111-分布式-id-生成)
- [11.2 分布式事务](#112-分布式事务)
- [11.3 Canal 数据同步](#113-canal-数据同步)

#### [十二、系统设计题](#十二系统设计题)
- [12.1 设计抢票系统](#121-设计抢票系统)
- [12.2 设计秒杀系统](#122-设计秒杀系统)

#### [十三、面试高频手撕代码](#十三面试高频手撕代码)
- [13.1 合并 K 个有序链表](#131-合并-k-个有序链表)
- [13.2 LRU 缓存实现](#132-lru-缓存实现)
- [13.3 滑动窗口最大值](#133-滑动窗口最大值)

#### [十四、高频追问与扩展](#十四高频追问与扩展)
- [Spring Boot 自动配置深度追问](#spring-boot-自动配置深度追问)
- [MySQL 索引失效深度追问](#mysql-索引失效深度追问)
- [Redis 缓存问题深度追问](#redis-缓存问题深度追问)

#### [十五、简历面试指南](#十五简历面试指南)
- [简历项目描述模板](#简历项目描述模板)
- [面试话术总结](#面试话术总结)
- [注意事项](#注意事项)

#### [十六、附录](#十六附录)
- [常用命令](#常用命令)
- [常用参数配置](#常用参数配置)
- [参考资料](#参考资料)

---

## 一、项目介绍必背笔记

### 1.1 一句话项目介绍

> **参考话术**：
> "这是一个基于 Java 17 + Spring Cloud Alibaba 的高并发铁路购票系统，模拟 12306 的核心业务流程，包括用户注册登录、车票查询、订单下单、支付、退票等完整链路。项目难点在于高并发场景下的余票扣减、分布式锁控制、订单超时处理、海量数据存储等。"

**扩展介绍**：

| 维度 | 内容 |
|:----|:-----|
| **项目类型** | 分布式系统设计实战项目 |
| **业务范围** | 会员、购票、订单、支付、网关五大核心服务 |
| **技术特点** | 高并发、分布式缓存、分库分表、消息队列、设计模式 |
| **学习价值** | 快速掌握分布式系统设计技巧，深入理解高并发场景 |

### 1.2 项目整体架构

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                              前端控制台 (Vue.js)                                    │
│                    车票查询 / 订单提交 / 支付 / 个人中心                              │
└─────────────────────────────────────────────────────────────────────────────────────┘
                                        │
                                        ▼
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                      Spring Cloud Gateway (9000)                                     │
│                    统一网关 + Token 认证 + 限流熔断 + 请求日志                        │
└─────────────────────────────────────────────────────────────────────────────────────┘
                                        │
        ┌──────────────────────────────┼──────────────────────────────┐
        │                              │                              │
        ▼                              ▼                              ▼
┌───────────────────┐      ┌───────────────────┐      ┌───────────────────┐
│  用户服务 (9001)   │      │   票务服务 (9002)  │      │  聚合服务 (9005)  │
│                   │      │                   │      │                   │
│ • 用户注册/登录    │      │ • 列车查询         │      │  聚合所有服务      │
│ • 乘车人管理      │      │ • 余票查询         │      │  统一入口          │
│ • 布隆过滤器防穿透 │      │ • 购票下单         │      │                   │
│ • 分布式锁注册    │      │ • 令牌桶限流       │      │                   │
│ • 敏感数据加密    │      │ • 选座算法         │      │                   │
└───────────────────┘      └───────────────────┘      └───────────────────┘
                                        │
                                        ▼
        ┌──────────────────────────────┼──────────────────────────────┐
        │                              │                              │
        ▼                              ▼                              ▼
┌───────────────────┐      ┌───────────────────┐      ┌───────────────────┐
│  订单服务 (9003)   │      │   支付服务 (9004)  │      │      Redis        │
│                   │      │                   │      │                   │
│ • 订单创建/取消   │      │ • 支付发起         │      │  • 分布式缓存      │
│ • 状态流转        │      │ • 支付回调         │      │  • 分布式锁        │
│ • 延迟消息关闭    │      │ • 退款处理         │      │  • 令牌桶         │
│ • RocketMQ 消息   │      │ • 策略模式多渠道   │      │  • 布隆过滤器      │
│ • 幂等处理       │      │                   │      │                   │
└───────────────────┘      └───────────────────┘      └───────────────────┘
                                        │
                                        ▼
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                              ShardingSphere 分库分表                                   │
│                    2 库 × 32 表，基因法订单号路由，同用户数据同库                        │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

### 1.3 技术栈清单

| 技术分类 | 技术名称 | 版本 | 用途 |
|:--------|:--------|:-----|:-----|
| **基础框架** | Spring Boot | 3.0.7 | 核心框架 |
| **微服务框架** | Spring Cloud Alibaba | 2022.0.0.0-RC2 | 分布式架构 |
| **网关** | Spring Cloud Gateway | 2022.0.3 | 路由、认证 |
| **持久层** | MyBatis-Plus | 3.5.3.1 | 数据库操作 |
| **连接池** | HikariCP | 5.0.1 | 数据库连接管理 |
| **缓存** | Redis + Redisson | Latest / 3.21.3 | 分布式缓存、锁 |
| **消息队列** | RocketMQ | 2.2.3 | 异步消息、延迟处理 |
| **分库分表** | ShardingSphere | 5.3.2 | 数据分片 |
| **配置中心** | Nacos | - | 服务注册、配置管理 |
| **熔断限流** | Sentinel | 1.8.6 | 高可用保护 |
| **缓存框架** | JetCache | 2.7.3 | 多级缓存 |
| **线程池** | Hippo4j | 1.5.0 | 动态线程池 |
| **任务调度** | XXL-Job | 2.4.0 | 分布式定时任务 |
| **链路追踪** | SkyWalking | 9.5.0 | 分布式追踪 |
| **序列化** | FastJson2 | 2.0.36 | JSON处理 |
| **工具包** | HuTool | 5.8.2 | 工具集 |
| **BinLog订阅** | Canal | 1.1.6 | 数据同步 |

### 1.4 项目亮点总结（面试必说）

> **参考话术**（选 2-3 个重点说）：

1. **高并发余票扣减**：采用令牌桶算法 + Redis Lua 脚本，保证原子性操作，解决超卖问题
2. **分布式锁应用**：使用 Redisson 分布式锁控制并发，结合本地锁实现双重校验
3. **订单超时处理**：利用 RocketMQ 延迟消息，30 分钟未支付自动关闭订单
4. **海量数据存储**：基于 ShardingSphere 实现订单数据分片，支持基因法订单号路由
5. **缓存架构**：多层缓存设计（本地 Caffeine → Redis → 数据库），解决穿透、击穿、雪崩
6. **设计模式**：责任链模式重构校验逻辑，策略模式实现支付渠道扩展
7. **性能优化**：v1 到 v2 版本性能提升 300%-500%+，使用 Redis Pipeline 批量操作

### 1.5 项目难点与解决方案

| 难点场景 | 解决方案 | 技术要点 |
|:--------|:--------|:--------|
| **海量用户注册防穿透** | 布隆过滤器 + 分布式锁 | RBloomFilter 预判用户名存在性 |
| **高并发抢票超卖** | 令牌桶限流 + Lua 原子扣减 | Redis Hash + Lua 脚本 |
| **订单重复提交** | 幂等性注解 + Redis | @Idempotent + SPEL 表达式 |
| **订单超时未支付** | RocketMQ 延迟消息 | 延迟级别 14（30分钟） |
| **多方式登录分片路由** | 用户名/手机号/邮箱三表 | 按用户名分片，登录时反向查询 |
| **海量订单存储** | ShardingSphere 分库分表 | 2库 × 32表，取模算法 |
| **支付结果一致性** | MQ 消息回调 + 幂等处理 | 确保支付成功/退款成功仅处理一次 |
| **座位分配算法** | 多级座位匹配策略 | 相邻座位 → 同车厢不相邻 → 不同车厢 |
| **缓存与数据库一致性** | BinLog 同步 | Canal + MQ 异步更新缓存 |

### 1.6 业务功能清单

| 域 | 核心功能 |
|:--|:--------|
| **用户域** | 注册、登录、注销、乘车人管理、敏感信息加密 |
| **票务域** | 列车查询、余票查询、购票、选座、退票、座位分配算法 |
| **订单域** | 订单创建、订单取消、订单查询、订单状态流转 |
| **支付域** | 支付发起、支付回调、退款、部分退款、策略模式多渠道 |
| **网关域** | 统一认证、Token 验证、限流 |

### 1.7 项目版本说明

| 版本类型 | 特点 | 适用场景 |
|:--------|:-----|:---------|
| **聚合版** | 所有服务整合到一个工程 | 测试部署、学习 |
| **微服务版** | 各服务独立部署 | 生产环境、学习微服务设计 |

---

## 二、Java 基础面试题

### 2.1 集合框架

#### HashMap 底层结构与哈希冲突

**标准答案**：

HashMap 采用**链地址法（拉链法）**解决哈希冲突，具体实现经历了多个版本演进：

**JDK 1.7 及之前：**
- 底层数据结构：**数组 + 链表**
- 哈希冲突时，新元素插入到链表头部（头插法）
- 查找时，先计算 hash 确定桶位置，再遍历链表比较 key

```java
// JDK 1.7 HashMap 核心结构
transient Entry<K,V>[] table;

static class Entry<K,V> implements Map.Entry<K,V> {
    final K key;
    V value;
    Entry<K,V> next;  // 指向下一个节点
    int hash;         // key 的 hash 值
}
```

**JDK 1.8 及之后：**
- 底层数据结构：**数组 + 链表 + 红黑树**
- 当链表长度超过 **8** 且数组长度 >= **64** 时，链表转为红黑树
- 红黑树节点数 <= **6** 时退化为链表
- 使用尾插法插入新元素（避免环形链表问题）

```java
// JDK 1.8 HashMap 核心字段
transient Node<K,V>[] table;
static final int TREEIFY_THRESHOLD = 8;   // 链表转红黑树阈值
static final int UNTREEIFY_THRESHOLD = 6; // 红黑树退化为链表阈值
static final int MIN_TREEIFY_CAPACITY = 64;// 最小树化数组容量
```

**追问 1：为什么选择 8 作为链表转红黑树的阈值？**

答：这是一个时间和空间的 trade-off。链表平均查找复杂度为 O(n)，红黑树为 O(log n)，但红黑树空间开销更大。根据泊松分布，链表长度达到 8 的概率非常低（0.00000006），这个阈值可以确保大多数情况下使用链表，只有在真正需要时才转换为红黑树。

**追问 2：HashMap 的扩容机制是怎样的？**

答：
- 默认初始容量：**16**，负载因子：**0.75**
- 当元素数量 > `capacity * loadFactor` 时触发扩容
- 扩容为原来的 **2 倍**
- JDK 1.7 使用头插法会导致死循环，JDK 1.8 使用尾插法解决了这个问题
- 扩容时需要重新计算所有元素的桶位置（rehash），这是性能开销的主要来源

**追问 3：ConcurrentHashMap 是如何保证线程安全的？**

答：
- **JDK 1.7**：使用分段锁（Segment），每个 Segment 独立加锁
- **JDK 1.8**：放弃分段锁，改用 `synchronized` + CAS 实现
  - 锁的粒度是单个桶（Node）
  - 使用 CAS 进行无锁操作
  - 首次需要同步的冲突使用 `synchronized`，之后自旋等待

**追问 4：12306 项目中用到了哪些集合类？**

答：
- `HashMap`：用于缓存用户信息、列车信息
- `ArrayList`：用于存储乘客列表、座位列表
- `LinkedList`：用于责任链处理链表的构建
- `HashSet`：用于存储已处理的订单标识
- `ConcurrentHashMap`：用于高并发场景下的缓存

---

#### ArrayList 和 LinkedList 区别

**标准答案**：

| 特性 | ArrayList | LinkedList |
|:----|:----------|:-----------|
| 底层数据结构 | 动态数组 | 双向链表 |
| 随机访问 | O(1)，直接通过索引访问 | O(n)，需要遍历 |
| 头部插入/删除 | O(n)，需要移动元素 | O(1) |
| 尾部插入/删除 | 均摊 O(1) | O(1) |
| 中间插入/删除 | O(n) | O(n)，需要先遍历 |
| 内存占用 | 小，只需存元素 | 大，需要存前后指针 |
| 线程安全 | 不安全 | 不安全 |
| 缓存友好性 | 更好（连续内存） | 差（分散内存） |

**实际应用场景：**

```java
// ArrayList 适用场景：需要频繁随机访问
List<Integer> arrayList = new ArrayList<>();
arrayList.get(100);  // O(1) 快速访问

// LinkedList 适用场景：频繁的头部/尾部操作
List<Integer> linkedList = new LinkedList<>();
linkedList.addFirst(1);  // O(1) 头部插入
linkedList.addLast(2);   // O(1) 尾部插入

// 如果需要线程安全，使用 CopyOnWriteArrayList（读多写少场景）
List<Integer> threadSafeList = new CopyOnWriteArrayList<>();
```

**追问：为什么 ArrayList 在企业开发中更常用？**

答：
1. **缓存友好**：数组元素在内存中是连续存储，CPU 缓存预加载效率高
2. **现代 JVM 优化**：JIT 编译器对数组遍历做了大量优化
3. **尾部操作频繁**：大多数业务场景主要是尾部追加，随机访问较少
4. **空间效率**：LinkedList 每个节点需要额外存储前后指针，空间开销大

---

### 2.2 并发编程

#### synchronized 和 Lock 区别

**标准答案**：

| 特性 | synchronized | Lock |
|:----|:------------|:-----|
| 实现方式 | JVM 内置关键字 | JDK 层面实现的接口 |
| 锁获取 | 隐式获取和释放 | 显式获取和释放 |
| 等待可中断 | 不可中断 | 可中断（`tryLock(long time, TimeUnit unit)`） |
| 公平锁 | 非公平（插队） | 可配置（`new ReentrantLock(true)` 公平） |
| 多条件等待 | Object 的 `wait/notify` | `Condition` 的 `await/signal` |
| 锁状态查询 | 不可查询 | 可查询（`isLocked()`, `getHoldCount()`） |
| 锁重入 | 支持 | 支持 |
| 性能 | JDK 1.6 后优化，性能相当 | 灵活但需手动释放 |

**代码对比：**

```java
// synchronized 示例
public synchronized void method() {
    // 临界区代码
}

// 等价于
public void method() {
    synchronized (this) {
        // 临界区代码
    }
}

// Lock 示例
private final Lock lock = new ReentrantLock();

public void method() {
    lock.lock();
    try {
        // 临界区代码
    } finally {
        lock.unlock();  // 必须手动释放
    }
}

// tryLock 可中断等待
public void tryLockExample() throws InterruptedException {
    if (lock.tryLock(5, TimeUnit.SECONDS)) {
        try {
            // 获取到锁
        } finally {
            lock.unlock();
        }
    } else {
        // 未获取到锁，可执行其他逻辑
    }
}
```

**追问：12306 项目中为什么选择 Redisson 而不是原生的 synchronized 或 Lock？**

答：
1. **跨 JVM 同步**：synchronized 和 Lock 只能保证单个 JVM 内的线程安全，分布式场景下无法工作
2. **Redisson 提供看门狗机制**：自动续期锁，避免业务未完成但锁过期
3. **丰富的数据结构**：除了锁还有布隆过滤器、集合、队列等
4. **公平锁支持**：购票场景需要按请求顺序处理，Redisson 支持 `FairLock`

---

#### 线程上下文切换

**标准答案**：

线程上下文切换是指 CPU 从一个线程切换到另一个线程时，保存当前线程的执行状态（寄存器、程序计数器、栈指针等），并恢复另一个线程的状态的过程。

**触发场景**：
- 时间片用完
- 线程阻塞（I/O、sleep、Lock）
- 主动让出（yield）
- 高优先级线程抢占

**优化策略**：

```java
// 1. 减少线程数量，避免过度创建
@Configuration
public class ThreadPoolConfig {
    @Bean("taskExecutor")
    public Executor taskExecutor() {
        // IO 密集型：CPU 核数 * 2
        // CPU 密集型：CPU 核数 + 1
        int corePoolSize = Runtime.getRuntime().availableProcessors() * 2;
        return new ThreadPoolExecutor(
            corePoolSize,
            corePoolSize * 2,
            60L, TimeUnit.SECONDS,
            new LinkedBlockingQueue<>(100),
            new ThreadPoolExecutor.CallerRunsPolicy()
        );
    }
}

// 2. 使用线程本地变量减少竞争
public class UserContext {
    private static final ThreadLocal<UserInfo> USER_INFO = new ThreadLocal<>();
    
    public static void set(UserInfo userInfo) {
        USER_INFO.set(userInfo);
    }
    
    public static UserInfo get() {
        return USER_INFO.get();
    }
    
    public static void clear() {
        USER_INFO.remove();  // 重要：防止内存泄漏
    }
}

// 3. 使用协程（虚拟线程）- JDK 19+
Thread.startVirtualThread(() -> {
    // 轻量级线程，减少上下文切换开销
});
```

**追问：在 12306 项目中如何设计线程池？**

答：
1. **业务分离**：不同业务使用不同的线程池，避免相互影响
2. **动态线程池**：集成 Hippo4j 实现运行时线程池参数调整
3. **拒绝策略**：使用 `CallerRunsPolicy` 保证任务不丢失
4. **监控报警**：记录任务执行时间，设置超时报警

---

#### ABA 问题及解决方案

**标准答案**：

ABA 问题是指一个线程读取共享变量值为 A，然后其他线程修改了共享变量为 B，最后又改回 A。此时第一个线程认为变量没有变化，但实际上已经被其他线程修改过了。

**ABA 问题示例**：

```java
// 线程 1 读取 value = A
// 线程 2 修改 value = B
// 线程 3 修改 value = A
// 线程 1 继续操作，认为 value 仍是 A
```

**解决方案：**

```java
// 1. 使用版本号（时间戳）机制
public class AtomicStampedReference<V> {
    private volatile Pair<V> pair;
    
    public boolean compareAndSet(V expectedReference, V newReference,
                                  int expectedStamp, int newStamp) {
        Pair<V> current = pair;
        return expectedReference == current.reference &&
               expectedStamp == current.stamp &&
               ((newReference == current.reference && newStamp == current.stamp) ||
                casPair(current, Pair.of(newReference, newStamp)));
    }
}

// 2. 在 12306 项目中的应用
public class OrderStatusManager {
    private final AtomicStampedReference<OrderStatus> statusRef = 
        new AtomicStampedReference<>(OrderStatus.PENDING, 1);
    
    public boolean cancelIfPending(String orderSn) {
        int[] stampHolder = new int[1];
        OrderStatus current = statusRef.get(stampHolder);
        if (current == OrderStatus.PENDING) {
            return statusRef.compareAndSet(current, OrderStatus.CLOSED, 
                    stampHolder[0], stampHolder[0] + 1);
        }
        return false;
    }
}
```

**追问：除了 ABA 问题，还有哪些原子类无法解决的问题？**

答：
1. **复合操作非原子**：如 `compareAndSet` 后再做其他操作，中间可能被其他线程插队
2. **只能保证单个变量**：多个变量需要用锁
3. **无法保证因果顺序**：需要分布式事务或消息队列

---

### 2.3 JVM 与性能优化

#### JVM 内存结构

**标准答案**：

```
┌────────────────────────────────────────────────────────────────────────┐
│                         JVM 进程内存                                    │
├────────────────────────────────────────────────────────────────────────┤
│  Heap（堆）                                                           │
│  ┌─────────────────────────┐  ┌─────────────────────────────────┐    │
│  │      New Generation      │  │         Old Generation          │    │
│  │  ┌─────┐  ┌─────┐  ┌───┐ │  │                                  │    │
│  │  │Eden │S0│S1   │  │    │ │  │                                  │    │
│  │  │     │  │     │  │    │ │  │                                  │    │
│  │  └─────┘  └─────┘  └──┬─┘ │  │                                  │    │
│  │                       │   │  │                                  │    │
│  │                       ▼   │  │                                  │    │
│  └─────────────────────────────┴──────────────────────────────────┘    │
│                                                                         │
│  Non-Heap（非堆）                                                      │
│  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐             │
│  │   Metaspace   │  │   Code Cache   │  │ JVM Internal  │             │
│  │   (方法区)      │  │   (代码缓存)   │  │   (其他)      │             │
│  └───────────────┘  └───────────────┘  └───────────────┘             │
│                                                                         │
│  ┌───────────────┐  ┌───────────────┐                                  │
│  │ Thread Stack  │  │ Thread Stack  │  ...                            │
│  │   (线程栈)     │  │   (线程栈)     │                                  │
│  └───────────────┘  └───────────────┘                                  │
└────────────────────────────────────────────────────────────────────────┘
```

**各区域详解**：

| 区域 | 用途 | 大小 | 异常 |
|:----|:----|:-----|:-----|
| **Heap** | 对象实例、数组 | 可配置，默认 1/4 物理内存 | OOM |
| **Metaspace** | 类元信息、常量池 | 可增长，默认无上限 | OOM |
| **Code Cache** | JIT 编译代码 | 可配置 | - |
| **Thread Stack** | 线程局部变量、栈帧 | 可配置，默认 1MB | SOE |
| **Eden** | 新生对象分配 | 可配置 | - |
| **Survivor** | Minor GC 幸存者 | 可配置 | - |
| **Old Gen** | 长生命周期对象 | 可配置，默认 2/3 堆 | - |

---

#### 垃圾回收算法

**标准答案**：

| 算法 | 特点 | 适用场景 |
|:----|:-----|:---------|
| **Serial** | 单线程串行 GC，Stop The World | 客户端、小数据量 |
| **ParNew** | 多线程并行 GC，Stop The World | 新生代，配合 CMS |
| **Parallel Scavenge** | 吞吐量优先，可控制停顿时间 | 后台计算任务 |
| **CMS** | 并发标记清除，停顿时间短 | 对响应时间有要求的系统 |
| **G1** | 分代回收，可预测停顿时间 | 大数据量，推荐使用 |
| **ZGC** | 低延迟，极短停顿 | 超大堆内存（TB 级） |

**GC 流程图**：

```
┌─────────────────────────────────────────────────────────────────────┐
│                        垃圾回收流程                                   │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  对象分配 ──► Eden 区 ──► Minor GC ──► Survivor 区 ──► Old 区     │
│                  │              │                                    │
│                  │        ┌─────▼─────┐                             │
│                  │        │ 存活对象   │                             │
│                  │        │ 年龄+1    │                             │
│                  │        └───────────┘                             │
│                  │                                                   │
│                  │  对象年龄 ≥ 15 ──► 直接进入 Old Gen              │
│                  │                                                   │
│                  ▼                                                   │
│          ┌───────────────────────────────────┐                      │
│          │         Full GC (Major GC)        │                      │
│          │   当 Old 区空间不足时触发          │                      │
│          └───────────────────────────────────┘                      │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**12306 项目 JVM 参数配置**：

```bash
# 推荐 JVM 参数
-Xms4g -Xmx4g                    # 堆大小
-Xmn2g                           # 新生代大小
-XX:+UseG1GC                     # 使用 G1 垃圾收集器
-XX:MaxGCPauseMillis=200         # 最大 GC 停顿时间
-XX:+HeapDumpOnOutOfMemoryError  # OOM 时导出堆
-Xlog:gc*:file=gc.log            # GC 日志
```

---

#### OOM 问题排查

**标准答案**：

```bash
# 1. 导出堆内存 dump
jmap -dump:format=b,file=heap.hprof <pid>

# 2. 查看对象占用
jmap -histo <pid> | head -20

# 3. 使用 MAT 分析 dump 文件
# https://www.eclipse.org/mat/

# 4. 常见 OOM 原因及解决方案
# a) 堆内存溢出：增加 -Xmx 或检查内存泄漏
# b) MetaSpace 溢出：检查是否动态生成大量类
# c) 线程栈溢出：减少 -Xss 或优化递归调用
```

**12306 项目常见 OOM 场景**：

| 场景 | 原因 | 解决方案 |
|:----|:-----|:---------|
| **大查询返回过多数据** | 查询未分页，数据量过大 | 添加分页限制，使用游标查询 |
| **缓存未设置过期时间** | Redis 内存持续增长 | 设置 TTL，配置淘汰策略 |
| **线程池配置过大** | 线程占用过多堆内存 | 合理配置线程池大小 |
| **文件流未关闭** | 资源泄漏 | 使用 try-with-resources |

---

## 三、框架面试题

### 3.1 Spring 框架

#### Spring Bean 生命周期

**标准答案**：

```
┌─────────────────────────────────────────────────────────────────────┐
│                      Spring Bean 生命周期                            │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  1. 实例化 Bean ──► 2. 属性填充 ──► 3. 初始化 ──► 4. 销毁          │
│                                                                     │
│  详细步骤：                                                         │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ (1) 实例化 Instantiation                                      │   │
│  │ (2) 属性赋值 PopulateBean                                     │   │
│  │ (3) 设置 Bean 名称Aware接口                                    │   │
│  │ (4) BeanFactoryPostProcessor 调用                             │   │
│  │ (5) BeanPostProcessor 前置处理                                │   │
│  │ (6) InitializingBean.afterPropertiesSet                       │   │
│  │ (7) 自定义 init-method                                        │   │
│  │ (8) BeanPostProcessor 后置处理                                │   │
│  │ (9) Bean 正常使用                                              │   │
│  │ (10) DisposableBean.destroy                                  │   │
│  │ (11) 自定义 destroy-method                                    │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**代码示例**：

```java
@Component
public class UserService implements InitializingBean, DisposableBean {
    
    @Autowired
    private UserMapper userMapper;
    
    // 1. 构造方法（实例化）
    public UserService() {
        System.out.println("UserService 实例化");
    }
    
    // 2. 属性注入
    @Value("${app.name}")
    private String appName;
    
    // 3. 初始化回调
    @Override
    public void afterPropertiesSet() throws Exception {
        System.out.println("UserService 初始化完成");
    }
    
    // 4. 销毁回调
    @Override
    public void destroy() throws Exception {
        System.out.println("UserService 销毁");
    }
    
    // 自定义初始化方法
    @PostConstruct
    public void init() {
        System.out.println("@PostConstruct 初始化");
    }
    
    // 自定义销毁方法
    @PreDestroy
    public void cleanup() {
        System.out.println("@PreDestroy 清理");
    }
}
```

**追问：BeanFactoryPostProcessor 和 BeanPostProcessor 的区别？**

答：
- **BeanFactoryPostProcessor**：在 Bean 实例化之前调用，可以修改 BeanDefinition（定义信息）
- **BeanPostProcessor**：在 Bean 实例化之后、初始化前后调用，可以对 Bean 进行包装或替换

---

#### 循环依赖解决

**标准答案**：

```
┌─────────────────────────────────────────────────────────────────────┐
│                      Spring 三级缓存解决循环依赖                      │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  一级缓存：singletonObjects     — 完全初始化好的 Bean               │
│  二级缓存：earlySingletonObjects — 已实例化但未初始化的 Bean         │
│  三级缓存：singletonFactories  — Bean 工厂                          │
│                                                                     │
│  场景：A 依赖 B，B 依赖 A                                            │
│                                                                     │
│  ┌────────────────────────────────────────────────────────────┐     │
│  │ 1. 创建 A，填充属性时发现依赖 B                               │     │
│  │ 2. 去创建 B，填充属性时发现依赖 A                             │     │
│  │ 3. 从三级缓存获取 A 的工厂，创建早期 A 引用                   │     │
│  │ 4. B 完成创建，存入一级缓存                                   │     │
│  │ 5. 回到 A 的创建，完成属性填充                               │     │
│  │ 6. A 完成创建，存入一级缓存                                   │     │
│  └────────────────────────────────────────────────────────────┘     │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**追问：为什么需要三级缓存，二级不行吗？**

答：
- **二级缓存**可以解决循环依赖，但无法处理代理对象的场景
- **三级缓存**的工厂可以创建代理对象，确保返回的是代理而非原始对象
- 如果没有 AOP，直接用二级缓存也可以

**追问：构造方法注入能解决循环依赖吗？**

答：**不能**。构造方法注入在实例化阶段就需要完整的依赖，无法通过三级缓存解决。解决方案：
1. 使用 setter 注入
2. 使用 `@Lazy` 延迟加载
3. 使用 `@PostConstruct` 初始化
4. 实现 `ApplicationContextAware` 接口

---

#### 事务传播行为

**标准答案**：

| 传播行为 | 说明 | 12306 场景 |
|:--------|:-----|:-----------|
| **REQUIRED**（默认） | 有事务则加入，无则创建 | 订单创建+余额扣减 |
| **REQUIRES_NEW** | 挂起当前事务，创建新事务 | 日志记录（不影响主事务） |
| **NESTED** | 嵌套事务，回滚点 | 复杂业务分支 |
| **SUPPORTS** | 有则加入，无则无事务 | 查询操作 |
| **NOT_SUPPORTED** | 不支持事务，挂起 | 大数据量导出 |
| **MANDATORY** | 必须有事务，否则抛异常 | 核心业务 |
| **NEVER** | 不能有事务，否则抛异常 | 隔离操作 |

**12306 项目代码示例**：

```java
@Service
@RequiredArgsConstructor
public class OrderServiceImpl {

    /**
     * 订单创建（事务入口）
     * 包含多个子操作，都在同一个事务中
     */
    @Transactional(rollbackFor = Exception.class)
    public String createOrder(OrderCreateReqDTO request) {
        // 1. 创建订单记录
        OrderDO order = orderMapper.insert(buildOrder(request));
        
        // 2. 扣减余额（同一事务）
        userAccountService.deductBalance(request.getUserId(), 
            request.getTotalAmount());
        
        // 3. 扣减库存（同一事务）
        ticketService.deductStock(request.getTrainId(), 
            request.getSeatType(), request.getCount());
        
        // 4. 发送延迟消息（在事务提交后执行）
        delayCloseOrderSendProducer.sendMessage(order.getOrderSn());
        
        return order.getOrderSn();
    }
    
    /**
     * 日志记录（单独事务，不影响主流程）
     */
    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void saveOperateLog(String action, String detail) {
        logMapper.insert(LogDO.builder()
            .action(action)
            .detail(detail)
            .build());
    }
}
```

---

### 3.2 Spring MVC

#### 工作流程

**标准答案**：

```
┌─────────────────────────────────────────────────────────────────────┐
│                      Spring MVC 请求处理流程                         │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  请求 ──► DispatcherServlet ──► HandlerMapping ──► Handler          │
│                              │                                        │
│                              ▼                                        │
│                     HandlerAdapter ──► 执行 Handler                   │
│                              │                                        │
│                              ▼                                        │
│                     返回 ModelAndView                                │
│                              │                                        │
│                              ▼                                        │
│                     ViewResolver ──► 渲染 View                       │
│                              │                                        │
│                              ▼                                        │
│                       响应客户端                                      │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**详细流程**：

```java
// 1. DispatcherServlet 接收请求
// 2. HandlerMapping 找到对应的 Handler（Controller 方法）
// 3. HandlerAdapter 调用 Handler 执行具体逻辑
// 4. Handler 返回 ModelAndView
// 5. ViewResolver 解析视图名得到 View
// 6. View 渲染 Model 数据
// 7. 返回响应
```

**12306 项目实际使用**：

```java
@RestController
@RequestMapping("/api/ticket")
public class TicketController {
    
    @GetMapping("/query")
    public Result<List<TrainDetail>> queryTrains(
            @RequestParam String departure,
            @RequestParam String arrival,
            @RequestParam String date) {
        // 参数校验
        // 调用 Service
        List<TrainDetail> result = ticketService.queryTrains(
            departure, arrival, date);
        // 返回结果
        return Result.success(result);
    }
}
```

---

### 3.3 MyBatis

#### #{} 和 ${} 的区别

**标准答案**：

| 特性 | #{} | ${} |
|:----|:----|:----|
| 原理 | 使用预编译 PreparedStatement | 直接拼接 SQL |
| SQL 注入 | 安全 | 危险 |
| 类型处理 | 自动类型转换 | 需手动处理 |
| 适用场景 | 推荐使用 | 动态表名/列名 |
| 性能 | 更高（预编译复用） | 略低 |

**代码示例**：

```java
// #{} - 推荐使用
@Select("SELECT * FROM user WHERE id = #{id}")
User findById(Long id);

@Select("SELECT * FROM user WHERE name = #{name} AND age = #{age}")
User findByNameAndAge(@Param("name") String name, 
                      @Param("age") Integer age);

// ${} - 仅用于动态表名/列名
@Select("SELECT * FROM ${tableName} ORDER BY ${columnName} ${order}")
List<User> queryByTable(@Param("tableName") String tableName,
                        @Param("columnName") String columnName,
                        @Param("order") String order);
```

**追问：SQL 注入是什么？如何防范？**

答：SQL 注入是通过在用户输入中插入恶意 SQL 代码，绕过验证或获取未授权数据。

```java
// 危险代码 - SQL 注入
String sql = "SELECT * FROM user WHERE name = '" + name + "'";
// 用户输入: ' OR '1'='1  →  SQL 变成: WHERE name = '' OR '1'='1'

// 安全代码 - 使用 #{}
@Select("SELECT * FROM user WHERE name = #{name}")
User findByName(@Param("name") String name);
```

---

#### 分页插件原理

**标准答案**：

```
┌─────────────────────────────────────────────────────────────────────┐
│                      MyBatis-Plus 分页原理                           │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  1. 拦截 SQL：Plugin(Executor) 拦截 query() 方法                    │
│                                                                     │
│  2. 判断是否需要分页：检查 Page 参数                                 │
│                                                                     │
│  3. 获取总数：COUNT 查询                                            │
│       SELECT COUNT(*) FROM table WHERE condition                    │
│                                                                     │
│  4. 拼接分页 SQL：                                                  │
│       SELECT * FROM table WHERE condition                           │
│       LIMIT offset, pageSize                                        │
│                                                                     │
│  5. 返回分页结果                                                    │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**代码示例**：

```java
// 1. 配置分页插件
@Configuration
public class MyBatisPlusConfig {
    @Bean
    public MybatisPlusInterceptor mybatisPlusInterceptor() {
        MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor();
        interceptor.addInnerInterceptor(
            new PaginationInnerInterceptor(DbType.MYSQL));
        return interceptor;
    }
}

// 2. 使用分页
@Service
public class OrderService {
    
    @Autowired
    private OrderMapper orderMapper;
    
    public IPage<OrderDO> queryOrders(Long userId, int pageNum, int pageSize) {
        Page<OrderDO> page = new Page<>(pageNum, pageSize);
        return orderMapper.selectPage(page, 
            new LambdaQueryWrapper<OrderDO>()
                .eq(OrderDO::getUserId, userId)
                .orderByDesc(OrderDO::getCreateTime));
    }
}
```

---

### 3.4 Spring Boot

#### 自动配置原理

**标准答案**：

```
┌─────────────────────────────────────────────────────────────────────┐
│                      Spring Boot 自动配置原理                        │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  @SpringBootApplication                                              │
│       │                                                             │
│       ├── @EnableAutoConfiguration                                  │
│       │        │                                                    │
│       │        └── @Import(AutoConfigurationImportSelector.class)    │
│       │                   │                                         │
│       │                   └── selectImports()                        │
│       │                          │                                 │
│       │                          ▼                                 │
│       │              加载 META-INF/spring.factories                │
│       │              或 META-INF/spring/org.springframework.boot....│
│       │                          │                                 │
│       │                          ▼                                 │
│       │              根据条件加载配置类                              │
│       │                                                             │
│       └── @ComponentScan                                            │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**核心注解**：

```java
// @SpringBootApplication 包含三个注解
@SpringBootConfiguration   // @Configuration
@EnableAutoConfiguration   // 启用自动配置
@ComponentScan            // 组件扫描

// @EnableAutoConfiguration 内部
@AutoConfigurationPackage  // 自动配置包
@Import(AutoConfigurationImportSelector.class)

// 条件注解
@ConditionalOnClass        // 类路径下存在该类才加载
@ConditionalOnBean         // 容器中存在该 Bean 才加载
@ConditionalOnMissingBean  // 容器中不存在该 Bean 才加载
@ConditionalOnProperty     // 配置文件中存在该属性才加载
```

**12306 项目自定义 Starter**：

```java
// 1. 定义配置属性类
@ConfigurationProperties(prefix = "app.user")
public class UserProperties {
    private Integer maxAge = 100;
    private List<String> whitelist;
}

// 2. 定义自动配置类
@AutoConfiguration
@EnableConfigurationProperties(UserProperties.class)
public class UserAutoConfiguration {
    
    @Bean
    @ConditionalOnMissingBean
    public UserService userService(UserProperties properties) {
        return new UserService(properties);
    }
}

// 3. 注册配置（spring.factories）
// org.springframework.boot.autoconfigure.EnableAutoConfiguration=\
//   com.example.autoconfig.UserAutoConfiguration
```

---

## 四、项目场景面试题

### 4.1 分布式锁

#### 项目中的锁应用

**标准答案**：

**购票服务中的分布式锁**：

```java
/**
 * 购票服务 V2 版本 - 双重锁校验
 * 结合本地锁 + 分布式锁实现高性能购票
 */
@Service
@RequiredArgsConstructor
public class TicketServiceImpl {

    private final RedissonClient redissonClient;
    private final TicketAvailabilityTokenBucket tokenBucket;
    
    public void purchaseTicketsV2(PurchaseTicketReqDTO requestParam) {
        // 1. 先尝试 Caffeine 本地锁（无锁开销）
        String localLockKey = "local:purchase:" + requestParam.getTrainId();
        Boolean acquired = 
            CAFFEINE_CACHE.getIfPresent(localLockKey);
        
        if (Boolean.FALSE.equals(acquired)) {
            // 本地锁已被其他线程持有
            throw new ServiceException("系统繁忙，请重试");
        }
        
        // 2. 获取分布式公平锁
        String lockKey = "lock:purchase:" + requestParam.getTrainId() + ":" 
            + requestParam.getSeatType();
        RLock lock = redissonClient.getFairLock(lockKey);
        
        try {
            // 尝试获取锁，等待 3 秒，锁定 10 秒
            if (lock.tryLock(3, 10, TimeUnit.SECONDS)) {
                try {
                    // 执行业务逻辑
                    return doPurchase(requestParam);
                } finally {
                    lock.unlock();
                }
            } else {
                throw new ServiceException("购票人数过多，请稍后再试");
            }
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            throw new ServiceException("系统异常");
        }
    }
}
```

**追问：为什么需要双重锁？**

答：
- **本地锁**用于同 JVM 内的并发控制，开销小，速度快
- **分布式锁**用于跨 JVM 的并发控制，保证集群一致性
- 双重校验可以过滤掉大部分无效的分布式锁请求，提升性能

---

#### 双重锁校验

**标准答案**：

```
┌─────────────────────────────────────────────────────────────────────┐
│                      双重锁校验流程                                   │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  请求进来 ──► 检查 Caffeine 本地缓存                                  │
│                      │                                              │
│            ┌─────────┴─────────┐                                   │
│            │                   │                                    │
│        本地锁已存在          本地锁不存在                              │
│        直接返回失败          去获取分布式锁                             │
│                                              │                       │
│                                              ▼                       │
│                                    ┌───────────────────┐            │
│                                    │ 获取分布式 FairLock │            │
│                                    └─────────┬─────────┘            │
│                                              │                       │
│                                    ┌─────────┴─────────┐           │
│                                    │                   │            │
│                                获取成功            获取失败           │
│                                    │                   │            │
│                                    ▼                   │            │
│                          ┌───────────────────┐         │            │
│                          │ 执行业务逻辑       │         │            │
│                          │ 释放分布式锁       │         │            │
│                          └───────────────────┘         │            │
│                                              │                       │
│                                              ▼                       │
│                                    返回购票结果                        │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

### 4.2 缓存策略

#### 三层缓存架构

**标准答案**：

```
┌─────────────────────────────────────────────────────────────────────┐
│                      三层缓存架构                                    │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│                    ┌─────────────────┐                            │
│                    │   第一层：JVM    │ Caffeine 本地缓存           │
│                    │   纳秒级访问     │ 避免缓存击穿                │
│                    └────────┬────────┘                            │
│                             │                                      │
│                             │ 未命中                                │
│                             ▼                                      │
│                    ┌─────────────────┐                            │
│                    │  第二层：Redis   │ 分布式缓存                   │
│                    │   毫秒级访问    │ 数据共享                     │
│                    └────────┬────────┘                            │
│                             │                                      │
│                             │ 未命中                                │
│                             ▼                                      │
│                    ┌─────────────────┐                            │
│                    │   第三层：DB     │ MySQL                       │
│                    │   毫秒级访问    │ 最终数据源                   │
│                    └─────────────────┘                            │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**12306 项目代码实现**：

```java
/**
 * 三层缓存查询
 */
public <T> T getData(String cacheKey, Class<T> clazz) {
    // 1. Caffeine 本地缓存
    T localCache = caffeineCache.getIfPresent(cacheKey);
    if (localCache != null) {
        return localCache;
    }
    
    // 2. Redis 分布式缓存
    String redisValue = redisTemplate.opsForValue().get(cacheKey);
    if (redisValue != null) {
        T result = JSON.parseObject(redisValue, clazz);
        // 回填本地缓存
        caffeineCache.put(cacheKey, result);
        return result;
    }
    
    // 3. 数据库查询
    T dbData = loadFromDatabase(cacheKey);
    
    // 回填 Redis 和本地缓存
    if (dbData != null) {
        redisTemplate.opsForValue().set(cacheKey, 
            JSON.toJSONString(dbData), 30, TimeUnit.MINUTES);
        caffeineCache.put(cacheKey, dbData);
    }
    
    return dbData;
}
```

---

#### 缓存问题解决方案

**标准答案**：

| 问题 | 原因 | 12306 解决方案 |
|:----|:-----|:--------------|
| **缓存穿透** | 查询不存在的数据 | 布隆过滤器 + 缓存空值 |
| **缓存击穿** | 热点 key 过期 | 本地缓存 + 互斥锁 |
| **缓存雪崩** | 大量 key 同时过期 | 随机 TTL + 多级缓存 |

**布隆过滤器防穿透**：

```java
@Service
@RequiredArgsConstructor
public class UserLoginServiceImpl {

    private final RBloomFilter<String> usernameBloomFilter;
    private final RedissonClient redissonClient;
    
    public void register(UserRegisterReqDTO request) {
        // 1. 布隆过滤器预判
        String username = request.getUsername();
        if (!usernameBloomFilter.contains(username)) {
            // 一定不存在，直接创建
            doCreateUser(request);
            // 添加到布隆过滤器
            usernameBloomFilter.add(username);
            return;
        }
        
        // 2. 可能存在，获取分布式锁查询
        String lockKey = "lock:register:" + username;
        RLock lock = redissonClient.getLock(lockKey);
        
        try {
            lock.lock(3, TimeUnit.SECONDS);
            // 再次检查（双重检查）
            if (usernameBloomFilter.contains(username)) {
                // 精确查询数据库
                if (userMapper.existsByUsername(username)) {
                    throw new ServiceException("用户名已存在");
                }
            }
            doCreateUser(request);
            usernameBloomFilter.add(username);
        } finally {
            lock.unlock();
        }
    }
}
```

---

### 4.3 消息队列

#### RocketMQ 应用

**标准答案**：

```
┌─────────────────────────────────────────────────────────────────────┐
│                      RocketMQ 在 12306 中的应用                      │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌──────────────┐     ┌──────────────┐     ┌──────────────┐       │
│  │ 订单服务      │     │  票务服务     │     │  支付服务     │       │
│  │              │     │              │     │              │       │
│  │ • 创建订单   │     │ • 余票查询   │     │ • 支付回调   │       │
│  │ • 发送延迟   │     │ • 座位分配   │     │ • 退款处理   │       │
│  │   关闭消息   │────►│              │────►│              │       │
│  └──────────────┘     └──────────────┘     └──────────────┘       │
│                                                                     │
│  消息流向：                                                          │
│  1. 下单 ──► 发送延迟消息（30分钟后关闭）                            │
│  2. 支付成功 ──► 取消延迟消息                                        │
│  3. 取消订单 ──► 发送座位释放消息                                    │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**生产者代码**：

```java
@Service
@RequiredArgsConstructor
public class DelayCloseOrderSendProduce {

    private final RocketMQTemplate rocketMQTemplate;
    
    private static final String TOPIC = "order-delay-close";
    
    /**
     * 发送延迟关闭订单消息
     * delayLevel = 14 对应 30 分钟
     */
    public void sendMessage(String orderSn, DelayCloseOrderEvent event) {
        rocketMQTemplate.asyncSend(TOPIC, event, new SendCallback() {
            @Override
            public void onSuccess(SendResult result) {
                log.info("延迟消息发送成功: orderSn={}, msgId={}", 
                    orderSn, result.getMsgId());
            }
            
            @Override
            public void onException(Throwable e) {
                log.error("延迟消息发送失败: orderSn={}", orderSn, e);
            }
        }, 30000, delayLevel);
    }
}
```

**消费者代码**：

```java
@Component
@RequiredArgsConstructor
public class DelayCloseOrderConsumer 
        implements RocketMQListener<MessageWrapper<DelayCloseOrderEvent>> {

    private final OrderRemoteService orderRemoteService;
    
    @Override
    @Idempotent(
        key = "#message.getMessage().orderSn", 
        keyTimeout = 3600,
        scene = IdempotentScene.MQ
    )
    public void onMessage(MessageWrapper<DelayCloseOrderEvent> message) {
        DelayCloseOrderEvent event = message.getMessage();
        
        // 1. 查询订单状态
        Result<OrderDetailRespDTO> orderResult = 
            orderRemoteService.getOrderDetail(event.getOrderSn());
        
        if (!orderResult.isSuccess()) {
            return;
        }
        
        OrderDetailRespDTO order = orderResult.getData();
        
        // 2. 如果仍未支付，关闭订单
        if (OrderStatusEnum.PENDING.getCode().equals(order.getStatus())) {
            orderRemoteService.closeOrder(event.getOrderSn());
            
            // 3. 回滚座位
            seatService.releaseSeats(event);
            
            log.info("订单已超时关闭: orderSn={}", event.getOrderSn());
        }
    }
}
```

---

#### 延迟消息处理

**标准答案**：

**RocketMQ 延迟消息级别**：

| 级别 | 延迟时间 | 12306 场景 |
|:----|:--------|:-----------|
| 1 | 1秒 | 短时任务 |
| 2 | 5秒 | - |
| 3 | 10秒 | - |
| 4 | 30秒 | - |
| 5 | 1分钟 | - |
| ... | ... | - |
| 14 | 30分钟 | 订单超时关闭 ✅ |
| 16 | 2小时 | - |
| 18 | 1天 | - |

**12306 场景选择**：
- **30 分钟**是铁路购票的常见支付超时时间
- 既给用户足够时间支付，又保证票务资源及时释放

---

### 4.4 分库分表

#### ShardingSphere 应用

**标准答案**：

```
┌─────────────────────────────────────────────────────────────────────┐
│                      ShardingSphere 分库分表架构                      │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│                    逻辑表：t_order                                   │
│                         │                                           │
│         ┌───────────────┴───────────────┐                          │
│         │                               │                          │
│         ▼                               ▼                          │
│    ┌─────────┐                    ┌─────────┐                      │
│    │ ds_0    │                    │ ds_1    │                      │
│    │         │                    │         │                      │
│    │ ├──t_order_00               │ ├──t_order_00               │
│    │ ├──t_order_01               │ ├──t_order_01               │
│    │ ├──...                       │ ├──...                       │
│    │ └──t_order_31               │ └──t_order_31               │
│    └─────────┘                    └─────────┘                      │
│                                                                     │
│    分片策略：order_sn 后6位 % 32                                    │
│    好处：同一用户的订单在同一分片，便于查询                           │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**配置示例**：

```yaml
spring:
  shardingsphere:
    rules:
      sharding:
        tables:
          t_order:
            actualDataNodes: ds_${0..1}.t_order_${0..31}
            tableStrategy:
              standard:
                shardingColumn: order_sn
                shardingAlgorithmName: order_table_mod
            keyGenerateStrategy:
              column: order_sn
              keyGeneratorName: snowflake
        
        shardingAlgorithms:
          order_table_mod:
            type: INLINE
            props:
              algorithm-expression: t_order_${Long.parseLong(order_sn.substring(order_sn.length() - 6)) % 32}
        
        keyGenerators:
          snowflake:
            type: SNOWFLAKE
```

**基因法订单号**：

```java
/**
 * 生成订单号
 * 雪花ID(41位) + userId基因(6位) = 47位
 */
public String generateOrderSn(Long userId) {
    long snowflakeId = snowflakeIdGenerator.generate();
    long userIdGene = userId % 1000000;  // 取后6位作为基因
    return String.format("%013d%06d", snowflakeId, userIdGene);
}
```

---

#### 分片策略

**标准答案**：

| 策略 | 说明 | 适用场景 |
|:----|:-----|:---------|
| **取模算法** | id % 分片数 | 数据均匀分布 |
| **哈希取模** | hash(key) % 分片数 | 字符串分片键 |
| **范围查询** | BETWEEN start AND end | 时间范围查询 |
| **标签匹配** | 分片键 IN (...) | 固定分片 |
| **复合分片** | 多列组合计算 | 复杂业务 |

**12306 项目分片选择**：

- **分片键**：`order_sn`（订单号）
- **分片算法**：取模算法 `order_sn % 32`
- **分片键设计**：通过 userId 基因法将 userId 融入订单号

**为什么选择 order_sn 作为分片键？**

1. **高查询频率**：按订单号查询是最高频的操作
2. **唯一性**：雪花算法保证全局唯一
3. **均匀分布**：取模算法保证数据均匀分布
4. **避免热点**：不会像 user_id 那样导致数据倾斜

---

### 4.5 幂等性设计

#### 幂等注解实现

**标准答案**：

```
┌─────────────────────────────────────────────────────────────────────┐
│                      幂等性保障机制                                   │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  @Idempotent 注解流程：                                             │
│                                                                     │
│  ┌───────────┐     ┌───────────┐     ┌───────────┐                │
│  │ AOP 拦截   │ ──► │ Redis 查询 │ ──► │  重复处理  │               │
│  │ 请求       │     │            │     │  直接返回  │               │
│  └───────────┘     └───────────┘     └───────────┘                │
│                          │                                          │
│                    ┌─────┴─────┐                                   │
│                    │           │                                    │
│                不存在        已存在                                  │
│                    │           │                                    │
│                    ▼           ▼                                    │
│             ┌───────────┐  返回缓存结果                             │
│             │ 执行业务   │                                          │
│             │ 设置幂等   │                                          │
│             │   标记     │                                          │
│             └───────────┘                                           │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**核心代码**：

```java
/**
 * 幂等切面
 */
@Aspect
@Component
@RequiredArgsConstructor
public class IdempotentAspect {

    private final StringRedisTemplate stringRedisTemplate;
    
    @Around("@annotation(idempotent)")
    public Object around(ProceedingJoinPoint point, Idempotent idempotent) 
            throws Throwable {
        
        // 1. 构建幂等 key
        String key = buildKey(idempotent, point.getArgs());
        
        // 2. 尝试获取幂等锁
        Boolean acquired = stringRedisTemplate.opsForValue()
            .setIfAbsent(key + ":lock", "1", 3L, TimeUnit.SECONDS);
        
        if (!acquired) {
            throw new IdempotentException("请求正在处理中，请勿重复提交");
        }
        
        try {
            // 3. 检查是否已处理
            String cached = stringRedisTemplate.opsForValue().get(key);
            if (cached != null) {
                return JSON.parseObject(cached, 
                    ((MethodSignature) point.getSignature())
                        .getMethod().getReturnType());
            }
            
            // 4. 执行实际业务
            Object result = point.proceed();
            
            // 5. 缓存结果
            stringRedisTemplate.opsForValue().set(
                key, 
                JSON.toJSONString(result),
                idempotent.keyTimeout(),
                TimeUnit.SECONDS
            );
            
            return result;
        } finally {
            stringRedisTemplate.delete(key + ":lock");
        }
    }
    
    private String buildKey(Idempotent idempotent, Object[] args) {
        // 使用 SpEL 表达式解析
        ExpressionParser parser = new SpelExpressionParser();
        EvaluationContext context = new StandardEvaluationContext();
        context.setVariable("args", args);
        return idempotent.key();
    }
}

// 使用示例
@Idempotent(
    key = "#request.orderSn", 
    keyTimeout = 3600,
    scene = IdempotentScene.REST
)
public Result<Void> createOrder(@RequestBody OrderCreateReq request) {
    // 业务逻辑
}
```

---

## 五、算法面试题

### 5.1 LRU 缓存

**题目**：实现一个 LRU（最近最少使用）缓存

**标准答案**：

```java
/**
 * LRU 缓存实现
 * 使用 LinkedHashMap（访问顺序）
 */
public class LRUCache<K, V> extends LinkedHashMap<K, V> {
    
    private final int capacity;
    
    public LRUCache(int capacity) {
        super(capacity, 0.75f, true);
        this.capacity = capacity;
    }
    
    @Override
    protected boolean removeEldestEntry(Map.Entry<K, V> eldest) {
        return size() > capacity;
    }
}

/**
 * 手写实现（双向链表 + HashMap）
 */
public class LRUCacheImpl<K, V> {
    
    private class Node {
        K key;
        V value;
        Node prev, next;
        Node(K key, V value) {
            this.key = key;
            this.value = value;
        }
    }
    
    private final int capacity;
    private final Map<K, Node> cache;
    private final Node head, tail;
    
    public LRUCacheImpl(int capacity) {
        this.capacity = capacity;
        this.cache = new HashMap<>();
        this.head = new Node(null, null);
        this.tail = new Node(null, null);
        head.next = tail;
        tail.prev = head;
    }
    
    public V get(K key) {
        Node node = cache.get(key);
        if (node == null) return null;
        moveToTail(node);
        return node.value;
    }
    
    public void put(K key, V value) {
        Node node = cache.get(key);
        if (node != null) {
            node.value = value;
            moveToTail(node);
        } else {
            Node newNode = new Node(key, value);
            cache.put(key, newNode);
            addToTail(newNode);
            if (cache.size() > capacity) {
                Node toRemove = removeHead();
                cache.remove(toRemove.key);
            }
        }
    }
    
    private void addToTail(Node node) {
        node.prev = tail.prev;
        node.next = tail;
        tail.prev.next = node;
        tail.prev = node;
    }
    
    private void removeNode(Node node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }
    
    private void moveToTail(Node node) {
        removeNode(node);
        addToTail(node);
    }
    
    private Node removeHead() {
        Node toRemove = head.next;
        removeNode(toRemove);
        return toRemove;
    }
}
```

---

### 5.2 线程安全计数器

**题目**：实现一个线程安全的计数器，支持 increment、decrement、get 操作

**标准答案**：

```java
/**
 * 线程安全计数器 - 使用 AtomicLong
 */
public class ThreadSafeCounter {
    private final AtomicLong count = new AtomicLong(0);
    
    public void increment() {
        count.incrementAndGet();
    }
    
    public void decrement() {
        count.decrementAndGet();
    }
    
    public long get() {
        return count.get();
    }
}

/**
 * 线程安全计数器 - 使用 synchronized
 */
public class SynchronizedCounter {
    private long count = 0;
    
    public synchronized void increment() {
        count++;
    }
    
    public synchronized void decrement() {
        count--;
    }
    
    public synchronized long get() {
        return count;
    }
}
```

---

### 5.3 秒杀系统

**题目**：设计一个秒杀系统的库存扣减方案

**标准答案**：

```java
@Service
public class SeckillService {

    private final StringRedisTemplate redisTemplate;
    private final RedissonClient redissonClient;
    
    /**
     * 秒杀扣减库存（Redis + 分布式锁）
     */
    public String seckill(Long userId, Long goodsId) {
        String stockKey = "seckill:stock:" + goodsId;
        String userKey = "seckill:user:" + goodsId + ":" + userId;
        
        // 1. 用户防重（一人一单）
        Boolean isFirst = redisTemplate.opsForValue()
            .setIfAbsent(userKey, "1", 24, TimeUnit.HOURS);
        if (!isFirst) {
            return "您已购买过该商品";
        }
        
        // 2. Redis Lua 原子扣减
        String luaScript = 
            "local stock = redis.call('get', KEYS[1]) " +
            "if not stock then return -2 end " +
            "stock = tonumber(stock) " +
            "if stock < tonumber(ARGV[1]) then return -1 end " +
            "redis.call('decrby', KEYS[1], ARGV[1]) " +
            "return stock - tonumber(ARGV[1])";
        
        DefaultRedisScript<Long> script = 
            new DefaultRedisScript<>(luaScript, Long.class);
        Long result = redisTemplate.execute(script, 
            Collections.singletonList(stockKey), 1);
        
        if (result == null || result < 0) {
            redisTemplate.delete(userKey);
            return result == -1 ? "库存不足" : "活动未开始";
        }
        
        // 3. 发送下单消息
        sendOrderMessage(userId, goodsId);
        
        return "秒杀成功";
    }
    
    /**
     * Lua 脚本保证原子性
     */
    private static final String DEDUCT_SCRIPT = 
        "local stock = redis.call('get', KEYS[1]) " +
        "if stock == false then return -2 end " +
        "if tonumber(stock) < tonumber(ARGV[1]) then return -1 end " +
        "redis.call('decrby', KEYS[1], ARGV[1]) " +
        "return tonumber(stock) - tonumber(ARGV[1])";
}
```

---

### 5.4 合并有序链表

**题目**：合并 K 个有序链表

**标准答案**：

```java
/**
 * 方法一：分治合并
 * 时间复杂度：O(N log K)
 */
public ListNode mergeKLists(ListNode[] lists) {
    if (lists == null || lists.length == 0) return null;
    return merge(lists, 0, lists.length - 1);
}

private ListNode merge(ListNode[] lists, int left, int right) {
    if (left == right) return lists[left];
    int mid = left + (right - left) / 2;
    ListNode l1 = merge(lists, left, mid);
    ListNode l2 = merge(lists, mid + 1, right);
    return mergeTwoLists(l1, l2);
}

private ListNode mergeTwoLists(ListNode l1, ListNode l2) {
    if (l1 == null) return l2;
    if (l2 == null) return l1;
    if (l1.val <= l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
}

/**
 * 方法二：最小堆
 * 时间复杂度：O(N log K)
 */
public ListNode mergeKListsWithHeap(ListNode[] lists) {
    PriorityQueue<ListNode> heap = new PriorityQueue<>(
        Comparator.comparingInt(n -> n.val)
    );
    
    for (ListNode node : lists) {
        if (node != null) heap.offer(node);
    }
    
    ListNode dummy = new ListNode(0);
    ListNode cur = dummy;
    
    while (!heap.isEmpty()) {
        ListNode node = heap.poll();
        cur.next = node;
        cur = cur.next;
        if (node.next != null) {
            heap.offer(node.next);
        }
    }
    
    return dummy.next;
}
```

---

### 5.5 环形链表

**题目**：判断链表是否有环，找出环的入口

**标准答案**：

```java
/**
 * 判断是否有环 - 快慢指针
 */
public boolean hasCycle(ListNode head) {
    if (head == null || head.next == null) return false;
    
    ListNode slow = head;
    ListNode fast = head;
    
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) return true;
    }
    
    return false;
}

/**
 * 找出环的入口
 * 数学推导：从头结点和相遇点同时出发，再次相遇即为环入口
 */
public ListNode detectCycle(ListNode head) {
    if (head == null || head.next == null) return null;
    
    // 1. 找相遇点
    ListNode slow = head, fast = head;
    boolean hasCycle = false;
    
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) {
            hasCycle = true;
            break;
        }
    }
    
    if (!hasCycle) return null;
    
    // 2. 找环入口
    slow = head;
    while (slow != fast) {
        slow = slow.next;
        fast = fast.next;
    }
    
    return slow;
}
```

---

## 六、MySQL 数据库面试题

### 6.1 索引结构

**标准答案**：

```
┌─────────────────────────────────────────────────────────────────────┐
│                        B+ 树索引结构                                 │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│                           [Root]                                    │
│                    ┌──────┴──────┐                                  │
│                   [20]          [50]                                 │
│               ┌────┴────┐    ┌────┴────┐                            │
│              [10]     [20] [30]     [50]                            │
│              /  \     / \  / \     /  \                             │
│            数据 数据  数据 数据 数据  数据                            │
│                                                                     │
│  B+ 树特点：                                                        │
│  1. 所有数据都在叶子节点                                             │
│  2. 叶子节点之间用链表连接                                          │
│  3. 查询稳定：O(log N)                                             │
│  4. 范围查询友好                                                    │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**InnoDB vs MyISAM**：

| 特性 | InnoDB | MyISAM |
|:----|:-------|:-------|
| 事务支持 | ✅ | ❌ |
| 锁粒度 | 行锁 | 表锁 |
| 外键 | ✅ | ❌ |
| 全文索引 | ✅（5.6+） | ✅ |
| 索引结构 | B+ Tree | B+ Tree |
| 主键索引 | 聚簇索引 | 非聚簇索引 |

---

### 6.2 索引失效场景

**标准答案**：

| 失效场景 | 示例 | 说明 |
|:--------|:-----|:-----|
| **左模糊查询** | `LIKE '%abc'` | 无法使用索引 |
| **函数/计算** | `WHERE YEAR(date) = 2024` | 索引列参与计算 |
| **类型转换** | `WHERE id = '123'` | id 是 int 类型 |
| **OR 连接** | `WHERE name = 'a' OR age = 20` | 非索引列导致全表 |
| **NOT 查询** | `WHERE status != 1` | 通常无法使用索引 |
| **范围之后** | `WHERE a = 1 AND b > 5 AND c = 3` | c 无法使用索引 |
| **全表扫描** | `SELECT *` | 未建索引 |

**12306 项目中的索引设计**：

```sql
-- 订单表索引
CREATE INDEX idx_order_sn ON t_order(order_sn);           -- 按订单号查询
CREATE INDEX idx_user_id ON t_order(user_id);             -- 按用户查询订单
CREATE INDEX idx_status ON t_order(status);               -- 按状态查询
CREATE INDEX idx_create_time ON t_order(create_time);    -- 按时间排序

-- 座位表索引
CREATE INDEX idx_train_date ON t_seat(train_id, departure, arrival);
CREATE INDEX idx_seat_status ON t_seat(seat_status);
```

---

### 6.3 事务隔离级别

**标准答案**：

| 隔离级别 | 脏读 | 不可重复读 | 幻读 | 实现原理 |
|:--------|:-----|:----------|:-----|:---------|
| **Read Uncommitted** | ✅ 可能 | ✅ 可能 | ✅ 可能 | 无锁 |
| **Read Committed** | ❌ | ✅ 可能 | ✅ 可能 | MVCC |
| **Repeatable Read** | ❌ | ❌ | ✅ 可能* | MVCC + Gap Lock |
| **Serializable** | ❌ | ❌ | ❌ | 串行化 |

**MVCC 原理**：

```sql
-- Read View 快照
事务开启时创建，包含：
- m_ids: 活跃事务列表
- min_trx_id: 最小活跃事务ID
- max_trx_id: 最大事务ID + 1
- creator_trx_id: 当前事务ID

-- 可见性判断
IF row.trx_id == creator_trx_id: 可读
ELIF row.trx_id < min_trx_id: 可读（已提交）
ELIF row.trx_id in m_ids: 不可读（活跃事务修改）
ELSE: 可读（已提交）
```

**12306 项目的隔离级别**：

```yaml
# MySQL 配置
transaction-isolation: REPEATABLE-READ

# Spring 配置
@Transactional(isolation = Isolation.REPEATABLE_READ)
```

---

### 6.4 SQL 优化

**标准答案**：

**常用优化手段**：

```sql
-- 1. 避免 SELECT *
SELECT order_sn, user_id, status, total_amount 
FROM t_order WHERE user_id = #{userId};

-- 2. 使用 LIMIT 限制返回
SELECT * FROM t_order LIMIT 100;

-- 3. 使用覆盖索引
-- 索引包含所有查询字段，避免回表
CREATE INDEX idx_user_status ON t_order(user_id, status);

-- 4. 使用 EXPLAIN 分析
EXPLAIN SELECT * FROM t_order WHERE order_sn = 'xxx';

-- 5. 批量插入优化
INSERT INTO t_order (...) VALUES 
('sn1', ...), ('sn2', ...), ('sn3', ...);

-- 6. 分页优化
-- 低效：SELECT * FROM t_order LIMIT 1000000, 10
-- 高效：SELECT * FROM t_order WHERE id > #{lastId} LIMIT 10
```

---

## 七、Redis 高级面试题

### 7.1 数据结构

**标准答案**：

| 数据结构 | 命令示例 | 12306 应用 |
|:--------|:--------|:----------|
| **String** | `SET key value` | Token 存储、计数器 |
| **Hash** | `HSET key field value` | 令牌桶、余票缓存 |
| **List** | `LPUSH/RPOP` | 消息队列、任务队列 |
| **Set** | `SADD key member` | 用户标签、去重 |
| **ZSet** | `ZADD key score member` | 排行榜、延时队列 |
| **Bitmap** | `SETBIT key offset val` | 用户签到、状态标记 |
| **HyperLogLog** | `PFADD key element` | UV 统计 |

**12306 令牌桶实现**：

```java
// Redis Hash 存储令牌桶
Hash key: ticket:bucket:{trainId}:{seatType}
fields:
  - count: 当前令牌数
  - update_time: 上次更新时间

// Lua 脚本保证原子性
"local count = redis.call('HGET', KEYS[1], 'count') " +
"local lastTime = redis.call('HGET', KEYS[1], 'update_time') " +
-- 计算应该补充的令牌数
"local now = tonumber(ARGV[1]) " +
"local elapsed = now - tonumber(lastTime) " +
"local addTokens = math.floor(elapsed / 1000 * 50) " +  -- 每秒50个令牌
"local newCount = math.min(tonumber(count) + addTokens, tonumber(ARGV[2])) " +
-- 扣减
"if newCount >= tonumber(ARGV[3]) then " +
"  newCount = newCount - tonumber(ARGV[3]) " +
"  redis.call('HSET', KEYS[1], 'count', newCount) " +
"  redis.call('HSET', KEYS[1], 'update_time', now) " +
"  return newCount " +
"else return -1 end"
```

---

### 7.2 持久化机制

**标准答案**：

| 机制 | 原理 | 优点 | 缺点 |
|:----|:-----|:-----|:-----|
| **RDB** | 定时快照 | 恢复快，文件紧凑 | 可能丢数据 |
| **AOF** | 命令日志 | 数据安全 | 文件大，恢复慢 |

**RDB 配置**：

```bash
# 触发条件
save 900 1      # 900秒内1个key变化
save 300 10     # 300秒内10个key变化
save 60 10000   # 60秒内10000个key变化

# AOF 配置
appendonly yes
appendfsync everysec  # 每秒同步（推荐）
```

**12306 选择**：
- **RDB + AOF** 混合使用
- RDB 用于快速恢复
- AOF 用于数据安全

---

### 7.3 集群方案

**标准答案**：

| 方案 | 原理 | 槽数 | 主从 | 适用场景 |
|:----|:-----|:-----|:-----|:---------|
| **Redis Cluster** | 16384 槽自动分片 | 16384 | 支持 | 官方推荐 |
| **Codis** | Proxy 中间件 | 1024 | 支持 | 豌豆荚方案 |
| **Sentinel** | 主从 + 哨兵 | 无 | 支持 | 哨兵高可用 |
| **Twemproxy** | Proxy 中间件 | 可配 | 不支持 | Twitter 方案 |

**12306 项目选择**：
- **Redis Cluster** 或 **Sentinel** 模式
- 取决于数据量和可用性要求

---

### 7.4 缓存问题

**标准答案**：

**三大问题**：

| 问题 | 原因 | 解决方案 |
|:----|:-----|:---------|
| **穿透** | 查询不存在数据 | 布隆过滤器 + 空值缓存 |
| **击穿** | 热点 key 过期 | 本地缓存 + 互斥锁 |
| **雪崩** | 大量 key 同时过期 | 随机 TTL + 多级缓存 |

**代码示例**：

```java
/**
 * 缓存穿透防护
 */
public String getUser(String username) {
    // 1. 布隆过滤器预判
    if (!bloomFilter.contains(username)) {
        return null;  // 一定不存在
    }
    
    // 2. 查询缓存
    String cached = redisTemplate.opsForValue().get("user:" + username);
    if (cached != null) {
        return cached;
    }
    
    // 3. 查询数据库
    User user = userMapper.findByUsername(username);
    if (user != null) {
        redisTemplate.opsForValue().set("user:" + username, 
            JSON.toJSONString(user), 30, TimeUnit.MINUTES);
    } else {
        // 缓存空值，防止穿透
        redisTemplate.opsForValue().set("user:" + username, 
            "", 5, TimeUnit.MINUTES);
    }
    
    return user != null ? JSON.toJSONString(user) : null;
}

/**
 * 缓存击穿防护
 */
public String getTrain(String trainId) {
    String cacheKey = "train:" + trainId;
    
    // 1. 本地缓存
    String local = caffeine.getIfPresent(cacheKey);
    if (local != null) return local;
    
    // 2. 分布式锁
    RLock lock = redissonClient.getLock("lock:" + cacheKey);
    
    try {
        if (lock.tryLock(3, 10, TimeUnit.SECONDS)) {
            // 双重检查
            local = caffeine.getIfPresent(cacheKey);
            if (local != null) return local;
            
            // 查询数据库
            Train train = trainMapper.findById(trainId);
            if (train != null) {
                caffeine.put(cacheKey, JSON.toJSONString(train));
            }
            return train != null ? JSON.toJSONString(train) : null;
        } else {
            // 获取锁失败，短暂等待后重试
            Thread.sleep(100);
            return caffeine.getIfPresent(cacheKey);
        }
    } finally {
        if (lock.isHeldByCurrentThread()) {
            lock.unlock();
        }
    }
}
```

---

## 八、线程池与并发深度解析

### 8.1 Hippo4j 动态线程池

**标准答案**：

```java
/**
 * Hippo4j 动态线程池配置
 */
@Configuration
public class Hippo4jThreadPoolConfiguration {

    @Bean
    @DynamicThreadPool
    public ThreadPoolExecutor selectSeatThreadPoolExecutor() {
        String threadPoolId = "select-seat-thread-pool-executor";
        return ThreadPoolBuilder.builder()
                .threadPoolId(threadPoolId)
                .threadFactory(threadPoolId)
                .workQueue(BlockingQueueTypeEnum.SYNCHRONOUS_QUEUE)
                .corePoolSize(24)
                .maximumPoolSize(36)
                .allowCoreThreadTimeOut(true)
                .keepAliveTime(60, TimeUnit.MINUTES)
                .rejected(new ThreadPoolExecutor.CallerRunsPolicy())
                .dynamicPool()
                .build();
    }
}
```

**核心特性**：
1. **运行时调整**：无需重启即可修改线程池参数
2. **监控告警**：任务拒绝、超时等自动告警
3. **日志记录**：详细的任务执行日志

---

### 8.2 参数设置原则

**标准答案**：

**线程池参数公式**：

| 类型 | 核心线程数公式 | 最大线程数公式 |
|:----|:-------------|:-------------|
| **CPU 密集型** | CPU + 1 | CPU + 1 |
| **IO 密集型** | CPU / (1 - 阻塞系数) | CPU × 2 |
| **混合型** | 根据实际测试调优 | 可配置 |

**阻塞系数估算**：
- 如果 IO 占 80%，则核心线程数 = CPU / 0.2 = 5 × CPU

---

## 九、设计模式深度解析

### 9.1 责任链模式

**标准答案**：

```java
/**
 * 抽象责任链处理器
 */
public abstract class AbstractChainHandler<T> implements Ordered {
    public abstract String mark();
    public abstract void handler(T requestParam);
}

/**
 * 责任链上下文
 */
public final class AbstractChainContext<T> {
    private final Map<String, List<AbstractChainHandler>> container = 
        new HashMap<>();
    
    public void handler(String mark, T requestParam) {
        List<AbstractChainHandler> handlers = container.get(mark);
        if (CollectionUtils.isEmpty(handlers)) {
            throw new RuntimeException("Chain not found: " + mark);
        }
        handlers.forEach(h -> h.handler(requestParam));
    }
}

/**
 * 用户注册责任链
 */
@Component
@ChainMark(UserChainMarkEnum.USER_REGISTER)
public class UserRegisterParamNotNullChainHandler 
        extends AbstractChainHandler<UserRegisterReqDTO> {
    
    @Override
    public void handler(UserRegisterReqDTO requestParam) {
        // 参数校验逻辑
        if (requestParam.getUsername() == null) {
            throw new ServiceException("用户名不能为空");
        }
    }
    
    @Override
    public int getOrder() {
        return 1;
    }
}
```

---

### 9.2 策略模式

**标准答案**：

```java
/**
 * 策略执行接口
 */
public interface AbstractExecuteStrategy<REQUEST, RESPONSE> {
    default String mark() { return null; }
    default RESPONSE executeResp(REQUEST requestParam) { return null; }
}

/**
 * 支付渠道策略
 */
public enum PayChannelEnum {
    ALI_PAY("ali_pay"),
    WECHAT_PAY("wechat_pay"),
    BANK_PAY("bank_pay");
}

@Component
public class AliPayStrategy implements AbstractExecuteStrategy<PayRequest, PayResponse> {
    @Override
    public String mark() {
        return PayChannelEnum.ALI_PAY.name();
    }
    
    @Override
    public PayResponse executeResp(PayRequest request) {
        // 支付宝支付逻辑
        return PayResponse.builder()
            .payUrl(alipayClient.pagePay(request))
            .build();
    }
}

/**
 * 策略选择器
 */
@Service
public class PayServiceImpl {
    @Autowired
    private AbstractStrategyChoose strategyChoose;
    
    public PayResponse pay(PayRequest request) {
        return (PayResponse) strategyChoose
            .chooseAndExecuteResp(request.getChannel(), request);
    }
}
```

---

## 十、Spring Cloud Alibaba 深度解析

### 10.1 Nacos 服务注册

**标准答案**：

```yaml
# application.yml
spring:
  cloud:
    nacos:
      discovery:
        server-addr: localhost:8848
        namespace: public
        group: DEFAULT_GROUP
        heart-beat-interval: 30000
        heart-beat-timeout: 90000
```

**服务注册流程**：
1. 启动时向 Nacos 发送注册请求
2. 包含服务名、IP、端口、健康检查信息
3. Nacos 维护服务列表
4. 客户端定时心跳续约
5. 超时未续约则剔除

---

### 10.2 Sentinel 熔断限流

**标准答案**：

```java
/**
 * Sentinel 使用示例
 */
@RestController
public class TicketController {

    @GetMapping("/api/ticket/query")
    @SentinelResource(
        value = "query-train-detail",
        blockHandler = "queryTrainBlockHandler",
        fallback = "queryTrainFallback"
    )
    public Result<TrainDetail> queryTrainDetail(String trainId) {
        return trainService.queryById(trainId);
    }
    
    // 限流处理
    public Result<TrainDetail> queryTrainBlockHandler(
            String trainId, BlockException ex) {
        return Result.fail("系统繁忙，请稍后再试");
    }
    
    // 降级处理
    public Result<TrainDetail> queryTrainFallback(
            String trainId, Throwable ex) {
        return Result.fail("服务暂不可用");
    }
}
```

---

### 10.3 Gateway 网关

**标准答案**：

```yaml
spring:
  cloud:
    gateway:
      routes:
        - id: ticket-service
          uri: lb://ticket-service
          predicates:
            - Path=/api/ticket/**
          filters:
            - StripPrefix=1
            - name: RequestRateLimiter
              args:
                redis-rate-limiter.replenishRate: 100
                redis-rate-limiter.burstCapacity: 200
```

---

## 十一、分布式系统设计

### 11.1 分布式 ID 生成

**标准答案**：

```
┌─────────────────────────────────────────────────────────────────────┐
│                      雪花算法 ID 结构（64位）                        │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  1 位：符号位，始终为 0                                              │
│  41 位：时间戳（毫秒），可用 69 年                                  │
│  10 位：机器标识（5位数据中心 + 5位机器ID）                          │
│  12 位：序列号，每毫秒内自增，支持 4096 个 ID                        │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**12306 实现**：

```java
public class Snowflake {
    private final long workerId;
    private final long dataCenterId;
    private long sequence = 0L;
    private long lastTimestamp = -1L;
    
    public synchronized long nextId() {
        long timestamp = System.currentTimeMillis();
        if (timestamp < lastTimestamp) {
            throw new RuntimeException("Clock moved backwards");
        }
        if (timestamp == lastTimestamp) {
            sequence = (sequence + 1) & 4095;
            if (sequence == 0) {
                timestamp = waitNextMillis(timestamp);
            }
        } else {
            sequence = 0L;
        }
        lastTimestamp = timestamp;
        
        return ((timestamp - EPOCH) << 22)
            | (dataCenterId << 17)
            | (workerId << 12)
            | sequence;
    }
}
```

---

### 11.2 分布式事务

**标准答案**：

| 方案 | 原理 | 优点 | 缺点 |
|:----|:-----|:-----|:-----|
| **2PC** | 两阶段提交 | 强一致 | 性能差，会阻塞 |
| **TCC** | Try-Confirm-Cancel | 性能好 | 业务侵入 |
| **MQ 事务** | 半消息 + 回调 | 可靠 | 依赖中间件 |
| **Saga** | 链式补偿 | 性能好 | 多次补偿 |

**12306 RocketMQ 事务消息**：

```java
@Service
@RequiredArgsConstructor
public class OrderServiceImpl {
    
    private final RocketMQTemplate rocketMQTemplate;
    
    @Transactional
    public String createOrder(OrderCreateReqDTO req) {
        // 1. 执行业务
        OrderDO order = doCreateOrder(req);
        
        // 2. 发送事务消息
        Transaction transaction = rocketMQTemplate
            .sendMessageInTransaction("order:topic", order, order);
        transaction.commit();
        
        return order.getOrderSn();
    }
}

@Component
public class OrderTransactionListener 
        implements RocketMQLocalTransactionListener {
    
    @Override
    public RocketMQLocalTransactionState executeLocalTransaction(
            Message msg, Object arg) {
        try {
            orderMapper.insert((OrderDO) arg);
            return RocketMQLocalTransactionState.COMMIT;
        } catch (Exception e) {
            return RocketMQLocalTransactionState.ROLLBACK;
        }
    }
    
    @Override
    public RocketMQLocalTransactionState checkLocalTransaction(Message msg) {
        String orderSn = msg.getHeaders().get("orderSn", String.class);
        return orderMapper.exists(orderSn) 
            ? COMMIT : ROLLBACK;
    }
}
```

---

### 11.3 Canal 数据同步

**标准答案**：

```
┌─────────────────────────────────────────────────────────────────────┐
│                      Canal 数据同步流程                               │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  MySQL ──► Canal Server ──► RocketMQ ──► 应用消费者                  │
│              │                                              │        │
│              │  解析 BinLog                                │        │
│              │  转换格式                                   │        │
│              └──────────────────────────────────────────────┘        │
│                                                                     │
│  应用场景：                                                          │
│  • 数据库变更 → 更新 Redis 缓存                                      │
│  • 多服务数据同步                                                   │
│  • 数据湖/数据仓库同步                                              │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 十二、系统设计题

### 12.1 设计抢票系统

**标准答案**：

```
┌─────────────────────────────────────────────────────────────────────┐
│                      高并发抢票系统架构                               │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐         │
│  │ 用户请求 │───►│ Gateway │───►│  限流   │───►│  幂等   │         │
│  └─────────┘    └─────────┘    └─────────┘    └─────────┘         │
│                                               │                    │
│                                               ▼                    │
│                                    ┌──────────────────┐            │
│                                    │  库存预扣减      │            │
│                                    │  (Redis Lua)     │            │
│                                    └────────┬─────────┘            │
│                                             │                      │
│                                             ▼                      │
│                                    ┌──────────────────┐            │
│                                    │  发送下单消息    │            │
│                                    │  (RocketMQ)     │            │
│                                    └────────┬─────────┘            │
│                                             │                      │
│                                             ▼                      │
│                                    ┌──────────────────┐            │
│                                    │  异步创建订单    │            │
│                                    │  (消费者)        │            │
│                                    └──────────────────┘            │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

### 12.2 设计秒杀系统

**标准答案**：

**核心要点**：
1. **限流**：网关层限流 + 分布式限流
2. **削峰**：消息队列异步处理
3. **缓存**：热点数据提前加载到 Redis
4. **原子操作**：Lua 脚本保证扣减原子性
5. **幂等**：防止重复下单
6. **限流熔断**：Sentinel 保护下游服务

---

## 十三、面试高频手撕代码

### 13.1 合并 K 个有序链表

见 5.4 节

### 13.2 LRU 缓存实现

见 5.1 节

### 13.3 滑动窗口最大值

**标准答案**：

```java
/**
 * 滑动窗口最大值
 * 使用单调递减队列
 * 时间复杂度：O(N)
 */
public int[] maxSlidingWindow(int[] nums, int k) {
    if (nums == null || nums.length == 0 || k <= 0) {
        return new int[0];
    }
    
    int n = nums.length;
    int[] result = new int[n - k + 1];
    int resultIndex = 0;
    
    Deque<Integer> deque = new LinkedList<>();
    
    for (int i = 0; i < n; i++) {
        // 移除超出窗口的元素
        while (!deque.isEmpty() && deque.peek() <= i - k) {
            deque.poll();
        }
        
        // 移除比当前元素小的（保持递减）
        while (!deque.isEmpty() && nums[deque.peekLast()] < nums[i]) {
            deque.pollLast();
        }
        
        deque.offer(i);
        
        // 窗口形成后记录最大值
        if (i >= k - 1) {
            result[resultIndex++] = nums[deque.peek()];
        }
    }
    
    return result;
}
```

---

## 十四、高频追问与扩展

### Spring Boot 自动配置深度追问

**追问 1：如何实现一个自定义 Starter？**

答：
1. 创建配置类 `XxxProperties`
2. 创建自动配置类 `XxxAutoConfiguration`
3. 注册到 `META-INF/spring.factories`

**追问 2：@Conditional 注解有哪些？**

答：
- `@ConditionalOnClass` - 类路径下存在才加载
- `@ConditionalOnBean` - Bean 存在才加载
- `@ConditionalOnMissingBean` - Bean 不存在才加载
- `@ConditionalOnProperty` - 配置属性满足条件
- `@ConditionalOnExpression` - SpEL 表达式为 true

---

### MySQL 索引失效深度追问

**追问：为什么索引失效会导致全表扫描？**

答：
1. 索引是为了快速定位数据
2. 如果索引列参与计算/函数处理，MySQL 无法使用索引
3. 左模糊查询无法利用 B+ 树的有序性
4. OR 连接非索引列时，需要扫描全表才能合并结果

---

### Redis 缓存问题深度追问

**追问：如何设计缓存失效策略？**

答：
1. **TTL 策略**：根据数据重要性设置不同 TTL
2. **主动刷新**：定时任务主动刷新热点数据
3. **随机 TTL**：基础 TTL + 随机值，避免雪崩
4. **容量淘汰**：配置 maxmemory-policy

---

## 十五、简历面试指南

### 简历项目描述模板

```markdown
## 项目经历

### 12306 铁路购票系统
**项目介绍**：基于 Java 17 + Spring Cloud Alibaba 的高并发铁路购票系统，模拟 12306 核心业务流程

**技术栈**：Spring Boot 3.0 / Redis / RocketMQ / ShardingSphere / Sentinel

**核心职责**：
1. 负责票务服务开发，实现余票查询与购票功能
2. 设计并实现分布式锁机制，解决高并发抢票超卖问题
3. 优化缓存架构，采用令牌桶 + Redis Lua 实现库存原子扣减
4. 设计订单超时处理方案，使用 RocketMQ 延迟消息实现 30 分钟自动关单

**项目亮点**：
- 性能优化：v1 到 v2 版本 QPS 提升 300%+
- 高可用：支持 Sentinel 限流熔断，保障系统稳定性
- 可扩展：基于 ShardingSphere 实现 2 库 × 32 表分库分表
```

### 面试话术总结

**项目介绍**：
> "我最近参与的是一个高并发铁路购票系统，日均请求量在百万级别。系统采用微服务架构，主要包括用户服务、票务服务、订单服务和支付服务。我在项目中主要负责票务服务的高并发优化工作。"

**技术选型**：
> "选择 Redis 做缓存主要是因为它的 QPS 很高，而且支持丰富的数据结构。我们用它来实现分布式锁、缓存穿透防护和令牌桶限流。"

**解决难点**：
> "项目最大的难点是余票扣减的超卖问题。最初我们使用数据库乐观锁，但在高并发下失败率很高。后来我们引入了令牌桶算法结合 Redis Lua 脚本，在缓存层先做预扣减，保证原子性，然后异步落库，性能提升了 30 倍。"

### 注意事项

1. **不要背答案**：理解原理，用自己的话表达
2. **不会就说不会**：可以诚实说不太了解，但可以分析可能的方向
3. **主动延伸**：说完答案后，可以主动提一些相关知识点
4. **画图说明**：复杂问题时，画图比纯文字更清晰
5. **代码要会写**：手撕代码题是硬功夫，需要多练习

---

## 十六、附录

### 常用命令

```bash
# JVM 相关
jps -l                          # 查看 Java 进程
jstack <pid>                    # 查看线程堆栈
jmap -dump:format=b,file=xxx.hprof <pid>  # 导出堆 dump
jstat -gcutil <pid> 1000        # 查看 GC 统计

# Redis 相关
redis-cli -a password info      # 查看 Redis 信息
redis-cli -a password dbsize    # 查看 key 数量

# MySQL 相关
show processlist;               # 查看连接
explain <sql>;                  # 分析 SQL 执行计划
```

### 常用参数配置

```bash
# JVM 参数
-Xms4g -Xmx4g                   # 堆大小
-XX:+UseG1GC                     # G1 垃圾收集器

# Redis 参数
maxmemory 2gb                    # 最大内存
maxmemory-policy allkeys-lru     # 淘汰策略
```

### 参考资料

| 资料 | 链接 |
|:----|:-----|
| 12306 项目官网 | https://nageoffer.com/12306/ |
| 12306 官方文档 | https://nageoffer.com/docs/ |
| 12306 掘金文章 | https://juejin.cn/post/7259757499254718524 |
| Spring 官方文档 | https://spring.io/projects/spring-framework |
| Redis 文档 | https://redis.io/docs/ |

---

## 十七、高并发场景深入分析

### 17.1 高并发余票扣减场景

#### 问题背景

在12306铁路购票系统中，春运期间每秒可能有数十万用户同时抢票。如果余票扣减没有做好原子性控制，就会出现超卖问题。面试官经常通过这个场景考察候选人对高并发、分布式锁、缓存一致性的理解深度。

#### 场景描述

假设G1234列车北京南到上海虹桥二等座还剩最后5张票，此时有100个用户同时发起购票请求，每个用户购买1张票。如何保证最终只有5个用户成功购票，且不会出现超卖？

#### 技术方案演进

**方案一：数据库乐观锁**

```sql
UPDATE t_train_seat 
SET remain_count = remain_count - 1,
    lock_version = lock_version + 1
WHERE train_id = 'G1234' 
  AND seat_type = 'SECOND_CLASS'
  AND departure = '北京南'
  AND arrival = '上海虹桥'
  AND remain_count > 0
```

优点是实现简单，缺点是在高并发场景下大量请求会失败重试，给数据库造成压力。

**方案二：Redis预扣减**

```java
public Boolean preDeductStock(String trainId, String seatType, Integer quantity) {
    String key = "ticket:stock:" + trainId + ":" + seatType;
    Long result = redisTemplate.opsForValue().decrement(key, quantity);
    return result != null && result >= 0;
}
```

问题是多个请求同时通过条件判断这个环节无法保证。

**方案三：令牌桶+Lua脚本**

真正的解决方案是令牌桶算法结合Redis Lua脚本。

```java
@Service
@RequiredArgsConstructor
public class TicketAvailabilityTokenBucket {
    
    private final RedissonClient redissonClient;
    
    public TokenResultDTO takeTokenFromBucket(PurchaseTicketReqDTO requestParam) {
        String bucketKey = buildBucketKey(requestParam.getTrainId(), requestParam.getSeatType());
        Long currentTime = System.currentTimeMillis();
        
        Long result = redissonClient.getScript().eval(
            RedisScriptingEngine.ScriptType.LUA,
            getLuaScript(),
            RedisScriptingCommands.convertToByteStreams(List.of(bucketKey)),
            currentTime, 100L, 50L, 1L
        );
        
        return TokenResultDTO.builder()
            .available(result >= 0)
            .remainTokens(result >= 0 ? result : 0)
            .build();
    }
    
    private String getLuaScript() {
        return "local bucket_key = KEYS[1] " +
               "local current_time = tonumber(ARGV[1]) " +
               "local max_tokens = tonumber(ARGV[2]) " +
               "local refill_rate = tonumber(ARGV[3]) " +
               "local requested = tonumber(ARGV[4]) " +
               "local bucket = redis.call('HMGET', bucket_key, 'tokens', 'last_refill_time') " +
               "local tokens = tonumber(bucket[1]) " +
               "local last_time = tonumber(bucket[2]) " +
               "if tokens == nil then tokens = max_tokens; last_time = current_time; end " +
               "local elapsed = current_time - last_time " +
               "local refill_tokens = math.floor(elapsed * refill_rate / 1000) " +
               "tokens = math.min(max_tokens, tokens + refill_tokens) " +
               "if tokens >= requested then " +
               "    tokens = tokens - requested " +
               "    redis.call('HMSET', bucket_key, 'tokens', tokens, 'last_refill_time', current_time) " +
               "    redis.call('EXPIRE', bucket_key, 86400) " +
               "    return tokens " +
               "else " +
               "    redis.call('HMSET', bucket_key, 'tokens', tokens, 'last_refill_time', current_time) " +
               "    redis.call('EXPIRE', bucket_key, 86400) " +
               "    return -1 " +
               "end";
    }
}
```

为什么选择Lua脚本？因为Redis执行Lua脚本时是单线程执行的，可以保证检查和扣减的原子性。

#### 追问：令牌桶的容量和补充速率如何设计

令牌桶的参数设计需要考虑实际业务场景。假设，春运高峰期每秒有10000个请求进入购票系统，但座位库存只有1000张，那么令牌桶的容量设置1000比较合适，每秒补充速率设置每秒补充200个。

```java
@Configuration
public class TokenBucketConfig {
    @Bean
    public Map<String, TokenBucketConfigDTO> tokenBucketConfigs() {
        Map<String, TokenBucketConfigDTO> configs = new HashMap<>();
        configs.put("SECOND_CLASS", TokenBucketConfigDTO.builder()
            .maxTokens(1000).refillRate(200).requestedPerUser(1).build());
        configs.put("FIRST_CLASS", TokenBucketConfigDTO.builder()
            .maxTokens(500).refillRate(100).requestedPerUser(1).build());
        configs.put("BUSINESS_CLASS", TokenBucketConfigDTO.builder()
            .maxTokens(100).refillRate(20).requestedPerUser(1).build());
        return configs;
    }
}
```

#### 追问：令牌桶和限流算法有什么区别

令牌桶和漏桶是两种经典的限流算法。漏桶算法以固定速率出水，请求像水滴一样进入桶中，输出速率恒定。令牌桶则是以固定速率向桶中添加令牌，请求必须获取令牌才能处理，允许一定程度的突发流量。

#### 性能数据

令牌桶+Lua脚本方案的性能表现非常好。在8核16G的服务器上，单节点Redis每秒可以处理10万次以上的令牌获取操作。

---

### 17.2 分布式锁双重校验场景

#### 问题背景

分布式系统中，单机锁只能控制单个JVM内的并发，跨JVM的并发控制必须依赖分布式锁。12306项目通过本地锁+分布式锁的双重校验机制，在保证正确性的同时最大化性能。

#### 核心代码实现

```java
@Service
@RequiredArgsConstructor
public class TicketServiceV2Impl implements TicketService {
    
    private final RedissonClient redissonClient;
    private final Cache<String, ReentrantLock> localLockMap = Caffeine.newBuilder()
        .expireAfterWrite(1, TimeUnit.DAYS).maximumSize(10000).build();
    
    private static final String LOCK_PURCHASE_TICKETS_V2 = "lock:purchase:v2:tickets:%s:%d";
    
    @Override
    public TicketPurchaseRespDTO purchaseTicketsV2(PurchaseTicketReqDTO requestParam) {
        TokenResultDTO tokenResult = tokenBucket.takeTokenFromBucket(requestParam);
        if (!tokenResult.isAvailable()) {
            return buildSystemBusyResponse();
        }
        
        Map<Integer, List<PurchaseTicketPassengerDetailDTO>> seatTypeMap = 
            requestParam.getPassengerDetails().stream()
                .collect(Collectors.groupingBy(PurchaseTicketPassengerDetailDTO::getSeatType));
        
        List<TicketPurchaseDetailDTO> successDetails = new ArrayList<>();
        
        seatTypeMap.forEach((seatType, passengerDetails) -> {
            String lockKey = String.format(LOCK_PURCHASE_TICKETS_V2, requestParam.getTrainId(), seatType);
            ReentrantLock localLock = localLockMap.get(lockKey, k -> new ReentrantLock());
            
            if (localLock.tryLock()) {
                try {
                    doPurchaseInLocalLock(requestParam, passengerDetails, successDetails);
                } finally {
                    localLock.unlock();
                }
            } else {
                acquireDistributedLockAndPurchase(lockKey, requestParam, passengerDetails, successDetails);
            }
        });
        
        return buildPurchaseResponse(successDetails);
    }
    
    private void acquireDistributedLockAndPurchase(String lockKey, PurchaseTicketReqDTO requestParam,
            List<PurchaseTicketPassengerDetailDTO> passengerDetails, List<TicketPurchaseDetailDTO> successDetails) {
        RLock distributedLock = redissonClient.getFairLock(lockKey);
        try {
            boolean locked = distributedLock.tryLock(3, 30, TimeUnit.SECONDS);
            if (locked) {
                try {
                    doPurchaseInDistributedLock(requestParam, passengerDetails, successDetails);
                } finally {
                    if (distributedLock.isHeldByCurrentThread()) {
                        distributedLock.unlock();
                    }
                }
            }
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
}
```

#### 为什么需要双重校验

本地锁的作用是过滤掉同一JVM内的重复竞争，分布式锁的作用是协调不同JVM之间的竞争。假设有100个并发请求，没有本地锁时所有请求都竞争分布式锁。加上本地锁后，同一JVM内的请求会先竞争本地锁，只有不同JVM之间的请求才需要竞争分布式锁。

#### 公平锁的选择

代码中使用FairLock而不是普通的RLock。公平锁保证等待时间最长的请求先获得锁，符合购票场景的公平性要求，避免出现饥饿现象。

#### 追问：本地锁缓存为什么要设置过期时间

本地锁缓存使用Caffeine设置了1天过期时间和最大10000条容量限制。如果某个车次售罄后不再有购票请求，对应的本地锁对象就不需要保留。设置过期时间后自动清理，防止内存泄漏。

---

### 17.3 订单超时30分钟关闭场景

#### 问题背景

用户下单后如果不去支付，座位会一直锁定，造成资源浪费。12306采用RocketMQ延迟消息实现订单超时自动关闭。

#### 延迟消息实现原理

```java
@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {
    
    private final RocketMQTemplate rocketMQTemplate;
    private static final String DELAY_CLOSE_TOPIC = "order-delay-close";
    
    @Transactional
    public OrderCreateRespDTO createOrder(OrderCreateReqDTO request) {
        String orderSn = generateOrderSn(request.getUserId());
        
        Order order = Order.builder()
            .orderSn(orderSn)
            .userId(request.getUserId())
            .trainId(request.getTrainId())
            .status(OrderStatus.PENDING)
            .createTime(LocalDateTime.now())
            .build();
        
        orderMapper.insert(order);
        
        // 发送延迟关闭消息（延迟级别14对应30分钟）
        DelayCloseOrderEvent event = DelayCloseOrderEvent.builder()
            .orderSn(orderSn)
            .trainId(request.getTrainId())
            .build();
        
        rocketMQTemplate.asyncSend(DELAY_CLOSE_TOPIC, event, 30000, 14);
        
        return OrderCreateRespDTO.builder()
            .orderSn(orderSn)
            .expireTime(LocalDateTime.now().plusMinutes(30))
            .build();
    }
}
```

#### 延迟消息消费处理

```java
@Component
@RequiredArgsConstructor
public class DelayCloseOrderConsumer implements RocketMQListener<MessageWrapper<DelayCloseOrderEvent>> {
    
    @Override
    @Idempotent(key = "#message.getMessageId()", keyTimeout = 3600, scene = IdempotentScene.MQ)
    public void onMessage(MessageWrapper<DelayCloseOrderEvent>> message) {
        DelayCloseOrderEvent event = message.getMessage();
        String orderSn = event.getOrderSn();
        
        Result<OrderDetailRespDTO> orderResult = orderRemoteService.getOrderDetail(orderSn);
        if (!orderResult.isSuccess()) return;
        
        OrderDetailRespDTO order = orderResult.getData();
        
        // 只有PENDING状态才需要关闭
        if (!OrderStatus.PENDING.getCode().equals(order.getStatus())) {
            return;
        }
        
        // 关闭订单并释放座位
        orderRemoteService.closeOrder(orderSn);
        seatRemoteService.releaseSeats(event.getSeatIds());
    }
}
```

#### 为什么要用消息队列而不是定时任务

第一，实时性。定时任务最小粒度通常是分钟级，而消息队列可以精确到秒级。第二，减少数据库压力。定时任务需要定期扫描全量订单表，消息队列方案只有订单创建时产生一条消息。第三，易于扩展。调整超时时间只需修改延迟级别参数。

---

### 17.4 座位三级分配算法场景

#### 问题背景

高峰期座位紧张时无法满足用户的理想座位选择，需要有多级降级策略。

#### 座位分配策略

```java
@Service
@RequiredArgsConstructor
public class TrainSecondClassSeatAllocationService {
    
    public SeatAllocationResult allocateSeats(String trainId, String departure, String arrival, List<Passenger> passengers) {
        List<Seat> availableSeats = trainSeatMapper.selectAvailableSeats(trainId, departure, arrival);
        
        if (availableSeats.isEmpty()) {
            return SeatAllocationResult.fail("当前无可用座位");
        }
        
        // 第一优先级：邻座分配
        if (passengers.size() > 1) {
            int[][] adjacentSeats = SeatSelection.adjacent(passengers.size(), availableSeats);
            if (adjacentSeats != null) {
                return buildSuccessResult(adjacentSeats, passengers, "邻座");
            }
        }
        
        // 第二优先级：同车厢不邻座
        Map<String, List<Seat>> carriageSeats = availableSeats.stream()
            .collect(Collectors.groupingBy(Seat::getCarriageNumber));
        
        for (List<Seat> seats : carriageSeats.values()) {
            int[][] nonAdjacent = SeatSelection.nonAdjacent(passengers.size(), seats);
            if (nonAdjacent != null) {
                return buildSuccessResult(nonAdjacent, passengers, "同车厢");
            }
        }
        
        // 第三优先级：不同车厢不邻座
        int[][] distributedSeats = SeatSelection.distribute(passengers.size(), availableSeats);
        if (distributedSeats != null) {
            return buildSuccessResult(distributedSeats, passengers, "不同车厢");
        }
        
        return SeatAllocationResult.fail("座位不足");
    }
}

public class SeatSelection {
    public static int[][] adjacent(int count, List<Seat> seats) {
        if (seats.size() < count) return null;
        
        List<Seat> sorted = seats.stream()
            .sorted(Comparator.comparing(Seat::getCarriageNumber).thenComparing(Seat::getSeatNumber))
            .collect(Collectors.toList());
        
        for (int i = 0; i <= sorted.size() - count; i++) {
            int[][] result = new int[count][];
            boolean allAdjacent = true;
            
            for (int j = 0; j < count; j++) {
                Seat current = sorted.get(i + j);
                result[j] = new int[]{current.getCarriageNumber(), current.getSeatNumber()};
                
                if (j > 0 && !isAdjacent(current, sorted.get(i + j - 1))) {
                    allAdjacent = false;
                    break;
                }
            }
            
            if (allAdjacent) return result;
        }
        return null;
    }
    
    private static boolean isAdjacent(Seat s1, Seat s2) {
        if (!s1.getCarriageNumber().equals(s2.getCarriageNumber())) return false;
        return Math.abs(extractSeatNumber(s1.getSeatNumber()) - extractSeatNumber(s2.getSeatNumber())) == 1;
    }
    
    // 二等座：3+2布局，A/F靠窗，C/D靠走廊
    private static int extractSeatNumber(String seatCode) {
        return switch (seatCode) { case "A", "F" -> 1; case "C", "D" -> 2; default -> 3; };
    }
}
```

#### 算法复杂度分析

邻座算法使用滑窗思想，时间复杂度是O(N)，空间复杂度是O(1)。相比暴力双重循环的O(N^2)复杂度，滑窗算法在大规模座位数据下性能优势明显。

---

### 17.5 分库分表基因法路由场景

#### 问题背景

12306项目订单量巨大，采用ShardingSphere实现分库分表，将订单数据分散到多个数据库和表中存储。通过基因法将用户ID融入订单号，保证同一用户的订单落在同一分片。

#### 分片策略设计

```yaml
spring:
  shardingsphere:
    rules:
      sharding:
        tables:
          t_order:
            actualDataNodes: ds_${0..1}.t_order_${0..31}
            tableStrategy:
              standard:
                shardingColumn: order_sn
                shardingAlgorithmName: order_table_alg
        shardingAlgorithms:
          order_table_alg:
            type: INLINE
            props:
              algorithm-expression: t_order_${(Long.parseLong(order_sn.substring(order_sn.length() - 6)) % 32)}
```

#### 基因法订单号生成

```java
@Service
@RequiredArgsConstructor
public class OrderSnGenerator {
    private static final int TABLE_COUNT = 32;
    private static final int USER_ID_BITS = 6;
    
    public String generateOrderSn(Long userId) {
        long snowflakeId = generateSnowflakeId();
        long userIdGene = userId % (long) Math.pow(10, USER_ID_BITS);
        return String.format("%013d%06d", snowflakeId % 1000000000000L, userIdGene);
    }
    
    public int calculateTableIndex(String orderSn) {
        long userIdGene = Long.parseLong(orderSn.substring(orderSn.length() - 6));
        return (int) (userIdGene % TABLE_COUNT);
    }
}
```

#### 分片键选择原则

为什么选择订单号而不是用户ID作为分片键？第一，按订单号查询是最常见的操作。第二，如果按用户ID分片，热用户订单会集中在某个分片，造成数据倾斜。第三，基因法将用户ID融入订单号，同一用户的订单自然落在同一分片。

---

### 17.6 缓存与数据库一致性场景

#### 问题背景

票务数据同时存储在Redis缓存和MySQL数据库中，数据库变更后需要及时同步到缓存。项目采用Canal监听BinLog，MQ异步更新缓存。

#### Canal数据同步实现

```java
@Component
@RequiredArgsConstructor
@Slf4j
public class TicketAvailabilityCacheUpdateHandler {
    private final RedisTemplate<String, Object> redisTemplate;
    private static final String TICKET_STOCK_KEY_PREFIX = "ticket:stock:";
    
    public void handleMessage(CanalMessage message) {
        String tableName = message.getTableName();
        if (!"t_train_seat".equals(tableName)) return;
        
        switch (message.getEventType()) {
            case "INSERT" -> handleInsert(message);
            case "UPDATE" -> handleUpdate(message);
            case "DELETE" -> handleDelete(message);
        }
    }
    
    private void handleUpdate(CanalMessage message) {
        for (Map<String, String> row : message.getRows()) {
            String key = buildCacheKey(row);
            Integer stock = Integer.parseInt(row.get("remain_count"));
            redisTemplate.opsForHash().put(key, "stock", stock);
            redisTemplate.opsForHash().put(key, "update_time", System.currentTimeMillis());
        }
    }
    
    private String buildCacheKey(Map<String, String> row) {
        return TICKET_STOCK_KEY_PREFIX + row.get("train_id") + ":" + row.get("seat_type") + 
               ":" + row.get("departure") + ":" + row.get("arrival");
    }
}
```

#### 追问：为什么不用双写而是BinLog同步

常见缓存更新策略有三种：双写、延迟双删、BinLog同步。双写写数据库时同时写缓存，容易出现数据不一致。延迟双删延迟时间难以确定。BinLog同步的优势在于不占用主业务线程性能，通过MQ异步处理失败可重试，保证按顺序消费。

---

### 17.7 幂等性设计场景

#### 问题背景

网络异常或用户重复点击可能导致接口被调用多次，产生重复订单、重复扣款等问题。通过自定义注解+AOP+Redis实现通用幂等框架。

#### 幂等注解定义

```java
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface Idempotent {
    String key();                                    // 幂等键SPEL表达式
    int keyTimeout() default 3600;                  // 有效期秒
    IdempotentScene scene() default IdempotentScene.DEFAULT;
    String message() default "请求重复，请稍后重试";
}

public enum IdempotentScene {
    DEFAULT, MQ, SCHEDULED, CALLBACK
}
```

#### 幂等AOP切面

```java
@Aspect
@Component
@RequiredArgsConstructor
@Slf4j
public class IdempotentAspect {
    private final RedissonClient redissonClient;
    
    @Around("@annotation(Idempotent)")
    public Object around(ProceedingJoinPoint joinPoint) throws Throwable {
        MethodSignature signature = (MethodSignature) joinPoint.getSignature();
        Idempotent idempotent = ((Method) signature.getMethod()).getAnnotation(Idempotent.class);
        
        String redisKey = "idempotent:" + idempotent.scene().name().toLowerCase() + ":" + resolveKey(idempotent.key(), joinPoint.getArgs());
        
        RLock lock = redissonClient.getLock(redisKey);
        try {
            boolean acquired = lock.tryLock(0, idempotent.keyTimeout(), TimeUnit.SECONDS);
            if (!acquired) {
                log.warn("请求重复，key={}", redisKey);
                throw new IdempotentException(idempotent.message());
            }
            return joinPoint.proceed();
        } finally {
            // 不释放锁，让其自然过期
        }
    }
}
```

#### 幂等性保证的原理

当第一次请求进入时，锁获取成功执行业务逻辑。在业务执行完成前，其他相同key的请求都无法获取锁，直接返回重复提交错误。执行业务成功后锁自动过期，保证接口幂等性。

#### 追问：幂等和防重有什么区别

防重是防止按钮重复点击，幂等是保证接口重复调用结果一致。前端防重可以通过F12绕过，后端幂等是真正的安全保障。12306项目前后端双重防护。

---

### 17.8 分布式ID生成雪花算法场景

#### 问题背景

分库分表后，每个表的ID需要全局唯一。雪花算法生成分布式ID，保证在分布式环境下ID不重复。

#### 雪花算法原理

```java
public class SnowflakeIdGenerator {
    private final long EPOCH = 1577836800000L;  // 2020-01-01
    private final long DATACENTER_BITS = 5;
    private final long MACHINE_BITS = 5;
    private final long SEQUENCE_BITS = 12;
    
    private final long datacenterId;
    private final long machineId;
    private long sequence = 0L;
    private long lastTimestamp = -1L;
    
    public synchronized long nextId() {
        long currentTimestamp = getCurrentTimestamp();
        
        if (currentTimestamp < lastTimestamp) {
            log.warn("检测到时钟回拨");
            currentTimestamp = waitNextMillis(currentTimestamp);
        }
        
        if (currentTimestamp == lastTimestamp) {
            sequence = (sequence + 1) & (~(-1L << SEQUENCE_BITS));
            if (sequence == 0) currentTimestamp = waitNextMillis(currentTimestamp);
        } else {
            sequence = 0L;
        }
        
        lastTimestamp = currentTimestamp;
        
        return ((currentTimestamp - EPOCH) << (DATACENTER_BITS + MACHINE_BITS + SEQUENCE_BITS))
            | (datacenterId << (MACHINE_BITS + SEQUENCE_BITS))
            | (machineId << SEQUENCE_BITS)
            | sequence;
    }
    
    private long waitNextMillis(long currentTimestamp) {
        while (currentTimestamp <= lastTimestamp) {
            currentTimestamp = getCurrentTimestamp();
        }
        return currentTimestamp;
    }
}
```

#### 时钟回拨问题处理

时钟回拨是指服务器时间被调后，导致生成ID的时间戳比之前小。12306项目采用等待恢复策略，检测到时钟回拨时等待时钟追上后继续生成ID。

---

## 十八、面试话术进阶指南

### 18.1 项目介绍进阶版

> **初级版本**："我做过一个12306购票系统，使用了Redis缓存、RocketMQ消息队列、分库分表等技术。"

> **进阶版本**："我参与的是一个高并发铁路购票系统，主要解决了三个技术难点。第一是高并发抢票超卖问题，我通过令牌桶算法在缓存层做预扣减，结合Redis Lua脚本保证原子性，将扣减性能从每秒几千次提升到十万次以上。第二是分布式锁优化，从最初的单一分布式锁优化到本地锁+分布式锁双重校验，过滤掉同一JVM内的无效锁竞争，接口响应时间从平均200毫秒降低到50毫秒以内。第三是订单超时处理，使用RocketMQ延迟消息实现30分钟自动关单，配合幂等注解保证消息消费的准确性。"

### 18.2 技术选型话术

> "选择技术方案时我主要考虑三点。第一是业务匹配度，比如令牌桶适合有明确容量限制的场景，漏桶适合需要平滑流量的场景。第二是性能天花板，要预估未来3年的业务增长，比如订单量可能从百万增长到千万，所以分库分表从设计之初就规划好了。第三是可运维性，选择主流开源组件，团队有能力处理线上问题。"

### 18.3 解决问题话术

> "遇到问题时我会分三步走。第一步是定位问题，通过日志、监控、链路追踪确定是哪个环节的问题。第二步是分析根因，比如通过压测发现TPS上不去是因为数据库连接池耗尽，还是GC停顿时间过长。第三步是制定方案，优先选择对业务影响最小的方案，比如加缓存比加机器见效更快。"

---

*文档版本：2026-04-15 增强版*
*更新内容：增加17.1-17.8高并发场景深入分析（令牌桶+Lua脚本、双重锁校验、延迟关单、三级座位分配、分库分表、缓存一致性、幂等设计、雪花算法），以及面试话术进阶指南*

