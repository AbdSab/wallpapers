const fs = require('fs');

const categories = fs.readdirSync('data');

for(let category of categories) {
    const files = fs.readdirSync('data/'+category+'/full');
    const json = files.map(file => ({
        thumb: '/thumb/'+file,
        full: '/full/'+file,
    }));
    fs.writeFileSync('data/'+category+'/api.json', JSON.stringify(json));
}
