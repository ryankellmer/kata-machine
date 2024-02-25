export default function linear_fn(Array: number[], value: number): boolean {
    for (let i: number = 0; i < Array.length; i++){
        if (Array[i] === value){
            return true;
        }
    }
    
    return false;
}