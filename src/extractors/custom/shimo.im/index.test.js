import assert from 'assert';
import URL from 'url';
import cheerio from 'cheerio';

import Mercury from 'mercury';
import getExtractor from 'extractors/get-extractor';
import { excerptContent } from 'utils/text';

const fs = require('fs');

describe('ShimoImExtractor', () => {
    describe('initial test case', () => {
        let result;
        let url;
        beforeAll(() => {
            url =
                'https://shimo.im/docs/pyThtCjdVdcpVtdK/read';
            const html =
                fs.readFileSync('./fixtures/shimo.im/1614827890579.html');
            result =
                Mercury.parse(url, { html, fallback: false });
        });

        it('is selected properly', () => {
            // This test should be passing by default.
            // It sanity checks that the correct parser
            // is being selected for URLs from this domain
            const extractor = getExtractor(url);
            assert.equal(extractor.domain, URL.parse(url).hostname)
        })

        it('returns the title', async() => {
            // To pass this test, fill out the title selector
            // in ./src/extractors/custom/shimo.im/index.js.
            const { title } = await result

            // Update these values with the expected values from
            // the article.
            assert.equal(title, `什么是产品架构？`)
        });

        it('returns the author', async() => {
            // To pass this test, fill out the author selector
            // in ./src/extractors/custom/shimo.im/index.js.
            const { author } = await result

            // Update these values with the expected values from
            // the article.
            assert.equal(author, null)
        });

        it('returns the date_published', async() => {
            // To pass this test, fill out the date_published selector
            // in ./src/extractors/custom/shimo.im/index.js.
            const { date_published } = await result

            // Update these values with the expected values from
            // the article.
            assert.equal(date_published, null)
        });

        it('returns the dek', async() => {
            // To pass this test, fill out the dek selector
            // in ./src/extractors/custom/shimo.im/index.js.
            const { dek } = await result

            // Update these values with the expected values from
            // the article.
            assert.equal(dek, null)
        });

        it('returns the lead_image_url', async() => {
            // To pass this test, fill out the lead_image_url selector
            // in ./src/extractors/custom/shimo.im/index.js.
            const { lead_image_url } = await result

            // Update these values with the expected values from
            // the article.
            assert.equal(lead_image_url, null)
        });

        it('returns the content', async() => {
            // To pass this test, fill out the content selector
            // in ./src/extractors/custom/shimo.im/index.js.
            // You may also want to make use of the clean and transform
            // options.
            const { content } = await result;

            const $ = cheerio.load(content || '');

            const first13 = excerptContent($('*').first().text(), 0)

            // Update these values with the expected values from
            // the article.
            assert.equal(first13, '');
        });
    });
});