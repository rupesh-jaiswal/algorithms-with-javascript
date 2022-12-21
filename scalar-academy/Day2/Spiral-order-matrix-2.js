// https://www.scaler.com/academy/mentee-dashboard/classroom/faang-e2ea7de3-7ced-45ca-92db-3e37a989c8a0/#assignment%2F11891

const generateMatrix = (A) => {
    n = A*A;
    let matrix = new Array(A).fill(0).map(() => new Array(A).fill(0));
    const checkRight = (i, j) => {
        if(j<A && matrix[i][j]==0) {
            return true;
        }
        return false;
    };

    const checkBottom = (i,j) => {
        if(i<A && matrix[i][j]==0) {
            return true;
        }
        return false;
    }

    const checkLeft = (i, j) => {
        if(i>=0 && matrix[i][j]==0) {
            return true;
        }
        return false;
    }
    const checkTop = (i, j) => {
        if(j>=0 && matrix[i][j] ==0) {
            return true;
        }
        return false;
    }

    let direction = "right";
    let num = 1;
    let x=0;
    let y=0;
    // while(num<=n) {
    //     matrix[x][y]=num++;
    //     switch(direction) {
            
    //         case "right": 
    //             //matrix[x][y] = num++;
    //             if(checkRight(x,y+1)) {
    //                 y++;
    //             }else {
    //                 x++
    //                 direction="bottom";
    //             }
    //             break;
    //         case "bottom": 
    //             //matrix[x][y] = num++;
    //             if(checkBottom(x+1,y)) {
    //                 x++;
    //             }else {
    //                 y--;
    //                 direction="left";
    //             }
    //             break;
    //         case "left": 
    //             //matrix[x][y]=num++;
    //             if(checkLeft(x, y-1)) {
    //                 y--;
    //             }else {
    //                 x--;
    //                 direction="top";
    //             }
    //             break;
    //         case "top": 
    //             if(checkTop(x-1,y)) {
    //                 x--;
    //             }else {
    //                 y++;
    //                 direction="right";
    //             }
    //         default: break;
    //     }
    // }
    while(num<=n) {
        switch(direction) {
            case "right": 
                if(checkRight(x,y)) {
                    matrix[x][y++] = num++;
                }else {
                    y--;
                    x++
                    direction="bottom";
                }
                break;
            case "bottom": 
                if(checkBottom(x,y)) {
                    matrix[x][y] = num++;
                    x++;
                }else {
                    x--;
                    y--;
                    direction="left";
                }
                break;
            case "left": 
                if(checkLeft(x, y)) {
                    matrix[x][y]=num++;
                    y--;
                }else {
                    y++;
                    x--;
                    direction="top";
                }
                break;
            case "top": 
                if(checkTop(x,y)) {
                    matrix[x][y] = num++;
                    x--;
                }else {
                    x++;
                    y++;
                    direction="right";
                }
            default: break;
        }
    }
    console.log(matrix);
    return matrix;
}

generateMatrix(80);
// generateMatrix(4);