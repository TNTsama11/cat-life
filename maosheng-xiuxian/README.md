# Cat Life Simulator (Maosheng Simulator)

> Live a life as a cat. If you are lucky enough, you may step onto the path of cultivation and ascend.

English | [简体中文](./README-zh_CN.md)

## Environment

Package Manager: `pnpm`
Runtime: `bun`

## Usage

### Dev

```bash
pnpm build:data
pnpm dev
```

### Build & Test

```bash
pnpm build:web
pnpm test:core
```

## Editing Content

Everyone is welcome to contribute events, talents and achievements. You only need to edit the files under `packages/data/src/content/`.

- **Events**: add an object to `events-mortal*.ts` (mortal cat events, IDs `2001~2999`) or `events-immortal*.ts` (cultivation events with `realm: 1~6`, IDs `3001~8999` / `9801+`).
- **Mortal event pools**: register mortal events in `ages.ts` with a weight.
- **Cultivation events**: events with a `realm` are pooled automatically.
- **New files**: import them and add to `allEvents` in `packages/data/src/index.ts`.

See `event.types.ts`, `talent.types.ts`, and `achievement.types.ts` for all fields. Condition expressions support `>=`, `!=`, `=`, `?`, `&`, `|` over keys such as `AGE`, `CHR`, `HOME`, `REALM`, `PHASE`, `ROM`, `STER`, `EXPO`, `SEX`, etc.

## Contribution Guide

1. Fork and create a branch (`content/xxx` or `fix/xxx`).
2. Validate locally:

```bash
pnpm build:data
pnpm test:core
pnpm build:web
```

3. Use conventional commit messages:

```
content: add 20 mortal events
fix: fix xxx event condition
feat: add xxx mechanic
```

4. Keep IDs unique. Keep one PR focused on one thing.
5. After merging to `main`, GitHub Actions deploys automatically.

## Auto Deploy

Pushes to `main` run the deploy workflow and publish to:

<https://tntsama11.github.io/cat-life/>
