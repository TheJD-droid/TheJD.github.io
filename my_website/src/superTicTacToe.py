
import pprint
import copy

def createBoard():
    superBoard = {'top-L': {}, 'top-M': {}, 'top-R': {},
              'mid-L': {}, 'mid-M': {}, 'mid-R': {},
              'low-L': {}, 'low-M': {}, 'low-R': {}}
    defaultBoard = {'top-L': ' ', 'top-M': ' ', 'top-R': ' ',
                'mid-L': ' ', 'mid-M': ' ', 'mid-R': ' ',
                'low-L': ' ', 'low-M': ' ', 'low-R': ' ',}

    for pos in superBoard.keys():
        superBoard[pos] = copy.copy(defaultBoard)
    primeBoard = copy.copy(defaultBoard)

    return superBoard, primeBoard

def printSuperBoard(superBoard):
    rows = ['top', 'mid', 'low']
    for superRow in rows:
        for row in rows:
            print('\t', end='')
            print(superBoard[superRow + '-L'][row + '-L'], end='|')
            print(superBoard[superRow + '-L'][row + '-M'], end='|')
            print(superBoard[superRow + '-L'][row + '-R'], end=' || ')
            print(superBoard[superRow + '-M'][row + '-L'], end='|')
            print(superBoard[superRow + '-M'][row + '-M'], end='|')
            print(superBoard[superRow + '-M'][row + '-R'], end=' || ')
            print(superBoard[superRow + '-R'][row + '-L'], end='|')
            print(superBoard[superRow + '-R'][row + '-M'], end='|')
            print(superBoard[superRow + '-R'][row + '-R'], end='\n')
            if row != 'low':
                print('\t-----------------------')

        if superRow != 'low':
            print('\t=======================')


def getMove(player, boardReq, superBoard, primeBoard):

    boardName = ['Any', 'top left', 'top middle', 'top right', 'middle left', 'middle middle', 'middle right', 'bottom left', 'bottom middle', 'bottom right']
    boardPos = ['Any', 'top-L', 'top-M', 'top-R', 'mid-L', 'mid-M', 'mid-R', 'low-L', 'low-M', 'low-R']
    coord = {(1,1): 'top-L', (1,2): 'top-M', (1,3): 'top-R', (2,1): 'mid-L', (2,2): 'mid-M', (2,3): 'mid-R', (3,1): 'low-L', (3,2): 'low-M', (3,3): 'low-R'}
    print('Number associated with each board:')
    for i in range(1,10):
        if i % 3 == 0:
            print(i)
        else:
            print(str(i) + '|', end='')

    if boardReq == 0:
        print(f"You are playing on {boardName[boardReq]} board. Input your move as 'row,col,board'")
    else:
        print(f"You are playing on the {boardName[boardReq]} board. Input your move as 'row,col'")

    while True:
        try:
            if boardName[boardReq] == 'Any':
                row, col, board = map(int, input("Enter row and column (1 - 3) and a board (1 - 9) each separated by a ','\n").split(','))
                #print(f"row: {row} | col: {col} | board: {board}")
            else:
                row, col = map(int, input("Enter row and column (1 - 3) separated by a ','\n").split(','))
                #print(f"row: {row} | col: {col}")
                board = boardReq


            print(f"row: {row} | col: {col} | board: {board}")
            if (1 <= row <= 3) and (1 <= col <= 3) and (1 <= board <= 9) and superBoard[boardPos[board]][coord[(row,col)]] == ' ':
                print('Valid move')
                superBoard[boardPos[board]][coord[(row,col)]] = player
                #if checkwin(superBoard[boardPos[board]])
                return boardPos.index(coord[(row,col)]), board
            else:
                print('Invalid move. Try again.')


        except ValueError:
            print("Invalid input. Enter two numbers separated by a comma. e.g.: '1,3'")


def checkWin(board, player):
    boardPos = ['Any', 'top-L', 'top-M', 'top-R', 'mid-L', 'mid-M', 'mid-R', 'low-L', 'low-M', 'low-R']
    rows = ['top', 'mid', 'low']
    cols = ['-L', '-M', '-R']
    #check rows
    for row in rows:
        c1, c2, c3 = map(lambda x: row + str(x), cols)
        if player == board[c1] == board[c2] == board[c3]:
            return True
    #check columns
    for col in cols:
        c1, c2, c3 = map(lambda x: str(x) + col, rows)
        if player == board[c1] == board[c2] == board[c3]:
            return True

    #check diagonal and antidiagonal
    if player == board['top-L'] == board['mid-M'] == board['low-R']:
        return True
    if player == board['top-R'] == board['mid-M'] == board['low-L']:
        return True
    #All checks failed
    #print('No win registered!')
    return False



def main():

    boardPos = ['Any', 'top-L', 'top-M', 'top-R', 'mid-L', 'mid-M', 'mid-R', 'low-L', 'low-M', 'low-R']

    superBoard, primeBoard = createBoard()
    printSuperBoard(superBoard)
    print(primeBoard)
    playerTurn = 'X'
    boardReq = 2

    checkWin(primeBoard, playerTurn)

    while True:
        printSuperBoard(superBoard)
        print(f"Player {playerTurn}'s turn.")

        if (boardReq != 0) and (' ' != primeBoard[boardPos[boardReq]]):
            boardReq = 0

        nextBoardReq, boardPlayed = getMove(playerTurn, boardReq, superBoard, primeBoard)
        #if primeBoard has a value at the space associated with boardReq that is anything other than ' ', then boardReq = 0
        if checkWin(superBoard[boardPos[boardPlayed]], playerTurn):
            print(superBoard[boardPos[boardPlayed]])
            primeBoard[boardPos[boardPlayed]] = playerTurn
            #print(primeBoard)

        if checkWin(primeBoard, playerTurn):
            printSuperBoard(superBoard)
            print(f"Player {playerTurn} wins!")
            return
        if playerTurn == 'X':
            playerTurn = 'O'
        else:
            playerTurn = 'X'
        boardReq = nextBoardReq

if __name__ == "__main__":
    main()
