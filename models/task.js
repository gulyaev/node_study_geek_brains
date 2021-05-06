const mysql = require('mysql');

const pool = mysql.createPool({
    host: '127.0.0.1',
    database: 'todolist',
    user: 'root',
    password: 'mysql'
});

class Task {
    static getAll() {
        return new Promise((resolve, reject)=>{
            pool.getConnection((err, connection) => {
                if (err) {
                    reject(err);
                }
    
                connection.query('SELECT * tasks WHERE 1', (err, rows) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(rows);
                    connection.release();
                });
            });
        });
    }

    static add(task) {
        return new Promise((resolve, reject)=>{
            pool.getConnection((err, connection) => {
                if (err) {
                    reject(err);
                }
                //INSERT INTO tasks SET id=1, title='Новая задача'
                connection.query('INSERT INTO tasks SET ?', task, (err, result) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(result.insertId);
                    connection.release();
                });
            });
        });
    }

    static update(task) {

    }

    static complete(id) {

    }

    static delete(id) {

    }
}

module.exports = Task;