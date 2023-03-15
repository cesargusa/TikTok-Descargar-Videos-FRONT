function downloadImage(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'blob';
    xhr.onload = function () {
      var urlCreator = window.URL || window.webkitURL;
      var imageUrl = urlCreator.createObjectURL(this.response);
      var tag = document.createElement('a');
      tag.href = imageUrl;
      tag.target = '_blank';
      tag.download = 'sample.mp4';
      document.body.appendChild(tag);
      tag.click();
      document.body.removeChild(tag);
    };
    xhr.onerror = err => {
      alert('Failed to download picture');
    };
    xhr.send();
  }

window.onload = () => {
   
    //   downloadURI('https://file-examples-com.github.io/uploads/2017/02/file-sample_100kB.doc', 'sample.doc')
    let tiktokContenedor = document.getElementById('tiktokContenedor')
    //Datos mockeados con prueba para que no gaste
    //las 160 peticiones mensuales
    fetch('./prueba.json')
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            tiktokContenedor.innerHTML += `
       
        <div class="col-lg-4">
        <div class=" d-flex justify-content-center "><img class='rounded-circle' src='${data.data.author.avatar}' width='200'></div>
        <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
            <h3>${data.data.author.nickname}</h3>
            <p class="lead mb-0">${data.data.title}</p>
        </div>
        </div>
 <div class='col-lg-4'>
        <div class=" d-flex"><img src='${data.data.origin_cover}' width='200'></div>

        </div>
        <div class='col-lg-4'>

        <div class="col-12">
        <button type="button" class="btn btn-success" onclick='downloadImage("${data.data.play}")'>Descargar Video sin marca de agua</button>
        </div>
        <div class="col-12">
        <button type="button" class="btn btn-primary">Descargar Video sin marca de agua</button>
        </div>
        </div>
        `
        })
}