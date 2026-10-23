/** Preserve native table sizing inside an accessible overflow container. */
export default {
  name: 'table-scroll',
  element: {
    filter: ['table'],
    visit(node, ctx) {
      ctx.wrapNode(node, {
        type: 'element',
        tagName: 'div',
        properties: {
          className: ['ds-table-scroll'],
          role: 'region',
          ariaLabel: '文章表格',
          tabIndex: 0,
        },
        children: [],
      });
    },
  },
};
