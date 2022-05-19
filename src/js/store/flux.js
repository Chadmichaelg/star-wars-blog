// export default getState;

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters: [],
			character: [],
			planets: [],
			planet: [],
			starships: [],
			starship: [],
			favorites: [],
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadCharacters: () => {
				fetch("https://www.swapi.tech/api/people")
					.then(res => res.json())
					.then(data => {
						console.log(data)
						 setStore({characters:data.results})})
					.catch(err => console.error(err))
				},
			loadCharacter: (id) => {
				fetch(`https://www.swapi.tech/api/people/${id}`)
					.then(res => res.json())
					.then(data => {
						console.log(data)
						setStore({character:data.result.properties})})
					.catch(err => console.error(err))
				},
			loadPlanets: () => {
				fetch(`https://www.swapi.tech/api/planets`)
					.then(res => res.json())
					.then(data => {
						console.log(data)
						setStore({planets:data.results})})
					.catch(err => console.error(err))
				},
			loadPlanet: (id) => {
				fetch(`https://www.swapi.tech/api/planets/${id}`)
					.then(res => res.json())
					.then(data => {
						console.log(data)
						setStore({planet:data.result.properties})})
					.catch(err => console.error(err))
				},
			loadStarships: () => {
				fetch(`https://www.swapi.tech/api/starships`)
					.then(res => res.json())
					.then(data => {
						console.log(data)
						setStore({starships:data.results})})
					.catch(err => console.error(err))
				},
			loadStarship: (id) => {
				fetch(`https://www.swapi.tech/api/starships/${id}`)
					.then(res => res.json())
					.then(data => {
						console.log(data)
						setStore({starship:data.result.properties})})
					.catch(err => console.error(err))
				},

			favoritesInfo: item => {
				console.log(item)
				let myFavorites = getStore().favorites;
				let selected = myFavorites.find(element => element === item);
					if (selected) {
						myFavorites = myFavorites.filter(element => item !== element);
						setStore({ favorites: myFavorites });
					} else {
						myFavorites = [...myFavorites, item];
						setStore({ favorites: myFavorites });
					}},
			},
			
		}
	};

	export default getState