import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";
import { parse as parseYaml } from "yaml";

describe("production deploy workflow", () => {
  it("queues active deploys instead of cancelling them", async () => {
    const workflow = parseYaml(await readFile(".github/workflows/deploy.yml", "utf8")) as {
      concurrency?: {
        group?: string;
        "cancel-in-progress"?: boolean;
      };
    };

    expect(workflow.concurrency).toEqual({
      group: "deploy-production",
      "cancel-in-progress": false,
    });
  });
});
