import redis from 'redis';

const redisClient = redis.createClient();

redisClient.on('connect', () => {
    console.log('Conectado ao Redis!');
});

await redisClient.connect();