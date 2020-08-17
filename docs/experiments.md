_Last updated: Aug 8, 2020_

# Firefox Monitor Experiment Deployment Process

This is the experiment process plan for Firefox Monitor. It documents how to deploy experiments and take them down.

## ENV Variable

Use the variable `EXPERIMENT_ACTIVE` to enable experiments in your environment.

- If set to `1` - Experiment code is visible and active.
- If NOT set `1` – Experiment code is hidden and not active.

## Tagging System

To deploy with the ENV variable set to `1`, add `-exp` to your version tag.

Example: `v12.14.2-exp`

Any tag without the `-exp` will disable experiments at an ENV level.
