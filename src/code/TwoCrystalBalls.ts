export default function two_crystal_balls(Array: boolean[]): number{
    const step: number = Math.floor(Math.sqrt(Array.length));

    for(let i = step; i < Array.length; i++){
        if (Array[i] === true) {
            for (let j = i - step + 1; j < i; j++) {
                if(Array[j] === true){
                    return j;
                }
            }
        }
    }
    return -1;
}