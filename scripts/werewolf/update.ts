import {
    registerSecondUpdateHandler,
    registerTickUpdateHandler,
} from "../internal/definitionRegistryBridge";
import type { GameEventContext } from "@mc-werewolf/game-engine";

export const onTickUpdate = (ev: GameEventContext): void => {
    const { playerData, playersData, ingameConstants } = ev;
};

export const onSecondUpdate = (ev: GameEventContext): void => {
    const { playerData, playersData, ingameConstants } = ev;
};

registerTickUpdateHandler(onTickUpdate);
registerSecondUpdateHandler(onSecondUpdate);
