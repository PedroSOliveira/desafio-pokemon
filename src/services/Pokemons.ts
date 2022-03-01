import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';
const limit = 20;

interface IPokeData {
    name: string,
    url: string
}

interface Props extends IPokeData {
    id: any
}

export const ServiceApiPokemons = {

    createUser: async ({ name, url }: IPokeData) => {
        try {
            const response = await axios.post(`${BASE_URL}`, { name, url, limit });

            return response;
        } catch (error: any) {
            throw new Error(error.message);
        }
    },

    getAllPokemons: async () => {
        try {
            const response = await axios.get(`${BASE_URL}/pokemon`);

            return response;
        } catch (error: any) {
            throw new Error(error.message);
        }
    },

    editUser: async ({ id, name, url }: Props) => {
        try {
            const response = await axios.put(`${BASE_URL}/edit/${id}`, { name, url });

            return response;
        } catch (error: any) {
            throw new Error(error.message);
        }
    },

    getPokemon: async (name: string) => {
        try {
            const response = await axios.get(`${BASE_URL}/pokemon/${name}`);

            return response;
        } catch (error: any) {
            throw new Error(error.message);
        }
    },


};