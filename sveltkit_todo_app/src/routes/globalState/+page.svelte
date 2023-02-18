<script>

import { globalState, count } from "../../store";

let value;
let counter;
globalState.subscribe(val => value =  val)
count.subscribe(val=> counter = val)

const incr=()=>{
    count.set(counter++)
}

const decr=()=>{
    count.set(counter--)
}
</script>

<div>
    <p>{value}</p>

    <button on:click={incr}>Increment</button>
    <p>{counter}</p>
    <button on:click={decr}>Decrement</button>
</div>