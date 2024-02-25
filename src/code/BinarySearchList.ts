export default function binary_fn(Array: number[], value: number): boolean{
    let left = 0;
    let right = Array.length;

    do {
        const midPoint = Math.floor(left + (right - left) / 2);
        const current = Array[midPoint];

        if (current === value){
            return true;
        } else if (current > value){
            right = midPoint;
        }
        else {
            left = midPoint + 1;
        }
    } while (left < right);
    return false;
}