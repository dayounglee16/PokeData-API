export const flexStyles = (
  direction = "row",
  justifyContent = "center",
  alignItems = "center",
  gap = 0
) => {
  return `
    display:flex;
    flex-direction: ${direction};
    align-items : ${alignItems};
    justify-content: ${justifyContent};
    gap:${gap};
  `;
};

export const mediaQueries = {
  mobile: "@media (max-width: 600px)",
  tablet: "@media (min-width: 601px) and (max-width: 900px)",
  desktop: "@media (min-width: 901px) and (max-width: 1200px)",
};
