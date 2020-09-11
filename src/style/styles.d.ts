import "styled-components";

declare module "styled-components" {
    
    export interface DefaultTheme {
        title: string;
        colors: {
            primary: string;
            secundary: string;
            third : string;

            background: {
                primary: string;
                secundary: string;
            },

            text: string;
        }
    }

}