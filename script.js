let btnTop = document.getElementById("btnTop");

window.onscroll = function () 
{
    if (document.documentElement.scrollTop > 1000) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }
};

btnTop.addEventListener("click", function () 
{
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Sélectionner toutes les div.wallpaper
const wallpapers = document.querySelectorAll('.wallpaper');

// Ajouter un gestionnaire d'événements de clic pour chaque div.wallpaper
wallpapers.forEach(function(wallpaper) {
  wallpaper.addEventListener('click', function() {
    // Récupérer l'URL stockée dans l'attribut data-link de la div
    const link = this.getAttribute('data-link');
    // Rediriger l'utilisateur vers l'URL
    window.location.href = link;
  });
});
