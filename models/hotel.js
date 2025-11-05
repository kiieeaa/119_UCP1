module.exports = (sequelize, DataTypes) => {
    const hotel = sequelize.define("hotel", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nama: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nik: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        deskripsi: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    }, {
        tableName: "hotel",
        freezeTableName: true,
        timestamps: true
    });
    return hotel;
};