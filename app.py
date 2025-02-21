from flask import Flask, render_template, request,jsonify
app=Flask(__name__)

def solveSudoku(board):
        for i in range(len(board)):
            for j in range(len(board[0])):
                if board[i][j]=="0":
                    for c in "123456789":   
                        if isValid(board,i,j,c):
                            board[i][j]=c
                            if solveSudoku(board):
                                return True
                            else:
                                board[i][j]="0"
                    return False
        return True
def isValid(board,row,col,c):
    for i in range(9):
        if board[row][i]==c:
            return False
        if board[i][col]==c:
            return False
        if board[3*(row//3)+i//3][3*(col//3)+i%3]==c:
            return False
    return True

@app.route("/")
def index():
    return render_template("index.html")
@app.route("/solve",methods=["POST"])
def solve():
    data=request.json
    board=data["grid"]

    if solveSudoku(board):
        return jsonify({"success":True,"solution":board})
    else:
        return jsonify({"success":False,"message":"Invalid Sudoku"})
if __name__=="__main__":
    app.run(debug=True)