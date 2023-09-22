import {Sequelize} from 'sequelize'

const db = new Sequelize('blogs','admin','desarrollo',{
host:'database-2.cxjp2rs6u4hm.us-east-1.rds.amazonaws.com',
dialect:'mysql'
})

export default db