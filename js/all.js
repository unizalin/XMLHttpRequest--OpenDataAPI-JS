var data = [];
var xhr = new XMLHttpRequest();
xhr.open('get', 'https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97', true);
xhr.send(null);
xhr.onload = function () {
  var info = JSON.parse(xhr.responseText);
  data = info.result.records;
}


//設定DOM//
var ar = document.querySelector('#areaId');
var hotar = document.querySelector('#header-hot-list');
var listTitle = document.querySelector('#list-title');
var list = document.querySelector('#list');

//設定監聽與更新
ar.addEventListener('change', updateList, false);
hotar.addEventListener('click', hotarea)
areaUpdated(area);
updateListOrignal();

// //行政區下拉選單
// function areaUpdated(items) {
//     var str = ' ';
//     for (var i = 0; i < items.length; i++) {
//         str += '<option data-number="' + i + '" value="' + items[i] + '">' + items[i] + '</option>'
//     }
//     ar.innerHTML = str;
// }
//熱門行政區
function hotarea(e) {
  if (e.target.nodeName !== 'INPUT') {
    return;
  }
  updateList(e)
}
//更新列表
function updateList(e) {
  var str = '';
  for (i = 0; i < data.length; i++) {
    if (data[i].Zone == e.target.value) {
      listTitle.textContent = data[i].Zone;
      str += '<li class="list-imf"><div class="list-img" style="background:url(' + data[i].Picture1 + ');background-size: cover;background-position: center; "><h3>' + data[i].Name + '</h3><h2>' + data[i].Zone + '</h2></div><ul><li><img src="images/icons_clock.png" alt="">' + data[i].Opentime + '</li><li><img src="images/icons_pin.png" alt=""> ' + data[i].Add + '</li><li class="left-li"><img src="images/icons_phone.png" alt="">' + data[i].Tel + '</li><li class="right-li"><img src="images/icons_tag.png" alt="">' + data[i].Ticketinfo + '</li></ul></li>'
    }
    list.innerHTML = str;
  }
}

//原始列表
function updateListOrignal() {
  var str = '';
  for (i = 0; i < data.length; i++) {
    if (data[i].zone == ar.value) {
      listTitle.textContent = data[i].Zone;
      str += '<li class="list-imf">< div class="list-img" style="background:url(' + data[i].Picture1 + ');background-size:cover;background-position:center center;position:absolute" ><h3>' + data[i].Name + '</h3><h2>' + data[i].Zone + '</h2></div ><ul><li><img src="images/icons_clock.png" alt="">' + data[i].Opentime + '</li><li><img src="images/icons_pin.png" alt=""> ' + data[i].Add + '</li><li class="left-li"><img src="images/icons_phone.png" alt="">' + data[i].Tel + '</li><li class="right-li"><img src="images/icons_tag.png" alt="">' + data[i].Ticketinfo + '</li></ul></li>'
    }
    list.innerHTML = str;
  }
}


