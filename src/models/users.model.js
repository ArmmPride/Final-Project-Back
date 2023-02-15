// NPM Modules
import { Model } from 'objection';

// Local Modules
import Status from '../enum/status.enum';
import Role from '../enum/role.enum';

class UsersModel extends Model {
    static get idColumn() { return 'id'; }

    static get tableName() { return 'users'; }

    static get jsonSchema() {
        return {
            type: 'object',
            // required: ['fullname', 'status'],
            properties: {
                id: { type: 'integer' },
                fullname: { type: 'string', minLength: 1, maxLength: 255 },
                username: { type: 'string', minLength: 5, maxLength: 255 },
                password: { type: 'string', minLength: 3, maxLength: 255 },
                position: { type: 'string', minLength: 1, maxLength: 255 },
                picture: { type: 'string', minLength: 1, maxLength: 255 },
                role: { type: 'string', enum: Object.values(Role) },
                status: { type: 'string', enum: Object.values(Status) }
            }
        };
    }

    $formatJson(json) {
        json = super.$formatJson(json);
        delete json.password;
        return json;
    }

    $beforeInsert() {
        const date = new Date();
        this.created_at = date;
    }

    $beforeUpdate() {
        const date = new Date();
        this.updated_at = date;
    }

    // Methods
    static getOneOrFail(id) {
        return UsersModel.query().findById(id).throwIfNotFound();
    }

    static getById(id){
        console.log(id);
        return UsersModel.query().findById(id);
    }

    static create(payload) {
        return UsersModel.query().insert(payload);
    }

    static edit(id, update) {
        console.log(update,'update');
        return UsersModel.query().update(update).where({id}).returning('*');
    }
    
    static update(id, status){
        return UsersModel.query()
            .update({ status })
            .where('id', '=', id)
            .returning('*');
    }
    

    static findByUsername(username) {
        return UsersModel.query().findOne({ username });
    }

    static  fullList(){
        return  UsersModel.query()
            .select('*')
            .orderBy('id');
    }

    static list(){
        return UsersModel.query()
            .select('id',
                'fullname',
                'picture',
                'position',
                'status'
            ).orderBy('id')
            .where(builder => builder
                .where('status', '=', 'active')
                .andWhere('role', '=', 'member')
            );
    }

    static delete (id) {
        return UsersModel.query().select('*').where('id','=',id).del().returning('*');
    }
    
}

export default UsersModel;
