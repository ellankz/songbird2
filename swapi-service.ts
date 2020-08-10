class SwapiService {

    private  _apiBase = 'https://swapi.co/api';

    private async getResource(url){
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok){
            throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`);
        }

        return await res.json();
    }

    public async getAllPeople(){
        const res = await this.getResource(`/people/`);
        return res.results;
    }

    public getPerson(id){
        return this.getResource(`/people/${id}`);
    }
}

export default SwapiService;