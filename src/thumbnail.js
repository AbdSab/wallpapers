const sharp = require('sharp');
const fs = require('fs');
const test = async () => {
    const files = fs.readdirSync('data/nature/full');
    for(let file of files) {
        await sharp('data/nature/full/' + file)
            .resize({
                width: 200,
                height: 400,
                fit: sharp.fit.fill
            })
            .sharpen()
            .toFile('data/nature/thumb/'+file)
            .then(info => {
                console.log(info);
            })
            .catch(err => {
                console.log(err);
            });
    }
};

test();
