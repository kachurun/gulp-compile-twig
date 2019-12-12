const through = require('through2');
const Twig = require('twig');
const gutil = require('gulp-util');
const merge = require('merge');

const PluginError = gutil.PluginError;

module.exports = function(opt) {
    function transform(file, enc, cb) {
        if (file.isNull()) {
            return cb(null, file);
        }

        if (file.isStream()) {
            return cb(new PluginError('gulp-compile-twig', 'Streaming not supported'));
        }

        const options = merge({
            twig: 'twig'
        }, opt);

        let data;

        try {
            // Reset all caches
            Twig.cache();

            const template = Twig.twig({
                id: file.relative,
                data: file.contents.toString('utf8')
            });

            data = template.compile(options);
        }
        catch (err) {
            return cb(new PluginError('gulp-compile-twig', err));
        }

        file.contents = new Buffer(data);
        file.path = `${ file.path }.js`;

        cb(null, file);
    }

    return through.obj(transform);
};
