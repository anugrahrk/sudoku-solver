document.addEventListener("DOMContentLoaded",function(){
    const board = document.getElementById("sudoku-board");

    for(let i=0;i<9;i++){
        let row = document.createElement("tr");
        for(let j=0;j<9;j++){
            let cell=document.createElement("td");
            let input=document.createElement("input");
            input.type="text";
            input.maxLength=1
            input.value="0";

            input.addEventListener("focus",function(){
                if (input.value === "0"){
                    input.value="";
                }
            });
            input.addEventListener("blur",function(){
                if (input.value === "0"){
                    input.value="";
                }
            });

            cell.appendChild(input);
            row.appendChild(cell);
        }
        board.appendChild(row);
    }

    document.getElementById("solve-btn").addEventListener("click",function(){
        let grid=[];
        document.querySelectorAll("#sudoku-board input").forEach((input, index) => {
            let row=Math.floor(index/9);
            if(!grid[row]) grid[row]=[];
            grid[row].push(input.value ? input.value : "0");
        });
        fetch("/solve",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({grid})
        })
        .then(response => response.json())
        .then(data =>{
            if(data.success){
                document.querySelectorAll("#sudoku-board input").forEach((input, index)=> {
                    let row=Math.floor(index/9);
                    let col=index%9;
                    input.value=data.solution[row][col];
                });
            } else{
                document.getElementById("message").textContent="Invalid Sudoku!";

            }
        });
    });
});
    

    

