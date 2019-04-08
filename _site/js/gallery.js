// Activates the image gallery.
// The main task is to attach an event listener to each image in the gallery
// and respond appropriately on click.

function activateGallery() {
    let thumbnails = document.querySelector("#gallery-thumbs").querySelectorAll("img");
    let mainImage  = document.querySelector("#gallery-photo img");
    thumbnails.forEach(function (thumbnail) {
        thumbnail.addEventListener("click", function() {
            // Set clicked image as main image

            let thumbnailData = thumbnail.dataset;

            mainImage.setAttribute("src", thumbnailData.largeVersion);
            mainImage.setAttribute("alt", thumbnailData.alt);

            // Change which image is current
            document.querySelector(".current").classList.remove("current");
            thumbnail.parentNode.classList.add("current");

            // Update image info.
            let galleryInfo = document.querySelector("#gallery-info");
            let title = galleryInfo.querySelector('.title');
            let description = galleryInfo.querySelector('.description');
            title.innerHTML = thumbnail.dataset.title;
            description.innerHTML = thumbnail.dataset.description;

        });
    });
}