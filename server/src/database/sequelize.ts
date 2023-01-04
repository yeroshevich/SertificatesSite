const {DATABASE, USER, PASSWORD, HOST} = require('../config/index')

const {DataTypes} = require('sequelize')
const Sequelize = require('sequelize')

 const sequelize = new Sequelize(
  //  'sertificateDB',
  //  'root',
  //  'root',
  // {
  //   host:'localhost',
  //   dialect:'mysql'
  // }
   DATABASE,
   USER,
   PASSWORD,
   {
     host:HOST,
     port:3306,
     dialect:'mysql'
   }
)
 const modelOptions = {
  freezeTableName:true,
  timestamps:false
}
export const ConfigPage = sequelize.define('page',{
  idPage:{
    type:DataTypes.BIGINT,
    primaryKey:true,
    allowNull:false,
    autoIncrement:true
  },
  title:{
    type:DataTypes.STRING,
    allowNull:false
  }
},modelOptions)
export const ConfigModel = sequelize.define('config',{
  idConfig:{
    type:DataTypes.BIGINT,
    primaryKey:true,
    allowNull:false,
    autoIncrement:true
  },
  config:{
    type:DataTypes.JSON,
    allowNull:false,
    get() {
      return JSON.parse(this.getDataValue("config"));
    },
    set(value) {
       this.setDataValue("config", JSON.stringify(value));
    }
  }
},modelOptions)
export const UserModel = sequelize.define('user',{
  idUser:{
    type:DataTypes.BIGINT,
    primaryKey:true,
    allowNull:false,
    autoIncrement:true
  },
  username:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  password:{
    type:DataTypes.STRING,
    allowNull:false
  }
},modelOptions)
UserModel.hasMany(ConfigModel,{
  foreignKey:{
    name:'userId',
    allowNull:false
  }
})
ConfigModel.belongsTo(UserModel,{
  foreignKey:{
    name:'userId',
    allowNull:false
  }
})
ConfigPage.hasOne(ConfigModel,{
  foreignKey:{
    name:'pageId',
    allowNull:false
  }
})
ConfigModel.belongsTo(ConfigPage,{
  foreignKey:{
    name:'pageId',
    allowNull:false
  }
})

const connecting = ()=>{
  sequelize.authenticate()
    .then(()=>{
      console.log(`Database connected db=${DATABASE}  user=${USER} host=${HOST} password=${PASSWORD} = `)
    })
    .catch((error)=>{
      console.log(`Database wasnt connected db=${DATABASE}  user=${USER} host=${HOST} password=${PASSWORD} = `+error)
      const testCOn = new Sequelize(
        DATABASE,
        USER,
        PASSWORD,
        {
          host:HOST,
          port:3307,
          dialect:'mysql'
        }
      )
      testCOn.authenticate()
        .then(()=>{
          console.log('testCon DataBase was connected db=${DATABASE}  user=${USER} host=${HOST} password=${PASSWORD}')
        })
        .catch((error)=>{
          console.log(`db with 3307 isnt work`+error)

        })
    })

}
connecting()
sequelize.sync().then(()=>{
  console.log('tables was created')
}).catch(e=>{
  console.log('when be creating table something was wrong = '+ e)
})
