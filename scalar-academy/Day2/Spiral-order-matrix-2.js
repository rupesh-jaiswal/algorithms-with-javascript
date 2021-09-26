// https://www.scaler.com/academy/mentee-dashboard/classroom/faang-e2ea7de3-7ced-45ca-92db-3e37a989c8a0/#assignment%2F11891

const generateMatrix = (A) => {
    n = A*A;
    let matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
    const checkRight = (i, j) => {
        if(j<n && matrix[i][j]==0) {
            return true;
        }
        return false;
    };

    const checkBottom = (i,j) => {
        if(i<n && matrix[i][j]==0) {
            return true;
        }
        return false;
    }

    const checkLeft = ()
}