import { DataSource } from "typeorm";

export const databaseProvider = [{
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource({
                    type: 'postgres',
                }
            )
        }
    }
]