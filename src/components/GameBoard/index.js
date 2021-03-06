import React, { useMemo } from 'react';
import BingoBoard from './BingoBoard';
import { useSelector } from 'react-redux';
import { generateKey } from '../../helper/utils';
import Style from './styles';

const GameBoard = () => {
  const bingoNumbers = useSelector(({ boardNumbers }) => boardNumbers);

  const bingoBoards = useMemo(() => {
    return Object.keys(bingoNumbers).map(player => {
      return (
        <BingoBoard 
          key={ generateKey(player) }
          numbers={ bingoNumbers[player] } 
          player={ player }
        />
      );
    });
  }, [bingoNumbers])

  return (
    <Style.GameBoardWrapper>
      { bingoBoards }
    </Style.GameBoardWrapper>
  );
};

export default React.memo(GameBoard);