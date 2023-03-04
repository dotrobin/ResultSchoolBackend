document.addEventListener('click', event => {
  if (event.target.dataset.type === 'remove') {
    const id = event.target.dataset.id

    remove(id).then(() => {
      event.target.closest('li').remove()
    })
  }
})

document.addEventListener('click', event => {
  if (event.target.dataset.type === 'edit') {
    const id = event.target.dataset.id

    let result = prompt("Введите новое название")
    if (result) rename(id, result)
  }
})

async function remove(id) {
  await fetch(`/${id}`, {method: 'DELETE'})
}

async function rename(id, name) {
  await fetch(`/${id}`, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({title: name})
  })
}