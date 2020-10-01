const content = {
    
        "name": "Utapau",
        "rotation_period": "27",
        "orbital_period": "351",
        "diameter": "12900",
        "climate": "temperate, arid, windy",
        "gravity": "1 standard",
        "terrain": "scrublands, savanna, canyons, sinkholes",
        "surface_water": "0.9",
        "population": "95000000",
        "residents": [
            "http://swapi.dev/api/people/83/"
        ],
        "films": [
            "http://swapi.dev/api/films/6/"
        ],
        "created": "2014-12-10T12:49:01.491000Z",
        "edited": "2014-12-20T20:58:18.439000Z",
        "url": "http://swapi.dev/api/planets/12/"
    }

const resident =  {
    "name": "Tion Medon",
    "height": "206",
    "mass": "80",
    "hair_color": "none",
    "skin_color": "grey",
    "eye_color": "black",
    "birth_year": "unknown",
    "gender": "male",
    "homeworld": "http://swapi.dev/api/planets/12/",
    "films": [
        "http://swapi.dev/api/films/6/"
    ],
    "species": [
        "http://swapi.dev/api/species/37/"
    ],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-20T20:35:04.260000Z",
    "edited": "2014-12-20T21:17:50.498000Z",
    "url": "http://swapi.dev/api/people/83/"
}

const output = document.getElementById('output');
output.innerHTML = "<b>Planet Name</b>: "+ content.name + "<br><b>Diameter</b>: "+content.diameter+"<br><b>Climate</b>: "+content.climate+"<br><b>Population</b>: "+content.population+"<br><b>Resident</b>: "+resident.name+"<br><b>Gender</b>: "+resident.gender;