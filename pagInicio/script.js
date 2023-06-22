function obterLocalizacao() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(mostrarPosicao);
    } else {
      alert("Geolocalização não é suportada pelo seu navegador.");
    }
  }

  function mostrarPosicao(posicao) {
    var latitude = posicao.coords.latitude;
    var longitude = posicao.coords.longitude;
    document.getElementById("latitude").value = latitude;
    document.getElementById("longitude").value = longitude;
  }