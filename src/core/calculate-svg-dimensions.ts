export function calculateSVGDimensions(
  numOfRows,
  numOfColumns,
  rowHeight: any,
  columnWidth: any,
  canvasPadding: any,
  roundHeader: any,
  currentRound: string = ''
) {
  // Calculate the maximum possible matches in the first round based on number of columns (rounds)
  // This ensures proper view height calculation for tournament brackets
  // Use power of 2 based on columns-1 to determine the theoretical maximum matches
  const maxFirstRoundMatches = Math.pow(2, numOfColumns - 1);
  // Always use the power of 2 calculation for height, not the actual number of rows
  const adjustedRows = maxFirstRoundMatches;
  const bracketHeight = adjustedRows * rowHeight;
  const bracketWidth = numOfColumns * columnWidth;

  const gameHeight =
    bracketHeight +
    canvasPadding * 2 +
    (roundHeader.isShown ? roundHeader.height + roundHeader.marginBottom : 0);
  const gameWidth = bracketWidth + canvasPadding * 2;
  const startPosition = [
    currentRound
      ? -(parseInt(currentRound, 10) * columnWidth - canvasPadding * 2)
      : 0,
    0,
  ];
  return { gameWidth, gameHeight, startPosition };
}
