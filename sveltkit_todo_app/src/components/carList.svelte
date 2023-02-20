<script>
    import { each } from 'svelte/internal';
import cars from '../store'

console.log(cars);
</script>

<div>
    { #each cars as car}
<ul>
    <li>
        {car.make}
    </li>
</ul>
    {/each}
</div>