export const flexStyles = (
  direction = "row",
  justifyContent = "center",
  alignItems = "center",
  flexWrap = "wrap",
  gap = 0,
  flex = "initial"
) => {
  return `
    display:flex;
    flex-direction: ${direction};
    justify-content: ${justifyContent};
    align-items : ${alignItems};
    flex-wrap: ${flexWrap};
    gap: ${gap}px;
    flex: ${flex};
  `;
};

export const mediaQueries = {
  mobile: "@media (max-width: 600px)",
  tablet: "@media (min-width: 601px) and (max-width: 900px)",
  desktop: "@media (min-width: 901px) and (max-width: 1200px)",
};
