import app from './app';
import { startConnection } from './config/database';


async function main() {
    try{
        await startConnection();
        await app.listen(app.get('port')); 
        console.log('Server on port', app.get('port'));
    }catch(e) {
        console.error(e);
    }
}

main();