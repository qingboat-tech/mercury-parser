import assert from 'assert';
import URL from 'url';
import cheerio from 'cheerio';

import Mercury from 'mercury';
import getExtractor from 'extractors/get-extractor';
import { excerptContent } from 'utils/text';

const fs = require('fs');

describe('WwwWoshipmComExtractor', () => {
    describe('initial test case', () => {
        let result;
        let url;
        beforeAll(() => {
            url =
                'http://www.woshipm.com/copy/4391055.html';
            const html =
                fs.readFileSync('./fixtures/www.woshipm.com/1614738827207.html');
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
            // in ./src/extractors/custom/www.woshipm.com/index.js.
            const { title } = await result

            // Update these values with the expected values from
            // the article.
            assert.equal(title, `写好文案？一字就够`)
        });

        it('returns the author', async() => {
            // To pass this test, fill out the author selector
            // in ./src/extractors/custom/www.woshipm.com/index.js.
            const { author } = await result

            // Update these values with the expected values from
            // the article.
            assert.equal(author, '空手')
        });

        it('returns the date_published', async() => {
            // To pass this test, fill out the date_published selector
            // in ./src/extractors/custom/www.woshipm.com/index.js.
            const { date_published } = await result

            // Update these values with the expected values from
            // the article.
            assert.equal(date_published, '2021-03-01T16:00:00.000Z')
        });

        it('returns the dek', async() => {
            // To pass this test, fill out the dek selector
            // in ./src/extractors/custom/www.woshipm.com/index.js.
            const { dek } = await result

            // Update these values with the expected values from
            // the article.
            assert.equal(dek, null)
        });

        it('returns the lead_image_url', async() => {
            // To pass this test, fill out the lead_image_url selector
            // in ./src/extractors/custom/www.woshipm.com/index.js.
            const { lead_image_url } = await result

            // Update these values with the expected values from
            // the article.
            assert.equal(lead_image_url, 'http://image.woshipm.com/wp-files/2021/02/Kzl4YsYibmdLxUrA2ZsU.jpg')
        });

        it('returns the content', async() => {
            // To pass this test, fill out the content selector
            // in ./src/extractors/custom/www.woshipm.com/index.js.
            // You may also want to make use of the clean and transform
            // options.
            const { content } = await result;

            const $ = cheerio.load(content || '');
            const first13 = excerptContent($('*').first().text(), 1)

            // Update these values with the expected values from
            // the article.
            assert.equal(first13, '编辑导语：策略可以往大了想，但文案一定要往小处写。');
        });
    });
});