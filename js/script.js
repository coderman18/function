function newElement(options) {
  const el = document.createElement(options.tag);

  for (const [key, value] of Object.entries(options.params)) {
    if(key == 'classList') {
      for (const newClass of value) {
        el.classList.add(newClass);
      }
    }else{
      el[key] = value
    }
  }

  if(options.elements !== undefined) {
    for (const element of options.elements) {
      newElement({
        tag: element.tag,
        params: element.params,
        parent: el,
      })
    }
  }

  if(options.parent !== undefined) options.parent.append(el)

  return el;
}

let h1 = newElement({
  tag: 'h1',
  params: {
    classList: ['red', 'big'],
    textContent: 'Hello World',
  },
  parent: document.body
});

let form = newElement({
  tag: 'form',
  params: {
    classList: ['form'],
  },
  elements: [
    {
      tag: 'input',
      params: {
        placeholder: 'введите сообщение',
        type: 'text'
      }
    },
    {
      tag: 'button',
      params: {
        textContent: 'отправить',
        type:'submit'
      }
    }
  ],
  parent: document.body
});

// let footer = newElement({
//   tag: 'footer',
//   params: {
//     classList: ['footer', 'size'],
//   },
//   parent: document.body
// })


