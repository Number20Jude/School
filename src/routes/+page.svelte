<script>
    import Hero from "$lib/Hero.svelte";
</script>

<Hero/>
<section class="section flow">
    <h2>Recomendations</h2>
<div class="boxes">
    
    <div class="flow">
        <img src="https://picsum.photos/300?random1" alt="placeholder">
        <div>
            <h3>Crates</h3>
        <div class="subheading">May 2024</div>
    </div>
     <p>Submit your favorite dog crates, and why you like them to the contact page</p>
     <a href="/blog" class="button">Application</a>
    </div>

    <div class="flow">
        <img src="https://picsum.photos/300?random2" alt="placeholder">
        <div><h3>Toys</h3>
        <div class="subheading">May 2024</div>
        </div>
     <p>Submit your favorite dog toys, and why you like them to the contact page</p>
     <a href="/contact" class="button">Contribute</a>
    </div>
    <div class="flow">
        <img src="https://picsum.photos/300?random2" alt="placeholder">
        <div><h3>Treats</h3>
        <div class="subheading">May 2024</div>
        </div>
     <p>Submit your favorite dog treats, and why you like them to the contact page</p>
     <a href="/contact" class="button">Contribute</a>
    </div>
    <div class="flow">
        <img src="https://picsum.photos/300?random2" alt="placeholder">
        <div><h3>Locations</h3>
        <div class="subheading">May 2024</div>
        </div>
     <p>Submit your favorite location to bring your dog to and why on the contact page.</p>
     <a href="/contact" class="button">Contribute</a>
    </div>
</div>
</section>
<style>
section{
    padding: 6rem;
    background-color: hsla(335, 76%, 18%, 0.514);
    border-radius: 1rem;
}
.boxes {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
    gap: 3rem;
}

.subheading {
    text-transform: uppercase;
    font-size: 0.8rem;
    letter-spacing: 1px;
}

.button {
    display: inline-block;
    padding-inline: 1rem;
}
</style>