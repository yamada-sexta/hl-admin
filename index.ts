#!/usr/bin/env bun
import { $ } from "bun";
import { CronJob } from 'cron';
await $`echo "Initializing Bun script..."`;

const cronStr = Bun.env.CRON_SCHEDULE || '5 * * * * *';

async function task() {
    await $`git pull`;
}

const job = new CronJob(cronStr, task);

job.start();

console.log(`Cron job started: ${cronStr}`);