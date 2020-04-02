/* eslint-disable no-process-env */
"use strict";

const common = require("./wdio.conf.js");
const { join } = require("path");

exports.config = Object.assign({}, common.config, {
  baseUrl: "http://localhost:6060",
  maxInstances: 3,
  services: ["docker", "firefox-profile", "selenium-standalone", ["image-comparison", {
    baselineFolder: join(process.cwd(), "./tests/integration/tests/Visual_Baseline/"),
    formatImageName: process.env.MOZ_HEADLESS ? "{tag}-headless-{width}x{height}" : "{tag}-{width}x{height}",
    screenshotPath: join(process.cwd(), ".tmp/"),
    savePerInstance: true,
  }]],
  dockerOptions: {
    image: "selenium/standalone-firefox",
    healthCheck: {
      url: "http://localhost:4444",
      maxRetries: 3,
      inspectInterval: 1000,
      startDelay: 2000,
    },
    options: {
      e: ["MOZ_HEADLESS=1",
          "MONITOR_FXA_PASSWORD=${MONITOR_FXA_PASSWORD}",
          "HIBP_KANON_API_TOKEN=${HIBP_KANON_API_TOKEN}",
          "HIBP_API_TOKEN=${HIBP_API_TOKEN}",
        ],
      p: ["4444:4444", "5900:5900"],
      v: "/dev/shm:/dev/shm",
      shmSize: "2g",
      network: "host",
    },
    dockerLogs: "docker-logs/",
  },
});
