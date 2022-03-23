export const getStringFromHtml = (htmlContent: string) => {
  const htmlString = htmlContent.replace(/(<([^>]+)>)/gi, '');
  return htmlString.replace(/&nbsp;/gi, ' ');
};
