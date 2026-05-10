/* @vitest-environment jsdom */

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { UserBadge } from "./UserBadge";

describe("UserBadge", () => {
  it("links users to canonical publisher profiles", () => {
    render(
      <UserBadge
        user={{
          handle: "steipete",
          displayName: "Peter",
        }}
      />,
    );

    expect(screen.getByRole("link", { name: "@steipete" }).getAttribute("href")).toBe(
      "/p/steipete",
    );
  });

  it("links org publishers to canonical publisher profiles", () => {
    render(
      <UserBadge
        user={{
          handle: "openclaw",
          displayName: "OpenClaw",
          kind: "org",
        }}
      />,
    );

    expect(screen.getByRole("link", { name: "@openclaw" }).getAttribute("href")).toBe(
      "/p/openclaw",
    );
  });
});
