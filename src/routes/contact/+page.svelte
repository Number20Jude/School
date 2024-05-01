<script>
  let firstName = ''
  let lastName = ''
  let email = ''
  let message = ''

  function handleSubmit(){
    alert("Form Submitted")
  }
</script>
<h1>Contact</h1>

<section class="flow">
<p>Please complete this form</p>
<form on:submit|preventDefault={handleSubmit}>
  <div>
    <label for="first-name">First Name</label>
    <input type = "text" id = "first-name" name = "first-name" bind:value="{firstName}" placholder = "Enter First Name..." required/>
    
  </div> 
  <div>
    <label for="last-name">Last Name</label>
    <input type = "text" id = "last-name" name = "last-name" bind:value="{lastName}" placholder = "Enter Last Name..."required/>
 
  </div>
  <div>
    <label for="email">Email</label>
    <input type = "text" id = "email" name = "email" bind:value="{email}" placholder = "Enter Email..." required/>
   
    
  </div>
  <div>
    <label for="message">Message</label>
    <textarea name = "message" rows= "500" bind:value="{message}" placholder = "Message..." required/>
    
  </div>
  <button>Submit</button>

</form>
</section>
<style>
  form{
    max-width: 70rem;
    display:grid;
    gap:1.5rem;
  }
  div{
    display:grid;
    gap:0.5rem;
  }
  input, textarea {
    padding: 0.5rem;
    font-family: inherit;
    }
</style>

