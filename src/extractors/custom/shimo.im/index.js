export const ShimoImExtractor = {
    domain: 'shimo.im',

    title: {
        selectors: ["title", ["ql-title-box", "data-value"]],
    },

    author: null,

    date_published: null,

    dek: null,

    lead_image_url: null,

    content: {
        selectors: [
            ["div.ql-editor"]
        ],
        defaultCleaner: false,

        // Is there anything in the content you selected that needs transformed
        // before it's consumable content? E.g., unusual lazy loaded images
        transforms: {
            'ol': 'ul'
        },

        // Is there anything that is in the result that shouldn't be?
        // The clean selectors will remove anything that matches from
        // the result
        clean: [

        ]
    },
}