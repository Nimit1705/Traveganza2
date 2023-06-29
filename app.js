window.addEventListener('DOMContentLoaded', function() {
    var popUpBox = document.getElementById('popUpBox');
    var closeModal = document.getElementById('closeModal');
  
    popUpBox.style.display = 'block';
  
    closeModal.addEventListener('click', function() {
      popUpBox.style.display = 'none';
      popUpOverlay.style.display = 'none';
        });

  });
  