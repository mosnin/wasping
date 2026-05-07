import { describe, expect, it } from "vitest";
import { getPiUserAgent } from "../src/utils/swarmz-user-agent.js";

describe("getPiUserAgent", () => {
	it("formats the user agent expected by swarmz.dev", () => {
		const runtime = process.versions.bun ? `bun/${process.versions.bun}` : `node/${process.version}`;
		const userAgent = getPiUserAgent("1.2.3");

		expect(userAgent).toBe(`swarmz/1.2.3 (${process.platform}; ${runtime}; ${process.arch})`);
		expect(userAgent).toMatch(/^swarmz\/[^\s()]+ \([^;()]+;\s*[^;()]+;\s*[^()]+\)$/);
	});
});
