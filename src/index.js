/*fetch('https://swapi.dev/api/people/1/')
.then(response => response.json())
.then(result => console.log(result))
.catch(error => console.log(error));
*/
class SwapiService {
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
    return result.results;
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
    return result.results;
   }

   async getPlanet (id) {
    const result = await this.getResourse(`/planets/${id}`);
    return result;
   }
}

const swapi = new SwapiService();
swapi.getPlanet(3).then(result => console.log(result));
