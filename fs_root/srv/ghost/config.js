// # Ghost Configuration
// Setup your Ghost install for various [environments](http://support.ghost.org/config/#about-environments).

// Ghost runs in `development` mode by default. Full documentation can be found at http://support.ghost.org/config/

var path = require('path'),
    config;

config = {
    // ### Production
    // When running Ghost in the wild, use the production environment.
    // Configure your URL and mail settings here
    production: {
        url: 'http://blockdev.io',
        mail: {
            from: '"blockdev.io" <no-reply@blockdev.io>',
            transport: 'SMTP',
            options: {
                service: 'Mailgun',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS
                }
            }
        },
        database: {
            client: 'mysql',
            connection: {
                host     : process.env.BLOG_DB_PORT_3306_TCP_ADDR,
                user     : 'root',
                password : process.env.BLOG_DB_ENV_MYSQL_ROOT_PASSWORD,
                database : 'ghost',
                charset  : 'utf8'
            }
        },
        server: {
            host: '0.0.0.0',
            port: '2368'
        }
    },

    // ### Development **(default)**
    development: {
        url: 'http://localhost:2368',
        database: {
            client: 'mysql',
            connection: {
                host     : process.env.BLOG_DB_PORT_3306_TCP_ADDR,
                user     : 'root',
                password : process.env.BLOG_DB_ENV_MYSQL_ROOT_PASSWORD,
                database : 'ghost',
                charset  : 'utf8'
            }
        },
        server: {
            host: '0.0.0.0',
            port: '2368'
        },
        paths: {
            contentPath: path.join(__dirname, '/content/')
        }
    },

    // **Developers only need to edit below here**

    // ### Testing
    // Used when developing Ghost to run tests and check the health of Ghost
    // Uses a different port number
    testing: {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-test.db')
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        },
        logging: false
    },

    // ### Testing MySQL
    // Used by Travis - Automated testing run through GitHub
    'testing-mysql': {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'mysql',
            connection: {
                host     : '127.0.0.1',
                user     : 'root',
                password : '',
                database : 'ghost_testing',
                charset  : 'utf8'
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        },
        logging: false
    },

    // ### Testing pg
    // Used by Travis - Automated testing run through GitHub
    'testing-pg': {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'pg',
            connection: {
                host     : '127.0.0.1',
                user     : 'postgres',
                password : '',
                database : 'ghost_testing',
                charset  : 'utf8'
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        },
        logging: false
    }
};

module.exports = config;
