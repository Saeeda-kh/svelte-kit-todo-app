
<script>
    /** @type {import('./$types').PageData} */
    /** @type {import('./$types').ActionData} */
    export let form;

    
  </script>
<form method="POST">
    <input type="text" name="user" />
    <input type="password" name="password" />
    <button type="submit">Add</button>
</form>
{#if form?.success}
{console.log(form.object)}
{#each form.object as obj}
<ul>
<li>{obj.name}</li>
<li>{obj.password}</li>  
</ul>  
{/each}
<!-- this message is ephemeral; it exists because the page was rendered in
     response to a form submission. it will vanish if the user reloads -->
Form is submitted successfully

{/if}