import React from 'react';
import { MatchComponentProps } from '../../types';
import {
  Score,
  Side,
  StyledMatch,
  Team,
  TopText,
  BottomText,
  Wrapper,
  Line,
  Anchor,
} from './styles';

function Match({
  bottomHovered,
  bottomParty,
  bottomText,
  bottomWon,
  match,
  onMatchClick,
  onMouseEnter,
  onMouseLeave,
  onPartyClick,
  topHovered,
  topParty,
  topText,
  topWon,
}: MatchComponentProps) {
  return (
    <Wrapper>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <TopText>{topText}</TopText>
        {(match.href || typeof onMatchClick === 'function') && (
          <Anchor
            href={match.href}
            onClick={event =>
              onMatchClick?.({ match, topWon, bottomWon, event })
            }
          >
            <TopText>Match Details</TopText>
          </Anchor>
        )}
      </div>
      <StyledMatch>
        <Side
          onMouseEnter={() => onMouseEnter(topParty.id)}
          onMouseLeave={onMouseLeave}
          won={topWon}
          hovered={topHovered}
          onClick={() => onPartyClick?.(topParty, topWon)}
        >
          <img
            src={
              topParty?.image?.url
                ? topParty.image.url
                : 'https://gbarena-development.s3.amazonaws.com/users/avatars/1tPWg4yVDu3SKthqWM8Fvm.png'
            }
            width={topParty?.image?.width ? topParty.image.width : 30}
            height={topParty?.image?.height ? topParty.image.height : 30}
            alt="icon"
            style={{ borderRadius: topParty?.image?.borderRadius ? topParty.image.borderRadius : 10 }}

          />
          <Team>{topParty?.name}</Team>
          <Score won={topWon}>{topParty?.resultText}</Score>
        </Side>
        <Line highlighted={topHovered || bottomHovered} />
        <Side
          onMouseEnter={() => onMouseEnter(bottomParty.id)}
          onMouseLeave={onMouseLeave}
          won={bottomWon}
          hovered={bottomHovered}
          onClick={() => onPartyClick?.(bottomParty, bottomWon)}
        >
          <img
            src={
              bottomParty?.image?.url
                ? bottomParty.image.url
                : 'https://gbarena-development.s3.amazonaws.com/users/avatars/1tPWg4yVDu3SKthqWM8Fvm.png'
            }
            width={bottomParty?.image?.width ? bottomParty.image.width : 30}
            height={bottomParty?.image?.height ? bottomParty.image.height : 30}
            style={{ borderRadius: bottomParty?.image?.borderRadius ? bottomParty.image.borderRadius : 10 }}
          />
          <Team>{bottomParty?.name}</Team>
          <Score won={bottomWon}>{bottomParty?.resultText}</Score>
        </Side>
      </StyledMatch>
      <BottomText>{bottomText ?? ' '}</BottomText>
    </Wrapper>
  );
}

export default Match;
