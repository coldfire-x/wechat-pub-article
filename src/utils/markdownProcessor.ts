import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

// Custom renderer for list items to fix WeChat formatting
md.renderer.rules.list_item_open = function (tokens, idx) {
  const token = tokens[idx];
  const listType = token.attrGet('data-list-type') || 'ul';
  
  if (listType === 'ul') {
    return '<li style="margin: 0.8em 0; padding-left: 0; line-height: 1.7; color: #333333;">• ';
  } else {
    const itemNumber = token.attrGet('data-item-number') || '1';
    return `<li style="margin: 0.8em 0; padding-left: 0; line-height: 1.7; color: #333333;">${itemNumber}. `;
  }
};

md.renderer.rules.list_item_close = function () {
  return '</li>\n';
};

// Override list opening to track list type and item numbers
md.renderer.rules.bullet_list_open = function () {
  return '<ul style="margin: 1.5em 0; padding: 0; list-style: none;">\n';
};

md.renderer.rules.ordered_list_open = function () {
  return '<ol style="margin: 1.5em 0; padding: 0; list-style: none;">\n';
};

// Custom rule to add list type and item numbers
md.core.ruler.push('list_markers', function (state) {
  let listStack: Array<{type: 'ul' | 'ol', counter: number}> = [];
  
  for (let i = 0; i < state.tokens.length; i++) {
    const token = state.tokens[i];
    
    if (token.type === 'bullet_list_open') {
      listStack.push({type: 'ul', counter: 0});
    } else if (token.type === 'ordered_list_open') {
      listStack.push({type: 'ol', counter: 0});
    } else if (token.type === 'list_item_open') {
      if (listStack.length > 0) {
        const currentList = listStack[listStack.length - 1];
        currentList.counter++;
        token.attrSet('data-list-type', currentList.type);
        if (currentList.type === 'ol') {
          token.attrSet('data-item-number', currentList.counter.toString());
        }
      }
    } else if (token.type === 'bullet_list_close' || token.type === 'ordered_list_close') {
      listStack.pop();
    }
  }
});

export const processMarkdown = (markdown: string): string => {
  return md.render(markdown);
};

export default md;