import React from 'react';
import Connectors from 'Components/connector';

import { getCalculatedStyles } from '../settings';
import { calculatePositionOfMatchLowerBracket } from './calculate-match-position';

const ConnectorsLower = ({
  bracketSnippet,
  rowIndex,
  columnIndex,
  style,
  offsetY = 0,
}) => {
  const { columnWidth, rowHeight, canvasPadding } = getCalculatedStyles(style);

  const isUpperSeedingRound = columnIndex % 2 !== 0;

  const currentMatchPosition = calculatePositionOfMatchLowerBracket(
    rowIndex,
    columnIndex,
    {
      canvasPadding,
      rowHeight,
      columnWidth,
      offsetY,
    }
  );
  const previousBottomPosition = isUpperSeedingRound
    ? rowIndex
    : (rowIndex + 1) * 2 - 1;
  
  // Only calculate positions for matches that actually exist
  const previousTopMatchPosition =
    !isUpperSeedingRound && bracketSnippet.previousTopMatch
      ? calculatePositionOfMatchLowerBracket(
          previousBottomPosition - 1,
          columnIndex - 1,
          {
            canvasPadding,
            rowHeight,
            columnWidth,
            offsetY,
          }
        )
      : null;
      
  const previousBottomMatchPosition = bracketSnippet.previousBottomMatch
    ? calculatePositionOfMatchLowerBracket(
        previousBottomPosition,
        columnIndex - 1,
        {
          canvasPadding,
          rowHeight,
          columnWidth,
          offsetY,
        }
      )
    : null;

  return (
    <Connectors
      bracketSnippet={bracketSnippet}
      previousBottomMatchPosition={previousBottomMatchPosition}
      previousTopMatchPosition={previousTopMatchPosition}
      currentMatchPosition={currentMatchPosition}
      style={style}
    />
  );
};

export default ConnectorsLower;
