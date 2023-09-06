document.addEventListener('DOMContentLoaded', function () {
    const certificariButtons = document.querySelectorAll('.certificari-button');

    certificariButtons.forEach(function (button) {
      button.addEventListener('click', function (event) {
        event.preventDefault();

        const targetId = this.getAttribute('data-target');
        const targetEmbed = document.getElementById(targetId);

        if (targetEmbed.style.display === 'none') {
          targetEmbed.style.display = 'block';
        } else {
          targetEmbed.style.display = 'none';
        }
      });
    });
});
