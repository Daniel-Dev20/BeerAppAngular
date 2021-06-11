
export interface Beer {

    nombre:string;
    alcohol:string;
    bio:string,
    ingredientes:string[];
    year:number;
    fabricante:string;
    origen:string;
    img:string;
}


export const beers:Beer[] = [

    {
        nombre:'Pilsener',
        alcohol: '4.4%',
        bio: `
        Cerveza Pilsener es una cerveza salvadoreña tipo lager producida por la compañía Industrias La Constancia.
        Pilsener nació en la ciudad de Santa Ana en 1906 de la mano de Industrias La Constancia, que es la cervecería más grande de El Salvador. El proceso de creación tanto de la imagen como de la elaboración de la cerveza surge bajó la organización del empresario salvadoreño Rafael Meza Ayau.
        `,
        ingredientes: [
            'Granos de cebada malteada',
            'Lúpulo',
            'Levadura de cerveza',
            'Agua tratada especialmente para el proceso cervecero'
        ],
        year: 1906,
        fabricante: 'Industria la constancia',
        origen: 'El Salvador',
        img: 'assets/img/pilsener.png'


    },
    {
        nombre:'Regia',
        alcohol: '4.8%',
        bio: `
        Cerveza Regia es producida en El Salvador desde 1959. Es una exquisita cerveza de sabor intenso, con 4.8° de alcohol por volumen, elaborada cuidadosamente mediante un largo proceso de maduración para el deleite de nuestros consumidores.
        `,
        ingredientes: [
            'Granos de cebada malteada',
            'Lúpulo',
            'Levadura de cerveza',
            'Agua tratada especialmente para el proceso cervecero'
        ],
        year: 1959,
        fabricante: 'Industria la constancia',
        origen: 'El Salvador',
        img: 'assets/img/regia.jpg'


    },
    
    {
        nombre:'Corona',
        alcohol: '4.5',
        bio: `
        En 1926, la fábrica inició la producción de Corona en su presentación de "cuartos" de botella y desistió del proyecto de envasar esta cerveza en botella oscura para favorecer la conservación de sus aceites esenciales del lúpulo, ya que al público le agradaba más su envase transparente. La botella de Corona es en la actualidad fácilmente reconocible por su logo y estampado, el indicando el nombre de la marca y su leyenda "la cerveza más fina".

        En 1935 esta compañía comienza a crear por primera vez sus anuncios comerciales, al mismo tiempo que la modernización de carreteras en México. En 1950 se inicia la llamada "Caravana Corona”, fue el primer promocional de la empresa; a la par de la modernización del país. Cinco años después, surge el Corona Extra, uno de sus primeros patrocinios con equipos deportivos y eventos importantes. En 1964 el Corona Extra presenta al público la cerveza para hogares, también conocida como la “cerveza social”.
        `,
        ingredientes: [
            'Malta',
            'Agua',
            'Lúpulo',
            'levadura'
        ],
        year: 1926,
        fabricante: 'Grupo Modelo',
        origen: 'México',
        img: 'assets/img/coronita.png'


    },
    {
        nombre:'Golden',
        alcohol: '4.0',
        bio: `
        Cerveza Golden se lanzó al mercado salvadoreño en 1990, como una cerveza ligera, de sabor suave y refrescante, siendo la primera de este tipo en el país. Golden es preferida por sus consumidores por su característico sabor suave y refrescante, gracias a su proceso de filtrado en frío.
        `,
        ingredientes: [
            'Malta',
            'Agua',
            'Lúpulo',
            'levadura'
        ],
        year: 1990,
        fabricante: 'La constancia',
        origen: 'El Salvador',
        img: 'assets/img/golden.png'


    },
    {
        nombre:'Santa Cruz',
        alcohol: '5.0%',
        bio: `
        La Constancia orgullosamente celebra una de las más grandes distinciones otorgada a su cerveza Santa Cruz 1906, que recientemente recibió la medalla de oro en Monde Selection 2020, una competencia que premia la calidad y excelencia en el proceso de elaboración de los productos que se presentan. Santa Cruz 1906
        `,
        ingredientes: [
            'Malta de cebada',
            'Lúpulo'
        ],
        year: 1906,
        fabricante: 'La constancia',
        origen: 'El Salvador',
        img: 'assets/img/santa-cruz.png'


    },
    {
        nombre:'Suprema',
        alcohol: '5.0%',
        bio: `
        Cerveza Suprema fue lanzada al mercado salvadoreño en el año 1967, como una marca Premium, en la cual se conjuga la tradición cervecera con un estilo único de elegancia y sabor europeo. El sabor de calidad internacional la hace distinta las demás y ha logrado que, a través de los años y hasta la fecha, sea la preferida de los conocedores de cerveza.
        `,
        ingredientes: [
            'Malta',
            'Agua',
            'Lúpulo',
            'levadura'
        ],
        year: 1967,
        fabricante: 'La constancia',
        origen: 'El Salvador',
        img: 'assets/img/suprema.png'


    },
    {
        nombre:'Budweiser',
        alcohol: '4.0',
        bio: `
        Budweiser (Anheuser-Busch) es una cerveza de origen checo, patentada en los Estados Unidos y una de las más populares en dicho país. Budweiser se hace con una proporción de arroz1​ de hasta un 30%, además de lúpulo y malta de cebada. Budweiser se produce en varias fábricas. Es una cerveza filtrada disponible en forma de barril y envasado.
        `,
        ingredientes: [
            'Malta',
            'Agua',
            'Lúpulo',
            'levadura'
        ],
        year: 1876,
        fabricante: 'Anheuser-Busch',
        origen: 'Estados Unidos',
        img: 'assets/img/busweiser.png'


    },
    {
        nombre:'Toña',
        alcohol: '4.6',
        bio: `
        La Cerveza Toña es una de las marcas más conocidas del mercado nicaragüense. Nació en 1977, ahora está disponible no solo en Nicaragua, sino también en los Estados Unidos, Honduras y en Costa Rica.
        `,
        ingredientes: [
            'Malta',
            'Agua',
            'Lúpulo',
            'levadura'
        ],
        year: 1977,
        fabricante: 'Compañía Cervecera de Nicaragua',
        origen: 'Nicaragua',
        img: 'assets/img/toña.jpg'


    },
    {
        nombre:'Modelo',
        alcohol: '4.0',
        bio: `
        Modelo Especial, es una marca premium producida por Grupo Modelo que es líder entre las cervezas en lata en México y ocupa el tercer lugar entre las cervezas importadas más populares en Estados Unidos. Es una cerveza tipo American pilsner, muy diferente, llena de actitud e imagen
        `,
        ingredientes: [
            'Malta',
            'Agua',
            'Lúpulo',
            'levadura'
        ],
        year: 1925,
        fabricante: 'Grupo Modelo',
        origen: 'México',
        img: 'assets/img/modelo.png'


    },
    {
        nombre:'Stella Artois',
        alcohol: '5.4%',
        bio: `
        En 1926, Stella Artois se lanzó inicialmente como una cerveza de temporada, especialmente para el mercado de las vacaciones de Navidad. Fue tal el éxito comercial de la marca que a partir de la Segunda Guerra Mundial se comercializa todo el año. La primera cerveza Stella Artois que se exportó al mercado europeo fue en 1930. En 1960, se produjeron 1 millón de hectolitros de Stella Artois
        `,
        ingredientes: [
            'Malta',
            'Agua',
            'Lúpulo',
            'levadura'
        ],
        year: 1926,
        fabricante: 'InBev',
        origen: 'Bélgica',
        img: 'assets/img/stella.png'


    },
    {
        nombre:'Bud Light',
        alcohol: '4.2%',
        bio: `
        Bud Light es la segunda cerveza más vendida a nivel internacional y la cerveza light de mayor venta en el mundo.

        Fue lanzada al mercado como "Budweiser Light" en 1982 y contiene 4.2º de alcohol y 110 calorías por cada 355 mililitros, por lo que se cataloga como una cerveza light.
        `,
        ingredientes: [
            'Malta',
            'Agua',
            'Lúpulo',
            'levadura'
        ],
        year: 1982,
        fabricante: 'Grupo Modelo',
        origen: 'Estados Unidos',
        img: 'assets/img/bud.jpg'


    },
    {
        nombre:'Michelob Ultra',
        alcohol: '4.2%',
        bio: `
        Michelob Ultra es una cerveza lager originaría de Estados Unidos. Cuenta con tan solo 95 calorías y 2.6 g de carbohidratos. Se caracteriza por su ligereza, su color dorado claro y sus notas sutiles de cítricos. Las maltas de Munich y lúpulos europeos son lo que dan cuerpo y la vuelven refrescante.
        `,
        ingredientes: [
            'Malta',
            'Agua',
            'Lúpulo',
            'levadura'
        ],
        year: 2019,
        fabricante: 'Grupo Modelo',
        origen: 'Estados Unidos',
        img: 'assets/img/michelob.png'


    }
]