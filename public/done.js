

const checkboxes = document.querySelectorAll('input[name="done"]');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', (event) => {
    let li = checkbox.parentElement
    if (event.target.checked) {
        li.classList.add('doneMark')
    } else {
      console.log(`${event.target.value} was unchecked ❌`);
      li.classList.remove('doneMark')
    }
  });
});