# Usabilidad y Accesibilidad: Uso del navegador para el desarrollo web

## Grupo

Grupo 5.

José Miguel Hernández Santana
(alu0101101507@ull.edu.es)

Bruno Lorenzo Arroyo Pedraza
(alu0101123677@ull.edu.es)

Jonay Estévez Díaz
(alu0101100586@ull.edu.es)

José Daniel Fuentes Marra
(alu0101166247@ull.edu.es)

## Desarrollo

**Accede a la siguiente página web:** 

**https://www3.gobiernodecanarias.org/citasalud/**

**Utiliza los navegadores Chrome y Firefox para resolver las siguientes cuestiones:**

* **Qué peticiones desencadena la consulta.**
  * En chrome fueron 22 Consultas: 3 JS, 4 CSS, 13 imágenes, 1 documento, 1 icon.

![chrome](/img/chrome.jpg)

![Image of Yaktocat](https://octodex.github.com/images/yaktocat.png)
 
  * Firefox fueron 18 consultas: 1 html, 3 JS, 14 imágen


![En firefox](/img/firefox.jpg)
 
* **¿Qué tipo de petición estás realizando?**
  * Todas son peticiones del tipo GET.

* **Qué código de estatus devuelve.**
  * Todas las peticiones devuelven el código 200: es del tipo Exito, Accepted

* **Qué DNS tiene el servidor**
  * www3.gobiernodecanarias.org

* **Qué IP tiene tiene el servidor**
  * 93.188.136.12693.188.136.12693.188.136.126:443

* **¿La página tiene alguna cookie?, ¿Cuáles?.**
  * Si, tiene 5:

![cookies](/img/cookies.jpg)

* **¿Qué idioma acepta?.**
  * español; es
  * Inglés; en
  * Alemán; de

* **Alguna línea de código JavaScript**
```javascript
function Checker(n,t){var r="",u=6,f="1234567890",i;for(t===0&&(f+="QWERTYUIOPASDFGHJKLZXCVBNM",u=16),i=0;i<n.length;i++)f.indexOf(n.charAt(i).toUpperCase())!==-1&&r.length<u&&(r+=n.charAt(i));return r}var rutaInicio=window.location.href,lang="@SessionContainer.culture",errorText;lang===""&&(lang="es-ES");errorText="Debe introducir un CIP válido";lang==="en-GB"?errorText="You must enter a valid CIP":lang==="de-DE"&&(errorText="Sie müssen einen gültigen CIP geben");$(document).load(function(){});$(document).ready(function(){$("#formData").submit(function(n){$("#cip").val().length!==16&&($("#modalError .modal-body p").html(errorText),n.preventDefault())});$("#btn-help").on("click",function(){$("#modalAyuda").modal("show")})})
```


* **Alguna línea de código CSS que se aplique**
```css
body {
    padding-top: 20px;
    padding-bottom: 20px;
    background: #eee;
    font-family: Segoe UI;
}
```

* **Alguna línea de código HTML que se aplique.**
```html
<div class="modal-header">
  <button type="button" class="close" data-dismiss="modal">&times;</button>
  <h4 id="H2" class="modal-title" runat="server">Error</h4>
 </div>
```

