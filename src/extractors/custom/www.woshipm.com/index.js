export const WwwWoshipmComExtractor = {
    domain: 'www.woshipm.com',

    title: {
        selectors: [
            // enter title selectors
            '.article--title'
        ],
    },

    author: {
        selectors: [
            // enter author selectors
            'div.author.u-flex > a'
        ],
    },

    date_published: {
        selectors: [
            // enter selectors
            'div.meta--sup > time'
        ],
    },

    dek: null,

    lead_image_url: {
        selectors: [
            // enter selectors
            ['div p:nth-child(2) img[data-action="zoom"]', 'src']
        ],
    },

    content: {
        selectors: [
            // enter content selectors
            'div.article--content'
        ],

        // Is there anything in the content you selected that needs transformed
        // before it's consumable content? E.g., unusual lazy loaded images
        transforms: {},

        // Is there anything that is in the result that shouldn't be?
        // The clean selectors will remove anything that matches from
        // the result
        clean: [

        ]
    },
}