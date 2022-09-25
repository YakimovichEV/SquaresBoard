import axios from "axios";

interface GameMode {
    name: string;
    field: number;
}

export const getPresetsGameMode = async () => {
    try {
        const configAPI = await axios.get<GameMode[]>(
            "https://demo7919674.mockable.io/"
        );

        return configAPI.data;
    } catch (error: unknown) {
        throw new Error("An error has occured " + error);
    }
};
