const sharp = require('sharp');
const fs = require('fs')
const categories = fs.readdirSync('data');

const test = async () => {
    for(const category of categories) {
        const files = fs.readdirSync('data/'+category+'/full');
        for (let file of files) {
            await sharp('data/'+category+'/full/' + file)
                .resize({
                    width: 200,
                    height: 400,
                    fit: sharp.fit.fill
                })
                .sharpen()
                .toFile('data/'+category+'/thumb/' + file)
        }
    }
};

test();
