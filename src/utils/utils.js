/**
 * Debounce
 */
let timeout;
export const debounce = (func, delay = 500) => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    func();
  }, delay);
};


export const extractMentionUserId = (htmlString) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, 'text/html');
  const spanElements = doc.querySelectorAll('span[data-type="mention"][data-id]');

  const dataIdValues = Array.from(spanElements).map((span) => span.getAttribute('data-id'));

  return dataIdValues;
}

export const replacMentionContent = (htmlString) => {
  // Define a regular expression pattern to match <span> tags with data-type and data-id attributes
  const pattern = /<span[^>]*data-type="mention"[^>]*data-id="(\d+)"[^>]*>(.*?)<\/span>/g;

  // Use a callback function to replace the content while preserving attributes
  const replacedString = htmlString.replace(pattern, (match, dataId) => {
    // Replace the content inside the <span> tag with the data-id attribute value
    return `<span data-type="mention" class="text-purple-600 font-semibold" data-id="${dataId}" data-label="${dataId}">@${dataId}</span>`;
  });

  return replacedString;
}


export const replaceMentionsWithUsernames = (htmlContent, users) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, 'text/html');
  
  // Find all span elements with data-type="mention"
  const mentionElements = doc.querySelectorAll('span[data-type="mention"]');
  
  mentionElements.forEach((mentionElement) => {
    const dataId = mentionElement.getAttribute('data-id');
    const user = users.find((user) => user.id === parseInt(dataId));
    
    if (user) {
      mentionElement.innerHTML = `@${user.username}`;
      mentionElement.setAttribute('data-label', user.username);
    }
  });
  
  // Serialize the updated DOM back to HTML
  const updatedHtml = new XMLSerializer().serializeToString(doc);
  return updatedHtml;
}