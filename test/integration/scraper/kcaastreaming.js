import assert      from "assert";
import { extract } from "../../../src/core/scrapers.js";

describe("Scraper: KCAA Radio", function () {
    it("should return audio URL", async function () {
        const url = new URL("http://live.kcaastreaming.com/");
        const options = { depth: false, incognito: false };

        const file = await extract(url, options);
        assert.strictEqual(file, "http://stream.kcaastreaming.com/kcaa.mp3");
    });
});
