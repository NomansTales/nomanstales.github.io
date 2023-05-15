<section id="coming-soon" class="v-container callout">
    <h2>Books Coming May 15th</h2>
    <p>Join our newsletter for a chance to win a free copy!</p>
    <a href="{{< link/newsletter >}}" class="button-link">Sign Up</a>
</section>

<script>
    window.onload = function() {
        var now = new Date();
        var launchDate = new Date(2023, 4, 1); // Remember, months are 0-indexed in JavaScript Date.
        var comingSoonSection = document.getElementById('coming-soon');
        var buyBooksSection = document.getElementById('buy-books');

        if (now >= launchDate) {
            // If today's date is on or after the launch date, hide the "coming soon" section and show the "buy books" section.
            if (comingSoonSection) comingSoonSection.style.display = 'none';
            if (buyBooksSection) buyBooksSection.style.display = 'block';
        }
    };
</script>
