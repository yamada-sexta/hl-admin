#!/usr/bin/env bun
import { $ } from "bun";
import { watch } from "fs";
import fs from "fs";
import { CronJob } from 'cron';
await $`echo "Initializing Bun script..."`;

// Watch the current directory for changes
watch('.', { recursive: false }, (eventType, filename) => {
    if (filename) {
        console.log(`File changed: ${filename}, Event type: ${eventType}`);
    } else {
        console.log(`Filename not provided, Event type: ${eventType}`);
    }
});

const cronStr = Bun.env.CRON_SCHEDULE || '5 * * * * *';

async function task() {
    await $`git pull`;
}

const job = new CronJob(cronStr, task);

job.start();

console.log(`Cron job started: ${cronStr}`);