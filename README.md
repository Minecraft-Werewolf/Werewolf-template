# Werewolf Template

Starter template for Minecraft Bedrock Werewolf addons using `@kairo-js/router`.

This template intentionally does not depend on a werewolf module yet. It only prepares a modern kairo-router addon environment.

## Requirements

- Node.js 22+
- pnpm
- Minecraft Bedrock Script API `@minecraft/server` 2.7.0+
- The `kairo` behavior pack installed in the world

## Setup

```bash
pnpm install
```

Edit `src/properties.ts`:

- `id`
- `metadata.authors`
- `header.name`
- `header.description`
- `header.version`
- `dependencies` / `optionalDependencies`

## Development Build

```bash
pnpm run build
```

This runs typecheck, bundles `src/index.ts` and `src/properties.ts` into `BP/scripts`, generates `BP/manifest.json` and `RP/manifest.json`, copies `pack_icon.png`, and deploys the pack into Minecraft's development folders on Windows.

## Router Usage

Use `router.beforeEvents.startup` for registration-time declarations:

```ts
router.beforeEvents.startup.subscribe((ev) => {
    ev.addonApi.register("werewolf/hello", () => undefined);
});
```

Use `router.afterEvents.addonActivate` as the safe point for world logic.

## Release

Pushing a tag that starts with `v` runs `.github/workflows/release.yml`. The release workflow builds with `pnpm run build:ci` and uploads `.mcaddon` / `.zip` artifacts.
