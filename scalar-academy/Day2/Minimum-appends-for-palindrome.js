const minimumAppends = (s) => {

    let count = 0;
    let l= 0;
    let r = s.length-1;
    while(l<r) {
        if(s[l]!==s[r]) {
            count=l+1;
        }else {
            r--;
        }
        l++;
    }

    console.log(count);
}
minimumAppends("abede");
minimumAppends("malayalam");
minimumAppends("abcdefg");
minimumAppends("aabb");