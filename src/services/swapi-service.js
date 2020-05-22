export default class SwapiService {
    _apiHost = 'https://swapi.dev/api';
    async getResourse(url) {
      const response = await fetch(`${this._apiHost}${url}`);
      if (!response.ok) {
        throw new Error(`Could not fetch ${response.status}`)
      } 
      return await response.json();
    }
    
    async getAllPeople () {
      const result = await this.getResourse('/people/');
      return result.results.map(this._transformPeople);
    }
    async getPerson (id) {
     return await this.getResourse(`/people/${id}`);
    }
  
    async getAllStarships () {
     const result = await this.getResourse('/starships/');
     return result.results;
    }
  
    async getStarship(id) {
      return await this.getResourse(`/starships${id}`);
    }
  
    async getAllPlanets () {
      const result = await this.getResourse('/planets/');
      return result.results.map(this._transformPlanet);
    
     }
  
     async getPlanet (id) {
      const result = await this.getResourse(`/planets/${id}`);
      return this._transformPlanet(result);
     }
     _extractId = (item) => {
      const idRegExp = /\/([0-9]*)\/$/;
      return item.url.match(idRegExp)[1];
     }
     _transformPlanet = (planet) => {
         return {
                id:this._extractId(planet),
                name: planet.name,
                population: planet.population,
                rotationPeriod: planet.rotation_period,
                diameter: planet.diameter
            }
     }

     _transformPeople = (people) => {
      return {
             id:this._extractId(people),
             name: people.name,
             height: people.height,
             mass: people.mass,
             hair_color: people.hair_color,
             skin_color:people.skin_color
         }
  }
  }
  
  
  