<script>

  let incomingTodo = "";

  let todos = [];

  let renderDelButton = false;

  const toggle = (val) => {
    val = !val;
    if(!val){
    renderDelButton = true;
    }else{
        renderDelButton= false
    }
    console.log(val);
  };

  const handleClick = () => {
    if (incomingTodo.length > 0) {
      todos = [...todos, { text: incomingTodo, status: false }];
    }
    incomingTodo = "";
    console.log(todos);
  };

  const handleDelete = (index) => {
    console.log(todos);
    todos.splice(index, 1);
    todos = todos;
  };

  const handleMultipleDelete = () => {
    console.log("mdel");
  };
</script>

<div class="content">
  <div class="input_div">
    <input
      bind:value={incomingTodo}
      type="text"
      class="text-input"
      placeholder="add new todo here"
    />
    <button on:click={handleClick}> Add</button>
  </div>
  <div class="todos_list">
    {#each todos as todo, index}
      <div class="todo_item">
        <input
          type="checkbox"
          bind:checked={todo.status}
          on:change={()=>toggle(todo.status)}
        />
        <p>{todo.text}</p>
        <button class="delete" on:click={() => handleDelete(index)}
          >Delete Todo</button
        >
      </div>
    {/each}
  </div>
  {#if renderDelButton}
    <button class="delete_selected" on:click={() => handleMultipleDelete}
      >Delete Selected Todos</button
    >
  {:else}
    {""}
  {/if}
</div>

<style>
  .delete {
    width: 100px;
    background: #b61d1d;
    color: wheat;
    border: 1px solid #b61d1d;
    border-radius: 5px;
    height: 30px;
    font-weight: bold;
    font-size: 13px;
  }
  .todo_item {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 500px;
    gap: 25px;
    justify-content: space-between;
  }
  .todos_list {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 500px;
    font-weight: bold;
    font-size: 25px;
    align-items: center;
  }
  .content {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
  .text-input {
    height: 40px;
    width: 400px;
    outline: none;
  }
  button {
    height: 45px;
    width: 100px;
  }

  .input_div {
    display: flex;
    flex-direction: row;
  }

  .delete_selected {
    background: #b61d1d;
    color: wheat;
    border: 1px solid #b61d1d;
    border-radius: 5px;
    height: 30px;
    font-weight: bold;
    font-size: 13px;
    width: 300px;
  }
</style>
