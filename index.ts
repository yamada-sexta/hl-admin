#!/usr/bin/env bun
import { $ } from "bun";

await $`echo "Initializing Bun script..."`;

async function loop(){
    await $`git pull`
}

async function main() {
    await loop();
    setInterval(loop, 5000);
}

main();