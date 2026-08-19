# 猫生模拟器

> 投胎成一只猫，度过一生，若得仙缘还可修仙飞升。
> 基于 [remake](https://github.com/VickScarlet/remake) 改编。

[English](./README.md) | 简体中文

## 开发环境

- 包管理: `pnpm`
- 运行时: `bun`

## 使用

### 开发

```bash
pnpm build:data   # 数据检查（事件/天赋/成就配置的类型与条件键检查）
pnpm dev          # 启动 web 开发服务器
```

### 构建与测试

```bash
pnpm build:web    # 生产构建
pnpm test:core    # 核心引擎单测
```

## 当前游戏机制

### 凡猫阶段
- 开局 roll 性别、是否被收养、生活环境（城市家猫 / 农村家猫 / 流浪猫）。
- 出生点影响事件：野猫会过滤“主人/家养”类事件；低出身有专属正面事件；出身与环境共同影响正负面事件概率。
- 情感生育可开关；绝育后仍可有感情事件，但生育事件不再触发（修仙伐骨洗髓可“再造肉体”解除）。
- 寿元显示在状态栏；死亡来自年龄到寿、致命事件；体质/快乐过低会更容易遇到疾病与意外。

### 修仙阶段
- 境界名采用猫修体系：开灵 / 凝脉 / 结丹 / 化形 / 通神 / 渡劫 / 飞升。
- 非瓶颈年份：70% 普通修炼事件，30% 特殊事件；修炼有小概率小悟（属性+1）或走火入魔。
- 修为满后进入瓶颈期，每年随机执行：尝试突破 / 打磨一年 / 寻找机缘。
- 新增渡劫准备度与业力；丹药、法宝、护法、因果事件会增减它们。
- 金丹起渡劫为多阶段：雷劫 → 心魔劫 →（通神起）风火劫 →（飞升）因果劫。
- 九命玄猫 / 九命护体 / 九条命可在渡劫死亡判定时挡下一命。
- 暴露度由事件驱动：暴露高会引来猎捕，也可能带来香火与名望。



## 内容编辑指南

所有人都可以提交内容。想加事件、天赋、成就，不需要改引擎，直接编辑 `packages/data/src/content/` 下的数据文件即可。

### 目录结构

```
packages/data/src/
├── content/
│   ├── events.ts               # 基础事件 + 特殊事件
│   ├── events-mortal*.ts       # 凡猫事件（2001~2999）
│   ├── events-immortal*.ts     # 修仙事件（按境界分池）
│   ├── ages.ts                 # 凡猫年龄→事件池（权重）
│   ├── talents.ts              # 天赋
│   ├── achievements.ts         # 成就
│   └── ...
├── event.types.ts              # 事件字段定义
├── talent.types.ts             # 天赋字段定义
├── achievement.types.ts        # 成就字段定义
└── index.ts                    # 数据汇总：新文件要在这里注册
```

### 事件字段说明

每个事件是一个对象，核心字段如下：

| 字段 | 说明 |
|---|---|
| `id` | 事件唯一 ID，不能重复 |
| `event` | 事件正文 |
| `grade` | 稀有度：`0` 白 / `1` 蓝 / `2` 紫 / `3` 橙 |
| `postEvent` | 追加文案（可选） |
| `effect` | 凡猫属性效果，见下表 |
| `immortalEffect` | 修仙效果，见下表 |
| `include` | 触发条件，满足才可能被随机到 |
| `exclude` | 排除条件，满足则不会被随机到 |
| `branch` | 分支路线，`{ condition, event }` 数组 |
| `realm` | 修仙事件所属境界：`1` 开灵 ~ `6` 渡劫；凡猫事件省略 |
| `format` | 是否格式化 `{猫名}` 等占位符 |
| `washMarrow` | 伐骨洗髓交互事件（通常只给 9000） |
| `breakthrough` / `tribulation` / `ascension` | 突破 / 渡劫 / 飞升特殊标记 |

`effect` 支持：

`CHR` 颜值、`INT` 灵性、`STR` 体魄、`MNY` 出身、`SPR` 快乐、`LIF` 寿元、`AGE` 年龄、`SEED` 仙缘线索、`DAO` 道韵、`DEMON` 心魔、`STER` 标记绝育。

`immortalEffect` 支持：

`CULT` 修为、`SE` 灵气、`DAO` 道韵、`DEMON` 心魔、`EXPO` 暴露度、`APT` 根骨、`COMP` 悟性、`PHY` 体魄、`FOR` 机缘、`SPC` 灵韵。

### 事件 ID 规划

| ID 范围 | 用途 |
|---|---|
| `2001~2999` | 凡猫事件 |
| `3001~8999` | 修仙事件（`realm: 1~6`） |
| `9000` | 伐骨洗髓 |
| `9100 + realm` | 突破成功 |
| `9200 + realm` | 突破失败 |
| `9300~9500 + realm` | 渡劫成功 / 重伤 / 陨落 |
| `9600` | 飞升 |
| `9801+` | 新增修仙事件备用段 |

天赋 ID：`1001~1199` 凡猫天赋，`1201~1250` 灵根类，`1301~1599` 修仙天赋。

### 新增一个凡猫事件

1. 找一个未使用的 `2001~2999` 区间的 ID。
2. 在 `events-mortal*.ts` 中添加事件，例如：

```ts
{ id: 2601, event: '你发现了一只会发光的蝴蝶，追着它跑了一下午。', grade: 1, effect: { INT: 1, SPR: 1 } }
```

3. 打开 `ages.ts`，把它登记到对应年龄池，例如 3 岁：

```ts
{ age: 3, event: [[2012, 1], [2601, 1], /* ... */] }
```

4. 如果是新文件，在 `index.ts` 中 import 并加入 `allEvents`。

### 新增一个修仙事件

1. 找未使用的 ID（`3001~8999` 或 `9801+`）。
2. 在 `events-immortal*.ts` 中添加，并指定 `realm`：

```ts
{ id: 9811, event: '你的妖丹引来一只结丹期的猫妖前辈，他教你一套「猫族结丹法」。', grade: 2, realm: 3, immortalEffect: { CULT: 32, DAO: 2 } }
```

3. 不需要登记年龄池——只要指定了 `realm`，会自动进入对应境界的事件池。
4. 新文件同样要注册进 `index.ts`。

### 条件系统

`include` / `exclude` / `branch.condition` / 成就 `condition` 使用同一套简单表达式：

- 比较：`AGE>=3`、`CHR<5`
- 相等/不等：`REALM=3`、`STER!=1`
- 集合：`EVT=2027`（触发过某事件）、`TLT=1010`（拥有某天赋）
- 包含：`EVT?[2027,2028]`
- 逻辑：`&` 与、`|` 或，例如 `HOME=1&ROM=1&STER!=1`

常用条件键：

`AGE` `CHR` `INT` `STR` `MNY` `SPR` `LIF` `PHASE` `REALM` `CULT` `SE` `TRIB` `APT` `COMP` `PHY` `FOR` `SPC` `HOME` `SEED` `DAO` `DEMON` `EXPO` `SEX` `ROM` `STER` `HAB` `PREP` `KARMA` `TLT` `EVT` `TMS` `AEVT` `ATLT` `AACH`。

### 新增天赋 / 成就

- 天赋：编辑 `talents.ts` 或 `talents-extra.ts`，注意 `category` 为 `mortal` / `spiritRoot` / `immortal`。
- 成就：编辑 `achievements*.ts`，`opportunity` 为 `START` / `TRAJECTORY` / `SUMMARY` / `END`。
- 隐藏成就设置 `hide: true`。

## 提交说明

欢迎通过 Pull Request 提交内容或修复。

1. Fork 本仓库，创建分支：`content/新事件` 或 `fix/xxx`。
2. 修改内容后先本地验证：

```bash
pnpm build:data
pnpm test:core
pnpm build:web
```

3. 提交信息建议：

```
content: 新增凡猫事件 20 条
fix: 修复 xxx 事件条件判断
feat: 新增 xxx 机制
```

4. 一个 PR 尽量只做一件事：内容补充、机制修改、UI 调整分开提交。
5. 事件 ID、天赋 ID、成就 ID 不要与已有内容重复。
6. 文案要求：原创、猫 + 修仙题材，沙雕整活为主，关键节点可温馨；普通事件 30~80 字，渡劫/突破/飞升可写长文案。
7. 提交后 GitHub Actions 会自动构建检查；合并到 `main` 后自动部署。

## 自动部署

推送到 `main` 分支后，GitHub Actions 会：

1. 安装依赖
2. `pnpm build:data`
3. `pnpm build:web`
4. 部署到 GitHub Pages

部署地址：<https://tntsama11.github.io/cat-life/>
