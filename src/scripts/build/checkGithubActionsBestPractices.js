/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { readFile, readdir } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "yaml";

/**
 * This script checks whether all our GitHub Actions Workflows adhere to the best practices described at https://wiki.mozilla.org/GitHub/Repository_Security/GitHub_Workflows_%26_Actions#GitHub_Workflows_and_Actions
 *
 * It is run in `.github/workflows/lint.yaml`.
 */

const __dirname = dirname(fileURLToPath(import.meta.url));

async function run() {
  const workflowPaths = await readdir(
    resolve(__dirname, "../../../.github/workflows"),
  );
  await Promise.all(workflowPaths.map((path) => checkWorkflow(path)));
  console.log(
    "All GitHub Actions Workflows adhere to the best practices at",
    "https://wiki.mozilla.org/GitHub/Repository_Security/GitHub_Workflows_%26_Actions#GitHub_Workflows_and_Actions",
  );
}

/**
 * @param {string} path - File path
 * @returns {Promise<string>} File content
 */
const load = (path) => readFile(resolve(__dirname, "../../../", path), "utf-8");

/**
 * @typedef {{
 *   name: string;
 *   permissions?: Record<string, "read" | "write" | "none">;
 *   jobs: Record<string, {
 *     steps: Array<{
 *       uses?: string;
 *       with?: Record<string, unknown>;
 *       if?: string;
 *     }>;
 *   }>;
 * }} WorkflowConfig
 */

/**
 * @param {string} workflowFilename
 */
async function checkWorkflow(workflowFilename) {
  const workflowContent = await load(
    resolve(".github/workflows/", workflowFilename),
  );
  /** @type {WorkflowConfig} */
  const workflow = parse(workflowContent);
  const workflowPath = `.github/workflows/${workflowFilename}`;
  checkPersistCredentials(workflow, workflowPath);
  checkGithubTokenPermissions(workflow, workflowPath);
  checkDependabotValidation(workflow, workflowPath);
}

/**
 * @param {WorkflowConfig} workflow
 * @param {string} workflowPath
 */
function checkPersistCredentials(workflow, workflowPath) {
  Object.values(workflow.jobs).forEach((job) => {
    job.steps?.forEach((step) => {
      if (
        typeof step.uses === "string" &&
        (step.uses === "actions/checkout" ||
          step.uses.startsWith("actions/checkout@v"))
      ) {
        if (
          typeof step.with?.["persist-credentials"] === "undefined" ||
          step.with["persist-credentials"] !== false
        ) {
          throw new Error(
            `Job [${workflowPath}] uses actions/checkout@v4 with persist-credentials not set to false.`,
          );
        }
      }
    });
  });
}

/**
 * @param {WorkflowConfig} workflow
 * @param {string} workflowPath
 */
function checkGithubTokenPermissions(workflow, workflowPath) {
  if (!workflow.permissions) {
    throw new Error(
      `Job [${workflowPath}] has not set the least required privileges for $GITHUB_TOKEN. See https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions#defining-access-for-the-github_token-scopes.`,
    );
  }
  if (Object.values(workflow.permissions).length !== 0) {
    throw new Error(
      `Job [${workflowPath}] has defined non-empty workflow-level permissions for $GITHUB_TOKEN. To ensure least privileges, set the minimal permissions at the job, rather than workflow, leve. See https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions#jobsjob_idpermissions.`,
    );
  }
}

/**
 * @param {WorkflowConfig} workflow
 * @param {string} workflowPath
 */
function checkDependabotValidation(workflow, workflowPath) {
  Object.values(workflow.jobs).forEach((job) => {
    job.steps?.forEach((step) => {
      if (typeof step.if !== "string") {
        return;
      }
      // Split the if statements on whitespace:
      const conditionParts = step.if.split(/\s/);
      if (
        conditionParts.some(
          (part) =>
            part === "'dependabot[bot]'" || part === '"dependabot[bot]"',
        ) &&
        conditionParts.some((part) => part === "github.actor")
      ) {
        throw new Error(
          `Workflow [${workflowPath}] has a check for Dependabot, but validates the actor, not the user. Use \`github.event.pull_request.user.login\` instead of \`github.actor\`.`,
        );
      }
    });
  });
}

await run();
