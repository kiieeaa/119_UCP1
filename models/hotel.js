module.exports = (sequelize, DataTypes) => {
    const hotel = sequelize.define("Tentrem", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Tipe_Kamar: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Kapasitas_Tamu: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Lantai: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Fasilitas: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Tanggal_Pesan: {
            type: DataTypes.DATE,
            allowNull: false
        }


    }, {
        tableName: "hotel",
        freezeTableName: true,
        timestamps: true
    });
    return hotel;
};