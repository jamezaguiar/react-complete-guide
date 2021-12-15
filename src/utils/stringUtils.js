export const hasText = text => {
  if (!text || !text.length) {
    return false;
  }

  return text.trim().length > 0;
};
