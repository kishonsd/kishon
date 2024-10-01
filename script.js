<script>
// Function to toggle the menu visibility
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Function to close the menu when clicking outside of it
function closeMenuOnClickOutside(event) {
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.querySelector('.hamburger');

    // Check if the menu is open and if the click was outside the menu and the hamburger
    if (navLinks.classList.contains('active') && !navLinks.contains(event.target) && !hamburger.contains(event.target)) {
        navLinks.classList.remove('active')};
    

// Attach the close menu event to the document
document.addEventListener('click', closeMenuOnClickOutside);

// Close the menu when a menu link is clicked
document.querySelectorAll('.nav-links ul li a').forEach(link ={">"} {
    link.addEventListener('click', () => {
        document.getElementById('navLinks').classList.remove('active');
    })};
);
</script>
