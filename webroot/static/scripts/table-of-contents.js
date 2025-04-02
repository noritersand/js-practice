export function generateToc(dropZone) {
  let $dropZone = document.querySelector(dropZone);
  if (!$dropZone) {
    console.warn('TOC를 생성할 dropZone이 음슴');
    return;
  }

  let $h4 = document.createElement('h4');
  $dropZone.appendChild($h4);
  $h4.innerHTML = '📌 목차';

  let $ul = document.createElement('ul');
  $dropZone.appendChild($ul);

  let $nodeList = document.querySelectorAll('h2, h3');
  $nodeList.forEach($ele => {
    let newId = $ele.innerText.replace(/\s/g, '-');

    $ele.setAttribute('id', newId);

    let $li = document.createElement('li');
    $ul.appendChild($li);
    $li.innerHTML = `<a href="#${newId}">${$ele.innerText}</a>`;
    $li.style.marginLeft = $ele.tagName == 'H2' ? 'auto' : '15px';
    // TODO 마진 넣는건 꼼수고 nested ul로 바꿔야 함 😵‍💫
  });
}
