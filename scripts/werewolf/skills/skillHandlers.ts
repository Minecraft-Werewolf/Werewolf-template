import { registerRoleSkillHandlerMap } from "../../internal/definitionRegistryBridge";
import type { GameEventHandlerMap } from "@mc-werewolf/game-engine";

export const roleSkillHandlers: Record<string, GameEventHandlerMap> = {};

registerRoleSkillHandlerMap(roleSkillHandlers);
