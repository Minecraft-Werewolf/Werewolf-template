import { world } from "@minecraft/server";
import { router } from "@kairo-js/router";
import { properties } from "./properties";

router.beforeEvents.startup.subscribe((ev) => {
    ev.addonApi.register<{ message: string }, void>("template/announce", ({ message }, ctx) => {
        world.sendMessage(`[${ctx.callerAddonId}] ${message}`);
    });
});

router.afterEvents.addonActivate.subscribe(() => {
    world.sendMessage(`${properties.header.name} activated.`);
});

router.beforeEvents.addonDeactivate.subscribe(() => {
    world.sendMessage(`${properties.header.name} deactivated.`);
});

router.init(properties);
