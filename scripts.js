

// const options = {
//   showPoint: false, // Por defecto: true | Muestra los puntos de la gráfica
//   lineSmooth: false, // Por defecto: true | Hace curvas en la unión entre puntos
//   axisX: {
//     showGrid: true, // Por defecto: true | Muestra los grids que se apoyan sobre el eje
//     showLabel: true, // Por defecto: true | Muestra las etiquetas de un eje
//   },
//   axisY: {
//     scaleMinSpace: 20, // Por defecto: 20 | Espacio mínimo de separación entre pasos del eje
//     offset: 30, // Por defecto: 40 | Separación de la gráfica con respecto al eje
//     labelInterpolationFnc: (value) => `${value}h.`, // Función para modificar los labels de los ejes
//   },
// };
// new Chartist.Line(selector, starWarsData);

// new Chartist.Line(selector, starWarsData, options);

const urlFilms = "https://swapi.dev/api/films/";

const transformDate = (str) => Number(str.slice(0, 4))

let titlesData = []
let yearsData = []

function getFilms() {
    fetch(urlFilms)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            titlesData = data.results.map((ele) => {
                return ele.title

            });

            yearsData = data.results.map((ele) => {

                return transformDate(ele.release_date)

            });
            const selector = '#chart';
            const starWarsData = {

                labels: titlesData,
                series: [
                    yearsData,
                ],

            }
            new Chartist.Line(selector, starWarsData)

        });

};

getFilms()


const urlCharacters = "https://swapi.dev/api/people/"

function getCharacter() {
   return fetch(urlCharacters)
        .then(res => res.json())
        .then((apiData) => {
            console.log(apiData)
            const formattedData = apiData.results.map((ele) => {
                return {
                    name: ele.name,
                    films: ele.films.length
                }

            });
            console.log(formattedData)
         
           
            const selector = "#character-chart";
            const characterData =
                formattedData.map((ele) => {
                    console.log("estos son los elementos=>",ele)
                return {
                    labels : ele.name,
                    series : 
                        ele.films,
                    
                }    
                    });


            new Chartist.Line(selector, characterData)

            console.log("esta es la data",characterData)
        });
       
};



getCharacter()



