// mergesort algorithm

const P1 = (s) => {
    //base case of s being a single character/empty
    if (s.length <= 1){

        return s;
    }
    const mid = s.length / 2;
    //split into two sub arrays
    const leftString = s.slice(0, mid);
    const rightString = s.slice(mid);

    //recurse and merge
    return merge(P1(leftString), P1(rightString));
}

const merge = (leftString, rightString) => {

    const lenLeft = leftString.length;
    const lenRight = rightString.length;

    let i = 0; //left index
    let j = 0; //right index
    let ans = ""; //return string

    //add characters to array in sorted fashion
    while(i < lenLeft && j < lenRight){
        if (leftString.charAt(i) < rightString.charAt(j)){

            ans += leftString.charAt(i);
            i++;
        }
        else{
            ans += rightString.charAt(j);
            j++;
        }

    }
    //add leftover characters
    while(i < lenLeft){

        ans += leftString.charAt(i);
        i++;
    }

    while(j < lenRight){

        ans += rightString.charAt(j);
        j++;
    }

    return ans;
}
exports.P1 = P1;