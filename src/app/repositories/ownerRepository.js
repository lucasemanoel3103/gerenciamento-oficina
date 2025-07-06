import { where } from "sequelize";
import Owner from "../models/Owner";

class OwnerRepository {
    findAll(){
        return Owner.findAll()
    }
    findById(id){
        return Owner.findByPk(id)
    }
    create(owner){
        return Owner.create(owner)
    }
    update(owner, id){
        return Owner.update(owner, {
            where: {id}
        });
    }
    delete(id){
        return Owner.destroy({
            where: {id}
        })
    }
}

export default new OwnerRepository()