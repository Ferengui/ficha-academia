document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('.selection-checkbox');
  
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        const videoContainer = checkbox.parentElement.querySelector('.video-container');
        
        // Exibe ou esconde o vídeo com base na seleção
        if (checkbox.checked) {
          videoContainer.style.display = 'block';
        } else {
          videoContainer.style.display = 'none';
        }
  
      }
    )
  }
)
}
)