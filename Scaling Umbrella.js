function arrange(arr) {

    let temp = [];
    let m = 0, n = 0;
    let p = arr.length;
    let q = arr[0].length;

    //let m be starting row index
    //let n be starting column index
    //let p be ending row index
    //let q be ending column index
    //temp is the return 1-d array

    while (m < p && n < q) {

        //traversing the rows (top) of the spiral
        for(i = n; i < p; i++) {

            temp.push(arr[m][i]);

        }
        m++;

        //traversing the sides (right column) of the spiral
        for(i = m; i < p; i++) {

            temp.push(arr[i][q-1]);

        }
        q--;

        if(m < p) {

            //traversing the rows (bottom) of the spiral
            for(i = q - 1; i >= n; i--) {

                temp.push(arr[p-1][i]);

            }
            p--;
        }

        if(n < q) {

            //traversing the sides (left column of the spiral)
            for(i = p - 1; i>= m; i--) {

                temp.push(arr[i][n]);

            }
            n++;
        }
    }

    return temp;
}
