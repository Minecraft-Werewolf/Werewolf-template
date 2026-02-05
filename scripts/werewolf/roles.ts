import {
    registerRoleDefinitions,
    registerRoleGroupDefinitions,
} from "../internal/definitionRegistryBridge";
import type { RoleDefinition, RoleGroupDefinition } from "@mc-werewolf/game-engine";

export const roleGroups: RoleGroupDefinition[] = [];

export const roles: RoleDefinition[] = [];

registerRoleGroupDefinitions(roleGroups);
registerRoleDefinitions(roles);
