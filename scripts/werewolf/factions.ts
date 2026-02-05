import type { FactionDefinition } from "@mc-werewolf/game-engine";
import { registerFactionDefinitions } from "../internal/definitionRegistryBridge";

export const factions: FactionDefinition[] = [];

registerFactionDefinitions(factions);
