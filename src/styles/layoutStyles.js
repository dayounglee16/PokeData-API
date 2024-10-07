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
  mobile: "@media (max-width: 768px)",
  tablet: "@media (min-width: 769px) and (max-width: 1024px)",
  desktop: "@media (min-width: 1025px) and (max-width: 1200px)",
};
