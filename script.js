function filterGallery(category) {
    const photos = document.querySelectorAll('.photo');
    photos.forEach(photo => {
        if (category === 'all') {
            photo.style.display = 'block';
        } else {
            if (photo.classList.contains(category)) {
                photo.style.display = 'block';
            } else {
                photo.style.display = 'none';
            }
        }
    });
}