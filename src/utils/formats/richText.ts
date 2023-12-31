import sanitize from '../sanitize';

export const generateParagraph = (text: string) => {
  const sanitized = sanitize(text);

  return sanitized
    .split('\n')
    .map((text) => `<p>${text}</p>`)
    .join('')
    .replaceAll('<p></p>', '');
};
