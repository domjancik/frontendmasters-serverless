const movies = require('../data/movies.json');

exports.handler = async event => {
    const { id } = event.queryStringParameters;
    const movie = movies.find(({ id: movieId }) => movieId === id);

    if (!movie) {
        return {
            statusCode: 404
        }
    }

    return {
        statusCode: 200,
        body: JSON.stringify(movie),
    }
}