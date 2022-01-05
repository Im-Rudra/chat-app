export const textShorter = (text = 'Sample Text', limit = 15) => {
  const splitedText = text.split('');
  if (splitedText.length <= limit) return text;
  const result = splitedText.splice(0, limit).join('') + '...';
  return result;
};
